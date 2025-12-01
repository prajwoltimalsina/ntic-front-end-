import React from "react";

const ObjectiveItem = ({ number, text }) => (
  <div className="group flex items-start gap-4 p-6 border border-gray-200 rounded-xl hover:border-indigo-500 transition-all duration-300 bg-white hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up">
    <span className="text-4xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
      {number}
    </span>
    <p className="text-gray-700 leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">
      {text}
    </p>
  </div>
);

// UPDATED PartnerCard
const PartnerCard = ({ name, role, bgImg }) => (
  <div
    className="relative rounded-xl overflow-hidden h-48 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
    style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    <div className="relative z-10 text-center px-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">{role}</p>
    </div>
  </div>
);

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
          About NTIC
        </h1>

        <div className="prose prose-lg max-w-none">
          <section
  className="mb-12 flex flex-col md:flex-row items-center gap-6 animate-fade-in-up"
  style={{ animationDelay: "100ms" }}
>
  {/* Image */}
  <img
    src="public/ntic_building.png" // replace with your actual image path
    alt="NTIC Overview"
    className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
  />

  {/* Text */}
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      The Nepal Technology Innovation Center (NTIC) is an autonomous
      body established at Kathmandu University on January 18, 2019. Born
      from a partnership between the Republic of Korea and the
      Government of Nepal through the Integrated Rural Development
      Project (IRDP), NTIC represents a strategic investment in Nepal's
      technological future.
    </p>
    <p className="text-gray-700 leading-relaxed">
      With a total investment of $10 million USD and spanning an
      eight-year period (2016-2023), NTIC has become Nepal's premier
      Technology Innovation Platform, dedicated to improving quality of
      life and supporting economic development in rural communities.
    </p>
  </div>
</section>


          <section
            className="mb-12 bg-indigo-50 p-8 rounded-xl border-l-4 border-indigo-600 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become Nepal's leading Technology Innovation Platform by
              bridging the gap between research and applicable technology,
              enabling Nepal to address critical research needs and compete in
              the global innovation landscape.
            </p>
          </section>

         
           

          <section
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Objectives
            </h2>
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

          <section
            className="animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partnership & Collaboration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NTIC is implemented through strategic collaboration between:
            </p>

            {/* UPDATED GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PartnerCard
                name="KOICA"
                role="Korea International Cooperation Agency"
                bgImg="/public/koica.jpg"
              />
              <PartnerCard
                name="Kathmandu University"
                role="Host Institution"
                bgImg="/public/KUlogo.jpg"
              />
              <PartnerCard
                name="JBNU"
                role="Jeonbuk National University"
                bgImg="/img/jbnu.jpg"
              />
              <PartnerCard
                name="STEPI"
                role="Project Management Consulting"
                bgImg="/img/stepi.jpg"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
