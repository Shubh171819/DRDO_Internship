import React from "react";
import StickySidebar from "./components/StickySidebar";
import Dashboard from "./components/Dashboard"; // Import the new Dashboard component

function App() {
  return (
    <div className="flex">
      {/* Sticky Sidebar */}
      <div className="w-1/4">
        <StickySidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4">

        {/* Input Field on the Right */}
        <div className="flex items-start pl-4 mt-4">

        </div>

        {/* Dashboard with Video Upload and Camera Stream */}
        <Dashboard />

      
      </div>
    </div>
  );
}

export default App;
