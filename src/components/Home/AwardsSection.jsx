import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AwardsSection() {
  const sectionRef = useRef(null);

  const awards = [
    {
      category: "CATEGORY: INNOVATION & IMPACT AWARDS",
      title: "Impact AI",
      description:
        "Recognising AI solutions and applications that fall outside predefined categories but demonstrate exceptional innovation, measurable impact, and the potential to advance the field of artificial intelligence.",
      link: "https://economictimes.indiatimes.com/how-ai-is-reshaping-political-communication/articleshow/127909032.cms",
    },
    {
      category: "CATEGORY: LEADERSHIP AWARDS",
      title: "AI for India Leader",
      description:
        "A leader who has made significant contributions to advancing AI adoption and innovation, specifically within the Indian ecosystem.",
      link: "https://economictimes.indiatimes.com/ai-innovator/profile/planpol/127911773",
    },
    {
      category: "CATEGORY: SPECIAL AWARDS",
      title: "Most Innovative AI Product",
      description:
        "For a product or service that showcases a truly novel application of AI technology.",
      link: "https://www.linkedin.com/company/planpol-consulting/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-awards-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".home-awards-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".home-awards-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.utils.toArray(".home-award").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          duration: 0.9,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f9fb] px-5 py-[42px] pb-[84px] text-[#111827] sm:px-8 sm:py-[55px] sm:pb-[100px] lg:px-12 lg:py-[40px] lg:pb-[84px]">

      <div className="mx-auto w-full max-w-[1120px]">

        <div className="home-awards-label text-center text-[12px] font-normal tracking-[0.28em] text-[#64748b]">
          AWARDS & NOMINATIONS
        </div>

        <h2 className="home-awards-title mx-auto mt-[18px] max-w-[1000px] text-center text-[38px] font-normal leading-[1.08] tracking-[-0.055em] text-[#111827] sm:text-[48px] md:text-[56px] lg:text-[60px]">
          Celebrating recognition for <span className="text-[#0878f9]">PlanPol</span>
        </h2>

        <p className="home-awards-description mx-auto mt-[18px] max-w-[760px] text-center text-[16px] font-normal leading-[1.65] text-[#41516a] sm:text-[17px]">
          Independent industry and media platforms have recognised and acknowledged our AI-first approach and our growing leadership within India's AI ecosystem.
        </p>

        <div className="mt-[58px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[38px]">

          {awards.map((award) => (
            <article key={award.title} className="home-award flex min-h-[378px] flex-col rounded-[17px] border border-[#dfe3e8] bg-white px-[38px] py-[39px] shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-[transform,box-shadow] duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(15,23,42,0.08)] sm:min-h-[360px] md:min-h-[378px]">

              <div className="text-[12px] font-medium leading-[1.45] tracking-[0.22em] text-[#0878f9]">
                {award.category}
              </div>

              <h3 className="mt-[24px] text-[28px] font-medium leading-[1.15] tracking-[-0.045em] text-[#172033] sm:text-[29px]">
                {award.title}
              </h3>

              <p className="mt-[20px] text-[16px] font-normal leading-[1.65] text-[#617087]">
                {award.description}
              </p>

              <a href={award.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex w-fit items-center gap-[7px] pt-[28px] text-[15px] font-semibold text-[#0878f9] transition-all duration-300 hover:gap-[11px]">
                Visit feature <span className="text-[18px] leading-none">↗</span>
              </a>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AwardsSection;