import { Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import PatientInformation from "../Pages/PatientInformation";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/patient-info" element={<PatientInformation/>}/>
      </Routes>
    </>
  );
}

export default App;