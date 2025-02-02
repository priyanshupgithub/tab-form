import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const MainComponent = () => {
  const headings = [
    { name: "Profile", component: <Profile /> },
    { name: "Interest", component: <Interest /> },
    { name: "Settings", component: <Settings /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, headings.length - 1)); // Ensure it does not exceed max index
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0)); // Ensure it does not go below zero
  };

  const handleSubmit = () => {
    // API call logic (if needed)
    console.log("Form submitted");
  };

  return (
    <div>
      <div className="border flex flex-col border-black h-[27rem] rounded-lg bg-gray-200 max-w-[85%]">
        <div className="w-[100%] flex space-x-5 p-3 border-b border-gray-400">
          {headings.map((heading, index) => (
            <div
              key={index}
              className={`h-min w-[100%] shadow-lg bg-gray-300 border border-gray-500 rounded-lg p-1 cursor-pointer hover:scale-105 hover:bg-gray-400 text-sm font-bold duration-150 ${
                activeIndex === index ? "bg-gray-400" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {heading.name}
            </div>
          ))}
        </div>

        {/* Display active component */}
        {headings[activeIndex].component}

        {/* Navigation Buttons */}
        <div className="mt-2 flex space-x-3 ml-5">
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="border border-gray-500 p-1 cursor-pointer hover:bg-gray-400 rounded-lg bg-gray-300 font-bold"
            >
              Prev
            </button>
          )}
          {activeIndex < headings.length - 1 && (
            <button
              onClick={handleNext}
              className="border border-gray-500 p-1 cursor-pointer hover:bg-gray-400 rounded-lg bg-gray-300 font-bold"
            >
              Next
            </button>
          )}
          {activeIndex === headings.length - 1 && (
            <button
              onClick={handleSubmit}
              className="border border-gray-500 p-1 cursor-pointer hover:bg-gray-400 rounded-lg bg-gray-300 font-bold"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
