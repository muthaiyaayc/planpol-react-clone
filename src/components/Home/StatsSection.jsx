import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);

  const stats = [
    { value: 15, suffix: "", label: "Elections" },
    { value: 50, suffix: "", label: "Campaigns" },
    { value: 12, suffix: "", label: "States" },
    { value: 2, suffix: "", label: "Countries" },
    { value: 3598, suffix: "", label: "GBs of data" },
    { value: 125, suffix: "K+", label: "Lines of code" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((element, index) => {
        if (!element) return;

        const stat = stats[index];
        const counter = { value: 0 };

        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${Math.floor(counter.value).toLocaleString("en-IN")}${stat.suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[520px] w-full overflow-hidden bg-[#0878f9] text-white max-[700px]:min-h-[760px] max-[400px]:min-h-[700px]">

      <div className="relative z-[3] grid min-h-[360px] w-full grid-cols-[55%_45%] items-start gap-[30px] px-[5%] pt-[45px] max-[700px]:flex max-[700px]:min-h-0 max-[700px]:flex-col max-[700px]:gap-0 max-[700px]:px-[25px] max-[700px]:pt-[65px] max-[400px]:pt-[50px]">

        {/* STATS GRID */}
        <div className="grid w-full max-w-[560px] grid-cols-2 gap-x-[65px] gap-y-[38px] max-[700px]:gap-x-0 max-[700px]:gap-y-[35px] max-[400px]:gap-y-[28px]">

          {stats.map((stat, index) => (
            <div key={stat.label} className="flex min-h-[82px] flex-col border-0 bg-transparent max-[700px]:min-h-[80px]">

              <div
                ref={(element) => {
                  statRefs.current[index] = element;
                }}
                className="text-[clamp(48px,4.4vw,66px)] font-normal leading-[0.95] tracking-[-0.055em] text-white shadow-[0_2px_5px_rgba(0,0,0,0.12)] max-[700px]:text-[43px] max-[400px]:text-[37px]"
              >
                0
              </div>

              <span className="mt-[12px] text-[14px] leading-none text-white/95 max-[700px]:mt-[9px] max-[700px]:text-[12px] max-[400px]:text-[11px]">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

        {/* DESCRIPTION */}
        <div className="w-full max-w-[560px] px-[35px] text-center max-[1000px]:px-[10px] max-[700px]:max-w-none max-[700px]:px-[5px] max-[700px]:pt-[55px] max-[400px]:pt-[45px]">

          <h2 className="text-[clamp(27px,2.4vw,36px)] font-medium leading-[1.03] tracking-[-0.045em] text-white max-[1000px]:text-[25px] max-[700px]:text-[26px] max-[400px]:text-[23px]">
            Data that powers
            <br />
            democracy.
          </h2>

          <p className="mx-auto mt-[17px] max-w-[370px] text-[11px] leading-[1.45] text-white/90 max-[1000px]:max-w-[330px] max-[1000px]:text-[10px] max-[700px]:mt-[18px] max-[700px]:max-w-[330px] max-[700px]:text-[11px] max-[700px]:leading-[1.5] max-[400px]:text-[10px]">
            We combine data, technology and hyperlocal intelligence to
            understand people, politics and the world around them.
          </p>

        </div>

      </div>

      {/* CROWD */}
      <div className="absolute bottom-[-5px] right-[-5px] z-[2] w-[47%] max-w-[620px] max-[1000px]:right-[-20px] max-[1000px]:w-[53%] max-[700px]:right-[-25%] max-[700px]:bottom-0 max-[700px]:w-[105%] max-[400px]:right-[-35%] max-[400px]:w-[120%]">

        <img src="/crowd.png" alt="Crowd" className="block w-full object-contain" />

      </div>

    </section>
  );
}

export default StatsSection;