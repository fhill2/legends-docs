#!/usr/bin/env bash

dest="${1:-}"

source $PWD/tools/build_shared.sh

files=(
src/report/requirements.md
src/report/specifications.md
)

cat "${files[@]}" | pandoc \
    "${PANDOC_COMMON_ARGS[@]}" \
    --output "$dest"


