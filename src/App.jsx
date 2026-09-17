import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./Pages/Home/Home";
import OurStory from "./Pages/OurStory/OurStory";
import Brains from "./Pages/Brains/Brains";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  const location = useLocation();

  const isBlogsPage = location.pathname === "/blogs";

  return (
    <>
      <ScrollToTop />

      {!isBlogsPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/brains" element={<Brains />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;