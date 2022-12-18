"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = require("react");
var useConter = function useConter() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  // incrementar
  var increment = function increment() {
    var maxValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    if (value < maxValue) {
      setValue(value + 1);
    } else {
      setValue(maxValue);
    }
  };
  var decrement = function decrement() {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };
  var reset = function reset(initialValue) {
    setValue(initialValue);
  };
  var incrementStep = function incrementStep(step) {
    setValue(value + step);
  };
  return {
    value: value,
    setValue: setValue,
    increment: increment,
    decrement: decrement,
    incrementStep: incrementStep,
    reset: reset
  };
};
var _default = useConter;
exports["default"] = _default;