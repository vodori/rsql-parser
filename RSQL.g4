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
OR_OPERATOR: ',';
AND_OPERATOR: ';';
SINGLE_QUOTE: '\'';
DOUBLE_QUOTE:  '"';
L_PAREN: '(';
R_PAREN: ')';

TYPE_HINT
    : ':string'
    | ':boolean'
    | ':number'
    ;

fragment STOP: '.';
fragment DIGIT : [0-9];
fragment STRING_ESCAPE_SEQ : '\\' .;

NUMERIC_LITERAL
    : DIGIT+ ( STOP DIGIT* )? ( [-+]? DIGIT+ )?
    | STOP DIGIT+ ( [-+]? DIGIT+ )?
    ;

SINGLE_QUOTED_STRING : SINGLE_QUOTE ( STRING_ESCAPE_SEQ | ~[\\\r\n'] )*? SINGLE_QUOTE;
DOUBLE_QUOTED_STRING : DOUBLE_QUOTE ( STRING_ESCAPE_SEQ | ~[\\\r\n"] )*? DOUBLE_QUOTE;

IDENTIFIER: [a-zA-Z] [a-zA-Z0-9.]*;
ANYTHING_ELSE: ~[\\\r\n"']+?;

boolean_value
    : TRUE
    | FALSE
    | SINGLE_QUOTE (TRUE | FALSE) SINGLE_QUOTE
    | DOUBLE_QUOTE (TRUE | FALSE) DOUBLE_QUOTE
    ;

string_value
    : IDENTIFIER
    | SINGLE_QUOTED_STRING
    | DOUBLE_QUOTED_STRING
    | ANYTHING_ELSE
    ;

number_value
    : NUMERIC_LITERAL
    | SINGLE_QUOTE NUMERIC_LITERAL SINGLE_QUOTE
    | DOUBLE_QUOTE NUMERIC_LITERAL DOUBLE_QUOTE
    ;

multi_value
    : L_PAREN single_value ( OR_OPERATOR single_value )* R_PAREN
    | single_value
    ;

single_value
    : boolean_value
    | number_value
    | string_value
    ;

statement
    : left=statement op=( AND_OPERATOR | OR_OPERATOR ) right=statement
    | L_PAREN wrapped=statement R_PAREN
    | node=comparison
    ;

field
    : key=IDENTIFIER hint=TYPE_HINT
    | key=IDENTIFIER
    ;

comparison
    : target=field op=( EQ | NE | GT | GTE | LT | LTE ) single=single_value
    | target=field op=( IN | NIN ) multi=multi_value
    | target=field op=EX bool=boolean_value
    | target=field op=RE regex=string_value
    ;
