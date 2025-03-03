import React from "react";

const features = [
  {
    icon: "📊",
    title: "User-centric experiences",
    description:
      "Create compelling content across more devices than ever with tools that build versatile, structured content and integrate seamlessly with a wide range of digital marketing channels.",
  },
  {
    icon: "💰",
    title: "Lower cost of ownership",
    description:
      "With no vendor lock-in and low-code/no-code options available, marketers can independently drive your digital strategy and publishing workflows.",
  },
  {
    icon: "🔗",
    title: "Limitless flexibility",
    description:
      "A fully composable, open-source, API-first platform that allows you to design around your vision and your user needs. A global network of open source contributors continuously develops and innovates on core features.",
  },
  {
    icon: "🏢",
    title: "Enterprise-grade tooling",
    description:
      "The most accessible, secure open-source DXP available. It adheres to industry standard privacy and security standards and checks all the boxes for your IT team.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold mb-10">Flexible by design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
