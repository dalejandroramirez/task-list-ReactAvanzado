"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _react = require("@testing-library/react");
var _TodoList = _interopRequireDefault(require("./TodoList"));
// 0 - Renderizado del componente

describe("Renderizar el componente", function () {
  test("Renderizar el componente", function () {
    var r = (0, _react.render)( /*#__PURE__*/React.createElement(_TodoList["default"], null));
    expect(r).toBeDefined();
  });
});