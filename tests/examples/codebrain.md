Here is a footnote reference,[^1]
Here is a footnote reference to a long footnote [^2]

Here is an inline footnote^[inline footnote can be created like this]


### Tips & Tricks



### Duplicated footnotes

Here is another footnote reference that has the same identifier as an existing footnote, identifier 1. [^1]
note how this still works, and pandoc changes the identifier.
This is sometimes not the behaviour I want. Sometimes I want 2 footnotes linking to the same footnote identifier (identifier = the text target at the bottom of the page)

Im using regular internal links to a differernt chapter, if I dont want the footnote duplicated.



[^1]: Here is the footnote.


text target for the fake footnote