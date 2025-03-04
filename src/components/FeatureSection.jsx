import React from "react";
import { PiUserCircleCheckBold } from "react-icons/pi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { PiBuildingsDuotone } from "react-icons/pi";

const features = [
  {
    icon: <PiUserCircleCheckBold />,
    title: "User-centric experiences",
    description:
      "Create compelling content across more devices than ever with tools that build versatile, structured content and integrate seamlessly with a wide range of digital marketing channels.",
  },
  {
    icon: <FaArrowTrendDown />,
    title: "Lower cost of ownership",
    description:
      "With no vendor lock-in and low-code/no-code options available, marketers can independently drive your digital strategy and publishing workflows.",
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: "Limitless flexibility",
    description:
      "A fully composable, open-source, API-first platform that allows you to design around your vision and your user needs. A global network of open source contributors continuously develops and innovates on core features.",
  },
  {
    icon: <PiBuildingsDuotone />,
    title: "Enterprise-grade tooling",
    description:
      "The most accessible, secure open-source DXP available. It adheres to industry standard privacy and security standards and checks all the boxes for your IT team.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-bold mb-10">Flexible by design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center  p-6">
              <div className="text-5xl rounded-xl border-2 p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xl mt-2">
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
