import React, { useState, useEffect } from "react";
import "../css/Home.css";
import "../css/Service.css";
import Form from "../Pages/Form"

import logo from "../src/assets/Friends family dental clinic.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const slides = [
    {
      title: "Healthy Smiles, Happier Families",
      desc: "We provide comprehensive, high-quality dental care for patients of all ages in a warm, friendly environment.",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      alt: "Family dental consultation",
      imagePosition: "right",
    },
    {
      title: "Advanced Dental Treatments",
      desc: "Experience pain-free procedures using state-of-the-art technology and modern clinical expertise.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      alt: "Modern dental equipment",
      imagePosition: "left",
    },
    {
      title: "Book Your Consultation Today",
      desc: "Take the first step toward a brighter, healthier smile. Quick scheduling with our expert specialists.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      alt: "Dentist assisting patient",
      imagePosition: "right",
    },
  ];

  const faqData = [
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling us directly at +91 9455600938 or clicking the 'Book Appointment' button at the top of our page.",
    },
    {
      question: "What are your dental clinic timings?",
      answer:
        "Our clinic is open Monday through Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 2:00 PM.",
    },
    {
      question:
        "What modes of payment are acceptable at Friends Family Dental Clinics?",
      answer:
        "We accept Cash, Credit/Debit Cards, UPI payments (Google Pay, PhonePe, Paytm), and major health insurance plans.",
    },
    {
      question: "How frequently should I visit a dentist?",
      answer:
        "We recommend scheduling a checkup and professional cleaning every 6 months to maintain optimal oral health.",
    },
    {
      question:
        "What are the safety measures adopted by Friends Family Dental?",
      answer:
        "We follow strict 4-step sterilization protocols, single-use disposable kits, and complete personal protective equipment for all staff.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919455600938";
    const message = `
 Instant Call Back Request

 Name: ${formData.fullName || "N/A"}
 Phone: ${formData.phoneNumber || "N/A"}
`.trim();
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      {/* 1. HERO CAROUSEL */}
      <section className="hero-carousel">
        <div className="carousel-container">
          <button
            className="carousel-control prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ❮
          </button>

          <div
            className={`slide - content img - ${slides[currentSlide].imagePosition} `}
          >
            <div className="slide-text">
              <span className="badge">Friends Family Dental</span>
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].desc}</p>
              <button className="btn-primary">Book Appointment</button>
            </div>

            <div className="slide-image-wrapper">
              <img
                src={slides[currentSlide].img}
                alt={slides[currentSlide].alt}
                className="slide-image"
              />
            </div>
          </div>

          <button
            className="carousel-control next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""} `}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* 2. WHY TRUST US */}
      <section className="why-trust-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Trust Friends Family Dental</h2>
            <p>
              Committed to providing compassionate, safe, and personalized care.
            </p>
          </div>

          <ul className="trust-grid">
            {/* <li>
              <span className="check-icon">✓</span>
              <div>
                <h4>Experienced Doctors</h4>
                <p>Over 15+ years of clinical specialization</p>
              </div>
            </li> */}
            {/* <li>
              <span className="check-icon">✓</span>
              <div>
                <h4>Modern Equipment</h4>
                <p>3D Imaging & painless laser treatment</p>
              </div>
            </li> */}
            <li>
              <span className="check-icon">✓</span>
              <div>
                <h4>Affordable Pricing</h4>
                <p>Transparent rates & flexible payment plans</p>
              </div>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <div>
                <h4>Friendly Environment</h4>
                <p>Warm atmosphere for adults & children</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. EXPERTISE OF OUR DENTISTS */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header">
            <h2>Expertise of Our Dentists</h2>
            <p>
              Comprehensive dental services designed to restore and enhance your
              smile.
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="card-icon">🦷</div>
              <h3>General Dentistry</h3>
              <p>
                Routine checkups, deep cleaning, cavity fillings, and preventive
                oral health assessments.
              </p>
            </div>
            <div className="expertise-card">
              <div className="card-icon">✨</div>
              <h3>Cosmetic Dentistry</h3>
              <p>
                Professional teeth whitening, porcelain veneers, and complete
                digital smile design.
              </p>
            </div>
            <div className="expertise-card">
              <div className="card-icon">😁</div>
              <h3>Orthodontics</h3>
              <p>
                Traditional braces, clear aligners, and bite correction tailored
                to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALLBACK FORM */}
      <section className="callback-section">
        <div className="container callback-container">
          <div className="callback-text">
            <h2>Get an Instant Call Back</h2>
            <p>
              Leave your contact information below and our dental experts will
              get in touch shortly.
            </p>
          </div>

          <form className="callback-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>

            <button type="submit" className="btn-secondary">
              Request Call
            </button>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          {/* Left Side: Title & Accordion List */}
          <div className="faq-left">
            <div className="faq-header">
              <h2>
                Frequently <br />
                <span>Asked Questions</span>
              </h2>
              <p className="faq-subtitle">
                Answers to common questions about dental care and appointments.
              </p>
            </div>

            <div className="accordion-list">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion - item ${openIndex === index ? "active" : ""} `}
                >
                  <div
                    className="accordion-title"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="accordion-icon">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="faq-right">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Dental care consultation"
              className="faq-image"
            />
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Need Dental Care?</h2>
          <p>
            Book a consultation today or call us directly to speak with an
            expert doctor.
          </p>
          <div className="cta-buttons">
            <a href="#book" className="btn btn-primary">
              Book Appointment
            </a>
            <a href="tel:+919455600938" className="btn btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
