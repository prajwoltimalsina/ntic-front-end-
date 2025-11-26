import React from "react";

const ProgramCard = ({ title, description, highlights, delay = 0 }) => (
  <div
    className="group relative overflow-hidden border border-gray-200 rounded-xl p-8 bg-white hover:border-indigo-500 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-indigo-600 rounded group-hover:scale-y-110 transition-transform duration-300"></div>
        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h2>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <div className="space-y-2">
        <h3 className="font-semibold text-indigo-600 text-sm uppercase tracking-wide">Key Highlights</h3>
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2 group/item">
            <span className="text-indigo-600 mt-1 font-bold">•</span>
            <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ProgramsPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl font-bold text-blue-700 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            NTIC operates seven cross-cutting functional programs designed to drive innovation 
            and sustainable development across Nepal's rural communities.
          </p>
        </div>

        <div className="space-y-8">
          <ProgramCard 
            title="Research and Business Development"
            description="Supporting 15+ ongoing projects with NRs. 60 million in funding. Focus areas include virus-free potato seed production, solar thermal collectors, and alternative fuel from plastic waste. Projects range from agricultural innovations to renewable energy solutions."
            highlights={[
              "Internal and nationwide grant calls",
              "Technology transfer to grassroots level",
              "Sustainable development initiatives"
            ]}
            delay={0}
          />

          <ProgramCard 
            title="Startup and Incubation"
            description="Providing seed funding of 5 lakhs to 16 startup companies. Offering mentorship, guidance, and access to networks of investors and industry experts. Success stories include Zambhala Agriculture Firm and Bi-Pad reusable sanitary pads."
            highlights={[
              "Financial support and mentorship",
              "Network access to investors",
              "Business development guidance"
            ]}
            delay={100}
          />

          <ProgramCard 
            title="Smart Health Technology"
            description="Establishing Nepal's first smart health system for secure health data exchange. Developing standards for Electronic Medical Records (EMR), creating a nationwide network for collaborative research, and setting up telemedicine sites."
            highlights={[
              "Data-driven decision making",
              "Privacy and security protocols",
              "Telemedicine infrastructure"
            ]}
            delay={200}
          />

          <ProgramCard 
            title="School-Based Enterprise"
            description="Building entrepreneurial culture among youth through enterprise management experiences. Empowering young people with skills-acquiring programs to realize their full potential and create innovative businesses."
            highlights={[
              "Youth empowerment programs",
              "Skills development training",
              "Enterprise creation support"
            ]}
            delay={300}
          />

          <ProgramCard 
            title="Testing and Accreditation"
            description="Providing nationwide testing services with accredited laboratories in agriculture, health, and energy. Equipped with 25 pieces of advanced equipment including DNA sequencers, flow cytometers, and specialized analyzers."
            highlights={[
              "ISO-accredited testing services",
              "Advanced analytical equipment",
              "Multi-sector testing capabilities"
            ]}
            delay={400}
          />

          <ProgramCard 
            title="Education and Training"
            description="Offering Management of Technology (MoT) courses and specialized training packages for students, researchers, entrepreneurs, and industry professionals. Focus on innovation promotion, entrepreneurship development, and technology management."
            highlights={[
              "Certified courses and training",
              "Industry-relevant curriculum",
              "Capacity building programs"
            ]}
            delay={500}
          />

          <ProgramCard 
            title="Technology Database and Networking"
            description="Creating comprehensive technology databases and fostering collaboration networks. Connecting researchers, institutions, and businesses to promote knowledge sharing and innovation across Nepal."
            highlights={[
              "Knowledge management systems",
              "Collaborative research networks",
              "Innovation ecosystem building"
            ]}
            delay={600}
          />
        </div>

        <section className="mt-16 bg-indigo-600 text-white rounded-xl p-12 text-center animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <h2 className="text-4xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 text-indigo-100">
            Join us in driving innovation and sustainable development in Nepal
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};
