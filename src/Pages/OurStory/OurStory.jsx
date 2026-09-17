import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".our-story-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".our-story-image", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".our-story-content", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".our-story-blue-box", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        delay: 0.45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".our-story-blue-box",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full overflow-hidden bg-white text-[#172033]">

      {/* OUR STORY TITLE */}
      <section className="px-[5%] pt-[18px] sm:px-[7%] lg:px-[3.3%]">
        <h1 className="our-story-title m-0 text-[42px] font-normal leading-none tracking-[-0.05em] text-[#0878f9] sm:text-[48px] lg:text-[48px]">
          Our Story
        </h1>
      </section>

      {/* STORY IMAGE */}
      <section className="px-[5%] pt-[35px] sm:px-[7%] sm:pt-[45px] lg:px-[8%] lg:pt-[48px]">
        <div className="our-story-image mx-auto flex w-full max-w-[1100px] justify-center">
          <img src="/story.png" alt="PlanPol Story" className="block h-auto w-full max-w-[620px] object-contain sm:max-w-[700px] lg:max-w-[760px]" />
        </div>
      </section>

      {/* STORY CONTENT */}
      <section className="px-[7%] pb-[55px] pt-[35px] sm:px-[9%] sm:pb-[65px] sm:pt-[40px] lg:px-[27%] lg:pb-[58px] lg:pt-[32px]">
        <div className="our-story-content mx-auto w-full max-w-[1050px]">

          <p className="m-0 text-[14px] font-normal leading-[1.7] text-[#173b72] sm:text-[15px] lg:text-[14px]">
            <strong className="font-semibold text-[#0878f9]">PlanPol</strong> is built at the intersection of politics, data, and technology.
          </p>

          <p className="mt-[3px] text-[14px] font-normal leading-[1.7] text-[#173b72] sm:text-[15px] lg:text-[14px]">
            PlanPol is more than a political technology platform. It's an equaliser, using AI and data-driven tools to break down barriers to participation in politics.
          </p>

          <p className="mt-[25px] text-[14px] font-normal leading-[1.7] text-[#173b72] sm:text-[15px] lg:text-[14px]">
            PlanPol is built for the grassroots organiser with vision but no network, the political aspirant without a strong godfather or a political strategist, and the citizen ready to serve but overwhelmed by campaign mechanics.
          </p>

          <p className="mt-[3px] text-[14px] font-normal leading-[1.7] text-[#173b72] sm:text-[15px] lg:text-[14px]">
            The belief driving PlanPol is simple: democracy thrives when diverse voices lead. By delivering household-level intelligence, balancing on-ground presence with digital influence, and turning campaigning from guesswork into precision work, PlanPol empowers leaders to connect and engage at the most personal level.
          </p>

          <p className="mt-[25px] text-[14px] font-normal leading-[1.7] text-[#173b72] sm:text-[15px] lg:text-[14px]">
            From first-time candidates to seasoned veterans without access to elite campaign machinery, PlanPol opens the doors of democracy to all. Its mission is to decentralise political opportunity and restore politics to its true purpose: serving people.
          </p>

          <p className="mt-[25px] text-[14px] font-normal leading-[1.7] text-[#173b72] sm:text-[15px] lg:text-[14px]">
            With PlanPol, political strategy isn’t just smarter; the rules themselves are being rewritten so politics works for everyone.
          </p>

        </div>
      </section>

      {/* BLUE INFORMATION BOX */}
      <section className="px-[2px] pb-[3px] sm:px-[4px] lg:px-[4px]">
        <div className="our-story-blue-box mx-auto flex min-h-[155px] w-full max-w-[960px] items-center justify-between gap-[35px] rounded-[18px] bg-[#0878f9] px-[36px] py-[28px] text-white sm:px-[40px] sm:py-[30px] lg:min-h-[157px] lg:px-[36px]">

          <p className="m-0 max-w-[650px] text-[13px] font-normal leading-[1.7] sm:text-[14px]">
            As a non-partisan service provider, we ensure seamless execution of large-scale political events and campaigns, even under pressure, 24/7, all year round. Partner with PlanPol, and witness us turn your challenges into successes.
          </p>

          {/* THREE REFERENCE-STYLE ICONS */}
          <div className="flex shrink-0 items-center gap-[25px] sm:gap-[30px]">

            {/* BALANCE SCALE */}
            <div className="flex h-[48px] w-[48px] items-center justify-center">
              <svg viewBox="0 0 64 64" className="h-[45px] w-[45px]" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 12v40" />
                <path d="M19 52h26" />
                <path d="M10 20h44" />
                <path d="M18 20l-8 16h16l-8-16Z" />
                <path d="M46 20l-8 16h16l-8-16Z" />
                <circle cx="32" cy="12" r="2.5" fill="white" stroke="none" />
              </svg>
            </div>

            {/* 24/7 CIRCULAR ICON */}
            <div className="flex h-[48px] w-[48px] items-center justify-center">
              <svg viewBox="0 0 64 64" className="h-[45px] w-[45px]" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M49 21a22 22 0 0 0-36-4" />
                <path d="M13 17v8h8" />
                <path d="M15 43a22 22 0 0 0 36 4" />
                <path d="M51 47v-8h-8" />
                <text x="32" y="36" textAnchor="middle" fill="white" stroke="none" fontSize="11" fontWeight="700">
                  24/7
                </text>
              </svg>
            </div>

            {/* 365 CALENDAR */}
            <div className="flex h-[48px] w-[48px] items-center justify-center">
              <svg viewBox="0 0 64 64" className="h-[45px] w-[45px]" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="13" width="44" height="42" rx="3" />
                <path d="M10 24h44" />
                <path d="M20 9v9" />
                <path d="M44 9v9" />
                <text x="32" y="43" textAnchor="middle" fill="white" stroke="none" fontSize="15" fontWeight="700">
                  365
                </text>
              </svg>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default OurStory;