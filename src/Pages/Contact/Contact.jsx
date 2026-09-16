import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const pageRef = useRef(null);

  const heroContentRef = useRef(null);
  const heroLabelRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);

  const heroOrbOneRef = useRef(null);
  const heroOrbTwoRef = useRef(null);

  const infoRef = useRef(null);
  const detailsRef = useRef(null);
  const formRef = useRef(null);
  const formGlowRef = useRef(null);

  const bottomRef = useRef(null);
  const bottomCircleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      gsap.set(heroContentRef.current, {
        perspective: 1000,
      });

      heroTimeline
        .from(heroLabelRef.current, {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          heroTitleRef.current,
          {
            y: 75,
            opacity: 0,
            rotateX: 8,
            transformOrigin: "center bottom",
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          heroTextRef.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55"
        );

      gsap.to(heroOrbOneRef.current, {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      gsap.to(heroOrbTwoRef.current, {
        y: -18,
        x: 10,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroOrbOneRef.current, {
        y: 22,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 82%",
          once: true,
        },
        x: -55,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      if (detailsRef.current?.children?.length) {
        gsap.from(detailsRef.current.children, {
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 88%",
            once: true,
          },
          x: -28,
          opacity: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
        });
      }

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 82%",
          once: true,
        },
        x: 60,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
      });

      const fields = formRef.current?.querySelectorAll(".contact-field");

      if (fields?.length) {
        gsap.from(fields, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 78%",
            once: true,
          },
          y: 20,
          opacity: 0,
          duration: 0.55,
          stagger: 0.09,
          delay: 0.18,
          ease: "power2.out",
        });
      }

      gsap.from(".contact-submit", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 72%",
          once: true,
        },
        y: 18,
        opacity: 0,
        duration: 0.6,
        delay: 0.55,
        ease: "power3.out",
      });

      gsap.to(formGlowRef.current, {
        x: -35,
        y: 30,
        scale: 1.15,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(bottomRef.current, {
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(
        bottomRef.current.querySelector(".contact-bottom-inner"),
        {
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 82%",
            once: true,
          },
          x: -45,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.from(bottomCircleRef.current, {
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 82%",
          once: true,
        },
        x: 80,
        opacity: 0,
        scale: 0.7,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.to(bottomCircleRef.current, {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(bottomCircleRef.current, {
        scale: 1.035,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroContentRef.current, {
        y: 45,
        opacity: 0.82,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(heroOrbOneRef.current, {
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(heroOrbTwoRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className="contact-page w-full overflow-hidden bg-white">
      {/* HERO */}

      <section className="contact-hero relative flex min-h-[540px] items-center overflow-hidden bg-[linear-gradient(110deg,#eef7ff_0%,#f5f1ff_55%,#ffffff_100%)] px-[9%] py-[100px] max-[650px]:min-h-[500px] max-[650px]:px-[25px] max-[650px]:py-20 max-[420px]:px-5">
        <div
          className="contact-hero-content relative z-[2] max-w-[850px]"
          ref={heroContentRef}
        >
          <span
            className="contact-label mb-6 block text-[14px] font-bold tracking-[2px] text-[#1769ff]"
            ref={heroLabelRef}
          >
            CONTACT US
          </span>

          <h1
            className="text-[76px] font-bold leading-[0.98] tracking-[-3px] text-[#172033] max-[950px]:text-[62px] max-[650px]:text-[48px] max-[650px]:tracking-[-2px] max-[420px]:text-[42px]"
            ref={heroTitleRef}
          >
            Let's talk
            <br />
            <span className="text-[#1769ff]">politics.</span>
          </h1>

          <p
            className="mt-8 max-w-[620px] text-[21px] leading-[1.6] text-[#596579] max-[650px]:max-w-full max-[650px]:text-[18px] max-[420px]:text-[17px] max-[420px]:leading-[1.55]"
            ref={heroTextRef}
          >
            Whether you're building a campaign, exploring political technology or looking for strategic support, we'd love to hear from you.
          </p>
        </div>

        <div
          className="contact-hero-orb contact-hero-orb-one pointer-events-none absolute right-[-100px] top-[-150px] h-[420px] w-[420px] rounded-full border border-[rgba(23,105,255,0.13)] max-[650px]:right-[-150px] max-[650px]:top-[-70px] max-[650px]:h-[280px] max-[650px]:w-[280px] before:absolute before:inset-[55px] before:rounded-full before:border before:border-[rgba(23,105,255,0.1)] after:absolute after:bottom-[72px] after:right-20 after:h-[9px] after:w-[9px] after:rounded-full after:bg-[#1769ff] after:shadow-[0_0_25px_rgba(23,105,255,0.4)]"
          ref={heroOrbOneRef}
          aria-hidden="true"
        />

        <div
          className="contact-hero-orb contact-hero-orb-two pointer-events-none absolute bottom-[-100px] right-[15%] h-40 w-40 rounded-full border border-[rgba(23,105,255,0.1)]"
          ref={heroOrbTwoRef}
          aria-hidden="true"
        />
      </section>

      {/* CONTACT AREA */}

      <section className="contact-section relative grid grid-cols-[minmax(0,42%)_minmax(0,58%)] gap-[70px] bg-white px-[9%] py-[110px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[70px] max-[650px]:gap-[50px] max-[650px]:px-[25px] max-[650px]:py-20 max-[420px]:px-5">
        {/* LEFT */}

        <div className="contact-info relative" ref={infoRef}>
          <span className="contact-section-label text-[14px] font-bold tracking-[2px] text-[#1769ff]">
            GET IN TOUCH
          </span>

          <h2 className="mt-[18px] text-[52px] font-bold leading-[1.08] tracking-[-2px] text-[#172033] max-[650px]:text-[38px] max-[420px]:text-[34px]">
            Start a
            <br />
            conversation.
          </h2>

          <p className="mt-7 max-w-[500px] text-[18px] leading-[1.7] text-[#596579] max-[1100px]:max-w-[650px] max-[650px]:text-[17px]">
            Tell us about your political goals, challenges or ideas. Our team will get in touch with you.
          </p>

          <div
            className="contact-details mt-[55px] flex flex-col gap-[30px]"
            ref={detailsRef}
          >
            <div className="contact-detail flex flex-col gap-2">
              <span className="text-[12px] font-bold tracking-[1.5px] text-[#8993a3]">
                PHONE
              </span>

              <a
                href="tel:9962166656"
                className="relative w-fit text-[19px] font-semibold text-[#172033] no-underline transition-all duration-300 hover:translate-x-1 hover:text-[#1769ff] after:absolute after:bottom-[-5px] after:left-0 after:h-px after:w-0 after:bg-[#1769ff] after:transition-all after:duration-300 hover:after:w-full"
              >
                9962166656
              </a>
            </div>

            <div className="contact-detail flex flex-col gap-2">
              <span className="text-[12px] font-bold tracking-[1.5px] text-[#8993a3]">
                EMAIL
              </span>

              <a
                href="mailto:admin@planpol.com"
                className="relative w-fit text-[19px] font-semibold text-[#172033] no-underline transition-all duration-300 hover:translate-x-1 hover:text-[#1769ff] after:absolute after:bottom-[-5px] after:left-0 after:h-px after:w-0 after:bg-[#1769ff] after:transition-all after:duration-300 hover:after:w-full"
              >
                admin@planpol.com
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}

        <div
          className="contact-form-wrapper relative min-w-0 w-full overflow-hidden rounded-[18px] border border-[#e1e6ee] bg-[#f8fafc] p-[45px] shadow-[0_18px_50px_rgba(23,32,51,0.045)] max-[650px]:rounded-[14px] max-[650px]:p-[25px] max-[420px]:p-5 before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:bg-[linear-gradient(90deg,#1769ff,rgba(23,105,255,0))]"
          ref={formRef}
        >
          <div
            className="contact-form-glow pointer-events-none absolute right-[-160px] top-[-160px] h-[260px] w-[260px] rounded-full bg-[rgba(23,105,255,0.07)] blur-[10px]"
            ref={formGlowRef}
          />

          <form
            className="contact-form relative z-[2] flex flex-col gap-[25px] max-[650px]:gap-[22px]"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row grid grid-cols-2 gap-5 max-[750px]:grid-cols-1">
              <div className="contact-field flex flex-col gap-2.5">
                <label
                  htmlFor="name"
                  className="text-[14px] font-semibold text-[#273247]"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-[54px] w-full rounded-[9px] border border-[#d9e0e9] bg-white px-[17px] py-4 text-[16px] text-[#172033] outline-none transition-all duration-300 placeholder:text-[#a3acb9] hover:border-[#c5cedb] focus:-translate-y-px focus:border-[#1769ff] focus:shadow-[0_0_0_3px_rgba(23,105,255,0.08)] max-[650px]:text-[15px]"
                />
              </div>

              <div className="contact-field flex flex-col gap-2.5">
                <label
                  htmlFor="email"
                  className="text-[14px] font-semibold text-[#273247]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-[54px] w-full rounded-[9px] border border-[#d9e0e9] bg-white px-[17px] py-4 text-[16px] text-[#172033] outline-none transition-all duration-300 placeholder:text-[#a3acb9] hover:border-[#c5cedb] focus:-translate-y-px focus:border-[#1769ff] focus:shadow-[0_0_0_3px_rgba(23,105,255,0.08)] max-[650px]:text-[15px]"
                />
              </div>
            </div>

            <div className="contact-field flex flex-col gap-2.5">
              <label
                htmlFor="phone"
                className="text-[14px] font-semibold text-[#273247]"
              >
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="h-[54px] w-full rounded-[9px] border border-[#d9e0e9] bg-white px-[17px] py-4 text-[16px] text-[#172033] outline-none transition-all duration-300 placeholder:text-[#a3acb9] hover:border-[#c5cedb] focus:-translate-y-px focus:border-[#1769ff] focus:shadow-[0_0_0_3px_rgba(23,105,255,0.08)] max-[650px]:text-[15px]"
              />
            </div>

            <div className="contact-field flex flex-col gap-2.5">
              <label
                htmlFor="message"
                className="text-[14px] font-semibold text-[#273247]"
              >
                How can we help?
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] w-full resize-y rounded-[9px] border border-[#d9e0e9] bg-white px-[17px] py-4 text-[16px] text-[#172033] outline-none transition-all duration-300 placeholder:text-[#a3acb9] hover:border-[#c5cedb] focus:-translate-y-px focus:border-[#1769ff] focus:shadow-[0_0_0_3px_rgba(23,105,255,0.08)] max-[650px]:text-[15px]"
              />
            </div>

            <button
              type="submit"
              className="contact-submit mt-[5px] inline-flex w-fit items-center justify-center gap-[13px] rounded-[30px] border-0 bg-[#1769ff] px-7 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#0758e8] hover:shadow-[0_12px_28px_rgba(23,105,255,0.22)] max-[420px]:w-full"
            >
              <span>Send message</span>

              <span className="contact-submit-arrow inline-block text-[21px] leading-none transition-transform duration-300 group-hover:translate-x-[5px]">
                →
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section
        className="contact-bottom relative flex min-h-[360px] items-center overflow-hidden bg-[#1769ff] px-[9%] py-20 max-[650px]:min-h-[300px] max-[650px]:px-[25px] max-[650px]:py-[70px] max-[420px]:px-5"
        ref={bottomRef}
      >
        <div
          className="contact-bottom-inner relative z-[2]"
        >
          <span className="text-[13px] font-bold tracking-[2px] text-[rgba(255,255,255,0.7)]">
            PLANPOL
          </span>

          <h2 className="mt-[18px] text-[56px] font-bold leading-[1.05] tracking-[-2px] text-white max-[650px]:text-[42px] max-[650px]:tracking-[-1.5px] max-[420px]:text-[36px]">
            Politics is changing.
            <br />
            Be part of it.
          </h2>

          <div className="contact-bottom-line mt-[30px] h-px w-[85px] bg-[rgba(255,255,255,0.55)]" />
        </div>

        <div
          className="contact-bottom-circle absolute right-[10%] top-1/2 flex h-[230px] w-[230px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] max-[1100px]:right-[6%] max-[1100px]:h-[190px] max-[1100px]:w-[190px] max-[950px]:right-[4%] max-[950px]:opacity-55 max-[750px]:hidden before:absolute before:inset-5 before:rounded-full before:border before:border-[rgba(255,255,255,0.17)] after:absolute after:right-[50px] after:top-[19px] after:h-2 after:w-2 after:rounded-full after:bg-white after:shadow-[0_0_18px_rgba(255,255,255,0.35)]"
          ref={bottomCircleRef}
          aria-hidden="true"
        >
          <span className="relative z-[2] text-[11px] tracking-[2px] text-[rgba(255,255,255,0.75)]">
            LET'S TALK
          </span>
        </div>
      </section>
    </main>
  );
}

export default Contact;