import React from "react";

const ContactItem = ({ title, content }) => (
  <div className="group flex gap-4 p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 animate-fade-in-up">
    <div className="w-1 h-12 bg-indigo-600 rounded group-hover:scale-y-110 transition-transform"></div>
    <div className="flex-1">
      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <div className="text-gray-700">
        {typeof content === "string" ? content : content}
      </div>
    </div>
  </div>
);

const QuickLink = ({ text, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block px-4 py-3 border border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md animate-scale-in"
  >
    <div className="flex items-center justify-between">
      <span className="text-gray-700 group-hover:text-indigo-600 font-medium transition-colors">
        {text}
      </span>
      <span className="text-indigo-600 transform group-hover:translate-x-2 transition-transform">
        →
      </span>
    </div>
  </a>
);

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-12">
            Get in touch with us to learn more about our programs, facilities,
            or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <ContactItem
                title="Address"
                content="28 Kilo, Dhulikhel, Kavre, Nepal (Inside Kathmandu University Premises)"
              />

              <ContactItem
                title="Email"
                content={
                  <div className="space-y-1">
                    <a
                      href="mailto:irdp@ku.edu.np"
                      className="text-indigo-600 hover:underline block"
                    >
                      irdp@ku.edu.np
                    </a>
                    <a
                      href="mailto:ntic@ku.edu.np"
                      className="text-indigo-600 hover:underline block"
                    >
                      ntic@ku.edu.np
                    </a>
                  </div>
                }
              />

              <ContactItem
                title="Phone"
                content={
                  <div className="space-y-1">
                    <div>Mobile: +977</div>
                    <div>Landline: +</div>
                  </div>
                }
              />

              <ContactItem
                title="Website"
                content={
                  <a
                    href="http://ntic.ku.edu.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    http://ntic.ku.edu.np
                  </a>
                }
              />
            </div>
          </div>

          {/* Quick Links & Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Links
            </h2>
            <div className="space-y-3 mb-8">
              <QuickLink text="Kathmandu University" url="https://ku.edu.np" />
              <QuickLink
                text="Research & Development"
                url="http://ntic.ku.edu.np"
              />
              <QuickLink text="KOICA Nepal" url="https://www.koica.go.kr" />
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-300 hover:border-indigo-500 transition-all duration-300 animate-scale-in">
              <div className="text-center text-gray-600">
                <div className="font-medium text-lg mb-1">Dhulikhel, Kavre</div>
                <div className="text-sm">Kathmandu University Campus</div>
              </div>
            </div> */}

<div
  className="rounded-xl h-64 flex items-center justify-center border border-gray-300 
             hover:border-indigo-500 transition-all duration-300 animate-scale-in 
             bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('public/Kathmandu_University.jpg')" }}
>
  <div className="text-center text-white bg-black/40 px-4 py-2 rounded-lg">
    <div className="font-medium text-lg mb-1">Dhulikhel, Kavre</div>
    <div className="text-sm">Kathmandu University Campus</div>
  </div>
</div>



            {/* Partnership Inquiry */}
            <div
              className="mt-8 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-xl animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Partnership Opportunities
              </h3>
              <p className="text-gray-700 text-sm">
                Interested in collaborating with NTIC? We welcome partnerships
                with academic institutions, research organizations, startups,
                and industry partners. Reach out to discuss how we can work
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
