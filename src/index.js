import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" in React 18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start performance reporting
reportWebVitals();

