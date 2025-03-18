import React, { useState, useEffect } from "react";
import { FaChartLine, FaSearch, FaPlug, FaSpinner } from "react-icons/fa";

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
    children,
  }) => (
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 flex flex-col transition duration-300 border border-gray-100 h-full">
      <div className="flex items-center mb-4">
        <div className={`${bgColor} p-3 rounded-full`}>{icon}</div>
        <h2 className="text-xl font-semibold text-gray-800 ml-4">{title}</h2>
      </div>
      <p className="text-gray-600 flex-1 mb-4">{description}</p>
      {children}
      {buttonText && (
        <button
          onClick={onClick}
          className={`mt-auto ${buttonColor} text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center`}
          disabled={disabled}
        >
          {disabled ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              <FaPlug className="mr-2" />
              {buttonText}
            </>
          )}
        </button>
      )}
    </div>
  );

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

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Google Analytics */}
        <ToolCard
          icon={<FaChartLine className="text-blue-600 text-xl" />}
          iconColor="text-blue-600"
          bgColor="bg-blue-100"
          title="Google Analytics"
          description="Access real-time data about your website's performance. Track active users, page views, traffic sources, and more with Google Analytics integration."
          buttonText={isAnalyticsConnected ? null : "Connect Analytics"}
          buttonColor="bg-blue-600 hover:bg-blue-700"
          onClick={connectGoogleAnalytics}
          disabled={loading}
        >
          {isAnalyticsConnected && (
            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              {loading ? (
                <div className="flex items-center justify-center text-blue-500">
                  <FaSpinner className="animate-spin mr-2" />
                  <span>Loading analytics data...</span>
                </div>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : realTimeData ? (
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b pb-2 text-blue-700">
                    <span className="font-medium">Metric</span>
                    <span className="font-medium">Value</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Users</span>
                    <span className="font-semibold">
                      {realTimeData.activeUsers}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Page Views</span>
                    <span className="font-semibold">
                      {realTimeData.pageViews}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Top Page</span>
                    <span className="font-semibold">
                      {realTimeData.topPage}
                    </span>
                  </div>
                  <button
                    onClick={fetchRealTimeData}
                    className="mt-2 w-full text-blue-600 hover:text-blue-800 text-sm font-medium py-1 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Refresh Data
                  </button>
                </div>
              ) : null}
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
          buttonColor="bg-green-600 hover:bg-green-700"
          onClick={() => alert("Launching Yoast SEO...")}
        />

        {/* Additional Tool Card */}
        <ToolCard
          icon={<FaPlug className="text-purple-600 text-xl" />}
          iconColor="text-purple-600"
          bgColor="bg-purple-100"
          title="Add New Tool"
          description="Extend your CMS functionality with additional tools and integrations from our marketplace."
          buttonText="Browse Marketplace"
          buttonColor="bg-purple-600 hover:bg-purple-700"
          onClick={() => alert("Opening marketplace...")}
        />
      </div>
    </div>
  );
};

export default ToolsContent;
