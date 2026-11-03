"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Generated from RSQL.g4 by ANTLR 4.13.0
// jshint ignore: start

// This class defines a complete listener for a parse tree produced by RSQLParser.
class RSQLListener extends _antlr.default.tree.ParseTreeListener {
  // Enter a parse tree produced by RSQLParser#boolean_value.
  enterBoolean_value(ctx) {}

  // Exit a parse tree produced by RSQLParser#boolean_value.
  exitBoolean_value(ctx) {}

  // Enter a parse tree produced by RSQLParser#string_value.
  enterString_value(ctx) {}

  // Exit a parse tree produced by RSQLParser#string_value.
  exitString_value(ctx) {}

  // Enter a parse tree produced by RSQLParser#number_value.
  enterNumber_value(ctx) {}

  // Exit a parse tree produced by RSQLParser#number_value.
  exitNumber_value(ctx) {}

  // Enter a parse tree produced by RSQLParser#multi_value.
  enterMulti_value(ctx) {}

  // Exit a parse tree produced by RSQLParser#multi_value.
  exitMulti_value(ctx) {}

  // Enter a parse tree produced by RSQLParser#single_value.
  enterSingle_value(ctx) {}

  // Exit a parse tree produced by RSQLParser#single_value.
  exitSingle_value(ctx) {}

  // Enter a parse tree produced by RSQLParser#statement.
  enterStatement(ctx) {}

  // Exit a parse tree produced by RSQLParser#statement.
  exitStatement(ctx) {}

  // Enter a parse tree produced by RSQLParser#field.
  enterField(ctx) {}

  // Exit a parse tree produced by RSQLParser#field.
  exitField(ctx) {}

  // Enter a parse tree produced by RSQLParser#comparison.
  enterComparison(ctx) {}

  // Exit a parse tree produced by RSQLParser#comparison.
  exitComparison(ctx) {}
}
exports.default = RSQLListener;