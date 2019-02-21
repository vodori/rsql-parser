#!/bin/bash

rm -rf gen && mkdir gen && antlr -Dlanguage=JavaScript RSQL.g4 -visitor -o gen
