import { Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../Pages/Home";
import Services from "../Pages/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;