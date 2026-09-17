import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StorySection() {
  const sectionRef = useRef(null);
  const compassLeftRef = useRef(null);
  const compassRightRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         INITIAL STATE
      ========================= */

      gsap.set(compassLeftRef.current, {
        x: 0,
      });

      gsap.set(compassRightRef.current, {
        x: 0,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 30,
      });

      /* =========================
         COMPASS SPLIT + CONTENT REVEAL
      ========================= */

      const splitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 1,
        },
      });

      splitTimeline
        .to(
          compassLeftRef.current,
          {
            x: "-38vw",
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          compassRightRef.current,
          {
            x: "38vw",
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          0.25
        );

      /* =========================
         COMPASS FLOATING ANIMATION
      ========================= */

      gsap.to(".home-compass-left-image", {
        y: -8,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".home-compass-right-image", {
        y: -8,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* =========================
         CONTENT FLOAT / REVEAL
      ========================= */

      gsap.to(".home-story-copy", {
        y: -5,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-[760px] w-full items-center justify-center overflow-hidden bg-white max-[1000px]:min-h-[650px] max-[700px]:min-h-[720px]">

      {/* =========================
          CENTER STORY CONTENT
      ========================= */}

      <div ref={contentRef} className="home-story-copy relative z-[2] w-[540px] max-w-[90%] text-center">

        <span className="block text-[11px] font-bold uppercase tracking-[3px] text-[#1557ff]">
          DATA + TECHNOLOGY
        </span>

        <h2 className="m-[25px_0_30px] text-[clamp(50px,5.8vw,82px)] font-medium leading-[0.92] tracking-[-0.07em] text-[#111] max-[700px]:text-[54px]">
          Making
          <br />
          complexity
          <br />
          <span className="text-[#1557ff]">
            simple.
          </span>
        </h2>

        <p className="mx-auto mt-[35px] max-w-[520px] text-[17px] font-normal leading-[1.75] text-[#70757e] max-[700px]:text-[15px]">
         Armed with 100 years of combined experience, a tech-first approach, unwavering focus, tactical know-how, and an unbeatable capacity for synergy, our team leaves no stone unturned in delivering the target: impactful political consulting is in PlanPol's DNA.
        </p>

      </div>

      {/* =========================
          COMPASS SPLIT CONTAINER
      ========================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[4] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 max-[1000px]:h-[520px] max-[1000px]:w-[520px] max-[700px]:h-[430px] max-[700px]:w-[430px] max-[500px]:h-[340px] max-[500px]:w-[340px]">

        {/* =========================
            LEFT HALF
        ========================= */}

        <div ref={compassLeftRef} className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">

          <img src="/compass.png" alt="Compass" className="home-compass-left-image absolute left-0 top-0 h-full w-[200%] max-w-none object-contain" />

        </div>

        {/* =========================
            RIGHT HALF
        ========================= */}

        <div ref={compassRightRef} className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">

          <img src="/compass.png" alt="Compass" className="home-compass-right-image absolute right-0 top-0 h-full w-[200%] max-w-none object-contain" />

        </div>

      </div>

    </section>
  );
}

export default StorySection;