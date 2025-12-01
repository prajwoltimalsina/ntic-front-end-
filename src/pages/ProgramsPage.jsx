import React from "react";

// Import all program images
import researchImg from "../img/programs/research.jpg";
import startupImg from "../img/programs/startup.jpg";
import healthImg from "../img/programs/health.jpg";
import schoolImg from "../img/programs/school.jpg";
import testingImg from "../img/programs/testing.jpg";
import educationImg from "../img/programs/education.jpg";
import databaseImg from "../img/programs/database.jpg";

const ProgramCard = ({ title, description, highlights, delay = 0, image }) => (
  <div
    className="group relative overflow-hidden border border-gray-200 rounded-xl bg-white hover:border-[#8c3437] hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* FIXED IMAGE SECTION */}
   {/* FIXED IMAGE SECTION — FULL WIDTH, NO CUTTING */}
<div className="w-full h-72 rounded-t-xl overflow-hidden">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>



    {/* TEXT SECTION */}
    <div className="p-8 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-[#8c3437] rounded group-hover:scale-y-110 transition-transform duration-300"></div>
        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8c3437] transition-colors">
          {title}
        </h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

      <div className="space-y-2">
        <h3 className="font-semibold text-[#8c3437] text-sm uppercase tracking-wide">
          Key Highlights
        </h3>

        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2 group/item">
            <span className="text-[#8c3437] mt-1 font-bold">•</span>
            <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors">
              {highlight}
            </span>
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
          <h1 className="text-5xl font-bold text-[#8c3437] mb-6">Our Programs</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            NTIC operates seven cross-cutting functional programs designed to
            drive innovation and sustainable development across Nepal's rural
            communities.
          </p>
        </div>

        <div className="space-y-8">
          <ProgramCard
            title="Research and Business Development"
            description="Supporting 15+ ongoing projects with NRs. 60 million in funding. Focus areas include virus-free potato seed production, solar thermal collectors, and alternative fuel from plastic waste."
            highlights={[
              "Internal and nationwide grant calls",
              "Technology transfer to grassroots level",
              "Sustainable development initiatives",
            ]}
            image={researchImg}
            delay={0}
          />

          <ProgramCard
            title="Startup and Incubation"
            description="Providing seed funding of 5 lakhs to 16 startup companies. Offering mentorship, guidance, and access to networks of investors and industry experts."
            highlights={[
              "Financial support and mentorship",
              "Network access to investors",
              "Business development guidance",
            ]}
            image={startupImg}
            delay={100}
          />

          <ProgramCard
            title="Smart Health Technology"
            description="Establishing Nepal's first smart health system for secure health data exchange. Developing EMR standards and setting up telemedicine sites."
            highlights={[
              "Data-driven decision making",
              "Privacy and security protocols",
              "Telemedicine infrastructure",
            ]}
            image={healthImg}
            delay={200}
          />

          <ProgramCard
            title="School-Based Enterprise"
            description="Building entrepreneurial culture among youth through enterprise management experiences and skills-acquiring programs."
            highlights={[
              "Youth empowerment programs",
              "Skills development training",
              "Enterprise creation support",
            ]}
            image={schoolImg}
            delay={300}
          />

          <ProgramCard
            title="Testing and Accreditation"
            description="Nationwide testing services with accredited laboratories in agriculture, health, and energy."
            highlights={[
              "ISO-accredited testing services",
              "Advanced analytical equipment",
              "Multi-sector testing capabilities",
            ]}
            image={testingImg}
            delay={400}
          />

          <ProgramCard
            title="Education and Training"
            description="Offering Management of Technology (MoT) courses and specialized training packages."
            highlights={[
              "Certified courses and training",
              "Industry-relevant curriculum",
              "Capacity building programs",
            ]}
            image={educationImg}
            delay={500}
          />

          <ProgramCard
            title="Technology Database and Networking"
            description="Creating comprehensive technology databases and fostering collaboration networks."
            highlights={[
              "Knowledge management systems",
              "Collaborative research networks",
              "Innovation ecosystem building",
            ]}
            image={databaseImg}
            delay={600}
          />
        </div>

        {/* CTA Section */}
        <section
          className="mt-16 bg-[#8c3437] text-white rounded-xl p-12 text-center animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 text-[#d48f91]">
            Join us in driving innovation and sustainable development in Nepal
          </p>

          <button
            onClick={() => navigateTo("contact")}
            className="inline-block bg-white text-[#8c3437] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};
