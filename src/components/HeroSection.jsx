import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-500 py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="absolute inset-0  bg-[linear-gradient(45deg,_#e0f2fe_25%,_transparent_25%),_linear-gradient(-45deg,_#e0f2fe_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_#e0f2fe_75%),_linear-gradient(-45deg,_transparent_75%,_#e0f2fe_75%)] bg-[size:40px_40px]"></div>

      <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="rounded-2xl">
          <div className="md:w-1/2 mt-6 ml-6  space-y-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h1 className="text-4xl font-bold">
              Create Ambitious Digital Experiences
            </h1>
            <p className="text-lg">
              Nexa is a fully composable CMS that allows you to design a digital
              experience to your vision.
            </p>
            <button className="bg-blue-900 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
              Try Nexa CMS →
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="bg-white rounded-lg shadow-lg p-2 relative z-10">
            <div className="bg-blue-500 p-4 rounded-lg relative">
              <img
                src="/"
                alt="Smiling woman holding a laptop"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
