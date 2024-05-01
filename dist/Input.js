"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Functional component for rendering a styled input field with a floating label
var Input = function Input(_ref) {
  var name = _ref.name,
    title = _ref.title,
    type = _ref.type,
    hint = _ref.hint,
    updateFormData = _ref.updateFormData,
    _ref$mandatory = _ref.mandatory,
    mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative border-2 border-gray-300 rounded mb-4 w-full"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: type,
    placeholder: title,
    name: name,
    onChange: function onChange(e) {
      return updateFormData(e.target.name, e.target.value, mandatory);
    },
    className: "w-full p-2 rounded bg-transparent focus:outline-none",
    style: {
      paddingTop: "1.75rem"
    } // Padding for label positioning
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: "absolute top-0 left-2 px-1 text-gray-500 bg-white",
    style: {
      transform: "translateY(50%)",
      fontSize: "0.75rem"
    }
  }, hint));
};
var _default = exports["default"] = Input;