"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _useList = _interopRequireDefault(require("../../hooks/useList"));
var _useConter = _interopRequireDefault(require("../../hooks/useConter"));
var TaskList = function TaskList() {
  var tasks = (0, _useList["default"])([]);
  var numTasks = (0, _useConter["default"])(tasks.lenList);
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    newTask = _useState2[0],
    setNewTask = _useState2[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    tasks.push(newTask);
    numTasks.increment(6);
    setNewTask('');
  };
  var addNewTask = function addNewTask() {
    tasks.push(newTask);
    numTasks.increment();
    setNewTask("");
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Task List"), tasks.isEmpty() ? null : /*#__PURE__*/_react["default"].createElement("h3", null, "Do you have", ' ', numTasks.value, ' ', "Task"), /*#__PURE__*/_react["default"].createElement("div", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("input", {
    value: newTask,
    onChange: function onChange(e) {
      return setNewTask(e.target.value);
    },
    placeholder: "New Task",
    type: "text"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: addNewTask
  }, " Create Task")), tasks.isEmpty() ? /*#__PURE__*/_react["default"].createElement("p", null, "Task List is Empty") : /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, tasks.value.map(function (task, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      onClick: function onClick() {
        numTasks.decrement();
        tasks.remove(index);
      },
      checked: false
    }), task);
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return tasks.removeList();
    }
  }, "Restar"));
};
var _default = TaskList;
exports["default"] = _default;