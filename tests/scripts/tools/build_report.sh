#!/usr/bin/env bash

# dest="${1:-}"

echo "=== GENERATING REPORT ==="

# put me at git root
# cd "$(git rev-parse --show-toplevel)" || exit 1
dest="docs/report.html"
source "$PWD/tools/build_shared.sh"

# files=(
# src/report/requirements.md
# src/report/specifications.md
# )

# Note on css relative links:
# correct links in the output HTML file should look like this:
# <link rel="stylesheet" href="docs/css/theme.css" />
# <link rel="stylesheet" href="docs/css/skylighting-solarized-theme.css" />


cat "$@" | pandoc \
    "${PANDOC_COMMON_ARGS[@]}" \
    --output "docs/report.html"

weasyprint docs/report.html docs/report.pdf
