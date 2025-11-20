import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Settings({ theme, setTheme }) {
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const backendURL = "https://win-association-full.onrender.com/api/admin";


  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await axios.get(`${backendURL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setEmail(res.data.email);
      } catch (err) {
        console.log("Failed to load profile");
      }
    };

    loadProfile();
  }, []);


  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.put(
        `${backendURL}/update-profile`,
        { email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Profile Updated Successfully!");
    } catch (err) {
      alert("Failed to update profile");
    }
  };


  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      await axios.put(
        `${backendURL}/change-password`,
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Password Updated Successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      alert("Failed to update password");
    }
  };

  return (
    <div className="applications-page">

     
      <div className="settings-header">
        <h2 className="page-title">Settings</h2>

        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <p className="page-subtitle">
        Manage your account and dashboard preferences.
      </p>

    
      <div className="settings-box">
        <h3 className="settings-title">Profile Information</h3>

        <div className="settings-group">
          <label>Email Address</label>
          <input
            type="email"
            className="settings-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="settings-save-btn" onClick={handleUpdateProfile}>
          Save Changes
        </button>
      </div>

      
      <div className="settings-box">
        <h3 className="settings-title">Change Password</h3>

        <div className="settings-group">
          <label>Current Password</label>
          <input
            type="password"
            className="settings-input"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className="settings-group">
          <label>New Password</label>
          <input
            type="password"
            className="settings-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="settings-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="settings-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="settings-save-btn" onClick={handleChangePassword}>
          Update Password
        </button>
      </div>
    </div>
  );
}
