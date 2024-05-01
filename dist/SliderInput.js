"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Component for a custom slider input with a dynamic visual track
var SliderInput = function SliderInput(_ref) {
  var name = _ref.name,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    updateFormData = _ref.updateFormData,
    label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#3498db" : _ref$color;
  var _useState = (0, _react.useState)(min),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1]; // Initialize slider with the minimum value

  // Handle slider value changes
  var handleChange = function handleChange(e) {
    var newValue = e.target.value;
    setValue(newValue); // Update local state with the new slider value
    updateFormData(name, newValue); // Propagate the change up to the form's state
  };

  // Style for the slider's track, showing progress as the user slides
  var trackBeforeStyle = {
    backgroundImage: "linear-gradient(to right, ".concat(color, " 0%, ").concat(color, " ").concat((value - min) / (max - min) * 100, "%, #ddd ").concat((value - min) / (max - min) * 100, "%, #ddd 100%)")
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center my-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: "mb-2 text-gray-700"
  }, label, ": ", value), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center w-full"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    name: name,
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: handleChange,
    className: "slider-thumb w-full h-2 cursor-pointer appearance-none rounded-md",
    style: trackBeforeStyle
  })));
};
var _default = exports["default"] = SliderInput;