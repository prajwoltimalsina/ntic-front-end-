// import { useState } from "react";
// import nticLogo from "../img/NTIC-logo.png";

// /* ---------- NavLink Component ---------- */
// const NavLink = ({ onClick, active, children }) => (
//   <button
//     onClick={onClick}
//     className={`relative w-full md:w-auto text-left md:text-center
//       font-medium transition-all duration-300 
//       cursor-pointer px-3 py-2 rounded-lg text-sm md:text-base
//       ${
//         active
//           ? "text-indigo-600 bg-indigo-50"
//           : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
//       }`}
//   >
//     {children}
//     {active && (
//       <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full hidden md:block"></span>
//     )}
//   </button>
// );

// /* ---------- Header Component ---------- */
// export const Header = ({ currentPage, navigateTo }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const isActive = (page) => currentPage === page;

//   const handleNavigate = (page) => {
//     navigateTo(page);
//     setMenuOpen(false); // close mobile menu
//   };

//   // Program Dropdown Items
//   const programTitles = [
//     "Research and Business Development",
//     "Startup and Incubation",
//     "Smart Health Technology",
//     "School-Based Enterprise",
//     "Testing and Accreditation",
//     "Education and Training",
//     "Technology Database and Networking"
//   ];

//   //About Dropdown Items
// const aboutTitles = [
//   "Overview",
//   "Our vision",
//   "Our Collaborative Team",
//   "Key Objectives",
//   "Facilities",
//   "Partners and Collaboration"
// ];


// // Contact Dropdown Items
// const contactTitles = [
//   "Contact Information",
//   "Quick Links"
  
// ];





//   return (
//     <header className="sticky top-0 z-50 border-b border-sky-200 bg-sky-100 shadow-sm">
//       <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
        
//         {/* Top Row */}
//         <div className="flex items-center justify-between">
          
//           {/* Logo */}
//           <button
//             onClick={() => handleNavigate("home")}
//             className="flex items-center gap-2 sm:gap-4 font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
//           >
//             <img
//               src={nticLogo}
//               alt="NTIC Logo"
//               className="h-10 sm:h-14 md:h-20 w-auto object-contain"
//             />
//             <span className="text-xl sm:text-3xl md:text-5xl">
//               NTIC
//             </span>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-2 items-center">

//             <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
//               Home
//             </NavLink>

//             {/* ---------- Programs Dropdown ---------- */}
//             <div className="relative group">
//               <NavLink
//                 onClick={() => handleNavigate("programs")}
//                 active={isActive("programs")}
//               >
//                 Programs
//               </NavLink>

//               {/* Dropdown */}
//               {/* <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-80">
//                 {programTitles.map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleNavigate("programs")}
//                     className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div> */}

//               {/* Dropdown */}
// <div className="absolute hidden group-hover:flex flex-col bg-white backdrop-blur-sm 
//     border border-indigo-100 shadow-xl rounded-xl p-4 w-80 
//     animate-fade-in-up space-y-2">
//   {programTitles.map((item, index) => (
//     <button
//       key={index}
//       onClick={() => handleNavigate("programs")}
//       className="flex items-start gap-3 w-full text-left px-3 py-2 
//         text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 
//         rounded-lg transition-all group/item"
//     >
//       <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 opacity-80 
//           group-hover/item:scale-125 transition-transform"></span>
//       <span className="font-medium">{item}</span>
//     </button>
//   ))}
// </div>

//             </div>

//  <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
//               Careers
//             </NavLink>


//             {/* ---------- About Dropdown ---------- */}
// <div className="relative group">
//   <NavLink
//     onClick={() => handleNavigate("about")}
//     active={isActive("about")}
//   >
//     About Us
//   </NavLink>

//   {/* Dropdown */}
//   {/* <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-80">
//     {aboutTitles.map((item, index) => (
//       <button
//         key={index}
//         onClick={() => handleNavigate("about")}
//         className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded"
//       >
//         {item}
//       </button>
//     ))}
//   </div> */}

//   {/* Dropdown */}
// <div className="absolute hidden group-hover:flex flex-col bg-white backdrop-blur-sm 
//     border border-indigo-100 shadow-xl rounded-xl p-4 w-80 
//     animate-fade-in-up space-y-2">
//   {aboutTitles.map((item, index) => (
//     <button
//       key={index}
//       onClick={() => handleNavigate("about")}
//       className="flex items-start gap-3 w-full text-left px-3 py-2 
//         text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 
//         rounded-lg transition-all group/item"
//     >
//       <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 opacity-80 
//           group-hover/item:scale-125 transition-transform"></span>
//       <span className="font-medium">{item}</span>
//     </button>
//   ))}
// </div>

