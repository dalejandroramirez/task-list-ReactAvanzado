"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Settings;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _useLocalStorege3 = _interopRequireDefault(require("../../hooks/useLocalStorege"));
var defaultConfig = {
  theme: 'dark',
  lang: 'es'
};
function Settings() {
  var _useLocalStorege = (0, _useLocalStorege3["default"])({
      key: 'config',
      defaultValue: defaultConfig
    }),
    _useLocalStorege2 = (0, _slicedToArray2["default"])(_useLocalStorege, 2),
    config = _useLocalStorege2[0],
    setConfig = _useLocalStorege2[1];
  var handleClick = function handleClick(event) {
    event.preventDefault();
    setConfig(function (oldConfig) {
      return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, oldConfig), {}, {
        theme: 'ligth'
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "APP SETTINGS"), /*#__PURE__*/_react["default"].createElement("p", null, "Actual Config:", config), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleClick
  }, "SaveNew Settings"));
}