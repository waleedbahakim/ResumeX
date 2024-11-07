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

        # Generate suggestions for improvement
        improvement_suggestions = generate_suggestions(pdf_text, job_description, similarity_score)

        return jsonify({
            "similarity": similarity_score,
            "suggestions": improvement_suggestions
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500

def calculate_similarity(resume_text, jd_text):
    """Calculate similarity score using spaCy."""
    resume_doc = nlp(resume_text)
    jd_doc = nlp(jd_text)
    return round(resume_doc.similarity(jd_doc) * 100, 2)

def generate_suggestions(resume_text, jd_text, similarity_score):
    """Generate improvement suggestions based on ATS score and content matching."""
    resume_doc = nlp(resume_text)
    jd_doc = nlp(jd_text)

    # Extract keywords and skills from job description
    jd_keywords = {token.text.lower() for token in jd_doc if token.is_alpha and not token.is_stop}

    # Identify missing keywords in resume
    missing_keywords = [kw for kw in jd_keywords if kw not in resume_text.lower()]

    suggestions = []

    # 1. Keyword and Skill Matching
    if missing_keywords:
        suggestions.append({
            "type": "Skills",
            "message": "Consider adding the following skills or keywords from the job description to increase ATS compatibility.",
            "keywords": missing_keywords
        })

    # 2. Structure and Formatting
    if similarity_score < 70:
        suggestions.append({
            "type": "Structure",
            "message": "Consider restructuring sections in your resume to align with the job description. Make sure that key sections, like Work Experience, Skills, and Education, are clearly labeled and well-organized."
        })

    # 3. Use of Action Verbs
    action_verbs = ["managed", "led", "developed", "created", "designed"]
    missing_action_verbs = [verb for verb in action_verbs if verb not in resume_text.lower()]
    if missing_action_verbs:
        suggestions.append({
            "type": "Language",
            "message": "Enhance the impact of your resume by using strong action verbs. Try incorporating verbs like 'managed,' 'led,' or 'developed' to describe accomplishments.",
            "examples": missing_action_verbs
        })

    # 4. Quantifiable Achievements
    if not any(char.isdigit() for char in resume_text):
        suggestions.append({
            "type": "Achievements",
            "message": "Consider including quantifiable achievements (e.g., 'Increased sales by 20%' or 'Managed a team of 5') to make your resume more impactful."
        })

    # 5. Formatting for ATS
    suggestions.append({
        "type": "Formatting",
        "message": "Ensure your resume is ATS-friendly by avoiding graphics, tables, and complex formatting. Use simple text, standard fonts, and clear section headings."
    })

    return suggestions
