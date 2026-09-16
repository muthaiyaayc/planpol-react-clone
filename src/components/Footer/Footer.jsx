import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <footer ref={footerRef} className="relative w-full overflow-hidden bg-[#101a2d] text-white">

      <div className="pointer-events-none absolute left-[-100px] top-[-150px] h-[320px] w-[320px] rounded-full bg-[rgba(23,105,255,0.08)] blur-[80px]"></div>

      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[rgba(77,140,255,0.06)] blur-[80px]"></div>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-[40px] px-[25px] py-[55px] min-[601px]:grid-cols-2 min-[601px]:gap-[45px] min-[601px]:px-[6%] min-[601px]:py-[65px] min-[901px]:grid-cols-[2fr_1fr_1fr_1.2fr] min-[901px]:gap-[60px] min-[901px]:px-[8%] min-[901px]:py-[80px]">

        {/* BRAND */}
        <div className="footer-brand max-w-full min-[601px]:max-w-full min-[901px]:max-w-[350px]">

          <Link to="/" className="footer-logo group mb-[25px] inline-flex items-center gap-[12px] text-white no-underline transition duration-300 ease-in-out hover:translate-x-[4px]">

            <div className="footer-logo-icon flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#1769ff] text-[20px] shadow-[0_8px_25px_rgba(23,105,255,0.25)] transition duration-[350ms] ease-in-out group-hover:rotate-[-6deg] group-hover:scale-[1.06] group-hover:shadow-[0_12px_30px_rgba(23,105,255,0.38)]">
              🧠
            </div>

            <div className="text-[17px] font-normal min-[601px]:text-[19px]">
              Everything is <span className="font-bold text-[#4d8cff] transition-colors duration-300 group-hover:text-[#72a5ff]">राजনীতি</span>
            </div>

          </Link>

          <p className="m-0 max-w-full text-[15px] leading-[1.7] text-[#aab5c9] min-[601px]:max-w-full min-[901px]:max-w-[320px]">
            AI-powered political technology
            built with data, technology and
            hyperlocal intelligence.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column flex flex-col items-start gap-[14px]">

          <h3 className="group relative mb-[10px] text-[18px] font-semibold text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:rounded-[10px] after:bg-[#4d8cff] after:transition-all after:duration-[350ms] after:content-[''] hover:after:w-[24px]">
            Quick Links
          </h3>

          <Link to="/" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            Home
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

          <Link to="/our-story" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            Our story
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

          <Link to="/brains" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            Brains
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

          <Link to="/products" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            Products
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

        </div>

        {/* EXPLORE */}
        <div className="footer-column flex flex-col items-start gap-[14px]">

          <h3 className="relative mb-[10px] text-[18px] font-semibold text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:rounded-[10px] after:bg-[#4d8cff] after:transition-all after:duration-[350ms] after:content-[''] hover:after:w-[24px]">
            Explore
          </h3>

          <Link to="/services" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            Services
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

          <Link to="/faq" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            FAQ
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

          <Link to="/contact" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            Contact us
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </Link>

        </div>

        {/* CONTACT */}
        <div className="footer-column flex flex-col items-start gap-[14px]">

          <h3 className="relative mb-[10px] text-[18px] font-semibold text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:rounded-[10px] after:bg-[#4d8cff] after:transition-all after:duration-[350ms] after:content-[''] hover:after:w-[24px]">
            Contact
          </h3>

          <a href="tel:9962166656" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            9962166656
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </a>

          <a href="mailto:admin@planpol.com" className="group relative text-[15px] text-[#aab5c9] no-underline transition duration-300 hover:translate-x-[7px] hover:text-white">
            admin@planpol.com
            <span className="absolute left-[-12px] top-1/2 h-[4px] w-[4px] -translate-y-1/2 scale-0 rounded-full bg-[#4d8cff] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
          </a>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom relative z-[2] w-full px-[25px] pb-[20px] text-center min-[601px]:px-[6%] min-[601px]:pb-[20px] min-[901px]:px-[8%] min-[901px]:pb-[22px]">

        <div className="footer-line mb-[22px] h-px w-full bg-[rgba(255,255,255,0.1)]"></div>

        <p className="m-0 text-[12px] leading-[1.5] text-[#8793a8] min-[601px]:text-[13px]">
          @2026. All rights reserved by
          PLANPOL (OPC) PRIVATE LIMITED
        </p>

      </div>

    </footer>
  );
}

export default Footer;