import React, { useState } from "react";

// Component for a custom slider input with a dynamic visual track
const SliderInput = ({
  name,
  min,
  max,
  step,
  updateFormData,
  label,
  color = "#3498db",
}) => {
  const [value, setValue] = useState(min); // Initialize slider with the minimum value

  // Handle slider value changes
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue); // Update local state with the new slider value
    updateFormData(name, newValue); // Propagate the change up to the form's state
  };

  // Style for the slider's track, showing progress as the user slides
  const trackBeforeStyle = {
    backgroundImage: `linear-gradient(to right, ${color} 0%, ${color} ${
      ((value - min) / (max - min)) * 100
    }%, #ddd ${((value - min) / (max - min)) * 100}%, #ddd 100%)`,
  };

  return (
    <div className="flex flex-col items-center my-4">
      <label htmlFor={name} className="mb-2 text-gray-700">
        {label}: {value}
      </label>
      <div className="flex items-center w-full">
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider-thumb w-full h-2 cursor-pointer appearance-none rounded-md"
          style={trackBeforeStyle}
        />
      </div>
    </div>
  );
};

export default SliderInput;
