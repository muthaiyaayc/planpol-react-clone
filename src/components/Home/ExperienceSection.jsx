import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-experience-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-white max-[700px]:min-h-[600px] max-[700px]:px-5 max-[700px]:py-[100px]">

      {/* LEFT CIRCLES */}
      <div className="absolute left-[-180px] h-[370px] w-[370px] rounded-full border border-[#e2e5ea] max-[700px]:left-[-190px] max-[700px]:h-[260px] max-[700px]:w-[260px]">

        <div className="absolute inset-[45px] rounded-full border border-[#e8ebef]"></div>

        <div className="absolute inset-[100px] rounded-full border border-[#e8ebef]"></div>

        <div className="absolute inset-[150px] rounded-full border border-[#e8ebef]"></div>

      </div>

      {/* CONTENT */}
      <div className="home-experience-content relative z-[3] max-w-[680px] text-center">

        <span className="mb-[30px] block text-[10px] font-bold tracking-[0.18em] text-[#777]">
          OUR EXPERIENCE
        </span>

        <h2 className="m-0 text-[clamp(55px,7vw,105px)] font-medium leading-[0.88] tracking-[-0.075em] max-[700px]:text-[55px]">
          Years of
          <br />
          understanding
          <br />
          <span className="text-[#1557ff]">
            people.
          </span>
        </h2>

        <p className="mx-auto my-[40px_0_30px] max-w-[510px] text-[15px] leading-[1.75] text-[#777]">
          Elections are not just numbers.
          They are people, communities and
          stories. Our experience helps us
          read those signals and turn them
          into strategy.
        </p>

        <a href="/our-story" className="inline-flex items-center gap-[15px] text-[13px] font-semibold text-[#111] no-underline">
          Know more

          <span className="text-[18px] text-[#1557ff] transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-translate-y-1 motion-reduce:transition-none">
            ↗
          </span>
        </a>

      </div>

      {/* RIGHT CIRCLES */}
      <div className="absolute right-[-180px] h-[370px] w-[370px] rounded-full border border-[#e2e5ea] max-[700px]:right-[-190px] max-[700px]:h-[260px] max-[700px]:w-[260px]">

        <div className="absolute inset-[45px] rounded-full border border-[#e8ebef]"></div>

        <div className="absolute inset-[100px] rounded-full border border-[#e8ebef]"></div>

        <div className="absolute inset-[150px] rounded-full border border-[#e8ebef]"></div>

      </div>

    </section>
  );
}

export default ExperienceSection;