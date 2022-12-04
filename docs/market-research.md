---
output:
  pdf_document:
    path: tests/output/test.pdf
---

# Market Research

### Introduction

As responses and feedback were being gathered from our own surveys, our team carried out market research to learn about the League playerbase and the average League player.

As the survey data originates from the [League Reddit forum](https://www.reddit.com/r/league/), the audience and users of the forum (subset) might not be the same demographic as the League of Legends playerbase (superset). Therefore the survey data is only a prediction of an average League player.

Bias is clearly evident and can be seen in the Reddit Survey data. In an attempt to eliminate bias, alternate datasets have been shown to validate the survey data, and are noted in the sub chapters below.

Our team will use this data to complement our own Survey data, and influence our decisions during the development of the app.

## Demographics { style="page-break-before:always;"}

![**Figure X:** What is your age?[^1]](assets/surveys-jupyter/11501/age.svg){ width=70% height=70% }

![**Figure X:** What is your gender?[^2]](assets/surveys-jupyter/11501/gender.svg){ width=70% height=70% }

![**Figure X:** What country are you from?[^3]](assets/surveys-jupyter/11501/region.svg){ width=70% height=70% }

![**Figure X:** What is your native language?[^4]](assets/surveys-jupyter/11501/language.svg){ width=70% height=70% }

![**Figure X:** What server do you mainly play on?[^5]](assets/surveys-jupyter/11501/servers.svg){ width=70% height=70% }

This demographic data will change how we develop and market the app.

For example, we now have an indication of:

- what languages we should support first.
- what regions around the world we can target to market the app after development.

Here are some alternate datasets to validate the survey data.

**Region / Servers**: Number of players per server region in League of Legends[^6]. This shows EUW and NA Servers being the most popular servers. This is also shown in the survey data.

**Gender**: Statista data from J. Clement shows the League of Legends playerbase being 82% Male, 18% Female. Although this data is from 2018, it shows similar results to the survey data. [^7]

## Player Competency { style="page-break-before:always;"}

This data shows player competency, how skilled and competitive a player is in relation to other players.

League of Graphs dataset, pulled from an official Riot Games API, shows 58% of players reaching either Silver or Gold rank.

| Rank          | Rank % |
| ------------- | ------ |
| Challenger    | 0.011% |
| GrandMaster   | 0.026% |
| Master        | 0.25%  |
| Diamond I-IV  | 1.8%   |
| Platinum I-IV | 10%    |
| Gold I-IV     | 25%    |
| Silver I-IV   | 33%    |
| Bronze I-IV   | 24%    |
| Iron I-IV     | 4%     |

Table: **Figure X**: Data sourced from Riot Games showing the ranked percentage of the League of Legends playerbase

Player competitiveness is important to quantify as it influences feature selection. For example, implementing features into our app that are based upon gaining a competitive advantaging over other players would be more beneficial to a userbase of competent players.

Survey data for player's ranks[^8] was not shown here as League of Graphs is a more accurate source for this metric. Also, the survey data shows no correlation with the League of Graphs dataset, which shows 10% of league of Legends players reaching Platinum rank, yet the Survey data shows 20-25%.

## Player Experience

This data shows player game experience, how well a player knows or understands the game.

The difference between experience and competence can be realised in the terminology used by players:

| Terminology             | Description                       |
| ----------------------- | --------------------------------- |
| Casual                  | low competence                    |
| Professional - MinMaxer | high experience and competence    |
| Newbie - Noob           | low experience or low competence  |
| Beginner                | low experience and low competence |

Figure X shows most League of Legends players play 1-2 games daily, with 12% playing more than 5 games a day (around 2 hours playtime).

![**Figure X:** The amount of games played daily by each survey participant[^9]](assets/surveys-jupyter/6500/games-played-daily.svg){ width=70% height=70% }

Figure X shows most league of legends players started playing 10 years ago, and new players have gradually decreased since then. It also shows survey bias, as most players played the game before discovering the reddit forum. The average participant in these surveys has more game experience than an average League of Legends player.

![**Figure X:** When did you start playing League / using r/leagueoflegends?[^10]](assets/surveys-jupyter/11501/league-reddit.svg){ width=80% height=80% }

Guaging player experience can help our team identify what features are most important for our app. For example, including an explanation of game terminology in a "walkthrough" or "help" feature is less important as the playerbase is relatively experienced.

## Community { style="page-break-before:always;"}

This data shows the amount of interaction players have with other players.

Figure X shows most players play with someone they know.

![**Figure X:** Do you mostly play League with friends?[^11]](assets/surveys-jupyter/11501/friends.svg){ width=70% height=70% }

Guaging the community and interaction of the playerbase influences decisions during and after the development the app.

For example, if our userbase primarily do not play with friends:

- building collaboration and sharing features into our app will be less effective than implementing other features.

- marketing our app via a promotion whereby users share the app with friends will be less effective than other marketing strategies.

## Player Exclusivity { style="page-break-before:always;"}

This data shows if players also play other games while playing League of Legends. A fully exclusive player only plays league of legends and no other games.

Figure X shows almost 50% of League of Legends players do not play any other games from Riot.

![**Figure X:** What other games from Riot do you play regularly?[^12]](assets/surveys-jupyter/11501/exclusivity-riot.svg){ width=70% height=70% }

Figure Y shows 30% of players do not play any other non Riot games.

![**Figure X:** What other non-Riot games do you play regularly?[^13]](assets/surveys-jupyter/11501/exclusivity-noriot.svg){ width=70% height=70% }

Guaging player exclusivity can predict the amount of knowledge users might have about other existing tools. For example, a product / tool provided for other games will have more influence on user's opinions of our product.

## Platform { style="page-break-before:always;"}

This data shows the platform players play League of Legends on, Mobile, Console, or Desktop.

Desktop Platforms, Windows and OSX, play the regular version of the game. Mobile and Console platforms play the "Wild Rift" version of the game.

There is no cross play between desktop and mobile platforms. Players playing on Windows or OSX cannot play against players playing on other platforms.

Figure X shows 38% of reddit play on another platform than PC.

![**Figure X:** What other consoles do you play on?[^14]](assets/surveys-jupyter/11501/platform.svg){ width=70% height=70% }

By measuring player platform use, we can realise the benefit to our users if support for the "Wild Rift" version of the game is implemented. Also, it shows the possibilities of a player using our app through a platform that is different to the platform they play the game on.

Given this data, we will have to provide a UI interface that works well on these alternate platforms to cover all the possible scenarios below.

For players playing on Playstation, Nintendo Switch, they might use our app through the web browser running on the console (this defaults to the desktop version of responsive websites, and so will be using the desktop interface layout).

For players playing on Mobile, they will use our app with the mobile interface layout.

For players playing on PC, they will use our app with the desktop interface layout.

## Game Health { style="page-break-before:always;"}

This data measures Game Health, the change in popularity of the game over time.

#### How optimistic are you about the future of League of Legends?

Figure X shows there are more players who are neutral and optimistic, than pessimistic about the game's future.

![**Figure X:** How optimistic are you about the future of League of Legends?[^15]](assets/surveys-jupyter/136/game-satisfaction-optimism.svg){ width=70% height=70% }

Figure X shows a large variation in responses when participants were asked if they enjoy playing League more than a few years ago. Most players currently enjoy playing League.

![**Figure X:** I enjoy playing vs enjoying playing more than a few years ago?[^16]](assets/surveys-jupyter/11501/satisfaction.svg){ width=80% height=80% }

Figure X shows player's opinions on the balance of the game. Most feel the game is relatively balanced.

![**Figure X:** How happy are you with the balancing of the game?[^17]](assets/surveys-jupyter/11501/satisfaction-balanced.svg){ width=70% height=70% }

activeplayer.io[^18] further validates this survey data, showing a steadily increasing population from game launch to present.

Quantifying Game Health is useful as the amount of users using our app depends on the active game population. Development of an app to aid gameplay for a game that is steadily losing population would be a loss for the company and the stakeholders.

## Player Social Media Engagement

Figure X shows League of Legends engagement across social media platforms.

![**Figure X:** What social media platforms do you use to follow and discuss League?[^19]](assets/surveys-jupyter/11501/social-media.svg){ width=70% height=70% }

As there are some social media platforms that League players use to communicate, running marketing campaigns on these platforms will be effective. Twitter and Discord will be the best platforms to start the campaigns on.

## Monetisation Strategy { style="page-break-before:always;"}

Figure X shows around 60% of players have spent more than 100$ since they have started playing League.

![**Figure X:** How much money have you approximately spent on League?[^20]](assets/surveys-jupyter/11501/player-money-investment.svg){ width=70% height=70% }

This shows the profitability of free to play games such as League of Legends. If players are spending money on in-game purchases, they will be more inclined to spend money on our app, especially if our app allows the player to gain a competitive advantage against other players, something Riot Games in-game purchases do not permit.

As League players are used to making purchases on the game, a monetisation strategy that allows access to our app via a payment (low cost, either one-off or monthly recurring) could be more effective than a monetisation strategy whereby the app is kept publicly available and ads are displayed.

## Conclusion

By looking at survey data responses from the League Reddit forum, we can use this data to predict characteristics of an average League of Legends player.

The average League player:

- is male, between age 23-37, single, employed and educated, residing in Europe or North America, speaking English.

- is a casual player who has been playing for 10 years or longer, playing less than 2 hours per week, and has competed in the game up to a Gold or Silver Rank.

- plays with their friends.

- plays other games as well as League.

- plays on another platform in addition to Windows or OSX.

- is somewhat optimistic about the future of the game and believe the game is balance. They also currently enjoy playing it.

- uses another Social Media or Communication platform to discuss league.

- has spent 200$ - 500$ on League of Legends since the time they started playing.

## Data Sources

#### Surveys

| Date           | Sample Size | Links                                                                                                                                                                                                                                                                          |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| November 2022  | 11501       | [Reddit Post](https://www.reddit.com/r/leagueoflegends/comments/ynupp5/what_is_the_most_hated_champion_is_the_sub_biased/) - [Imgur Results](https://imgur.com/a/faxtpHx)                                                                                                      |
| June 2022      | 5190        | [Reddit Post](https://www.reddit.com/r/leagueoflegends/comments/vjq47h/who_is_the_most_popular_champion_take_the/) - [GDocs Results](https://docs.google.com/forms/d/e/1FAIpQLSe-9ihTaKFpSoL_rapmvj9cHzRtnJPpJ7jrNco-lHHXvr6hRQ/viewanalytics)                                 |
| September 2022 | 136         | [Reddit Post](https://www.reddit.com/r/leagueoflegends/comments/xpqvvk/results_of_league_of_legends_survey/) - [GDocs Results](https://docs.google.com/presentation/d/13W1MWgd7RT9RGkmwYr7_zsP1W2p1ParS/edit#slide=id.p1)                                                      |
| June 2022      | 6500        | [Reddit](https://www.reddit.com/r/lux/comments/v9l0eh/help_me_please_with_a_school_project_40_seconds/) - [Reddit](https://www.reddit.com/r/leagueoflegends/comments/vc79xr/here_are_the_results_of_the_survey_i_asked_you_to/) - [Imgur Results](https://imgur.com/a/CpmLG7Y) |

### Survey Data Processing and Accuracy

Most of the survey data was published as images on the Reddit forums.
The results were heavily compressed and hard to read.
Therefore the graphs have been manually reconstructed in a jupyter / matplotlib environment and exported as svg. Because of this, all values shown on the Y axis of the bar charts (X axis for horizontal bar charts) are within 0-1% of the original data values.

[^1]: How old are you? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^2]: What is your gender? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^3]: What country are you from? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^4]: What is your native language? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^5]: What server do you mainly play on? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^6]: theglobalgaming.com - [Number of Players per Server Region in League of Legends](https://theglobalgaming.com/lol/player-count-region)
[^7]: Statista - J. Clement - [Share of League of Legends fans in the United States in 2018, by gender](https://www.statista.com/statistics/1018232/league-of-legends-fans-by-gender/)
[^8]: League of Graphs - [Rank Distribution](https://www.leagueofgraphs.com/rankings/rank-distribution)
[^9]: Amount of games played - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^10]: When did you start playing League / using r/leagueoflegends? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^11]: I mostly play League with friends - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^12]: What other games from Riot do you play regularly? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^13]: What other non-Riot games do you play regularly? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^14]: What other consoles do you play on? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^15]: How optimistic are you about the future of League of Legends? - [r/league Reddit Survey - 136 Participants](https://imgur.com/a/faxtpHx)
[^16]: I enjoy playing League / I enjoy playing League more than a few years ago - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^17]: On a scale from 1 to 10: How happy are you with the balancing of the game? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^18]: activeplayer.io - [League of Legends Live Monthly Player Detailed Table](https://activeplayer.io/league-of-legends/)
[^19]: What social media platforms do you use to follow and discuss League? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^20]: How much money have you approximately spent on League? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
