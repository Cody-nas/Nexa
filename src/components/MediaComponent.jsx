import React, { useState } from "react";

const MediaComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    image: null,
    audio: null,
    video: null,
  });
  const [mediaList, setMediaList] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e, type) => {
    setSelectedFiles((prev) => ({
      ...prev,
      [type]: e.target.files[0],
    }));
  };

  // Simulate file upload (replace with actual API call later)
  const uploadFile = async (type) => {
    const file = selectedFiles[type];
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setIsUploading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const newMedia = {
        id: Date.now(),
        type,
        name: file.name,
        timestamp: new Date().toLocaleString(),
        url: URL.createObjectURL(file),
      };
      setMediaList((prev) => [newMedia, ...prev]);
      setSelectedFiles((prev) => ({
        ...prev,
        [type]: null,
      }));
      document.getElementById(`${type}-file-input`).value = "";
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Delete a media item and clean up URL
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
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-md object-cover shadow-sm"
          />
        );
      case "audio":
        return (
          <audio
            src={media.url}
            controls
            className="h-10 w-full sm:w-64 max-w-full rounded-md"
          />
        );
      case "video":
        return (
          <video
            src={media.url}
            controls
            className="h-16 w-32 sm:h-20 sm:w-40 rounded-md object-cover shadow-sm"
          />
        );
      default:
        return null;
    }
  };

  // Media type configurations
  const mediaTypes = [
    { type: "image", title: "Image", accept: "image/*", icon: "📷" },
    { type: "audio", title: "Audio", accept: "audio/*", icon: "🎵" },
    { type: "video", title: "Video", accept: "video/*", icon: "🎬" },
  ];

  return (
    <div className="lg:ml-64 mt-16 p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans transition-all duration-300">
      <div className="max-w-full sm:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-tight">
          Media Library
        </h2>

        {/* Upload Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {mediaTypes.map(({ type, title, accept, icon }) => (
            <div
              key={type}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2 text-xl sm:text-2xl">{icon}</span> Upload{" "}
                {title}
              </h3>
              <input
                id={`${type}-file-input`}
                type="file"
                accept={accept}
                onChange={(e) => handleFileChange(e, type)}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 sm:file:py-2.5 file:px-4 sm:file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 mb-3 sm:mb-4 transition-colors duration-200 cursor-pointer"
              />
              <button
                onClick={() => uploadFile(type)}
                disabled={!selectedFiles[type] || isUploading}
                className={`w-full py-2 sm:py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  !selectedFiles[type] || isUploading
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800"
                }`}
              >
                {isUploading && selectedFiles[type]
                  ? "Uploading..."
                  : `Upload ${title}`}
              </button>
            </div>
          ))}
        </div>

        {/* Media List */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5">
            Uploaded Media
          </h3>

          {mediaList.length === 0 ? (
            <p className="text-gray-500 text-center py-6 sm:py-8 text-base sm:text-lg">
              No media uploaded yet
            </p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {mediaList.map((media) => (
                <li
                  key={media.id}
                  className="py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-gray-50 transition-colors duration-150 rounded-md px-2"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                    {renderPreview(media)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {media.name}
                      </p>
                      <p className="text-xs text-gray-500">{media.timestamp}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteMedia(media.id)}
                    className="mt-2 sm:mt-0 text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200 px-3 py-1 rounded hover:bg-red-50"
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
