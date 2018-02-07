#!/bin/bash

if ! [ -x "$(command -v antlr4)" ]; then
    brew install antlr
fi

rm -rf gen && mkdir gen && antlr4 -Dlanguage=JavaScript RSQL.g4 -visitor -o gen
