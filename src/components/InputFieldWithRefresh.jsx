import React, { useState } from "react";

const InputFieldWithRefresh = () => {
  const [address, setAddress] = useState("");

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  const handleRefresh = () => {
    setAddress(""); // Clear the input field
  };

  return (
    <div className="flex items-center w-full max-w-md">
      {/* Input Field */}
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="Enter IP address here..."
        className="w-full p-2 border border-gray-300 rounded-l-lg focus:ring focus:ring-blue-400"
      />

      {/* Refresh Button */}
      <button
        onClick={handleRefresh}
        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
        title="Clear"
      >
        🔄
      </button>
    </div>
  );
};

export default InputFieldWithRefresh;
