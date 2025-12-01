export const NTICFamilyPage = () => {
  const members = [
    {
      name: "Prof.Dr.Bhim Shrestha",
      position: "Director, NTIC",
      img: "/bim.jpeg",
    },
    {
      name: "Ujwol Thapa",
      position: "Program Coordinator",
      img: "/ujjwal.jpg",
    },
    {
      name: "Aashish Dawadi",
      position: "Research Engineer",
      img: "/aashish.jpg",
    },
    {
      name: "Yamraj Oli",
      position: "Research Engineer",
      img: "public/Yamraj.jpg",
    },
   
  ];

  return (
    <section className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        NTIC Family
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Meet our wonderful team members who make NTIC special.
      </p>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center 
                       transform transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-36 h-36 object-cover rounded-full border-4 border-blue-300 mb-4 
                         transform transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-blue-700 font-medium">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
