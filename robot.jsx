import React from "react";

const FeatureFormPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
        {/* Left Side: Features Section */}
        <div>
          <div className="mb-8 flex items-start">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="Edit Icon"
              className="w-12 h-12 mr-4"
            />
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

          <div className="flex items-start">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828889.png"
              alt="Onboarding Icon"
              className="w-12 h-12 mr-4"
            />
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

        {/* Right Side: Form Section */}
        <div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700">
                  Country *
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                >
                  <option>Nigeria</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
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
            </div>

            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeatureFormPage;
