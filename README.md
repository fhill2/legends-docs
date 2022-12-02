#### Standalone Markdown -> PDF+HTML Converter

## Lets do this for now

For now, lets collect all the files we have been working on into the `upload` folder. google docs, docx etc..

Then, we can reformat them into markdown and move them over to `md` folder so they are included in the generation of the report.

## Dependency Installation

External Dependencies:

prince - HTML -> PDF conversion
pandoc - MD -> HTML conversion + extended markdown features

#### using chocolatey package manager

```powershell
choco install prince
choco install pandoc
```

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
page breaks before every h1 heading.
no page breaks before h2 headings so you can decide if you want a page break there.

### TODO:

create pandoc master:
[x] - auto build master html in addition to the individual md
[x] - numbered sections
[x] - auto generated toc
[x] - auto generated footnotes list (bottom of file)
[x] - correct pdf page breaks
[] - test repeated footnote anchors and `--file-scope`

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

### More Usage

To add a markdown page to the generated report.html / report.pdf:

add the name of the page to `docs/.gen_master.yml` `input-files`

---

How to submit PR for the first time:
If we are uploading documents, we can commit straight to master

We can also submit PRs that gives us an interface to show edits, and a review / conversation etc..

Here is how that works:

#### 1 Setup the Branch (only once)

```bash
git checkout -b <your-branch-name> # freddie-pr is my branch name
git branch --set-upstream-to=origin/main <your-branch-name> # set to track remote main branch


```

#### 2 Everytime you want to make an edit / submit a PR

```bash
# make changes here
git pull # ensure state of remote main = your branch state
# or make changes here

# commit the changes youve made
git add .
git commit -m ""

git push origin <your-branch-name>

# now github repo UI will show the Compare & Pull Request button
```

submit a PR the second+ time:

#### Emoji Support

CSS theme is using [Google Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji/glyphs) font to display emojis
fonts have to be installed on your system for emojis to show in the PDF output, they are not installed / setup with the installation of the project (couldnt get relative font paths to work with pandoc & external stylesheet)

you can use [this page](https://emojipedia.org/google/) to copy paste emojis into the report
