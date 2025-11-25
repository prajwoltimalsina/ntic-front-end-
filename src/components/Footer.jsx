import React from "react";

const FooterLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block text-gray-400 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 text-sm text-left cursor-pointer"
  >
    {children}
  </button>
);

export const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <h3 className="font-bold text-2xl mb-4 text-indigo-400">NTIC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nepal Technology Innovation Center - Building Nepal's future
              through research, innovation, and entrepreneurship.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-bold mb-4 text-indigo-400">Quick Links</h4>
            <div className="space-y-2">
              <FooterLink onClick={() => navigateTo("home")}>Home</FooterLink>
              <FooterLink onClick={() => navigateTo("about")}>About Us</FooterLink>
              <FooterLink onClick={() => navigateTo("programs")}>Programs</FooterLink>
              <FooterLink onClick={() => navigateTo("jobs")}>Careers</FooterLink>
              <FooterLink onClick={() => navigateTo("contact")}>Contact</FooterLink>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-bold mb-4 text-indigo-400">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p className="hover:text-indigo-400 transition-colors">
                Dhulikhel, Kavre, Nepal
              </p>
              <p className="hover:text-indigo-400 transition-colors">
                +977-
              </p>
              <p className="hover:text-indigo-400 transition-colors">
                ntic@ku.edu.np
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Nepal Technology Innovation Center. All rights reserved.</p>
          <p className="mt-2">
            A partnership between Government of Nepal, KOICA, and Kathmandu
            University
          </p>
        </div>
      </div>
    </footer>
  );
};
