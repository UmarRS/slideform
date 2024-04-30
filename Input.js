import React from "react";

// Functional component for rendering a styled input field with a floating label
const Input = ({
  name,
  title,
  type,
  hint,
  updateFormData,
  mandatory = false,
}) => {
  return (
    <div className="relative border-2 border-gray-300 rounded mb-4 w-full">
      <input
        type={type}
        placeholder={title}
        name={name}
        onChange={(e) =>
          updateFormData(e.target.name, e.target.value, mandatory)
        }
        className="w-full p-2 rounded bg-transparent focus:outline-none"
        style={{ paddingTop: "1.75rem" }} // Padding for label positioning
      />
      <label
        htmlFor={name}
        className="absolute top-0 left-2 px-1 text-gray-500 bg-white"
        style={{ transform: "translateY(50%)", fontSize: "0.75rem" }}
      >
        {hint}
      </label>
    </div>
  );
};

export default Input;
