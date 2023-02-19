# Images, tables, and captioned code blocks

Pandoc Markdown has special syntax for images and tables, and their captions.
For example:

![**Figure X:** When did you start playing League / using r/leagueoflegends? - [Reddit Survey 11501 Participants](#surveys)](assets/surveys-jupyter/11501/league-reddit.svg){style="color: red; margin: auto; object-position: left top;"}

Note how the image's `alt` text became the caption. With tables, the syntax is
slightly different:

| **Column 1**       | **Column 2**       |
| ------------------ | ------------------ |
| This is some text. | This is some text. |
| This is some text. | This is some text. |

Table: This is the caption.

On top of the syntax Pandoc Markdown provides, this theme supports attaching
captions to code blocks by wrapping the code block in a `<figure>` tag.
