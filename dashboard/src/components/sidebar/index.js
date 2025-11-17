import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar({ setAuth }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setAuth(false);
    navigate("/login"); // cleaner than window.location.href
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Admin Dashboard</h2>

      <ul className="sidebar-menu">
        <li className={isActive("/overview") ? "active" : ""}>
          <Link to="/overview"><MdDashboard /> Overview</Link>
        </li>

        <li className={isActive("/applications") ? "active" : ""}>
          <Link to="/applications"><RiFileList2Line /> Applications</Link>
        </li>

        <li className={isActive("/query") ? "active" : ""}>
          <Link to="/query"><BiMessageDetail /> Queries</Link>
        </li>

        <li className={isActive("/settings") ? "active" : ""}>
          <Link to="/settings"><FiSettings /> Settings</Link>
        </li>
      </ul>

      <div className="sidebar-footer" onClick={logoutAdmin}>
        <FiLogOut /> Logout
      </div>
    </div>
  );
}
