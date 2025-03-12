import React from "react";
import { PiUserCircleCheckBold } from "react-icons/pi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { PiBuildingsDuotone } from "react-icons/pi";

const features = [
  {
    icon: <PiUserCircleCheckBold />,
    title: "Intuitive Drag-and-Drop Editor",
    description: "Design your site with ease, no coding required.",
  },
  {
    icon: <FaArrowTrendDown />,
    title: "Responsive Templates.",
    description: "Choose from a variety of mobile-friendly themes.",
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: "SEO Optimization",
    description: "Boost your rankings with built-in SEO tools.",
  },
  {
    icon: <PiBuildingsDuotone />,
    title: "Fast & Secure Hosting",
    description: "Enjoy top-tier performance and security.",
  },
  {
    icon: <PiBuildingsDuotone />,
    title: "E-Commerce Ready",
    description: "Start selling online with seamless integrations.",
  },
  {
    icon: <PiBuildingsDuotone />,
    title: "Extensive Integrations",
    description: "Connect with your favorite tools and services.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Flexible by Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md"
            >
              <div className="text-5xl text-[#087E8B] rounded-xl border-2 border-[#087E8B] p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
