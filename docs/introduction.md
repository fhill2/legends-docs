# League of Legends Damage Calculator/Optimizer

Despite the huge popularity of the game, there is a notorious lack of tools and resources for players who would like to test and deepen their knowledge about the game. Although the game itself provides a practice tool for players who look to test out characters capabilities, the functionality of it is limited, restricted to one character (or “champions” as there are called in game) at the time, having to use external tools such as notepad or excel to keep track of results and a lack of control of multiple variables making the theory crafting and testing for the game inefficient and bothersome.

## The proposal

Build a web app that allows users to bypass the hassles described before by being able to manipulate key variables in order to calculate and optimize damage done by the user champion of choice. The app should, as a base requirement, allow the user to pick a champion, choose its equipment and a target using an intuitive user interface and the app should return the damage calculations for said situation. For said purpose, we will take inspiration from optimization tools for other games that exist on the web (links to them at the end). Further requirements beyond the base functionality as a calculator will include optimization for finding out the maximum damage that could be done as well as adding restrictions for said optimization so the results can be more relatable to actual in-game situations. All the data needed for the app to work is freely provided by Riot Games (https://developer.riotgames.com/docs/lol) which regularly updates its Data Dragon package with all the data and assets needed for the development of the product.

## The targeted market

This software is mainly aimed at players with a relatively high level of understanding of the game and would like to refine and keep updating their knowledge in order to get better results in an ever-changing game.

## Understanding what we will be calculating

League of Legends is a Multiplayer Online Battle Arena (MOBA) in which two teams of five players battle for resources in the arena in order to spend those resources on equipment for their characters in order to become stronger and defeat the enemy team by destroying their base. How much damage a champion can do is a core aspect of the game due to its player vs player nature and, although there is quite a bit of nuisance to the act of “dealing damage” in game beyond just looking at the numbers and damage formulas, we believe that looking at the numbers specially will give players a solid base from which each user own knowledge will allow them to draw further conclusion for themselves as individuals in each of their games. By this we recognize that we are not trying to “solve” the act of “dealing damage” in the game but provide a solid foundation for experienced players to draw their own conclusions and share them with the community.

## Defining “dealing damage”.

Each champion in game has a set of base statistics, some of which increase passively during the games as the champions level up. This set of stats are called the champion “base stats”. Lets look at an example for one of League of Legends more iconic champions Ahri:

