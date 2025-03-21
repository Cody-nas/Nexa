import React, { useState, useEffect } from "react";

const ContentPage = () => {
  const [hasProject, setHasProject] = useState(false);
  const [project, setProject] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a small delay
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        const userHasProject = false; // This would come from real data

        setHasProject(userHasProject);

        if (userHasProject) {
          setProject({
            name: "My Awesome Website",
            status: "In Progress",
            lastEdited: "2023-10-01",
          });
        } else {
          setTemplates([
            {
              id: 1,
              name: "Blog Template",
              description: "Perfect for bloggers",
              thumbnail: "/blog-thumbnail.jpg",
            },
            {
              id: 2,
              name: "Portfolio Template",
              description: "Showcase your work",
              thumbnail: "/portfolio-thumbnail.jpg",
            },
            {
              id: 3,
              name: "E-commerce Template",
              description: "Sell products online",
              thumbnail: "/ecommerce-thumbnail.jpg",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const startProject = (template) => {
    console.log(`Starting project with ${template.name}`);
    // Logic to create a new project would go here
    // In a real app, this might make an API call and then update state
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading your project data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Website Project</h1>
      {hasProject ? (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold">
            {project?.name || "Untitled Project"}
          </h2>
          <p className="text-gray-600">
            Status: {project?.status || "Unknown"}
          </p>
          <p className="text-gray-600">
            Last Edited: {project?.lastEdited || "Never"}
          </p>
          <div className="mt-4 flex gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded">
              Edit Project
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 transition-colors text-gray-800 px-4 py-2 rounded">
              View Statistics
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mb-6">
            You haven't started a project yet. Choose a template to begin:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white p-6 rounded shadow hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold">{template.name}</h2>
                <p className="text-gray-600 my-2">{template.description}</p>
                <button
                  onClick={() => startProject(template)}
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-2 rounded"
                >
                  Use This Template
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentPage;
