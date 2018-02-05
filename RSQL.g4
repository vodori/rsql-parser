grammar RSQL;

options {
    language = JavaScript;
}

statement
    : left=statement op=( AND_OPERATOR | OR_OPERATOR ) right=statement
    | L_PAREN wrapped=statement R_PAREN
    | node=comparison
    ;

comparison
    : key=IDENTIFIER op=( EQ | NE | GT | GTE | LT | LTE ) single=single_value
    | key=IDENTIFIER op=( IN | NIN ) multi=multi_value
    | key=IDENTIFIER op=EX bool=boolean_value
    | key=IDENTIFIER op=RE regex=string_value
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
 : [a-zA-Z_] [a-zA-Z_0-9]*
 ;

string_value
    : STRING_LITERAL
    ;

boolean_value
    : BOOLEAN_LITERAL
    ;

single_value
    : BOOLEAN_LITERAL
    | STRING_LITERAL
    | NUMERIC_LITERAL
    ;

multi_value
    : '(' single_value ( ',' single_value )* ')'
    | single_value
    ;

NUMERIC_LITERAL
    : DIGIT+ ( '.' DIGIT* )? ( [-+]? DIGIT+ )?
    | '.' DIGIT+ ( [-+]? DIGIT+ )?
    ;

STRING_LITERAL
    : '\'' ( STRING_ESCAPE_SEQ | ~[\\\r\n'] )* '\''
    | '"' ( STRING_ESCAPE_SEQ | ~[\\\r\n"] )* '"'
    | NOESCAPE+
    ;

BOOLEAN_LITERAL
    : TRUE
    | FALSE
    ;

STRING_ESCAPE_SEQ
    : '\\' .
    ;

fragment NOESCAPE : [a-zA-Z0-9];
fragment DIGIT : [0-9];