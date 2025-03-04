import React from "react";

const NexaJourney = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100  text-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Start your <span className="text-blue-900">Nexa</span> <br />{" "}
            journey
          </h1>
        </div>

        {/* right side */}
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 ">
              <span className="text-2xl font-bold text-gray-900">Nexa CMS</span>{" "}
              empowers marketers and site builders to create stunning websites
              with ease—no advanced skills required. Ideal for most projects.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-900 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
                Start building with Nexa CMS →
              </button>
              <button className="border border-gray-400 text-gray-900 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
                Learn about Nexa CMS →
              </button>
            </div>
          </div>

          {/* Nexa core */}
          <div>
            <p className="text-xl text-gray-700"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexaJourney;
