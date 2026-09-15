import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FAQ.css";

gsap.registerPlugin(ScrollTrigger);

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const pageRef = useRef(null);

  const heroContentRef = useRef(null);
  const heroLabelRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);

  const heroOrbOneRef = useRef(null);
  const heroOrbTwoRef = useRef(null);

  const headingRef = useRef(null);
  const sectionsRef = useRef(null);

  const ctaRef = useRef(null);
  const ctaContentRef = useRef(null);
  const ctaCircleRef = useRef(null);

  const faqSections = [
    {
      title: "About PlanPol",
      questions: [
        {
          question: "What is a political consultant?",
          answer:
            "A political consultant helps political leaders, candidates and organisations understand their political environment and build effective strategies using research, data, communication and campaign planning.",
        },
        {
          question: "What is PlanPol?",
          answer:
            "PlanPol is a political technology platform that combines politics, data and technology to provide AI-powered political intelligence and consulting solutions.",
        },
      ],
    },
    {
      title: "Story & Mission",
      questions: [
        {
          question: "How to join politics?",
          answer:
            "Entering politics requires understanding your community, building relationships, developing a clear political position and consistently working with people at the grassroots level.",
        },
        {
          question: "How to start a political party in India?",
          answer:
            "Starting a political party involves building an organisation, defining its objectives and following the applicable legal and electoral registration requirements.",
        },
        {
          question: "How to enter politics in India?",
          answer:
            "There are several paths into politics, including grassroots work, public service, political organisations, local governance and contesting elections.",
        },
      ],
    },
    {
      title: "Team & Expertise",
      questions: [
        {
          question: "Who works at PlanPol?",
          answer:
            "PlanPol brings together political experience, technology, data intelligence and strategic thinking to solve complex political challenges.",
        },
      ],
    },
    {
      title: "Products & Apps",
      questions: [
        {
          question: "What products does PlanPol offer?",
          answer:
            "PlanPol's technology stack includes Voice, Booth, Strategy and Party 360°, designed to support political communication, booth-level intelligence, strategic planning and party-level decision making.",
        },
      ],
    },
    {
      title: "Consulting Services",
      questions: [
        {
          question: "What political challenges can PlanPol help with?",
          answer:
            "PlanPol combines political consulting, data and technology to support campaign strategy, constituency intelligence, political communication and decision making.",
        },
        {
          question: "Why is data important in politics?",
          answer:
            "Data helps political teams understand voters, constituencies, trends and campaign performance, allowing decisions to be made with greater clarity.",
        },
      ],
    },
    {
      title: "Contact & Support",
      questions: [
        {
          question: "How can I contact PlanPol?",
          answer:
            "You can contact the PlanPol team through the Contact us section of the website.",
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        return;
      }

      /* =====================================================
         HERO ENTRANCE
      ===================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(heroLabelRef.current, {
          y: 25,
          opacity: 0,
          duration: 0.65,
        })
        .from(
          heroTitleRef.current,
          {
            y: 65,
            opacity: 0,
            duration: 0.95,
          },
          "-=0.3"
        )
        .from(
          heroTextRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.5"
        );

      /* =====================================================
         HERO ORBIT MOTION
      ===================================================== */

      gsap.to(heroOrbOneRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(heroOrbTwoRef.current, {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         HERO ORB FLOAT
      ===================================================== */

      gsap.to(heroOrbOneRef.current, {
        y: 25,
        x: -15,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroOrbTwoRef.current, {
        y: -18,
        x: 12,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         HERO SCROLL PARALLAX
      ===================================================== */

      gsap.to(heroContentRef.current, {
        y: 40,
        opacity: 0.86,
        ease: "none",
        scrollTrigger: {
          trigger: ".faq-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(heroOrbOneRef.current, {
        y: 100,
        x: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".faq-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* =====================================================
         FAQ HEADING
      ===================================================== */

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 84%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      /* =====================================================
         FAQ SECTIONS
      ===================================================== */

      const sections =
        sectionsRef.current?.querySelectorAll(".faq-section");

      if (sections?.length) {
        gsap.from(sections, {
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: "top 82%",
            once: true,
          },
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
        });
      }

      /* =====================================================
         FAQ QUESTIONS
      ===================================================== */

      const questions =
        sectionsRef.current?.querySelectorAll(".faq-item");

      if (questions?.length) {
        gsap.from(questions, {
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: "top 76%",
            once: true,
          },
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.045,
          delay: 0.15,
          ease: "power2.out",
        });
      }

      /* =====================================================
         CTA ENTRANCE
      ===================================================== */

      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(ctaContentRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 82%",
          once: true,
        },
        x: -45,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current.querySelector(".faq-cta-button"), {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 78%",
          once: true,
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        delay: 0.25,
        ease: "power3.out",
      });

      /* =====================================================
         CTA CIRCLE
      ===================================================== */

      gsap.to(ctaCircleRef.current, {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ctaCircleRef.current, {
        scale: 1.04,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(ctaCircleRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          once: true,
        },
        x: 80,
        opacity: 0,
        scale: 0.75,
        duration: 1.1,
        ease: "power3.out",
      });
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =======================================================
     ACCORDION
  ======================================================= */

  const handleToggle = (index) => {
    setOpenIndex((previous) =>
      previous === index ? -1 : index
    );
  };

  let questionCounter = 0;

  return (
    <main
      className="faq-page"
      ref={pageRef}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="faq-hero">
        <div
          className="faq-hero-content"
          ref={heroContentRef}
        >
          <span
            className="faq-label"
            ref={heroLabelRef}
          >
            FAQ
          </span>

          <h1 ref={heroTitleRef}>
            Questions?
            <br />
            <span>We've got answers.</span>
          </h1>

          <p ref={heroTextRef}>
            Everything you need to know about
            PlanPol, our technology and our
            political intelligence solutions.
          </p>
        </div>

        <div
          ref={heroOrbOneRef}
          className="faq-hero-orb faq-hero-orb-one"
          aria-hidden="true"
        />

        <div
          ref={heroOrbTwoRef}
          className="faq-hero-orb faq-hero-orb-two"
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          FAQ CONTENT
      ===================================================== */}

      <section className="faq-content">
        <div
          className="faq-heading"
          ref={headingRef}
        >
          <span>
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Find the answers
            <br />
            you're looking for.
          </h2>
        </div>

        <div
          className="faq-sections"
          ref={sectionsRef}
        >
          {faqSections.map((section) => (
            <div
              className="faq-section"
              key={section.title}
            >
              <div className="faq-section-title">
                {section.title}
              </div>

              <div className="faq-questions">
                {section.questions.map((item) => {
                  const currentIndex = questionCounter++;

                  const isOpen =
                    openIndex === currentIndex;

                  return (
                    <div
                      className={`faq-item ${
                        isOpen
                          ? "faq-item-open"
                          : ""
                      }`}
                      key={item.question}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() =>
                          handleToggle(
                            currentIndex
                          )
                        }
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${currentIndex}`}
                      >
                        <span className="faq-question-text">
                          {item.question}
                        </span>

                        <span
                          className="faq-icon"
                          aria-hidden="true"
                        >
                          <span className="faq-icon-horizontal" />
                          <span className="faq-icon-vertical" />
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${currentIndex}`}
                        className="faq-answer"
                        aria-hidden={!isOpen}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="faq-cta"
        ref={ctaRef}
      >
        <div
          className="faq-cta-content"
          ref={ctaContentRef}
        >
          <span>
            STILL HAVE QUESTIONS?
          </span>

          <h2>
            Let's talk about
            <br />
            your political journey.
          </h2>

          <a
            href="mailto:admin@planpol.com"
            className="faq-cta-button"
          >
            <span>Contact us</span>

            <span className="faq-cta-arrow">
              →
            </span>
          </a>
        </div>

        <div
          className="faq-cta-circle"
          ref={ctaCircleRef}
          aria-hidden="true"
        >
          <span>PLANPOL</span>
        </div>
      </section>
    </main>
  );
}

export default FAQ;