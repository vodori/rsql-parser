// Generated from RSQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RSQLListener = require('./RSQLListener').RSQLListener;
var RSQLVisitor = require('./RSQLVisitor').RSQLVisitor;

var grammarFileName = "RSQL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001cX\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004&\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005,\n\u0005\f\u0005\u000e",
    "\u0005/\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "4\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u00069\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u0007D\n\u0007\f\u0007\u000e\u0007",
    "G\u000b\u0007\u0003\b\u0003\b\u0003\b\u0005\bL\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tV\n\t\u0003\t\u0002",
    "\u0003\f\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0007\u0003\u0002",
    "\t\n\u0003\u0002\u001a\u001c\u0004\u0002\u0006\u0006\b\b\u0004\u0002",
    "\u000b\f\u000f\u0014\u0003\u0002\r\u000e\u0002[\u0002\u001a\u0003\u0002",
    "\u0002\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006%\u0003\u0002",
    "\u0002\u0002\b3\u0003\u0002\u0002\u0002\n8\u0003\u0002\u0002\u0002\f",
    ":\u0003\u0002\u0002\u0002\u000eK\u0003\u0002\u0002\u0002\u0010U\u0003",
    "\u0002\u0002\u0002\u0012\u001b\u0007\t\u0002\u0002\u0013\u001b\u0007",
    "\n\u0002\u0002\u0014\u0015\u0007\u0003\u0002\u0002\u0015\u0016\t\u0002",
    "\u0002\u0002\u0016\u001b\u0007\u0003\u0002\u0002\u0017\u0018\u0007\u0004",
    "\u0002\u0002\u0018\u0019\t\u0002\u0002\u0002\u0019\u001b\u0007\u0004",
    "\u0002\u0002\u001a\u0012\u0003\u0002\u0002\u0002\u001a\u0013\u0003\u0002",
    "\u0002\u0002\u001a\u0014\u0003\u0002\u0002\u0002\u001a\u0017\u0003\u0002",
    "\u0002\u0002\u001b\u0003\u0003\u0002\u0002\u0002\u001c\u001d\t\u0003",
    "\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e&\u0007\u0016",
    "\u0002\u0002\u001f \u0007\u0003\u0002\u0002 !\u0007\u0016\u0002\u0002",
    "!&\u0007\u0003\u0002\u0002\"#\u0007\u0004\u0002\u0002#$\u0007\u0016",
    "\u0002\u0002$&\u0007\u0004\u0002\u0002%\u001e\u0003\u0002\u0002\u0002",
    "%\u001f\u0003\u0002\u0002\u0002%\"\u0003\u0002\u0002\u0002&\u0007\u0003",
    "\u0002\u0002\u0002\'(\u0007\u0005\u0002\u0002(-\u0005\n\u0006\u0002",
    ")*\u0007\u0006\u0002\u0002*,\u0005\n\u0006\u0002+)\u0003\u0002\u0002",
    "\u0002,/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002.0\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000201\u0007",
    "\u0007\u0002\u000214\u0003\u0002\u0002\u000224\u0005\n\u0006\u00023",
    "\'\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u00024\t\u0003\u0002",
    "\u0002\u000259\u0005\u0002\u0002\u000269\u0005\u0006\u0004\u000279\u0005",
    "\u0004\u0003\u000285\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u0002",
    "87\u0003\u0002\u0002\u00029\u000b\u0003\u0002\u0002\u0002:;\b\u0007",
    "\u0001\u0002;<\u0005\u0010\t\u0002<=\u0007\u0002\u0002\u0003=E\u0003",
    "\u0002\u0002\u0002>?\f\u0004\u0002\u0002?@\t\u0004\u0002\u0002@A\u0005",
    "\f\u0007\u0002AB\u0007\u0002\u0002\u0003BD\u0003\u0002\u0002\u0002C",
    ">\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002F\r\u0003\u0002\u0002\u0002GE\u0003",
    "\u0002\u0002\u0002HI\u0007\u001c\u0002\u0002IL\u0007\u0015\u0002\u0002",
    "JL\u0007\u001c\u0002\u0002KH\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002",
    "\u0002L\u000f\u0003\u0002\u0002\u0002MN\u0005\u000e\b\u0002NO\t\u0005",
    "\u0002\u0002OP\u0005\n\u0006\u0002PV\u0003\u0002\u0002\u0002QR\u0005",
    "\u000e\b\u0002RS\t\u0006\u0002\u0002ST\u0005\b\u0005\u0002TV\u0003\u0002",
    "\u0002\u0002UM\u0003\u0002\u0002\u0002UQ\u0003\u0002\u0002\u0002V\u0011",
    "\u0003\u0002\u0002\u0002\n\u001a%-38EKU"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'''", "'\"'", "'('", "','", "')'", "';'", "'true'", 
                     "'false'", "'=='", "'!='", "'=in='", "'=out='", "'=gt='", 
                     "'=lt='", "'=ge='", "'=le='", "'=ex='", "'=re='" ];

var symbolicNames = [ null, null, null, null, null, null, null, "TRUE", 
                      "FALSE", "EQ", "NE", "IN", "NIN", "GT", "LT", "GTE", 
                      "LTE", "EX", "RE", "TYPE_HINT", "NUMERIC_LITERAL", 
                      "UNQUOTED_NUMBER", "SINGLE_QUOTED_NUMERIC", "DOUBLE_QUOTED_NUMERIC", 
                      "SINGLE_QUOTED_STRING", "DOUBLE_QUOTED_STRING", "IDENTIFIER" ];

var ruleNames =  [ "boolean_value", "string_value", "number_value", "multi_value", 
                   "single_value", "statement", "field", "comparison" ];

function RSQLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RSQLParser.prototype = Object.create(antlr4.Parser.prototype);
RSQLParser.prototype.constructor = RSQLParser;

Object.defineProperty(RSQLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RSQLParser.EOF = antlr4.Token.EOF;
RSQLParser.T__0 = 1;
RSQLParser.T__1 = 2;
RSQLParser.T__2 = 3;
RSQLParser.T__3 = 4;
RSQLParser.T__4 = 5;
RSQLParser.T__5 = 6;
RSQLParser.TRUE = 7;
RSQLParser.FALSE = 8;
RSQLParser.EQ = 9;
RSQLParser.NE = 10;
RSQLParser.IN = 11;
RSQLParser.NIN = 12;
RSQLParser.GT = 13;
RSQLParser.LT = 14;
RSQLParser.GTE = 15;
RSQLParser.LTE = 16;
RSQLParser.EX = 17;
RSQLParser.RE = 18;
RSQLParser.TYPE_HINT = 19;
RSQLParser.NUMERIC_LITERAL = 20;
RSQLParser.UNQUOTED_NUMBER = 21;
RSQLParser.SINGLE_QUOTED_NUMERIC = 22;
RSQLParser.DOUBLE_QUOTED_NUMERIC = 23;
RSQLParser.SINGLE_QUOTED_STRING = 24;
RSQLParser.DOUBLE_QUOTED_STRING = 25;
RSQLParser.IDENTIFIER = 26;

RSQLParser.RULE_boolean_value = 0;
RSQLParser.RULE_string_value = 1;
RSQLParser.RULE_number_value = 2;
RSQLParser.RULE_multi_value = 3;
RSQLParser.RULE_single_value = 4;
RSQLParser.RULE_statement = 5;
RSQLParser.RULE_field = 6;
RSQLParser.RULE_comparison = 7;

function Boolean_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_boolean_value;
    return this;
}

Boolean_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Boolean_valueContext.prototype.constructor = Boolean_valueContext;

Boolean_valueContext.prototype.TRUE = function() {
    return this.getToken(RSQLParser.TRUE, 0);
};

Boolean_valueContext.prototype.FALSE = function() {
    return this.getToken(RSQLParser.FALSE, 0);
};

Boolean_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterBoolean_value(this);
	}
};

Boolean_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitBoolean_value(this);
	}
};

Boolean_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitBoolean_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.Boolean_valueContext = Boolean_valueContext;

RSQLParser.prototype.boolean_value = function() {

    var localctx = new Boolean_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RSQLParser.RULE_boolean_value);
    var _la = 0; // Token type
    try {
        this.state = 24;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RSQLParser.TRUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            this.match(RSQLParser.TRUE);
            break;
        case RSQLParser.FALSE:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
            this.match(RSQLParser.FALSE);
            break;
        case RSQLParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 18;
            this.match(RSQLParser.T__0);
            this.state = 19;
            _la = this._input.LA(1);
            if(!(_la===RSQLParser.TRUE || _la===RSQLParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 20;
            this.match(RSQLParser.T__0);
            break;
        case RSQLParser.T__1:
            this.enterOuterAlt(localctx, 4);
            this.state = 21;
            this.match(RSQLParser.T__1);
            this.state = 22;
            _la = this._input.LA(1);
            if(!(_la===RSQLParser.TRUE || _la===RSQLParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 23;
            this.match(RSQLParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function String_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_string_value;
    return this;
}

String_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_valueContext.prototype.constructor = String_valueContext;

String_valueContext.prototype.IDENTIFIER = function() {
    return this.getToken(RSQLParser.IDENTIFIER, 0);
};

String_valueContext.prototype.SINGLE_QUOTED_STRING = function() {
    return this.getToken(RSQLParser.SINGLE_QUOTED_STRING, 0);
};

String_valueContext.prototype.DOUBLE_QUOTED_STRING = function() {
    return this.getToken(RSQLParser.DOUBLE_QUOTED_STRING, 0);
};

String_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterString_value(this);
	}
};

String_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitString_value(this);
	}
};

String_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitString_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.String_valueContext = String_valueContext;

RSQLParser.prototype.string_value = function() {

    var localctx = new String_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RSQLParser.RULE_string_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RSQLParser.SINGLE_QUOTED_STRING) | (1 << RSQLParser.DOUBLE_QUOTED_STRING) | (1 << RSQLParser.IDENTIFIER))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Number_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_number_value;
    return this;
}

Number_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Number_valueContext.prototype.constructor = Number_valueContext;

Number_valueContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(RSQLParser.NUMERIC_LITERAL, 0);
};

Number_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterNumber_value(this);
	}
};

Number_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitNumber_value(this);
	}
};

Number_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitNumber_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.Number_valueContext = Number_valueContext;

RSQLParser.prototype.number_value = function() {

    var localctx = new Number_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RSQLParser.RULE_number_value);
    try {
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RSQLParser.NUMERIC_LITERAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.match(RSQLParser.NUMERIC_LITERAL);
            break;
        case RSQLParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(RSQLParser.T__0);
            this.state = 30;
            this.match(RSQLParser.NUMERIC_LITERAL);
            this.state = 31;
            this.match(RSQLParser.T__0);
            break;
        case RSQLParser.T__1:
            this.enterOuterAlt(localctx, 3);
            this.state = 32;
            this.match(RSQLParser.T__1);
            this.state = 33;
            this.match(RSQLParser.NUMERIC_LITERAL);
            this.state = 34;
            this.match(RSQLParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Multi_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_multi_value;
    return this;
}

Multi_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multi_valueContext.prototype.constructor = Multi_valueContext;

Multi_valueContext.prototype.single_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Single_valueContext);
    } else {
        return this.getTypedRuleContext(Single_valueContext,i);
    }
};

Multi_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterMulti_value(this);
	}
};

Multi_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitMulti_value(this);
	}
};

Multi_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitMulti_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.Multi_valueContext = Multi_valueContext;

RSQLParser.prototype.multi_value = function() {

    var localctx = new Multi_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RSQLParser.RULE_multi_value);
    var _la = 0; // Token type
    try {
        this.state = 49;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RSQLParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.match(RSQLParser.T__2);
            this.state = 38;
            this.single_value();
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RSQLParser.T__3) {
                this.state = 39;
                this.match(RSQLParser.T__3);
                this.state = 40;
                this.single_value();
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 46;
            this.match(RSQLParser.T__4);
            break;
        case RSQLParser.T__0:
        case RSQLParser.T__1:
        case RSQLParser.TRUE:
        case RSQLParser.FALSE:
        case RSQLParser.NUMERIC_LITERAL:
        case RSQLParser.SINGLE_QUOTED_STRING:
        case RSQLParser.DOUBLE_QUOTED_STRING:
        case RSQLParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.single_value();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Single_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_single_value;
    return this;
}

Single_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_valueContext.prototype.constructor = Single_valueContext;

Single_valueContext.prototype.boolean_value = function() {
    return this.getTypedRuleContext(Boolean_valueContext,0);
};

Single_valueContext.prototype.number_value = function() {
    return this.getTypedRuleContext(Number_valueContext,0);
};

Single_valueContext.prototype.string_value = function() {
    return this.getTypedRuleContext(String_valueContext,0);
};

Single_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterSingle_value(this);
	}
};

Single_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitSingle_value(this);
	}
};

Single_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitSingle_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.Single_valueContext = Single_valueContext;

RSQLParser.prototype.single_value = function() {

    var localctx = new Single_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RSQLParser.RULE_single_value);
    try {
        this.state = 54;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 51;
            this.boolean_value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 52;
            this.number_value();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 53;
            this.string_value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_statement;
    this.left = null; // StatementContext
    this.node = null; // ComparisonContext
    this.op = null; // Token
    this.right = null; // StatementContext
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.EOF = function() {
    return this.getToken(RSQLParser.EOF, 0);
};

StatementContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RSQLParser.prototype.statement = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new StatementContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, RSQLParser.RULE_statement, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        localctx.node = this.comparison();
        this.state = 58;
        this.match(RSQLParser.EOF);
        this._ctx.stop = this._input.LT(-1);
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new StatementContext(this, _parentctx, _parentState);
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, RSQLParser.RULE_statement);
                this.state = 60;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 61;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===RSQLParser.T__3 || _la===RSQLParser.T__5)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 62;
                localctx.right = this.statement(0);
                this.state = 63;
                this.match(RSQLParser.EOF); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_field;
    this.key = null; // Token
    this.hint = null; // Token
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.IDENTIFIER = function() {
    return this.getToken(RSQLParser.IDENTIFIER, 0);
};

FieldContext.prototype.TYPE_HINT = function() {
    return this.getToken(RSQLParser.TYPE_HINT, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.FieldContext = FieldContext;

RSQLParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RSQLParser.RULE_field);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            localctx.key = this.match(RSQLParser.IDENTIFIER);
            this.state = 71;
            localctx.hint = this.match(RSQLParser.TYPE_HINT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 72;
            localctx.key = this.match(RSQLParser.IDENTIFIER);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_comparison;
    this.target = null; // FieldContext
    this.op = null; // Token
    this.single = null; // Single_valueContext
    this.multi = null; // Multi_valueContext
    return this;
}

ComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;

ComparisonContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

ComparisonContext.prototype.single_value = function() {
    return this.getTypedRuleContext(Single_valueContext,0);
};

ComparisonContext.prototype.EQ = function() {
    return this.getToken(RSQLParser.EQ, 0);
};

ComparisonContext.prototype.NE = function() {
    return this.getToken(RSQLParser.NE, 0);
};

ComparisonContext.prototype.GT = function() {
    return this.getToken(RSQLParser.GT, 0);
};

ComparisonContext.prototype.GTE = function() {
    return this.getToken(RSQLParser.GTE, 0);
};

ComparisonContext.prototype.LT = function() {
    return this.getToken(RSQLParser.LT, 0);
};

ComparisonContext.prototype.LTE = function() {
    return this.getToken(RSQLParser.LTE, 0);
};

ComparisonContext.prototype.EX = function() {
    return this.getToken(RSQLParser.EX, 0);
};

ComparisonContext.prototype.RE = function() {
    return this.getToken(RSQLParser.RE, 0);
};

ComparisonContext.prototype.multi_value = function() {
    return this.getTypedRuleContext(Multi_valueContext,0);
};

ComparisonContext.prototype.IN = function() {
    return this.getToken(RSQLParser.IN, 0);
};

ComparisonContext.prototype.NIN = function() {
    return this.getToken(RSQLParser.NIN, 0);
};

ComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.enterComparison(this);
	}
};

ComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof RSQLListener ) {
        listener.exitComparison(this);
	}
};

ComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RSQLVisitor ) {
        return visitor.visitComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RSQLParser.ComparisonContext = ComparisonContext;

RSQLParser.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RSQLParser.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.state = 83;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            localctx.target = this.field();
            this.state = 76;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RSQLParser.EQ) | (1 << RSQLParser.NE) | (1 << RSQLParser.GT) | (1 << RSQLParser.LT) | (1 << RSQLParser.GTE) | (1 << RSQLParser.LTE) | (1 << RSQLParser.EX) | (1 << RSQLParser.RE))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 77;
            localctx.single = this.single_value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            localctx.target = this.field();
            this.state = 80;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===RSQLParser.IN || _la===RSQLParser.NIN)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 81;
            localctx.multi = this.multi_value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


RSQLParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.statement_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RSQLParser.prototype.statement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RSQLParser = RSQLParser;
