import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaSearch,
  FaPlug,
  FaSpinner,
  FaSync,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ToolsContent = () => {
  const [isAnalyticsConnected, setIsAnalyticsConnected] = useState(false);
  const [realTimeData, setRealTimeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Proper way to access environment variables in Vite
  const GA_PROPERTY_ID = import.meta.env.VITE_GA_PROPERTY_ID;

  // Fetch real-time analytics data
  const fetchRealTimeData = async () => {
    if (!isAnalyticsConnected) return;

    setLoading(true);
    setError(null);

    try {
      // Simulate API call for demo purposes
      // In production, this would be replaced with actual API calls
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            activeUsers: Math.floor(Math.random() * 100) + 10,
            pageViews: Math.floor(Math.random() * 300) + 50,
            topPage: ["/home", "/products", "/about"][
              Math.floor(Math.random() * 3)
            ],
          });
        }, 1000);
      });

      setRealTimeData(response);
      setLoading(false);
    } catch (err) {
      setError(
        "Failed to fetch analytics data: " + (err.message || "Unknown error")
      );
      setLoading(false);
    }
  };

  // Connect to Google Analytics
  const connectGoogleAnalytics = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate connection process
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsAnalyticsConnected(true);
      await fetchRealTimeData();
    } catch (err) {
      setError(
        "Failed to connect to Google Analytics: " +
          (err.message || "Unknown error")
      );
      setLoading(false);
    }
  };

  // Refresh data periodically when connected
  useEffect(() => {
    if (!isAnalyticsConnected) return;

    // Initial fetch
    fetchRealTimeData();

    // Set up interval for refreshing data
    const intervalId = setInterval(fetchRealTimeData, 30000); // Refresh every 30 seconds

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [isAnalyticsConnected]);

  // Render a tool card
  const ToolCard = ({
    icon,
    iconColor,
    bgColor,
    title,
    description,
    buttonText,
    buttonColor,
    onClick,
    disabled,
    isNew,
    children,
  }) => (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 flex flex-col transition duration-300 border border-gray-100 h-full relative overflow-hidden">
      {isNew && (
        <div className="absolute -right-12 top-6 bg-indigo-500 text-white px-12 py-1 transform rotate-45 text-xs font-bold">
          NEW
        </div>
      )}
      <div className="flex items-center mb-5">
        <div className={`${bgColor} p-3.5 rounded-full`}>{icon}</div>
        <h2 className="text-xl font-bold text-gray-800 ml-4">{title}</h2>
      </div>
      <p className="text-gray-600 flex-1 mb-5 leading-relaxed">{description}</p>
      {children}
      {buttonText && (
        <button
          onClick={onClick}
          className={`mt-auto ${buttonColor} text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
          disabled={disabled}
        >
          {disabled ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              {buttonText.includes("Connect") ? (
                <FaPlug className="mr-2" />
              ) : buttonText.includes("Launch") ? (
                <FaExternalLinkAlt className="mr-2" />
              ) : (
                <FaPlug className="mr-2" />
              )}
              {buttonText}
            </>
          )}
        </button>
      )}
    </div>
  );

  // Render a metric card
  const MetricCard = ({ label, value, icon }) => (
    <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-blue-100 shadow-sm">
      <div className="flex items-center">
        <div className="text-blue-500 mr-3">{icon}</div>
        <span className="text-gray-600 font-medium">{label}</span>
      </div>
      <span className="text-xl font-bold text-blue-700">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8">
      {/* Header */}
      <div className="mb-12 max-w-4xl mx-auto text-center md:text-left">
        <div className="inline-block bg-blue-500 bg-opacity-10 px-4 py-2 rounded-full text-blue-700 font-semibold mb-3">
          Discover & Connect
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Tools & Integrations
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
          Enhance your CMS with powerful tools for analytics, optimization, and
          performance. Connect with your favorite services seamlessly.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Google Analytics */}
        <ToolCard
          icon={<FaChartLine className="text-blue-600 text-xl" />}
          iconColor="text-blue-600"
          bgColor="bg-blue-100"
          title="Google Analytics"
          description="Access real-time data about your website's performance. Track active users, page views, traffic sources, and more."
          buttonText={isAnalyticsConnected ? null : "Connect Analytics"}
          buttonColor="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          onClick={connectGoogleAnalytics}
          disabled={loading}
        >
          {isAnalyticsConnected && (
            <div className="mb-5 bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
              <div className="bg-blue-600 px-4 py-3 text-white font-medium flex justify-between items-center">
                <span>Real-Time Analytics</span>
                <button
                  onClick={fetchRealTimeData}
                  className="text-blue-100 hover:text-white text-sm flex items-center transition-colors"
                  disabled={loading}
                >
                  <FaSync className={`mr-1 ${loading ? "animate-spin" : ""}`} />
                  Refresh
                </button>
              </div>
              <div className="p-4">
                {loading ? (
                  <div className="flex items-center justify-center text-blue-500 py-4">
                    <FaSpinner className="animate-spin mr-2" />
                    <span>Loading analytics data...</span>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg border border-red-100 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                ) : realTimeData ? (
                  <div className="space-y-3">
                    <MetricCard
                      label="Active Users"
                      value={realTimeData.activeUsers}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      }
                    />
                    <MetricCard
                      label="Page Views"
                      value={realTimeData.pageViews}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                    />
                    <MetricCard
                      label="Top Page"
                      value={realTimeData.topPage}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </ToolCard>

        {/* Yoast SEO */}
        <ToolCard
          icon={<FaSearch className="text-green-600 text-xl" />}
          iconColor="text-green-600"
          bgColor="bg-green-100"
          title="Yoast SEO"
          description="Optimize your content for search engines. Use Yoast SEO to analyze keywords, improve readability, and boost your site's ranking."
          buttonText="Launch Yoast SEO"
          buttonColor="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
          onClick={() => alert("Launching Yoast SEO...")}
        />

        {/* Additional Tool Card */}
        <ToolCard
          icon={<FaPlug className="text-purple-600 text-xl" />}
          iconColor="text-purple-600"
          bgColor="bg-purple-100"
          title="Marketplace"
          description="Extend your CMS functionality with additional tools and integrations from our curated collection of partner services."
          buttonText="Browse Marketplace"
          buttonColor="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
          onClick={() => alert("Opening marketplace...")}
          isNew={true}
        />
      </div>

      {/* Featured Tools Section */}
    </div>
  );
};

export default ToolsContent;
