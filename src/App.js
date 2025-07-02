// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, LayoutGrid, Type, Square } from "lucide-react"; // Icons for navigation

// Import component documentation pages
import ButtonDoc from "./docs/ButtonDoc";
import InputDoc from "./docs/InputDoc";
import CardDoc from "./docs/CardDoc";
import Card from "./components/Card"; // <--- ADD THIS LINE

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar Navigation */}
        <nav className="sidebar-nav">
          <div>
            <h1 className="sidebar-logo">UI Showcase</h1>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">
                  <Home size={20} className="nav-icon" /> Introduction
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/buttons">
                  <Type size={20} className="nav-icon" /> Buttons
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/inputs">
                  <LayoutGrid size={20} className="nav-icon" /> Inputs
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/cards">
                  <Square size={20} className="nav-icon" /> Cards
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-footer">&copy; 2025 Atharva.dev</div>
        </nav>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="doc-section">
                  <h2 className="doc-title">
                    Welcome to the UI Component Showcase!
                  </h2>
                  <p className="doc-description">
                    This project demonstrates a set of reusable UI components
                    built with React and styled using plain CSS. It showcases a
                    component-driven development approach, focusing on
                    reusability, consistency, and clean code.
                  </p>
                  <p className="doc-description">
                    Navigate through the sidebar to explore different components
                    and see their usage examples and code snippets.
                  </p>
                  <Card title="Project Highlights">
                    {" "}
                    {/* This is the Card component that needed importing */}
                    <ul className="props-list">
                      {" "}
                      {/* Reusing props-list for list styling */}
                      <li>
                        <strong>Component-Based Architecture:</strong> Modular
                        and reusable UI elements.
                      </li>
                      <li>
                        <strong>Plain CSS Styling:</strong> Direct CSS for
                        precise and controlled design.
                      </li>
                      <li>
                        <strong>React Hooks:</strong> Efficient state management
                        and side effects.
                      </li>
                      <li>
                        <strong>Responsive Design:</strong> Components adapt to
                        various screen sizes.
                      </li>
                      <li>
                        <strong>Interactive Documentation:</strong> Clear
                        examples and code snippets for easy understanding.
                      </li>
                    </ul>
                  </Card>
                </div>
              }
            />
            <Route path="/buttons" element={<ButtonDoc />} />
            <Route path="/inputs" element={<InputDoc />} />
            <Route path="/cards" element={<CardDoc />} />
            {/* Add more routes for other component docs here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
