import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const styles = {
    container: {
      padding: "20px",
      margin: "30px auto",
      width: "70%",
      borderRadius: "10px",
      transition: "all 0.3s ease-in-out",
      backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
      color: theme === "light" ? "#333333" : "#f2f2f2",
      boxShadow:
        theme === "light"
          ? "0 4px 15px rgba(0, 0, 0, 0.1)"
          : "0 4px 20px rgba(255, 255, 255, 0.1)",
    },
    heading: {
      marginBottom: "10px",
      fontSize: "1.8rem",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: theme === "light" ? "#007bff" : "#444",
      color: "#fff",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </h1>
      <p style={styles.description}>
        The theme of this component dynamically changes based on the global
        context provided by <strong>ThemeContext</strong>.
      </p>
      <button style={styles.button} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Content;
