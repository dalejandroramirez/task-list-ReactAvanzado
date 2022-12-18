"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = require("react");
var useLocalStorege = function useLocalStorege(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
    _ref$key = _ref.key,
    key = _ref$key === void 0 ? 'config' : _ref$key;
  var _useState = (0, _react.useState)(function () {
      try {
        var item = localStorage.getItem(key);
        if (item !== null) {
          return JSON.parse(item);
        }
        return defaultValue;
      } catch (error) {
        return defaultValue;
      }
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  (0, _react.useEffect)(function () {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
var _default = useLocalStorege;
exports["default"] = _default;