import React from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiSearch,
  FiEdit,
  FiFileText,
  FiCheckSquare,
} from "react-icons/fi";

const FunctionalityPage = () => {
  const navigate = useNavigate();

  // Data for Cards
  const functionalities = [
    {
      title: "Resume Builder",
      description:
        "Create a professional resume from simple text input about yourself.",
      icon: <FiFileText size={50} color="#6a11cb" />,
      usage: "Input your details and generate a structured resume instantly.",
      route: "/resume-builder", // Correct Route
    },
    {
      title: "ATS Checker",
      description:
        "Analyze how well your resume matches the job description with an ATS score.",
      icon: <FiCheckSquare size={50} color="#27ae60" />,
      usage:
        "Upload the resume and job description to get a compatibility score.",
      route: "/ats", // Correct Route
    },
    {
      title: "Cover Letter Generation",
      description:
        "Generate a tailored cover letter based on your resume and job description.",
      icon: <FiEdit size={50} color="#ff5e62" />,
      usage: "Enter your resume and job description to get a custom letter.",
      route: "/cv", // Correct Route
    },
    {
      title: "Resume Scanner",
      description:
        "View insights and detailed data extracted from your uploaded resume.",
      icon: <FiSearch size={50} color="#00bcd4" />,
      usage: "Navigate to view the data of your analyzed resume.",
      route: "/resume", // Correct Route
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        height: "100vh",
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {/* Back Button */}
      <Button
        variant="outlined"
        startIcon={<FiArrowLeft />}
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#00bcd4",
          borderColor: "#00bcd4",
        }}
      >
        Back to Home
      </Button>

      {/* Header */}
      <Typography
        variant="h4"
        style={{ color: "#00bcd4", marginBottom: "1rem" }}
      >
        Explore Our Features
      </Typography>

      {/* Cards Section */}
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        gap={4}
        style={{ width: "100%" }}
      >
        {functionalities.map((func, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              width: "45%",
              maxWidth: "400px",
              background: "rgba(255, 255, 255, 0.2)",
              padding: "1.5rem",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            {/* Icon */}
            {func.icon}
            {/* Title */}
            <Typography
              variant="h5"
              style={{ margin: "1rem 0", color: "#333" }}
            >
              {func.title}
            </Typography>
            {/* Description */}
            <Typography style={{ marginBottom: "1rem", color: "#555" }}>
              {func.description}
            </Typography>
            {/* Usage Instructions */}
            <Typography
              variant="body2"
              style={{ marginBottom: "1.5rem", color: "#777" }}
            >
              {func.usage}
            </Typography>
            {/* Navigate Button */}
            <Button
              variant="contained"
              onClick={() => navigate(func.route)}
              style={{ backgroundColor: "#00bcd4", color: "#fff" }}
            >
              Go to {func.title}
            </Button>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default FunctionalityPage;
