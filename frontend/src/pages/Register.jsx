import React, { useState } from "react";
import "./Login.css";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registration successful! You can now log in.");
        window.location.href = "/login";
      } else {
        alert(data.message || "Registration failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Could not connect to backend.");
    }
  };

  return (
    <div className="login-page">
      <header className="header">Create an Account</header>

      <div className="content">
        <div className="image-section">
          <p className="tagline">Join HomeFix — reliable home help in minutes!</p>
        </div>

        <div className="form-wrapper">
          <form className="form-card" onSubmit={handleSubmit}>
            <label>First name *</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required />

            <label>Last name *</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} />

            <label>Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Address *</label>
            <input name="address" value={form.address} onChange={handleChange} />

            <label>Phone *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91" />

            <label>Password *</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required />

            <button type="submit" className="login-btn">Sign Up</button>

            <div className="links">
              <p>Already have an account? <a href="/login">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
