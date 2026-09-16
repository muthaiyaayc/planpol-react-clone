import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const pageRef = useRef(null);

  const intelligenceRef = useRef(null);
  const compassLeftRef = useRef(null);
  const compassRightRef = useRef(null);
  const intelligenceContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .fromTo(".our-story-label", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(".our-story-hero-title-line", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12 }, "-=0.35")
        .fromTo(".our-story-hero-scroll", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.45")
        .fromTo(".our-story-hero-glow", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.3, ease: "power2.out" }, "-=1");

      gsap.to(".our-story-hero-orb", {
        y: -18,
        x: 12,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".our-story-hero-grid", {
        y: 15,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        ".our-story-intro-left",
        { x: -55, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-intro",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".our-story-intro-right",
        { x: 55, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-intro",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".our-story-intro-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".our-story-intro",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".our-story-people-heading",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-people-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".our-story-person-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-people-grid",
            start: "top 78%",
            once: true,
          },
        }
      );

      /* =========================================================
         COMPASS SPLIT ANIMATION
      ========================================================= */

      gsap.set(compassLeftRef.current, {
        xPercent: 0,
      });

      gsap.set(compassRightRef.current, {
        xPercent: 0,
      });

      gsap.set(intelligenceContentRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.96,
      });

      const compassTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: intelligenceRef.current,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 1.2,
        },
      });

      compassTimeline
        .to(
          compassLeftRef.current,
          {
            xPercent: -100,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          compassRightRef.current,
          {
            xPercent: 100,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          intelligenceContentRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.45
        );

      /* Compass subtle floating animation */

      gsap.to(".our-story-compass-left-image", {
        y: -10,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".our-story-compass-right-image", {
        y: -10,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        ".our-story-vision-content",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-vision",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.to(".our-story-vision-glow", {
        scale: 1.15,
        opacity: 0.65,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".our-story-vision-grid", {
        y: 18,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full overflow-hidden bg-white text-[#172033]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[690px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(78,168,255,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(151,111,255,0.14),transparent_30%),linear-gradient(115deg,#e7f8fd_0%,#edf5ff_50%,#f3edff_100%)] px-[8%] py-[110px] pb-[90px] max-[1000px]:min-h-[600px] max-[1000px]:px-[30px] max-[1000px]:py-[100px] max-[1000px]:pb-[80px] max-[600px]:min-h-[560px] max-[600px]:px-[20px] max-[600px]:py-[90px] max-[600px]:pb-[65px]">

        <div className="our-story-hero-grid pointer-events-none absolute -inset-[10%] opacity-[0.35] bg-[linear-gradient(rgba(23,105,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,105,255,0.08)_1px,transparent_1px)] bg-[length:75px_75px] [transform:perspective(700px)_rotateX(55deg)_scale(1.5)] [transform-origin:center_bottom] max-[600px]:bg-[length:45px_45px] max-[600px]:[transform:perspective(500px)_rotateX(55deg)_scale(1.8)]" />

        <div className="our-story-hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.4)_35%,rgba(255,255,255,0)_72%)] blur-[5px] max-[600px]:h-[300px] max-[600px]:w-[300px]" />

        <div className="our-story-hero-orb pointer-events-none absolute right-[12%] top-[18%] h-[125px] w-[125px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(23,105,255,0.15)_38%,rgba(23,105,255,0.03)_70%)] opacity-80 blur-[1px] max-[600px]:right-[5%] max-[600px]:top-[15%] max-[600px]:h-[75px] max-[600px]:w-[75px]" />

        <div className="relative z-[5] w-full max-w-[1120px] text-center">

          <div className="our-story-label mb-[30px] text-[13px] font-extrabold uppercase tracking-[3.5px] text-[#1769ff] max-[600px]:mb-[22px] max-[600px]:text-[10px] max-[600px]:tracking-[2.5px]">
            OUR STORY
          </div>

          <h1 className="m-0 text-[clamp(48px,6vw,76px)] font-bold leading-[1.02] tracking-[-3.5px] text-[#172033] max-[1000px]:text-[clamp(44px,7vw,62px)] max-[600px]:text-[35px] max-[600px]:leading-[1.06] max-[600px]:tracking-[-1.5px]">

            <span className="our-story-hero-title-line block overflow-hidden">
              PlanPol is built at the
            </span>

            <span className="our-story-hero-title-line block overflow-hidden">
              intersection of
            </span>

            <span className="our-story-hero-title-line block overflow-hidden text-[#1769ff]">
              politics, data, and technology.
            </span>

          </h1>

          <div className="our-story-hero-scroll mt-[65px] flex flex-col items-center gap-3 max-[600px]:mt-[50px]">

            <span className="relative block h-[45px] w-px overflow-hidden bg-[rgba(23,105,255,0.35)] after:absolute after:left-0 after:top-[-60%] after:h-1/2 after:w-full after:bg-[#1769ff] after:content-[''] after:animate-[storyScrollLine_2s_ease-in-out_infinite]" />

            <p className="m-0 text-[11px] font-bold uppercase tracking-[1.8px] text-[#68748a]">
              Scroll to explore
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="our-story-intro grid w-full grid-cols-[0.95fr_1.05fr] gap-[100px] bg-white px-[10%] py-[145px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[55px] max-[1000px]:px-[40px] max-[1000px]:py-[100px] max-[600px]:gap-[40px] max-[600px]:px-[22px] max-[600px]:py-[75px]">

        <div className="our-story-intro-left flex flex-col justify-center">

          <div className="mb-5 text-[12px] font-extrabold uppercase tracking-[2.5px] text-[#1769ff] max-[600px]:mb-[15px] max-[600px]:text-[10px] max-[600px]:tracking-[2px]">
            OUR MISSION
          </div>

          <h2 className="m-0 text-[clamp(42px,4.4vw,62px)] leading-[1.02] tracking-[-2.7px] text-[#172033] max-[600px]:text-[36px] max-[600px]:tracking-[-1.5px]">
            Technology that
            <br />
            <span className="text-[#1769ff]">equalises politics.</span>
          </h2>

        </div>

        <div className="our-story-intro-right relative flex flex-col justify-center pl-[45px] max-[1000px]:pl-[35px] max-[600px]:pl-[25px]">

          <div className="our-story-intro-line absolute bottom-0 left-0 top-0 w-px bg-[linear-gradient(to_bottom,transparent,rgba(23,105,255,0.35),transparent)]" />

          <p className="m-[0_0_28px] max-w-[610px] text-[19px] leading-[1.75] text-[#596579] max-[600px]:text-[16px] max-[600px]:leading-[1.7]">
            PlanPol is more than a political technology platform. It&apos;s an equaliser, using AI and data-driven tools to break down barriers to participation in politics.
          </p>

          <p className="m-0 max-w-[610px] text-[19px] leading-[1.75] text-[#596579] max-[600px]:text-[16px] max-[600px]:leading-[1.7]">
            We believe technology can make political opportunity more accessible, transparent, and meaningful for everyone.
          </p>

        </div>
      </section>

      {/* =========================================================
          PEOPLE
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-[#f7f9ff] px-[8%] py-[135px] max-[1000px]:px-[30px] max-[1000px]:py-[100px] max-[600px]:px-[20px] max-[600px]:py-[80px]">

        <div className="absolute right-[8%] top-[70px] flex gap-2 opacity-45 max-[600px]:right-[20px] max-[600px]:top-[35px]">
          <span className="h-[5px] w-[5px] rounded-full bg-[#1769ff]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#1769ff]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#1769ff]" />
        </div>

        <div className="our-story-people-heading mx-auto mb-[75px] max-w-[850px] text-center max-[600px]:mb-[50px]">

          <div className="mb-5 text-[12px] font-extrabold uppercase tracking-[2.5px] text-[#1769ff] max-[600px]:mb-[15px] max-[600px]:text-[10px] max-[600px]:tracking-[2px]">
            BUILT FOR EVERYONE
          </div>

          <h2 className="m-0 text-[clamp(44px,5vw,64px)] leading-[1.02] tracking-[-2.8px] text-[#172033] max-[600px]:text-[36px] max-[600px]:tracking-[-1.5px]">
            Politics belongs
            <br />
            <span className="text-[#1769ff]">to the people.</span>
          </h2>

          <p className="mx-auto mt-[30px] max-w-[610px] text-[17px] leading-[1.7] text-[#68748a] max-[600px]:mt-[22px] max-[600px]:text-[15px]">
            We build technology for the people who make democracy move — from the grassroots to the individual citizen.
          </p>

        </div>

        <div className="our-story-people-grid mx-auto grid max-w-[1180px] grid-cols-3 gap-[18px] max-[1000px]:max-w-[650px] max-[1000px]:grid-cols-1 max-[1000px]:gap-4">

          <article className="our-story-person-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.16)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[1000px]:min-h-[330px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">

              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">
                01
              </div>

              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e6ebf5] text-[17px] text-[#1769ff] transition-all duration-[350ms] group-hover:rotate-45 group-hover:border-[#dce6fb] group-hover:bg-[#f0f5ff]">
                ↗
              </span>

            </div>

            <div>

              <h3 className="m-[0_0_20px] text-[30px] leading-[1.08] tracking-[-1px] text-[#172033] max-[600px]:text-[28px]">
                Grassroots
                <br />
                Organiser
              </h3>

              <p className="m-0 max-w-[320px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Empowering grassroots organisers with data and technology to understand their communities and build stronger movements.
              </p>

            </div>

          </article>

          <article className="our-story-person-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.16)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[1000px]:min-h-[330px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">

              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">
                02
              </div>

              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e6ebf5] text-[17px] text-[#1769ff] transition-all duration-[350ms] group-hover:rotate-45 group-hover:border-[#dce6fb] group-hover:bg-[#f0f5ff]">
                ↗
              </span>

            </div>

            <div>

              <h3 className="m-[0_0_20px] text-[30px] leading-[1.08] tracking-[-1px] text-[#172033] max-[600px]:text-[28px]">
                Political
                <br />
                Aspirant
              </h3>

              <p className="m-0 max-w-[320px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Helping political aspirants understand their constituency, build credibility, and create a path towards political success.
              </p>

            </div>

          </article>

          <article className="our-story-person-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.16)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[1000px]:min-h-[330px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">

              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">
                03
              </div>

              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e6ebf5] text-[17px] text-[#1769ff] transition-all duration-[350ms] group-hover:rotate-45 group-hover:border-[#dce6fb] group-hover:bg-[#f0f5ff]">
                ↗
              </span>

            </div>

            <div>

              <h3 className="m-[0_0_20px] text-[30px] leading-[1.08] tracking-[-1px] text-[#172033] max-[600px]:text-[28px]">
                Citizen
              </h3>

              <p className="m-0 max-w-[320px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Making politics easier to understand and helping citizens participate meaningfully in the democratic process.
              </p>

            </div>

          </article>

        </div>
      </section>

      {/* =========================================================
          DATA + INTELLIGENCE
          COMPASS SPLITS LEFT + RIGHT
      ========================================================= */}

      <section ref={intelligenceRef} className="our-story-intelligence relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-white px-[5%] py-[100px] max-[1000px]:min-h-[800px] max-[1000px]:px-[25px] max-[700px]:min-h-[850px]">

        {/* LEFT BACKGROUND GLOW */}

        <div className="pointer-events-none absolute left-[-300px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(23,105,255,0.08),rgba(23,105,255,0)_68%)]" />

        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}

        <div ref={intelligenceContentRef} className="our-story-intelligence-content relative z-[2] mx-auto w-[520px] max-w-[90%] text-center">

          <div className="mb-[22px] text-[12px] font-extrabold uppercase tracking-[3px] text-[#1769ff] max-[600px]:text-[10px]">
            DATA + TECHNOLOGY
          </div>

          <h2 className="m-0 text-[clamp(44px,5vw,70px)] leading-[0.98] tracking-[-3px] text-[#172033] max-[600px]:text-[38px] max-[600px]:tracking-[-1.5px]">
            Making
            <br />
            complexity
            <br />
            <span className="text-[#1769ff]">
              simple.
            </span>
          </h2>

          <p className="mx-auto mt-[42px] max-w-[510px] text-[18px] leading-[1.75] text-[#596579] max-[700px]:mt-[30px] max-[600px]:text-[15px] max-[600px]:leading-[1.7]">
            We combine political experience with technology, data and research to uncover what really matters to people.
          </p>

          <a href="/our-story" className="mt-[38px] inline-flex items-center gap-[14px] text-[14px] font-semibold text-[#111] no-underline transition duration-300 hover:translate-x-[5px]">
            Discover our story
            <span className="text-[20px] text-[#1769ff]">
              ↗
            </span>
          </a>

        </div>

        {/* =====================================================
            COMPASS SPLIT WRAPPER

            Both halves overlap in the center.
        ===================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[4] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 max-[900px]:h-[500px] max-[900px]:w-[500px] max-[700px]:h-[400px] max-[700px]:w-[400px] max-[500px]:h-[340px] max-[500px]:w-[340px]">

          {/* LEFT HALF */}

          <div ref={compassLeftRef} className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">

            <img src="/compass.png" alt="PlanPol intelligence compass" className="our-story-compass-left-image absolute left-0 top-0 h-full w-[200%] max-w-none object-contain" />

          </div>

          {/* RIGHT HALF */}

          <div ref={compassRightRef} className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">

            <img src="/compass.png" alt="PlanPol intelligence compass" className="our-story-compass-right-image absolute right-0 top-0 h-full w-[200%] max-w-none object-contain" />

          </div>

        </div>

      </section>

      {/* =========================================================
          VISION
      ========================================================= */}

      <section className="our-story-vision relative flex min-h-[650px] w-full items-center justify-center overflow-hidden bg-[#1769ff] px-[8%] py-[125px] text-center text-white max-[1000px]:px-[30px] max-[1000px]:py-[100px] max-[600px]:min-h-[580px] max-[600px]:px-[20px] max-[600px]:py-[80px]">

        <div className="our-story-vision-glow pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(255,255,255,0)_68%)] opacity-40" />

        <div className="our-story-vision-grid absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:75px_75px] [mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)]" />

        <div className="our-story-vision-content relative z-[5] mx-auto max-w-[900px]">

          <div className="mb-5 text-[12px] font-extrabold uppercase tracking-[2.5px] text-[rgba(255,255,255,0.82)] max-[600px]:mb-[15px] max-[600px]:text-[10px] max-[600px]:tracking-[2px]">
            OUR VISION
          </div>

          <h2 className="m-[0_0_32px] text-[clamp(46px,5.5vw,72px)] leading-[1.02] tracking-[-3px] text-white max-[600px]:text-[38px] max-[600px]:tracking-[-1.5px]">
            Decentralising
            <br />
            <span className="text-[#dce8ff]">
              political opportunity.
            </span>
          </h2>

          <p className="mx-auto mb-5 max-w-[700px] text-[18px] leading-[1.75] text-[rgba(255,255,255,0.84)] max-[600px]:text-[15px] max-[600px]:leading-[1.7]">
            Our mission is to decentralise political opportunity and restore politics to serving people.
          </p>

          <p className="mx-auto mb-5 max-w-[700px] text-[18px] leading-[1.75] text-[rgba(255,255,255,0.84)] max-[600px]:text-[15px] max-[600px]:leading-[1.7]">
            PlanPol is non-partisan and available 24/7, all year round — because political participation shouldn&apos;t have an off-season.
          </p>

          <div className="mx-auto mt-[75px] flex max-w-[780px] items-center justify-between border-t border-[rgba(255,255,255,0.2)] pt-[22px] text-[9px] font-extrabold tracking-[2px] text-[rgba(255,255,255,0.62)] max-[600px]:mt-[55px] max-[600px]:flex-col max-[600px]:gap-3 max-[600px]:text-[8px]">

            <span>
              PLANPOL
            </span>

            <span>
              POLITICS × DATA × TECHNOLOGY
            </span>

          </div>

        </div>
      </section>

    </main>
  );
}

export default OurStory;