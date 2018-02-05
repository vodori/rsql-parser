// Generated from RSQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RSQLParser.
function RSQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RSQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RSQLListener.prototype.constructor = RSQLListener;

// Enter a parse tree produced by RSQLParser#statement.
RSQLListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by RSQLParser#statement.
RSQLListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by RSQLParser#comparison.
RSQLListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by RSQLParser#comparison.
RSQLListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by RSQLParser#string_value.
RSQLListener.prototype.enterString_value = function(ctx) {
};

// Exit a parse tree produced by RSQLParser#string_value.
RSQLListener.prototype.exitString_value = function(ctx) {
};


// Enter a parse tree produced by RSQLParser#boolean_value.
RSQLListener.prototype.enterBoolean_value = function(ctx) {
};

// Exit a parse tree produced by RSQLParser#boolean_value.
RSQLListener.prototype.exitBoolean_value = function(ctx) {
};


// Enter a parse tree produced by RSQLParser#single_value.
RSQLListener.prototype.enterSingle_value = function(ctx) {
};

// Exit a parse tree produced by RSQLParser#single_value.
RSQLListener.prototype.exitSingle_value = function(ctx) {
};


// Enter a parse tree produced by RSQLParser#multi_value.
RSQLListener.prototype.enterMulti_value = function(ctx) {
};

// Exit a parse tree produced by RSQLParser#multi_value.
RSQLListener.prototype.exitMulti_value = function(ctx) {
};



exports.RSQLListener = RSQLListener;