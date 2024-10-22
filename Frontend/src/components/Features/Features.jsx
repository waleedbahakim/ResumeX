import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaClipboardCheck,
  FaPenFancy,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa"; // Example icons

const featuresData = [
  {
    title: "Resume Analysis",
    description:
      "Upload your resume to get insights on key skills, awards, projects, and experiences.",
    link: "#resume-analysis",
    icon: <FaClipboardCheck size={40} style={{ color: "#00bcd4" }} />,
  },
  {
    title: "Cover Letter",
    description:
      "Generate a tailored cover letter based on your resume and job description.",
    link: "#cover-letter",
    icon: <FaPenFancy size={40} style={{ color: "#00bcd4" }} />,
  },
  {
    title: "Resume Builder",
    description:
      "Create a Ats friendly & professional resume from your personal information with ease.",
    link: "#resume-builder",
    icon: <FaFileAlt size={40} style={{ color: "#00bcd4" }} />,
  },
  {
    title: "ATS Checker",
    description:
      "Analyze how well your resume matches a job description and receive an ATS score.",
    link: "#ats-checker",
    icon: <FaCheckCircle size={40} style={{ color: "#00bcd4" }} />,
  },
];

const styles = {
  container: {
    padding: "3rem 1rem",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    maxWidth: "1200px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.2)", // Translucent background
    backdropFilter: "blur(12px)", // Blurring effect
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center", // Center text within card
  },
  title: {
    fontWeight: "bold",
    color: "#00bcd4",
    letterSpacing: "1px",
    margin: "1rem 0 0.5rem", // Adjust margins for better spacing
  },
  description: {
    color: "#555",
    marginBottom: "1rem",
  },
  button: {
    textTransform: "capitalize",
    color: "#00bcd4",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#00bcd4",
    },
  },
  iconContainer: {
    marginBottom: "1rem", // Add margin below the icon
  },
};

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div style={styles.container} ref={ref} id="features">
      <Typography
        variant="h3"
        align="center"
        fontWeight="Bolder"
        style={{
          color: "#00bcd4",
          marginBottom: "2rem",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        Our Features
      </Typography>
      <Grid container spacing={4}>
        {featuresData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                style={styles.card}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <CardContent>
                  <div style={styles.iconContainer}>{feature.icon}</div>
                  <Typography variant="h5" style={styles.title}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" style={styles.description}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Features;