// </div>


           

//             {/* <NavLink onClick={() => handleNavigate("about")} active={isActive("about")}>
//               About Us
//             </NavLink> */}

//             {/* <NavLink onClick={() => handleNavigate("contact")} active={isActive("contact")}>
//               Contact
//             </NavLink> */}

//             {/* ---------- Contact Dropdown ---------- */}
// <div className="relative group">
//   <NavLink
//     onClick={() => handleNavigate("contact")}
//     active={isActive("contact")}
//   >
//     Contact
//   </NavLink>

//   {/* Dropdown */}
//   <div className="absolute hidden group-hover:flex flex-col bg-white backdrop-blur-sm 
//       border border-indigo-100 shadow-xl rounded-xl p-4 w-64 
//       animate-fade-in-up space-y-2">
//     {contactTitles.map((item, index) => (
//       <button
//         key={index}
//         onClick={() => handleNavigate("contact")}
//         className="flex items-start gap-3 w-full text-left px-3 py-2 
//           text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 
//           rounded-lg transition-all group/item"
//       >
//         <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 opacity-80 
//             group-hover/item:scale-125 transition-transform"></span>
//         <span className="font-medium">{item}</span>
//       </button>
//     ))}
//   </div>
// </div>

//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-2xl px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
//             aria-label="Toggle Menu"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col gap-2 bg-white rounded-xl p-4 shadow-lg">
//             <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
//               Home
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("programs")} active={isActive("programs")}>
//               Programs
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
//               Careers
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("about")} active={isActive("about")}>
//               About Us
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("contact")} active={isActive("contact")}>
//   Contact (Address, Email, Phone, Website)
// </NavLink>

//           </div>
//         )}

//       </nav>
//     </header>
//   );
// };

// import { useState } from "react";
// import nticLogo from "../img/NTIC-logo.png";

// /* ---------- NavLink Component ---------- */
// const NavLink = ({ onClick, active, children }) => (
//   <button
//     onClick={onClick}
//     className={`relative w-full md:w-auto text-left md:text-center
//       font-medium transition-all duration-300 
//       cursor-pointer px-3 py-2 rounded-lg text-sm md:text-base
//       ${
//         active
//           ? "text-[#8c3437] bg-[#fce8e9]"
//           : "text-gray-600 hover:text-[#8c3437] hover:bg-[#fce8e9]"
//       }`}
//   >
//     {children}
//     {active && (
//       <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8c3437] rounded-full hidden md:block"></span>
//     )}
//   </button>
// );

// /* ---------- Header Component ---------- */
// export const Header = ({ currentPage, navigateTo }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const isActive = (page) => currentPage === page;

//   const handleNavigate = (page) => {
//     navigateTo(page);
//     setMenuOpen(false); // close mobile menu
//   };

//   // Program Dropdown Items
//   const programTitles = [
//     "Research and Business Development",
//     "Startup and Incubation",
//     "Smart Health Technology",
//     "School-Based Enterprise",
//     "Testing and Accreditation",
//     "Education and Training",
//     "Technology Database and Networking"
//   ];

//   //About Dropdown Items
// const aboutTitles = [
//   "Overview",
//   "Our vision",
//   "Our Collaborative Team",
//   "Key Objectives",
//   "Facilities",
//   "Partners and Collaboration"
// ];


// // Contact Dropdown Items
// const contactTitles = [
//   "Contact Information",
//   "Quick Links"
  
// ];





//   return (
//     <header className="sticky top-0 z-50 border-b border-sky-200 bg-sky-100 shadow-sm">
//       <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
        
//         {/* Top Row */}
//         <div className="flex items-center justify-between">
          
//           {/* Logo */}
//           <button
//             onClick={() => handleNavigate("home")}
//             className="flex items-center gap-2 sm:gap-4 font-bold text-[#8c3437] hover:text-[#6d282a] transition-colors"
//           >
//             <img
//               src={nticLogo}
//               alt="NTIC Logo"
//               className="h-10 sm:h-14 md:h-20 w-auto object-contain"
//             />
//             <span className="text-xl sm:text-3xl md:text-5xl">
//               NTIC
//             </span>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-2 items-center">

//             <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
//               Home
//             </NavLink>

//             {/* ---------- Programs Dropdown ---------- */}
//             <div className="relative group">
//               <NavLink
//                 onClick={() => handleNavigate("programs")}
//                 active={isActive("programs")}
//               >
//                 Programs
//               </NavLink>

