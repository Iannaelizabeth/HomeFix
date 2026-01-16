import React, { useState } from "react";
import "./JoinAsWorker.css";

export default function JoinAsWorker() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    experience: "",
    rating: "",
    about: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/workers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to register worker");
        return;
      }

      alert("✅ Successfully registered as a worker!");
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="join-worker-page">
      <h1>Join as a Worker</h1>

      <form className="join-form" onSubmit={handleSubmit}>
        <label>Full Name *</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Choose Your Service *</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select service</option>
          <option value="plumber">Plumber</option>
          <option value="carpenter">Carpenter</option>
          <option value="painter">Painter</option>
          <option value="electrician">Electrician</option>
          <option value="househelp">House Help</option>
          <option value="pestcontrol">Pest Control</option>
        </select>

        <label>Experience *</label>
        <input
          type="text"
          name="experience"
          placeholder="e.g. 3 years"
          value={form.experience}
          onChange={handleChange}
          required
        />

        <label>Rating (optional)</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
        />

        <label>About You *</label>
        <textarea
          name="about"
          placeholder="Tell us about your expertise..."
          value={form.about}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Join Now</button>
      </form>
    </div>
  );
}
