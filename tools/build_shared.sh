#!/usr/bin/env bash

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


PANDOC_COMMON_ARGS=(
  --template=template
  --css="$css_rel_path/theme.css"
  --css="$css_rel_path/skylighting-solarized-theme.css"
  --to html5+smart
  --toc
  --wrap=none
)
