#!/usr/bin/env bash

# dest="${1:-}"

echo "=== GENERATING REPORT ==="

# put me at git root
cd "$(git rev-parse --show-toplevel)" || exit 1

source "$PWD/tools/build_shared.sh"

# files=(
# src/report/requirements.md
# src/report/specifications.md
# )


cat "$@" | pandoc \
    "${PANDOC_COMMON_ARGS[@]}" \
    --output "docs/report.html"


