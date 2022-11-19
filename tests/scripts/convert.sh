#!/bin/bash



# could also use this:
# find md -type f -name '*.md'

# cat "${files[@]}" | node ./node_modules/markdown-toc/cli.js -

SDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mkdir -p "$SDIR/output"
mkdir -p "$SDIR/output/starters_html"
mkdir -p "$SDIR/output/starters_pdf"
mkdir -p "$SDIR/tests/output"
ln -s "$SDIR/css" "$SDIR/output/starters_html/css"


# NOTE: --css relative paths are relative to output directory, NOT $PWD
# eg output/starters_html/css/jez
PANDOC_COMMON_ARGS=(
  --template="template/template.html5"
  --css="css/jez/theme.css"
  --css="css/jez/skylighting-solarized-theme.css"
  --to html5+smart
  --toc
  --wrap=none
)


generate_report() {

files=(
md/requirements.md
md/specifications.md
)
  cat "${files[@]}" | pandoc \
    "${PANDOC_COMMON_ARGS[@]}" \
    --output "output/report.html"

}


generate_starter_files() {
     # for file in find tests/md -type f -name '*.md'; do
        # echo "$file"
    # done
  for starter_file in tests/md/*.md; do
    # echo "$(basename -s .md $starter_file)"
    filename=$(basename -s .md $starter_file)
    html_out="output/starters_html/$filename.html"
    echo "========== GENERATING $html_out ==========" 
    pandoc "${PANDOC_COMMON_ARGS[@]}" \
      --output "$html_out" \
      --standalone \
      "$starter_file"
    pdf_out="output/starters_pdf/$filename.pdf"
    # echo "========== GENERATING $pdf_out ==========" 
    # weasyprint "$html_out" "$pdf_out"
  done

}


case "$1" in
  starter)
    generate_starter_files
  ;;
  *)
    generate_report
  ;;
esac






