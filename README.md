#### Standalone Markdown -> PDF+HTML Converter

## Lets do this for now

For now, lets collect all the files we have been working on into the `upload` folder. google docs, docx etc..

Then, we can reformat them into markdown and move them over to `md` folder so they are included in the generation of the report.

## Usage

```bash
npm install # installs live-server

# executes `node tools/server.js`
# watches all markdown files inside docs/ for changes and executes pandoc if changed
npm run dev
```

after running `npm run dev` the browser should open

when saving docs/file.md after editing, docs/file.html is generated and browser shows changes immediately (live-server)

when saving docs/file.md after editing, docs/file.pdf is generated and browser has to be manually refreshed (if using the browsers built in pdf viewer)

On every edit of a markdown file inside `docs/`, the doc generator will generate a master version of the report (final submission) `docs/report.html` and `docs/report.pdf` (not yet implemented)

let me know if you encounter any errors when using it :)

#### Codebrain Standlone Considerations

all images, tables are set to center on the page for now.

### TODO:

create pandoc master:
[] - auto build master html in addition to the individual md
[] - numbered sections
[] - auto generated toc
[] - auto generated footnotes list (bottom of file)
[] - correct pdf page breaks

to fix:
margin incorrect on pdf
pdf not rendering footnotes

## Repo Overview - Directories

### `upload/`

we store our files here so we can share them and add them to the report.

the documentation generator does not touch or edit any files inside this folder.

### `docs/`

this folder is for the final content we are going to use in the report.

the documentation generator outputs HTML and PDF files (for the file being edited) in the same directory as the markdown files.
