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
        <article className="home-team-card bg-white">

          <div className="h-[520px] overflow-hidden bg-[#e9edf2] max-[700px]:h-[430px]">

            <img src="/stalin-muthusamy.png" alt="PlanPol team member" className="block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] motion-reduce:transition-none" />

          </div>

          <div className="p-[25px]">

            <span className="text-[11px] text-[#1557ff]">
              01
            </span>

            <h3 className="m-[15px_0_7px] text-[28px] font-medium tracking-[-0.04em]">
              Stalin Muthusamy
            </h3>

            <p className="m-0 text-[12px] text-[#777]">
              Co-Founder
            </p>

          </div>

        </article>

        {/* TEAM MEMBER 02 */}
        <article className="home-team-card bg-white">

          <div className="h-[520px] overflow-hidden bg-[#e9edf2] max-[700px]:h-[430px]">

            <img src="/gayathri-lakshminarayanan.png" alt="PlanPol team member" className="block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] motion-reduce:transition-none" />

          </div>

          <div className="p-[25px]">

            <span className="text-[11px] text-[#1557ff]">
              02
            </span>

            <h3 className="m-[15px_0_7px] text-[28px] font-medium tracking-[-0.04em]">
              Gayathri Lakshminarayanan
            </h3>

            <p className="m-0 text-[12px] text-[#777]">
              Co-Founder
            </p>

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