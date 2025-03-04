import React from "react";

const DrupalSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-8">
        {/* Left Side: Heading */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Start your <span className="text-blue-500">Drupal</span> journey
          </h2>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          {/* Drupal CMS Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">Drupal CMS</h3>
            <p className="text-gray-700 mt-2">
              Empowers marketers and site builders to create stunning websites
              with ease—no advanced skills required. Ideal for most projects.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-900 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
                Start building with Drupal CMS →
              </button>
              <button className="border border-gray-400 text-gray-900 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
                Learn about Drupal CMS →
              </button>
            </div>
          </div>

          {/* Drupal Core Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">Drupal core</h3>
            <p className="text-gray-700 mt-2">
              The open-source foundation you need to build powerful digital
              experiences. Perfect for developers and advanced users.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-900 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
                Try Drupal core →
              </button>
              <button className="border border-gray-400 text-gray-900 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
                Download Drupal core →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrupalSection;
