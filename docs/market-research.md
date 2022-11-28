---
output:
  pdf_document:
    path: tests/output/test.pdf
---

# Market Research

add:
You can also filter this information by Region. Here is the website : https://www.leagueofgraphs.com/rankings/rank-distribution
Also I found this article with more generic stats that may be useful https://activeplayer.io/league-of-legends/

### Survey Data Processing

The posted surveys were heavily compressed and hard to read once added to the pdf, therefore the graphs have been manually reconstructed in jupyter / matplotlib and exported.

Because of this, all values shown on the Y axis of the bar charts (X axis for horizontal bar charts) are within 0-1% of the original data values.

### Survey Bias

Figure X shows hows this survey has bias towards experienced players, due to the participants all being members of the League of Legends Reddit forum.

This is due to a time period whereby a player has started playing but hasn't discovered the reddit forum yet, meaning less beginner players will be included in these results.

Unfortunately Riot Games does not publish this data without it...

![**Figure X:** When did you start playing League / using r/leagueoflegends?[^1]](assets/surveys-jupyter/11501/league-reddit.svg){ width=80% height=80% }

Also, this survey does not take China into account, as a large playerbase.

## General Demographics

![**Figure X:** Age range of League of Legends playerbase[^2]](assets/surveys-jupyter/11501/age.svg){ width=70% height=70% }

![**Figure X:** What is your gender?[^3]](assets/surveys-jupyter/11501/gender.svg){ width=70% height=70% }

![**Figure X:** What country are you from?[^4]](assets/surveys-jupyter/11501/region.svg){ width=70% height=70% }

![**Figure X:** What is your native language?[^5]](assets/surveys-jupyter/11501/language.svg){ width=70% height=70% }

- guages what languages to support first for the app

Note this chart is most likely affected by the reddit server mainly being an english speaking server.
Asian countries will be using their own networks to communicate.

![**Figure X:** What server do you mainly play on?[^6]](assets/surveys-jupyter/11501/servers.svg){ width=70% height=70% }

## Player & User Skill { style="break-before:always;"}

This data on the player's skills:
the ratio of beginner players to professional / experienced players.

- we dont need to provide game specific knowledge in our "walkthrough" feature of our app, as only x amount of players have 1% of experience.

as shwon in Figure X when most league of legends players started playing 10 years ago, and new players have gradually decreased since then.

Figure X shows most League of Legends players play only 1-2 games a week, with only 12% playing more than 5 games a day (2 hours playtime)

![**Figure X:** The amount of games played daily by each survey participant[^7]](assets/surveys-jupyter/6500/games-played-daily.svg){ width=70% height=70% }

## Community

![**Figure X:** Do you mostly play League with friends?[^8]](assets/surveys-jupyter/11501/friends.svg){ width=70% height=70% }

Community influences:
how effective a marketing strategy will be that focuses on people sharing with friends. (10% off recommend a friend).
If none are sharing with friends, a promotion like this will be pointless.

should we prioritise building features that allow sharing into the app?

## Player Exclusivity

these metrics measure how dedicated a typical player is to league of legends.

a fully dedicated player plays league of legends and no other games.

(add more metrics here) -

Figure X shows almost 50% of League of Legends players do not play any other games from Riot.

![**Figure X:** Do you mostly play League with friends?[^8]](assets/surveys-jupyter/11501/friends.svg){ width=70% height=70% }

![**Figure X:** What other games from Riot do you play regularly?[^9]](assets/surveys-jupyter/11501/exclusivity-riot.svg){ width=70% height=70% }

If a player is exclusive to a game, it means once we have , they are more likely

Figure Y shows 30% of players do not play any other non riot games.

![**Figure X:** What other non-Riot games do you play regularly?[^10]](assets/surveys-jupyter/11501/exclusivity-noriot.svg){ width=70% height=70% }

As there are a lot of players who also play other games.

## Platform { style="break-before:always;"}

Figure X shows 38% of reddit play on another console/platform than PC.

![**Figure X:** What other consoles do you play on?[^11]](assets/surveys-jupyter/11501/platform.svg){ width=70% height=70% }

### Platform Considerations

This means we will have to provide an interface that works well on these alternate platforms to cover all these possible scenarios:

For players playing on Playstation, Nintendo Switch, they might use our app through the web browser running on the console (this defaults to the desktop version of responsive websites, and so will be using the desktop interface layout).

For players playing on Mobile, they will use our app with the mobile interface layout.

For players playing on PC, they will use our app with the desktop interface layout...

## Game Health { style="break-before:always;"}

get historic player count metrics and profits

Game Health determines if
some games have drastically reduced in popularity over the last few years (WOW).

As the amount of users of our application will be dependant on how many users are playing the game, looking at the projected future of the game is important.

(We dont want to develop an app for a game that is about to be closed)

These metrics quantify game health (get metricsfor this):

- historic profits

#### How optimistic are you about the future of League of Legends?

![**Figure X:** How optimistic are you about the future of League of Legends?[^12]](assets/surveys-jupyter/136/game-satisfaction-optimism.svg){ width=70% height=70% }

Despite not playing as much, people still enjoy it very much.

