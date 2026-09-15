import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

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

      /* =========================
         HERO ENTRANCE
      ========================= */

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

      /* =========================
         HERO ORBITS
      ========================= */

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

      /* =========================
         CONTACT CONTENT
      ========================= */

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

      /* =========================
         CONTACT DETAILS
      ========================= */

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

      /* =========================
         FORM
      ========================= */

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

      const fields = formRef.current?.querySelectorAll(
        ".contact-field"
      );

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

      /* =========================
         FORM GLOW
      ========================= */

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

      /* =========================
         BOTTOM CTA
      ========================= */

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

      gsap.from(bottomRef.current.querySelector(
        ".contact-bottom-inner"
      ), {
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 82%",
          once: true,
        },
        x: -45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

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

      /* =========================
         CTA CIRCLE MOTION
      ========================= */

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

      /* =========================
         HERO PARALLAX
      ========================= */

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
    <main className="contact-page" ref={pageRef}>
      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">
        <div
          className="contact-hero-content"
          ref={heroContentRef}
        >
          <span
            className="contact-label"
            ref={heroLabelRef}
          >
            CONTACT US
          </span>

          <h1 ref={heroTitleRef}>
            Let's talk
            <br />
            <span>politics.</span>
          </h1>

          <p ref={heroTextRef}>
            Whether you're building a campaign,
            exploring political technology or
            looking for strategic support,
            we'd love to hear from you.
          </p>
        </div>

        <div
          className="contact-hero-orb contact-hero-orb-one"
          ref={heroOrbOneRef}
        />

        <div
          className="contact-hero-orb contact-hero-orb-two"
          ref={heroOrbTwoRef}
        />
      </section>

      {/* =========================
          CONTACT AREA
      ========================= */}

      <section className="contact-section">
        {/* LEFT */}

        <div
          className="contact-info"
          ref={infoRef}
        >
          <span className="contact-section-label">
            GET IN TOUCH
          </span>

          <h2>
            Start a
            <br />
            conversation.
          </h2>

          <p>
            Tell us about your political goals,
            challenges or ideas. Our team will
            get in touch with you.
          </p>

          <div
            className="contact-details"
            ref={detailsRef}
          >
            <div className="contact-detail">
              <span>PHONE</span>

              <a href="tel:9962166656">
                9962166656
              </a>
            </div>

            <div className="contact-detail">
              <span>EMAIL</span>

              <a href="mailto:admin@planpol.com">
                admin@planpol.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}

        <div
          className="contact-form-wrapper"
          ref={formRef}
        >
          <div
            className="contact-form-glow"
            ref={formGlowRef}
          />

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">
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
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
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
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="phone">
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">
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
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>Send message</span>

              <span className="contact-submit-arrow">
                →
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section
        className="contact-bottom"
        ref={bottomRef}
      >
        <div className="contact-bottom-inner">
          <span>PLANPOL</span>

          <h2>
            Politics is changing.
            <br />
            Be part of it.
          </h2>

          <div className="contact-bottom-line" />
        </div>

        <div
          className="contact-bottom-circle"
          ref={bottomCircleRef}
        >
          <span>LET'S TALK</span>
        </div>
      </section>
    </main>
  );
}

export default Contact;