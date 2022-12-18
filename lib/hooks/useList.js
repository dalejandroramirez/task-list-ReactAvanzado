"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = require("react");
var _reactDom = require("react-dom");
var useList = function useList() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _useState = (0, _react.useState)(initialValue),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  // Push new value to list
  var push = function push(element) {
    setValue(function (oldValue) {
      return [].concat((0, _toConsumableArray2["default"])(oldValue), [element]);
    });
  };

  // Remove Value from list
  var remove = function remove(index) {
    setValue(function (oldValue) {
      return oldValue.filter(function (_, i) {
        return i !== index;
      });
    });
  };

  // List is Empty ? true/ false
  var isEmpty = function isEmpty() {
    return value.length === 0;
  };
  var lenList = function lenList() {
    return value.length;
  };
  var removeList = function removeList() {
    setValue([]);
  };
  var sortList = function sortList(list) {
    (0, _reactDom.render)();
    list.sort();
  };
  var reverseList = function reverseList(list) {
    list.reverse();
  };
  return {
    value: value,
    setValue: setValue,
    push: push,
    remove: remove,
    isEmpty: isEmpty,
    lenList: lenList,
    removeList: removeList,
    sortList: sortList,
    reverseList: reverseList
  };
};
var _default = useList;
exports["default"] = _default;