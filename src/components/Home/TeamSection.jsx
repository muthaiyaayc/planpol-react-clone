import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-team-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f7fa] py-[120px] pb-[140px] max-[700px]:py-[90px]">

      {/* SECTION HEADER */}
      <div className="mx-auto mb-10 flex w-[min(1320px,calc(100%-100px))] justify-between max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)]">

        <span className="block text-[10px] font-bold tracking-[0.18em] text-[#777]">
          THE BRAINS
        </span>

        <span className="text-[10px] font-bold tracking-[0.16em] text-[#888]">
          OUR PEOPLE
        </span>

      </div>

      {/* TEAM GRID */}
      <div className="mx-auto grid w-[min(1100px,calc(100%-100px))] grid-cols-2 gap-[35px] max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)] max-[700px]:grid-cols-1">

        {/* TEAM MEMBER 01 */}
        <article className="home-team-card grid min-h-[400px] grid-cols-[38%_62%] overflow-hidden rounded-[20px] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] max-[900px]:grid-cols-1 max-[900px]:min-h-0">

          {/* IMAGE */}
          <div className="relative flex h-full min-h-[400px] items-end justify-center overflow-hidden bg-[#0878f9] max-[900px]:min-h-[360px]">

            <img src="/stalin-muthusamy.png" alt="Stalin Muthusamy" className="block h-full w-full object-contain object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] motion-reduce:transition-none" />

          </div>

          {/* CONTENT */}
          <div className="flex min-h-[400px] flex-col justify-between p-[35px] max-[900px]:min-h-[300px] max-[700px]:p-[28px]">

            <div>

              <p className="m-0 text-[17px] italic leading-[1.5] text-[#27364d]">
                "Building inclusive politics through AI-powered tools, empowering leaders from grassroots to national stage."
              </p>

              <h3 className="m-[25px_0_8px] text-[24px] font-medium uppercase tracking-[-0.03em] text-[#111] max-[700px]:text-[22px]">
                STALIN MUTHUSAMY
              </h3>

              <p className="m-0 text-[14px] text-[#687386]">
                Public Policy, IIM Calcutta
              </p>

              <p className="mt-[8px] text-[14px] font-semibold text-[#1557ff]">
                Founder & CEO
              </p>

            </div>

            <button type="button" className="mt-[25px] self-end rounded-[14px] bg-[#0878f9] px-[28px] py-[14px] text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#066de0] max-[700px]:self-start">
              Learn More
            </button>

          </div>

        </article>

        {/* TEAM MEMBER 02 */}
        <article className="home-team-card grid min-h-[400px] grid-cols-[38%_62%] overflow-hidden rounded-[20px] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] max-[900px]:grid-cols-1 max-[900px]:min-h-0">

          {/* IMAGE */}
          <div className="relative flex h-full min-h-[400px] items-end justify-center overflow-hidden bg-[#0878f9] max-[900px]:min-h-[360px]">

            <img src="/gayathri-lakshminarayanan.png" alt="Gayathri Lakshminarayanan" className="block h-full w-full object-contain object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] motion-reduce:transition-none" />

          </div>

          {/* CONTENT */}
          <div className="flex min-h-[400px] flex-col justify-between p-[35px] max-[900px]:min-h-[300px] max-[700px]:p-[28px]">

            <div>

              <p className="m-0 text-[17px] italic leading-[1.5] text-[#27364d]">
                "Driving data-led, people-focused strategies that bridge policy, governance, and grassroots democratic engagement."
              </p>

              <h3 className="m-[25px_0_8px] text-[24px] font-medium uppercase tracking-[-0.03em] text-[#111] max-[700px]:text-[22px]">
                GAYATHRI LAKSHMINARAYANAN
              </h3>

              <p className="m-0 text-[14px] text-[#687386]">
                Behavioural Economics, London
              </p>

              <p className="mt-[8px] text-[14px] font-semibold text-[#1557ff]">
                Chief — Leadership Team
              </p>

            </div>

            <button type="button" className="mt-[25px] self-end rounded-[14px] bg-[#0878f9] px-[28px] py-[14px] text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#066de0] max-[700px]:self-start">
              Learn More
            </button>

          </div>

        </article>

      </div>

      {/* BRAINS LINK */}
      <Link to="/brains" className="mx-auto mt-[45px] flex w-[min(1100px,calc(100%-100px))] justify-between border-b border-[#cfd4dc] pb-3 text-[14px] font-semibold text-[#111] no-underline max-[700px]:w-[calc(100%-40px)]">

        <span>
          Meet the brains
        </span>

        <span className="text-[18px] text-[#1557ff]">
          ↗
        </span>

      </Link>

    </section>
  );
}

export default TeamSection;