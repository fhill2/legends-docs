# Development

## Data

Data used in our application had to most accurately reflect the data used in the game. Any time the game's data updates, our app needed to update. 

Therefore, it was necessary for the application's data updates to be fully automated, without any need for manual intervention.

There were some considerations to use a database for the data. As this would cost more resources to implement, our team decided to first implement output the data (either media, or JSON) from the scraping scripts into the github repository.




### Community Dragon - Data Retrieval

Leveraging the scraping tools included within Community Dragon (Community Dragon Toolbox) was not necessary, as Community Dragon regularly extracts data from the in game client and [makes this data publicly available under a section of their website](https://raw.communitydragon.org/) (RAW Community Dragon).

The web interface of RAW Community Dragon did not provide a way to download all the data, or view assets before downloading. The only way to identify the location of the data in the dataset was to use the [Asset Paths](https://www.communitydragon.org/documentation/assets) page of their website.

After searching these asset paths and not finding everything we needed, our team made the decision to create scripts in Python that downloaded every asset available from the RAW Community Dragon dataset. This scripts are located at `tools/scrape/get_community_dragon.py` and `tools/scrape/get_community_art.py` in the git repo.

After viewing the whole contents of the dataset, the script could be edited to regularly download changes from the locations of the dataset we needed, and save the data into the git repository.

TODO: explain legal ramifications of downloading all the data when they do not provide a way to download it all.





### League of Legends Wiki - Data Retrieval


Once our team recognized that building a custom data scraper for the League of Legends Wiki was consuming excessive resources, we began exploring alternative methods for extracting data from the dataset.

*ChooChooShoe's lol-damage-calculator web scraper*
A League of Legends web scraper was found online, authored by Github user ChooChooShoe that scraped the same data we needed in our project. After finding this scraper, development on our custom data scraper was stopped, and effort was focused on editing ChooChooShoe's data scraper to fulfill the data requirements of the application. 

This involved:
- removing all code that was not relevant to our project.
- scraping other parts of the webpage the existing web scraper did not scrape, such as Cooldown and Cost values, utilizing the existing functions and methods of the scraper.

The web scraper is located at `getWikiModuleData.mjs` `getData.mjs` `getChampionSkillsFromWiki.mjs` in `tools/scrape` directory

Further processing using Python was done to modify the data output from the scraper. These modifications include editing the key names of the champion and item stats, and adding additional keys to each champion. These scripts are located at `tools/scrape/post_process_champion.py` and `tools/scrape/post_process_items.py` of the git repository.

Python was used for the post processing as it was the language decided initially to implement the web scraper. Since our intention was to only utilize this custom scraper to hasten the initial stages of development, it was logical to integrate any extensions to the scraper using the same programming language as our final product.

The bash script located at `tools/scrape/scrape.sh` in the git repo runs the scraper, then the post processing, then symlinks the JSON data files output from `tools/scrape/data_output/` to `data/` to be used in the project.

ChooChooShoe's project is under [MIT License](https://github.com/ChooChooShoe/lol-damage-calculator/blob/master/LICENSE), which gives us rights to copy the software for our own use without any legal ramifications.

## Design & Styling

### Initial Design
Show styling references here, and decision to create the UI similar to the in game UI, as there would be a level of familiarity.

- league of legends wiki
- lol damage calculator
- in game UI

### First Iteration
- survey questionnaire images and responses here.

## Frontend

### React
- Mention Floating UI Library - Libraries used.

### UML

### Tailwind

Tailwind was chosen because.. Tailwind stays close to CSS..




### Vite




## Backend

### UML

### API

### Damage Calculations



## Deployment

As our application development cycle involved obtaining user feedback, our team considered different ways to get our application to our users to test it. 

Our team researched how the application could be delivered to our users without them having to download the source code, as this would reduce the amount of users willing to test and give feedback on our application. Ideally, the process of updating the deployment should be fully automated, requiring no manualy intervention from our team.



### Railway

[Railway](https://railway.app/) is a deployment provider,

Railway is "the cloud that takes the complexity out of shipping software". It is 

Railway was chosen as a deployment provider because it is:
- very easy to setup. The setup process consisted of pointing the .... to a github repo.
- had usage based pricing. The traffic to the app was exceptionally low, and the deployment was free.
- open source.
- fully automated, requiring no manual intervention. Once Railway has been given permission to read the contents of a GitHub repo, Railway will read the current state of the repo, build, deploy the application, and provide a URL for the application to send to our users/testers. This deployment process happens anytime the repository receives new commits.


When commits were pushed to the remote repository on github, the github Continuous Integration would deploy our application, and provide a link for the 

Railway is a deployment provider, with features similar to Heroku.

## Testing
- written part from Pablo's testing with League of Legends players.



