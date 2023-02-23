# Planning and Research

During week 10 - 12, our team:
- decided what changes we wanted to make to our workflow that we had implemented throughout weeks 1 - 10.

- created a new git repository to hold all the source code for both the client and the server. This decision was made because there was going to be work that required changes to both the server and client at once, and our team can visually see these changes in the same commit. Also, setup with the frontend library the project used (React) was easier.

- created a new github project (kanban board) to organise and track the work.

- decided, and researched into the tools and libraries to create the project.



## Team Breakdown

# Our Team
Our team consists of 5 people and was separated based on our strengths, and the areas of value each team member could bring to the project.
1 team member was responsible for keeping task management up to date, the development of the communication / API between server and client, and any tasks related to the React library used on the frontend.

2 team members were responsible for the frontend styling.

1 team member had lengthy experience of the and performed general overview. This team member also 

1 team member worked on the backend as 

The isolation of tasks based on each team member's experiences and strengths saved time during the project's development, as some tasks could be completed based on prior experience and knowledge, without gathering it beforehand.



### Github Projects and Management Features Overview

Here are the tools used during the project's development and the reasons why our team used them.

*Git*

Git has been the most valuable tool for our team, and was used to
TODO: add why git is useful here.


During the initial project planning, our team 

*Pandoc* 
TODO: link to appendix with 

*Github Project Management Features*

Our team decided to use Github Project's instead of any external software due to it being the most 


*Slack*
*Teamgantt.com*
*Zoom / Jitsi*


## Team Communication

After 10 weeks of communication and evaluation every week, we settled on a process that we preferred.

*Git Collaboration*

Our team collaborated up to the submission in the same way we planned during the first weeks, but we were 

TODO: add link to Manubot contribution workflow midterm appendix.

For any work that needed a review from another team member, 
changes that involved editing or overwriting another team member's work, or for any work
For other "chores", such as editing  these were directly pushed to the branch without


*How Communication platforms*

Slack provided tools and options for our team to communicate effectively, For example, if a team member wanted to reach out, the other team member had the option to be alerted immediately (if they did not mute notifications) in their Desktop client. In contrast to Github, whereby the recipient reads the message whenever he visits the website.

Github provided an interface for presenting our ideas and the ability for other team member's to access them.




*Evaluation of our Team's communication methods*

Even though our team used the same tools, they were used in different ways. For example, communication between our front end team was primarily done on Slack and Video meetings. 

Github was better suited for more technical discussion and this when our team used it the most to communicate. Linking to datasets, referencing commits. Keeping written communication organised and structured was more important in this case.



## Team Meetings

We did not feel it was necessary to meet every week for. Our team

Team meetings were scheduled every week for the frontend and backend development. Some team members made both meetings every week, others only 1 meeting. This was dependant on the tasks that needed to be completed.



## Kanban

*How we Utilised Kanban during the project's development*
As new work was realised, it was added

We started a new Issue and attached this to a Github Project (Kanban Board).
The opening issue contained the requirements for the Task.

<Show pic of requirements>
TODO: show pic of requirements

Further discussion of the task to complete was done either in the issue itself, or linked to from Slack, and discussed there.

By utilising Kanban and a user centered design approach. Our team was able to visually while also keeping the user centered design ioteration cyclic approach the most important part of the project.



## Gantt Chart
A Gantt chart for weeks 10-20 was created to aid the development of the project. The format closely followed the, with the same buffers utilised before the midterm.

The gantt chart provided a high level overview for the complete duration of the development, as opposed to the Kanban board, which focused on a specific milestone.



*Explain how we started to run out of time*

Areas we cut down to save time:
- instead of providing a full feature app to demo, we focused on the UI.
- our intention was to implement a fully automated system. (write about this in the section and then link to it.)



TODO: add gantt pictures
- all blog posts, bookmarks about react app
- how we are collaborating with milestones, kanban on github. we havent used time schedule this half.
- explain how we were short on time, so we decided to send user feedback for UIs.
- DO screenshots of kanban so far. update finished complete and screenshot, before and after
- we had long goals that did not end until final was handed in...and then cyclic goals for every iteration of user feedback. milestones..
- add why we 



# Reference Projects

During 

# Data Research



---

As our app calculated damage output for each league of legends champion, the data involved in the calculations had to match what game correctly.

Our team started by listing every dataset we could find that had data accurate enough to be used in the damage calculations.

Surprisingly, data published from the same company as the game was the least accurate. This was identified by comparing data output while playing the game (chat / battle logs) with the data sources.

There were 4 datasets found with parts of the data accurate enough to be used in our app.


### Data Dragon

[Data Dragon](https://riot-api-libraries.readtheldocs.io/en/latest/ddragon.html), or ddragon for short, is a set of static data files that provides images and info about champions, runes, and items. This includes info to translate champion IDs to names.[^1]

The data in ddragon is inaccurate, especially champion spell data and item stats.[^1]


### Community Dragon

CommunityDragon (also referred to as cdragon) is an open-source organization which provides tools for scraping data from riot's content delivery network, as well as provide services around hosting scraped data.[^2]


### LoL Wiki Data
the data and 
[League of Legends Wiki](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki) is a community driven platform hosted by [Fandom](https://about.fandom.com/about). 

The website contains data from League of Legends that has been sourced from the community, as well as from official sources.

As the website contains community sourced data, it is the only accurate data for champion and items. The official sources for this data are inaccurate.


## Summary

Here is a table containing the data we wanted to include in our app, and the available datasets it was included in.

|                      |         |        |
| -------------------- | ------- | ------ | 
| Data Description | Available Sources | Format  | 
| Ability Descriptions | LoL Wiki |  HTML Strings | 
| Champion/Item/Ability Thumbnails | ddragon, cdragon, LoL Wiki | Bitmap |
| Champion/Item/Ability Icons | Community Dragon | Bitmap | 
| Champion/Item/Ability Data | LoL Wiki | JSON |

Lol Wiki Data was a necessary to scrape, as 

Shown by the table above, it was evident our team needed a solution to retrieve data from the League of Legends Wiki, and Community Dragon datasets, as Ability Descriptions and Champion/Item/Ability Icons only exist within a single data source.

Community Dragon provides tools to scrape League of Legends data, but the scraper would require more resources to than other methods.

The implementation of the application's data gathering process is explained in TODO: insert link to 


# Game Extracted from Ingame Client

After evaluating the cost of resources to get these data sources into our app, web scraping was 




# Frontend Styling & Inspiration
Our team researched into

Show styling references here, and decision to create the UI similar to the in game UI, as there would be an initial level of familiarity.

- league of legends wiki
- lol damage calculator
- in game UI

planned to do ingame UI post MVP, for the initial design and to get used to tailwind we did league of legends wiki + lol damage calculator references.



# Reference Projects
- list of all reference projects here



Would you prefer an ingame UI that looks more like the, or 


[^1]: [Data Dragon - readthedocs.io](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html)
[^2]: [Community Dragon Documentation](DragonDocumentation)
