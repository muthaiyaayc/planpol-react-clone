import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Brains() {
  const pageRef = useRef(null);

  // ONLY ONE PERSON CAN BE OPEN AT A TIME
  const [openPerson, setOpenPerson] = useState(null);

  const stalinOpen = openPerson === "stalin";
  const gayathriOpen = openPerson === "gayathri";

  const handleStalinToggle = () => {
    setOpenPerson((current) => (current === "stalin" ? null : "stalin"));
  };

  const handleGayathriToggle = () => {
    setOpenPerson((current) => (current === "gayathri" ? null : "gayathri"));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".brains-page-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".brains-person-card", {
        y: 45,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.1,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="brains-page min-h-screen w-full overflow-hidden bg-white px-[20px] pb-[80px] pt-[30px] text-[#172033] sm:px-[30px] sm:pt-[35px] lg:px-[40px] lg:pt-[38px]">

      {/* PAGE TITLE */}
      <section className="brains-page-title mb-[48px] text-center sm:mb-[52px] lg:mb-[55px]">
        <h1 className="m-0 text-[38px] font-normal leading-none tracking-[-2px] text-[#1769ff] sm:text-[44px] lg:text-[48px]">
          Brains of Planpol
        </h1>
      </section>

      {/* PEOPLE CARDS */}
      <section className="mx-auto flex w-full max-w-[630px] flex-col gap-[20px]">

        {/* ========================================================= */}
        {/* STALIN CARD - TEXT LEFT / IMAGE RIGHT */}
        {/* ========================================================= */}

        <article className="brains-person-card relative overflow-hidden rounded-[14px] bg-[#0878f9] px-[27px] pb-[18px] pt-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-500 ease-in-out sm:px-[30px] sm:pb-[20px] sm:pt-[30px]">

          {/* STALIN CONTENT */}
          <div className="relative z-[2] max-w-[430px] pr-[115px] sm:pr-[130px]">

            <h2 className="m-0 mb-[16px] text-[22px] font-semibold leading-[1.1] tracking-[-0.7px] text-white sm:text-[24px]">
              Stalin Muthusamy
            </h2>

            <div className="text-[11px] leading-[1.6] text-white sm:text-[12px]">

              <p className="m-0">
                Stalin Muthusamy is an entrepreneur, political strategist, and governance advisor driven by a clear vision, 'inclusive politics' where every leader, from top party leadership to the booth-level cadre, has access to the strategy and tools to succeed.
              </p>

              {stalinOpen && (
                <>
                  <p className="mt-[18px]">
                    His journey from student and athlete to mentor, educator, and consultant reflects his belief that the most effective systems, whether in politics, business, or grassroots initiatives, are those that uplift communities and improve lives. He played a pivotal role in the election campaign of the current Chief Minister of Tamil Nadu, M.K. Stalin, as the strategist behind the landmark Ungal Thogudhiyil Stalin initiative, which connected the leader with over 1.5 million citizens. He later worked closely with Deputy Chief Minister Udhayanidhi Stalin, leading constituency projects including the Udhay Anna e-governance app, VR labs, and digital connectivity programs.
                  </p>

                  <p className="mt-[18px]">
                    Through PlanPol, his brainchild, he brings this vision to life — using AI-powered, people-first tools to help leaders, parties, and communities connect, engage, and govern better from the booth level to the national stage.
                  </p>
                </>
              )}

            </div>

            <button type="button" onClick={handleStalinToggle} aria-expanded={stalinOpen} className="mt-[20px] inline-flex cursor-pointer items-center gap-[7px] border-0 bg-transparent p-0 text-[11px] font-semibold text-white transition-opacity duration-300 hover:opacity-75 sm:text-[12px]">
              {stalinOpen ? "Read Less" : "Read More"}
              <span className={`text-[12px] transition-transform duration-300 ${stalinOpen ? "rotate-180" : "rotate-0"}`}>
                ↓
              </span>
            </button>

          </div>

          {/* STALIN IMAGE - RIGHT */}
          <img src="/stalin-muthusamy.png" alt="Stalin Muthusamy" className="absolute bottom-0 right-[14px] z-[1] block h-[175px] w-auto object-contain sm:right-[18px] sm:h-[200px]" />

        </article>


        {/* ========================================================= */}
        {/* GAYATHRI CARD - IMAGE LEFT / TEXT RIGHT */}
        {/* ========================================================= */}

        <article className="brains-person-card relative overflow-hidden rounded-[14px] bg-[#0878f9] px-[27px] pb-[18px] pt-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-500 ease-in-out sm:px-[30px] sm:pb-[20px] sm:pt-[30px]">

          {/* GAYATHRI CONTENT */}
          <div className="relative z-[2] ml-auto max-w-[430px] pl-[115px] sm:pl-[130px]">

            <h2 className="m-0 mb-[16px] text-[22px] font-semibold leading-[1.1] tracking-[-0.7px] text-white sm:text-[24px]">
              Gayathri Lakshminarayanan
            </h2>

            <div className="text-[11px] leading-[1.6] text-white sm:text-[12px]">

              <p className="m-0">
                Gayathri GL is a political strategist and policy researcher with expertise in data-driven campaigns, governance analysis, and technology-enabled political engagement. With over five years of experience, she has shaped state vision documents, designed citizen-focused welfare schemes, and developed communication strategies that combine on-ground insight with digital reach.
              </p>

              {gayathriOpen && (
                <>
                  <p className="mt-[18px]">
                    Working closely with senior party leadership, Gayathri has provided policy briefs, speech inputs, and rapid-response strategies, while facilitating high-level meetings that strengthen cohesion and party alignment. She has led governance reviews spanning education, healthcare, environment, crime, and women's welfare, translating multi-year datasets into actionable policy and strategic messaging.
                  </p>

                  <p className="mt-[18px]">
                    Her work bridges policy intent with public adoption, enhancing leadership branding, grassroots connection, and reform outcomes. Holding an MSc in Behavioural Economics from City, University of London, and an MA in Econometrics from the University of Madras, Gayathri believes in evidence-based decision-making and the strategic use of technology to strengthen democratic processes.
                  </p>
                </>
              )}

            </div>

            <button type="button" onClick={handleGayathriToggle} aria-expanded={gayathriOpen} className="mt-[20px] inline-flex cursor-pointer items-center gap-[7px] border-0 bg-transparent p-0 text-[11px] font-semibold text-white transition-opacity duration-300 hover:opacity-75 sm:text-[12px]">
              {gayathriOpen ? "Read Less" : "Read More"}
              <span className={`text-[12px] transition-transform duration-300 ${gayathriOpen ? "rotate-180" : "rotate-0"}`}>
                ↓
              </span>
            </button>

          </div>

          {/* GAYATHRI IMAGE - LEFT */}
          <img src="/gayathri-lakshminarayanan.png" alt="Gayathri Lakshminarayanan" className="absolute bottom-0 left-[14px] z-[1] block h-[185px] w-auto object-contain sm:left-[18px] sm:h-[210px]" />

        </article>

      </section>

    </main>
  );
}

export default Brains;