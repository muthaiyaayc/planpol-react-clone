import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import "./Navbar.css";

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

  /* =====================================================
     TYPEWRITER
  ===================================================== */

  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    let timer;

    const currentWord = headerWords[wordIndex];

    const typeHeader = () => {
      if (!deleting) {
        charIndex += 1;

        setHeaderWord(
          currentWord.substring(0, charIndex)
        );

        if (charIndex >= currentWord.length) {
          deleting = true;

          timer = setTimeout(
            typeHeader,
            1800
          );

          return;
        }

        timer = setTimeout(
          typeHeader,
          70
        );
      } else {
        charIndex -= 1;

        setHeaderWord(
          currentWord.substring(0, charIndex)
        );

        if (charIndex <= 0) {
          deleting = false;

          setWordIndex(
            (previousIndex) =>
              (previousIndex + 1) %
              headerWords.length
          );

          timer = setTimeout(
            typeHeader,
            300
          );

          return;
        }

        timer = setTimeout(
          typeHeader,
          40
        );
      }
    };

    timer = setTimeout(
      typeHeader,
      300
    );

    return () => {
      clearTimeout(timer);
    };
  }, [wordIndex]);


  /* =====================================================
     NAVBAR ENTRANCE ANIMATION
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          navbarRef.current,
          {
            y: -18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          }
        )

        .fromTo(
          brandRef.current,
          {
            x: -15,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.35"
        )

        .fromTo(
          menuRef.current,
          {
            x: 20,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
          },
          "-=0.4"
        );
    }, navbarRef);

    return () => {
      ctx.revert();
    };
  }, []);


  return (
    <header
      ref={navbarRef}
      className="navbar"
    >

      {/* =================================================
          BRAND
      ================================================= */}

      <NavLink
        to="/"
        ref={brandRef}
        className="navbar-brand"
        aria-label="PlanPol Home"
      >

        <img
          src="/planpol-brain.png"
          alt="PlanPol"
          className="navbar-logo"
        />

        <div className="brand-text">

          <span>
            Everything is
          </span>

          <strong className="changing-word">
            {headerWord}
          </strong>

          <span className="typing-cursor">
            |
          </span>

        </div>

      </NavLink>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav
        ref={menuRef}
        className="nav-menu"
        aria-label="Main navigation"
      >

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          className="nav-link nav-trial"
        >
          Start Trial
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;