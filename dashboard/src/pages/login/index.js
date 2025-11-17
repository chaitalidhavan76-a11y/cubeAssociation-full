import React, { useState } from "react";
import axios from "axios";

export default function Auth({ setAuth }) {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post("http://localhost:5000/api/admin/login", {
          email,
          password,
        });
        localStorage.setItem("adminToken", res.data.token);
        setAuth(true);
      } else {
        // REGISTER
        const res = await axios.post("http://localhost:5000/api/admin/register", {
          email,
          password,
        });
        alert(res.data.msg || "Admin registered successfully");
        setEmail("");
        setPassword("");
        setIsLogin(true); // switch back to login after register
      }
    } catch (err) {
      alert(isLogin ? "Invalid login details" : "Registration failed");
      console.error(err.response?.data);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>{isLogin ? "Admin Login" : "Admin Register"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>{isLogin ? "Login" : "Register"}</button>
        </form>
      </div>
      {/* <p style={{ marginTop: "10px" }}>
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Register here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
              >
                Login here
              </span>
            </>
          )}
        </p> */}
    </div>
    
  );
}
