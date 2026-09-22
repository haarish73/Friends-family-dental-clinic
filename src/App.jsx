import { Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;