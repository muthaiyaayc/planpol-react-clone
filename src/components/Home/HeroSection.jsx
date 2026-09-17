import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function HeroSection() {
  const [typedWord, setTypedWord] = useState("You");

  const heroRef = useRef(null);
  const copyRef = useRef(null);
  const titleLinesRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const artRef = useRef(null);

  useEffect(() => {
    const words = ["You", "Democracy"];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const typeWord = () => {
      const currentWord = words[wordIndex];

      if (!deleting) {
        charIndex += 1;
        setTypedWord(currentWord.substring(0, charIndex));

        if (charIndex >= currentWord.length) {
          deleting = true;
          timer = setTimeout(typeWord, 1800);
          return;
        }

        timer = setTimeout(typeWord, 100);
      } else {
        charIndex -= 1;
        setTypedWord(currentWord.substring(0, charIndex));

        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(typeWord, 300);
          return;
        }

        timer = setTimeout(typeWord, 55);
      }
    };

    timer = setTimeout(typeWord, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .fromTo(copyRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(titleLinesRef.current.children, { y: 90, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12 }, "-=0.65")
        .fromTo(descriptionRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.55")
        .fromTo(buttonRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(artRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, "-=0.7");

      gsap.to(artRef.current?.querySelector("img"), {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-[680px] min-h-[680px] w-full overflow-hidden bg-[linear-gradient(105deg,#edf5ff_0%,#e7f0ff_42%,#e8e9ff_70%,#f0e7ff_100%)] max-[1000px]:h-[650px] max-[1000px]:min-h-[650px] max-[700px]:h-[680px] max-[700px]:min-h-[680px] max-[400px]:h-[650px] max-[400px]:min-h-[650px]">

      {/* BACKGROUND CIRCLE */}

      <div className="pointer-events-none absolute right-[-380px] top-[-350px] z-0 h-[720px] w-[720px] rounded-full border border-[rgba(21,87,255,0.08)]"></div>

      <div className="relative z-[2] h-full w-full">

        {/* SPEAKER IMAGE */}

        <div ref={artRef} className="pointer-events-none absolute bottom-0 left-0 z-[1] flex w-[39vw] max-w-[650px] items-end max-[1200px]:w-[42vw] max-[1000px]:left-[-20px] max-[1000px]:w-[45vw] max-[700px]:left-[-30px] max-[700px]:w-[80%] max-[500px]:left-[-45px] max-[500px]:w-[100%]">

          <img src="/speaker.png" alt="Speaker" className="block w-full object-contain object-bottom-left will-change-transform" />

        </div>

        {/* HERO CONTENT */}

        <div ref={copyRef} className="absolute right-[12%] top-1/2 z-[5] w-[560px] -translate-y-[43%] text-left max-[1400px]:right-[9%] max-[1200px]:right-[7%] max-[1200px]:w-[520px] max-[1000px]:right-[5%] max-[1000px]:w-[480px] max-[700px]:left-[20px] max-[700px]:right-auto max-[700px]:top-[75px] max-[700px]:w-[calc(100%-40px)] max-[700px]:translate-y-0 max-[500px]:top-[65px]">

          <div ref={titleLinesRef} className="font-[Arial,Helvetica,sans-serif] text-[clamp(58px,5.4vw,82px)] font-medium leading-[0.88] tracking-[-0.055em] max-[1200px]:text-[68px] max-[1000px]:text-[62px] max-[700px]:text-[clamp(48px,13vw,72px)] max-[500px]:text-[46px]">

            <span className="block text-[0.62em] font-normal leading-none tracking-[-0.035em] text-[#111]">
              World's first
            </span>

            <span className="block font-bold tracking-[-0.065em] text-[#1769ff]">
              AI Powered
            </span>

            <span className="block font-bold tracking-[-0.065em] text-[#1769ff]">
              PoliTech
            </span>

          </div>

          {/* DESCRIPTION */}

          <p ref={descriptionRef} className="ml-[4px] mt-[30px] text-[17px] font-normal leading-[1.4] text-[#222] max-[1000px]:text-[16px] max-[700px]:mt-[24px] max-[700px]:text-[15px] max-[500px]:mt-[20px] max-[500px]:text-[14px]">
            We make data work for{" "}
            <span className="font-medium text-[#1557ff]">
              {typedWord}
            </span>
            <span className="typing-cursor ml-[2px] inline-block font-light text-[#1557ff]">
              |
            </span>
          </p>

          {/* BUTTON */}

          {/* <div ref={buttonRef} className="mt-[30px]">
            <a href="/our-story" className="inline-flex items-center gap-[15px] text-[13px] font-semibold text-[#111] no-underline transition duration-300 hover:translate-x-[4px] hover:translate-y-[-4px]">
              Discover more
              <span className="text-[18px] text-[#1557ff]">
                ↗
              </span>
            </a>
          </div> */}

        </div>

      </div>

      {/* BLUE BOTTOM LINE */}

      <div className="absolute bottom-0 left-0 right-0 z-[10] h-[8px] bg-[#1557ff] max-[700px]:h-[7px]"></div>

    </section>
  );
}

export default HeroSection;