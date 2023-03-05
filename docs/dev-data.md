## Data

Data used in our application had to most accurately reflect the data used in the game. Any time the game's data updates, our application needed to update. Therefore, it was necessary for the application's data updates to be fully automated, without any need for manual intervention.

There were some considerations to use a database for the data. As this would cost more resources to implement, our team decided to store the data in JSON files instead, and consider the need for a database again further into development.




### Community Dragon - Data Retrieval

Leveraging the scraping tools included within Community Dragon (Community Dragon Toolbox) was not necessary, as Community Dragon regularly extracts data from the in game client and [makes this data publicly available under a section of their website](https://raw.communitydragon.org/) (RAW Community Dragon).

The web interface of RAW Community Dragon provided an option to download single files of the dataset. The only way to identify the location of the data in the dataset was to use the [Asset Paths](https://www.communitydragon.org/documentation/assets) page of their website.

After searching these asset paths and not finding the data the application needed, our team created scripts in Python that downloaded every asset available from the RAW Community Dragon dataset. These scripts are located at `tools/scrape/get_community_dragon.py` and `tools/scrape/get_community_art.py` in the repository. This option was viable as the website did not have a use policy or other terms and conditions on their website, and every file was available to download singularly. After viewing the contents of the dataset, the script was edited to download only specific files instead of the complete dataset, to minimize traffic to the data provider's servers.


### League of Legends Wiki - Data Retrieval


Before our team decided to implement a custom scraper to retrieve data from the League of Legends Wiki, other alternatives were considered and are listed below.

*ChooChooShoe's lol-damage-calculator web scraper*
A League of Legends wiki web scraper was found online, authored by Github user [ChooChooShoe](https://github.com/ChooChooShoe) that scraped the same data we needed in our project. After finding this scraper, development on our custom data scraper was stopped, and effort was focused on editing ChooChooShoe's data scraper to fulfill the data requirements of the application. 

Modifications to the third party web scraper involved removing all code that was not relevant to our project, scraping additional parts of the website that were not being scraped, such as Cooldown and Cost values. The modified third party web scraper is located within the `getWikiModuleData.mjs` `getData.mjs` `getChampionSkillsFromWiki.mjs` files in the `tools/scrape` directory of the repository.

Further data processing using Python was carried out to modify the data output from the scraper. These modifications included editing the key names of the champion and item stats, and adding additional keys to each champion. These scripts are located at `tools/scrape/post_process_champion.py` and `tools/scrape/post_process_items.py` in the repository.

Python was used data post processing as it was the language decided initially to implement the web scraper. Since the intention was to utilize the third party scraper to hasten the initial stages of development, it was logical to implement any extensions to this scraper using the same programming language as our custom scraper, so less code would have to be rewritten in another language in the future.

The bash script located at `tools/scrape/scrape.sh` in the repository runs the scraper, then the post processing, then symlinks the JSON data files output from `tools/scrape/data_output/` to `data/` to be used in the project.

ChooChooShoe's project is under [MIT License](https://github.com/ChooChooShoe/lol-damage-calculator/blob/master/LICENSE), which gives us rights to copy the software into our project for our own use and edit it without legal ramifications.

