import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaSpinner,
  FaExternalLinkAlt,
  FaUserFriends,
  FaEye,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaClock,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const HomeContent = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("week"); // week, month, year

  // Fetch analytics data
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setLoading(true);
      setError(null);

      try {
        // In a real application, this would be an API call to your backend
        // For this example, we'll generate mock data
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate API delay

        // Generate data for the selected time range
        const days =
          timeRange === "week" ? 7 : timeRange === "month" ? 30 : 365;
        const visitorsData = generateTimeSeriesData(days, 50, 250);
        const pageViewsData = generateTimeSeriesData(days, 150, 600);

        // Create mock data structure
        const mockData = {
          summary: {
            activeUsers: Math.floor(Math.random() * 500) + 100,
            activeUsersChange: Math.floor(Math.random() * 40) - 20, // -20 to +20
            pageViews: Math.floor(Math.random() * 2000) + 500,
            pageViewsChange: Math.floor(Math.random() * 40) - 20,
            averageSessionDuration: Math.floor(Math.random() * 300) + 60, // in seconds
            bounceRate: Math.floor(Math.random() * 60) + 20, // percentage
          },
          visitors: visitorsData,
          pageViews: pageViewsData,
          deviceDistribution: [
            { name: "Desktop", value: Math.floor(Math.random() * 60) + 30 },
            { name: "Mobile", value: Math.floor(Math.random() * 40) + 20 },
            { name: "Tablet", value: Math.floor(Math.random() * 20) + 5 },
          ],
          topPages: [
            {
              path: "/home",
              views: Math.floor(Math.random() * 1000) + 500,
              percentage: Math.floor(Math.random() * 30) + 20,
            },
            {
              path: "/products",
              views: Math.floor(Math.random() * 800) + 300,
              percentage: Math.floor(Math.random() * 20) + 15,
            },
            {
              path: "/about",
              views: Math.floor(Math.random() * 500) + 200,
              percentage: Math.floor(Math.random() * 15) + 10,
            },
            {
              path: "/contact",
              views: Math.floor(Math.random() * 300) + 100,
              percentage: Math.floor(Math.random() * 10) + 5,
            },
            {
              path: "/blog",
              views: Math.floor(Math.random() * 200) + 100,
              percentage: Math.floor(Math.random() * 8) + 3,
            },
          ],
          trafficSources: [
            {
              source: "Organic Search",
              sessions: Math.floor(Math.random() * 1000) + 500,
            },
            {
              source: "Direct",
              sessions: Math.floor(Math.random() * 800) + 300,
            },
            {
              source: "Social",
              sessions: Math.floor(Math.random() * 600) + 200,
            },
            {
              source: "Referral",
              sessions: Math.floor(Math.random() * 400) + 100,
            },
            { source: "Email", sessions: Math.floor(Math.random() * 300) + 50 },
          ],
        };

        setAnalyticsData(mockData);
      } catch (err) {
        setError(
          "Failed to fetch analytics data: " + (err.message || "Unknown error")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, [timeRange]);

  // Helper function to generate time series data
  const generateTimeSeriesData = (days, min, max) => {
    const data = [];
    const today = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      data.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        value: Math.floor(Math.random() * (max - min)) + min,
      });
    }

    return data;
  };

  // Format time (seconds to MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Custom tooltip component for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-md shadow-lg border border-gray-200">
          <p className="font-medium text-gray-800">{label}</p>
          <p className="text-blue-600 font-medium">{`${payload[0].value} ${
            payload[0].name === "value" ? "views" : ""
          }`}</p>
        </div>
      );
    }
    return null;
  };

  // Colors for charts
  const COLORS = ["#3b82f6", "#10b981", "#6366f1", "#f59e0b", "#ef4444"];

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen  bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 flex justify-center items-center">
        <div className="text-center text-blue-600">
          <FaSpinner className="animate-spin mx-auto h-12 w-12 mb-4" />
          <p className="text-xl font-medium">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <div className="text-red-500 text-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
            Data Loading Error
          </h2>
          <p className="text-gray-600 mb-6 text-center">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8">
      {/* Dashboard Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time insights from your Google Analytics integration
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="mt-4 md:mt-0 flex bg-white rounded-lg shadow p-1 border border-gray-200">
          {["week", "month", "year"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                timeRange === range
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Active Users */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-blue-100 rounded-lg p-3">
              <FaUserFriends className="text-blue-600 text-xl" />
            </div>
            <div
              className={`flex items-center ${
                analyticsData.summary.activeUsersChange > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {analyticsData.summary.activeUsersChange > 0 ? (
                <FaArrowUp className="mr-1" />
              ) : (
                <FaArrowDown className="mr-1" />
              )}
              <span className="text-sm font-medium">
                {Math.abs(analyticsData.summary.activeUsersChange)}%
              </span>
            </div>
          </div>
          <h3 className="text-gray-500 font-medium mb-1">Active Users</h3>
          <p className="text-3xl font-bold text-gray-800">
            {analyticsData.summary.activeUsers.toLocaleString()}
          </p>
        </div>

        {/* Page Views */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-green-100 rounded-lg p-3">
              <FaEye className="text-green-600 text-xl" />
            </div>
            <div
              className={`flex items-center ${
                analyticsData.summary.pageViewsChange > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {analyticsData.summary.pageViewsChange > 0 ? (
                <FaArrowUp className="mr-1" />
              ) : (
                <FaArrowDown className="mr-1" />
              )}
              <span className="text-sm font-medium">
                {Math.abs(analyticsData.summary.pageViewsChange)}%
              </span>
            </div>
          </div>
          <h3 className="text-gray-500 font-medium mb-1">Page Views</h3>
          <p className="text-3xl font-bold text-gray-800">
            {analyticsData.summary.pageViews.toLocaleString()}
          </p>
        </div>

        {/* Avg. Session Duration */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-purple-100 rounded-lg p-3">
              <FaClock className="text-purple-600 text-xl" />
            </div>
          </div>
          <h3 className="text-gray-500 font-medium mb-1">
            Avg. Session Duration
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            {formatTime(analyticsData.summary.averageSessionDuration)}
          </p>
        </div>

        {/* Bounce Rate */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-yellow-100 rounded-lg p-3">
              <FaCalendarAlt className="text-yellow-600 text-xl" />
            </div>
          </div>
          <h3 className="text-gray-500 font-medium mb-1">Bounce Rate</h3>
          <p className="text-3xl font-bold text-gray-800">
            {analyticsData.summary.bounceRate}%
          </p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Visitors Chart - 2/3 width */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Visitors Trend</h2>
            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View Details
              <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={analyticsData.visitors}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F6" />
                <XAxis
                  dataKey="date"
                  stroke="#94A3B8"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  stroke="#94A3B8"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  name="Visitors"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 6,
                    stroke: "#3b82f6",
                    strokeWidth: 2,
                    fill: "white",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Distribution - 1/3 width */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Device Distribution
            </h2>
          </div>
          <div className="h-64 flex flex-col justify-between">
            <ResponsiveContainer width="100%" height="70%">
              <PieChart>
                <Pie
                  data={analyticsData.deviceDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {analyticsData.deviceDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6">
              {analyticsData.deviceDistribution.map((entry, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-700">
                    {entry.name} ({entry.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Top Pages</h2>
            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View All Pages
              <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-3 text-gray-500 font-medium">
                    Page
                  </th>
                  <th className="text-right pb-3 text-gray-500 font-medium">
                    Views
                  </th>
                  <th className="text-right pb-3 text-gray-500 font-medium">
                    % of Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.topPages.map((page, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 font-medium text-gray-800">
                      {page.path}
                    </td>
                    <td className="py-3 text-right text-gray-600">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="py-3 text-right text-gray-600">
                      {page.percentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Traffic Sources</h2>
            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              View Details
              <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={analyticsData.trafficSources}
                layout="vertical"
                margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F6" />
                <XAxis
                  type="number"
                  stroke="#94A3B8"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  dataKey="source"
                  type="category"
                  scale="band"
                  stroke="#94A3B8"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip />
                <Bar
                  dataKey="sessions"
                  name="Sessions"
                  fill="#4f46e5"
                  radius={[0, 4, 4, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
