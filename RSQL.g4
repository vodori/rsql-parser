grammar RSQL;

options {
    language = JavaScript;
}


string_value
    : UNQUOTED_STRING
    | SINGLE_QUOTE QUOTED_SINGLE_QUOTE SINGLE_QUOTE
    | DOUBLE_QUOTE QUOTED_DOUBLE_QUOTE DOUBLE_QUOTE
    ;

boolean_value
    : BOOLEAN_LITERAL
    | SINGLE_QUOTE BOOLEAN_LITERAL SINGLE_QUOTE
    | DOUBLE_QUOTE BOOLEAN_LITERAL DOUBLE_QUOTE
    ;

number_value
    : NUMERIC_LITERAL
    ;

single_value
    : boolean_value
    | number_value
    | string_value
    ;

multi_value
    : '(' single_value ( ',' single_value )* ')'
    | single_value
    ;

statement
    : left=statement op=( AND_OPERATOR | OR_OPERATOR ) right=statement
    | node=comparison
    ;

field
    : key=IDENTIFIER ':' hint=TYPE_HINT
    | key=IDENTIFIER
    ;

comparison
    : target=field op=( EQ | NE | GT | GTE | LT | LTE ) single=single_value
    | target=field op=( IN | NIN ) multi=multi_value
    | target=field op=EX bool=boolean_value
    | target=field op=RE regex=string_value
    ;

TRUE: 'true';
FALSE: 'false';
AND_OPERATOR: ';';
OR_OPERATOR: ',';
L_PAREN: '(';
R_PAREN: ')';
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

IDENTIFIER
 : [a-zA-Z] [a-zA-Z_0-9]*
 ;

TYPE_HINT
    : 'string'
    | 'boolean'
    | 'number'
    ;

NUMERIC_LITERAL
    : DIGIT+ ( STOP DIGIT* )? ( [-+]? DIGIT+ )?
    | STOP DIGIT+ ( [-+]? DIGIT+ )?
    ;

BOOLEAN_LITERAL
    : TRUE
    | FALSE
    ;

STRING_ESCAPE_SEQ
    : '\\' .
    ;

SINGLE_QUOTE: '\'';
DOUBLE_QUOTE: '"';
HINT_PREFIX: ':';
STOP: '.';

fragment DIGIT : [0-9];
fragment UNQUOTED_STRING : ( ~[\\\r\n"] )*;
fragment QUOTED_SINGLE_QUOTE : ( STRING_ESCAPE_SEQ | ~[\\\r\n'] )*;
fragment QUOTED_DOUBLE_QUOTE : ( STRING_ESCAPE_SEQ | ~[\\\r\n"] )*;