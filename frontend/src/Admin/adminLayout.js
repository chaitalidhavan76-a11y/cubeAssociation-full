import "../Admin/admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Admin/components/sidebar';
import Applications from '../Admin/pages/applications';
import Queries from '../Admin/pages/contactQuery';
import Overview from '../Admin/pages/overview';
import Settings from '../Admin/pages/settings';
import Login from '../Admin/pages/login';

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminLayout() {
  const [auth, setAuth] = useState(!!localStorage.getItem("adminToken"));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // If user is not logged in AND NOT on /admin/login → redirect to login
  if (!auth && location.pathname !== "/admin/login") {
    return <Navigate to="/admin/login" />;
  }

  // If user is logged in and tries to open login page → redirect to dashboard
  if (auth && location.pathname === "/admin/login") {
    return <Navigate to="/admin/overview" />;
  }

  return auth ? (
    <div style={{ display: "flex" }}>
      <Sidebar setAuth={setAuth} />
      <div style={{ flex: 1, marginLeft: "240px" }}>
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/query" element={<Queries />} />
          <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />} />
          <Route path="*" element={<Navigate to="/admin/overview" />} />
        </Routes>
      </div>
    </div>
  ) : (
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
    </Routes>
  );
}

export default AdminLayout;
