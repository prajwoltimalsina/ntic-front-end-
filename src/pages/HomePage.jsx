// const FocusCard = ({ title, description, delay = 0, color = "indigo", image }) => {
//   const colorClasses = {
//     indigo: "bg-indigo-600 hover:bg-indigo-700 border-indigo-600",
//     green: "bg-green-600 hover:bg-green-700 border-green-600",
//     blue: "bg-blue-600 hover:bg-blue-700 border-blue-600",
//   };

//   return (
//     <div
//       className="group relative overflow-hidden border border-gray-200 rounded-xl bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {image && (
//         <div className="h-48 overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             onError={(e) => {
//               e.target.style.display = "none";
//             }}
//           />
//         </div>
//       )}
//       <div className="p-6">
//         <div
//           className={`w-12 h-1 ${
//             colorClasses[color]?.split(" ")[0] || "bg-indigo-600"
//           } mb-4 rounded`}
//         ></div>
//         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
//           {title}
//         </h3>
//         <p className="text-gray-600 leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };

// const whyNticItems = [
//   {
//     title: "🧠 1. Research-driven Innovation",
//     description:
//       "NTIC supports technology research across computing, electronics, renewable energy, and AI with real-world problem statements and cross-disciplinary mentorship.",
//     bullets: [
//       "Access to real research datasets and facilities",
//       "Guidance from professors and industry specialists",
//       "Opportunities to publish and showcase findings",
//     ],
//     image:
//       "src/img/carousel5.jpg",
//   },
//   {
//     title: "🧪 2. Advanced Laboratories & Equipment",
//     description:
//       "High-end labs give students hands-on experience with modern tools and workflows.",
//     bullets: [
//       "AI & Machine Learning Lab",
//       "IoT & Embedded Systems Lab",
//       "Renewable Energy & Power Systems Lab",
//       "Robotics & Automation Lab",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🤝 3. Industry Collaboration & Internships",
//     description:
//       "Partnerships with Nepali startups, government units, and tech firms unlock internships and co-created projects with early hiring pathways.",
//     bullets: [
//       "Solve real industry challenges",
//       "Access to mentors from partner companies",
//       "Intern-to-hire pipelines for top performers",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🚀 4. Startup Incubation & Prototype Support",
//     description:
//       "From ideation to MVP, NTIC provides seed funding guidance, co-working space, prototyping tools, and investor outreach.",
//     bullets: [
//       "Hardware and software prototyping support",
//       "Dedicated mentors for product-market fit",
//       "Showcase days with investors and partners",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🌍 5. National Impact & Community Projects",
//     description:
//       "Flagship initiatives focus on pragmatic solutions for Nepal in agriculture, disaster response, and health access.",
//     bullets: [
//       "Smart agriculture pilots with rural farmers",
//       "Disaster management solutions for local governments",
//       "Telemedicine deployments in remote regions",
//     ],
//     image:
//       "national-impact.png",
//   },
//   {
//     title: "🧑‍🏫 6. Mentorship from Experts & Researchers",
//     description:
//       "Professors, engineers, PhDs, and domain specialists guide students from concept to deployment with structured mentorship.",
//     bullets: [
//       "Career and research roadmapping",
//       "Weekly office hours and demo sessions",
//       "Peer-to-peer learning communities",
//     ],
//     image:
//       "src/img/carousel9.jpg",
//   },
// ];

