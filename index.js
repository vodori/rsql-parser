const antlr4 = require('antlr4');
const Lexer = require('./gen/RSQLLexer');
const Parser = require('./gen/RSQLParser');
const Visitor = require('./gen/RSQLVisitor');

const PredicateParser = function () {

};

PredicateParser.prototype.parse = function (s) {
    const characters = new antlr4.InputStream(s);
    const lexer = new Lexer.RSQLLexer(characters);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new Parser.RSQLParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.statement();

    const Visits = function () {
        Visitor.RSQLVisitor.call(this);
        return this;
    };

    Visits.prototype = Object.create(Visitor.RSQLVisitor.prototype);

    Visits.prototype.constructor = Visits;

    Visits.prototype.visitStatement = function (ctx) {
        if (ctx.left && ctx.op && ctx.right) {
            switch (ctx.op.type) {
                case Lexer.RSQLLexer.AND_OPERATOR:
                    return (function () {
                        const parseLeft = this.visitStatement(ctx.left);
                        const parseRight = this.visitStatement(ctx.right);
                        return (x) => {
                            return parseLeft(x) && parseRight(x);
                        };
                    }.bind(this))();
                case Lexer.RSQLLexer.OR_OPERATOR:
                    return (function () {
                        const parseLeft = this.visitStatement(ctx.left);
                        const parseRight = this.visitStatement(ctx.right);
                        return (x) => {
                            return parseLeft(x) || parseRight(x);
                        };
                    }.bind(this))();
                default:
                    throw new Error("Unknown operator!");
            }
        } else if (!!ctx.wrapped) {
            return this.visitStatement(ctx.wrapped);
        } else if (!!ctx.node) {
            return this.visitComparison(ctx.node);
        } else {
            throw new Error("I don't recognize this node.")
        }
    };

    Visits.prototype.visitComparison = function (ctx) {
        if (ctx.op.type === Lexer.RSQLLexer.EX) {
            const lookup = {"true": true, "false": false};
            const shouldExist = lookup[ctx.bool.getText()];
            return x => {
                if (shouldExist) {
                    return !!x[ctx.key.text];
                } else {
                    return !x[ctx.key.text];
                }
            };
        }

    };

    return new Visits().visitStatement(tree);
};


exports.PredicateParser = PredicateParser;