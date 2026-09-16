import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AwardsSection() {
  const sectionRef = useRef(null);

  const awards = [
    {
      number: "01",
      title: "Best Political Technology",
      description: "Recognising innovation in political technology.",
    },
    {
      number: "02",
      title: "Emerging Tech Company",
      description: "Technology creating measurable political impact.",
    },
    {
      number: "03",
      title: "Innovation in Data",
      description: "Turning complex political data into intelligence.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".home-award").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 70,
          opacity: 0,
          delay: index * 0.12,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f7fa] py-[110px] pb-[140px] max-[700px]:py-20 max-[700px]:pb-[90px]">

      {/* SECTION HEADER */}
      <div className="mx-auto mb-10 flex w-[min(1320px,calc(100%-100px))] justify-between max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)]">

        <span className="block text-[10px] font-bold tracking-[0.18em] text-[#777]">
          RECOGNITION
        </span>

        <span className="text-[10px] font-bold tracking-[0.16em] text-[#888]">
          03 AWARDS
        </span>

      </div>

      {/* AWARDS GRID */}
      <div className="mx-auto grid w-[min(1320px,calc(100%-100px))] grid-cols-3 gap-[15px] max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)] max-[700px]:grid-cols-1">

        {awards.map((award) => (
          <article key={award.number} className="home-award min-h-[280px] border border-[#e1e4e9] bg-white p-[30px] transition-[transform,box-shadow] duration-[400ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] motion-reduce:transition-none max-[700px]:min-h-[220px]">

            <span className="text-[11px] text-[#1557ff]">
              {award.number}
            </span>

            <h3 className="mt-20 mb-[15px] text-[28px] font-medium leading-none tracking-[-0.04em] max-[700px]:mt-[55px]">
              {award.title}
            </h3>

            <p className="m-0 text-[13px] leading-[1.6] text-[#777]">
              {award.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default AwardsSection;