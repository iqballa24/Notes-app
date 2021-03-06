import React from "react";
import ReactDOM from "react-dom/client";
import NotesApp from "./pages/NotesApp";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
);