//               {/* Dropdown */}
//               {/* <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-80">
//                 {programTitles.map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleNavigate("programs")}
//                     className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-[#fce8e9] hover:text-[#8c3437] rounded"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div> */}

//               {/* Dropdown */}
// <div className="absolute hidden group-hover:flex flex-col bg-white backdrop-blur-sm 
//     border border-[#d48f91] shadow-xl rounded-xl p-4 w-80 
//     animate-fade-in-up space-y-2">
//   {programTitles.map((item, index) => (
//     <button
//       key={index}
//       onClick={() => handleNavigate("programs")}
//       className="flex items-start gap-3 w-full text-left px-3 py-2 
//         text-sm text-gray-700 hover:bg-[#fce8e9] hover:text-[#8c3437] 
//         rounded-lg transition-all group/item"
//     >
//       <span className="w-2 h-2 bg-[#8c3437] rounded-full mt-2 opacity-80 
//           group-hover/item:scale-125 transition-transform"></span>
//       <span className="font-medium">{item}</span>
//     </button>
//   ))}
// </div>

//             </div>

//  <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
//               Careers
//             </NavLink>


//             {/* ---------- About Dropdown ---------- */}
// <div className="relative group">
//   <NavLink
//     onClick={() => handleNavigate("about")}
//     active={isActive("about")}
//   >
//     About Us
//   </NavLink>

//   {/* Dropdown */}
//   {/* <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-80">
//     {aboutTitles.map((item, index) => (
//       <button
//         key={index}
//         onClick={() => handleNavigate("about")}
//         className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-[#fce8e9] hover:text-[#8c3437] rounded"
//       >
//         {item}
//       </button>
//     ))}
//   </div> */}

//   {/* Dropdown */}
// <div className="absolute hidden group-hover:flex flex-col bg-white backdrop-blur-sm 
//     border border-[#d48f91] shadow-xl rounded-xl p-4 w-80 
//     animate-fade-in-up space-y-2">
//   {aboutTitles.map((item, index) => (
//     <button
//       key={index}
//       onClick={() => handleNavigate("about")}
//       className="flex items-start gap-3 w-full text-left px-3 py-2 
//         text-sm text-gray-700 hover:bg-[#fce8e9] hover:text-[#8c3437] 
//         rounded-lg transition-all group/item"
//     >
//       <span className="w-2 h-2 bg-[#8c3437] rounded-full mt-2 opacity-80 
//           group-hover/item:scale-125 transition-transform"></span>
//       <span className="font-medium">{item}</span>
//     </button>
//   ))}
// </div>

// </div>



// <div className="relative group">
//   <NavLink
//     onClick={() => handleNavigate("ntic-family")}
//     active={isActive("ntic-family")}
//   >
//     NTIC Family
//   </NavLink>
//   </div>

           

//             {/* <NavLink onClick={() => handleNavigate("about")} active={isActive("about")}>
//               About Us
//             </NavLink> */}

//             {/* <NavLink onClick={() => handleNavigate("contact")} active={isActive("contact")}>
//               Contact
//             </NavLink> */}

//             {/* ---------- Contact Dropdown ---------- */}
// <div className="relative group">
//   <NavLink
//     onClick={() => handleNavigate("contact")}
//     active={isActive("contact")}
//   >
//     Contact
//   </NavLink>

//   {/* Dropdown */}
//   <div className="absolute hidden group-hover:flex flex-col bg-white backdrop-blur-sm 
//       border border-[#d48f91] shadow-xl rounded-xl p-4 w-64 
//       animate-fade-in-up space-y-2">
//     {contactTitles.map((item, index) => (
//       <button
//         key={index}
//         onClick={() => handleNavigate("contact")}
//         className="flex items-start gap-3 w-full text-left px-3 py-2 
//           text-sm text-gray-700 hover:bg-[#fce8e9] hover:text-[#8c3437] 
//           rounded-lg transition-all group/item"
//       >
//         <span className="w-2 h-2 bg-[#8c3437] rounded-full mt-2 opacity-80 
//             group-hover/item:scale-125 transition-transform"></span>
//         <span className="font-medium">{item}</span>
//       </button>
//     ))}
//   </div>
// </div>

//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-2xl px-3 py-2 rounded-lg hover:bg-[#fce8e9] transition"
//             aria-label="Toggle Menu"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col gap-2 bg-white rounded-xl p-4 shadow-lg">
//             <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
//               Home
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("programs")} active={isActive("programs")}>
//               Programs
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
//               Careers
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("about")} active={isActive("about")}>
//               About Us
//             </NavLink>
//             <NavLink onClick={() => handleNavigate("contact")} active={isActive("contact")}>
//   Contact (Address, Email, Phone, Website)
// </NavLink>

