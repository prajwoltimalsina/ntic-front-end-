import nticLogo from "../img/NTIC-logo.png";

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

interface NavLinkProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ onClick, active, children }: NavLinkProps) => (
  <button
    onClick={onClick}
    className={`relative font-medium transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg ${
      active
        ? "text-indigo-600 bg-indigo-50"
        : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
    }`}
  >
    {children}
    {active && (
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"></span>
    )}
  </button>
);

export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  const isActive = (page: string) => currentPage === page;

  return (
    <header className="border-b border-sky-200 bg-sky-100 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 👇 Updated NTIC button with image */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-4 text-6xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300 cursor-pointer"
          >
            <img
              src={nticLogo}
              alt="NTIC Logo"
              className="h-[96px] w-26 object-contain"
            />
            NTIC
          </button>

          <div className="flex gap-2">
            <NavLink
              onClick={() => navigateTo("home")}
              active={isActive("home")}
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => navigateTo("programs")}
              active={isActive("programs")}
            >
              Programs
            </NavLink>

            <NavLink
              onClick={() => navigateTo("jobs")}
              active={isActive("jobs")}
            >
              Careers
            </NavLink>

            <NavLink
              onClick={() => navigateTo("about")}
              active={isActive("about")}
            >
              About
            </NavLink>

            <NavLink
              onClick={() => navigateTo("contact")}
              active={isActive("contact")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
