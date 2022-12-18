"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _App = _interopRequireDefault(require("./components/App"));
require("./styles/css/index.scss");
// Importar de React

// Importar Redux
// import { Provider } from "react-redux"

// Importar hojas de estilos

// Si se trabaja con redux crear el Store y aplicar el middleware de redux Saga

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.getElementById('root'));