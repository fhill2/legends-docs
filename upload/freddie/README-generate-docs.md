# legends

The npm project to manage the documentation for agile midterm league of legends project.

`git clone git@github.com:fhill2/legends.git`

## Lets do this for now

For now, lets collect all the files we have been working on into the `upload` folder. google docs, docx etc..

Then, we can reformat them into markdown and move them over to `md` folder so they are included in the generation of the report.

## Repo Overview - Directories

`upload/`
a temporary place to store the files we want.
the document generation will not touch / look inside the folder.

`md/`

all these markdown files will be merged before pandoc is executed and the HTML is generated.

`public/`
assets used in / for the documentation
`make` copies these to docs folder

`docs/`
read only - dont modify anything in here

`src/`
all markdown files for pandoc to process into docs/

## Usage

run `make` - all generated files are under `docs/starter` `docs/report` `docs/pdf`

## Conversion Process

pandoc is used to convert all the md files inside `md` directory to 1 single HTML file.

By using pandoc, we can style the report using CSS.

pandoc then processes the HTML file into a PDF version using weasyprint pdf engine.

weasyprint is a program that converts HTML -> PDF.

Therefore, we have the report in PDF and HTML format to submit, and can collaborate on it easily.

To see the final midterm writeup, run `convert.sh` (not yet functional).

### Dependencies

pandoc
weasyprint

## TODO

- [ ] be able to convert to pdf and html from markdown, with all the features listed in this section.

tests if this formatting is working:

- [ ] tables
- [ ] footnotes
- [ ] image - with citation and description below

other additional helpful features:

- [ ] image with footer and
- [ ] colored headings - css styling working
- [ ] auto generated table of contents - with clickable links
- [ ] automatically generated footnote list for footer
- [ ] live updating html renderer view while writing - annoying having to convert to see results. This is possible by changing the renderer in markdown editors settings (have not checked vscode previewer).

## Other stuff

Note: I was experimenting with keeping the docs on the wiki for collaboration before.

However, generating the PDF (running scripts) on content stored on the wiki did not work well.

I found it is easier to keep the documentation as a docs-as-code approach, in the repo as regular files.

I'm going to write out all improvements to this workflow as I make them, incase we want to include it in the project planning section of the midterm writeup.
Further notes here: doc/freddie-workflow.md

Im experimenting with writing markdown using these tools as I've heard they are useful:

[ghostwriter GUI](https://ghostwriter.kde.org/)

[markdown web editor](https://dillinger.io/)
