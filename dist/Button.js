"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Button.js

// A functional component that renders a customizable button element
var Button = function Button(_ref) {
  var children = _ref.children,
    color = _ref.color,
    onClick = _ref.onClick,
    type = _ref.type;
  // Base CSS classes for consistent button styling
  var baseClasses = "font-bold py-2 px-4 rounded flex items-center justify-center mt-4";

  // Conditionally apply background color if 'color' prop is provided, default text color is white
  var style = color ? {
    backgroundColor: color,
    color: "white"
  } : {};

  // Renders a button with dynamic type, onClick handler, className, and style properties
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    onClick: onClick,
    className: baseClasses,
    style: style
  }, children);
};

// Export the Button component for use in other parts of the application
var _default = exports["default"] = Button;