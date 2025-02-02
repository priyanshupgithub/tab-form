import React, { useState } from 'react';

const Interest = () => {
  const interests = ["Cricket", "Football", "Coding", "Chess", "StandUp"];
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests([...selectedInterests, value]);
    } else {
      setSelectedInterests(selectedInterests.filter((interest) => interest !== value));
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold text-lg mb-2 w-max">Choose Interests:</h3>
      <div className="space-y-2">
        {interests.map((interest) => (
          <label key={interest} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              value={interest}
              checked={selectedInterests.includes(interest)}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-sm">{interest}</span>
          </label>
        ))}
      </div>
      <div className="mt-4 w-max">
        <h4 className="font-semibold">Selected Interests:</h4>
        {selectedInterests.length > 0 ? (
          <ul className="list-disc pl-4 text-sm w-min">
            {selectedInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No interests selected.</p>
        )}
      </div>
    </div>
  );
};

export default Interest;