//           </div>
//         )}

//       </nav>
//     </header>
//   );
// };


import { useState } from "react";
import nticLogo from "../img/NTIC-logo.png";

/* ---------- NavLink Component ---------- */
const NavLink = ({ onClick, active, children }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2.5 font-semibold text-sm tracking-wide
      transition-all duration-300 rounded-full
      ${
        active
          ? "text-white bg-gradient-to-r from-[#8c3437] to-[#a84145] shadow-lg shadow-[#8c3437]/30"
          : "text-gray-700 hover:text-[#8c3437] hover:bg-gray-50"
      }`}
  >
    {children}
  </button>
);

/* ---------- Header Component ---------- */
export const Header = ({ currentPage, navigateTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (page) => currentPage === page;

  const handleNavigate = (page) => {
    navigateTo(page);
    setMenuOpen(false);
  };

  const programTitles = [
    "Research and Business Development",
    "Startup and Incubation",
    "Smart Health Technology",
    "School-Based Enterprise",
    "Testing and Accreditation",
    "Education and Training",
    "Technology Database and Networking"
  ];

  const aboutTitles = [
    "Overview",
    "Our vision",
    "Our Collaborative Team",
    "Key Objectives",
    "Facilities",
    "Partners and Collaboration"
  ];

  const contactTitles = [
    "Contact Information",
    "Quick Links"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-[#8c3437]/10">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-3">
        
        {/* Top Row */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8c3437] to-[#a84145] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                src={nticLogo}
                alt="NTIC Logo"
                className="relative h-12 sm:h-16 md:h-20 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#8c3437] to-[#a84145] bg-clip-text text-transparent">
              NTIC
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center bg-gray-50/50 rounded-full px-2 py-2">

            <NavLink onClick={() => handleNavigate("home")} active={isActive("home")}>
              Home
            </NavLink>

            {/* ---------- Programs Dropdown ---------- */}
            <div className="relative group">
              <NavLink
                onClick={() => handleNavigate("programs")}
                active={isActive("programs")}
              >
                Programs ▾
              </NavLink>

              <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
                <div className="bg-white rounded-2xl shadow-2xl p-3 w-80 border border-gray-100 animate-fade-in-up">
                  {programTitles.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate("programs")}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 
                        text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#fce8e9] hover:to-[#fdf1f2] 
                        hover:text-[#8c3437] rounded-xl transition-all group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8c3437] rounded-full group-hover/item:w-2 group-hover/item:h-2 transition-all"></div>
                      <span className="font-medium">{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <NavLink onClick={() => handleNavigate("jobs")} active={isActive("jobs")}>
              Careers
            </NavLink>

            {/* ---------- About Dropdown ---------- */}
            <div className="relative group">
              <NavLink
                onClick={() => handleNavigate("about")}
                active={isActive("about")}
              >
                About Us ▾
              </NavLink>

              <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
                <div className="bg-white rounded-2xl shadow-2xl p-3 w-80 border border-gray-100 animate-fade-in-up">
                  {aboutTitles.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate("about")}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 
                        text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#fce8e9] hover:to-[#fdf1f2] 
                        hover:text-[#8c3437] rounded-xl transition-all group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8c3437] rounded-full group-hover/item:w-2 group-hover/item:h-2 transition-all"></div>
                      <span className="font-medium">{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <NavLink
                onClick={() => handleNavigate("ntic-family")}
                active={isActive("ntic-family")}
              >
                NTIC Family
              </NavLink>
            </div>

            {/* ---------- Contact Dropdown ---------- */}
            <div className="relative group">
              <NavLink
                onClick={() => handleNavigate("contact")}
                active={isActive("contact")}
              >
                Contact ▾
              </NavLink>

              <div className="absolute top-full right-0 mt-2 hidden group-hover:block">
                <div className="bg-white rounded-2xl shadow-2xl p-3 w-64 border border-gray-100 animate-fade-in-up">
                  {contactTitles.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate("contact")}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 
                        text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#fce8e9] hover:to-[#fdf1f2] 
                        hover:text-[#8c3437] rounded-xl transition-all group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8c3437] rounded-full group-hover/item:w-2 group-hover/item:h-2 transition-all"></div>
                      <span className="font-medium">{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl bg-gradient-to-r from-[#8c3437] to-[#a84145] 
              text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-xl border border-gray-100 space-y-2">
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
            <NavLink onClick={() => handleNavigate("ntic-family")} active={isActive("ntic-family")}>
              NTIC Family
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