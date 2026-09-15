import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const pageRef = useRef(null);

  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["You", "Democracy"];


  /* =====================================================
     TYPEWRITER
  ===================================================== */

  useEffect(() => {
    let current = "";
    let deleting = false;
    let timer;

    const type = () => {
      const word = words[wordIndex];

      if (!deleting) {
        current = word.slice(0, current.length + 1);

        setTypedWord(current);

        if (current === word) {
          timer = setTimeout(() => {
            deleting = true;
            type();
          }, 1800);

          return;
        }
      } else {
        current = word.slice(0, current.length - 1);

        setTypedWord(current);

        if (!current) {
          deleting = false;

          setWordIndex(
            (previousIndex) =>
              (previousIndex + 1) % words.length
          );

          return;
        }
      }

      timer = setTimeout(
        type,
        deleting ? 55 : 100
      );
    };

    type();

    return () => {
      clearTimeout(timer);
    };
  }, [wordIndex]);


  /* =====================================================
     GSAP ANIMATIONS
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* =================================================
         HERO
      ================================================= */

      const hero = gsap.timeline();

      hero
        .from(".home-hero-copy", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".home-hero-title-line",
          {
            y: 90,
            opacity: 0,
            stagger: 0.12,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.6"
        )
        .from(
          ".home-hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".home-hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.25"
        )
        .from(
          ".home-hero-art",
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1"
        );


      /* =================================================
         HERO FLOAT
      ================================================= */

      gsap.to(".home-hero-art img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      /* =================================================
         NUMBER COUNTING ANIMATION
      ================================================= */

      gsap.utils
        .toArray(".home-stat")
        .forEach((stat) => {

          const numberElement =
            stat.querySelector(
              ".home-stat-number"
            );

          const target =
            Number(
              numberElement.dataset.value
            );

          const suffix =
            numberElement.dataset.suffix || "";

          const counter = {
            value: 0,
          };


          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top 88%",
              once: true,
            },

            y: 40,
            opacity: 0,

            duration: 0.8,

            ease: "power3.out",
          });


          gsap.to(counter, {

            value: target,

            duration: 2,

            ease: "power2.out",

            scrollTrigger: {
              trigger: stat,
              start: "top 88%",
              once: true,
            },

            onUpdate: () => {

              const currentValue =
                Math.floor(counter.value);

              numberElement.textContent =
                currentValue.toLocaleString(
                  "en-IN"
                ) + suffix;
            },

            onComplete: () => {

              numberElement.textContent =
                target.toLocaleString(
                  "en-IN"
                ) + suffix;
            },
          });

        });


      /* =================================================
         STORY
      ================================================= */

      gsap.from(".home-story-copy", {
        scrollTrigger: {
          trigger: ".home-story",
          start: "top 75%",
        },

        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });


      gsap.from(".home-compass", {
        scrollTrigger: {
          trigger: ".home-story",
          start: "top 80%",
        },

        scale: 0.75,
        rotation: -25,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
      });


      /* =================================================
         AWARDS
      ================================================= */

      gsap.utils
        .toArray(".home-award")
        .forEach((card, index) => {

          gsap.from(card, {
            scrollTrigger: {
              trigger: ".home-awards",
              start: "top 75%",
            },

            y: 70,
            opacity: 0,

            delay: index * 0.12,

            duration: 0.9,

            ease: "power3.out",
          });

        });


      /* =================================================
         EXPERIENCE
      ================================================= */

      gsap.from(
        ".home-experience-content",
        {
          scrollTrigger: {
            trigger: ".home-experience",
            start: "top 75%",
          },

          y: 70,
          opacity: 0,

          duration: 1,

          ease: "power3.out",
        }
      );


      /* =================================================
         TEAM
      ================================================= */

      gsap.from(".home-team-card", {
        scrollTrigger: {
          trigger: ".home-team",
          start: "top 75%",
        },

        y: 60,
        opacity: 0,

        stagger: 0.18,

        duration: 0.9,

        ease: "power3.out",
      });


      /* =================================================
         PRODUCTS
      ================================================= */

      gsap.from(
        ".home-products-heading",
        {
          scrollTrigger: {
            trigger: ".home-products",
            start: "top 78%",
          },

          y: 60,
          opacity: 0,

          duration: 1,

          ease: "power3.out",
        }
      );

    }, pageRef);


    return () => {
      ctx.revert();
    };

  }, []);


  /* =====================================================
     STATS DATA
  ===================================================== */

  const stats = [
    {
      value: 15,
      suffix: "",
      label: "Elections",
    },

    {
      value: 50,
      suffix: "",
      label: "Campaigns",
    },

    {
      value: 12,
      suffix: "",
      label: "States",
    },

    {
      value: 2,
      suffix: "",
      label: "Countries",
    },

    {
      value: 3598,
      suffix: "",
      label: "GBs of data",
    },

    {
      value: 125,
      suffix: "K+",
      label: "Lines of code",
    },
  ];


  return (
    <main
      className="home-page"
      ref={pageRef}
    >


      {/* =====================================================
          SECTION 01 — HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-bg-circle" />

        <div className="home-hero-inner">


          {/* HERO ART */}

          <div className="home-hero-art">

            <img
              src="/speaker.png"
              alt="PlanPol political intelligence"
            />

          </div>


          {/* HERO CONTENT */}

          <div className="home-hero-copy">

            <h1 className="home-hero-title">

              <span className="home-hero-title-line home-first-line">
                World's first
              </span>

              <span className="home-hero-title-line home-blue home-powered">
                AI Powered
              </span>

              <span className="home-hero-title-line home-blue home-politech">
                PoliTech
              </span>

            </h1>


            <p className="home-hero-description">

              We make data work for{" "}

              <span className="home-blue">

                {typedWord}

                <span className="typing-cursor">
                  |
                </span>

              </span>

            </p>

          </div>

        </div>


        <div className="home-hero-bottom-line" />

      </section>



      {/* =====================================================
          SECTION 02 — STATS
      ===================================================== */}

      <section className="home-stats">

        <div className="home-stats-inner">


          {/* =================================================
              LEFT — NUMBER GRID
          ================================================= */}

          <div className="home-stats-grid">

            {stats.map(
              (stat) => (

                <div
                  className="home-stat"
                  key={stat.label}
                >

                  <strong
                    className="home-stat-number"
                    data-value={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0
                  </strong>

                  <span>
                    {stat.label}
                  </span>

                </div>

              )
            )}

          </div>


          {/* =================================================
              RIGHT — DESCRIPTION
          ================================================= */}

          <div className="home-stats-copy">

            <h2>

              PlanPol's Data-Driven
              Political Consulting is a
              service made{" "}

              <span>
                Affordable through AI
              </span>

            </h2>


            <p>

              We blend high-end tech and
              hyperlocal strategy to demystify
              and deliver Poli-Tech as a
              cost-effective offering, to
              transform your every step into
              a winning move.

            </p>

          </div>

        </div>


        {/* =================================================
            CROWD
        ================================================= */}

        <div className="home-crowd">

          <img
            src="/crowd.png"
            alt=""
          />

        </div>

      </section>



      {/* =====================================================
          SECTION 03 — DATA + TECHNOLOGY
      ===================================================== */}

      <section className="home-story">

        <div className="home-story-inner">


          <div className="home-story-image">

            <div className="home-compass-ring" />

            <img
              className="home-compass"
              src="/compass.png"
              alt=""
            />

          </div>


          <div className="home-story-copy">

            <span className="section-label">
              DATA + TECHNOLOGY
            </span>


            <h2>

              Making
              <br />

              complexity
              <br />

              <span>
                simple.
              </span>

            </h2>


            <p>

              We combine political experience
              with technology, data and research
              to uncover what really matters
              to people.

            </p>


            <Link
              to="/our-story"
              className="text-link"
            >

              Discover our story

              <span>
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section>



      {/* =====================================================
          SECTION 04 — AWARDS
      ===================================================== */}

      <section className="home-awards">

        <div className="home-section-top">

          <span className="section-label">
            RECOGNITION
          </span>

          <span className="section-count">
            03 AWARDS
          </span>

        </div>


        <div className="home-awards-grid">


          <article className="home-award">

            <span>
              01
            </span>

            <h3>
              Best Political Technology
            </h3>

            <p>
              Recognising innovation in
              political technology.
            </p>

          </article>


          <article className="home-award">

            <span>
              02
            </span>

            <h3>
              Emerging Tech Company
            </h3>

            <p>
              Technology creating measurable
              political impact.
            </p>

          </article>


          <article className="home-award">

            <span>
              03
            </span>

            <h3>
              Innovation in Data
            </h3>

            <p>
              Turning complex political data
              into intelligence.
            </p>

          </article>


        </div>

      </section>



      {/* =====================================================
          SECTION 05 — EXPERIENCE
      ===================================================== */}

      <section className="home-experience">


        <div className="home-experience-decoration home-decoration-left">

          <div />
          <div />
          <div />

        </div>


        <div className="home-experience-content">

          <span className="section-label">
            OUR EXPERIENCE
          </span>


          <h2>

            Years of
            <br />

            understanding
            <br />

            <span>
              people.
            </span>

          </h2>


          <p>

            Elections are not just numbers.
            They are people, communities and
            stories. Our experience helps us
            read those signals and turn them
            into strategy.

          </p>


          <Link
            to="/our-story"
            className="text-link"
          >

            Know more

            <span>
              ↗
            </span>

          </Link>

        </div>


        <div className="home-experience-decoration home-decoration-right">

          <div />
          <div />
          <div />

        </div>

      </section>



      {/* =====================================================
          SECTION 06 — TEAM
      ===================================================== */}

      <section className="home-team">


        <div className="home-section-top">

          <span className="section-label">
            THE BRAINS
          </span>

          <span className="section-count">
            OUR PEOPLE
          </span>

        </div>


        <div className="home-team-grid">


          <article className="home-team-card">

            <div className="home-team-image">

              <img
                src="/stalin-muthusamy.png"
                alt="PlanPol team member"
              />

            </div>


            <div className="home-team-info">

              <span>
                01
              </span>

              <h3>
                Stalin Muthusamy
              </h3>

              <p>
                Co-Founder
              </p>

            </div>

          </article>


          <article className="home-team-card">

            <div className="home-team-image">

              <img
                src="/gayathri-lakshminarayanan.png"
                alt="PlanPol team member"
              />

            </div>


            <div className="home-team-info">

              <span>
                02
              </span>

              <h3>
                Gayathri Lakshminarayanan
              </h3>

              <p>
                Co-Founder
              </p>

            </div>

          </article>


        </div>


        <Link
          to="/brains"
          className="home-team-link"
        >

          Meet the brains

          <span>
            ↗
          </span>

        </Link>

      </section>



      {/* =====================================================
          SECTION 07 — PRODUCTS
      ===================================================== */}

      <section className="home-products">


        <div className="home-products-heading">

          <span className="section-label">
            OUR PRODUCTS
          </span>


          <h2>

            Built for
            <br />

            <span>
              politics.
            </span>

          </h2>


          <p>

            Purpose-built technology that
            turns political data into actionable
            intelligence.

          </p>

        </div>


        <div className="home-products-list">


          <Link
            to="/products?product=strategy"
            className="home-product-row"
          >

            <span>
              01
            </span>

            <strong>
              PlanPol Strategy
            </strong>

            <span>
              ↗
            </span>

          </Link>


          <Link
            to="/products?product=voice"
            className="home-product-row"
          >

            <span>
              02
            </span>

            <strong>
              PlanPol Voice
            </strong>

            <span>
              ↗
            </span>

          </Link>


          <Link
            to="/products?product=booth"
            className="home-product-row"
          >

            <span>
              03
            </span>

            <strong>
              PlanPol Booth
            </strong>

            <span>
              ↗
            </span>

          </Link>


          <Link
            to="/products?product=PlanPol%20Party%20360%C2%B0"
            className="home-product-row"
          >

            <span>
              04
            </span>

            <strong>
              PlanPol Party 360°
            </strong>

            <span>
              ↗
            </span>

          </Link>


        </div>

      </section>



      {/* =====================================================
          SECTION 08 — FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">


        <div className="home-final-orbit orbit-one" />

        <div className="home-final-orbit orbit-two" />


        <div className="home-final-inner">

          <span className="section-label">
            LET'S WORK TOGETHER
          </span>


          <h2>

            Let's make
            <br />

            data{" "}

            <span>
              work.
            </span>

          </h2>


          <Link
            to="/contact"
            className="home-final-button"
          >

            Talk to us

            <span>
              ↗
            </span>

          </Link>

        </div>

      </section>


    </main>
  );
}

export default Home;