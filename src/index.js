import React from "react"
import ReactDom from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom";

// components
import TodoContainer from "./functionBased/components/TodoContainer";

// stylesheet
import "./functionBased/App.css"

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <TodoContainer />
        </Router>
    </React.StrictMode>
);