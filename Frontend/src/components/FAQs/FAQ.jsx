import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

function FAQsSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What is ResumeX?",
      answer:
        "ResumeX is a comprehensive platform designed to enhance your resume through advanced analysis, personalized feedback, and ATS optimization.",
    },
    {
      question: "How do I upload my resume?",
      answer:
        "Simply navigate to the 'Upload' section on our homepage, select your resume file, and click 'Submit' for analysis.",
    },
    {
      question: "What types of files can I upload?",
      answer:
        "You can upload resumes in PDF, DOCX, and TXT formats for analysis.",
    },
    {
      question: "What feedback will I receive?",
      answer:
        "You'll receive detailed insights on formatting, keyword usage, ATS compatibility, and suggestions for improvement based on industry standards.",
    },
    {
      question: "Can ResumeX help with cover letters?",
      answer:
        "Yes! ResumeX offers a cover letter generation tool that creates tailored cover letters based on your resume and job descriptions.",
    },
    {
      question: "What is the Resume Builder feature?",
      answer:
        "The Resume Builder allows you to create a professional resume from scratch by providing your information in an easy-to-use form. You can customize your layout and content to fit your needs.",
    },
    {
      question: "How does the Resume Scanner work?",
      answer:
        "The Resume Scanner analyzes your uploaded resume and provides feedback on ATS compatibility, highlighting areas for improvement to increase your chances of getting noticed by recruiters.",
    },
    {
      question: "What are personalized interview questions?",
      answer:
        "ResumeX generates personalized interview questions based on your resume content and the job you're applying for, helping you prepare effectively for interviews.",
    },
    {
      question: "Is my information safe?",
      answer:
        "Absolutely! We prioritize your privacy and ensure all data is securely stored and used solely for analysis purposes.",
    },
    {
      question: "Do I need an account to use ResumeX?",
      answer:
        "No account is required for basic resume analysis. However, creating an account provides access to additional features like saved analyses and progress tracking.",
    },
    {
      question: "How often should I update my resume?",
      answer:
        "It's a good practice to update your resume regularly, especially after completing new projects, obtaining certifications, or changing jobs.",
    },
  ];

  return (
    <Container
      style={{
        marginTop: "50px",
        padding: "40px 20px",
        background: "rgba(255, 255, 255, 0.15)", // Glassmorphic background
        backdropFilter: "blur(15px)", // Background blur effect
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
      }}
      id="faqs"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            style={{
              background: "rgba(255, 255, 255, 0.7)", // Softer glassmorphic effect
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", // Box shadow for better visibility
              margin: "10px 0",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.5)", // Border for clear card visibility
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h6" style={{ color: "#ff4081" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="body2" style={{ color: "#555" }}>
                  {faq.answer}
                </Typography>
              </motion.div>
            </AccordionDetails>
          </Accordion>
        ))}
      </motion.div>

      {/* Blob Shape for background */}
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(167, 119, 227, 0.5), transparent)",
          borderRadius: "50%",
          filter: "blur(150px)",
          zIndex: 0,
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -30%)",
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 8, loop: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </Container>
  );
}

export default FAQsSection;
