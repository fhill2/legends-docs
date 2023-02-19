#### Backend

## Technical issues

**Case 1**: Retrieving accurate item stats data

The first challenge we faced on the back end of the application was ensuring the data the app would be using to perform the calculations was accurate.

The dataset "Data Dragon", provided by the authors of the game, did not include accurate data for the item stats.

the first challenge was retrieving all the URLs from the League of Legends wiki website.

As each link was included in the page source

I thought I could GET the page source of the web page for the list of LoL items on the wiki page, and the result would contain a list of URLs to each item on the wiki page.

The League of Legends wiki website contains a list of items.
https://leagueoflegends.fandom.com/wiki/Item_(League_of_Legends)

After looking at the page source, the section of the webpage did not have scrapable URLs.

All items are listed on the wiki

By scraping the webpage containg the list of item names, and prefixing them to

This will also futureproof the script, so it can pull down new updates to the wiki in the future.

However, the title could be scraped for each item, and as it is the only part that

as the page source of the web page containing the list of items on the wiki did not contain

The current version of the script handles and fails if an item in the main item list is not found

---

pulling stats:
This was troublesome as the DOM was not structured

the elements to be scraped had no uniquely identifying attributes like a class or id
the unique identifiers for the elements included an element in the text content of the element

---

after the data was retrieved using BeautifulSoup, it was parsed into the correct type and the item type, amount, name was stored inside a python dictionary that could then be converted to csv or json.

the parsing was done via regex. regex101.com was used to interactively visualise the regex being applied to the strings, and to manually tests and identify and errors in the parsing.

it was stored in a similar data structure to the Data Dragon.

The normalising of the item and stats names were left untouched as they most likely will be changed during the app's development.

```json
{
    ["Doran's Blade"]
}
```

Parsing was done with regex

![**Figure X**: retrieving item data from the League wiki](/assets/backend/webscrape/webscrape-code.png)

![**Figure X**: using regex101.com to manually test and validate the regex expression](/assets/backend/webscrape/regex101.png)
