import './App.css';
import Sidebar from './components/sidebar';
import Applications from './pages/applications';
import Queries from './pages/contactQuery';
import Overview from './pages/overview';
import Settings from './pages/settings';
import Login from './pages/login';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("adminToken"));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      {auth ? (
        // -------- Dashboard Layout --------
        <div style={{ display: "flex" }}>
          <Sidebar  setAuth={setAuth} />

          <div style={{ flex: 1, marginLeft: "240px" }}>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/query" element={<Queries />} />
              <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />} />

              {/* Redirect unknown routes to overview */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      ) : (
        // -------- Login Page --------
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
