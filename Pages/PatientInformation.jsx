import React, { useState } from "react";
import "../css/PatientInformation.css";

const PatientInformation = () => {
  const [formData, setFormData] = useState({
    // General Info
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    occupation: "",
    address: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",

    // Dental History
    lastVisit: "",
    visitReason: "",
    pastWork: [],
    teethGrinding: "No",
    hasSensitivity: "No",
    sensitivityLocation: "",
    bleedingGums: "No",
    dentalAnxiety: "No",

    // Medical History
    medicalConditions: [],
    underDoctorsCare: "No",
    physicianDetails: "",
    currentMedications: "",
    allergies: "",

    // Habits
    brushingFrequency: "2",
    flossing: "Sometimes",
    mouthwash: "No",
    sugaryDrinks: "Occasionally",
    smoking: "No",
    alcohol: "No",

    // Consent
    signature: "",
    consentDate: new Date().toISOString().split("T")[0],
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxList = (category, value) => {
    setFormData((prev) => {
      const list = prev[category];
      const updated = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      return { ...prev, [category]: updated };
    });
  };
  const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "919455600938";

  const message = `
🦷 *New Patient Information Form Submission*

👤 Name: ${formData.fullName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || "N/A"}
🎂 DOB: ${formData.dob}
👤 Gender: ${formData.gender}
📍 Address: ${formData.address}

🦷 Reason: ${formData.visitReason}
🪥 Past Work: ${formData.pastWork.join(", ")}

🏥 Medical Conditions: ${formData.medicalConditions.join(", ") || "None"}

💊 Medications: ${formData.currentMedications || "None"}
⚠️ Allergies: ${formData.allergies || "None"}

📝 Message: ${formData.message || "N/A"}
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
  
  return (
    <div className="form-wrapper">
      <div className="form-card">
        <header className="form-header">
          <span className="clinic-badge">Friends Family Dental Clinic</span>
          <h2>Patient Intake & Medical History Form</h2>
          <p>Please complete this form prior to your dental consultation.</p>
        </header>

        <form onSubmit={handleSubmit} className="clinical-form">
          {/* 1. GENERAL INFORMATION */}
          <section className="form-section">
            <h3 className="section-title">1. Patient Details</h3>
            
            <div className="input-grid">
              <div className="field-group span-2">
                <label>Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. John Doe" />
              </div>

              <div className="field-group">
                <label>Date of Birth *</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </div>

              <div className="field-group">
                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Yrs" />
              </div>

              <div className="field-group">
                <label>Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="field-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              </div>

              <div className="field-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
              </div>

              <div className="field-group">
                <label>Occupation</label>
                <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="e.g. Doctor / Farmer" />
              </div>

              <div className="field-group span-2">
                <label>Residential Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street address, City, Pincode" />
              </div>
            </div>

            {/* Sub-block for Emergency Contact */}
            <div className="sub-card">
              <h4>Emergency Contact Information</h4>
              <div className="input-grid">
                <div className="field-group">
                  <label>Contact Name</label>
                  <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} />
                </div>
                <div className="field-group">
                  <label>Relationship</label>
                  <input type="text" name="emergencyRelation" value={formData.emergencyRelation} onChange={handleChange} />
                </div>
                <div className="field-group">
                  <label>Emergency Phone</label>
                  <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} />
                </div>
              </div>
            </div>
          </section>

          {/* 2. DENTAL HISTORY */}
          <section className="form-section">
            <h3 className="section-title">2. Dental History</h3>
            
            <div className="input-grid">
              <div className="field-group">
                <label>Last Dental Visit</label>
                <input type="text" name="lastVisit" value={formData.lastVisit} onChange={handleChange} placeholder="e.g. 6 months ago" />
              </div>

              <div className="field-group span-2">
                <label>Reason for Today's Visit *</label>
                <input type="text" name="visitReason" value={formData.visitReason} onChange={handleChange} placeholder="e.g. Tooth ache, cleaning, checkup" />
              </div>
            </div>

            <div className="checkbox-section">
              <label className="group-label">Previous Dental Work Received:</label>
              <div className="check-grid">
                {["Fillings", "Crowns", "Root canals", "Extractions", "Dentures", "Braces / Aligners", "Implants"].map((item) => (
                  <label key={item} className="check-pill">
                    <input
                      type="checkbox"
                      checked={formData.pastWork.includes(item)}
                      onChange={() => handleCheckboxList("pastWork", item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="question-row">
              <div className="radio-group">
                <label>Do you grind your teeth?</label>
                <div className="options">
                  <label><input type="radio" name="teethGrinding" value="Yes" onChange={handleChange} /> Yes</label>
                  <label><input type="radio" name="teethGrinding" value="No" onChange={handleChange} defaultChecked /> No</label>
                </div>
              </div>

              <div className="radio-group">
                <label>Do you bleed when brushing?</label>
                <div className="options">
                  <label><input type="radio" name="bleedingGums" value="Yes" onChange={handleChange} /> Yes</label>
                  <label><input type="radio" name="bleedingGums" value="No" onChange={handleChange} defaultChecked /> No</label>
                </div>
              </div>

              <div className="radio-group">
                <label>Nervous about treatment?</label>
                <div className="options">
                  <label><input type="radio" name="dentalAnxiety" value="Yes" onChange={handleChange} /> Yes</label>
                  <label><input type="radio" name="dentalAnxiety" value="No" onChange={handleChange} defaultChecked /> No</label>
                </div>
              </div>
            </div>

            <div className="input-grid margin-top">
              <div className="field-group">
                <label>Do you have sensitivity/pain?</label>
                <select name="hasSensitivity" value={formData.hasSensitivity} onChange={handleChange}>
                  <option value="No">No</option>
                  <option value="Yes - Hot">Yes (To Hot)</option>
                  <option value="Yes - Cold">Yes (To Cold)</option>
                  <option value="Yes - Sweets">Yes (To Sweets)</option>
                </select>
              </div>

              {formData.hasSensitivity !== "No" && (
                <div className="field-group">
                  <label>Where is the sensitivity located?</label>
                  <input type="text" name="sensitivityLocation" value={formData.sensitivityLocation} onChange={handleChange} placeholder="e.g. Upper left back tooth" />
                </div>
              )}
            </div>
          </section>

          {/* 3. MEDICAL HISTORY */}
          <section className="form-section">
            <h3 className="section-title">3. Medical History</h3>
            <p className="section-subtitle">Please check if you have or have had any of the following conditions:</p>

            <div className="check-grid medical-grid">
              {[
                "Heart disease / Heart attack",
                "High blood pressure",
                "Diabetes",
                "Asthma / Breathing problems",
                "Epilepsy / Seizures",
                "Bleeding disorders",
                "Hepatitis / Liver disease",
                "Kidney disease",
                "Thyroid problems",
                "Cancer",
                "HIV / AIDS",
                "Pregnancy (if applicable)",
                "Joint replacement",
                "Artificial heart valves",
                "Rheumatic fever",
              ].map((condition) => (
                <label key={condition} className="check-pill medical-pill">
                  <input
                    type="checkbox"
                    checked={formData.medicalConditions.includes(condition)}
                    onChange={() => handleCheckboxList("medicalConditions", condition)}
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>

            <div className="input-grid margin-top">
              <div className="field-group span-2">
                <label>Current Medications</label>
                <input type="text" name="currentMedications" value={formData.currentMedications} onChange={handleChange} placeholder="List any daily medicines or supplements" />
              </div>

              <div className="field-group span-2">
                <label>Allergies (medications, latex, anesthesia)</label>
                <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} placeholder="e.g. Penicillin, Latex, Local Anesthetic" />
              </div>

              <div className="field-group">
                <label>Are you under a doctor's care currently?</label>
                <select name="underDoctorsCare" value={formData.underDoctorsCare} onChange={handleChange}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {formData.underDoctorsCare === "Yes" && (
                <div className="field-group">
                  <label>Physician Name & Phone Number</label>
                  <input type="text" name="physicianDetails" value={formData.physicianDetails} onChange={handleChange} placeholder="Dr. Smith - 9876543210" />
                </div>
              )}
            </div>
          </section>

          {/* 4. HABITS */}
          <section className="form-section">
            <h3 className="section-title">4. Personal Habits</h3>
            
            <div className="input-grid">
              <div className="field-group">
                <label>Brushing Frequency</label>
                <select name="brushingFrequency" value={formData.brushingFrequency} onChange={handleChange}>
                  <option value="1">Once daily</option>
                  <option value="2">Twice daily</option>
                  <option value="3+">3+ times daily</option>
                  <option value="Irregular">Irregular</option>
                </select>
              </div>

              <div className="field-group">
                <label>Flossing</label>
                <select name="flossing" value={formData.flossing} onChange={handleChange}>
                  <option value="Daily">Daily</option>
                  <option value="Sometimes">Sometimes</option>
                  <option value="Never">Never</option>
                </select>
              </div>

              <div className="field-group">
                <label>Mouthwash Use</label>
                <select name="mouthwash" value={formData.mouthwash} onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="field-group">
                <label>Sugary / Acidic Drink Intake</label>
                <select name="sugaryDrinks" value={formData.sugaryDrinks} onChange={handleChange}>
                  <option value="Often">Often</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Rarely">Rarely</option>
                </select>
              </div>

              <div className="field-group">
                <label>Do you smoke / use tobacco?</label>
                <select name="smoking" value={formData.smoking} onChange={handleChange}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Former">Former user</option>
                </select>
              </div>

              <div className="field-group">
                <label>Alcohol Use</label>
                <select name="alcohol" value={formData.alcohol} onChange={handleChange}>
                  <option value="No">No</option>
                  <option value="Socially">Socially</option>
                  <option value="Regularly">Regularly</option>
                </select>
              </div>
            </div>
          </section>

          {/* 5. CONSENT */}
          <section className="form-section consent-section">
            <h3 className="section-title">5. Consent & Declaration</h3>
            <p className="consent-text">
              I confirm that the information provided above is accurate to the best of my knowledge. I consent to the performance of dental examinations and necessary diagnostic procedures at Friends Family Dental Clinic.
            </p>

            <div className="input-grid">
              <div className="field-group">
                <label>Patient / Guardian Name (Signature)</label>
                <input type="text" name="signature" value={formData.signature} onChange={handleChange} placeholder="Type full legal name" />
              </div>

              <div className="field-group">
                <label>Date</label>
                <input type="date" name="consentDate" value={formData.consentDate} onChange={handleChange} />
              </div>
            </div>

            <label className="checkbox-agree">
              <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
              <span>I agree to the clinic privacy policy and treatment consent statement.</span>
            </label>
          </section>

          <button type="submit" className="submit-btn">Submit Patient Information</button>
        </form>
      </div>
    </div>
  );
};

export default PatientInformation;