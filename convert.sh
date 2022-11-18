#!/bin/bash


files=(
doc/requirements.md
doc/specifications.md
)

cat "${files[@]}" | node ./node_modules/markdown-toc/cli.js -
