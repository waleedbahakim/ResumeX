import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Loader from "../Loader/";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFile } from "@fortawesome/free-solid-svg-icons";

function ATSChecker({ ATSDataReceived }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    if (responseData) {
      const circle = document.querySelector(".similarityRing circle");
      if (circle) {
        const circumference = 2 * Math.PI * 90;
        setTimeout(() => {
          circle.style.strokeDashoffset = 0;
        }, 100); // Adjust the delay as needed
      }
    }
  }, [responseData]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      const selectedFile = event.dataTransfer.items[0].getAsFile();
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (selectedFile, enteredText) => {
    if (selectedFile && enteredText) {
      try {
        await parseData(selectedFile, enteredText);
      } catch (error) {
        console.error("Error in handleSubmit:", error);
      }
    } else {
      console.log("No file selected or No text entered");
    }
  };

  const parseData = async (selectedFile, JD) => {
    setLoading(true); // Start loading
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("text", JD);
    try {
      const fileData = await fetch("http://localhost:5000/uploadATS", {
        method: "POST",
        body: formData,
      });

      if (!fileData.ok) {
        throw new Error(`Server responded with ${fileData.status}`);
      }
      const data = await fileData.json();
      setResponseData(data);
      ATSDataReceived(data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const getRingColor = (similarity) => {
    if (similarity <= 30) return "#FF0000"; // Red
    if (similarity <= 50) return "#FFA500"; // Orange
    if (similarity <= 70) return "#ddff00"; // Yellow
    if (similarity <= 85) return "#FFFF00"; // Light Green
    return "#008000"; // Dark Green
  };

  const getGrade = (similarity) => {
    if (similarity >= 90) return "A";
    if (similarity >= 80) return "B";
    if (similarity >= 70) return "C";
    if (similarity >= 60) return "D";
    return "F"; // Below 60
  };

  const DisplayData = () => {
    const ringColor = getRingColor(responseData.similarity);
    const grade = getGrade(responseData.similarity); // Get the grade based on the score

    return (
      <div className={styles.similarityContainer}>
        {/* Score display */}
        <h3>Your Resume Scored: {grade}</h3> {/* Grade display */}
        <svg className={styles.similarityRing} viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke={ringColor}
            strokeWidth="10"
            fill="transparent"
            className={styles.animateCircle}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className={styles.similarityScore}
          >
            {responseData.similarity}%
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>ATS Checker</h1>
      <p className={styles.lineOne}>
        Make sure your resume fits the job description with our ATS Checker.
      </p>
      <p className={styles.lineTwo}>
        Simplify your ATS resume optimization with ResumeX's tool. <br />
        Say goodbye to complexity and uncertainty; quickly enhance your resume
        for better job prospects!
      </p>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : responseData ? (
        <DisplayData />
      ) : (
        <form onDragOver={handleDragOver} onDrop={handleDrop}>
          <Row>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center px-4 py-4"
            >
              <label className={styles.UploadBox}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf"
                  name="file"
                  className={styles.Picker}
                />
                <div className={styles.uploadboxel}>
                  <div>
                    {file ? (
                      <FontAwesomeIcon icon={faFile} />
                    ) : (
                      <FontAwesomeIcon icon={faUpload} />
                    )}
                  </div>
                  <p>{file ? file.name : "Click to Upload or Drag and Drop"}</p>
                </div>
              </label>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <textarea
                className={styles.TextArea}
                placeholder="Enter Job Description"
                value={text}
                onChange={handleTextChange}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={() => handleSubmit(file, text)}
              disabled={!file || text.trim() === ""}
              className={`btn btn-primary ${styles.SubmitButton}`}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ATSChecker;
