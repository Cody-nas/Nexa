import React from "react";
import { MdEdit } from "react-icons/md";
import { RxCube } from "react-icons/rx";
import { GrGroup } from "react-icons/gr";

const GetStarted = () => {
  return (
    <section className="bg-blue-100 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12  p-8 rounded-lg shadow-lg">
        {/* left side */}
        <div>
          <div className="mb-8 flex items-start">
            <div className="rounded-lg border-2 p-3 mr-3">
              <MdEdit className="w-10 h-10 " />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Faster time-to-value
              </h3>
              <p className="text-gray-700 mt-2">
                Jump straight into building sites with curated recipes that let
                users snap together common features quickly, making it ideal
                when deadlines loom or resources are limited.
              </p>
            </div>
          </div>

          <div className=" mb-8 flex items-start">
            <div className="rounded-lg border-2 p-3 mr-3">
              <GrGroup className="w-10 h-10 " />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Easy onboarding for newcomers
              </h3>
              <p className="text-gray-700 mt-2">
                Designed for site builders with no prior Drupal or PHP
                experience, Drupal CMS offers a browser-based interface,
                straightforward UI, and guided configurations.
              </p>
            </div>
          </div>

          <div className="  flex items-start">
            <div className="rounded-lg border-2 p-3 mr-3">
              <RxCube className="w-10 h-10 " />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Easy onboarding for newcomers
              </h3>
              <p className="text-gray-700 mt-2">
                Designed for site builders with no prior Drupal or PHP
                experience, Drupal CMS offers a browser-based interface,
                straightforward UI, and guided configurations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
