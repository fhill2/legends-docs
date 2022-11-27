#!/usr/bin/env bash


node_modules/.bin/chokidar "docs/*.md" -c "./build.sh {path}"

cd docs/
npm exec live-server


