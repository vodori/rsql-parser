grammar RSQL;

options {
    language = JavaScript;
}


TRUE: 'true';
FALSE: 'false';
EQ: '==';
NE: '!=';
IN: '=in=';
NIN: '=out=';
GT: '=gt=';
LT: '=lt=';
GTE: '=ge=';
LTE: '=le=';
EX: '=ex=';
RE: '=re=';

TYPE_HINT
    : ':string'
    | ':boolean'
    | ':number'
    ;

fragment STOP: '.';
fragment DIGIT : [0-9];
fragment SINGLE_QUOTE: '\'';
fragment DOUBLE_QUOTE:  '"';
fragment BOOLEAN_LITERAL: TRUE | FALSE;
fragment STRING_ESCAPE_SEQ
    : '\\' .
    ;
fragment QUOTED_SINGLE_QUOTE : ( STRING_ESCAPE_SEQ | ~[\\\r\n'] )*;
fragment QUOTED_DOUBLE_QUOTE : ( STRING_ESCAPE_SEQ | ~[\\\r\n"] )*;

NUMERIC_LITERAL
    : DIGIT+ ( STOP DIGIT* )? ( [-+]? DIGIT+ )?
    | STOP DIGIT+ ( [-+]? DIGIT+ )?
    ;

UNQUOTED_NUMBER : NUMERIC_LITERAL;
SINGLE_QUOTED_NUMERIC : SINGLE_QUOTE NUMERIC_LITERAL SINGLE_QUOTE;
DOUBLE_QUOTED_NUMERIC : DOUBLE_QUOTE NUMERIC_LITERAL DOUBLE_QUOTE;
SINGLE_QUOTED_STRING : SINGLE_QUOTE QUOTED_SINGLE_QUOTE? SINGLE_QUOTE;
DOUBLE_QUOTED_STRING : DOUBLE_QUOTE QUOTED_DOUBLE_QUOTE? DOUBLE_QUOTE;

IDENTIFIER: [a-zA-Z] [a-zA-Z0-9]*;

boolean_value
    : TRUE
    | FALSE
    | '\'' (TRUE | FALSE) '\''
    | '"' (TRUE | FALSE) '"'
    ;

string_value
    : IDENTIFIER
    | SINGLE_QUOTED_STRING
    | DOUBLE_QUOTED_STRING
    ;

number_value
    : NUMERIC_LITERAL
    | '\'' NUMERIC_LITERAL '\''
    | '"' NUMERIC_LITERAL '"'
    ;

multi_value
    : '(' single_value ( ',' single_value )* ')'
    | single_value
    ;

single_value
    : boolean_value
    | number_value
    | string_value
    ;

statement
    : left=statement op=( ';' | ',' ) right=statement EOF
    | node=comparison EOF
    ;

field
    : key=IDENTIFIER hint=TYPE_HINT
    | key=IDENTIFIER
    ;

comparison
    : target=field op=( EQ | NE | GT | GTE | LT | LTE | EX | RE ) single=single_value
    | target=field op=( IN | NIN ) multi=multi_value
    ;
