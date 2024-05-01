import React, { useState, Children } from "react";
import "tailwindcss/tailwind.css";

const Form = ({ title, children, onSubmit }) => {
  const [currentPage, setCurrentPage] = useState(1); // Tracks current page of form
  const [transitionStage, setTransitionStage] = useState("entering"); // Manages animation states
  const [formData, setFormData] = useState({}); // Stores form input values
  const [formValidation, setFormValidation] = useState({}); // Tracks input validity
  const totalPages = Children.count(children); // Total number of pages in form

  // Advances to next page or triggers submit if end of form
  const goToNextPage = () => {
    if (currentPage < totalPages && canProceed()) {
      setTransitionStage("exiting");
      setTimeout(() => {
        setCurrentPage((current) => current + 1);
        setTransitionStage("entering");
      }, 300); // Sync with CSS animation
    } else {
      onSubmit(formData);
    }
  };

  // Updates form state and validation status
  const updateFormData = (name, value, isValid) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormValidation((prev) => ({ ...prev, [name]: isValid }));
  };

  // Checks if current page can proceed to the next
  const canProceed = () => {
    return Children.toArray(children)
      [currentPage - 1].props.children.filter((child) => child.props.mandatory)
      .every((child) => formValidation[child.props.name]);
  };

  // Renders form pages with transitions
  const renderPages = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        let childClass =
          index + 1 === currentPage
            ? "translate-x-0"
            : index + 1 < currentPage
            ? "-translate-x-full"
            : "translate-x-full";
        return (
          <div
            key={index}
            className={`transform transition-transform duration-300 ${childClass}`}
          >
            {React.cloneElement(child, {
              ...child.props,
              updateFormData,
              formData,
              goToNextPage,
              key: index,
              currentPage,
            })}
          </div>
        );
      }
      return null;
    });
  };

  // Handles form submission, either moving to next page or submitting data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentPage === totalPages && canProceed()) {
      onSubmit(formData);
    } else {
      goToNextPage();
    }
  };

  // Form layout and structure
  return (
    <div className="p-4 sm:p-8 md:p-12 my-10 bg-white rounded w-full mx-auto">
      {title && (
        <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
      )}
      <form onSubmit={handleFormSubmit}>
        <div className="w-full">{renderPages()}</div>
      </form>
    </div>
  );
};

export default Form;
