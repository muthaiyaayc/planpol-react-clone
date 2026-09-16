import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import OurStory from "./Pages/OurStory/OurStory";
import Brains from "./Pages/Brains/Brains";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/brains" element={<Brains />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;