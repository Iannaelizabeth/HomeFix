import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

export default function Booking() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/bookings/${user.email}`);
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="booking-page">
      <h1>📚 Your Bookings</h1>

      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        ← Back to Dashboard
      </button>

      {loading && <p className="loading">Loading bookings...</p>}

      {!loading && bookings.length === 0 && (
        <p className="empty-msg">No bookings found yet.</p>
      )}

      <div className="booking-list">
        {bookings.map((b) => (
          <div key={b._id} className="booking-card">
            <h3>{b.service}</h3>
            <p>
              <strong>Worker:</strong> {b.workerName || "Not Assigned Yet"}
            </p>
            <p>
              <strong>Date:</strong> {b.date} at {b.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
