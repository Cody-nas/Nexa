import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import { MdAudioFile } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa";

const MediaComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    image: [],
    audio: [],
    video: [],
  });
  const [mediaList, setMediaList] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Handle multiple file selection
  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    setSelectedFiles((prev) => ({
      ...prev,
      [type]: [...prev[type], ...files], // Append new files
    }));
  };

  // Simulate multiple file uploads
  const uploadFiles = async (type) => {
    if (!selectedFiles[type]?.length) {
      alert("Please select at least one file!");
      return;
    }

    setIsUploading(true);

    try {
      const uploadedFiles = selectedFiles[type].map((file) => ({
        id: Date.now() + Math.random(),
        type,
        name: file.name,
        timestamp: new Date().toLocaleString(),
        url: URL.createObjectURL(file),
      }));

      // Update media list and clear selected files
      setMediaList((prev) => [...uploadedFiles, ...prev]);
      setSelectedFiles((prev) => ({
        ...prev,
        [type]: [],
      }));
      document.getElementById(`${type}-file-input`).value = "";
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Delete a media item
  const deleteMedia = (id) => {
    setMediaList((prev) => {
      const updatedList = prev.filter((media) => media.id !== id);
      const removedMedia = prev.find((media) => media.id === id);
      if (removedMedia) URL.revokeObjectURL(removedMedia.url);
      return updatedList;
    });
  };

  // Render preview based on media type
  const renderPreview = (media) => {
    switch (media.type) {
      case "image":
        return (
          <img
            src={media.url}
            alt={media.name}
            className="h-14 w-14 rounded-md object-cover"
          />
        );
      case "audio":
        return (
          <audio src={media.url} controls className="h-10 w-64 rounded-md" />
        );
      case "video":
        return (
          <video
            src={media.url}
            controls
            className="h-20 w-40 rounded-md object-cover"
          />
        );
      default:
        return null;
    }
  };

  // Media type configurations
  const mediaTypes = [
    { type: "image", title: "Images", accept: "image/*", icon: <FaRegImage /> },
    {
      type: "audio",
      title: "Audio Files",
      accept: "audio/*",
      icon: <MdAudioFile />,
    },
    {
      type: "video",
      title: "Videos",
      accept: "video/*",
      icon: <FaFileVideo />,
    },
  ];

  return (
    <div className="lg:ml-64 mt-16 p-4 sm:p-6 lg:p-8 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Library</h2>

        {/* Upload Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {mediaTypes.map(({ type, title, accept, icon }) => (
            <div
              key={type}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                {icon} <span className="ml-2">Upload {title}</span>
              </h3>
              <input
                id={`${type}-file-input`}
                type="file"
                accept={accept}
                multiple
                onChange={(e) => handleFileChange(e, type)}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer"
              />
              <button
                onClick={() => uploadFiles(type)}
                disabled={!selectedFiles[type].length || isUploading}
                className={`w-full mt-3 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  !selectedFiles[type].length || isUploading
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {isUploading ? "Uploading..." : `Upload ${title}`}
              </button>
            </div>
          ))}
        </div>

        {/* Media List */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-5">
            Uploaded Media
          </h3>

          {mediaList.length === 0 ? (
            <p className="text-gray-500 text-center py-6 text-lg">
              No media uploaded yet
            </p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {mediaList.map((media) => (
                <li
                  key={media.id}
                  className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    {renderPreview(media)}
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {media.name}
                      </p>
                      <p className="text-xs text-gray-500">{media.timestamp}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteMedia(media.id)}
                    className="mt-2 sm:mt-0 text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 rounded hover:bg-red-50"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaComponent;
