import React, { useState } from "react";

const MediaComponent = () => {
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [mediaList, setMediaList] = useState([]);

  // Simulate file upload (replace with actual API call later)
  const uploadFile = (type) => {
    const file =
      type === "image" ? imageFile : type === "audio" ? audioFile : videoFile;
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    // Simulate adding file to the list (mock filename)
    const mockFilename = `${type}-${Date.now()}-${file.name}`;
    setMediaList([...mediaList, mockFilename]);

    // Reset file input
    if (type === "image") setImageFile(null);
    if (type === "audio") setAudioFile(null);
    if (type === "video") setVideoFile(null);
  };

  return (
    <div className="ml-64 mt-16 p-6 font-sans min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Media Library</h2>

      {/* Upload Image */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Upload an Image</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2"
        />
        <button
          onClick={() => uploadFile("image")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Upload Image
        </button>
      </div>

      {/* Upload Audio */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Upload an Audio</h3>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudioFile(e.target.files[0])}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2"
        />
        <button
          onClick={() => uploadFile("audio")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Upload Audio
        </button>
      </div>

      {/* Upload Video */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Upload a Video</h3>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2"
        />
        <button
          onClick={() => uploadFile("video")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Upload Video
        </button>
      </div>

      {/* Media List */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Uploaded Media</h3>
        <ul className="list-none p-0">
          {mediaList.map((file, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              {file}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MediaComponent;
