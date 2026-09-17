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
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f5f7fa] px-5 py-[55px] sm:px-8 sm:py-[70px] lg:px-10 lg:py-[85px]">

      <div className="mx-auto grid w-full max-w-[1366px] grid-cols-2 gap-[38px] max-[900px]:grid-cols-1 max-[900px]:max-w-[680px] max-[600px]:gap-[25px]">

        {/* STALIN */}
        <article className="home-team-card relative flex h-[404px] overflow-hidden rounded-[18px] bg-white shadow-[0_16px_35px_rgba(0,0,0,0.10)] max-[600px]:h-auto max-[600px]:min-h-[500px]">

          {/* IMAGE */}
          <div className="flex h-[300px] w-[221px] shrink-0 items-end justify-center overflow-hidden bg-[#0878f9] max-[600px]:h-[300px] max-[600px]:w-[42%]">

            <img
              src="/stalin-muthusamy.png"
              alt="Stalin Muthusamy"
              className="block h-full w-full object-contain object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] motion-reduce:transition-none"
            />

          </div>

          {/* CONTENT */}
          <div className="flex h-full min-w-0 flex-1 flex-col px-[39px] pb-[38px] pt-[57px] max-[1100px]:px-[30px] max-[1100px]:pt-[45px] max-[600px]:px-[24px] max-[600px]:pb-[30px]">

            <p className="m-0 max-w-[360px] text-[20px] font-normal italic leading-[1.4] tracking-[-0.025em] text-[#17345d] max-[1100px]:text-[17px] max-[600px]:text-[16px]">
              "Building inclusive politics through AI-powered tools, empowering leaders from grassroots to national stage."
            </p>

            <div className="mt-[24px]">

              <h3 className="m-0 text-[25px] font-medium uppercase leading-[1.15] tracking-[-0.035em] text-[#111827] max-[1100px]:text-[21px] max-[600px]:text-[20px]">
                STALIN MUTHUSAMY
              </h3>

              <p className="m-[7px_0_0] text-[15px] font-normal leading-[1.4] text-[#617087] max-[1100px]:text-[14px]">
                Public Policy, IIM Calcutta
              </p>

              <p className="m-[8px_0_0] text-[15px] font-semibold text-[#0878f9] max-[1100px]:text-[14px]">
                Founder & CEO
              </p>

            </div>

            {/* BUTTON */}
            <Link
              to="/brains"
              className="group mt-auto ml-auto inline-flex h-[54px] w-[141px] shrink-0 items-center justify-center rounded-[15px] bg-[#0878f9] text-[15px] font-semibold text-white no-underline shadow-[0_10px_20px_rgba(8,120,249,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066ce0] max-[1100px]:h-[50px] max-[1100px]:w-[125px] max-[600px]:h-[48px] max-[600px]:w-[120px]"
            >
              Learn More
            </Link>

          </div>

        </article>

        {/* GAYATHRI */}
        <article className="home-team-card relative flex h-[404px] overflow-hidden rounded-[18px] bg-white shadow-[0_16px_35px_rgba(0,0,0,0.10)] max-[600px]:h-auto max-[600px]:min-h-[500px]">

          {/* IMAGE */}
          <div className="flex h-[300px] w-[221px] shrink-0 items-end justify-center overflow-hidden bg-[#0878f9] max-[1100px]:w-[205px] max-[600px]:h-[300px] max-[600px]:w-[42%]">

            <img
              src="/gayathri-lakshminarayanan.png"
              alt="Gayathri Lakshminarayanan"
              className="block h-full w-full object-contain object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] motion-reduce:transition-none"
            />

          </div>

          {/* CONTENT */}
          <div className="flex h-full min-w-0 flex-1 flex-col px-[39px] pb-[38px] pt-[57px] max-[1100px]:px-[30px] max-[1100px]:pt-[45px] max-[600px]:px-[24px] max-[600px]:pb-[30px]">

            <p className="m-0 max-w-[360px] text-[20px] font-normal italic leading-[1.4] tracking-[-0.025em] text-[#17345d] max-[1100px]:text-[17px] max-[600px]:text-[16px]">
              "Driving data-led, people-focused strategies that bridge policy, governance, and grassroots democratic engagement."
            </p>

            <div className="mt-[24px]">

              <h3 className="m-0 text-[25px] font-medium uppercase leading-[1.15] tracking-[-0.035em] text-[#111827] max-[1100px]:text-[21px] max-[600px]:text-[20px]">
                GAYATHRI LAKSHMINARAYANAN
              </h3>

              <p className="m-[7px_0_0] text-[15px] font-normal leading-[1.4] text-[#617087] max-[1100px]:text-[14px]">
                Behavioural Economics, London
              </p>

              <p className="m-[8px_0_0] text-[15px] font-semibold text-[#0878f9] max-[1100px]:text-[14px]">
                Chief — Leadership Team
              </p>

            </div>

            {/* BUTTON */}
            <Link
              to="/brains"
              className="group mt-auto ml-auto inline-flex h-[54px] w-[141px] shrink-0 items-center justify-center rounded-[15px] bg-[#0878f9] text-[15px] font-semibold text-white no-underline shadow-[0_10px_20px_rgba(8,120,249,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066ce0] max-[1100px]:h-[50px] max-[1100px]:w-[125px] max-[600px]:h-[48px] max-[600px]:w-[120px]"
            >
              Learn More
            </Link>

          </div>

        </article>

      </div>

    </section>
  );
}

export default TeamSection;