import React, { useState } from "react";

const Settings = () => {
  const availableThemes = ["light", "dark"];
  const [theme, setTheme] = useState("");

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold text-lg mb-2 w-max">Select the Theme:</h3>
      <div className="space-y-2">
        {availableThemes.map((themeOption, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="theme"
              value={themeOption}
              onChange={(e) => setTheme(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm">{themeOption}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 w-max">
        <h4 className="font-semibold">Selected Theme:</h4>
        <p className="text-sm">{theme || "No theme selected"}</p>
      </div>
    </div>
  );
};

export default Settings;
