import React, { useState } from 'react';

// ==================== HOME PAGE ====================
const HomePage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Nepal Technology Innovation Center
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Building Nepal's future through research, innovation, and entrepreneurship.
          Empowering rural communities with cutting-edge technology and sustainable solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigateTo('programs')}
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Explore Programs
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$10M</div>
              <div className="text-gray-600">Total Project Investment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">16+</div>
              <div className="text-gray-600">Startup Companies Funded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Focus Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FocusCard 
            title="Agriculture & Rural Development"
            description="Advancing farming technologies and supporting rural communities with innovative solutions for sustainable development."
          />
          <FocusCard 
            title="Renewable Energy"
            description="Developing clean energy solutions including solar thermal collectors and sustainable power systems for rural areas."
          />
          <FocusCard 
            title="Health Technology"
            description="Creating smart health systems and diagnostic tools to improve healthcare access in rural Nepal."
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed opacity-90">
            To strengthen Nepal's rural development by promoting technology innovation, 
            improving quality of life, supporting economic development of rural communities, 
            and building innovation capacity through world-class research facilities and entrepreneurship programs.
          </p>
        </div>
      </section>
    </div>
  );
};

const FocusCard = ({ title, description }) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// ==================== ABOUT PAGE ====================
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About NTIC</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Nepal Technology Innovation Center (NTIC) is an autonomous body established at 
              Kathmandu University on January 18, 2019. Born from a partnership between the Republic 
              of Korea and the Government of Nepal through the Integrated Rural Development Project (IRDP), 
              NTIC represents a strategic investment in Nepal's technological future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a total investment of $10 million USD and spanning an eight-year period (2016-2023), 
              NTIC has become Nepal's premier Technology Innovation Platform, dedicated to improving 
              quality of life and supporting economic development in rural communities.
            </p>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become Nepal's leading Technology Innovation Platform by bridging the gap between 
              research and applicable technology, enabling Nepal to address critical research needs 
              and compete in the global innovation landscape.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Objectives</h2>
            <div className="space-y-4">
              <ObjectiveItem 
                number="01"
                text="Strengthen research and development capacity of Kathmandu University for integrated rural development"
              />
              <ObjectiveItem 
                number="02"
                text="Promote technology innovation to improve quality of life and income status in rural Nepal"
              />
              <ObjectiveItem 
                number="03"
                text="Build entrepreneurial culture by empowering youth through skills development programs"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Building Specifications:</strong> The NTIC building covers 3,609.41 sq. m 
                across five floors, completed in just 2.2 years (September 2020 - November 2022) 
                with a construction budget of $4.067 million USD.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Accredited research laboratories with advanced equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Multipurpose hall for events and conferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Startup support and incubation units</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Smart health technology center</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Specialized labs for agriculture, energy, and health research</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership & Collaboration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NTIC is implemented through strategic collaboration between:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PartnerCard name="KOICA" role="Korea International Cooperation Agency" />
              <PartnerCard name="Kathmandu University" role="Host Institution" />
              <PartnerCard name="JBNU" role="Jeonbuk National University" />
              <PartnerCard name="STEPI" role="Project Management Consulting" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const ObjectiveItem = ({ number, text }) => (
  <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors">
    <span className="text-3xl font-bold text-blue-600">{number}</span>
    <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
  </div>
);

