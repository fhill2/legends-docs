#!/usr/bin/env bash

#
# Author: Jake Zimmerman <jake@zimmerman.io>
#
# A simple script to build an HTML file using Pandoc
#

set -euo pipefail

usage() {
  echo "usage: $0 <source.md> <dest.html>"
}

# ----- args and setup -----

src="${1:-}"
dest="${2:-}"
if [ "$src" = "" ] || [ "$dest" = "" ]; then
  2>&1 usage
  exit 1
fi

case "$src" in
  -h|--help)
    usage
    exit
    ;;
esac

source $PWD/tools/build_shared.sh

pandoc \
  "${PANDOC_COMMON_ARGS[@]}" \
  --output "$dest" \
  "$src"


# Original:
# pandoc \
#   --filter pandoc-sidenote \
#   --katex \
#   --from markdown+tex_math_single_backslash \
#   --to html5+smart \
#   --template=template \
#   --css="$css_rel_path/theme.css" \
#   --css="$css_rel_path/skylighting-solarized-theme.css" \
#   --toc \
#   --wrap=none \
#   --output "$dest" \
#   "$src"
#
