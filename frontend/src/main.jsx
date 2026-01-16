import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import JoinAsWorker from "./pages/JoinAsWorker.jsx";
import Booking from "./pages/Booking.jsx"; // <-- UPDATED

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* default → login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* main user pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service/:name" element={<ServiceDetails />} />

        {/* new booking history page */}
        <Route path="/bookings" element={<Booking />} />

        {/* worker registration */}
        <Route path="/join" element={<JoinAsWorker />} />

        {/* fallback */}
        <Route
          path="*"
          element={
            <h2
              style={{
                textAlign: "center",
                marginTop: "50px",
                color: "#0a1931",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
