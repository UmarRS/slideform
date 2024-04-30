import React from "react";

// Component to render a single page within a multi-page form
const Page = ({ number, children, currentPage, ...props }) => {
  // Only render the page if it's the current one
  if (number !== currentPage) return null;

  // Pass down additional props to all children elements
  return (
    <div className="page">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...props })
          : child
      )}
    </div>
  );
};

export default Page;
