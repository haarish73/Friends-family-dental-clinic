import React, { useState, useEffect } from "react";
import "../css/Form.css";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // 🔥 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "+919455600938"; // your clinic number (no +, no spaces)

  const message = `
🦷 *New Appointment Request*

👤 Name: ${formData.fullName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || "N/A"}
🦷 Service: ${formData.service}
📅 Date: ${formData.preferredDate || "N/A"}
⏰ Time: ${formData.preferredTime || "N/A"}
📝 Message: ${formData.message || "N/A"}
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  setSubmitted(true);
};

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Stop closing when clicking inside */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="form-page-wrapper">
          <div className="form-container">

            {/* Left Side */}
            <div className="form-sidebar">
              <div className="sidebar-content">
                <span className="sidebar-tag">Friends Family Dental</span>
                <h2>Book Your Visit Online</h2>
                <p className="sidebar-desc">
                  Schedule your appointment in under 2 minutes. Our team will contact you to confirm your slot.
                </p>

                <ul className="sidebar-features">
                  <li>
                    ✔ <strong>Instant Confirmation</strong>
                    <p>Callback within 30 minutes.</p>
                  </li>
                  <li>
                    ✔ <strong>Zero Waiting Time</strong>
                    <p>Pre-scheduled appointments.</p>
                  </li>
                  <li>
                    ✔ <strong>Expert Specialists</strong>
                    <p>Certified dental professionals.</p>
                  </li>
                </ul>

                <div className="sidebar-contact">
                  <p>Need urgent help?</p>
                  <a href="tel:+919876543210">📞 +91 9455600938</a>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="form-main">
              {submitted ? (
                <div className="success-card">
                  <h2>🎉 Appointment Requested!</h2>
                  <p>
                    Thank you <strong>{formData.fullName}</strong>, we will contact you at{" "}
                    <strong>{formData.phone}</strong>.
                  </p>
                  <button onClick={resetForm}>Book Again</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="appointment-form">

                  <h2>Patient Registration</h2>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option>Teeth Cleaning</option>
                    <option>Teeth Whitening</option>
                    <option>Root Canal</option>
                    <option>Implants</option>
                    <option>Braces</option>
                  </select>

                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />

                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select Time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <button type="submit">Submit</button>
                  <button type="button" onClick={resetForm}>Reset</button>

                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Form;