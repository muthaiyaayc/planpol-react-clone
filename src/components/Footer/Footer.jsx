import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      // Brand reveal
      gsap.from(".footer-brand", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 88%",
          once: true,
        },
      });

      // Footer columns stagger
      gsap.from(".footer-column", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 88%",
          once: true,
        },
      });

      // Logo icon entrance
      gsap.from(".footer-logo-icon", {
        scale: 0.5,
        rotate: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footer,
          start: "top 88%",
          once: true,
        },
      });

      // Bottom copyright reveal
      gsap.from(".footer-bottom", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 95%",
          once: true,
        },
      });

      // Decorative line animation
      gsap.from(".footer-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 95%",
          once: true,
        },
      });
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">

            <div className="footer-logo-icon">
              🧠
            </div>

            <div className="footer-logo-text">
              Everything is <span>राजনীতি</span>
            </div>

          </Link>

          <p>
            AI-powered political technology
            built with data, technology and
            hyperlocal intelligence.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/our-story">
            Our story
          </Link>

          <Link to="/brains">
            Brains
          </Link>

          <Link to="/products">
            Products
          </Link>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <h3>Explore</h3>

          <Link to="/services">
            Services
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/contact">
            Contact us
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h3>Contact</h3>

          <a href="tel:9962166656">
            9962166656
          </a>

          <a href="mailto:admin@planpol.com">
            admin@planpol.com
          </a>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-line"></div>

        <p>
          @2026. All rights reserved by
          PLANPOL (OPC) PRIVATE LIMITED
        </p>

      </div>

    </footer>
  );
}

export default Footer;