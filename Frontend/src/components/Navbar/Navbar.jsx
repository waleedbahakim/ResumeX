import React, { useState } from "react";
import logo from "../../images/ResumeX_Logo_2.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  appBar: {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    zIndex: 1,
    position: "relative",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2rem", // Adjust padding for better spacing
  },
  title: {
    fontWeight: "bold",
    color: "#00bcd4",
    letterSpacing: "2px",
    transition: "transform 0.3s ease",
    textShadow: "0 0 4px rgba(0, 188, 212, 0.5)",
  },
  logo: {
    height: "80%", // Make logo responsive to navbar height
    maxHeight: "60px", // Prevent it from getting too large
    objectFit: "contain", // Maintain aspect ratio
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none", // Hide on smaller screens
    },
  },
  button: {
    margin: "0 10px",
    fontSize: "10px",
    fontWeight: "600",
    textTransform: "uppercase",
    borderRadius: "30px", // More rounded corners
    padding: "10px 24px",
    backgroundColor: "rgba(0, 188, 212, 1)", // Button color
    color: "#fff",
    border: "none",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  buttonHoverEffect: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "30px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  buttonWrapper: {
    position: "relative",
    display: "inline-block",
  },
  menuButton: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
};

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar style={styles.toolbar}>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="ResumeX Logo" style={styles.logo} />
        </a>
        {/* <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a> */}
        <div style={styles.buttonContainer}>
          {["Features", "Analysis"].map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div style={styles.buttonWrapper}>
                <Button
                  href={`#${text.toLowerCase()}`}
                  style={styles.button}
                  aria-label={text}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".hover-effect"
                    ).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".hover-effect"
                    ).style.opacity = "0";
                  }}
                >
                  {text}
                  <span
                    className="hover-effect"
                    style={styles.buttonHoverEffect}
                  ></span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <IconButton
          style={styles.menuButton}
          onClick={handleMenuClick}
          aria-label="menu"
        >
          <MenuIcon style={{ color: "#00bcd4" }} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {["Features", "Analysis"].map((text) => (
            <MenuItem key={text} onClick={handleClose}>
              <Button href={`#${text.toLowerCase()}`} style={styles.button}>
                {text}
              </Button>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
