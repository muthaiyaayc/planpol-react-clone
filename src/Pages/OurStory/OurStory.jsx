import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurStory.css";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ========================================
         HERO
      ======================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .fromTo(
          ".our-story-label",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          }
        )
        .fromTo(
          ".our-story-hero-title-line",
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .fromTo(
          ".our-story-hero-scroll",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.45"
        )
        .fromTo(
          ".our-story-hero-glow",
          {
            scale: 0.6,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.3,
            ease: "power2.out",
          },
          "-=1"
        );

      /* ========================================
         HERO FLOATING ELEMENTS
      ======================================== */

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

      /* ========================================
         INTRO
      ======================================== */

      gsap.fromTo(
        ".our-story-intro-left",
        {
          x: -55,
          opacity: 0,
        },
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
        {
          x: 55,
          opacity: 0,
        },
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
        {
          scaleY: 0,
          transformOrigin: "top",
        },
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

      /* ========================================
         PEOPLE HEADING
      ======================================== */

      gsap.fromTo(
        ".our-story-people-heading",
        {
          y: 55,
          opacity: 0,
        },
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

      /* ========================================
         PEOPLE CARDS
      ======================================== */

      gsap.fromTo(
        ".our-story-person-card",
        {
          y: 70,
          opacity: 0,
        },
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

      /* ========================================
         INTELLIGENCE
      ======================================== */

      gsap.fromTo(
        ".our-story-intelligence-image",
        {
          x: -80,
          opacity: 0,
          rotate: -8,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-intelligence",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".our-story-intelligence-content",
        {
          x: 70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".our-story-intelligence",
            start: "top 75%",
            once: true,
          },
        }
      );

      /* ========================================
         COMPASS FLOAT
      ======================================== */

      gsap.to(".our-story-intelligence-image img", {
        y: -16,
        rotate: 3,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ========================================
         IMAGE RINGS
      ======================================== */

      gsap.to(".our-story-image-ring", {
        rotate: 360,
        duration: 24,
        ease: "none",
        repeat: -1,
      });

      /* ========================================
         VISION
      ======================================== */

      gsap.fromTo(
        ".our-story-vision-content",
        {
          y: 70,
          opacity: 0,
        },
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

      /* ========================================
         VISION GLOW
      ======================================== */

      gsap.to(".our-story-vision-glow", {
        scale: 1.15,
        opacity: 0.65,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ========================================
         VISION GRID
      ======================================== */

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
    <main
      className="our-story-page"
      ref={pageRef}
    >
      {/* ========================================
          HERO
      ======================================== */}

      <section className="our-story-hero">
        <div className="our-story-hero-grid" />

        <div className="our-story-hero-glow" />

        <div className="our-story-hero-orb" />

        <div className="our-story-hero-content">

          <div className="our-story-label">
            OUR STORY
          </div>

          <h1>
            <span className="our-story-hero-title-line">
              PlanPol is built at the
            </span>

            <span className="our-story-hero-title-line">
              intersection of
            </span>

            <span className="our-story-hero-title-line our-story-highlight">
              politics, data, and technology.
            </span>
          </h1>

          <div className="our-story-hero-scroll">
            <span />
            <p>Scroll to explore</p>
          </div>

        </div>
      </section>

      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <section className="our-story-intro">

        <div className="our-story-intro-left">
          <div className="our-story-small-label">
            OUR MISSION
          </div>

          <h2>
            Technology that
            <br />
            <span>equalises politics.</span>
          </h2>
        </div>

        <div className="our-story-intro-right">

          <div className="our-story-intro-line" />

          <p>
            PlanPol is more than a political technology
            platform. It&apos;s an equaliser, using AI and
            data-driven tools to break down barriers to
            participation in politics.
          </p>

          <p>
            We believe technology can make political
            opportunity more accessible, transparent,
            and meaningful for everyone.
          </p>

        </div>

      </section>

      {/* ========================================
          WHO WE BUILD FOR
      ======================================== */}

      <section className="our-story-people">

        <div className="our-story-section-decoration">
          <span />
          <span />
          <span />
        </div>

        <div className="our-story-people-heading">

          <div className="our-story-small-label">
            BUILT FOR EVERYONE
          </div>

          <h2>
            Politics belongs
            <br />
            <span>to the people.</span>
          </h2>

          <p>
            We build technology for the people who make
            democracy move — from the grassroots to the
            individual citizen.
          </p>

        </div>

        <div className="our-story-people-grid">

          <article className="our-story-person-card">

            <div className="our-story-person-top">
              <div className="our-story-person-number">
                01
              </div>

              <span className="our-story-card-arrow">
                ↗
              </span>
            </div>

            <div className="our-story-card-content">

              <h3>
                Grassroots
                <br />
                Organiser
              </h3>

              <p>
                Empowering grassroots organisers with
                data and technology to understand their
                communities and build stronger movements.
              </p>

            </div>

          </article>

          <article className="our-story-person-card">

            <div className="our-story-person-top">
              <div className="our-story-person-number">
                02
              </div>

              <span className="our-story-card-arrow">
                ↗
              </span>
            </div>

            <div className="our-story-card-content">

              <h3>
                Political
                <br />
                Aspirant
              </h3>

              <p>
                Helping political aspirants understand
                their constituency, build credibility,
                and create a path towards political
                success.
              </p>

            </div>

          </article>

          <article className="our-story-person-card">

            <div className="our-story-person-top">
              <div className="our-story-person-number">
                03
              </div>

              <span className="our-story-card-arrow">
                ↗
              </span>
            </div>

            <div className="our-story-card-content">

              <h3>
                Citizen
              </h3>

              <p>
                Making politics easier to understand and
                helping citizens participate meaningfully
                in the democratic process.
              </p>

            </div>

          </article>

        </div>
      </section>

      {/* ========================================
          HYPERLOCAL INTELLIGENCE
      ======================================== */}

      <section className="our-story-intelligence">

        <div className="our-story-intelligence-bg-circle" />

        <div className="our-story-intelligence-image">

          <div className="our-story-image-ring" />

          <img
            src="/compass.png"
            alt="PlanPol intelligence"
          />

        </div>

        <div className="our-story-intelligence-content">

          <div className="our-story-small-label">
            DATA + INTELLIGENCE
          </div>

          <h2>
            From households
            <br />
            to <span>constituencies.</span>
          </h2>

          <p>
            PlanPol brings household-level intelligence
            and hyperlocal data together to create a
            deeper understanding of political landscapes.
          </p>

          <p>
            Our technology transforms complex data into
            actionable intelligence, helping political
            leaders make better decisions.
          </p>

          <div className="our-story-intelligence-tag">
            <span />
            HYPERLOCAL INTELLIGENCE
          </div>

        </div>

      </section>

      {/* ========================================
          VISION
      ======================================== */}

      <section className="our-story-vision">

        <div className="our-story-vision-glow" />

        <div className="our-story-vision-grid" />

        <div className="our-story-vision-content">

          <div className="our-story-small-label">
            OUR VISION
          </div>

          <h2>
            Decentralising
            <br />
            <span>political opportunity.</span>
          </h2>

          <p>
            Our mission is to decentralise political
            opportunity and restore politics to serving
            people.
          </p>

          <p>
            PlanPol is non-partisan and available
            24/7, all year round — because political
            participation shouldn&apos;t have an off-season.
          </p>

          <div className="our-story-vision-bottom">
            <span>PLANPOL</span>
            <span>POLITICS × DATA × TECHNOLOGY</span>
          </div>

        </div>

      </section>
    </main>
  );
}

export default OurStory;