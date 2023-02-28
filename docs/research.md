# Research


## Data Research



---

As our app calculated damage output for each league of legends champion, the data involved in the calculations had to match what game correctly.

Our team started by listing every dataset we could find that had data accurate enough to be used in the damage calculations.

Surprisingly, data published from the same company as the game was the least accurate. This was identified by comparing data output while playing the game (chat / battle logs) with the data sources.

There were 3 datasets found with parts of the data accurate enough to be used in our app.


1. [Data Dragon](https://riot-api-libraries.readtheldocs.io/en/latest/ddragon.html), or ddragon for short, is a set of static data files that provides images and info about champions, runes, and items. This includes info to translate champion IDs to names.[^1]

The data in ddragon is inaccurate, especially champion spell data and item stats.[^1]

2. Community Dragon, (also referred to as cdragon) is an open-source organization which provides tools for scraping data from riot's content delivery network, as well as provide services around hosting scraped data.[^2]


3. LoL Wiki Data - [League of Legends Wiki](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki) is a community driven platform hosted by [Fandom](https://about.fandom.com/about). 

The website contains data from League of Legends that has been sourced from the community, as well as from official sources.

As the website contains community sourced data, it is the only accurate data for champion and items. The official sources for this data are inaccurate.


*Summary*

Here is a table containing the data we wanted to include in our app, and the available datasets it was included in.

|                      |         |        |
| -------------------- | ------- | ------ | 
| Data Description | Available Sources | Format  | 
| Ability Descriptions | LoL Wiki |  HTML Strings | 
| Champion/Item/Ability Thumbnails | ddragon, cdragon, LoL Wiki | Bitmap |
| Champion/Item/Ability Icons | Community Dragon | Bitmap | 
| Champion/Item/Ability Data | LoL Wiki | JSON |


Shown by the table above, it was evident our team needed a solution to retrieve data from the League of Legends Wiki, and Community Dragon datasets, as they contain data that are not available in the other datasets.

Community Dragon provides tools to scrape League of Legends data, but the scraper would require more resources to than other methods.

## Damage Calculation Research
- write about what research we did to find out how to do the damage calculations. maybe some algorithms shown.


## Reference Projects
- Lol Damage Calculator
- List others here


[^3]: [Data Dragon - readthedocs.io](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html)
[^4]: [Community Dragon Documentation](DragonDocumentation)



