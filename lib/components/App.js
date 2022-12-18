"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var React = _interopRequireWildcard(require("react"));
var _TodoList = _interopRequireDefault(require("./lists/TodoList"));
// import Settings from './settings/Settings';

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_TodoList["default"], null));
}