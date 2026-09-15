import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const pageRef = useRef(null);

  const services = [
    {
      number: "01",
      title: "Political Consulting",
      description:
        "Data-driven political consulting designed to help political leaders and organisations make better decisions.",
      points: [
        "Political Strategy",
        "Campaign Planning",
        "Constituency Intelligence",
        "Leadership Positioning",
      ],
    },
    {
      number: "02",
      title: "Campaign Strategy",
      description:
        "Build a focused campaign strategy using technology, data and hyperlocal intelligence.",
      points: [
        "Campaign Intelligence",
        "Voter Understanding",
        "Message Strategy",
        "Ground Campaign Planning",
      ],
    },
    {
      number: "03",
      title: "Data & Intelligence",
      description:
        "Turn political data into actionable intelligence that helps you understand your constituency.",
      points: [
        "Voter Data",
        "Booth Intelligence",
        "Household-Level Insights",
        "Real-Time Analysis",
      ],
    },
    {
      number: "04",
      title: "Digital Political Strategy",
      description:
        "Create a consistent digital political presence and communicate with your audience effectively.",
      points: [
        "Digital Positioning",
        "Political Content",
        "Communication Strategy",
        "Narrative Building",
      ],
    },
  ];

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
          ".services-hero-eyebrow",
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
          ".services-hero-title .hero-line",
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".services-hero-copy",
          {
            y: 30,
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
          ".services-scroll",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
          },
          "-=0.4"
        );

      /* ========================================
         HERO BACKGROUND
      ======================================== */

      gsap.to(".services-hero-grid", {
        xPercent: 1.5,
        yPercent: 2,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".services-hero-orb", {
        y: -35,
        x: 18,
        rotate: 12,
        scale: 1.04,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ========================================
         SCROLL ARROW
      ======================================== */

      gsap.to(".scroll-arrow", {
        y: 5,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ========================================
         INTRO
      ======================================== */

      gsap.fromTo(
        ".services-intro-label",
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-intro",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-intro-heading .intro-line",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-intro-heading",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-intro-copy",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-intro-copy",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* ========================================
         SERVICE CARDS
      ======================================== */

      const cards = gsap.utils.toArray(".service-card");

      cards.forEach((card) => {
        const number = card.querySelector(".service-number");
        const content = card.querySelector(".service-main");
        const points = card.querySelectorAll(".service-point");
        const arrow = card.querySelector(".service-card-arrow");

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });

        cardTimeline
          .fromTo(
            card,
            {
              y: 70,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            }
          )
          .fromTo(
            number,
            {
              x: -30,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.55"
          )
          .fromTo(
            content.children,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.45"
          )
          .fromTo(
            points,
            {
              x: 24,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              stagger: 0.07,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.45"
          )
          .fromTo(
            arrow,
            {
              scale: 0,
              rotate: -30,
              opacity: 0,
            },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.45,
              ease: "back.out(1.7)",
            },
            "-=0.35"
          );

        /* Card hover */

        const enter = () => {
          gsap.to(card, {
            y: -4,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(arrow, {
            rotate: 45,
            scale: 1.05,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(points, {
            x: 3,
            duration: 0.3,
            stagger: 0.035,
            ease: "power2.out",
            overwrite: true,
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(arrow, {
            rotate: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(points, {
            x: 0,
            duration: 0.3,
            stagger: 0.035,
            ease: "power2.out",
            overwrite: true,
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._servicesEnter = enter;
        card._servicesLeave = leave;
      });

      /* ========================================
         CTA
      ======================================== */

      gsap.fromTo(
        ".services-cta-inner",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-cta",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.to(".services-cta-orb", {
        y: -20,
        x: -15,
        rotate: 10,
        scale: 1.03,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ========================================
         CTA BUTTON
      ======================================== */

      const ctaButton = pageRef.current?.querySelector(
        ".services-cta-button"
      );

      if (ctaButton) {
        const arrow = ctaButton.querySelector(
          "span:last-child"
        );

        ctaButton.addEventListener("mouseenter", () => {
          gsap.to(arrow, {
            x: 4,
            y: -4,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        });

        ctaButton.addEventListener("mouseleave", () => {
          gsap.to(arrow, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        });

        ctaButton._servicesButtonEnter = () => {};
        ctaButton._servicesButtonLeave = () => {};
      }

      /* ========================================
         REFRESH
      ======================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => {
      const cards =
        pageRef.current?.querySelectorAll(".service-card");

      cards?.forEach((card) => {
        if (card._servicesEnter) {
          card.removeEventListener(
            "mouseenter",
            card._servicesEnter
          );
        }

        if (card._servicesLeave) {
          card.removeEventListener(
            "mouseleave",
            card._servicesLeave
          );
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <main className="services-page" ref={pageRef}>
      {/* ========================================
          HERO
      ======================================== */}

      <section className="services-hero">
        <div className="services-hero-grid" />

        <div className="services-hero-orb" />

        <div className="services-hero-inner">
          <div className="services-hero-eyebrow">
            <span className="eyebrow-dot" />
            OUR SERVICES
          </div>

          <h1 className="services-hero-title">
            <span className="hero-line">Strategy.</span>
            <span className="hero-line">Intelligence.</span>
            <span className="hero-line hero-line-blue">
              Impact.
            </span>
          </h1>

          <div className="services-hero-bottom">
            <p className="services-hero-copy">
              Technology-powered political consulting built
              around data, strategy and hyperlocal
              intelligence.
            </p>

            <div className="services-scroll">
              <span>SCROLL TO EXPLORE</span>

              <span className="scroll-arrow">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          INTRO
      ======================================== */}

      <section className="services-intro">
        <div className="services-intro-label">
          <span>01</span>
          WHAT WE DO
        </div>

        <div className="services-intro-content">
          <h2 className="services-intro-heading">
            <span className="intro-line">
              Turning political
            </span>

            <span className="intro-line">
              challenges into
            </span>

            <span className="intro-line intro-line-blue">
              winning strategies.
            </span>
          </h2>

          <p className="services-intro-copy">
            Politics is complex. We bring together
            technology, data and political expertise to make
            that complexity easier to understand and act
            upon.
          </p>
        </div>
      </section>

      {/* ========================================
          SERVICES
      ======================================== */}

      <section className="services-list-section">
        <div className="services-list-heading">
          <span>OUR EXPERTISE</span>
          <span>04 SERVICES</span>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-number">
                {service.number}
              </div>

              <div className="service-main">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-points">
                {service.points.map((point) => (
                  <div
                    className="service-point"
                    key={point}
                  >
                    <span className="point-plus">+</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="service-card-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="services-cta">
        <div className="services-cta-orb" />

        <div className="services-cta-inner">
          <div>
            <span className="services-cta-label">
              READY TO GET STARTED?
            </span>

            <h2>
              Let&apos;s build your
              <br />
              <span>winning strategy.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="services-cta-button"
          >
            <span>Talk to us</span>
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;