import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      gsap.to(".scroll-arrow", {
        y: 5,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

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

      const ctaButton = pageRef.current?.querySelector(".services-cta-button");

      if (ctaButton) {
        const arrow = ctaButton.querySelector("span:last-child");

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

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => {
      const cards = pageRef.current?.querySelectorAll(".service-card");

      cards?.forEach((card) => {
        if (card._servicesEnter) {
          card.removeEventListener("mouseenter", card._servicesEnter);
        }

        if (card._servicesLeave) {
          card.removeEventListener("mouseleave", card._servicesLeave);
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="services-page relative min-h-screen w-full overflow-hidden bg-white text-[#111]">
      {/* HERO */}
      <section className="services-hero relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-white px-[7vw] py-[140px] pb-[100px]">
        <div className="services-hero-grid pointer-events-none absolute inset-[-20%] z-0 opacity-[0.55] [background-image:linear-gradient(rgba(21,87,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(21,87,255,0.055)_1px,transparent_1px)] [background-size:70px_70px] [transform:perspective(700px)_rotateX(60deg)_scale(1.5)] [transform-origin:center_center]" />

        <div className="services-hero-orb pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(21,87,255,0.16)_0%,rgba(21,87,255,0.08)_32%,rgba(21,87,255,0.025)_58%,transparent_72%)] blur-[4px]" />

        <div className="services-hero-content relative z-[3] w-full max-w-[1250px] text-center">
          <div className="services-hero-eyebrow mb-[28px] text-[12px] font-bold uppercase tracking-[0.22em] text-[#1557ff]">
            <span className="mr-[8px] inline-block h-[6px] w-[6px] rounded-full bg-[#1557ff] align-middle" />
            OUR SERVICES
          </div>

          <h1 className="services-hero-title m-0 text-[clamp(56px,8vw,120px)] font-bold leading-[0.92] tracking-[-0.055em] text-[#111]">
            <span className="hero-line block">Strategy.</span>
            <span className="hero-line block">Intelligence.</span>
            <span className="hero-line hero-line-blue block text-[#1557ff]">
              Impact.
            </span>
          </h1>

          <div className="services-hero-bottom">
            <p className="services-hero-copy mx-auto mt-[36px] max-w-[720px] text-[clamp(17px,1.5vw,22px)] leading-[1.6] text-[#666]">
              Technology-powered political consulting built around data,
              strategy and hyperlocal intelligence.
            </p>

            <div className="services-scroll absolute bottom-[-70px] left-1/2 z-[4] flex -translate-x-1/2 flex-col items-center gap-[12px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#999]">
                SCROLL TO EXPLORE
              </span>

              <span className="scroll-arrow flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(21,87,255,0.2)] bg-white text-[18px] text-[#1557ff] transition-all duration-[350ms] hover:translate-y-[4px] hover:bg-[rgba(21,87,255,0.05)]">
                ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro relative bg-[#f7f8fa] px-[7vw] py-[150px]">
        <div className="services-intro-inner mx-auto w-full max-w-[1250px]">
          <div className="services-intro-label mb-[30px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557ff]">
            <span className="mr-[10px]">01</span>
            WHAT WE DO
          </div>

          <div className="services-intro-content">
            <h2 className="services-intro-heading m-0 max-w-[950px] text-[clamp(42px,6vw,82px)] font-semibold leading-none tracking-[-0.045em] text-[#111]">
              <span className="intro-line block overflow-hidden">
                Turning political
              </span>

              <span className="intro-line block overflow-hidden">
                challenges into
              </span>

              <span className="intro-line intro-line-blue block overflow-hidden text-[#1557ff]">
                winning strategies.
              </span>
            </h2>

            <p className="services-intro-copy mt-[42px] max-w-[700px] text-[18px] leading-[1.7] text-[#686868]">
              Politics is complex. We bring together technology, data and
              political expertise to make that complexity easier to understand
              and act upon.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list-section bg-white px-[7vw] py-[140px]">
        <div className="services-list-inner mx-auto w-full max-w-[1250px]">
          <div className="services-list-heading mb-[70px] flex items-end justify-between gap-[40px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557ff]">
              OUR EXPERTISE
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#999]">
              04 SERVICES
            </span>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article
                className="service-card relative grid grid-cols-[100px_1fr_auto] items-center gap-[50px] border-t border-[#e5e5e5] py-[48px] transition-transform duration-300 after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-0 after:bg-[#1557ff] after:transition-all after:duration-500 last:border-b hover:translate-x-[12px] hover:after:w-full"
                key={service.number}
              >
                <div className="service-number text-[12px] font-bold tracking-[0.12em] text-[#1557ff]">
                  {service.number}
                </div>

                <div className="service-main min-w-0">
                  <h3 className="m-0 text-[clamp(28px,3vw,46px)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#111]">
                    {service.title}
                  </h3>

                  <p className="mt-[18px] max-w-[620px] text-[16px] leading-[1.65] text-[#777]">
                    {service.description}
                  </p>
                </div>

                <div className="service-points flex flex-col gap-[8px]">
                  {service.points.map((point) => (
                    <div
                      className="service-point flex items-center gap-[8px] whitespace-nowrap text-[12px] font-medium text-[#555]"
                      key={point}
                    >
                      <span className="point-plus font-bold text-[#1557ff]">
                        +
                      </span>

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-arrow flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#dedede] bg-white text-[22px] text-[#111] transition-all duration-300 hover:border-[#1557ff] hover:bg-[#1557ff] hover:text-white">
                  ↗
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta relative flex min-h-[600px] items-center justify-center overflow-hidden bg-[#1557ff] px-[7vw] py-[120px] text-white before:pointer-events-none before:absolute before:left-1/2 before:top-1/2 before:h-[900px] before:w-[900px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-[rgba(255,255,255,0.055)] after:pointer-events-none after:absolute after:left-1/2 after:top-1/2 after:h-[1100px] after:w-[1100px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-[rgba(255,255,255,0.035)]">
        <div className="services-cta-orb pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.09)] before:absolute before:inset-[10%] before:rounded-full before:border before:border-[rgba(255,255,255,0.07)] after:absolute after:inset-[25%] after:rounded-full after:border after:border-[rgba(255,255,255,0.07)]" />

        <div className="services-cta-inner relative z-[3] w-full max-w-[1050px] text-center">
          <div>
            <span className="services-cta-label mb-[28px] block text-[11px] font-bold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.65)]">
              READY TO GET STARTED?
            </span>

            <h2 className="services-cta-title m-0 mx-auto max-w-[900px] text-[clamp(48px,7vw,96px)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
              Let&apos;s build your
              <br />
              <span className="text-white/90">winning strategy.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="services-cta-button mt-[48px] inline-flex items-center justify-center gap-[14px] rounded-full border border-[rgba(255,255,255,0.3)] bg-white px-[26px] py-[17px] text-[13px] font-bold tracking-[0.04em] text-[#1557ff] no-underline transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#111] hover:text-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
          >
            <span>Talk to us</span>
            <span className="transition-transform duration-300">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;