// export const HomePage = ({ navigateTo }) => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[90vh] flex items-center bg-gray-900 text-white">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="/public/NTIC-video.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fade-in-up">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                 Nepal Technology Innovation Center
//               </h1>
//               <p className="text-xl mb-8 leading-relaxed">
//                 “The research of today is the technology of tomorrow”
//                 NTIC create a transforming innovation resource Center
//               </p>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => navigateTo("programs")}
//                   className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 cursor-pointer transform hover:scale-105"
//                 >
//                   Explore Programs
//                 </button>
//                 <button
//                   onClick={() => navigateTo("contact")}
//                   className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why NTIC Section */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center">Why NTIC</h2>
//         <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//           Purpose-built programs, labs, and mentors help our students transform ideas into
//           high-impact solutions for Nepal.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {whyNticItems.map((item, idx) => (
//             <article
//               key={item.title}
//               className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow animate-fade-in-up"
//               style={{ animationDelay: `${idx * 100}ms` }}
//             >
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   onError={(e) => {
//                     e.target.style.display = "none";
//                   }}
//                 />
//               </div>
//               <div className="p-6 space-y-4">
//                 <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
//                 <p className="text-gray-700 leading-relaxed">{item.description}</p>

//                 {item.bullets && (
//                   <ul className="space-y-2 text-gray-700">
//                     {item.bullets.map((bullet) => (
//                       <li key={bullet} className="flex items-start gap-2">
//                         <span className="text-indigo-600 font-bold">•</span>
//                         <span>{bullet}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Watch Our Story</h2>

//           <div
//             className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in-up"
//             style={{ aspectRatio: "16/9" }}
//           >
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/8PJPgs3eqG4"
//               title="NTIC Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Organogram of NTIC*/}
//       <section className="w-full mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center animate-fade-in-up">
//           Organogram of NTIC
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           Understanding the structure and hierarchy of NTIC
//         </p>
        
        
          
//   {/* Image */}
//   <div className="flex justify-center">
//     <img
//       src="public\Organogram_NTIC.png"      
//       alt="Organogram of NTIC"
//       className="w-full max-w-5xl rounded-lg shadow-lg"
//     />
//   </div>
// </section>
        



//       {/* Focus Areas */}
//       <section className="w-full mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center animate-fade-in-up">
//           Our Focus Areas
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           We focus on key areas that drive innovation and sustainable development in Nepal
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <FocusCard
//             title="Agriculture & Rural Development"
//             description="Advancing farming technologies and supporting rural communities with innovative solutions for sustainable development."
//             delay={0}
//             color="green"
//             image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
//           />
//           <FocusCard
//             title="Renewable Energy"
//             description="Developing clean energy solutions including solar thermal collectors and sustainable power systems for rural areas."
//             delay={150}
//             color="blue"
//             image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop"
//           />
//           <FocusCard
//             title="Health Technology"
//             description="Creating smart health systems and diagnostic tools to improve healthcare access in rural Nepal."
//             delay={300}
//             color="indigo"
//             image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
//           />
//         </div>
//       </section>

      

//       {/* Image Gallery
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Facilities</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "0ms" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
//                 alt="Research Lab"
//                 className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "100ms" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
//                 alt="Innovation Center"
//                 className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
//                 alt="Workspace"
//                 className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section> */}
      

//       <section className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Message from the Director</h2>

//             {/* Card Container */}
//         <div className="bg-sky-50 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-col items-center gap-8">
//  {/* Director Image */}
//         <div className="mb-8 flex justify-center">
//           <img
//             src="src\img\download.jpg"
//             alt="Director"
//             className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-indigo-600"
//           />
//         </div>
// {/* Message Text */}
//         <div className="flex-1">
         
//           <p className="text-gray-700 leading-relaxed text-lg mb-4">
//             Nepal Technology Innovation Center (NTIC) is not just a building it is a commitment. A commitment to connect researchers, innovators, and communities to co-create practical and sustainable solutions in agriculture, energy, public health, and beyond. At its core, NTIC stands as a bridge between science and society, aiming to make innovation accessible, inclusive, and impactful especially for rural Nepal. Established through landmark collaboration between the Government of Nepal and the Republic of Korea with technical and financial support from KOICA. NTIC was envisioned as a flagship platform to strengthen research and development capacity at Kathmandu University and across the nation. From its inception, NTIC has been guided by the belief that local innovation, if properly nurtured, can address some of the most pressing challenges faced by our communities. Our work is rooted in three key thematic areas: Agriculture and Rural Development, Alternative and Renewable Energy, and Public Health Related Livelihoods. These areas are not just priorities; they are essential pillars of sustainable development in Nepal. Through applied research, business incubation, testing and accreditation services, training, and policy foresight, NTIC empowers entrepreneurs, students, scientists, and grassroots innovators alike. In addition to this core focus areas; NTIC also remains responsive to emerging national and global concerns by engaging in innovative research and collaborative projects across a broader range of fields. This flexibility allows the center to stay relevant and adaptive in a rapidly evolving world, ensuring that our impact extends beyond conventional boundaries. Our mission is to ensure that science and innovation work for the people, particularly those who have historically been left behind. In doing so, NTIC reaffirms its vision to become Nepal’s leading technology innovation platform. Let us continue to innovate together for a smarter, more sustainable, and inclusive Nepal.
//           </p>
//           <p className="text-gray-700 font-semibold text-lg">
//             — Prof. Dr. Bim Shrestha, Director, NTIC
//           </p>
//         </div>
//         </div>

// </div>
// </section>

//       {/* CTA */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Join us in building Nepal's technological future
//           </p>

//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => navigateTo("programs")}
//               className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors cursor-pointer"
//             >
//               View Programs
//             </button>

//             <button
//               onClick={() => navigateTo("contact")}
//               className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };


// const FocusCard = ({ title, description, delay = 0, color = "primary", image }) => {
//   const colorClasses = {
//     primary: "bg-[#8c3437] hover:bg-[#6d282a] border-[#8c3437]",
//     secondary: "bg-[#347d6c] hover:bg-[#2a6557] border-[#347d6c]",
//     primaryLight: "bg-[#d48f91] hover:bg-[#c07275] border-[#d48f91]",
//   };

//   return (
//     <div
//       className="group relative overflow-hidden border border-gray-200 rounded-xl bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {image && (
//         <div className="h-48 overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             onError={(e) => {
//               e.target.style.display = "none";
//             }}
//           />
//         </div>
//       )}
//       <div className="p-6">
//         <div
//           className={`w-12 h-1 ${
//             colorClasses[color]?.split(" ")[0] || "bg-[#8c3437]"
//           } mb-4 rounded`}
//         ></div>
//         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8c3437] transition-colors">
//           {title}
//         </h3>
//         <p className="text-gray-600 leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };

// const whyNticItems = [
//   {
//     title: "🧠 1. Research-driven Innovation",
//     description:
//       "NTIC supports technology research across computing, electronics, renewable energy, and AI with real-world problem statements and cross-disciplinary mentorship.",
//     bullets: [
//       "Access to real research datasets and facilities",
//       "Guidance from professors and industry specialists",
//       "Opportunities to publish and showcase findings",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🧪 2. Advanced Laboratories & Equipment",
//     description:
//       "High-end labs give students hands-on experience with modern tools and workflows.",
//     bullets: [
//       "AI & Machine Learning Lab",
//       "IoT & Embedded Systems Lab",
//       "Renewable Energy & Power Systems Lab",
//       "Robotics & Automation Lab",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🤝 3. Industry Collaboration & Internships",
//     description:
//       "Partnerships with Nepali startups, government units, and tech firms unlock internships and co-created projects with early hiring pathways.",
//     bullets: [
//       "Solve real industry challenges",
//       "Access to mentors from partner companies",
//       "Intern-to-hire pipelines for top performers",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🚀 4. Startup Incubation & Prototype Support",
//     description:
//       "From ideation to MVP, NTIC provides seed funding guidance, co-working space, prototyping tools, and investor outreach.",
//     bullets: [
//       "Hardware and software prototyping support",
//       "Dedicated mentors for product-market fit",
//       "Showcase days with investors and partners",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
//   },
//   {
//     title: "🌍 5. National Impact & Community Projects",
//     description:
//       "Flagship initiatives focus on pragmatic solutions for Nepal in agriculture, disaster response, and health access.",
//     bullets: [
//       "Smart agriculture pilots with rural farmers",
//       "Disaster management solutions for local governments",
//       "Telemedicine deployments in remote regions",
//     ],
//     image:
//       "national-impact.png",
//   },
//   {
//     title: "🧑‍🏫 6. Mentorship from Experts & Researchers",
//     description:
//       "Professors, engineers, PhDs, and domain specialists guide students from concept to deployment with structured mentorship.",
//     bullets: [
//       "Career and research roadmapping",
//       "Weekly office hours and demo sessions",
//       "Peer-to-peer learning communities",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
//   },
// ];

// export const HomePage = ({ navigateTo }) => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[90vh] flex items-center bg-gray-900 text-white">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="/public/NTIC-video.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fade-in-up">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                 Nepal Technology Innovation Center
//               </h1>
//               <p className="text-xl mb-8 leading-relaxed">
//                 "The research of today is the technology of tomorrow"
//                 NTIC create a transforming innovation resource Center
//               </p>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => navigateTo("programs")}
//                   className="bg-[#8c3437] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6d282a] transition-all duration-300 cursor-pointer transform hover:scale-105"
//                 >
//                   Explore Programs
//                 </button>
//                 <button
//                   onClick={() => navigateTo("contact")}
//                   className="border-2 border-[#d48f91] text-[#d48f91] px-8 py-3 rounded-lg font-medium hover:bg-[#8c3437] hover:text-white transition-all duration-300 cursor-pointer"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why NTIC Section */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-[#8c3437] mb-4 text-center">Why NTIC</h2>
//         <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//           Purpose-built programs, labs, and mentors help our students transform ideas into
//           high-impact solutions for Nepal.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {whyNticItems.map((item, idx) => (
//             <article
//               key={item.title}
//               className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow animate-fade-in-up"
//               style={{ animationDelay: `${idx * 100}ms` }}
//             >
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   onError={(e) => {
//                     e.target.style.display = "none";
//                   }}
//                 />
//               </div>
//               <div className="p-6 space-y-4">
//                 <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
//                 <p className="text-gray-700 leading-relaxed">{item.description}</p>

//                 {item.bullets && (
//                   <ul className="space-y-2 text-gray-700">
//                     {item.bullets.map((bullet) => (
//                       <li key={bullet} className="flex items-start gap-2">
//                         <span className="text-[#8c3437] font-bold">•</span>
//                         <span>{bullet}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-[#8c3437] mb-8 text-center">Watch Our Story</h2>

//           <div
//             className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in-up"
//             style={{ aspectRatio: "16/9" }}
//           >
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/8PJPgs3eqG4"
//               title="NTIC Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Organogram of NTIC*/}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-[#8c3437] mb-4 text-center animate-fade-in-up">
//           Organogram of NTIC
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           Understanding the structure and hierarchy of NTIC
//         </p>
        
        
          
//   {/* Image */}
//   <div className="flex justify-center">
//     <img
//       src="public\Organogram_NTIC.png"      
//       alt="Organogram of NTIC"
//       className="w-full max-w-4xl rounded-lg shadow-lg"
//     />
//   </div>
// </section>
        



//       {/* Focus Areas */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-[#8c3437] mb-4 text-center animate-fade-in-up">
//           Our Focus Areas
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           We focus on key areas that drive innovation and sustainable development in Nepal
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <FocusCard
//             title="Agriculture & Rural Development"
//             description="Advancing farming technologies and supporting rural communities with innovative solutions for sustainable development."
//             delay={0}
//             color="secondary"
//             image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
//           />
//           <FocusCard
//             title="Renewable Energy"
//             description="Developing clean energy solutions including solar thermal collectors and sustainable power systems for rural areas."
//             delay={150}
//             color="primaryLight"
//             image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop"
//           />
//           <FocusCard
//             title="Health Technology"
//             description="Creating smart health systems and diagnostic tools to improve healthcare access in rural Nepal."
//             delay={300}
//             color="primary"
//             image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
//           />
//         </div>
//       </section>

      

//       {/* Image Gallery */}
//       {/* <section className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-[#8c3437] mb-8 text-center">Our Facilities</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "0ms" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
//                 alt="Research Lab"
//                 className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "100ms" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
//                 alt="Innovation Center"
//                 className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
//                 alt="Workspace"
//                 className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section> */}
      

//       <section className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-[#8c3437] mb-8 text-center">Message from the Director</h2>

//             {/* Card Container */}
//         <div className="bg-sky-50 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-col items-center gap-8">
//  {/* Director Image */}
//         <div className="mb-8 flex justify-center">
//           <img
//             src="src\img\download.jpg"
//             alt="Director"
//             className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-[#8c3437]"
//           />
//         </div>
// {/* Message Text */}
//         <div className="flex-1">
         
//           <p className="text-gray-700 leading-relaxed text-lg mb-4">
//             Nepal Technology Innovation Center (NTIC) is not just a building it is a commitment. A commitment to connect researchers, innovators, and communities to co-create practical and sustainable solutions in agriculture, energy, public health, and beyond. At its core, NTIC stands as a bridge between science and society, aiming to make innovation accessible, inclusive, and impactful especially for rural Nepal. Established through landmark collaboration between the Government of Nepal and the Republic of Korea with technical and financial support from KOICA. NTIC was envisioned as a flagship platform to strengthen research and development capacity at Kathmandu University and across the nation. From its inception, NTIC has been guided by the belief that local innovation, if properly nurtured, can address some of the most pressing challenges faced by our communities. Our work is rooted in three key thematic areas: Agriculture and Rural Development, Alternative and Renewable Energy, and Public Health Related Livelihoods. These areas are not just priorities; they are essential pillars of sustainable development in Nepal. Through applied research, business incubation, testing and accreditation services, training, and policy foresight, NTIC empowers entrepreneurs, students, scientists, and grassroots innovators alike. In addition to this core focus areas; NTIC also remains responsive to emerging national and global concerns by engaging in innovative research and collaborative projects across a broader range of fields. This flexibility allows the center to stay relevant and adaptive in a rapidly evolving world, ensuring that our impact extends beyond conventional boundaries. Our mission is to ensure that science and innovation work for the people, particularly those who have historically been left behind. In doing so, NTIC reaffirms its vision to become Nepal's leading technology innovation platform. Let us continue to innovate together for a smarter, more sustainable, and inclusive Nepal.
//           </p>
//           <p className="text-gray-700 font-semibold text-lg">
//             — Prof. Dr. Bim Shrestha, Director, NTIC
//           </p>
//         </div>
//         </div>

// </div>
// </section>

//       {/* CTA */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Join us in building Nepal's technological future
//           </p>

//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => navigateTo("programs")}
//               className="bg-[#8c3437] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6d282a] transition-colors cursor-pointer"
//             >
//               View Programs
//             </button>

//             <button
//               onClick={() => navigateTo("contact")}
//               className="border-2 border-[#8c3437] text-[#8c3437] px-8 py-3 rounded-lg font-medium hover:bg-[#8c3437] hover:text-white transition-colors cursor-pointer"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };


const FocusCard = ({ title, description, delay = 0, color = "indigo", image }) => {
  const colorClasses = {
    indigo: "from-indigo-500 to-purple-600",
    green: "from-green-500 to-emerald-600",
    blue: "from-blue-500 to-cyan-600",
  };

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="h-56 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}
      <div className="p-8">
        <div className={`w-16 h-1.5 bg-gradient-to-r ${colorClasses[color] || colorClasses.indigo} mb-5 rounded-full`}></div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
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
    image: "public/carousel5.jpg",
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
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
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
    image: "public/carousel10.jpg",
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
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
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
    image: "national-impact.png",
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
    image: "public/carousel9.jpg",
  },
];

export const HomePage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/NTIC-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 font-medium">Innovation • Research • Impact</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
              Nepal Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Innovation Center
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
              "The research of today is the technology of tomorrow"
              <span className="block mt-2 text-blue-300">NTIC creates a transforming innovation resource Center</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo("programs")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button
                onClick={() => navigateTo("contact")}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why NTIC Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
            Why NTIC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Purpose-built programs, labs, and mentors help our students transform ideas into
            high-impact solutions for Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyNticItems.map((item, idx) => (
            <article
              key={item.title}
              className="group relative border-2 border-gray-200 rounded-3xl overflow-hidden bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-8 space-y-5">
                <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>

                {item.bullets && (
                  <ul className="space-y-3 text-gray-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                        <span className="flex-1">{bullet}</span>
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
      <section className="py-20 bg-gradient-to-br from-blue-100 to-cyan-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12 text-center animate-fade-in-up">
            Watch Our Story
          </h2>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up border-4 border-white/20"
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
            Organogram of NTIC
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding the structure and hierarchy of NTIC
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src="public/Organogram_NTIC.png"      
              alt="Organogram of NTIC"
              className="relative w-full max-w-5xl rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white/50 backdrop-blur-sm rounded-3xl my-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
            Our Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on key areas that drive innovation and sustainable development in Nepal
          </p>
        </div>

        
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <FocusCard
    title="Smart Agriculture"
    description="Implementing precision farming technologies and IoT-based solutions to boost productivity and sustainability in rural agriculture."
    delay={0}
    color="green"
    image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop" // new working agriculture image
  />
  <FocusCard
    title="Sustainable Energy"
    description="Developing renewable energy solutions such as solar microgrids and energy-efficient systems for remote communities."
    delay={150}
    color="yellow"
    image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop"
   
  />
  <FocusCard
    title="Healthcare Innovation"
    description="Building smart diagnostic tools, telemedicine platforms, and AI-powered healthcare systems to improve access in rural Nepal."
    delay={300}
    color="purple"
     image="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop"
     // new working healthcare image
  />
</div>


      </section>

      {/* Director's Message */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-12">
            Message from the Director
          </h2>

          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative flex flex-col items-center gap-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <img
                  src="src/img/download.jpg"
                  alt="Director"
                  className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-8 border-white"
                />
              </div>

              <div className="text-center md:text-left space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                 The Nepal Technology Innovation Center (NTIC) is more than a building—it’s a commitment to connect researchers, innovators, and communities to co-create practical solutions in agriculture, energy, and public health. Established through collaboration between the Government of Nepal and the Republic of Korea with KOICA’s support, NTIC strengthens research and development at Kathmandu University and nationwide. Focused on Agriculture & Rural Development, Renewable Energy, and Public Health, NTIC empowers entrepreneurs, students, scientists, and grassroots innovators through applied research, incubation, training, and policy foresight. By staying adaptive to emerging challenges, NTIC ensures science and innovation are accessible, inclusive, and impactful, reaffirming its vision to become Nepal's leading technology innovation platform.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
                  <p className="text-gray-900 font-bold text-xl">
                    Prof. Dr. Bim Shrestha
                    <span className="block text-blue-600 text-base font-medium">Director, NTIC</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-6">Ready to Get Started?</h2>
          <p className="text-2xl text-blue-100 mb-12">
            Join us in building Nepal's technological future
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={() => navigateTo("programs")}
              className="group relative px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">View Programs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => navigateTo("contact")}
              className="px-10 py-5 bg-transparent border-4 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};