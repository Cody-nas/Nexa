import React from "react";
import { FaChartLine, FaSearch, FaPlug } from "react-icons/fa";

const ToolsContent = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Tools & Integrations
        </h1>
        <p className="text-gray-600 text-lg">
          Enhance your CMS with powerful tools for analytics, optimization, and
          performance.
        </p>
      </div>

      {/* Search Bar */}
      {/* <div className="mb-8 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <FaSearch className="absolute right-4 top-3.5 text-gray-400" />
        </div>
      </div> */}

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Google Analytics */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 flex flex-col transition duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaChartLine className="text-blue-600 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 ml-4">
              Google Analytics
            </h2>
          </div>
          <p className="text-gray-600 flex-1 mb-4">
            Access real-time data about your website's performance. Track active
            users, page views, traffic sources, and more with Google Analytics
            integration.
          </p>
          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
            <FaPlug className="mr-2" />
            Connect Analytics
          </button>
        </div>

        {/* Yoast SEO */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 flex flex-col transition duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaSearch className="text-green-600 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 ml-4">
              Yoast SEO
            </h2>
          </div>
          <p className="text-gray-600 flex-1 mb-4">
            Optimize your content for search engines. Use Yoast SEO to analyze
            keywords, improve readability, and boost your site's ranking.
          </p>
          <button className="mt-auto bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
            <FaPlug className="mr-2" />
            Launch Yoast SEO
          </button>
        </div>

        {/* Additional Tool Card */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 flex flex-col transition duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaPlug className="text-purple-600 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 ml-4">
              Add New Tool
            </h2>
          </div>
          <p className="text-gray-600 flex-1 mb-4">
            Extend your CMS functionality with additional tools and integrations
            from our marketplace.
          </p>
          <button className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
            <FaPlug className="mr-2" />
            Browse Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsContent;
