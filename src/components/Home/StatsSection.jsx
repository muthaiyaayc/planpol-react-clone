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
      const counterAnimations = [];

      statRefs.current.forEach((element, index) => {
        if (!element) return;

        const stat = stats[index];
        const counter = { value: 0 };

        const animation = gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${Math.floor(counter.value).toLocaleString("en-IN")}${stat.suffix}`;
          },
        });

        counterAnimations.push(animation);
      });

      gsap.from(".home-stats-heading", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".home-stats-description", {
        x: 50,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".home-stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".home-stats-crowd", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.25,
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
    <section ref={sectionRef} className="relative min-h-[650px] w-full overflow-hidden bg-[#0878f9] text-white max-[1000px]:min-h-[700px] max-[700px]:min-h-[850px] max-[500px]:min-h-[780px]">

      <div className="relative z-[5] grid min-h-[650px] w-full grid-cols-[55%_45%] gap-[30px] px-[5%] pt-[70px] max-[1000px]:grid-cols-[52%_48%] max-[1000px]:px-[4%] max-[700px]:flex max-[700px]:min-h-0 max-[700px]:flex-col max-[700px]:gap-0 max-[700px]:px-[25px] max-[700px]:pt-[50px]">

        {/* STATS */}

        <div className="grid w-full max-w-[570px] grid-cols-3 gap-x-[55px] gap-y-[65px] text-left max-[1000px]:gap-x-[30px] max-[1000px]:gap-y-[50px] max-[700px]:mx-auto max-[700px]:max-w-[520px] max-[700px]:gap-x-[25px] max-[700px]:gap-y-[38px]">

          {stats.map((stat, index) => (
            <div key={stat.label} className="home-stat-item flex min-h-[82px] flex-col">

              <div
                ref={(element) => {
                  statRefs.current[index] = element;
                }}
                className="text-[clamp(42px,4.4vw,64px)] font-normal leading-[0.95] tracking-[-0.055em] text-white max-[1000px]:text-[48px] max-[700px]:text-[40px] max-[500px]:text-[34px]"
              >
                0
              </div>

              <span className="mt-[12px] text-[14px] leading-none text-white/95 max-[1000px]:text-[12px] max-[700px]:mt-[9px] max-[700px]:text-[11px] max-[500px]:text-[10px]">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

        {/* HEADING + DESCRIPTION */}

        <div className="w-full max-w-[560px] px-[25px] text-center max-[1000px]:px-[5px] max-[700px]:mx-auto max-[700px]:mt-[55px] max-[700px]:max-w-[560px]">

          <h2 className="home-stats-heading text-[clamp(28px,2.8vw,40px)] font-normal leading-[1.05] tracking-[-0.05em] text-white max-[1000px]:text-[30px] max-[700px]:text-[28px] max-[500px]:text-[24px]">
            PlanPol's Data-Driven Political Consulting is a service made Affordable through AI
          </h2>

          <p className="home-stats-description mx-auto mt-[20px] max-w-[500px] text-[13px] leading-[1.55] text-white/95 max-[1000px]:max-w-[420px] max-[1000px]:text-[12px] max-[700px]:max-w-[450px] max-[700px]:text-[13px] max-[500px]:max-w-[360px] max-[500px]:text-[11px]">
            We blend high-end tech and hyperlocal strategy to demystify and deliver Poli-Tech as a cost-effective offering, to transform your every step into a winning move.
          </p>

        </div>

      </div>

      {/* CROWD */}

      <div className="home-stats-crowd absolute bottom-[-5px] right-[-10px] z-[2] w-[48%] max-w-[700px] max-[1200px]:w-[50%] max-[1000px]:right-[-15px] max-[1000px]:w-[54%] max-[700px]:bottom-0 max-[700px]:right-[-22%] max-[700px]:w-[105%] max-[500px]:right-[-32%] max-[500px]:w-[120%]">

        <img src="/crowd.png" alt="Crowd" className="block h-auto w-full object-contain" />

      </div>

    </section>
  );
}

export default StatsSection;