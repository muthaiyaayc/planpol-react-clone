import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-column", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".footer-contact", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".footer-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#0878f9] px-[16px] pt-[68px] text-white sm:px-[40px] lg:px-[9.4%] lg:pt-[68px]">

      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto grid max-w-[1540px] grid-cols-5 gap-[55px] pb-[58px] max-[900px]:grid-cols-2 max-[900px]:gap-[45px] max-[600px]:grid-cols-1 max-[600px]:gap-[35px]">

        {/* PLANPOL */}
        <div className="footer-column">

          <h3 className="m-0 mb-[25px] text-[16px] font-bold tracking-[-0.02em]">
            PlanPol
          </h3>

          <div className="flex flex-col gap-[14px]">

            <Link to="/" className="w-fit text-[16px] font-normal text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Home
            </Link>

            <Link to="/our-story" className="w-fit text-[16px] font-normal text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Our Story
            </Link>

            {/* BLOGS */}
            <Link to="/blogs" className="w-fit text-[16px] font-normal text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Blogs
            </Link>

          </div>

          {/* CONTACT DETAILS */}
          <div className="footer-contact mt-[88px]">

            {/* PLANPOL LOGO */}
            <div className="mb-[25px] flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-white">
              <img src="/planpol-brain.png" alt="PlanPol" className="h-[42px] w-[42px] object-contain" />
            </div>

            {/* PHONE */}
            <a href="tel:9962166656" className="mb-[20px] flex w-fit items-center gap-[12px] text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              <span className="text-[18px]">♧</span>
              <span>9962166656</span>
            </a>

            {/* EMAIL */}
            <a href="mailto:admin@planpol.com" className="mb-[28px] flex w-fit items-center gap-[12px] text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              <span className="text-[17px]">✉</span>
              <span>admin@planpol.com</span>
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-[20px]">

              <a href="#" aria-label="LinkedIn" className="text-[16px] font-semibold text-white no-underline transition-transform duration-300 hover:-translate-y-1">
                in
              </a>

              <a href="#" aria-label="X" className="text-[17px] font-semibold text-white no-underline transition-transform duration-300 hover:-translate-y-1">
                X
              </a>

              <a href="#" aria-label="Instagram" className="text-[17px] font-semibold text-white no-underline transition-transform duration-300 hover:-translate-y-1">
                ◎
              </a>

              <a href="#" aria-label="Facebook" className="text-[17px] font-semibold text-white no-underline transition-transform duration-300 hover:-translate-y-1">
                f
              </a>

            </div>

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="footer-column">

          <h3 className="m-0 mb-[25px] text-[16px] font-bold tracking-[-0.02em]">
            Products
          </h3>

          <div className="flex flex-col gap-[14px]">

            <Link to="/products?product=voice" className="w-fit text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              PlanPol Voice
            </Link>

            <Link to="/products?product=PlanPol%20Party%20360%C2%B0" className="w-fit text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              PlanPol Party 360°
            </Link>

            <Link to="/products?product=booth" className="w-fit text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              PlanPol Booth
            </Link>

            <Link to="/products?product=strategy" className="w-fit text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              PlanPol Strategy
            </Link>

          </div>

        </div>

        {/* SERVICES */}
        <div className="footer-column">

          <h3 className="m-0 mb-[25px] text-[16px] font-bold tracking-[-0.02em]">
            Services
          </h3>

          <div className="flex flex-col gap-[14px]">

            <Link to="/services" className="max-w-[240px] text-[16px] leading-[1.45] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Strategy & Campaign Execution
            </Link>

            <Link to="/services" className="max-w-[240px] text-[16px] leading-[1.45] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Data, Research & Intelligence
            </Link>

            <Link to="/services" className="max-w-[240px] text-[16px] leading-[1.45] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Communication & Candidate Services
            </Link>

          </div>

        </div>

        {/* EXIT POLLS */}
        <div className="footer-column">

          <h3 className="m-0 mb-[25px] text-[16px] font-bold tracking-[-0.02em]">
            Exit Polls 2026 TN
          </h3>

          <a href="#" className="w-fit text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
            Exit Poll
          </a>

        </div>

        {/* CONTACT US */}
        <div className="footer-column">

          <h3 className="m-0 mb-[25px] text-[16px] font-bold tracking-[-0.02em]">
            Contact us
          </h3>

          <div className="flex flex-col items-start gap-[14px]">

            <Link to="/contact" className="text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Get in touch
            </Link>

            <a href="#" className="text-[16px] text-white no-underline transition-opacity duration-300 hover:opacity-70">
              Join PlanPol
            </a>

            <Link to="/contact" className="mt-[2px] inline-flex rounded-full bg-white px-[19px] py-[11px] text-[15px] font-medium text-[#0878f9] no-underline shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
              Start trial
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom flex min-h-[62px] items-center justify-between border-t border-[rgba(255,255,255,0.45)] text-[13px] text-white max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-[15px] max-[700px]:py-[20px]">

        <p className="m-0">
          @2026. All rights reserved by PLANPOL (OPC) PRIVATE LIMITED
        </p>

        <div className="flex items-center gap-[25px] max-[500px]:gap-[15px]">

          <a href="#" className="text-white no-underline transition-opacity duration-300 hover:opacity-70">
            Terms & Conditions
          </a>

          <a href="#" className="text-white no-underline transition-opacity duration-300 hover:opacity-70">
            Privacy Policy
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;