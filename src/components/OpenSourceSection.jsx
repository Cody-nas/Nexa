import React from "react";
import man from "../assets/man.jpg";

const OpenSourceSection = () => {
  return (
    <section className="bg-green-600 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left Side - Text and Stats */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Open Source means no vendor lock-in
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-lg mt-2">
                Nexa Certified Partners provide global support
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-4xl font-bold">10k+</h3>
              <p className="text-lg mt-2">Experienced Nexa professionals</p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-4xl font-bold">400k+</h3>
              <p className="text-lg mt-2">Websites using Nexa today</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={man}
            alt="Smiling man"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
