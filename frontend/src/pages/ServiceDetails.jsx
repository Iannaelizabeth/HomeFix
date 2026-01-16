import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServiceDetails.css";

import carpenter from "../assets/Carpenter.jpg";
import painter from "../assets/Painter.jpg";
import electrician from "../assets/Electrician.jpg";
import househelp from "../assets/Househelp.jpg";
import pestcontrol from "../assets/Pestcontrol.jpg";
import plumber from "../assets/Plumber.jpg";

export default function ServiceDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [dynamicWorkers, setDynamicWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [showWorkerModal, setShowWorkerModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ date: "", time: "" });

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/workers/${name.toLowerCase()}`
        );
        const data = await res.json();
        setDynamicWorkers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWorkers();
  }, [name]);

  const services = {
    plumber: {
      title: "Plumber Services",
      description:
        "Our skilled plumbers are available for all types of repairs, installations, and emergency leaks.",
      workers: [
        {
          id: 1,
          name: "Swaroop B.S",
          rating: 4.8,
          exp: "5 years",
          about:
            "Expert in residential plumbing, leak fixing, and emergency repair work.",
          reviews: [
            "Suma: Quick and reliable service.",
            "Arvind: Fixed my kitchen tap perfectly!",
          ],
        },
        {
          id: 2,
          name: "Zia Kadijah",
          rating: 4.9,
          exp: "6 years",
          about:
            "Specializes in pipe replacement and bathroom fitting with great precision.",
          reviews: ["Kiran: Very polite and efficient.", "Divya: Excellent work!"],
        },
        {
          id: 3,
          name: "Atul Kandiyil",
          rating: 4.7,
          exp: "4 years",
          about: "Handles water tank cleaning and maintenance jobs effectively.",
          reviews: [
            "Ravi: Good experience.",
            "Neha: Completed the work in time.",
          ],
        },
        {
          id: 4,
          name: "Himani Nune",
          rating: 4.6,
          exp: "3 years",
          about: "Expert in shower installation and small home plumbing tasks.",
          reviews: [
            "Meena: Great job and friendly service!",
            "Pavan: Neat and clean work.",
          ],
        },
      ],
    },

    electrician: {
      title: "Electrician Services",
      description:
        "Certified electricians for wiring, lighting, and appliance installations.",
      workers: [
        {
          id: 1,
          name: "Rosalin Verma",
          rating: 4.7,
          exp: "6 years",
          about:
            "Handles wiring, fan repairs, and lighting installation with perfection.",
          reviews: [
            "Tejas: Good and affordable service.",
            "Sneha: Found and fixed fault quickly.",
          ],
        },
        {
          id: 2,
          name: "Aisiri Shetty",
          rating: 4.9,
          exp: "7 years",
          about:
            "Expert in inverter setup and home power management solutions.",
          reviews: [
            "Niharika: Perfect inverter setup!",
            "Varun: Professional and quick.",
          ],
        },
        {
          id: 3,
          name: "Shreya R Doijode",
          rating: 4.8,
          exp: "5 years",
          about:
            "Experienced in appliance wiring and socket repair for households and offices.",
          reviews: [
            "Ravi: Fast and reliable fix!",
            "Suhas: Knows her work well.",
          ],
        },
        {
          id: 4,
          name: "Tejaswar Reddy",
          rating: 4.9,
          exp: "8 years",
          about:
            "Full house wiring and preventive setup expert for modern homes.",
          reviews: [
            "Ananya: Completed entire house wiring efficiently.",
            "Jayesh: Outstanding service.",
          ],
        },
      ],
    },

    carpenter: {
      title: "Carpenter Services",
      description:
        "Expert carpenters for furniture repair, polishing, and custom woodwork.",
      workers: [
        {
          id: 1,
          name: "Aravind Kothamangala",
          rating: 4.8,
          exp: "5 years",
          about:
            "Furniture repair, installation, and polishing expert with 5 years of experience.",
          reviews: [
            "Megha: My wardrobe looks new again!",
            "Anand: Very professional work.",
          ],
        },
        {
          id: 2,
          name: "Nisarga Goudar",
          rating: 4.7,
          exp: "4 years",
          about: "Specializes in door fitting, hinges, and frame repairs.",
          reviews: ["Anu: Great finishing!", "Prasad: Quick work!"],
        },
        {
          id: 3,
          name: "Sangamesh Prasad",
          rating: 4.9,
          exp: "7 years",
          about: "Custom furniture design and modular setups for homes.",
          reviews: ["Shilpa: Designed our living room perfectly!"],
        },
        {
          id: 4,
          name: "Parnika V Hallalli",
          rating: 4.6,
          exp: "3 years",
          about: "Expert in wood painting, varnishing, and furniture polishing.",
          reviews: ["Vivek: My table looks brand new now."],
        },
      ],
    },

    painter: {
      title: "Painter Services",
      description:
        "Professional painting with eco-friendly materials and guaranteed finish.",
      workers: [
        {
          id: 1,
          name: "Preethi T",
          rating: 4.8,
          exp: "5 years",
          about:
            "Specialist in interior painting with neat and elegant finishes.",
          reviews: [
            "Rekha: Walls look amazing!",
            "Dinesh: Smooth finish, on time delivery.",
          ],
        },
        {
          id: 2,
          name: "Praneeth P Shetty",
          rating: 4.7,
          exp: "6 years",
          about: "Ceiling and waterproofing specialist using durable paints.",
          reviews: ["Sharan: Excellent waterproofing!", "Asha: Great results!"],
        },
        {
          id: 3,
          name: "Keerthana Manjunath",
          rating: 4.9,
          exp: "8 years",
          about: "Expert in exterior and texture painting for homes.",
          reviews: [
            "Neel: Perfect texture on our walls.",
            "Kavya: Loved the finish!",
          ],
        },
        {
          id: 4,
          name: "Vikas N",
          rating: 4.8,
          exp: "7 years",
          about: "Professional furniture and wooden polishing expert.",
          reviews: ["Sonal: Polishing was top-notch.", "Rahul: Great service!"],
        },
      ],
    },

    househelp: {
      title: "House Help Services",
      description:
        "Reliable and verified helpers for cleaning, laundry, and home assistance.",
      workers: [
        {
          id: 1,
          name: "Ramya R",
          rating: 4.9,
          exp: "5 years",
          about:
            "Professional housekeeper specializing in dusting and floor cleaning.",
          reviews: ["Priya: House looks spotless!", "Raj: Very polite helper."],
        },
        {
          id: 2,
          name: "Pranav Reddy",
          rating: 4.7,
          exp: "4 years",
          about: "Expert in laundry and ironing services.",
          reviews: ["Tanya: Clothes look crisp and clean!"],
        },
        {
          id: 3,
          name: "Jyeshta J",
          rating: 4.8,
          exp: "5 years",
          about:
            "Over 4 years of experience providing hygienic and eco-friendly bathroom cleaning.",
          reviews: [
            "Divya: Very professional work.",
            "Meghana: Bathroom looks brand new!",
          ],
        },
        {
          id: 4,
          name: "Dhruva G Hegde",
          rating: 4.9,
          exp: "6 years",
          about: "Experienced babysitter and child caretaker with certifications.",
          reviews: ["Kiran: Kids love her!", "Nisha: Excellent with toddlers."],
        },
      ],
    },

    pestcontrol: {
      title: "Pest Control Services",
      description:
        "Safe and effective pest control services for your home and workplace.",
      workers: [
        {
          id: 1,
          name: "Manapriya",
          rating: 4.8,
          exp: "6 years",
          about: "Expert in cockroach and termite pest control.",
          reviews: ["Shravya: Great work!", "Pramod: No termites anymore!"],
        },
        {
          id: 2,
          name: "Rehana",
          rating: 4.9,
          exp: "7 years",
          about: "Mosquito and fly treatment specialist using safe chemicals.",
          reviews: ["Farah: Very effective treatment."],
        },
        {
          id: 3,
          name: "Crosswin Robert",
          rating: 4.8,
          exp: "6 years",
          about: "Bed bug removal and home disinfection expert.",
          reviews: ["Lalitha: Quick and neat!", "Manoj: Safe process."],
        },
        {
          id: 4,
          name: "Adarsh V",
          rating: 4.9,
          exp: "8 years",
          about:
            "Rodent and rat control specialist with eco-friendly products.",
          reviews: ["Ramesh: Excellent job!", "Aditi: No issues since!"],
        },
      ],
    },
  };

  const service = services[name?.toLowerCase().replace(/\s/g, "")];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found 😢</h2>
        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  const confirmBooking = async () => {
    if (!bookingDetails.date || !bookingDetails.time) {
      alert("Please select both date and time.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login again.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          userName: user.firstName + " " + (user.lastName || ""),
          userEmail: user.email,
          service: name,
          workerId: selectedWorker?._id || selectedWorker?.id || null,
          workerName: selectedWorker?.name || "",
          date: bookingDetails.date,
          time: bookingDetails.time,
          address: bookingDetails.address || user.address || "",
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Failed to save booking");
        return;
      }

      alert(
        `✅ Booking confirmed for ${selectedWorker.name} on ${bookingDetails.date} at ${bookingDetails.time}`
      );

      setShowBookingModal(false);
      setShowWorkerModal(false);
    } catch (err) {
      console.error(err);
      alert("Server error while saving booking");
    }
  };

  const allWorkers = [
    ...service.workers,
    ...dynamicWorkers.map((w) => ({
      ...w,
      exp: w.experience,
      reviews: w.reviews || ["Newly registered worker"],
    })),
  ];

  return (
    <div className="service-details-page">
      <header className="service-header">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </header>

      <div className="workers-section">
        <h2>Available Professionals</h2>
        <div className="workers-grid">
          {allWorkers.map((worker) => (
            <div key={worker._id || worker.id} className="worker-card">
              <h3>{worker.name}</h3>
              <p>⭐ Rating: {worker.rating}</p>
              <p>Experience: {worker.exp}</p>

              <button
                className="book-btn"
                onClick={() => {
                  setSelectedWorker(worker);
                  setShowWorkerModal(true);
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          ← Back to Dashboard
        </button>
      </div>

      {showWorkerModal && selectedWorker && (
        <div className="modal-overlay">
          <div className="modal-content large">
            <h2>{selectedWorker.name}</h2>
            <p>
              <strong>Experience:</strong> {selectedWorker.exp}
            </p>
            <p>{selectedWorker.about}</p>

            <h3>Reviews</h3>
            <ul>
              {selectedWorker.reviews?.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <div className="form-buttons">
              <button
                className="confirm-btn"
                onClick={() => setShowBookingModal(true)}
              >
                Confirm Booking
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowWorkerModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showBookingModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Booking</h2>
            <p>
              Choose a date & time for{" "}
              <strong>{selectedWorker.name}</strong>
            </p>

            <input
              type="date"
              value={bookingDetails.date}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  date: e.target.value,
                })
              }
            />

            <input
              type="time"
              value={bookingDetails.time}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  time: e.target.value,
                })
              }
            />

            <div className="form-buttons">
              <button className="confirm-btn" onClick={confirmBooking}>
                Book Now
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowBookingModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
