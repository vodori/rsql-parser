"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
var _RSQLListener = _interopRequireDefault(require("./RSQLListener.js"));
var _RSQLVisitor = _interopRequireDefault(require("./RSQLVisitor.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Generated from RSQL.g4 by ANTLR 4.13.0
// jshint ignore: start

const serializedATN = [4, 1, 24, 96, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 25, 8, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 36, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 42, 8, 3, 10, 3, 12, 3, 45, 9, 3, 1, 3, 1, 3, 1, 3, 3, 3, 50, 8, 3, 1, 4, 1, 4, 1, 4, 3, 4, 55, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 63, 8, 5, 1, 5, 1, 5, 1, 5, 5, 5, 68, 8, 5, 10, 5, 12, 5, 71, 9, 5, 1, 6, 1, 6, 1, 6, 3, 6, 76, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 94, 8, 7, 1, 7, 0, 1, 10, 8, 0, 2, 4, 6, 8, 10, 12, 14, 0, 5, 1, 0, 1, 2, 1, 0, 21, 24, 1, 0, 13, 14, 2, 0, 3, 4, 7, 10, 1, 0, 5, 6, 102, 0, 24, 1, 0, 0, 0, 2, 26, 1, 0, 0, 0, 4, 35, 1, 0, 0, 0, 6, 49, 1, 0, 0, 0, 8, 54, 1, 0, 0, 0, 10, 62, 1, 0, 0, 0, 12, 75, 1, 0, 0, 0, 14, 93, 1, 0, 0, 0, 16, 25, 5, 1, 0, 0, 17, 25, 5, 2, 0, 0, 18, 19, 5, 15, 0, 0, 19, 20, 7, 0, 0, 0, 20, 25, 5, 15, 0, 0, 21, 22, 5, 16, 0, 0, 22, 23, 7, 0, 0, 0, 23, 25, 5, 16, 0, 0, 24, 16, 1, 0, 0, 0, 24, 17, 1, 0, 0, 0, 24, 18, 1, 0, 0, 0, 24, 21, 1, 0, 0, 0, 25, 1, 1, 0, 0, 0, 26, 27, 7, 1, 0, 0, 27, 3, 1, 0, 0, 0, 28, 36, 5, 20, 0, 0, 29, 30, 5, 15, 0, 0, 30, 31, 5, 20, 0, 0, 31, 36, 5, 15, 0, 0, 32, 33, 5, 16, 0, 0, 33, 34, 5, 20, 0, 0, 34, 36, 5, 16, 0, 0, 35, 28, 1, 0, 0, 0, 35, 29, 1, 0, 0, 0, 35, 32, 1, 0, 0, 0, 36, 5, 1, 0, 0, 0, 37, 38, 5, 17, 0, 0, 38, 43, 3, 8, 4, 0, 39, 40, 5, 13, 0, 0, 40, 42, 3, 8, 4, 0, 41, 39, 1, 0, 0, 0, 42, 45, 1, 0, 0, 0, 43, 41, 1, 0, 0, 0, 43, 44, 1, 0, 0, 0, 44, 46, 1, 0, 0, 0, 45, 43, 1, 0, 0, 0, 46, 47, 5, 18, 0, 0, 47, 50, 1, 0, 0, 0, 48, 50, 3, 8, 4, 0, 49, 37, 1, 0, 0, 0, 49, 48, 1, 0, 0, 0, 50, 7, 1, 0, 0, 0, 51, 55, 3, 0, 0, 0, 52, 55, 3, 4, 2, 0, 53, 55, 3, 2, 1, 0, 54, 51, 1, 0, 0, 0, 54, 52, 1, 0, 0, 0, 54, 53, 1, 0, 0, 0, 55, 9, 1, 0, 0, 0, 56, 57, 6, 5, -1, 0, 57, 58, 5, 17, 0, 0, 58, 59, 3, 10, 5, 0, 59, 60, 5, 18, 0, 0, 60, 63, 1, 0, 0, 0, 61, 63, 3, 14, 7, 0, 62, 56, 1, 0, 0, 0, 62, 61, 1, 0, 0, 0, 63, 69, 1, 0, 0, 0, 64, 65, 10, 3, 0, 0, 65, 66, 7, 2, 0, 0, 66, 68, 3, 10, 5, 4, 67, 64, 1, 0, 0, 0, 68, 71, 1, 0, 0, 0, 69, 67, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 11, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0, 72, 73, 5, 23, 0, 0, 73, 76, 5, 19, 0, 0, 74, 76, 5, 23, 0, 0, 75, 72, 1, 0, 0, 0, 75, 74, 1, 0, 0, 0, 76, 13, 1, 0, 0, 0, 77, 78, 3, 12, 6, 0, 78, 79, 7, 3, 0, 0, 79, 80, 3, 8, 4, 0, 80, 94, 1, 0, 0, 0, 81, 82, 3, 12, 6, 0, 82, 83, 7, 4, 0, 0, 83, 84, 3, 6, 3, 0, 84, 94, 1, 0, 0, 0, 85, 86, 3, 12, 6, 0, 86, 87, 5, 11, 0, 0, 87, 88, 3, 0, 0, 0, 88, 94, 1, 0, 0, 0, 89, 90, 3, 12, 6, 0, 90, 91, 5, 12, 0, 0, 91, 92, 3, 2, 1, 0, 92, 94, 1, 0, 0, 0, 93, 77, 1, 0, 0, 0, 93, 81, 1, 0, 0, 0, 93, 85, 1, 0, 0, 0, 93, 89, 1, 0, 0, 0, 94, 15, 1, 0, 0, 0, 9, 24, 35, 43, 49, 54, 62, 69, 75, 93];
const atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
const decisionsToDFA = atn.decisionToState.map((ds, index) => new _antlr.default.dfa.DFA(ds, index));
const sharedContextCache = new _antlr.default.atn.PredictionContextCache();
class RSQLParser extends _antlr.default.Parser {
  static grammarFileName = "RSQL.g4";
  static literalNames = [null, "'true'", "'false'", "'=='", "'!='", "'=in='", "'=out='", "'=gt='", "'=lt='", "'=ge='", "'=le='", "'=ex='", "'=re='", "','", "';'", "'''", "'\"'", "'('", "')'"];
  static symbolicNames = [null, "TRUE", "FALSE", "EQ", "NE", "IN", "NIN", "GT", "LT", "GTE", "LTE", "EX", "RE", "OR_OPERATOR", "AND_OPERATOR", "SINGLE_QUOTE", "DOUBLE_QUOTE", "L_PAREN", "R_PAREN", "TYPE_HINT", "NUMERIC_LITERAL", "SINGLE_QUOTED_STRING", "DOUBLE_QUOTED_STRING", "IDENTIFIER", "ANYTHING_ELSE"];
  static ruleNames = ["boolean_value", "string_value", "number_value", "multi_value", "single_value", "statement", "field", "comparison"];
  constructor(input) {
    super(input);
    this._interp = new _antlr.default.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = RSQLParser.ruleNames;
    this.literalNames = RSQLParser.literalNames;
    this.symbolicNames = RSQLParser.symbolicNames;
  }
  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 5:
        return this.statement_sempred(localctx, predIndex);
      default:
        throw "No predicate with index:" + ruleIndex;
    }
  }
  statement_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 3);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  boolean_value() {
    let localctx = new Boolean_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RSQLParser.RULE_boolean_value);
    var _la = 0;
    try {
      this.state = 24;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 16;
          this.match(RSQLParser.TRUE);
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 17;
          this.match(RSQLParser.FALSE);
          break;
        case 15:
          this.enterOuterAlt(localctx, 3);
          this.state = 18;
          this.match(RSQLParser.SINGLE_QUOTE);
          this.state = 19;
          _la = this._input.LA(1);
          if (!(_la === 1 || _la === 2)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 20;
          this.match(RSQLParser.SINGLE_QUOTE);
          break;
        case 16:
          this.enterOuterAlt(localctx, 4);
          this.state = 21;
          this.match(RSQLParser.DOUBLE_QUOTE);
          this.state = 22;
          _la = this._input.LA(1);
          if (!(_la === 1 || _la === 2)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 23;
          this.match(RSQLParser.DOUBLE_QUOTE);
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
  string_value() {
    let localctx = new String_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RSQLParser.RULE_string_value);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 26;
      _la = this._input.LA(1);
      if (!((_la & ~0x1f) === 0 && (1 << _la & 31457280) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
  number_value() {
    let localctx = new Number_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RSQLParser.RULE_number_value);
    try {
      this.state = 35;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 20:
          this.enterOuterAlt(localctx, 1);
          this.state = 28;
          this.match(RSQLParser.NUMERIC_LITERAL);
          break;
        case 15:
          this.enterOuterAlt(localctx, 2);
          this.state = 29;
          this.match(RSQLParser.SINGLE_QUOTE);
          this.state = 30;
          this.match(RSQLParser.NUMERIC_LITERAL);
          this.state = 31;
          this.match(RSQLParser.SINGLE_QUOTE);
          break;
        case 16:
          this.enterOuterAlt(localctx, 3);
          this.state = 32;
          this.match(RSQLParser.DOUBLE_QUOTE);
          this.state = 33;
          this.match(RSQLParser.NUMERIC_LITERAL);
          this.state = 34;
          this.match(RSQLParser.DOUBLE_QUOTE);
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
  multi_value() {
    let localctx = new Multi_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RSQLParser.RULE_multi_value);
    var _la = 0;
    try {
      this.state = 49;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 17:
          this.enterOuterAlt(localctx, 1);
          this.state = 37;
          this.match(RSQLParser.L_PAREN);
          this.state = 38;
          this.single_value();
          this.state = 43;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (_la === 13) {
            this.state = 39;
            this.match(RSQLParser.OR_OPERATOR);
            this.state = 40;
            this.single_value();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 46;
          this.match(RSQLParser.R_PAREN);
          break;
        case 1:
        case 2:
        case 15:
        case 16:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
          this.enterOuterAlt(localctx, 2);
          this.state = 48;
          this.single_value();
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
  single_value() {
    let localctx = new Single_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RSQLParser.RULE_single_value);
    try {
      this.state = 54;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
      switch (la_) {
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
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
  statement(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new StatementContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 10;
    this.enterRecursionRule(localctx, 10, RSQLParser.RULE_statement, _p);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 62;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 17:
          this.state = 57;
          this.match(RSQLParser.L_PAREN);
          this.state = 58;
          localctx.wrapped = this.statement(0);
          this.state = 59;
          this.match(RSQLParser.R_PAREN);
          break;
        case 23:
          this.state = 61;
          localctx.node = this.comparison();
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 69;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new StatementContext(this, _parentctx, _parentState);
          localctx.left = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, RSQLParser.RULE_statement);
          this.state = 64;
          if (!this.precpred(this._ctx, 3)) {
            throw new _antlr.default.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
          }
          this.state = 65;
          localctx.op = this._input.LT(1);
          _la = this._input.LA(1);
          if (!(_la === 13 || _la === 14)) {
            localctx.op = this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 66;
          localctx.right = this.statement(4);
        }
        this.state = 71;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
      }
    } catch (error) {
      if (error instanceof _antlr.default.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  field() {
    let localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RSQLParser.RULE_field);
    try {
      this.state = 75;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 72;
          localctx.key = this.match(RSQLParser.IDENTIFIER);
          this.state = 73;
          localctx.hint = this.match(RSQLParser.TYPE_HINT);
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 74;
          localctx.key = this.match(RSQLParser.IDENTIFIER);
          break;
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
  comparison() {
    let localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RSQLParser.RULE_comparison);
    var _la = 0;
    try {
      this.state = 93;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 77;
          localctx.target = this.field();
          this.state = 78;
          localctx.op = this._input.LT(1);
          _la = this._input.LA(1);
          if (!((_la & ~0x1f) === 0 && (1 << _la & 1944) !== 0)) {
            localctx.op = this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 79;
          localctx.single = this.single_value();
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 81;
          localctx.target = this.field();
          this.state = 82;
          localctx.op = this._input.LT(1);
          _la = this._input.LA(1);
          if (!(_la === 5 || _la === 6)) {
            localctx.op = this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 83;
          localctx.multi = this.multi_value();
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 85;
          localctx.target = this.field();
          this.state = 86;
          localctx.op = this.match(RSQLParser.EX);
          this.state = 87;
          localctx.bool = this.boolean_value();
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 89;
          localctx.target = this.field();
          this.state = 90;
          localctx.op = this.match(RSQLParser.RE);
          this.state = 91;
          localctx.regex = this.string_value();
          break;
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  }
}
exports.default = RSQLParser;
RSQLParser.EOF = _antlr.default.Token.EOF;
RSQLParser.TRUE = 1;
RSQLParser.FALSE = 2;
RSQLParser.EQ = 3;
RSQLParser.NE = 4;
RSQLParser.IN = 5;
RSQLParser.NIN = 6;
RSQLParser.GT = 7;
RSQLParser.LT = 8;
RSQLParser.GTE = 9;
RSQLParser.LTE = 10;
RSQLParser.EX = 11;
RSQLParser.RE = 12;
RSQLParser.OR_OPERATOR = 13;
RSQLParser.AND_OPERATOR = 14;
RSQLParser.SINGLE_QUOTE = 15;
RSQLParser.DOUBLE_QUOTE = 16;
RSQLParser.L_PAREN = 17;
RSQLParser.R_PAREN = 18;
RSQLParser.TYPE_HINT = 19;
RSQLParser.NUMERIC_LITERAL = 20;
RSQLParser.SINGLE_QUOTED_STRING = 21;
RSQLParser.DOUBLE_QUOTED_STRING = 22;
RSQLParser.IDENTIFIER = 23;
RSQLParser.ANYTHING_ELSE = 24;
RSQLParser.RULE_boolean_value = 0;
RSQLParser.RULE_string_value = 1;
RSQLParser.RULE_number_value = 2;
RSQLParser.RULE_multi_value = 3;
RSQLParser.RULE_single_value = 4;
RSQLParser.RULE_statement = 5;
RSQLParser.RULE_field = 6;
RSQLParser.RULE_comparison = 7;
class Boolean_valueContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_boolean_value;
  }
  TRUE() {
    return this.getToken(RSQLParser.TRUE, 0);
  }
  FALSE() {
    return this.getToken(RSQLParser.FALSE, 0);
  }
  SINGLE_QUOTE = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(RSQLParser.SINGLE_QUOTE);
    } else {
      return this.getToken(RSQLParser.SINGLE_QUOTE, i);
    }
  };
  DOUBLE_QUOTE = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(RSQLParser.DOUBLE_QUOTE);
    } else {
      return this.getToken(RSQLParser.DOUBLE_QUOTE, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterBoolean_value(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitBoolean_value(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitBoolean_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class String_valueContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_string_value;
  }
  IDENTIFIER() {
    return this.getToken(RSQLParser.IDENTIFIER, 0);
  }
  SINGLE_QUOTED_STRING() {
    return this.getToken(RSQLParser.SINGLE_QUOTED_STRING, 0);
  }
  DOUBLE_QUOTED_STRING() {
    return this.getToken(RSQLParser.DOUBLE_QUOTED_STRING, 0);
  }
  ANYTHING_ELSE() {
    return this.getToken(RSQLParser.ANYTHING_ELSE, 0);
  }
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterString_value(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitString_value(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitString_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class Number_valueContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_number_value;
  }
  NUMERIC_LITERAL() {
    return this.getToken(RSQLParser.NUMERIC_LITERAL, 0);
  }
  SINGLE_QUOTE = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(RSQLParser.SINGLE_QUOTE);
    } else {
      return this.getToken(RSQLParser.SINGLE_QUOTE, i);
    }
  };
  DOUBLE_QUOTE = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(RSQLParser.DOUBLE_QUOTE);
    } else {
      return this.getToken(RSQLParser.DOUBLE_QUOTE, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterNumber_value(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitNumber_value(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitNumber_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class Multi_valueContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_multi_value;
  }
  L_PAREN() {
    return this.getToken(RSQLParser.L_PAREN, 0);
  }
  single_value = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Single_valueContext);
    } else {
      return this.getTypedRuleContext(Single_valueContext, i);
    }
  };
  R_PAREN() {
    return this.getToken(RSQLParser.R_PAREN, 0);
  }
  OR_OPERATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(RSQLParser.OR_OPERATOR);
    } else {
      return this.getToken(RSQLParser.OR_OPERATOR, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterMulti_value(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitMulti_value(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitMulti_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class Single_valueContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_single_value;
  }
  boolean_value() {
    return this.getTypedRuleContext(Boolean_valueContext, 0);
  }
  number_value() {
    return this.getTypedRuleContext(Number_valueContext, 0);
  }
  string_value() {
    return this.getTypedRuleContext(String_valueContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterSingle_value(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitSingle_value(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitSingle_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class StatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_statement;
    this.left = null;
    this.wrapped = null;
    this.node = null;
    this.op = null;
    this.right = null;
  }
  L_PAREN() {
    return this.getToken(RSQLParser.L_PAREN, 0);
  }
  R_PAREN() {
    return this.getToken(RSQLParser.R_PAREN, 0);
  }
  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };
  comparison() {
    return this.getTypedRuleContext(ComparisonContext, 0);
  }
  AND_OPERATOR() {
    return this.getToken(RSQLParser.AND_OPERATOR, 0);
  }
  OR_OPERATOR() {
    return this.getToken(RSQLParser.OR_OPERATOR, 0);
  }
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class FieldContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_field;
    this.key = null;
    this.hint = null;
  }
  IDENTIFIER() {
    return this.getToken(RSQLParser.IDENTIFIER, 0);
  }
  TYPE_HINT() {
    return this.getToken(RSQLParser.TYPE_HINT, 0);
  }
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterField(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitField(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ComparisonContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RSQLParser.RULE_comparison;
    this.target = null;
    this.op = null;
    this.single = null;
    this.multi = null;
    this.bool = null;
    this.regex = null;
  }
  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }
  single_value() {
    return this.getTypedRuleContext(Single_valueContext, 0);
  }
  EQ() {
    return this.getToken(RSQLParser.EQ, 0);
  }
  NE() {
    return this.getToken(RSQLParser.NE, 0);
  }
  GT() {
    return this.getToken(RSQLParser.GT, 0);
  }
  GTE() {
    return this.getToken(RSQLParser.GTE, 0);
  }
  LT() {
    return this.getToken(RSQLParser.LT, 0);
  }
  LTE() {
    return this.getToken(RSQLParser.LTE, 0);
  }
  multi_value() {
    return this.getTypedRuleContext(Multi_valueContext, 0);
  }
  IN() {
    return this.getToken(RSQLParser.IN, 0);
  }
  NIN() {
    return this.getToken(RSQLParser.NIN, 0);
  }
  EX() {
    return this.getToken(RSQLParser.EX, 0);
  }
  boolean_value() {
    return this.getTypedRuleContext(Boolean_valueContext, 0);
  }
  RE() {
    return this.getToken(RSQLParser.RE, 0);
  }
  string_value() {
    return this.getTypedRuleContext(String_valueContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.enterComparison(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _RSQLListener.default) {
      listener.exitComparison(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _RSQLVisitor.default) {
      return visitor.visitComparison(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
RSQLParser.Boolean_valueContext = Boolean_valueContext;
RSQLParser.String_valueContext = String_valueContext;
RSQLParser.Number_valueContext = Number_valueContext;
RSQLParser.Multi_valueContext = Multi_valueContext;
RSQLParser.Single_valueContext = Single_valueContext;
RSQLParser.StatementContext = StatementContext;
RSQLParser.FieldContext = FieldContext;
RSQLParser.ComparisonContext = ComparisonContext;