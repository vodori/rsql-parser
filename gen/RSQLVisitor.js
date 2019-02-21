// Generated from RSQL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RSQLParser.

function RSQLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RSQLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RSQLVisitor.prototype.constructor = RSQLVisitor;

// Visit a parse tree produced by RSQLParser#boolean_value.
RSQLVisitor.prototype.visitBoolean_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#string_value.
RSQLVisitor.prototype.visitString_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#number_value.
RSQLVisitor.prototype.visitNumber_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#multi_value.
RSQLVisitor.prototype.visitMulti_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#single_value.
RSQLVisitor.prototype.visitSingle_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#statement.
RSQLVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#field.
RSQLVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RSQLParser#comparison.
RSQLVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RSQLVisitor = RSQLVisitor;