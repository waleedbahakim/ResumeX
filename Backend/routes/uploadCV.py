from flask import Flask, request, jsonify
from utils.conversation_utils import (
    create_conversation_and_add_files,
    get_conversation_status,
    ask_question,
)
import os

app = Flask(__name__)

# Global variables
conversation_id = ""
document_id = []

def init_app(app):
    @app.route("/uploadCV", methods=["POST"])
    def generate_CV():
        # Check if a file is part of the request
        if "file" not in request.files:
            return jsonify({"error": "No file part in the request"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"error": "No file selected"}), 400

        # Retrieve the text data for the job description
        text = request.form.get("text")
        if not text:
            return jsonify({"error": "No text provided"}), 400

        # Create temporary directory if it doesn't exist
        temp_dir = "temporary_directory"
        os.makedirs(temp_dir, exist_ok=True)

        # Save the file temporarily
        filename = os.path.join(temp_dir, file.filename)
        file.save(filename)

        try:
            # Open the saved file for reading
            with open(filename, "rb") as file_data:
                files = {file.filename: file_data}
                response = create_conversation_and_add_files(files)
                
                # Check for response validity
                if not response or not response.ok:
                    return jsonify({"error": "Failed to create conversation"}), 500
                
                global conversation_id  # Use global to maintain state
                conversation_id = response.json().get("id")
                print(f"Conversation created with id: {conversation_id}")

            # Get conversation status
            response_json, err = get_conversation_status(conversation_id)
            if err:
                print(f"Error occurred: {err}")
                return jsonify({"error": err}), 500

            # Prepare the query for generating the cover letter
            query = f"""
            Use the resume file of the user and this Job Description {text} to generate a Cover letter suitable for the role.
            """
            print(f"Query: {query}")
            
            # Update document_id for the next steps
            document_id.append(response_json.get("documents")[0].get("id"))
            print(f"Conversation id: {conversation_id}")
            print(f"Document id: {document_id}")

            # Ask a question to get the cover letter
            answer, err = ask_question(conversation_id, query, document_id)
            if err:
                print(f"Error getting an answer for document with id {document_id}, error: {err}")
                return jsonify({"error": err}), 500

            print(f"Answer for document with id {document_id}: {answer}")
            return jsonify({"answer": answer})

        finally:
            # Clean up the file after use
            if os.path.exists(filename):
                os.remove(filename)

# Remember to call init_app
if __name__ == "__main__":
    init_app(app)
    app.run(debug=True)
