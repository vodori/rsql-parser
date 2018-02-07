const antlr4 = require('antlr4');
const Lexer = require('./gen/RSQLLexer');
const Parser = require('./gen/RSQLParser');
const Visitor = require('./gen/RSQLVisitor');

const pull = function (obj, path) {
    if (path.length) {
        const segment = path[0];
        const value = obj[segment];
        if (path.length === 1) {
            return value;
        } else {
            return pull(value, path.slice(1));
        }
    } else {
        return null;
    }
};


const pullPath = function (obj, path) {
    return pull(obj, (path || "").split(".").filter(segment => !!segment));
};

function trim(s, c) {
    if (c === "]") c = "\\]";
    if (c === "\\") c = "\\\\";
    return s.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", "g"), "");
}

const trimQuotes = function (val) {
    if (val.startsWith('"') && val.endsWith('"')) {
        return trim(val, '"');
    } else if (val.startsWith("'") && val.endsWith("'")) {
        return trim(val, "'");
    } else {
        return val;
    }
};

const coerceString = function (s) {
    return trimQuotes(s);
};

const coerceBoolean = function (s) {
    const value = trimQuotes(s);
    if (/true/.test(value)) {
        return true;
    } else if (/false/.test(value)) {
        return false;
    }
};


const coerceNumber = function (s) {
    const value = trimQuotes(s);
    if (/\./.test(value)) {
        return parseFloat(value);
    } else {
        return parseInt(value);
    }
};

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
                        const parseLeft = this.visit(ctx.left);
                        const parseRight = this.visit(ctx.right);
                        return (x) => {
                            return parseLeft(x) && parseRight(x);
                        };
                    }.bind(this))();
                case Lexer.RSQLLexer.OR_OPERATOR:
                    return (function () {
                        const parseLeft = this.visit(ctx.left);
                        const parseRight = this.visit(ctx.right);
                        return (x) => {
                            return parseLeft(x) || parseRight(x);
                        };
                    }.bind(this))();
                default:
                    throw new Error("Unknown operator!");
            }
        } else if (!!ctx.wrapped) {
            return this.visit(ctx.wrapped);
        } else if (!!ctx.node) {
            return this.visit(ctx.node);
        } else {
            throw new Error("I don't recognize this node.")
        }
    };

    Visits.prototype.visitComparison = function (ctx) {
        const key = this.visitField(ctx.target);
        let coerced;
        if (ctx.single) {
            if (key.hint) {
                // if a type hint was provided, dispatch on that instead of the default rules that implement the best guess.
                switch (key.hint) {
                    case ":string":
                        coerced = this.visitString_value(ctx.single);
                        break;
                    case ":boolean":
                        coerced = this.visitBoolean_value(ctx.single);
                        break;
                    case ":number":
                        coerced = this.visitNumber_value(ctx.single);
                        break;
                    default:
                        throw Error("Unrecognized type hint.");
                }
            } else {
                coerced = this.visitSingle_value(ctx.single)[0];
            }
        } else if (ctx.multi) {
            // as we recurse, pass the target along.
            ctx.multi.target = ctx.target;
            coerced = this.visitMulti_value(ctx.multi)[0];
        } else if (ctx.bool) {
            coerced = this.visitBoolean_value(ctx.bool);
        } else if (ctx.regex) {
            coerced = new RegExp(this.visitString_value(ctx.regex));
        }

        return x => {
            const value = pullPath(x, key.key);

            switch (ctx.op.type) {
                case Lexer.RSQLLexer.EQ:
                    return value === coerced;
                case Lexer.RSQLLexer.NE:
                    return value !== coerced;
                case Lexer.RSQLLexer.GT:
                    return value > coerced;
                case Lexer.RSQLLexer.GTE:
                    return value >= coerced;
                case Lexer.RSQLLexer.LT:
                    return value < coerced;
                case Lexer.RSQLLexer.LTE:
                    return value <= coerced;
                case Lexer.RSQLLexer.IN:
                    return false;
                case Lexer.RSQLLexer.NIN:
                    return false;
                case Lexer.RSQLLexer.EX:
                    if (coerced) {
                        return value !== null && value !== undefined;
                    } else {
                        return value === null || value === undefined;
                    }
                case Lexer.RSQLLexer.RE:
                    return value !== null && value !== undefined && coerced.test(value.toString());
                default:
                    throw new Error("Unknown operator.");
            }
        };
    };


    Visits.prototype.visitString_value = function (ctx) {
        return coerceString(ctx.getText());
    };

    Visits.prototype.visitNumber_value = function (ctx) {
        return coerceNumber(ctx.getText())
    };

    Visits.prototype.visitBoolean_value = function (ctx) {
        return coerceBoolean(ctx.getText());
    };

    Visits.prototype.visitField = function (ctx) {
        const field = {};
        field.key = ctx.key.text;
        field.hint = ctx.hint ? ctx.hint.text : null;
        return field;
    };

    return new Visits().visitStatement(tree);
};


exports.PredicateParser = PredicateParser;