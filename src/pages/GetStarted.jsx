import React from "react";
import { MdEdit } from "react-icons/md";
import { RxCube } from "react-icons/rx";
import { GrGroup } from "react-icons/gr";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="bg-blue-100 min-h-screen flex items-center justify-center px-6">
      <div className=" w-full grid md:grid-cols-2 gap-14 p-4 ">
        {/* left side */}
        <div className="space-x-6 mt-6 ">
          <div className="mb-8 mt-10 flex items-start">
            <div className="rounded-xl border-2 p-3 mr-3">
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

          <div className=" mb-8 mt-10 flex items-start">
            <div className="rounded-xl border-2 p-3 mr-3">
              <GrGroup className="w-10 h-10 " />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Easy onboarding for newcomers
              </h3>
              <p className="text-gray-700 mt-2">
                Designed for site builders with no prior Nexa experience, Nexa
                CMS offers a browser-based interface, straightforward UI, and
                guided configurations.
              </p>
            </div>
          </div>

          <div className="  flex mt-10 items-start">
            <div className="rounded-xl border-2 p-3 mr-3">
              <RxCube className="w-10 h-10 " />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Ready-to-go out of the box
              </h3>
              <p className="text-gray-700 mt-2">
                Nexa CMS arrives with a functional baseline, allowing users to
                add content, customize layouts, and see tangible results without
                touching a line of code.
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Sign Up</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Email *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Company *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Job Position Title/Role
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Country *
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              >
                <option>Nigeria</option>
                {/* <option>United States</option>
                <option>United Kingdom</option> */}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                State *
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              >
                <option value="">Select State</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
                <option value="FCT">Federal Capital Territory (Abuja)</option>
              </select>
            </div>
            <Link to="/dashboard">
              <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
