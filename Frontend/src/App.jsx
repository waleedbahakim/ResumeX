import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Resume";
import DisplayDataResume from "./pages/DisplayDataResume";
import CoverLetterPage from "./pages/CoverLetter";
import DisplayDataCV from "./pages/DisplayDataCV";
import ATSCheckerPage from "./pages/ATSChecker";
import ResumeBuilderPage from "./pages/ResumeBuilder";
import Navbar from "./components/Navbar/Navbar";
import WelcomePage from "./pages/WelcomePage";
import Features from "./components/Features/Features";
import Analyze from "./components/Analyze/Analyze";
import MainFunctions from "./pages/MainFunctions/MainFunctions";
import StatisticsSection from "./components/Statistics/Stats";
import Layout from "./Layout";

function App() {
  const [resumeData, setResumeData] = useState(
    JSON.parse(sessionStorage.getItem("resumeData")) || null
  );

  const [CVData, setCVData] = useState(
    JSON.parse(sessionStorage.getItem("CVData")) || null
  );

  const [ATSData, setATSData] = useState(
    JSON.parse(sessionStorage.getItem("ATSData")) || null
  );

  useEffect(() => {
    sessionStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    sessionStorage.setItem("CVData", JSON.stringify(CVData));
  }, [CVData]);

  useEffect(() => {
    sessionStorage.setItem("ATSData", JSON.stringify(ATSData));
  }, [ATSData]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>

      <Layout>
        <div>
          <Routes>
            <Route path="/main" element={<MainFunctions />} />
            <Route
              path="/resume"
              element={<HomePage onDataReceived={setResumeData} />}
            />
            <Route
              path="/display-data-resume"
              element={<DisplayDataResume data={resumeData} />}
            />
            <Route
              path="/cv"
              element={<CoverLetterPage DataReceived={setCVData} />}
            />
            <Route
              path="/display-data-cv"
              element={<DisplayDataCV data={CVData} />}
            />
            <Route
              path="/ats"
              element={<ATSCheckerPage ATSDataReceived={setATSData} />}
            />
            <Route path="/resume-builder" element={<ResumeBuilderPage />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
