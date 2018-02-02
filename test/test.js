var assert = require('assert');
var antlr4 = require('antlr4');
var Lexer = require('../gen/RSQLLexer');
var Parser = require('../gen/RSQLParser');
var Visitor = require('../gen/RSQLVisitor');


describe('Parsing', function () {

    describe('basic equality expression', function () {
        it('should parse into a comparison node.', function () {

            var expression = "things=='stuff'";
            var characters = new antlr4.InputStream(expression);
            var lexer = new Lexer.RSQLLexer(characters);
            var tokens = new antlr4.CommonTokenStream(lexer);
            var parser = new Parser.RSQLParser(tokens);

            parser.buildParseTrees = true;
            var tree = parser.statement();
            console.log(tree);

        });
    });


});