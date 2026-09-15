import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Brains.css";

gsap.registerPlugin(ScrollTrigger);

function Brains() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ========================================
         HERO INTRO
      ======================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .fromTo(
          ".brains-label",
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          }
        )
        .fromTo(
          ".brains-hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".brains-hero p",
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.45"
        )
        .fromTo(
          ".brains-hero-scroll",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
          },
          "-=0.35"
        )
        .fromTo(
          ".brains-hero-visual",
          {
            scale: 0.7,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.25,
            ease: "power2.out",
          },
          "-=0.9"
        );

      /* ========================================
         HERO BACKGROUND MOTION
      ======================================== */

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

      /* ========================================
         INTRO
      ======================================== */

      gsap.fromTo(
        ".brains-intro-content",
        {
          y: 65,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brains-intro",
            start: "top 78%",
            once: true,
          },
        }
      );

      /* ========================================
         CAPABILITIES
      ======================================== */

      gsap.fromTo(
        ".brains-section-heading",
        {
          y: 55,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brains-capabilities",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".brains-card",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brains-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* ========================================
         CAPABILITY BACKGROUND
      ======================================== */

      gsap.to(".brains-capabilities-bg", {
        x: -80,
        y: 35,
        scale: 1.12,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ========================================
         CARD HOVER MOTION
      ======================================== */

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

      /* ========================================
         DATA SECTION
      ======================================== */

      gsap.fromTo(
        ".brains-data-image",
        {
          x: -80,
          opacity: 0,
          rotate: -7,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brains-data-section",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".brains-data-content",
        {
          x: 75,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brains-data-section",
            start: "top 75%",
            once: true,
          },
        }
      );

      /* ========================================
         DATA VISUAL MOTION
      ======================================== */

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

      /* ========================================
         DATA STATUS
      ======================================== */

      gsap.to(".brains-intelligence-status span", {
        scale: 1.6,
        opacity: 0.55,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ========================================
         CTA
      ======================================== */

      gsap.fromTo(
        ".brains-cta-content",
        {
          y: 65,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brains-cta",
            start: "top 78%",
            once: true,
          },
        }
      );

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

      /* ========================================
         REFRESH
      ======================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => {
      const cards = pageRef.current?.querySelectorAll(".brains-card");

      cards?.forEach((card) => {
        if (card._brainsEnter) {
          card.removeEventListener(
            "mouseenter",
            card._brainsEnter
          );
        }

        if (card._brainsLeave) {
          card.removeEventListener(
            "mouseleave",
            card._brainsLeave
          );
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <main className="brains-page" ref={pageRef}>
      {/* ========================================
          HERO
      ======================================== */}

      <section className="brains-hero">
        <div className="brains-hero-grid" />

        <div className="brains-hero-glow" />

        <div className="brains-hero-visual">
          <div className="brains-hero-orb" />
          <div className="brains-hero-pulse" />
          <div className="brains-hero-dot" />
        </div>

        <div className="brains-hero-content">
          <div className="brains-label">BRAINS</div>

          <h1>
            <span className="brains-hero-title-line">
              Intelligence that
            </span>

            <span className="brains-hero-title-line brains-highlight">
              powers politics.
            </span>
          </h1>

          <p>
            Turning political data into actionable
            intelligence with AI and technology.
          </p>

          <div className="brains-hero-scroll">
            <span />
            <p>Explore intelligence</p>
          </div>
        </div>
      </section>

      {/* ========================================
          INTRO
      ======================================== */}

      <section className="brains-intro">
        <div className="brains-intro-content">
          <div className="brains-small-label">
            THE POWER OF DATA
          </div>

          <h2>
            Data is the brain.
            <br />
            <span>Intelligence is the advantage.</span>
          </h2>

          <p>
            Politics generates enormous amounts of data.
            The challenge is turning that data into
            meaningful insights and actionable decisions.
          </p>

          <p>
            PlanPol combines AI, technology and
            hyperlocal intelligence to help political
            leaders understand their landscape better.
          </p>
        </div>
      </section>

      {/* ========================================
          INTELLIGENCE CARDS
      ======================================== */}

      <section className="brains-capabilities">
        <div className="brains-capabilities-bg" />

        <div className="brains-section-heading">
          <div className="brains-small-label">
            OUR CAPABILITIES
          </div>

          <h2>
            Intelligence at
            <br />
            <span>every level.</span>
          </h2>

          <p>
            Different layers of information come together
            to create one clearer political picture.
          </p>
        </div>

        <div className="brains-grid">
          <article className="brains-card">
            <div className="brains-card-top">
              <div className="brains-card-number">01</div>

              <span className="brains-card-arrow">↗</span>
            </div>

            <div className="brains-card-icon">
              <span className="brains-icon-bars">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>

            <div>
              <h3>Political Data</h3>

              <p>
                Transforming complex political data into
                structured information that can be understood
                and acted upon.
              </p>
            </div>
          </article>

          <article className="brains-card">
            <div className="brains-card-top">
              <div className="brains-card-number">02</div>

              <span className="brains-card-arrow">↗</span>
            </div>

            <div className="brains-card-icon">
              <span className="brains-icon-brain">
                <i />
                <i />
                <i />
              </span>
            </div>

            <div>
              <h3>AI Intelligence</h3>

              <p>
                Using artificial intelligence to discover
                patterns, identify opportunities and support
                smarter political decisions.
              </p>
            </div>
          </article>

          <article className="brains-card">
            <div className="brains-card-top">
              <div className="brains-card-number">03</div>

              <span className="brains-card-arrow">↗</span>
            </div>

            <div className="brains-card-icon">
              <span className="brains-icon-location">
                <i />
              </span>
            </div>

            <div>
              <h3>Hyperlocal Insights</h3>

              <p>
                Going beyond broad constituency data to
                understand political realities at the
                grassroots and household level.
              </p>
            </div>
          </article>

          <article className="brains-card">
            <div className="brains-card-top">
              <div className="brains-card-number">04</div>

              <span className="brains-card-arrow">↗</span>
            </div>

            <div className="brains-card-icon">
              <span className="brains-icon-pulse">
                <i />
              </span>
            </div>

            <div>
              <h3>Real-Time Intelligence</h3>

              <p>
                Giving political teams timely insights so
                they can respond quickly to changes on
                the ground.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          DATA VISUALIZATION
      ======================================== */}

      <section className="brains-data-section">
        <div className="brains-data-background" />

        <div className="brains-data-image">
          <div className="brains-data-ring">
            <span />
            <span />
            <span />
          </div>

          <div className="brains-data-ring-inner" />

          <div className="brains-data-center">
            <span />
          </div>

          <img
            src="/compass.png"
            alt="Political data intelligence"
          />
        </div>

        <div className="brains-data-content">
          <div className="brains-small-label">
            INTELLIGENCE ENGINE
          </div>

          <h2>
            See what others
            <br />
            <span>can&apos;t see.</span>
          </h2>

          <p>
            Our technology brings together multiple
            layers of political information to reveal
            patterns that traditional approaches can miss.
          </p>

          <p>
            From voter behaviour and booth-level
            intelligence to constituency trends, every
            insight contributes to a clearer political
            picture.
          </p>

          <div className="brains-intelligence-status">
            <span />
            INTELLIGENCE ENGINE ACTIVE
          </div>
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="brains-cta">
        <div className="brains-cta-grid" />

        <div className="brains-cta-glow" />

        <div className="brains-cta-content">
          <div className="brains-small-label">
            THINK DIFFERENTLY
          </div>

          <h2>
            Better data.
            <br />
            <span>Better decisions.</span>
          </h2>

          <p>
            Use intelligence to turn political complexity
            into your competitive advantage.
          </p>

          <div className="brains-cta-line">
            <span />
            PLANPOL INTELLIGENCE
            <span />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Brains;