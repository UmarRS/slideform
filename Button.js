// Button.js
import React from "react";

// A functional component that renders a customizable button element
const Button = ({ children, color, onClick, type }) => {
  // Base CSS classes for consistent button styling
  const baseClasses =
    "font-bold py-2 px-4 rounded flex items-center justify-center mt-4";

  // Conditionally apply background color if 'color' prop is provided, default text color is white
  const style = color ? { backgroundColor: color, color: "white" } : {};

  // Renders a button with dynamic type, onClick handler, className, and style properties
  return (
    <button type={type} onClick={onClick} className={baseClasses} style={style}>
      {children}
    </button>
  );
};

// Export the Button component for use in other parts of the application
export default Button;
