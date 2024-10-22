// Layout.jsx
import { useLocation } from "react-router-dom";
import Features from "./components/Features/Features";
import Analyze from "./components/Analyze/Analyze";
import Navbar from "./components/Navbar/Navbar";
import WelcomePage from "./pages/WelcomePage";
import StatisticsSection from "./components/Statistics/Stats";
import TestimonialsSection from "./components/Testimonial/Testimonial";
import FAQsSection from "./components/FAQs/FAQ";
const Layout = ({ children }) => {
  const location = useLocation();

  const hiddenComponentsRoutes = [
    "/resume-builder",
    "/ats",
    "/cv",
    "/display-data-resume",
    "/display-data-cv",
    "/main",
  ];

  const shouldHideComponents = hiddenComponentsRoutes.includes(
    location.pathname
  );

  return (
    <>
      {!shouldHideComponents && (
        <>
          <Features />
          <Analyze />
          <StatisticsSection />
          <TestimonialsSection />
          <FAQsSection />
        </>
      )}
      {children}
    </>
  );
};

export default Layout;
