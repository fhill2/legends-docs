# Images, tables, and captioned code blocks


writing a test

Pandoc Markdown has special syntax for images and tables, and their captions.
For example:

```
![Sugarloaf Hill, San Mateo, CA, April 2021](../img/sugarloaf-hill-forest-green.jpg)
```

![Sugarloaf Hill, San Mateo, CA, April 2021](../img/sugarloaf-hill-forest-green.jpg)

Note how the image's `alt` text became the caption. With tables, the syntax is
slightly different:

| **Column 1**       | **Column 2**       |
| ------------------ | ------------------ |
| This is some text. | This is some text. |
| This is some text. | This is some text. |

Table: This is the caption.

On top of the syntax Pandoc Markdown provides, this theme supports attaching
captions to code blocks by wrapping the code block in a `<figure>` tag.
