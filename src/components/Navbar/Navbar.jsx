import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Our story", path: "/our-story" },
  { name: "Brains", path: "/brains" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact us", path: "/contact" },
];

const headerWords = [
  "Political!",
  "அரசியல்!",
  "राजनीति!",
  "রাজনীতি!",
  "రాజకీయాలు!",
];

function Navbar() {
  const [headerWord, setHeaderWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const navbarRef = useRef(null);
  const brandRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    let timer;

    const currentWord = headerWords[wordIndex];

    const typeHeader = () => {
      if (!deleting) {
        charIndex += 1;

        setHeaderWord(currentWord.substring(0, charIndex));

        if (charIndex >= currentWord.length) {
          deleting = true;

          timer = setTimeout(typeHeader, 1800);

          return;
        }

        timer = setTimeout(typeHeader, 70);
      } else {
        charIndex -= 1;

        setHeaderWord(currentWord.substring(0, charIndex));

        if (charIndex <= 0) {
          deleting = false;

          setWordIndex((previousIndex) => (previousIndex + 1) % headerWords.length);

          timer = setTimeout(typeHeader, 300);

          return;
        }

        timer = setTimeout(typeHeader, 40);
      }
    };

    timer = setTimeout(typeHeader, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [wordIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(navbarRef.current, { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(brandRef.current, { x: -15, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.35")
        .fromTo(menuRef.current, { x: 20, opacity: 0, scale: 0.96 }, { x: 0, opacity: 1, scale: 1, duration: 0.55 }, "-=0.4");
    }, navbarRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <header ref={navbarRef} className="relative z-[1000] flex min-h-[70px] w-full flex-col items-stretch gap-3 bg-white px-[14px] py-3 min-[651px]:min-h-[70px] min-[651px]:flex-row min-[651px]:items-center min-[651px]:justify-between min-[651px]:px-[18px] min-[651px]:py-3 min-[901px]:h-[76px] min-[901px]:min-h-0 min-[901px]:gap-3 min-[901px]:px-[22px] min-[901px]:py-0 min-[1151px]:h-[82px] min-[1151px]:px-[38px] min-[1500px]:h-[90px] min-[1500px]:px-[65px]">
      <NavLink to="/" ref={brandRef} className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-[9px] whitespace-nowrap no-underline min-[651px]:w-auto min-[651px]:justify-start min-[901px]:gap-[9px] min-[1500px]:gap-3" aria-label="PlanPol Home">
        <img src="/planpol-brain.png" alt="PlanPol" className="block h-[23px] w-[23px] shrink-0 object-contain min-[401px]:h-[23px] min-[401px]:w-[23px] min-[651px]:h-[24px] min-[651px]:w-[24px] min-[901px]:h-[25px] min-[901px]:w-[25px] min-[1151px]:h-[28px] min-[1151px]:w-[28px] min-[1500px]:h-[31px] min-[1500px]:w-[31px]" />

        <div className="flex items-center whitespace-nowrap text-[16px] font-normal leading-none tracking-[-0.7px] text-[#555b66] min-[401px]:text-[14px] min-[651px]:text-[17px] min-[901px]:text-[19px] min-[1151px]:text-[22px] min-[1500px]:text-[27px]">
          <span>Everything is</span>

          <strong className="ml-[5px] text-[16px] font-semibold leading-none text-[#1769ff] min-[401px]:text-[14px] min-[651px]:text-[17px] min-[901px]:text-[19px] min-[1151px]:text-[22px] min-[1500px]:text-[27px]">
            {headerWord}
          </strong>

          <span className="ml-[2px] text-[16px] font-normal leading-none text-[#1769ff] animate-[blinkCursor_0.8s_infinite] min-[401px]:text-[14px] min-[651px]:text-[17px] min-[901px]:text-[19px] min-[1151px]:text-[22px] min-[1500px]:text-[27px]">
            |
          </span>
        </div>
      </NavLink>

      <nav ref={menuRef} className="flex h-[45px] w-full max-w-full shrink-0 items-center justify-start gap-[2px] overflow-x-auto rounded-[32px] bg-[#1769ff] px-1 py-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[651px]:h-[45px] min-[651px]:max-w-[100%] min-[901px]:h-[47px] min-[901px]:max-w-[68%] min-[901px]:rounded-[27px] min-[901px]:px-[5px] min-[901px]:py-[3px] min-[1151px]:h-[52px] min-[1151px]:px-[6px] min-[1151px]:py-1 min-[1500px]:h-[76px] min-[1500px]:max-w-none min-[1500px]:rounded-[40px] min-[1500px]:px-2 min-[1500px]:py-[6px]" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex h-[39px] shrink-0 items-center justify-center whitespace-nowrap rounded-[27px] px-[13px] text-[12px] font-normal leading-none text-white no-underline transition-[background,color,transform] duration-200 ease-in-out hover:bg-white/15 ${isActive ? "bg-white text-[#1769ff]" : ""} min-[651px]:h-[39px] min-[651px]:px-[13px] min-[651px]:text-[12px] min-[901px]:h-[41px] min-[901px]:rounded-[23px] min-[901px]:px-[13px] min-[901px]:text-[13px] min-[1151px]:h-[44px] min-[1151px]:rounded-[27px] min-[1151px]:px-[17px] min-[1151px]:text-[16px] min-[1500px]:h-[64px] min-[1500px]:rounded-[34px] min-[1500px]:px-[25px] min-[1500px]:text-[21px]`}>
            {item.name}
          </NavLink>
        ))}

        <NavLink to="/contact" className={({ isActive }) => `flex h-[39px] shrink-0 items-center justify-center whitespace-nowrap rounded-[27px] px-[13px] text-[12px] font-normal leading-none text-white no-underline transition-[background,color,transform] duration-200 ease-in-out hover:-translate-y-px hover:bg-white hover:text-[#1769ff] ${isActive ? "bg-white text-[#1769ff]" : ""} min-[901px]:h-[41px] min-[901px]:rounded-[23px] min-[901px]:px-4 min-[901px]:text-[13px] min-[1151px]:h-[44px] min-[1151px]:rounded-[27px] min-[1151px]:px-5 min-[1151px]:text-[16px] min-[1500px]:h-[64px] min-[1500px]:rounded-[34px] min-[1500px]:px-7 min-[1500px]:text-[21px]`}>
          Start Trial
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;