https://github.com/shd101wyy/vscode-markdown-preview-enhanced

https://shd101wyy.github.io/markdown-preview-enhanced/#/

https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced

mume is the markdown library powering the above vscode extension:

https://github.com/shd101wyy/mume

# Documentation History - Changes

bugs:

- [] not fixed
- [x] fixed
- [?] workaround

#### Try 1: Markdown Preview Enhanced vscode Extension

- [x] if exporting to HTML it does not export unsaved changes to the HTML (reads from disk)

- [x] if you get a laggy renderer viewport and the scrollbar is jittering, save the document.

You can turn auto save on in vscode so you dont have to deal with the above

- [?] exporting to pdf with pandoc through the markdown preview UI in vscode causes pandoc to error. this might be a linux only bug. im exporting in the terminal as a workaround.

- [] decreasing image size and keeping alt text -> preview enhanced vscode renderer is only showing 1 or the other.

- [] title as text with css instead of embedded -> setting preview enhanced to use the pandoc previewer. probably have to enabled some extensions.

- [] adding pdf chapter page breaks with latex -> havent looked into this.

- [?] - I probably can work around this - havent looked into it.

#### Try 2: Codebrain vscode extension

Im trying this instead because it is a live updating pandoc previewer - no other features included that might be causes all the issues above.

- [x] - images alt text does not show as figure text in HTML output
    pandoc extension 'implicit_figures' enables this. unfortunately this does not work with commonmark_x parser, therefore we have to use pandoc markdown parser which disables codebrain vscode preview renderers html scroll syncing.

- [?] - cannot set font
  relative font urls are not working without running a web server. this means the fonts defined in the stylesheets have to be installed if we want the same styling as the report in the codebrain vscode markdown renderer viewport.
  another option is to use a web server + nodemon and not use this extension.

Check Codebrain vscode extension:

- [] auto toc generation
- [] all footnotes at bottom
- [] numbered sections
- [] pdf page breaks

```json
// user-settings.json
"codebraid.preview.pandoc.fromFormat": "markdown",
```

codebrain export command:

```bash
pandoc --defaults _codebraid_preview.yml -o market-research.html market-research.md
```

#### Codebrain Standalone

pandoc outputs the html file next to the markdown file in docs/

```bash
npm install # installs live-server

# executes `node tools/server.js`
# watches all markdown files inside docs/ for changes and executes pandoc if changed
npm run dev
```

after running `npm run dev` the browser will open and you can open any .html file inside the folder
when editing docs/file.md in vscode and saving, docs/file.html should update immediately showing the changes.
let me know if this is not the case.

#### Codebrain Standlone Considerations

all images, tables are set to center on the page for now.

