import React, { useState } from "react";
import "../css/Contact.css"
import "../css/Service.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}! Your request has been received.`);
    setFormData({ fullName: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* 1. CONTACT PAGE HERO */}
      <section className="contact-hero">
        <div className="hero-container">
          <span className="hero-badge">Get In Touch</span>
          <h1>Contact & Book Appointment</h1>
          <p className="hero-subtitle">
            Have questions or need dental care? Reach out to our expert team or schedule your visit online.
          </p>
        </div>
      </section>

      {/* 5. QUICK CONTACT OPTIONS (High Conversion 🔥) */}
      <section className="quick-actions-bar">
        <div className="container quick-actions-container">
          <a href="tel:+919455600938" className="quick-card call">
            <span className="quick-icon">📞</span>
            <div>
              <strong>Call Now</strong>
              <small>+91    9455600938</small>
            </div>
          </a>

          <a 
            href="https://wa.me/919455600938?text=Hi,%20I%20would%20like%20to%20book%20a%20dental%20appointment." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="quick-card whatsapp"
          >
            <span className="quick-icon">💬</span>
            <div>
              <strong>WhatsApp Chat</strong>
              <small>Instant Response</small>
            </div>
          </a>

          <a href="#appointment-form" className="quick-card book">
            <span className="quick-icon">📅</span>
            <div>
              <strong>Book Appointment</strong>
              <small>Schedule Your Visit</small>
            </div>
          </a>
        </div>
      </section>

      {/* MAIN CONTENT: DETAILS + FORM */}
      <section className="main-contact-section">
        <div className="container contact-grid">
          
          {/* 2. CLINIC DETAILS & 6. WHY CONTACT US */}
          <div className="clinic-info-column">
            <div className="info-card">
              <h2>Clinic Information</h2>
              <p className="info-desc">Visit us or get in touch through any of the details below.</p>

              <div className="info-list">
                <div className="info-item">
                  <span className="icon">📍</span>
                  <div>
                    <strong>Address:</strong>
                    <p>Friends Family Dental Clinic,<br />X26Q+49X, Rajauli, Uttar Pradesh 226026</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <p><a href="tel:+919455600938">+91 9455600938</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <p><a href="mailto:friendsfamilydental@gmail.com">friendsfamilydental@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">🕒</span>
                  <div>
                    <strong>Working Hours:</strong>
                    <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
                    <p className="closed">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. WHY CONTACT US (Trust Section) */}
            <div className="trust-box">
              <h3>Why Choose Friends Family Dental</h3>
              <ul className="trust-list">
                <li><span className="check">✔</span> Friendly Staff</li>
                <li><span className="check">✔</span> Affordable Treatments</li>
                <li><span className="check">✔</span> Modern Equipment</li>
              </ul>
            </div>
          </div>

          {/* 3. CONTACT / APPOINTMENT FORM */}
          <div className="form-column" id="appointment-form">
            <div className="form-card">
              <h2>Schedule an Appointment</h2>
              <p>Fill out the form below and our team will get back to you promptly.</p>

              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>Select Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>-- Choose a Service --</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Braces / Aligners">Braces / Aligners</option>
                    <option value="Tooth Extraction">Tooth Extraction</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message / Specific Needs</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental concern or preferred time slot..."
                  ></textarea>
                </div>

                <div className="form-btn-group">
                  <button type="submit" className="btn btn-primary">
                    Book Appointment
                  </button>
                  <a href="tel:+919455600938" className="btn btn-secondary">
                    Request Call
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 4. GOOGLE MAP SECTION */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>Find Our Clinic Location</h2>
            <p>Conveniently located in X26Q+49X, Rajauli, Uttar Pradesh 226026.</p>
          </div>
          <div className="map-wrapper">
           <iframe
  title="Friends Family Dental Clinic Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.2234383689247!2d81.03808769999999!3d26.9598227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959006786ee27%3A0xec3828ad13267d7d!2sFriends%20Family%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1790141763262!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
></iframe>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Need Dental Care?</h2>
          <p>Book a consultation today or call us directly to speak with an expert doctor.</p>
          <div className="cta-buttons">
            <a href="#book" className="btn btn-primary">Book Appointment</a>
            <a href="tel:+1234567890" className="btn btn-outline">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;