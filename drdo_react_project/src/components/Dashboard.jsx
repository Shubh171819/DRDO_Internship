import React, { useState, useRef } from "react";
import InputFieldWithRefresh from "./InputFieldWithRefresh";

const Dashboard = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null); // Ref for the hidden file input

  // Handle video file upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setVideoFile(fileURL);
    }
  };

  // Start streaming from the camera
  const startCameraStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setIsStreaming(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  // Stop the camera stream
  const stopCameraStream = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsStreaming(false);
  };

  // Trigger file input click when "Upload Video File" button is clicked
  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger hidden file input click
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar at the top */}
      <div className="fixed top-0 left-0 w-10/12 ml-64 bg-blue-600 text-white p-4 flex justify-between items-center z-10">
        {/* IP Address Input (left side) */}
        <div className="flex items-center">
          <InputFieldWithRefresh />
        </div>

        {/* Buttons (right side with gap) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={startCameraStream}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Start Streaming
          </button>
          <button
            onClick={stopCameraStream}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Stop Streaming
          </button>
        </div>
      </div>

        {/* Upload Video File Button */}
        <button
            onClick={handleUploadClick}
            className="block  mb-4 p-2 bg-yellow-500 text-white rounded-lg"
        >
            Upload Video File
        </button>
      
      <button
        onClick={handleUploadClick}
        className="block w-1/6 mb-4 p-2 bg-blue-600 text-white rounded-lg"
      >
        Upload Video File
      </button>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="hidden" // Hide the file input
      />

      {/* Content Below Sticky Navbar */}
      <div className="flex flex-row justify-between p-4 flex-1"> {/* Added padding-top to avoid overlap */}

        {/* Left Side: Video Upload Section (Below IP Address Input) */}
        <div className="w-1/2 text-black p-4 rounded-lg bg-gray-400 h-96 mr-10 mb-20">
          {videoFile && (
            <video
              src={videoFile}
              controls
              className="w-full h-full rounded-lg"
            />
          )}
        </div>

        {/* Right Side: Stream from Camera with Gray Background */}
        <div className="w-1/2 text-black p-4 rounded-lg bg-gray-400 h-96 mr-10">
          {isStreaming && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
