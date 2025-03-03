import React from "react";
import woman from "../assets/woman.jpg";
import bg from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen py-16 px-6 md:px-12 lg:px-20 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative flex flex-col gap-2 md:flex-row items-center max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="md:w-1/2 mt-6 ml-6 bg-[#009CDE] p-4 rounded-2xl  space-y-4">
          <div className="flex mt-4 ml-3  space-x-3">
            <div className="w-5 h-5 bg-white rounded-full"></div>
            <div className="w-5 h-5 bg-white rounded-full"></div>
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
          <h1 className="text-5xl leading font-bold mx-2 mt-6 ">
            Create Ambitious Digital Experiences
          </h1>
          <p className="text-4xl mx-2 mt-6">
            Nexa is a fully composable CMS that allows you to design a digital
            experience to your vision.
          </p>
          <button className="bg-blue-900 mt-6 mb-6 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
            Try Nexa CMS →
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="bg-white p-4 rounded-lg relative">
            <img
              src={woman}
              alt="Smiling woman holding a laptop"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
