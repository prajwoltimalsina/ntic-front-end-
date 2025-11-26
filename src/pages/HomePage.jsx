const FocusCard = ({ title, description, delay = 0, color = "indigo", image }) => {
  const colorClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-700 border-indigo-600",
    green: "bg-green-600 hover:bg-green-700 border-green-600",
    blue: "bg-blue-600 hover:bg-blue-700 border-blue-600",
  };

  return (
    <div
      className="group relative overflow-hidden border border-gray-200 rounded-xl bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}
      <div className="p-6">
        <div
          className={`w-12 h-1 ${
            colorClasses[color]?.split(" ")[0] || "bg-indigo-600"
          } mb-4 rounded`}
        ></div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const whyNticItems = [
  {
    title: "🧠 1. Research-driven Innovation",
    description:
      "NTIC supports technology research across computing, electronics, renewable energy, and AI with real-world problem statements and cross-disciplinary mentorship.",
    bullets: [
      "Access to real research datasets and facilities",
      "Guidance from professors and industry specialists",
      "Opportunities to publish and showcase findings",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "🧪 2. Advanced Laboratories & Equipment",
    description:
      "High-end labs give students hands-on experience with modern tools and workflows.",
    bullets: [
      "AI & Machine Learning Lab",
      "IoT & Embedded Systems Lab",
      "Renewable Energy & Power Systems Lab",
      "Robotics & Automation Lab",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
  },
  {
    title: "🤝 3. Industry Collaboration & Internships",
    description:
      "Partnerships with Nepali startups, government units, and tech firms unlock internships and co-created projects with early hiring pathways.",
    bullets: [
      "Solve real industry challenges",
      "Access to mentors from partner companies",
      "Intern-to-hire pipelines for top performers",
    ],
    image:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&h=400&fit=crop",
  },
  {
    title: "🚀 4. Startup Incubation & Prototype Support",
    description:
      "From ideation to MVP, NTIC provides seed funding guidance, co-working space, prototyping tools, and investor outreach.",
    bullets: [
      "Hardware and software prototyping support",
      "Dedicated mentors for product-market fit",
      "Showcase days with investors and partners",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  },
  {
    title: "🌍 5. National Impact & Community Projects",
    description:
      "Flagship initiatives focus on pragmatic solutions for Nepal in agriculture, disaster response, and health access.",
    bullets: [
      "Smart agriculture pilots with rural farmers",
      "Disaster management solutions for local governments",
      "Telemedicine deployments in remote regions",
    ],
    image:
      "national-impact.png",
  },
  {
    title: "🧑‍🏫 6. Mentorship from Experts & Researchers",
    description:
      "Professors, engineers, PhDs, and domain specialists guide students from concept to deployment with structured mentorship.",
    bullets: [
      "Career and research roadmapping",
      "Weekly office hours and demo sessions",
      "Peer-to-peer learning communities",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  },
];

export const HomePage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-gray-900 text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/public/NTIC-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nepal Technology Innovation Center
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                “The research of today is the technology of tomorrow”
                NTIC create a transforming innovation resource Center
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigateTo("programs")}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  Explore Programs
                </button>
                <button
                  onClick={() => navigateTo("contact")}
                  className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NTIC Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center">Why NTIC</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Purpose-built programs, labs, and mentors help our students transform ideas into
          high-impact solutions for Nepal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyNticItems.map((item, idx) => (
            <article
              key={item.title}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>

                {item.bullets && (
                  <ul className="space-y-2 text-gray-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Watch Our Story</h2>

          <div
            className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in-up"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8PJPgs3eqG4"
              title="NTIC Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Organogram of NTIC*/}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center animate-fade-in-up">
          Organogram of NTIC
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Understanding the structure and hierarchy of NTIC
        </p>
        
        
          
  {/* Image */}
  <div className="flex justify-center">
    <img
      src="public\Organogram_NTIC.png"      
      alt="Organogram of NTIC"
      className="w-full max-w-4xl rounded-lg shadow-lg"
    />
  </div>
</section>
        



      {/* Focus Areas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center animate-fade-in-up">
          Our Focus Areas
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We focus on key areas that drive innovation and sustainable development in Nepal
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FocusCard
            title="Agriculture & Rural Development"
            description="Advancing farming technologies and supporting rural communities with innovative solutions for sustainable development."
            delay={0}
            color="green"
            image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
          />
          <FocusCard
            title="Renewable Energy"
            description="Developing clean energy solutions including solar thermal collectors and sustainable power systems for rural areas."
            delay={150}
            color="blue"
            image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop"
          />
          <FocusCard
            title="Health Technology"
            description="Creating smart health systems and diagnostic tools to improve healthcare access in rural Nepal."
            delay={300}
            color="indigo"
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
          />
        </div>
      </section>

      

      {/* Image Gallery */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                alt="Research Lab"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Innovation Center"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
                alt="Workspace"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in building Nepal's technological future
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigateTo("programs")}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              View Programs
            </button>

            <button
              onClick={() => navigateTo("contact")}
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
