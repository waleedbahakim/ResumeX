import React from "react";
import { Pie, Radar, Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Paper,
  CircularProgress,
  Typography,
  LinearProgress,
} from "@mui/material";
import { FiFileText, FiCheckCircle, FiBarChart2 } from "react-icons/fi";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  RadarController,
  PointElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  RadarController,
  PointElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale
);

const styles = {
  outerCard: {
    margin: "2rem",
    padding: "2rem",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#00bcd4",
    letterSpacing: "1px",
  },
  graphWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "1rem", // Add gap for better spacing between cards
  },
  chartContainer: {
    flex: "1 1 30%", // Makes the cards responsive and sets a base size
    minWidth: "300px", // Ensures minimum width for smaller screens
    margin: "1rem",
    padding: "1rem",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s", // Transition for hover effect
  },
  progressBar: {
    marginTop: "1rem",
    width: "80%",
    marginLeft: "10%",
  },
  icon: {
    fontSize: "2rem",
    marginRight: "10px",
    color: "#00bcd4",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
};

const radarData = {
  labels: ["Skills", "Projects", "Experience", "Certifications", "Soft Skills"],
  datasets: [
    {
      label: "Resume Metrics",
      data: [80, 90, 75, 85, 70],
      backgroundColor: "rgba(0, 188, 212, 0.4)",
      borderColor: "#00bcd4",
      borderWidth: 2,
    },
  ],
};

const lineData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Resume Score Progress",
      data: [60, 70, 85, 90],
      fill: true,
      backgroundColor: "rgba(39, 174, 96, 0.2)",
      borderColor: "#27ae60",
      tension: 0.4,
    },
  ],
};

const pieData = {
  labels: ["Technical Skills", "Soft Skills", "Experience", "Education"],
  datasets: [
    {
      data: [35, 25, 30, 10],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      borderWidth: 1,
      borderColor: "#fff",
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
      },
    },
  },
};

const Analyze = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.outerCard}
    >
      <h2 style={styles.header}>Comprehensive Resume Analysis</h2>
      <div style={styles.graphWrapper} id="analysis">
        {/* Resume Metrics - Radar Chart */}
        <motion.div
          className="chart-container"
          style={styles.chartContainer}
          whileHover={{ scale: 1.05 }} // Adds a hover effect
        >
          <div style={styles.sectionTitle}>
            <FiFileText style={styles.icon} /> Resume Metrics
          </div>
          <Radar data={radarData} />
        </motion.div>

        {/* ATS Score Progress */}
        <motion.div
          className="chart-container"
          style={styles.chartContainer}
          whileHover={{ scale: 1.05 }} // Adds a hover effect
        >
          <div style={styles.sectionTitle}>
            <FiBarChart2 style={styles.icon} /> ATS Score Breakdown
          </div>
          <div
            style={{
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pie data={pieData} options={pieOptions} />
          </div>
        </motion.div>

        {/* Resume Building Progress - Line Chart */}
        <motion.div
          className="chart-container"
          style={styles.chartContainer}
          whileHover={{ scale: 1.05 }} // Adds a hover effect
        >
          <div style={styles.sectionTitle}>
            <FiBarChart2 style={styles.icon} /> Resume Progress
          </div>
          <Line data={lineData} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Analyze;
