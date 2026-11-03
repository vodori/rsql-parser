"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Generated from RSQL.g4 by ANTLR 4.13.0
// jshint ignore: start

// This class defines a complete generic visitor for a parse tree produced by RSQLParser.

class RSQLVisitor extends _antlr.default.tree.ParseTreeVisitor {
  // Visit a parse tree produced by RSQLParser#boolean_value.
  visitBoolean_value(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#string_value.
  visitString_value(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#number_value.
  visitNumber_value(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#multi_value.
  visitMulti_value(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#single_value.
  visitSingle_value(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#statement.
  visitStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#field.
  visitField(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by RSQLParser#comparison.
  visitComparison(ctx) {
    return this.visitChildren(ctx);
  }
}
exports.default = RSQLVisitor;