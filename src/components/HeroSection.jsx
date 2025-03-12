import React from "react";
import woman from "../assets/woman.jpg";
import bg from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative  h-screen py-16 px-6 md:px-12 lg:px-20 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative  mb flex flex-col gap-2 md:flex-row items-center  mx-auto">
        {/* Text Content */}

        <div className=" md:w-3xl mt-2  bg-[#0A2342] py-30 px-20 rounded-4xl  space-y-5">
          {" "}
          <div className="flex mt-4 ml-3  space-x-3">
            <div className="w-5 h-5 bg-[#087E8B] rounded-full"></div>
            <div className="w-5 h-5 bg-[#087E8B] rounded-full"></div>
            <div className="w-5 h-5 bg-[#087E8B] rounded-full"></div>
          </div>
          <h1 className="text-5xl text-[#C7FFDA] leading font-bold mx-2 mt-6 ">
            Build Stunning Websites Effortlessly
          </h1>
          <p className="text-3xl text-[#C7FFDA] mx-3 mt-6">
            Create, manage, and scale your website with ease using our powerful
            CMS. No coding required.
          </p>
          <button className="bg-[#087E8B] mt-6 text-white px-4 py-2 rounded-md hover:bg-[#C7FFDA] hover:text-black">
            Try Nexa CMS →
          </button>
        </div>
        {/* Image Content */}
        <div className="  mt-8 md:mt-0 ">
          <div className="bg-[#087E8B] px-[340px] py-56 rounded-4xl absolute  top-36 right-8" />
          <div className="md:w-2xl bg-[#0A2342] p-2 rounded-4xl absolute  top-24  right-0.5">
            <img
              src={woman}
              alt="Smiling woman holding a laptop"
              className="w-full rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
