import React from "react";
import modi from "../../assets/modi.png";

function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#FFF8F0] px-4 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering Communities Through Cooperative Efforts
              </h1>
              <button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-8 py-2 rounded">
                Know More
              </button>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={modi}
                alt="Hero image"
                className="object-contain w-full h-full scale-125"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#00A651] text-white p-4 text-center mt-8">
          <p className="text-lg">
            Delivering quality services through skilled manpower and innovative
            technology for diverse projects since 1994.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">OUR PARTNERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-40 h-40">
                <img
                  src="/placeholder.svg"
                  alt={`Partner ${i}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-[#FF4500]">
              <img
                src="/placeholder.svg"
                alt="About us image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">ABOUT US</h2>
              <p className="text-gray-600">
                Indian Labour Cooperative Society Ltd. (ILCS) was established in
                1994 as a Multi-State Cooperative Society, operating under the
                Ministry of Cooperation, Government of India. Over the past 30
                years, we have been committed to providing high-quality services
                to various Government, Semi-Government, and Private Authorities
                by undertaking diverse projects and deploying skilled,
                semi-skilled, and unskilled manpower.
              </p>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">30+</p>
                  <p className="text-sm">Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">45+</p>
                  <p className="text-sm">WorldWide</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">30+</p>
                  <p className="text-sm">Ongoing</p>
                </div>
              </div>
              <button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-8 py-2 rounded">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Value Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["MISSION", "VISION", "VALUE"].map((title) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  <div className="relative h-40 mb-4">
                    <img
                      src="/placeholder.svg"
                      alt={`Our ${title}`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold">OUR {title}</h3>
                  <p className="text-gray-600">
                    The Indian Labour Cooperative Society Ltd. aims to provide a
                    collective voice to workers, ensuring they receive fair
                    treatment and opportunities for growth. We believe in true
                    team unity and cooperation to bring about positive change in
                    the labor sector.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
