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
    <header ref={navbarRef} className="relative z-[1000] flex h-[82px] w-full items-center justify-between bg-white px-[25px] shadow-[0_2px_8px_rgba(0,0,0,0.10)] min-[901px]:h-[90px] min-[901px]:px-[35px] min-[1201px]:h-[98px] min-[1201px]:px-[48px]">

      {/* PLANPOL BRAND */}
      <NavLink to="/" ref={brandRef} className="flex shrink-0 items-center gap-[9px] whitespace-nowrap no-underline min-[1201px]:gap-[11px]" aria-label="PlanPol Home">

        <img src="/planpol-brain.png" alt="PlanPol" className="block h-[30px] w-[30px] shrink-0 object-contain min-[901px]:h-[32px] min-[901px]:w-[32px] min-[1201px]:h-[37px] min-[1201px]:w-[37px]" />

        <div className="flex items-center whitespace-nowrap text-[18px] font-normal leading-none tracking-[-0.5px] text-[#4d5563] min-[901px]:text-[20px] min-[1201px]:text-[23px]">

          <span>Everything is</span>

          <strong className="ml-[5px] font-semibold text-[#1769ff]">
            {headerWord}
          </strong>

          <span className="ml-[2px] text-[#1769ff] animate-[blinkCursor_0.8s_infinite]">
            |
          </span>

        </div>

      </NavLink>

      {/* NAVIGATION */}
      <nav ref={menuRef} className="flex h-[56px] shrink-0 items-center gap-[2px] rounded-full bg-[#1769ff] px-[5px] py-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden] min-[901px]:h-[59px] min-[901px]:px-[5px] min-[1201px]:h-[63px] min-[1201px]:w-[881px] min-[1201px]:justify-between min-[1201px]:rounded-full min-[1201px]:px-[5px] min-[1201px]:py-[4px]">

        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `relative flex h-[48px] shrink-0 items-center justify-center rounded-full px-[14px] text-[15px] font-normal leading-none no-underline transition-all duration-200 ease-in-out hover:bg-white/10 min-[901px]:h-[51px] min-[901px]:px-[16px] min-[901px]:text-[16px] min-[1201px]:h-[55px] min-[1201px]:px-[19px] min-[1201px]:text-[18px] ${isActive ? "bg-white" : ""}`}>

            {({ isActive }) => (
              <span className="relative z-10 whitespace-nowrap" style={{ color: isActive ? "#1769ff" : "#ffffff" }}>
                {item.name}
              </span>
            )}

          </NavLink>
        ))}

        {/* START TRIAL */}
        <NavLink to="/contact" className={({ isActive }) => `relative flex h-[48px] shrink-0 items-center justify-center rounded-full px-[16px] text-[15px] font-normal leading-none no-underline transition-all duration-200 ease-in-out hover:bg-white/10 min-[901px]:h-[51px] min-[901px]:px-[17px] min-[901px]:text-[16px] min-[1201px]:h-[55px] min-[1201px]:px-[21px] min-[1201px]:text-[18px] ${isActive ? "bg-white" : ""}`}>

          {({ isActive }) => (
            <span className="relative z-10 whitespace-nowrap" style={{ color: isActive ? "#1769ff" : "#ffffff" }}>
              Start Trial
            </span>
          )}

        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;