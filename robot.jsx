import React from "react";
import woman from "../assets/woman.jpg";
import bg from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen py-16 px-6 md:px-12 lg:px-20 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative flex flex-col gap-8 md:flex-row items-center justify-center mx-auto max-w-7xl">
        {/* Text Content */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-[#0A2342] py-12 px-8 md:py-16 md:px-12 lg:py-20 lg:px-16 rounded-3xl space-y-6">
          <div className="flex space-x-3">
            <div className="w-5 h-5 bg-[#087E8B] rounded-full"></div>
            <div className="w-5 h-5 bg-[#087E8B] rounded-full"></div>
            <div className="w-5 h-5 bg-[#087E8B] rounded-full"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#C7FFDA] font-bold">
            Create Ambitious Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#C7FFDA]">
            Nexa is a fully composable CMS that allows you to design a digital
            experience to your vision.
          </p>
          <button className="bg-[#087E8B] mt-6 text-white px-6 py-3 rounded-md hover:bg-[#C7FFDA] hover:text-black transition duration-300">
            Try Nexa CMS →
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 lg:w-2/5 mt-8 md:mt-0 relative">
          <div className="bg-[#087E8B] h-64 md:h-80 lg:h-96 rounded-3xl absolute top-8 right-0 w-full md:w-11/12 lg:w-10/12" />
          <div className="bg-[#087E8B] p-2 rounded-3xl relative">
            <img
              src={woman}
              alt="Smiling woman holding a laptop"
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
