import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./index.module.css"; // Ensure to update your CSS accordingly

function WelcomePage() {
  return (
    <div className={styles.container}>
      {/* Glassmorphic Background Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.overlay}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.textContainer}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Elevate Your Resume with AI Insights
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            style={{ marginBottom: "20px", color: "#555" }}
          >
            Smart Insights for Smarter Resumes
          </Typography>
          <Typography
            variant="h6"
            component="p"
            gutterBottom
            style={{ marginBottom: "30px", color: "#777" }}
          >
            Your all-in-one solution for resume analysis, cover letter
            generation, resume building, and ATS checking!
          </Typography>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              className={styles.getStartedButton}
              aria-label="Get Started"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Blob Shape for Background Effect */}
      <motion.div
        className={styles.blob}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 8, loop: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}

export default WelcomePage;
