import React, { useState } from "react";

const StickySidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Menu data
  const menu = [
    {
      name: "Detection",
      subOptions: ["Sub-section 1.1", "Sub-section 1.2", "Sub-section 1.3"],
    },
    {
      name: "Planning",
      subOptions: ["Sub-section 2.1", "Sub-section 2.2", "Sub-section 2.3"],
    },
    {
      name: "Settings",
      subOptions: ["Sub-section 3.1", "Sub-section 3.2", "Sub-section 3.3"],
    },
  ];

  const handleSectionClick = (index) => {
    setActiveSection(activeSection === index ? null : index); // Toggle active section
  };

  return (
    <div className="relative">
      {/* Sticky Left Bar */}
      <div className="sticky top-0 h-screen w-64 bg-blue-600 text-white shadow-lg flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-xl font-bold mt-6">UW-dash</h1>

        {/* Menu Sections */}
        <div className="mt-8 w-full px-4">
          <ul>
            {menu.map((mainOption, index) => (
              <li key={index} className="mb-4">
                {/* Main Section */}
                <button
                  onClick={() => handleSectionClick(index)}
                  className="w-full text-left text-lg font-semibold mb-2 p-2 rounded hover:bg-blue-500"
                >
                  {mainOption.name}
                </button>

                {/* Sub-options (visible only if the section is active) */}
                {activeSection === index && (
                  <ul className="ml-4">
                    {mainOption.subOptions.map((subOption, subIndex) => (
                      <li
                        key={subIndex}
                        className="mb-1 text-sm hover:bg-blue-500 rounded px-2 py-1"
                      >
                        {subOption}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;
