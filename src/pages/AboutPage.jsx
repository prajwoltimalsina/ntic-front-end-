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

const PartnerCard = ({ name, role }) => (
  <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-indigo-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in">
    <div className="w-12 h-12 rounded-lg bg-indigo-600 mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
      <span className="text-white font-bold">{name.charAt(0)}</span>
    </div>
    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
      {name}
    </h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
          About NTIC
        </h1>

        <div className="prose prose-lg max-w-none">
          <section
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
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
           className="mb-12 bg-indigo-50 p-8 rounded-xl border-l-4 border-indigo-600 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Collaborative Team
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
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              World-Class Facilities
            </h2>
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-indigo-700">
                  Building Specifications:
                </strong>{" "}
                The NTIC building covers 3,609.41 sq. m across five floors,
                completed in just 2.2 years (September 2020 - November 2022)
                with a construction budget of $4.067 million USD.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <span className="text-indigo-600 mr-3 font-bold">•</span>
                <span>
                  Accredited research laboratories with advanced equipment
                </span>
              </li>
              <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <span className="text-indigo-600 mr-3 font-bold">•</span>
                <span>Multipurpose hall for events and conferences</span>
              </li>
              <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <span className="text-indigo-600 mr-3 font-bold">•</span>
                <span>Startup support and incubation units</span>
              </li>
              <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <span className="text-indigo-600 mr-3 font-bold">•</span>
                <span>Smart health technology center</span>
              </li>
              <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <span className="text-indigo-600 mr-3 font-bold">•</span>
                <span>
                  Specialized labs for agriculture, energy, and health research
                </span>
              </li>
            </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PartnerCard
                name="KOICA"
                role="Korea International Cooperation Agency"
              />
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
