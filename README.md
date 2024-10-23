# **ResumeX**  
**Smart Insights for Smarter Resumes**  

## **Overview**  
ResumeX is a web-based application designed to assist users in creating, analyzing, and optimizing resumes. With integrated resume analysis, ATS scoring, and personalized cover letter generation, ResumeX ensures job applicants can improve their chances of landing jobs. The project leverages **React** for the frontend, **Flask** for the backend, and integrates **OpenAI's API** to provide advanced feedback and content generation.

---

## **Features**  
1. **Resume Analysis:**  
   - Upload your resume and receive detailed insights into key skills, projects, and formatting improvements.  

2. **Cover Letter Generator:**  
   - Generate a personalized cover letter based on your resume and a given job description.  

3. **ATS Compatibility Checker:**  
   - Upload your resume and a job description to receive an ATS score with recommendations for improvement.  

4. **Resume Builder:**  
   - Create a professional resume by entering personal details into the builder tool.  


---

## **Technologies Used**  
- **Frontend:** React (Vite)  
- **Backend:** Flask  
- **API Integration:** OpenAI API  
- **UI/Design:** Glassmorphism styling 
- **Animations:** Framer Motion for smooth transitions  

---

## **Installation**  

### **Prerequisites**  
- Node.js  
- Python 3.x  
- OpenAI API Key  

### **Clone the Repository**  
```bash
git clone https://github.com/waleedbahakim/resumex.git
cd resumex

---

### **FrontEnd Setup** 
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev

---

### **BackendEnd Setup** 
# Navigate to the backend directory
cd backend

# Create a virtual environment 
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install required dependencies
pip install -r requirements.txt

# Set your OpenAI API key
export OPENAI_API_KEY='your-api-key'  # On Windows: set OPENAI_API_KEY='your-api-key'

# Run the Flask server
python app.py

---

## **Usage**  
1. **Upload Resume:**  
   - Start by uploading your resume on the Upload Page.  

2. **Analyze Results:**  
   - View key insights and receive recommendations on how to improve your resume.  

3. **Generate Cover Letter:**  
   - Provide a job description to create a tailored cover letter.  

4. **Check ATS Score:**  
   - Upload the resume and job description to get an ATS score.  

5. **Build Resume:**  
   - Use the Resume Builder to create a resume from scratch.


