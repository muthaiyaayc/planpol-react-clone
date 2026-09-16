import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const handleToggle = (index) => {
    setOpenIndex((previous) =>
      previous === index ? -1 : index
    );
  };

  let questionCounter = 0;

  return (
    <main
      className="faq-page relative w-full overflow-hidden bg-white text-[#172033]"
      ref={pageRef}
    >
      {/* HERO */}

      <section className="faq-hero relative flex min-h-[540px] items-center overflow-hidden bg-[linear-gradient(110deg,#eef7ff_0%,#f5f1ff_55%,#ffffff_100%)] px-[9%] py-[100px]">
        <div
          className="faq-hero-content relative z-10 max-w-[900px]"
          ref={heroContentRef}
        >
          <span
            className="faq-label mb-6 block text-[14px] font-bold tracking-[2px] text-[#1769ff]"
            ref={heroLabelRef}
          >
            FAQ
          </span>

          <h1
            className="text-[76px] font-bold leading-[0.98] tracking-[-3px] text-[#172033] max-[900px]:text-[62px] max-[650px]:text-[48px] max-[650px]:tracking-[-2px]"
            ref={heroTitleRef}
          >
            Questions?
            <br />
            <span className="text-[#1769ff]">We've got answers.</span>
          </h1>

          <p
            className="mt-8 max-w-[620px] text-[21px] leading-[1.6] text-[#596579] max-[650px]:text-[18px]"
            ref={heroTextRef}
          >
            Everything you need to know about PlanPol, our technology and our political intelligence solutions.
          </p>
        </div>

        <div
          ref={heroOrbOneRef}
          className="faq-hero-orb faq-hero-orb-one pointer-events-none absolute right-[-115px] top-[-150px] h-[430px] w-[430px] rounded-full border border-[rgba(23,105,255,0.13)] max-[650px]:right-[-150px] max-[650px]:top-[-60px] max-[650px]:h-[280px] max-[650px]:w-[280px] before:absolute before:inset-[58px] before:rounded-full before:border before:border-[rgba(23,105,255,0.1)] after:absolute after:bottom-[75px] after:right-[80px] after:h-[9px] after:w-[9px] after:rounded-full after:bg-[#1769ff] after:shadow-[0_0_20px_rgba(23,105,255,0.35)]"
          aria-hidden="true"
        />

        <div
          ref={heroOrbTwoRef}
          className="faq-hero-orb faq-hero-orb-two pointer-events-none absolute bottom-[-90px] right-[19%] h-[150px] w-[150px] rounded-full border border-[rgba(23,105,255,0.1)]"
          aria-hidden="true"
        />
      </section>

      {/* FAQ CONTENT */}

      <section className="faq-content bg-white px-[9%] py-[110px] max-[650px]:px-[25px] max-[650px]:py-[80px]">
        <div
          className="faq-heading mb-20 max-[650px]:mb-[50px]"
          ref={headingRef}
        >
          <span className="text-[14px] font-bold tracking-[2px] text-[#1769ff]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-[18px] text-[52px] font-bold leading-[1.08] tracking-[-2px] text-[#172033] max-[650px]:text-[38px]">
            Find the answers
            <br />
            you're looking for.
          </h2>
        </div>

        <div className="faq-sections" ref={sectionsRef}>
          {faqSections.map((section) => (
            <div
              className="faq-section grid grid-cols-[260px_minmax(0,1fr)] gap-[60px] border-t border-[#dfe5ee] py-[55px] last:border-b max-[1000px]:grid-cols-[200px_minmax(0,1fr)] max-[1000px]:gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-[25px] max-[900px]:py-[45px] max-[650px]:py-10"
              key={section.title}
            >
              <div className="faq-section-title text-[16px] font-bold leading-[1.4] text-[#1769ff] max-[900px]:mb-[5px]">
                {section.title}
              </div>

              <div className="faq-questions w-full">
                {section.questions.map((item) => {
                  const currentIndex = questionCounter++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      className={`faq-item relative border-b border-[#e5e9ef] ${
                        isOpen ? "faq-item-open" : ""
                      }`}
                      key={item.question}
                    >
                      <button
                        type="button"
                        className="faq-question flex w-full items-center justify-between gap-[30px] border-0 bg-transparent py-[25px] text-left font-inherit text-[19px] font-semibold text-[#172033] outline-none max-[650px]:gap-5 max-[650px]:py-[22px] max-[650px]:text-[17px]"
                        onClick={() => handleToggle(currentIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${currentIndex}`}
                      >
                        <span className="faq-question-text relative leading-[1.45] transition-all duration-[250ms] ease-in-out hover:translate-x-1 hover:text-[#1769ff]">
                          {item.question}
                        </span>

                        <span
                          className={`faq-icon relative flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[#d9e0ea] text-[#1769ff] transition-all duration-300 ease-in-out max-[650px]:h-8 max-[650px]:w-8 ${
                            isOpen
                              ? "rotate-180 border-[#1769ff] bg-[#1769ff] text-white"
                              : ""
                          }`}
                          aria-hidden="true"
                        >
                          <span className="faq-icon-horizontal absolute h-px w-3 bg-current transition-all duration-300 ease-in-out" />
                          <span
                            className={`faq-icon-vertical absolute h-px w-3 rotate-90 bg-current transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "scale-x-0 opacity-0"
                                : ""
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${currentIndex}`}
                        className={`faq-answer grid transition-[grid-template-rows] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p
                            className={`m-0 overflow-hidden text-[17px] leading-[1.7] text-[#596579] transition-all duration-[350ms] ease-in-out max-[650px]:text-[16px] max-[650px]:leading-[1.65] ${
                              isOpen
                                ? "translate-y-0 pb-7 opacity-100"
                                : "-translate-y-2 opacity-0"
                            }`}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section
        className="faq-cta relative flex min-h-[390px] items-center overflow-hidden bg-[#1769ff] px-[9%] py-20 max-[650px]:min-h-[330px] max-[650px]:px-[25px] max-[650px]:py-[70px]"
        ref={ctaRef}
      >
        <div
          className="faq-cta-content relative z-10"
          ref={ctaContentRef}
        >
          <span className="text-[13px] font-bold tracking-[2px] text-[rgba(255,255,255,0.75)]">
            STILL HAVE QUESTIONS?
          </span>

          <h2 className="mt-[18px] text-[56px] font-bold leading-[1.05] tracking-[-2px] text-white max-[650px]:text-[42px] max-[650px]:tracking-[-1.5px]">
            Let's talk about
            <br />
            your political journey.
          </h2>

          <a
            href="mailto:admin@planpol.com"
            className="faq-cta-button mt-8 inline-flex items-center gap-[13px] rounded-[35px] bg-white px-7 py-4 text-[16px] font-bold text-[#1769ff] no-underline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
          >
            <span>Contact us</span>

            <span className="faq-cta-arrow text-[20px] leading-none transition-transform duration-300 ease-in-out">
              →
            </span>
          </a>
        </div>

        <div
          className="faq-cta-circle absolute right-[10%] top-1/2 flex h-[230px] w-[230px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] max-[1000px]:right-[5%] max-[1000px]:h-[190px] max-[1000px]:w-[190px] max-[900px]:opacity-45 max-[700px]:hidden"
          ref={ctaCircleRef}
          aria-hidden="true"
        >
          <span className="relative z-10 text-[11px] font-bold tracking-[2px] text-[rgba(255,255,255,0.7)]">
            PLANPOL
          </span>
        </div>
      </section>
    </main>
  );
}

export default FAQ;