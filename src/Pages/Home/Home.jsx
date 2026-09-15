import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const pageRef = useRef(null);
  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["You", "Democracy"];
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
  useEffect(() => {
    const ctx = gsap.context(() => {
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

  

      gsap.to(".home-hero-art img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


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
      className="home-page w-full overflow-hidden bg-white text-[#111]"
      ref={pageRef}
    >
      <section
        className="
          home-hero
          relative
          h-[calc(100vh-82px)]
          min-h-[500px]
          max-h-[620px]
          w-full
          overflow-hidden
          bg-[linear-gradient(105deg,#edf5ff_0%,#e7f0ff_42%,#e8e9ff_70%,#f0e7ff_100%)]

          max-[1000px]:h-[570px]

          max-[700px]:h-[680px]
          max-[700px]:min-h-[680px]
          max-[700px]:max-h-none

          max-[400px]:h-[620px]
          max-[400px]:min-h-[620px]
        "
      >

        <div
          className="
            home-hero-bg-circle
            pointer-events-none
            absolute
            right-[-380px]
            top-[-350px]
            h-[720px]
            w-[720px]
            rounded-full
            border
            border-[#1557ff]/[0.08]
          "
        />

        <div
          className="
            home-hero-inner
            relative
            z-[2]
            mx-auto
            flex
            h-full
            w-full
            items-stretch
            justify-between
          "
        >
          {/* HERO ART */}

          <div
            className="
              home-hero-art
              pointer-events-none
              absolute
              bottom-0
              left-[-10px]
              z-[1]
              flex
              w-[46vw]
              max-w-[590px]
              items-end
              justify-start

              max-[1000px]:left-[-30px]
              max-[1000px]:w-[48vw]
              max-[1000px]:max-w-[520px]

              max-[700px]:left-[-30px]
              max-[700px]:w-full
              max-[700px]:max-w-[500px]

              max-[400px]:left-[-55px]
              max-[400px]:w-[115%]
            "
          >
            <img
              src="/speaker.png"
              alt="PlanPol political intelligence"
              className="
                relative
                z-[2]
                block
                h-auto
                w-full
                object-contain
                object-left-bottom
                will-change-transform
              "
            />
          </div>

          <div
            className="
              home-hero-copy
              absolute
              right-[10.5%]
              top-1/2
              z-[5]
              w-[520px]
              -translate-y-[43%]
              text-left

              max-[1000px]:right-[6%]
              max-[1000px]:w-[470px]

              max-[700px]:left-5
              max-[700px]:right-auto
              max-[700px]:top-[80px]
              max-[700px]:w-[calc(100%-40px)]
              max-[700px]:transform-none

              max-[400px]:top-[70px]
            "
          >
            <h1
              className="
                home-hero-title
                m-0
                font-[Arial,Helvetica,sans-serif]
                text-[clamp(58px,5.9vw,86px)]
                font-medium
                leading-[0.96]
                tracking-[-0.055em]

                max-[1000px]:text-[68px]

                max-[700px]:text-[clamp(48px,14vw,72px)]

                max-[400px]:text-[46px]
              "
            >
              <span
                className="
                  home-hero-title-line
                  home-first-line
                  mb-4
                  block
                  text-[0.62em]
                  font-normal
                  leading-none
                  tracking-[-0.035em]

                  max-[700px]:mb-3
                "
              >
                World's first
              </span>

              <span
                className="
                  home-hero-title-line
                  home-blue
                  home-powered
                  block
                  font-bold
                  text-[#1557ff]
                "
              >
                AI Powered
              </span>

              <span
                className="
                  home-hero-title-line
                  home-blue
                  home-politech
                  mt-[2px]
                  block
                  font-bold
                  tracking-[-0.065em]
                  text-[#1557ff]
                "
              >
                PoliTech
              </span>
            </h1>

            <p
              className="
                home-hero-description
                m-[27px_0_0_4px]
                block
                text-[17px]
                font-normal
                leading-[1.4]
                text-[#222]

                max-[700px]:mt-6
                max-[700px]:text-[15px]

                max-[400px]:text-[14px]
              "
            >
              We make data work for{" "}

              <span className="home-blue font-medium text-[#1557ff]">
                {typedWord}

                <span
                  className="
                    typing-cursor
                    ml-[2px]
                    inline-block
                    font-light
                    animate-[blinkCursor_0.8s_ease-in-out_infinite]
                    motion-reduce:animate-none
                  "
                >
                  |
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* HERO BOTTOM BLUE LINE */}

        <div
          className="
            home-hero-bottom-line
            absolute
            bottom-0
            left-0
            right-0
            z-10
            h-2
            bg-[#1557ff]

            max-[700px]:h-[7px]
          "
        />
      </section>

      <section
        className="
          home-stats
          relative
          min-h-[520px]
          w-full
          overflow-hidden
          bg-[#0878f9]
          p-0
          text-white

          max-[700px]:min-h-[760px]
          max-[700px]:pt-[65px]

          max-[400px]:min-h-[700px]
          max-[400px]:pt-[50px]
        "
      >
        <div
          className="
            home-stats-inner
            relative
            z-[3]
            grid
            min-h-[360px]
            w-full
            grid-cols-[55%_45%]
            items-start
            px-[7%]
            pt-[55px]

            max-[1000px]:w-[calc(100%-60px)]
            max-[1000px]:grid-cols-[55%_45%]
            max-[1000px]:px-[5%]
            max-[1000px]:pt-[45px]

            max-[700px]:flex
            max-[700px]:min-h-0
            max-[700px]:w-full
            max-[700px]:flex-col
            max-[700px]:px-[25px]
            max-[700px]:pt-0
          "
        >
          {/* LEFT — NUMBER GRID */}

          <div
            className="
              home-stats-grid
              grid
              w-full
              max-w-[560px]
              grid-cols-2
              gap-x-[65px]
              gap-y-[38px]

              max-[1000px]:gap-x-[35px]
              max-[1000px]:gap-y-[30px]

              max-[700px]:w-full
              max-[700px]:max-w-none
              max-[700px]:gap-x-[25px]
              max-[700px]:gap-y-[35px]

              max-[400px]:gap-x-[18px]
              max-[400px]:gap-y-7
            "
          >
            {stats.map((stat) => (
              <div
                className="
                  home-stat
                  flex
                  min-h-[82px]
                  flex-col
                  justify-start
                  bg-transparent
                  p-0

                  max-[700px]:min-h-[80px]
                "
                key={stat.label}
              >
                <strong
                  className="
                    home-stat-number
                    m-0
                    block
                    text-[clamp(48px,4.4vw,66px)]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.055em]
                    text-white
                    [text-shadow:0_2px_5px_rgba(0,0,0,0.12)]

                    max-[1000px]:text-[48px]

                    max-[700px]:text-[43px]

                    max-[400px]:text-[37px]
                  "
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                >
                  0
                </strong>

                <span
                  className="
                    mt-3
                    block
                    text-[14px]
                    font-normal
                    leading-none
                    tracking-normal
                    text-white
                    opacity-[0.95]

                    max-[1000px]:text-[12px]

                    max-[700px]:mt-[9px]
                    max-[700px]:text-[12px]

                    max-[400px]:text-[11px]
                  "
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT — DESCRIPTION */}

          <div
            className="
              home-stats-copy
              w-full
              max-w-[560px]
              pl-[35px]
              text-center

              max-[1000px]:pl-[10px]

              max-[700px]:w-full
              max-[700px]:max-w-none
              max-[700px]:px-[5px]
              max-[700px]:pt-[55px]

              max-[400px]:pt-[45px]
            "
          >
            <h2
              className="
                m-0
                text-[clamp(27px,2.4vw,36px)]
                font-normal
                leading-[1.03]
                tracking-[-0.045em]
                text-white

                max-[1000px]:text-[25px]

                max-[700px]:text-[26px]
                max-[700px]:leading-[1.05]

                max-[400px]:text-[23px]
              "
            >
              PlanPol's Data-Driven
              Political Consulting is a
              service made{" "}

              <span className="font-normal text-white">
                Affordable through AI
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-[17px]
                w-full
                max-w-[370px]
                text-[11px]
                font-normal
                leading-[1.45]
                text-white/[0.88]

                max-[1000px]:max-w-[330px]
                max-[1000px]:text-[10px]

                max-[700px]:mt-[18px]
                max-[700px]:max-w-[330px]
                max-[700px]:text-[11px]
                max-[700px]:leading-[1.5]

                max-[400px]:text-[10px]
              "
            >
              We blend high-end tech and
              hyperlocal strategy to demystify
              and deliver Poli-Tech as a
              cost-effective offering, to
              transform your every step into
              a winning move.
            </p>
          </div>
        </div>

        {/* CROWD */}

        <div
          className="
            home-crowd
            absolute
            bottom-[-5px]
            right-[-5px]
            z-[2]
            h-auto
            w-[47%]
            max-w-[620px]

            max-[1000px]:right-[-20px]
            max-[1000px]:w-[53%]

            max-[700px]:right-[-25%]
            max-[700px]:bottom-0
            max-[700px]:w-[105%]
            max-[700px]:max-w-none

            max-[400px]:right-[-35%]
            max-[400px]:w-[120%]
          "
        >
          <img
            src="/crowd.png"
            alt=""
            className="
              block
              h-auto
              w-full
              object-contain
              object-right-bottom
              opacity-100
            "
          />
        </div>
      </section>


      <section
        className="
          home-story
          bg-white
          py-40

          max-[700px]:py-[90px]
        "
      >
        <div
          className="
            home-story-inner
            mx-auto
            grid
            w-[min(1320px,calc(100%-100px))]
            grid-cols-2
            items-center
            gap-[100px]

            max-[1000px]:w-[calc(100%-60px)]
            max-[1000px]:gap-[50px]

            max-[700px]:w-[calc(100%-40px)]
            max-[700px]:grid-cols-1
            max-[700px]:gap-[55px]
          "
        >
          <div
            className="
              home-story-image
              relative
              flex
              min-h-[540px]
              items-center
              justify-center

              max-[700px]:min-h-[350px]
            "
          >
            <div
              className="
                home-compass-ring
                absolute
                h-[430px]
                w-[430px]
                rounded-full
                border
                border-[#dce1e8]

                before:absolute
                before:inset-[45px]
                before:rounded-full
                before:border
                before:border-[#e7eaf0]

                after:absolute
                after:inset-[100px]
                after:rounded-full
                after:border
                after:border-[#e7eaf0]

                max-[700px]:h-[300px]
                max-[700px]:w-[300px]
              "
            />

            <img
              className="
                home-compass
                relative
                z-[2]
                w-[min(90%,460px)]
                object-contain
              "
              src="/compass.png"
              alt=""
            />
          </div>

          <div className="home-story-copy">
            <span
              className="
                section-label
                block
                text-[10px]
                font-bold
                tracking-[0.18em]
                text-[#777]
              "
            >
              DATA + TECHNOLOGY
            </span>

            <h2
              className="
                m-[25px_0_30px]
                text-[clamp(55px,6vw,90px)]
                font-medium
                leading-[0.9]
                tracking-[-0.07em]

                max-[700px]:text-[54px]
              "
            >
              Making
              <br />
              complexity
              <br />
              <span className="text-[#1557ff]">
                simple.
              </span>
            </h2>

            <p
              className="
                mb-[30px]
                max-w-[440px]
                text-[16px]
                font-normal
                leading-[1.75]
                text-[#70757e]
              "
            >
              We combine political experience
              with technology, data and research
              to uncover what really matters
              to people.
            </p>

            <Link
              to="/our-story"
              className="
                text-link
                inline-flex
                items-center
                gap-[15px]
                text-[13px]
                font-semibold
                text-[#111]
                no-underline
              "
            >
              Discover our story

              <span
                className="
                  text-[18px]
                  text-[#1557ff]
                  transition-transform
                  duration-300
                  ease-in-out
                  hover:translate-x-1
                  hover:-translate-y-1
                  motion-reduce:transition-none
                "
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="
          home-awards
          bg-[#f5f7fa]
          py-[110px] pb-[140px]

          max-[700px]:py-20
          max-[700px]:pb-[90px]
        "
      >
        <div
          className="
            home-section-top
            mx-auto
            mb-10
            flex
            w-[min(1320px,calc(100%-100px))]
            justify-between

            max-[1000px]:w-[calc(100%-60px)]

            max-[700px]:w-[calc(100%-40px)]
          "
        >
          <span
            className="
              section-label
              block
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-[#777]
            "
          >
            RECOGNITION
          </span>

          <span
            className="
              section-count
              text-[10px]
              font-bold
              tracking-[0.16em]
              text-[#888]
            "
          >
            03 AWARDS
          </span>
        </div>

        <div
          className="
            home-awards-grid
            mx-auto
            grid
            w-[min(1320px,calc(100%-100px))]
            grid-cols-3
            gap-[15px]

            max-[1000px]:w-[calc(100%-60px)]

            max-[700px]:w-[calc(100%-40px)]
            max-[700px]:grid-cols-1
          "
        >
          <article
            className="
              home-award
              min-h-[280px]
              border
              border-[#e1e4e9]
              bg-white
              p-[30px]
              transition-[transform,box-shadow]
              duration-[400ms]
              ease-in-out
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)]
              motion-reduce:transition-none

              max-[700px]:min-h-[220px]
            "
          >
            <span className="text-[11px] text-[#1557ff]">
              01
            </span>

            <h3
              className="
                mt-20
                mb-[15px]
                text-[28px]
                font-medium
                leading-none
                tracking-[-0.04em]

                max-[700px]:mt-[55px]
              "
            >
              Best Political Technology
            </h3>

            <p
              className="
                m-0
                text-[13px]
                leading-[1.6]
                text-[#777]
              "
            >
              Recognising innovation in
              political technology.
            </p>
          </article>

          <article
            className="
              home-award
              min-h-[280px]
              border
              border-[#e1e4e9]
              bg-white
              p-[30px]
              transition-[transform,box-shadow]
              duration-[400ms]
              ease-in-out
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)]
              motion-reduce:transition-none

              max-[700px]:min-h-[220px]
            "
          >
            <span className="text-[11px] text-[#1557ff]">
              02
            </span>

            <h3
              className="
                mt-20
                mb-[15px]
                text-[28px]
                font-medium
                leading-none
                tracking-[-0.04em]

                max-[700px]:mt-[55px]
              "
            >
              Emerging Tech Company
            </h3>

            <p
              className="
                m-0
                text-[13px]
                leading-[1.6]
                text-[#777]
              "
            >
              Technology creating measurable
              political impact.
            </p>
          </article>

          <article
            className="
              home-award
              min-h-[280px]
              border
              border-[#e1e4e9]
              bg-white
              p-[30px]
              transition-[transform,box-shadow]
              duration-[400ms]
              ease-in-out
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)]
              motion-reduce:transition-none

              max-[700px]:min-h-[220px]
            "
          >
            <span className="text-[11px] text-[#1557ff]">
              03
            </span>

            <h3
              className="
                mt-20
                mb-[15px]
                text-[28px]
                font-medium
                leading-none
                tracking-[-0.04em]

                max-[700px]:mt-[55px]
              "
            >
              Innovation in Data
            </h3>

            <p
              className="
                m-0
                text-[13px]
                leading-[1.6]
                text-[#777]
              "
            >
              Turning complex political data
              into intelligence.
            </p>
          </article>
        </div>
      </section>

      <section
        className="
          home-experience
          relative
          flex
          min-h-[700px]
          items-center
          justify-center
          overflow-hidden
          bg-white

          max-[700px]:min-h-[600px]
          max-[700px]:px-5
          max-[700px]:py-[100px]
        "
      >
        <div
          className="
            home-experience-decoration
            home-decoration-left
            absolute
            left-[-180px]
            h-[370px]
            w-[370px]
            rounded-full
            border
            border-[#e2e5ea]

            max-[700px]:left-[-190px]
            max-[700px]:h-[260px]
            max-[700px]:w-[260px]
          "
        >
          <div
            className="
              absolute
              inset-[45px]
              rounded-full
              border
              border-[#e8ebef]
            "
          />

          <div
            className="
              absolute
              inset-[100px]
              rounded-full
              border
              border-[#e8ebef]
            "
          />

          <div
            className="
              absolute
              inset-[150px]
              rounded-full
              border
              border-[#e8ebef]
            "
          />
        </div>

        <div
          className="
            home-experience-content
            relative
            z-[3]
            max-w-[680px]
            text-center
          "
        >
          <span
            className="
              section-label
              mb-[30px]
              block
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-[#777]
            "
          >
            OUR EXPERIENCE
          </span>

          <h2
            className="
              m-0
              text-[clamp(55px,7vw,105px)]
              font-medium
              leading-[0.88]
              tracking-[-0.075em]

              max-[700px]:text-[55px]
            "
          >
            Years of
            <br />
            understanding
            <br />
            <span className="text-[#1557ff]">
              people.
            </span>
          </h2>

          <p
            className="
              mx-auto
              my-[40px_0_30px]
              max-w-[510px]
              text-[15px]
              leading-[1.75]
              text-[#777]
            "
          >
            Elections are not just numbers.
            They are people, communities and
            stories. Our experience helps us
            read those signals and turn them
            into strategy.
          </p>

          <Link
            to="/our-story"
            className="
              text-link
              inline-flex
              items-center
              gap-[15px]
              text-[13px]
              font-semibold
              text-[#111]
              no-underline
            "
          >
            Know more

            <span
              className="
                text-[18px]
                text-[#1557ff]
                transition-transform
                duration-300
                ease-in-out
                hover:translate-x-1
                hover:-translate-y-1
                motion-reduce:transition-none
              "
            >
              ↗
            </span>
          </Link>
        </div>

        <div
          className="
            home-experience-decoration
            home-decoration-right
            absolute
            right-[-180px]
            h-[370px]
            w-[370px]
            rounded-full
            border
            border-[#e2e5ea]

            max-[700px]:right-[-190px]
            max-[700px]:h-[260px]
            max-[700px]:w-[260px]
          "
        >
          <div
            className="
              absolute
              inset-[45px]
              rounded-full
              border
              border-[#e8ebef]
            "
          />

          <div
            className="
              absolute
              inset-[100px]
              rounded-full
              border
              border-[#e8ebef]
            "
          />

          <div
            className="
              absolute
              inset-[150px]
              rounded-full
              border
              border-[#e8ebef]
            "
          />
        </div>
      </section>

      <section
        className="
          home-team
          bg-[#f5f7fa]
          py-[120px] pb-[140px]

          max-[700px]:py-[90px]
        "
      >
        <div
          className="
            home-section-top
            mx-auto
            mb-10
            flex
            w-[min(1320px,calc(100%-100px))]
            justify-between

            max-[1000px]:w-[calc(100%-60px)]

            max-[700px]:w-[calc(100%-40px)]
          "
        >
          <span
            className="
              section-label
              block
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-[#777]
            "
          >
            THE BRAINS
          </span>

          <span
            className="
              section-count
              text-[10px]
              font-bold
              tracking-[0.16em]
              text-[#888]
            "
          >
            OUR PEOPLE
          </span>
        </div>

        <div
          className="
            home-team-grid
            mx-auto
            grid
            w-[min(1100px,calc(100%-100px))]
            grid-cols-2
            gap-[35px]

            max-[1000px]:w-[calc(100%-60px)]

            max-[700px]:w-[calc(100%-40px)]
            max-[700px]:grid-cols-1
          "
        >
          <article className="home-team-card bg-white">
            <div
              className="
                home-team-image
                h-[520px]
                overflow-hidden
                bg-[#e9edf2]

                max-[700px]:h-[430px]
              "
            >
              <img
                src="/stalin-muthusamy.png"
                alt="PlanPol team member"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:scale-[1.05]
                  motion-reduce:transition-none
                "
              />
            </div>

            <div className="home-team-info p-[25px]">
              <span className="text-[11px] text-[#1557ff]">
                01
              </span>

              <h3
                className="
                  m-[15px_0_7px]
                  text-[28px]
                  font-medium
                  tracking-[-0.04em]
                "
              >
                Stalin Muthusamy
              </h3>

              <p className="m-0 text-[12px] text-[#777]">
                Co-Founder
              </p>
            </div>
          </article>

          <article className="home-team-card bg-white">
            <div
              className="
                home-team-image
                h-[520px]
                overflow-hidden
                bg-[#e9edf2]

                max-[700px]:h-[430px]
              "
            >
              <img
                src="/gayathri-lakshminarayanan.png"
                alt="PlanPol team member"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:scale-[1.05]
                  motion-reduce:transition-none
                "
              />
            </div>

            <div className="home-team-info p-[25px]">
              <span className="text-[11px] text-[#1557ff]">
                02
              </span>

              <h3
                className="
                  m-[15px_0_7px]
                  text-[28px]
                  font-medium
                  tracking-[-0.04em]
                "
              >
                Gayathri Lakshminarayanan
              </h3>

              <p className="m-0 text-[12px] text-[#777]">
                Co-Founder
              </p>
            </div>
          </article>
        </div>

        <Link
          to="/brains"
          className="
            home-team-link
            mx-auto
            mt-[45px]
            flex
            w-[min(1100px,calc(100%-100px))]
            justify-between
            border-b
            border-[#cfd4dc]
            pb-3
            text-[14px]
            font-semibold
            text-[#111]
            no-underline

            max-[700px]:w-[calc(100%-40px)]
          "
        >
          Meet the brains

          <span className="text-[18px] text-[#1557ff]">
            ↗
          </span>
        </Link>
      </section>


      <section
        className="
          home-products
          bg-white
          py-[150px]

          max-[700px]:py-[100px]
        "
      >
        <div
          className="
            home-products-heading
            mx-auto
            w-[min(1320px,calc(100%-100px))]

            max-[1000px]:w-[calc(100%-60px)]

            max-[700px]:w-[calc(100%-40px)]
          "
        >
          <span
            className="
              section-label
              block
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-[#777]
            "
          >
            OUR PRODUCTS
          </span>

          <h2
            className="
              m-[25px_0]
              text-[clamp(60px,7vw,110px)]
              font-medium
              leading-[0.88]
              tracking-[-0.075em]

              max-[700px]:text-[58px]
            "
          >
            Built for
            <br />
            <span className="text-[#1557ff]">
              politics.
            </span>
          </h2>

          <p
            className="
              mb-[75px]
              max-w-[420px]
              text-[16px]
              leading-[1.7]
              text-[#777]

              max-[700px]:mb-[50px]
            "
          >
            Purpose-built technology that
            turns political data into actionable
            intelligence.
          </p>
        </div>

        <div
          className="
            home-products-list
            mx-auto
            w-[min(1320px,calc(100%-100px))]
            border-t
            border-[#d9dde4]

            max-[1000px]:w-[calc(100%-60px)]

            max-[700px]:w-[calc(100%-40px)]
          "
        >
          {[
            {
              number: "01",
              name: "PlanPol Strategy",
              path: "/products?product=strategy",
            },
            {
              number: "02",
              name: "PlanPol Voice",
              path: "/products?product=voice",
            },
            {
              number: "03",
              name: "PlanPol Booth",
              path: "/products?product=booth",
            },
            {
              number: "04",
              name: "PlanPol Party 360°",
              path: "/products?product=PlanPol%20Party%20360%C2%B0",
            },
          ].map((product) => (
            <Link
              key={product.number}
              to={product.path}
              className="
                home-product-row
                grid
                min-h-[125px]
                grid-cols-[80px_1fr_40px]
                items-center
                border-b
                border-[#d9dde4]
                text-[#111]
                no-underline
                transition-[padding,color]
                duration-300
                ease-in-out
                hover:pl-5
                hover:text-[#1557ff]
                motion-reduce:transition-none

                max-[700px]:min-h-[105px]
                max-[700px]:grid-cols-[40px_1fr_25px]
              "
            >
              <span
                className="
                  text-[11px]
                  text-[#1557ff]
                "
              >
                {product.number}
              </span>

              <strong
                className="
                  text-[clamp(28px,3vw,48px)]
                  font-medium
                  tracking-[-0.05em]

                  max-[700px]:text-[27px]
                "
              >
                {product.name}
              </strong>

              <span
                className="
                  text-[20px]
                  transition-transform
                  duration-300
                  ease-in-out
                  hover:translate-x-[5px]
                  hover:-translate-y-[5px]
                  motion-reduce:transition-none
                "
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="
          home-final-cta
          relative
          flex
          min-h-[600px]
          items-center
          overflow-hidden
          bg-[#1557ff]
          text-white

          max-[700px]:min-h-[550px]
        "
      >
        <div
          className="
            home-final-orbit
            orbit-one
            absolute
            right-[-230px]
            top-[-180px]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-white/[0.16]

            max-[700px]:right-[-260px]
            max-[700px]:h-[450px]
            max-[700px]:w-[450px]
          "
        />

        <div
          className="
            home-final-orbit
            orbit-two
            absolute
            right-[-125px]
            top-[-75px]
            h-[440px]
            w-[440px]
            rounded-full
            border
            border-white/[0.16]

            max-[700px]:right-[-185px]
            max-[700px]:h-[300px]
            max-[700px]:w-[300px]
          "
        />

        <div
          className="
            home-final-inner
            relative
            z-[3]
            mx-auto
            w-[min(1320px,calc(100%-100px))]

            max-[700px]:w-[calc(100%-40px)]
          "
        >
          <span
            className="
              section-label
              block
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-white/[0.7]
            "
          >
            LET'S WORK TOGETHER
          </span>

          <h2
            className="
              m-[25px_0_45px]
              text-[clamp(65px,8vw,125px)]
              font-medium
              leading-[0.86]
              tracking-[-0.08em]

              max-[700px]:text-[62px]
            "
          >
            Let's make
            <br />
            data{" "}
            <span className="opacity-[0.65]">
              work.
            </span>
          </h2>

          <Link
            to="/contact"
            className="
              home-final-button
              inline-flex
              items-center
              gap-[35px]
              rounded-[50px]
              border
              border-white/50
              px-[22px]
              py-[17px]
              text-[13px]
              text-white
              no-underline
              transition-[background,color,transform]
              duration-300
              ease-in-out
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#1557ff]
              motion-reduce:transition-none
            "
          >
            Talk to us

            <span className="text-[18px]">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;