const PartnerCard = ({ name, role }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

// ==================== PROGRAMS PAGE ====================
const ProgramsPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Programs</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          NTIC operates seven cross-cutting functional programs designed to drive innovation 
          and sustainable development across Nepal's rural communities.
        </p>

        <div className="space-y-8">
          <ProgramCard 
            title="Research and Business Development"
            description="Supporting 15+ ongoing projects with NRs. 60 million in funding. Focus areas include virus-free potato seed production, solar thermal collectors, and alternative fuel from plastic waste. Projects range from agricultural innovations to renewable energy solutions."
            highlights={[
              "Internal and nationwide grant calls",
              "Technology transfer to grassroots level",
              "Sustainable development initiatives"
            ]}
          />

          <ProgramCard 
            title="Startup and Incubation"
            description="Providing seed funding of 5 lakhs to 16 startup companies. Offering mentorship, guidance, and access to networks of investors and industry experts. Success stories include Zambhala Agriculture Firm and Bi-Pad reusable sanitary pads."
            highlights={[
              "Financial support and mentorship",
              "Network access to investors",
              "Business development guidance"
            ]}
          />

          <ProgramCard 
            title="Smart Health Technology"
            description="Establishing Nepal's first smart health system for secure health data exchange. Developing standards for Electronic Medical Records (EMR), creating a nationwide network for collaborative research, and setting up telemedicine sites."
            highlights={[
              "Data-driven decision making",
              "Privacy and security protocols",
              "Telemedicine infrastructure"
            ]}
          />

          <ProgramCard 
            title="School-Based Enterprise"
            description="Building entrepreneurial culture among youth through enterprise management experiences. Empowering young people with skills-acquiring programs to realize their full potential and create innovative businesses."
            highlights={[
              "Youth empowerment programs",
              "Skills development training",
              "Enterprise creation support"
            ]}
          />

          <ProgramCard 
            title="Testing and Accreditation"
            description="Providing nationwide testing services with accredited laboratories in agriculture, health, and energy. Equipped with 25 pieces of advanced equipment including DNA sequencers, flow cytometers, and specialized analyzers."
            highlights={[
              "ISO-accredited testing services",
              "Advanced analytical equipment",
              "Multi-sector testing capabilities"
            ]}
          />

          <ProgramCard 
            title="Education and Training"
            description="Offering Management of Technology (MoT) courses and specialized training packages for students, researchers, entrepreneurs, and industry professionals. Focus on innovation promotion, entrepreneurship development, and technology management."
            highlights={[
              "Certified courses and training",
              "Industry-relevant curriculum",
              "Capacity building programs"
            ]}
          />

          <ProgramCard 
            title="Technology Database and Networking"
            description="Creating comprehensive technology databases and fostering collaboration networks. Connecting researchers, institutions, and businesses to promote knowledge sharing and innovation across Nepal."
            highlights={[
              "Knowledge management systems",
              "Collaborative research networks",
              "Innovation ecosystem building"
            ]}
          />
        </div>

        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join us in driving innovation and sustainable development in Nepal
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

const ProgramCard = ({ title, description, highlights }) => (
  <div className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Highlights</h3>
      {highlights.map((highlight, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <span className="text-blue-600 mt-1">✓</span>
          <span className="text-gray-600">{highlight}</span>
        </div>
      ))}
    </div>
  </div>
);

// ==================== CONTACT PAGE ====================
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          Get in touch with us to learn more about our programs, facilities, or collaboration opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <ContactItem 
                icon="📍"
                title="Address"
                content="28 Kilo, Dhulikhel, Kavre, Nepal (Inside Kathmandu University Premises)"
              />
              
              <ContactItem 
                icon="📧"
                title="Email"
                content={
                  <div className="space-y-1">
                    <a href="mailto:irdp@ku.edu.np" className="text-blue-600 hover:underline block">
                      irdp@ku.edu.np
                    </a>
                    <a href="mailto:ntic@ku.edu.np" className="text-blue-600 hover:underline block">
                      ntic@ku.edu.np
                    </a>
                  </div>
                }
              />
              
              <ContactItem 
                icon="📱"
                title="Phone"
                content={
                  <div className="space-y-1">
                    <div>Mobile: +977-9820114518</div>
                    <div>Landline: +977-11-415100/415200 Ext: 4651</div>
                  </div>
                }
              />
              
              <ContactItem 
                icon="🌐"
                title="Website"
                content={
                  <a 
                    href="http://ntic.ku.edu.np" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    http://ntic.ku.edu.np
                  </a>
                }
              />
            </div>

            {/* Office Hours */}
            <div className="mt-10 bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Sunday - Friday:</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="space-y-3 mb-8">
              <QuickLink text="Kathmandu University" url="https://ku.edu.np" />
              <QuickLink text="Research & Development" url="http://ntic.ku.edu.np" />
              <QuickLink text="KOICA Nepal" url="https://www.koica.go.kr" />
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-300">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-medium">Dhulikhel, Kavre</div>
                <div className="text-sm">Kathmandu University Campus</div>
              </div>
            </div>

            {/* Partnership Inquiry */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Partnership Opportunities</h3>
              <p className="text-gray-700 text-sm">
                Interested in collaborating with NTIC? We welcome partnerships with academic 
                institutions, research organizations, startups, and industry partners. Reach out 
                to discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex gap-4">
    <div className="text-3xl">{icon}</div>
    <div className="flex-1">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-700">
        {typeof content === 'string' ? content : content}
      </div>
    </div>
  </div>
);

const QuickLink = ({ text, url }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block px-4 py-3 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
  >
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{text}</span>
      <span className="text-blue-600">→</span>
    </div>
  </a>
);

// ==================== HEADER COMPONENT ====================
const Header = ({ currentPage, navigateTo }) => {
  const isActive = (page) => currentPage === page;
  
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigateTo('home')}
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
          >
            NTIC
          </button>
          
          <div className="flex gap-8">
            <NavLink onClick={() => navigateTo('home')} active={isActive('home')}>
              Home
            </NavLink>
            <NavLink onClick={() => navigateTo('about')} active={isActive('about')}>
              About
            </NavLink>
            <NavLink onClick={() => navigateTo('programs')} active={isActive('programs')}>
              Programs
            </NavLink>
            <NavLink onClick={() => navigateTo('contact')} active={isActive('contact')}>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ onClick, active, children }) => (
  <button 
    onClick={onClick}
    className={`font-medium transition-colors cursor-pointer ${
      active 
        ? 'text-blue-600' 
        : 'text-gray-600 hover:text-gray-900'
    }`}
  >
    {children}
  </button>
);

// ==================== FOOTER COMPONENT ====================
const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">NTIC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nepal Technology Innovation Center - Building Nepal's future through research, 
              innovation, and entrepreneurship.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <FooterLink onClick={() => navigateTo('home')}>Home</FooterLink>
              <FooterLink onClick={() => navigateTo('about')}>About Us</FooterLink>
              <FooterLink onClick={() => navigateTo('programs')}>Programs</FooterLink>
              <FooterLink onClick={() => navigateTo('contact')}>Contact</FooterLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Dhulikhel, Kavre, Nepal</p>
              <p>+977-9820114518</p>
              <p>ntic@ku.edu.np</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Nepal Technology Innovation Center. All rights reserved.</p>
          <p className="mt-2">A partnership between Government of Nepal, KOICA, and Kathmandu University</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="block text-gray-400 hover:text-white transition-colors text-sm text-left cursor-pointer"
  >
    {children}
  </button>
);

// ==================== MAIN APP ====================
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;