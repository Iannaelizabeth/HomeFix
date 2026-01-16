import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save User + Token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard", { replace: true });
    } catch (err) {
      alert("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <header className="header">Welcome to HomeFix</header>

      <div className="content">
        <div className="image-section">
          <p className="tagline">Reliable home help in minutes</p>
        </div>

        <div className="form-wrapper">
          <form className="form-card" onSubmit={handleSubmit}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="links">
              <p>
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  style={{ color: "#007bff", cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </p>

              <p>
                Want to work with us?{" "}
                <span
                  onClick={() => navigate("/join")}
                  style={{ color: "#28a745", cursor: "pointer" }}
                >
                  Join as Worker
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
