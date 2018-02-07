[![Build Status](https://travis-ci.org/vodori/rsql-parser.svg?branch=develop)](https://travis-ci.org/vodori/rsql-parser)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


### rsql-parser

A javascript parser and visitor for the predicate expression language RSQL. Useful for turning
simple string expressions into a function that resolves to either true or false when provided 
a chunk of data. 

### How it works

We've written an RSQL grammar for Antlr4. We compile this grammar into a lexer, parser, and base visitor. We then
extend the base visitor with hand-written code that builds the parsed AST into a function of one argument that returns
a boolean indicating if the data matches the expression. The grammar is still needs battle nesting and may be missing
support for certain edge cases around escape sequences, etc.

### Motivation

RSQL is used internally as a predicate expression language within Vodori's Pepper Cloud product suite. We're creating
a browser compatible version so that we can provide dynamic behavior on the browser but without asking the people doing
configuration to learn a new expression language.

### License

This project is licensed under [MIT license](http://opensource.org/licenses/MIT).