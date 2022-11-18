# legends

The npm project to manage the documentation for agile midterm league of legends project.

The workflow is:

write the document in markdown syntax (vscode provides a markdown preview / rendered without any extensions)

Im experimenting with writing markdown using these tools as I've heard they are useful:
[ghostwriter GUI](https://ghostwriter.kde.org/)
[markdown web editor](https://dillinger.io/)

commit the documentation into doc folder. imo we can all commit to master on this, no need for separate branches.

Then we can select files/parts of the documentation to be included in the final report by using the helper script:

`convert_to_pdf.bash`
This script is not finished yet, when it is done it will:

- generate table of contents as a page
- join all markdown pages and convert to a PDF file.

Note: I was experimenting with keeping the docs on the wiki for collaboration before and this can also work.
However, generating the PDF (running scripts) on content stored on the wiki did not work well.
I found it is easier to keep the documentation as a docs-as-code approach, in the repo as regular files.

I'm going to write out all improvements to this workflow as I make them, incase we want to include it in the project planning section of the midterm writeup.
Further notes here: doc/freddie-workflow.md


dependency list so far:
pandoc
wkhtmltopdf
