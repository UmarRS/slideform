"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("tailwindcss/tailwind.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Form = function Form(_ref) {
  var title = _ref.title,
    children = _ref.children,
    onSubmit = _ref.onSubmit;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1]; // Tracks current page of form
  var _useState3 = (0, _react.useState)("entering"),
    _useState4 = _slicedToArray(_useState3, 2),
    transitionStage = _useState4[0],
    setTransitionStage = _useState4[1]; // Manages animation states
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    formData = _useState6[0],
    setFormData = _useState6[1]; // Stores form input values
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    formValidation = _useState8[0],
    setFormValidation = _useState8[1]; // Tracks input validity
  var totalPages = _react.Children.count(children); // Total number of pages in form

  // Advances to next page or triggers submit if end of form
  var goToNextPage = function goToNextPage() {
    if (currentPage < totalPages && canProceed()) {
      setTransitionStage("exiting");
      setTimeout(function () {
        setCurrentPage(function (current) {
          return current + 1;
        });
        setTransitionStage("entering");
      }, 300); // Sync with CSS animation
    } else {
      onSubmit(formData);
    }
  };

  // Updates form state and validation status
  var updateFormData = function updateFormData(name, value, isValid) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
    setFormValidation(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, isValid));
    });
  };

  // Checks if current page can proceed to the next
  var canProceed = function canProceed() {
    return _react.Children.toArray(children)[currentPage - 1].props.children.filter(function (child) {
      return child.props.mandatory;
    }).every(function (child) {
      return formValidation[child.props.name];
    });
  };

  // Renders form pages with transitions
  var renderPages = function renderPages() {
    return _react["default"].Children.map(children, function (child, index) {
      if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
        var childClass = index + 1 === currentPage ? "translate-x-0" : index + 1 < currentPage ? "-translate-x-full" : "translate-x-full";
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          className: "transform transition-transform duration-300 ".concat(childClass)
        }, /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
          updateFormData: updateFormData,
          formData: formData,
          goToNextPage: goToNextPage,
          key: index,
          currentPage: currentPage
        })));
      }
      return null;
    });
  };

  // Handles form submission, either moving to next page or submitting data
  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    if (currentPage === totalPages && canProceed()) {
      onSubmit(formData);
    } else {
      goToNextPage();
    }
  };

  // Form layout and structure
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4 sm:p-8 md:p-12 my-10 bg-white rounded w-full mx-auto"
  }, title && /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl font-bold text-center mb-8"
  }, title), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, renderPages())));
};
var _default = exports["default"] = Form;