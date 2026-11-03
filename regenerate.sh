#!/bin/bash
set -euo pipefail

# Match the generator to the antlr4 runtime pinned in package.json.
: "${ANTLR_JAR:?Set ANTLR_JAR to the antlr-4.13.0-complete.jar path}"
java -jar "$ANTLR_JAR" -Dlanguage=JavaScript RSQL.g4 -visitor -o gen
# Keep the generated parser compatible with the package's CommonJS entry point.
./node_modules/.bin/babel gen --out-dir gen --extensions .js
