import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Global styles
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: white;
    min-height: 100vh;
    overflow: hidden;
  }

  #root {
    min-height: 100dvh;
    max-height: 100dvh;
    height: 100dvh;
    overflow: hidden;
  }

  /* Touch optimization */
  button, a, input, textarea, select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }

  /* Ensure touch targets are at least 44px */
  button {
    min-height: 44px;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Focus visible for keyboard navigation */
  *:focus-visible {
    outline: 2px solid #228be6;
    outline-offset: 2px;
  }
`;

// Inject global styles
const styleSheet = document.createElement("style");
styleSheet.textContent = globalStyles;
document.head.appendChild(styleSheet);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
