#!/usr/bin/env bash

target="docs/$(basename -s '.md' "$1").html"
echo "Converting $1 --> $target"
pandoc --defaults docs/_codebraid_preview.yml -o $target $1

# "dev": "node_modules/.bin/chokidar \"docs/*.md\" -c \"./serve.sh {path}\""
