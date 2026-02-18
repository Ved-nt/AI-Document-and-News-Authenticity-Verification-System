import { NavLink } from "react-router-dom";
import React,{ useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4
                 bg-gray-900/70 backdrop-blur-md border-b border-gray-700 shadow-lg"
    >
      <h1 className="text-xl font-bold text-sky-400 tracking-wide">
        AI Verify
      </h1>

      <div className="flex gap-6 text-sm font-medium">
        {[
          { to: "/", label: "Home" },
          { to: "/verify", label: "Verify Text" },
          { to: "/document", label: "Document" },
          { to: "/about", label: "About" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `relative transition ${
                isActive
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-400"
              } after:block after:h-[2px] after:bg-sky-400 
                 after:scale-x-0 hover:after:scale-x-100 
                 after:transition after:origin-left`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
