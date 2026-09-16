import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Brains() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .fromTo(".brains-label", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(".brains-hero-title-line", { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.13, ease: "power4.out" }, "-=0.35")
        .fromTo(".brains-hero p", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.45")
        .fromTo(".brains-hero-scroll", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.35")
        .fromTo(".brains-hero-visual", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.25, ease: "power2.out" }, "-=0.9");

      gsap.to(".brains-hero-grid", {
        xPercent: 2,
        yPercent: 3,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-hero-glow", {
        scale: 1.12,
        opacity: 0.72,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-hero-orb", {
        x: 18,
        y: -18,
        scale: 1.04,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-hero-pulse", {
        scale: 1.16,
        opacity: 0.38,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-hero-dot", {
        rotate: 360,
        duration: 12,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(".brains-intro-content", { y: 65, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".brains-intro", start: "top 78%", once: true } });

      gsap.fromTo(".brains-section-heading", { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95, ease: "power3.out", scrollTrigger: { trigger: ".brains-capabilities", start: "top 78%", once: true } });

      gsap.fromTo(".brains-card", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".brains-grid", start: "top 82%", once: true } });

      gsap.to(".brains-capabilities-bg", {
        x: -80,
        y: 35,
        scale: 1.12,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const cards = gsap.utils.toArray(".brains-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".brains-card-icon");
        const arrow = card.querySelector(".brains-card-arrow");

        const enter = () => {
          gsap.to(card, {
            y: -12,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });

          gsap.to(icon, {
            y: -4,
            scale: 1.04,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(arrow, {
            rotate: 45,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });

          gsap.to(icon, {
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(arrow, {
            rotate: 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._brainsEnter = enter;
        card._brainsLeave = leave;
      });

      gsap.fromTo(".brains-data-image", { x: -80, opacity: 0, rotate: -7 }, { x: 0, opacity: 1, rotate: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".brains-data-section", start: "top 75%", once: true } });

      gsap.fromTo(".brains-data-content", { x: 75, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".brains-data-section", start: "top 75%", once: true } });

      gsap.to(".brains-data-image img", {
        y: -16,
        rotate: 3,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-data-ring", {
        rotate: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".brains-data-ring-inner", {
        rotate: -360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".brains-data-center", {
        scale: 1.12,
        opacity: 0.75,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-data-background", {
        x: 80,
        scale: 1.12,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-intelligence-status span", {
        scale: 1.6,
        opacity: 0.55,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(".brains-cta-content", { y: 65, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".brains-cta", start: "top 78%", once: true } });

      gsap.to(".brains-cta-glow", {
        scale: 1.15,
        opacity: 0.55,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".brains-cta-grid", {
        x: 35,
        y: 20,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => {
      const cards = pageRef.current?.querySelectorAll(".brains-card");

      cards?.forEach((card) => {
        if (card._brainsEnter) {
          card.removeEventListener("mouseenter", card._brainsEnter);
        }

        if (card._brainsLeave) {
          card.removeEventListener("mouseleave", card._brainsLeave);
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="brains-page w-full overflow-hidden bg-white text-[#172033]">

      {/* HERO */}
      <section className="brains-hero relative flex min-h-[670px] w-full items-center justify-center overflow-hidden px-[8%] py-[110px] pb-[90px] text-center bg-[radial-gradient(circle_at_15%_25%,rgba(67,180,255,0.16),transparent_30%),radial-gradient(circle_at_82%_65%,rgba(143,104,255,0.15),transparent_32%),linear-gradient(115deg,#e6f8fd_0%,#edf5ff_52%,#f3edff_100%)] max-[900px]:min-h-[580px] max-[900px]:px-[25px] max-[900px]:py-[90px] max-[900px]:pb-[70px] max-[600px]:min-h-[520px] max-[600px]:px-[20px] max-[600px]:py-[80px] max-[600px]:pb-[60px]">

        <div className="brains-hero-grid pointer-events-none absolute -inset-[15%] opacity-[0.32] bg-[linear-gradient(rgba(23,105,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,105,255,0.08)_1px,transparent_1px)] bg-[length:72px_72px] [transform:perspective(700px)_rotateX(55deg)_scale(1.5)] [transform-origin:center_bottom] max-[600px]:bg-[length:45px_45px] max-[600px]:[transform:perspective(500px)_rotateX(55deg)_scale(1.8)]" />

        <div className="brains-hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0.35)_35%,transparent_72%)] max-[600px]:h-[300px] max-[600px]:w-[300px]" />

        <div className="brains-hero-visual pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 opacity-80 max-[600px]:h-[250px] max-[600px]:w-[250px]">

          <div className="brains-hero-orb absolute inset-5 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.85),rgba(23,105,255,0.1)_35%,transparent_68%)] blur-[1px]" />

          <div className="brains-hero-pulse absolute inset-[85px] rounded-full border border-[rgba(23,105,255,0.12)] before:absolute before:inset-[-25px] before:rounded-full before:border before:border-dashed before:border-[rgba(23,105,255,0.08)] after:absolute after:inset-[25px] after:rounded-full after:border after:border-dashed after:border-[rgba(23,105,255,0.08)] max-[600px]:inset-[65px]" />

          <div className="brains-hero-dot absolute left-1/2 top-[34px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#1769ff] shadow-[0_0_0_6px_rgba(23,105,255,0.08),0_0_30px_rgba(23,105,255,0.22)]" />

        </div>

        <div className="brains-hero-content relative z-[5] max-w-[920px]">

          <div className="brains-label mb-5 text-[12px] font-extrabold uppercase tracking-[3px] text-[#1769ff] max-[600px]:text-[10px] max-[600px]:tracking-[2.5px]">
            BRAINS
          </div>

          <h1 className="m-[0_0_28px] text-[clamp(48px,6vw,76px)] font-bold leading-[1.02] tracking-[-3.5px] text-[#172033] max-[900px]:text-[52px] max-[600px]:text-[37px] max-[600px]:tracking-[-1.7px]">
            <span className="brains-hero-title-line block overflow-hidden">
              Intelligence that
            </span>

            <span className="brains-hero-title-line brains-highlight block overflow-hidden text-[#1769ff]">
              powers politics.
            </span>
          </h1>

          <p className="mx-auto max-w-[650px] text-[19px] leading-[1.7] text-[#596579] max-[600px]:text-[16px]">
            Turning political data into actionable intelligence with AI and technology.
          </p>

          <div className="brains-hero-scroll mt-[58px] flex flex-col items-center gap-[11px] max-[600px]:mt-[45px]">
            <span className="relative block h-[42px] w-px overflow-hidden bg-[rgba(23,105,255,0.3)] after:absolute after:left-0 after:top-[-60%] after:h-1/2 after:w-full after:bg-[#1769ff] after:content-[''] after:animate-[brainsScrollLine_2s_ease-in-out_infinite]" />
            <p className="m-0 text-[9px] font-extrabold uppercase tracking-[1.7px] text-[#68748a]">
              Explore intelligence
            </p>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="brains-intro w-full bg-white px-[8%] py-[145px] max-[900px]:px-[25px] max-[900px]:py-[100px] max-[600px]:px-[20px] max-[600px]:py-[75px]">

        <div className="brains-intro-content mx-auto max-w-[900px] text-center">

          <div className="brains-small-label mb-5 text-[12px] font-extrabold uppercase tracking-[3px] text-[#1769ff] max-[600px]:text-[9px] max-[600px]:tracking-[2px]">
            THE POWER OF DATA
          </div>

          <h2 className="m-[0_0_30px] text-[clamp(44px,5vw,64px)] leading-[1.02] tracking-[-2.8px] text-[#172033] max-[600px]:text-[36px] max-[600px]:tracking-[-1.5px]">
            Data is the brain.
            <br />
            <span className="text-[#1769ff]">Intelligence is the advantage.</span>
          </h2>

          <p className="mx-auto mb-5 max-w-[760px] text-[18px] leading-[1.75] text-[#596579] max-[600px]:text-[16px] max-[600px]:leading-[1.7]">
            Politics generates enormous amounts of data. The challenge is turning that data into meaningful insights and actionable decisions.
          </p>

          <p className="mx-auto max-w-[760px] text-[18px] leading-[1.75] text-[#596579] max-[600px]:text-[16px] max-[600px]:leading-[1.7]">
            PlanPol combines AI, technology and hyperlocal intelligence to help political leaders understand their landscape better.
          </p>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="brains-capabilities relative w-full overflow-hidden bg-[#f7f9ff] px-[8%] py-[135px] max-[900px]:px-[25px] max-[900px]:py-[100px] max-[600px]:px-[20px] max-[600px]:py-[80px]">

        <div className="brains-capabilities-bg pointer-events-none absolute right-[-260px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(23,105,255,0.08),transparent_70%)]" />

        <div className="brains-section-heading relative z-[2] mx-auto mb-[75px] max-w-[900px] text-center max-[900px]:mb-[60px] max-[600px]:mb-[48px]">

          <div className="brains-small-label mb-5 text-[12px] font-extrabold uppercase tracking-[3px] text-[#1769ff] max-[600px]:text-[9px] max-[600px]:tracking-[2px]">
            OUR CAPABILITIES
          </div>

          <h2 className="m-0 text-[clamp(44px,5vw,64px)] leading-[1.02] tracking-[-2.8px] text-[#172033] max-[600px]:text-[36px] max-[600px]:tracking-[-1.5px]">
            Intelligence at
            <br />
            <span className="text-[#1769ff]">every level.</span>
          </h2>

          <p className="mx-auto mt-[25px] max-w-[600px] text-[16px] leading-[1.7] text-[#68748a] max-[600px]:text-[14px]">
            Different layers of information come together to create one clearer political picture.
          </p>

        </div>

        <div className="brains-grid relative z-[2] mx-auto grid max-w-[1120px] grid-cols-2 gap-[18px] max-[900px]:max-w-[650px] max-[900px]:grid-cols-1 max-[600px]:gap-[14px]">

          <article className="brains-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.18)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[900px]:min-h-[340px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">
              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">01</div>
              <span className="brains-card-arrow flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e5eaf3] text-[17px] text-[#1769ff] transition-colors duration-300 group-hover:bg-[#f0f5ff]">↗</span>
            </div>

            <div>
              <div className="brains-card-icon mb-5 mt-[25px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#e4ebf7] bg-[#f8faff] text-[#1769ff] max-[600px]:h-[55px] max-[600px]:w-[55px]">
                <span className="brains-icon-bars flex h-7 items-end gap-1">
                  <i className="block h-[10px] w-[5px] rounded-t-[2px] bg-[#1769ff]" />
                  <i className="block h-[18px] w-[5px] rounded-t-[2px] bg-[#1769ff]" />
                  <i className="block h-6 w-[5px] rounded-t-[2px] bg-[#1769ff]" />
                  <i className="block h-[14px] w-[5px] rounded-t-[2px] bg-[#1769ff]" />
                </span>
              </div>

              <h3 className="m-[0_0_16px] text-[28px] leading-[1.1] tracking-[-0.8px] text-[#172033] max-[600px]:text-[26px]">
                Political Data
              </h3>

              <p className="m-0 max-w-[480px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Transforming complex political data into structured information that can be understood and acted upon.
              </p>
            </div>

          </article>

          <article className="brains-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.18)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[900px]:min-h-[340px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">
              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">02</div>
              <span className="brains-card-arrow flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e5eaf3] text-[17px] text-[#1769ff] transition-colors duration-300 group-hover:bg-[#f0f5ff]">↗</span>
            </div>

            <div>
              <div className="brains-card-icon mb-5 mt-[25px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#e4ebf7] bg-[#f8faff] text-[#1769ff] max-[600px]:h-[55px] max-[600px]:w-[55px]">
                <span className="relative h-[25px] w-7 rounded-[48%_52%_50%_48%] border-2 border-[#1769ff] before:absolute before:left-[3px] before:right-[3px] before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-[#1769ff]">
                  <i className="absolute left-[6px] top-[6px] h-1 w-1 rounded-full bg-[#1769ff]" />
                  <i className="absolute right-[6px] top-[6px] h-1 w-1 rounded-full bg-[#1769ff]" />
                  <i className="absolute bottom-1 left-3 h-1 w-1 rounded-full bg-[#1769ff]" />
                </span>
              </div>

              <h3 className="m-[0_0_16px] text-[28px] leading-[1.1] tracking-[-0.8px] text-[#172033] max-[600px]:text-[26px]">
                AI Intelligence
              </h3>

              <p className="m-0 max-w-[480px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Using artificial intelligence to discover patterns, identify opportunities and support smarter political decisions.
              </p>
            </div>

          </article>

          <article className="brains-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.18)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[900px]:min-h-[340px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">
              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">03</div>
              <span className="brains-card-arrow flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e5eaf3] text-[17px] text-[#1769ff] transition-colors duration-300 group-hover:bg-[#f0f5ff]">↗</span>
            </div>

            <div>
              <div className="brains-card-icon mb-5 mt-[25px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#e4ebf7] bg-[#f8faff] text-[#1769ff] max-[600px]:h-[55px] max-[600px]:w-[55px]">
                <span className="relative h-[31px] w-[25px] rotate-[-45deg] rounded-[50%_50%_50%_0] border-2 border-[#1769ff]">
                  <i className="absolute left-[6px] top-[6px] h-2 w-2 rounded-full border-2 border-[#1769ff]" />
                </span>
              </div>

              <h3 className="m-[0_0_16px] text-[28px] leading-[1.1] tracking-[-0.8px] text-[#172033] max-[600px]:text-[26px]">
                Hyperlocal Insights
              </h3>

              <p className="m-0 max-w-[480px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Going beyond broad constituency data to understand political realities at the grassroots and household level.
              </p>
            </div>

          </article>

          <article className="brains-card group relative flex min-h-[365px] flex-col justify-between overflow-hidden rounded-[4px] border border-[rgba(23,105,255,0.08)] bg-white p-8 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#1769ff] before:transition-transform before:duration-[450ms] before:content-[''] hover:-translate-y-3 hover:border-[rgba(23,105,255,0.18)] hover:shadow-[0_25px_60px_rgba(23,105,255,0.09)] hover:before:scale-x-100 max-[900px]:min-h-[340px] max-[600px]:min-h-[330px] max-[600px]:p-[27px]">

            <div className="flex items-center justify-between">
              <div className="text-[12px] font-extrabold tracking-[1.5px] text-[#1769ff]">04</div>
              <span className="brains-card-arrow flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e5eaf3] text-[17px] text-[#1769ff] transition-colors duration-300 group-hover:bg-[#f0f5ff]">↗</span>
            </div>

            <div>
              <div className="brains-card-icon mb-5 mt-[25px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#e4ebf7] bg-[#f8faff] text-[#1769ff] max-[600px]:h-[55px] max-[600px]:w-[55px]">
                <span className="relative h-[22px] w-8 overflow-hidden before:absolute before:left-0 before:top-[11px] before:h-0.5 before:w-full before:bg-[#dce6f8]">
                  <i className="absolute left-0 top-[10px] h-3 w-8 -translate-x-[-5px] -skew-x-[35deg] border-t-2 border-[#1769ff]" />
                </span>
              </div>

              <h3 className="m-[0_0_16px] text-[28px] leading-[1.1] tracking-[-0.8px] text-[#172033] max-[600px]:text-[26px]">
                Real-Time Intelligence
              </h3>

              <p className="m-0 max-w-[480px] text-[15px] leading-[1.75] text-[#68748a] max-[600px]:text-[14px]">
                Giving political teams timely insights so they can respond quickly to changes on the ground.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* DATA VISUALIZATION */}
      <section className="brains-data-section relative flex min-h-[690px] w-full items-center overflow-hidden bg-white px-[8%] py-[110px] max-[900px]:min-h-0 max-[900px]:flex-col max-[900px]:px-[30px] max-[900px]:py-[90px] max-[600px]:px-[20px] max-[600px]:py-[75px] max-[600px]:pb-[85px]">

        <div className="brains-data-background pointer-events-none absolute left-[-280px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(23,105,255,0.08),transparent_68%)]" />

        <div className="brains-data-image relative flex min-h-[500px] w-[48%] items-center justify-center max-[900px]:mb-[30px] max-[900px]:min-h-[430px] max-[900px]:w-full max-[600px]:mb-[15px] max-[600px]:min-h-[300px]">

          <div className="brains-data-ring absolute h-[430px] w-[430px] rounded-full border border-[rgba(23,105,255,0.1)] max-[600px]:h-[270px] max-[600px]:w-[270px]">
            <span className="absolute left-1/2 top-[25px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#1769ff]" />
            <span className="absolute bottom-[90px] right-8 h-[7px] w-[7px] rounded-full bg-[#1769ff]" />
            <span className="absolute bottom-12 left-[55px] h-[7px] w-[7px] rounded-full bg-[#1769ff]" />
          </div>

          <div className="brains-data-ring-inner absolute h-[320px] w-[320px] rounded-full border border-dashed border-[rgba(23,105,255,0.12)] max-[600px]:h-[200px] max-[600px]:w-[200px]" />

          <div className="brains-data-center absolute h-[100px] w-[100px] rounded-full border border-[rgba(23,105,255,0.08)] max-[600px]:h-[70px] max-[600px]:w-[70px]">
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1769ff] shadow-[0_0_0_9px_rgba(23,105,255,0.08)]" />
          </div>

          <img src="/compass.png" alt="Political data intelligence" className="relative z-[5] block w-[min(78%,500px)] drop-shadow-[0_25px_40px_rgba(23,105,255,0.08)] max-[600px]:w-[88%]" />

        </div>

        <div className="brains-data-content relative z-[5] w-[52%] pl-[55px] max-[900px]:w-full max-[900px]:pl-0 max-[900px]:text-center">

          <div className="brains-small-label mb-5 text-[12px] font-extrabold uppercase tracking-[3px] text-[#1769ff] max-[600px]:text-[9px] max-[600px]:tracking-[2px]">
            INTELLIGENCE ENGINE
          </div>

          <h2 className="m-[0_0_30px] text-[clamp(44px,4.8vw,64px)] leading-[1.02] tracking-[-2.8px] text-[#172033] max-[600px]:text-[36px] max-[600px]:tracking-[-1.5px]">
            See what others
            <br />
            <span className="text-[#1769ff]">can&apos;t see.</span>
          </h2>

          <p className="mb-[22px] max-w-[610px] text-[18px] leading-[1.75] text-[#596579] max-[900px]:mx-auto max-[600px]:text-[16px] max-[600px]:leading-[1.7]">
            Our technology brings together multiple layers of political information to reveal patterns that traditional approaches can miss.
          </p>

          <p className="mb-[22px] max-w-[610px] text-[18px] leading-[1.75] text-[#596579] max-[900px]:mx-auto max-[600px]:text-[16px] max-[600px]:leading-[1.7]">
            From voter behaviour and booth-level intelligence to constituency trends, every insight contributes to a clearer political picture.
          </p>

          <div className="brains-intelligence-status mt-[15px] inline-flex items-center gap-2.5 rounded-full border border-[#e5ebf5] px-[15px] py-2.5 text-[9px] font-extrabold tracking-[1.5px] text-[#68748a] max-[900px]:mx-auto max-[600px]:text-[7px] max-[600px]:tracking-[1px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#1769ff] shadow-[0_0_0_4px_rgba(23,105,255,0.08)]" />
            INTELLIGENCE ENGINE ACTIVE
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="brains-cta relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#1769ff] px-[8%] py-[110px] text-center text-white max-[900px]:min-h-[460px] max-[900px]:px-[25px] max-[900px]:py-[90px] max-[600px]:min-h-[440px] max-[600px]:px-[20px] max-[600px]:py-[75px]">

        <div className="brains-cta-grid pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[length:70px_70px] [mask-image:radial-gradient(circle,black_0%,transparent_72%)] [-webkit-mask-image:radial-gradient(circle,black_0%,transparent_72%)]" />

        <div className="brains-cta-glow pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.17),transparent_68%)]" />

        <div className="brains-cta-content relative z-[5] max-w-[850px]">

          <div className="brains-small-label mb-5 text-[12px] font-extrabold uppercase tracking-[3px] text-[rgba(255,255,255,0.82)] max-[600px]:text-[9px] max-[600px]:tracking-[2px]">
            THINK DIFFERENTLY
          </div>

          <h2 className="m-[0_0_25px] text-[clamp(46px,5.5vw,70px)] leading-[1.02] tracking-[-3px] text-white max-[600px]:text-[39px] max-[600px]:tracking-[-1.7px]">
            Better data.
            <br />
            <span className="text-[#dce8ff]">Better decisions.</span>
          </h2>

          <p className="mx-auto max-w-[650px] text-[18px] leading-[1.7] text-[#e8efff] max-[600px]:text-[16px]">
            Use intelligence to turn political complexity into your competitive advantage.
          </p>

          <div className="brains-cta-line mx-auto mt-[55px] flex max-w-[330px] items-center gap-[15px] text-[8px] font-extrabold tracking-[2px] text-[rgba(255,255,255,0.6)] max-[600px]:mt-[45px] max-[600px]:text-[7px]">
            <span className="h-px flex-1 bg-[rgba(255,255,255,0.22)]" />
            PLANPOL INTELLIGENCE
            <span className="h-px flex-1 bg-[rgba(255,255,255,0.22)]" />
          </div>

        </div>
      </section>

    </main>
  );
}

export default Brains; 