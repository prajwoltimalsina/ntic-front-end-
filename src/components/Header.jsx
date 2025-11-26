import { useState } from "react";
import nticLogo from "../img/NTIC-logo.png";

/* ---------- NavLink Component ---------- */
const NavLink = ({ onClick, active, children }) => (
  <button
    onClick={onClick}
    className={`relative w-full md:w-auto text-left md:text-center
      font-medium transition-all duration-300 
      cursor-pointer px-3 py-2 rounded-lg text-sm md:text-base
      ${
        active
          ? "text-indigo-600 bg-indigo-50"
          : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
      }`}
  >
    {children}
    {active && (
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full hidden md:block"></span>
    )}
  </button>
);

/* ---------- Header Component ---------- */
export const Header = ({ currentPage, navigateTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (page) => currentPage === page;

  const handleNavigate = (page) => {
    navigateTo(page);
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200 bg-sky-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
        
        {/* Top Row */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center gap-2 sm:gap-4 font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <img
              src={nticLogo}
              alt="NTIC Logo"
              className="h-10 sm:h-14 md:h-20 w-auto object-contain"
            />
            <span className="text-xl sm:text-3xl md:text-5xl">
              NTIC
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
              Home
            </NavLink>
            <NavLink onClick={() => handleNavigate("programs")} active={isActive("programs")}>
              Programs
            </NavLink>
            <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
              Careers
            </NavLink>
            <NavLink onClick={() => handleNavigate("about")} active={isActive("about")}>
              About Us
            </NavLink>
            <NavLink onClick={() => handleNavigate("contact")} active={isActive("contact")}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 bg-white rounded-xl p-4 shadow-lg">
            <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
              Home
            </NavLink>
            <NavLink onClick={() => handleNavigate("programs")} active={isActive("programs")}>
              Programs
            </NavLink>
            <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
              Careers
            </NavLink>
            <NavLink onClick={() => handleNavigate("about")} active={isActive("about")}>
              About Us
            </NavLink>
            <NavLink onClick={() => handleNavigate("contact")} active={isActive("contact")}>
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};
