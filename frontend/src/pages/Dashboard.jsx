import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import carpenter from "../assets/Carpenter.jpg";
import painter from "../assets/Painter.jpg";
import electrician from "../assets/Electrician.jpg";
import househelp from "../assets/Househelp.jpg";
import pestcontrol from "../assets/Pestcontrol.jpg";
import plumber from "../assets/Plumber.jpg";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const services = [
    { name: "Carpenter", img: carpenter },
    { name: "Painter", img: painter },
    { name: "Electrician", img: electrician },
    { name: "House Help", img: househelp },
    { name: "Pest Control", img: pestcontrol },
    { name: "Plumber", img: plumber },
  ];

  const loadHistory = async () => {
    if (!user) {
      alert("Please login again");
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:4000/api/bookings/${user.email}`
      );
      const data = await res.json();
      setBookings(data);
      setShowHistory(true);
    } catch (err) {
      console.error(err);
      alert("Failed to load bookings");
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>
          Welcome {user?.firstName || "User"} to{" "}
          <span className="brand">HomeFix 🏠</span>
        </h1>

        <div className="dashboard-actions">
          <button className="join-worker-btn" onClick={() => navigate("/join")}>
            👷 Join as a Worker
          </button>


          <button
            className="history-btn"
            onClick={() => navigate("/bookings")}
          >
            📚 View Your Bookings
          </button>
        </div>
      </header>

      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-card"
            onClick={() =>
              navigate(
                `/service/${service.name.toLowerCase().replace(/\s/g, "")}`
              )
            }
          >
            <img src={service.img} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>

      {showHistory && (
        <div className="booking-history">
          <h2>Your Bookings</h2>
          {bookings.length === 0 && <p>No bookings yet.</p>}
          {bookings.map((b) => (
            <div key={b._id} className="booking-card">
              <p>
                <strong>Service:</strong> {b.service}
              </p>
              <p>
                <strong>Worker:</strong> {b.workerName || "TBA"}
              </p>
              <p>
                <strong>Date:</strong> {b.date} at {b.time}
              </p>
              <p>
                <strong>Address:</strong> {b.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
