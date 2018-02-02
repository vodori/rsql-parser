#!/bin/bash

rm -rf gen && mkdir gen && antlr4 -Dlanguage=JavaScript RSQL.g4 -visitor -o gen
