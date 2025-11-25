import React, { useMemo, useState } from "react";

const jobPostings = [
  {
    id: 1,
    title: "AI Research Fellow",
    type: "Job",
    department: "AI & Machine Learning Lab",
    location: "Dhulikhel Campus",
    description:
      "Lead applied AI research focused on smart agriculture and disaster response models.",
    deadline: "Mar 15, 2025",
    tags: ["Full-time", "Research", "Machine Learning"],
  },
  {
    id: 2,
    title: "Embedded Systems Intern",
    type: "Internship",
    department: "IoT & Embedded Lab",
    location: "Kathmandu Office",
    description:
      "Build low-power sensor prototypes for rural connectivity and energy monitoring.",
    deadline: "Mar 05, 2025",
    tags: ["Internship", "Hardware", "Prototype"],
  },
  {
    id: 3,
    title: "Renewable Energy Research Associate",
    type: "Job",
    department: "Renewable Energy & Power Systems Lab",
    location: "Dhulikhel Campus",
    description:
      "Design and test solar thermal systems tailored for remote communities.",
    deadline: "Mar 25, 2025",
    tags: ["Research", "Energy", "Field Work"],
  },
  {
    id: 4,
    title: "Technology Policy Intern",
    type: "Internship",
    department: "Innovation & Policy Desk",
    location: "Hybrid",
    description:
      "Support policy brief creation, stakeholder workshops, and innovation roadmaps.",
    deadline: "Feb 28, 2025",
    tags: ["Policy", "Writing", "Hybrid"],
  },
  {
    id: 5,
    title: "Health-Tech Product Designer",
    type: "Job",
    department: "Smart Health Initiative",
    location: "Kathmandu Office",
    description:
      "Design user-centric telemedicine interfaces and mobile experiences for clinics.",
    deadline: "Mar 10, 2025",
    tags: ["Design", "Health", "Product"],
  },
  {
    id: 6,
    title: "Startup Incubation Fellow",
    type: "Internship",
    department: "Startup & Incubation Hub",
    location: "Dhulikhel Campus",
    description:
      "Mentor early-stage teams, run workshops, and help organize demo days.",
    deadline: "Mar 20, 2025",
    tags: ["Startup", "Community", "Mentorship"],
  },
];

const locations = ["All Locations", "Dhulikhel Campus", "Kathmandu Office", "Hybrid"];
const departments = [
  "All Departments",
  "AI & Machine Learning Lab",
  "IoT & Embedded Lab",
  "Renewable Energy & Power Systems Lab",
  "Innovation & Policy Desk",
  "Smart Health Initiative",
  "Startup & Incubation Hub",
];
const types = ["All Opportunities", "Job", "Internship"];

export const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedType, setSelectedType] = useState(types[0]);

  const filteredJobs = useMemo(() => {
    return jobPostings.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesLocation =
        selectedLocation === "All Locations" || job.location === selectedLocation;

      const matchesDepartment =
        selectedDepartment === "All Departments" || job.department === selectedDepartment;

      const matchesType =
        selectedType === "All Opportunities" || job.type === selectedType;

      return matchesSearch && matchesLocation && matchesDepartment && matchesType;
    });
  }, [searchQuery, selectedLocation, selectedDepartment, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
            Careers & Internships at NTIC
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Search jobs, fellowships, and internships
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join multidisciplinary teams solving real problems in AI, energy, health,
            agriculture, and entrepreneurship — right here at Kathmandu University.
          </p>
        </header>

        {/* Filters */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Search keywords
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try “AI research”, “internship”, “energy”..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Location
              </label>
              <select
                className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Opportunity type
              </label>
              <select
                className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Department / Lab
              </label>
              <select
                className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <button
              className="mt-6 md:mt-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              onClick={() => {
                setSearchQuery("");
                setSelectedLocation(locations[0]);
                setSelectedDepartment(departments[0]);
                setSelectedType(types[0]);
              }}
            >
              Reset filters
            </button>
          </div>
        </section>

        {/* Listings */}
        <section className="space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="bg-white border border-dashed border-gray-300 rounded-xl p-10 text-center text-gray-600">
              No openings match your filters right now. Try widening your search or check back soon.
            </div>
          ) : (
            filteredJobs.map((job) => (
              <article
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-indigo-600 mb-1">{job.type}</p>
                    <h2 className="text-2xl font-semibold text-gray-900">{job.title}</h2>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{job.location}</p>
                    <p className="text-sm text-gray-500">Apply by {job.deadline}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  );
};
