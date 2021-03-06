[![Build Status](https://travis-ci.org/vodori/rsql-parser.svg?branch=develop)](https://travis-ci.org/vodori/rsql-parser)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


### rsql-parser

A javascript parser and visitor for the predicate expression language RSQL. Useful for turning
simple string expressions into a function that resolves to either true or false when provided 
a chunk of data. 

### Usage

```javascript 1.6
const parser = new Parser.PredicateParser();
const predicate = parser.parse("firstName==Paul;age==25");
const matches = predicate({firstName: "Paul", age: 23});
assertFalse(matches);
```

### How it works

We've written an RSQL grammar for Antlr4. We compile this grammar into a lexer, parser, and base visitor. We then
extend the base visitor with hand-written code that builds the parsed AST into a function of one argument that returns
a boolean indicating if the data matches the expression. The grammar still needs battle testing and may be missing
support for certain edge cases. Please see the tests for examples of what is / isn't supported and expected behavior.

### Motivation

RSQL is used internally as a predicate expression language within Vodori's Pepper Cloud product suite. We're creating
a browser compatible version so that we can extend dynamic configurable behavior to the browser but without asking the 
people writing configuration to learn a new expression language.

### License

This project is licensed under [MIT license](http://opensource.org/licenses/MIT).
