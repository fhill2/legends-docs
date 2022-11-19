#!/usr/bin/env bash

#
# Author: Jake Zimmerman <jake@zimmerman.io>
#
# A simple script to build an HTML file using Pandoc
#


# generates / converts a single file md -> html

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


if command -v grealpath &> /dev/null; then
  realpath="grealpath"
elif command -v realpath &> /dev/null; then
  realpath="realpath"
else
  2>&1 echo "$0: This script requires GNU realpath. Install it with:"
  2>&1 echo "    brew install coreutils"
  exit 1
fi

dest_dir="$(dirname "$dest")"
mkdir -p "$dest_dir"
css_rel_path="$(realpath docs/css/ --relative-to $dest_dir)"

source $PWD/tools/build_shared.sh
# echo "CSS_REL_PATH"
# echo "$css_rel_path"

pandoc \
  "${PANDOC_COMMON_ARGS[@]}" \
  --css="$css_rel_path/theme.css" \
  --css="$css_rel_path/skylighting-solarized-theme.css" \
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
