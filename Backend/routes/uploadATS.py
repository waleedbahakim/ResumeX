from flask import Blueprint, request, jsonify
import spacy
from utils.pdf_utils import pdf  # Ensure correct import path

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

uploadATS = Blueprint("uploadATS", __name__)

@uploadATS.route("/uploadATS", methods=["POST"])
def process_ats():
    try:
        file = request.files["file"]
        pdf_text = pdf(file)  # Extract text from PDF
        job_description = request.form.get("text")

        # Process and calculate similarity
        similarity_score = calculate_similarity(pdf_text, job_description)

        return jsonify({
            "similarity": similarity_score,
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500

def calculate_similarity(resume_text, jd_text):
    """Calculate similarity score using spaCy."""
    resume_doc = nlp(resume_text)
    jd_doc = nlp(jd_text)
    return round(resume_doc.similarity(jd_doc) * 100, 2)