Figure X shows players, when players were asked how much they agreed with the statement "I enjoy playing League" on a scale from 1-10, two thirds answered with 7 or higher. Only 4% said 1. At the same time, players enjoy playing League now more than a few years ago.

Most users either enjoy it only slightly or a lot more, while the overall agreement is marginally positive with an average score of 5.2.

![**Figure X:**I enjoy playing vs enjoying playing more than a few years ago?[^13]](assets/surveys-jupyter/11501/satisfaction.svg){ width=80% height=80% }

![**Figure X:**LoL players asked - How happy are you with the balancing of the game?[^14]](assets/surveys-jupyter/11501/satisfaction-balanced.svg){ width=70% height=70% }

## Advertising / Marketing Strategy { style="break-before:always;"}

By researching into the
This data can be used when first advertising and placing ads, and in SEO, after the app has been developed, to more precisely target

For example, run facebook ads to bring in more users of the app to this targetted demographic.

- show here how many people spend money on the game
- are league of legends profits dropping, will the game go away soon.

as most players play on NA servers, and 41% of players are located in America, it makes sense to focus future advertising efforts in NA.

Figure X shows League of Legends engagement across social media platforms.

If running paid ads or campaigns on social media platforms. Twitter and Discord will be the best platforms to start.

![**Figure X:**What social media platforms do you use to follow and discuss League?[^15]](assets/surveys-jupyter/11501/social-media.svg){ width=70% height=70% }

## Monetisation Strategy { style="break-before:always;"}

to recoup the costs of the development of the project, we can monetise the completed version of the app in 2 different ways:

paid recurring monthly subscription - subscription does not display ads
free to use, displaying ads

show expected market traffic on similar league tool utility build websites
show how much people spend

We will not be monetising the app, but we wanted to know if this was a viable option for the app...

around 60% of players have spent more than 100

If we charged, th

This really shows the profitability of free to play games such as League of Legends.

Also worth mentioning is that League of Legends.

. So providing that actually provides a competitive advantage to

![**Figure X:**How much money have you approximately spent on League?[^16]](assets/surveys-jupyter/11501/player-money-investment.svg){ width=70% height=70% }

## Conclusion

### The average League of Legend Player

Below summarizes the average League of Legend player:

- male, young, single, employed and educated.

- has been playing for 10 years or longer

- plays less than 2 hours per week

Note, these summarisations have

### Champion Popularity

The app will initially support calculations for 3 out of the 162 playable champions in the game, Kai’sa, Ezreal and Ahri. These are the most popular champions played according to a r/league survey^[17]. Support for the rest will be gradually implemented, but not initially supported.

## Data Sources

#### Surveys

All data surveys are from the [League Of Legends Reddit forums](https://www.reddit.com/r/league/).

| Date           | Sample Size | Links                                                                                                                                                                                                                                                                          |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| November 2022  | 11501       | [Reddit Post](https://www.reddit.com/r/leagueoflegends/comments/ynupp5/what_is_the_most_hated_champion_is_the_sub_biased/) - [Imgur Results](https://imgur.com/a/faxtpHx)                                                                                                      |
| June 2022      | 5190        | [Reddit Post](https://www.reddit.com/r/leagueoflegends/comments/vjq47h/who_is_the_most_popular_champion_take_the/) - [GDocs Results](https://docs.google.com/forms/d/e/1FAIpQLSe-9ihTaKFpSoL_rapmvj9cHzRtnJPpJ7jrNco-lHHXvr6hRQ/viewanalytics)                                 |
| September 2022 | 136         | [Reddit Post](https://www.reddit.com/r/leagueoflegends/comments/xpqvvk/results_of_league_of_legends_survey/) - [GDocs Results](https://docs.google.com/presentation/d/13W1MWgd7RT9RGkmwYr7_zsP1W2p1ParS/edit#slide=id.p1)                                                      |
| June 2022      | 6500        | [Reddit](https://www.reddit.com/r/lux/comments/v9l0eh/help_me_please_with_a_school_project_40_seconds/) - [Reddit](https://www.reddit.com/r/leagueoflegends/comments/vc79xr/here_are_the_results_of_the_survey_i_asked_you_to/) - [Imgur Results](https://imgur.com/a/CpmLG7Y) |

[^1]: When did you start playing League / using r/leagueoflegends? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^2]: How old are you? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^3]: What is your gender? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^4]: What country are you from? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^5]: What is your native language? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^6]: What server do you mainly play on? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^7]: Amount of games played - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^8]: I mostly play League with friends - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^9]: What other games from Riot do you play regularly? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^10]: What other non-Riot games do you play regularly? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^11]: What other consoles do you play on? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^12]: How optimistic are you about the future of League of Legends? - [r/league Reddit Survey - 136 Participants](https://imgur.com/a/faxtpHx)
[^13]: I enjoy playing League / I enjoy playing League more than a few years ago - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^14]: On a scale from 1 to 10: How happy are you with the balancing of the game? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^15]: What social media platforms do you use to follow and discuss League? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^16]: How much money have you approximately spent on League? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
[^17]: What is your main champion? - [r/league Reddit Survey - 11501 Participants](https://imgur.com/a/faxtpHx)
