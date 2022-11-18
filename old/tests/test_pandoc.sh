#!/bin/sh

# based on this
# https://github.com/kjhealy/pandoc-templates/blob/master/examples/starting_from_markdown/Makefile

# weasyprint - wkhtmltopdf


# To debug the PDF creation, it can be useful to look at the intermediate representation: instead of -o test.pdf, use for  example  -s  -o
#       test.tex to output the generated LaTeX.  You can then test it with pdflatex test.tex.



# options overview:

# -s -> product output with an appropriate header and footer


# mkdir -p output
# enabled by default for pdf,epub,epub3,fb2,docx,odt
# pandoc md/test-format.md --pdf-engine=weasyprint -o output/test-format.pdf
# pandoc [file-name].md --pdf-engine=weasyprint -o [file-name].pdf
# pandoc md/test-format.md -s -o output/test-format.html

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# css_rel_path="$(realpath "$SCRIPT_DIR" --relative-to "/css/")"
echo "$css_rel_path"
echo "$SCRIPT_DIR"
