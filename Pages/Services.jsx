import React from "react";
import "../css/Service.css"

const ServicesPage = () => {
  const servicesList = [
    {
      id: 1,
      title: "Teeth Cleaning",
      desc: "Removes plaque, tartar, and keeps your teeth and gums healthy.",
      icon: "🪥"
    },
    {
      id: 2,
      title: "Teeth Whitening",
      desc: "Brightens your smile by removing deep stains and discoloration.",
      icon: "✨"
    },
    {
      id: 3,
      title: "Root Canal Treatment",
      desc: "Relieves tooth pain and treats infected teeth effectively.",
      icon: "🦷"
    },
    {
      id: 4,
      title: "Dental Implants",
      desc: "A permanent, natural-looking solution for missing teeth.",
      icon: "🔩"
    },
    {
      id: 5,
      title: "Braces / Aligners",
      desc: "Straightens crooked teeth and aligns your bite perfectly.",
      icon: "🛡️"
    },
    {
      id: 6,
      title: "Tooth Extraction",
      desc: "Safe, painless removal of severely damaged or wisdom teeth.",
      icon: "🛡️"
    }
  ];

  const whyChoosePoints = [
    {
      title: "Affordable Pricing",
      desc: "Transparent rates with flexible payment and financing options."
    },
    {
      title: "Safe & Hygienic Clinic",
      desc: "Strict multi-step sterilization protocols for complete safety."
    }
  ];

  return (
    <div className="services-page">
      {/* 1. SERVICES HERO SECTION */}
      <section className="services-hero">
        <div className="hero-container">
          <span className="hero-badge">Comprehensive Dental Care</span>
          <h1>Our Dental Services</h1>
          <p className="hero-subtitle">
            We offer a wide range of dental treatments to keep your smile healthy, bright, and beautiful.
          </p>
        </div>
      </section>

      {/* 2. MAIN SERVICES GRID */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {servicesList.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button className="service-link-btn" onClick={() => window.location.href="tel:+91 9455600938"}>
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SERVICES */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Services</h2>
            <p>We combine patient comfort with top-tier clinical standards.</p>
          </div>

          <div className="why-choose-grid">
            {whyChoosePoints.map((point, idx) => (
              <div key={idx} className="why-choose-card">
                <div className="check-badge">✓</div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
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

export default ServicesPage;