# Appendix

## Midterm Extracts - For Reference / Internal Links Only

*The following content has been extracted from the midterm submission, so it can be referenced in the final deliverable*

### Midterm Extract: Gantt Planning
#### Iterations

The iterations for sections shown in the Gantt Chart defines a period where we received feedback from surveys, market research, or our focus group and developed and refined the feedback into the project.

By including these iteration cycles into the Gantt chart, we could show the project's progression more clearly.

#### Buffers

The Gantt Chart shows buffers that define a period of time after our scheduled work. If we did not finish the work by the buffer end date, the work we planned in the future would have to be adjusted to compensate.

This was important when scheduling the time designated for obtainining responses for our surveys, as our team could only estimate how long it would take for us to gain feedback from them that satisified our needs to improve and iterate on aspects of the project. If we did not gather satisfactory feedback by the buffer end date, we planned to accept the responses as they are, as spending more time gathering responses would affect other deadlines we set in the future.


Most work was completed on schedule in the time alloted in the Gantt Chart. Some tasks ran into the task's alloted buffer zones, and there were only a few times the Gantt chart was adjusted. 

#### Workload

Our team planned for weeks where the project demanded more resources, and noted these periods in the Gantt Chart. These planned work areas ensured all members of our team spent more of our resources at the same time, and managed our team's planned work expectations.

This section of the Gantt chart was adjusted throughout the project's development. 

After our second user feedback iteration, a second high risk area was identified after our surveys / questionnaires ran behind and the Gantt Chart was edited to show this.



### Midterm Extract: Damage Calculation Research

#### Champion Base stats and levels

The most basic and obvious variables to consider in the damage output of any ability or basic attack are the attacking and attacked champion stats. As mentioned before, every champion has a set of statistics (health, attack damage, armor, magic resistance, etc.) that are inherent to the champion and are mainly only altered by a champion leveling up during the match; these statistics are usually referred to as the champion **base stats**. As you can see in the images below, a champion starts with some stats at level 1, increasing as the champion levels up to level 18.

![Figure 9 - Ahri stats at champion level 1 - Source League of legends wiki](assets/midterm/introduction/image5.png){ width=50% height=50% }

![Figure 10 - Ahri stats at champion level 18 Source League of legends wiki](assets/introduction/image16.png){ width=50% height=50% }

Although all champions have relatively similar values, individual values for each champion should be considered to maintain accuracy regarding results. As a minimum requirement, the app should be able to let users choose their champion at their desired level while manually altering those of the target since they will also be required to calculate post-mitigation damage (see the previous section to understand pre- and post-mitigation damage). If time and resources allow it, the app should eventually let the user choose the attacked champion and their level as well for the result of the calculator to be more easily relatable to real in-game situations. However, the priority on this point is rather low.

#### Ability Ranks

Another important variable when calculating the output of an ability is its current rank. Ability ranks work as follows: Whenever a champion levels up in a game, the player can choose to rank up an ability. Basic abilities (Q, W, and E) can usually rank up from rank 1 to 5, while the ultimate ability only has three ranks. A player can only rank up their ultimate ability to Rank 1 from champion level 6 onward, Rank 2 from champion level 11 onwards, and Rank 3 from

champion level 16 onwards, and finally, no ability can be at a rank higher than the champion’s current level divided by two and rounded up. That is to say, for example, given a champion level 8, even though they could have ranked up their abilities eight times, no basic ability could be at rank five since half the champion level rounded up is 4. Any champion has to be at least level 9 to rank up any ability to rank 5. These ability ranks are important since, as we have seen in the “Understanding abilities, pre- and post-mitigation damage - Abilities examples” section, ability ranks usually alter how much base damage an ability deals as well as, in some cases, even alter the scaling factors. We believe that the ability for the user to select ability rank-ups should be included in the MVP. Some protection should be implemented to deny the user from ranking up abilities in a way it would be impossible inside a real game (for example, having all abilities at max rank when the champion is level 6). However, the app’s main objective is to give players a tool to analyze and interpret the results; we should reduce the chance of errors to give more accurate results.

#### Items and effects

The last of the fundamental variables in our app and the most important. During any match, players can buy items from a shop inside the game using in-game resources. These items, once bought, are equipped to your champion, and a max of 6 items can be equipped at any given time. Items provide champions different benefits when equipped; these benefits (commonly referred to as **buffs**) can be the following

- Stat buffs: Improve champion statistics (health, attack damage, ability power, etc.); most items in the game give some form of a stat buff.
- Passive effects: Are constantly active while the champion has the item equipped.
- Auras: Are buffs or debuffs that affect nearby friendly or enemy units respectively but do not affect the holder of the aura item.
- Active effects: Function similarly to champion abilities and we do not concern ourselves with them since their effect is usually rather simple and can be easily predicted without the need of a calculator.

Items are also classified into “quality tiers” increasingly as follows:

- Starter: Items intended to be effective during the beginning of the game and do not usually build into higher-tier items.
- Basic: These items provide a single stat attribute or special effect.
- Epic: Provide additional stats and/or effects with effects usually being lesser versions of the legendary item they build into.
- Legendary: Provide the greatest stat and a significant special effect. They do not build into any higher-tier items
- Mythic: Same as legendary items but they additionally provide bonus stats for every other legendary item in the inventory. Only one mythic item can be equipped at any time.

Some items possess the “unique” attribute, which means only one item that shares the same “unique” attribute can be present in the build. Let's look at the following example to make things clearer:

![](assets/introduction/image15.png){ width=40% height=40% }

![Figure 11 - Lord Dominik’s Regards and Last Whisper item group - Source League of legends wiki](assets/midterm/introduction/image11.png){ width=60% height=60% }

As we can see, the item Lord Dominik’s Regards (LDR for short) provides three stats when equipped by any champion: +30AD, +20% critical strike chances, and 30% armor penetration, and it also gives a unique effect called Giant Slayer. In addition to doing exactly what it reads, this unique effect limits the item for it only to have one copy of it at any given time. Furthermore, we can see that the item has another limitation: its unique effect belongs to a group called Last Whisper; any champion is limited to only having one item from the said group at any given time. While most players from our target market should know about these limitations, implementing them in the app would be wise to avoid users getting unreplicable results. However, there could be some value in allowing further theorycrafting (Theorycrafting refers to mathematically analyzing game mechanics, usually video games, to discover optimal tactics or strategies).

#### Dragons and Baron buffs

In the current version of League of Legends, there are currently 1 Baron buff and 6 Dragon buffs listed in the table below.

![](assets/introduction/image12.png){ width=70% height=70%}

![Figure 12 - Dragon buffs and Hand of Baron buff - Source League of Legends wiki as of 27/11/2022](assets/midterm/introduction/image10.png){ width=40% height=40% }

Although these buffs can be obtained in a game, and they affect all the champions in one team either for a fixed duration or until the match is over, we will not concern ourselves with the effects of said buffs in our damage calculator. There are two main reasons for this decision, the first being that most of these buffs do not affect the damage output of most champions, and in the case, they do (like Infernal Might or Hand of Baron), they do in a straightforward manner of just flat out increasing the damage. Although we do concern ourselves with precision regarding the output of the damage calculator, as we have stated before, the main value we expect users will get from this app will come from looking at the relative differences between different build interactions for any given champion rather than the exact numbers. The second and last reason we ignore this game mechanic regarding our app is because “Dragon buffs” are randomly selected every game, and there is no way for any player to know which Dragon buffs will be available in their upcoming matches. Due to these two reasons, we see little value in implementing this feature into the app.

#### Runes and Shards

Lastly, we have Runes and Masteries. Runes are a set of passives, similar to item passives but comparatively weaker than any player has to choose before they start a match. Skipping the details of how they are chosen, this game mechanic has similar issues to that of Dragon and Baron buffs regarding our calculator. The main reason is that most of the runes do not influence damage output whatsoever, and those that do, either do champion-independent damage of their own, increase champion stats by minimal amounts (less than even basic items) or amplify a champion´s damage output by really small amounts. Shards are simply a small amount of extra stats to the champion, as seen in the chart below.

![Figure 12 - Shards - Source League of Legends wiki as of 27/11/2022](assets/midterm/introduction/image6.png){ width=90% height=90% }

We understand that by not implementing these systems into the calculator, we will be dealing with some margin of error when calculating the damage output of any champion ability or basic attack. However, we consider this margin small enough for its omission to deliver a product that can provide meaningful data to players to make better decisions when building their characters. We only close the door to their later implementation by our team or any other interested party once the calculator's first viable version is released.

#### Damage calculation

Champions have mainly two ways of dealing damage, basic attacks or auto-attacks (AA for short), which are mainly physical damage, and abilities or spells, which can deal physical, magical or true damage. The amount of damage any AA or ability deals depends on the stats of the attacking champion and the stats of the champion receiving said attack. Let’s look at the following example: we have a level 1 Ahri (53 base attack damage) doing a basic attack on another enemy champion who, for this scenario, has 0 armor, hence 0% physical damage reduction. Since Ahri´s basic attack depends 100% on her attack damage and the enemy target has no physical damage reduction, the target is expected to take exactly 53 physical damage. Being able to simulate this type of scenario is the primary goal of the app. When the equipment gets involved, most of the equipment (commonly referred to as Items) gives stats to champions that possess them. Let's give the Ahri from our previous example the following item:

![Figure 1 - Long Sword - Source League of Legends wiki](assets/midterm/introduction/image17.png){ width=40% height=40% }

And let’s say our enemy target now has 100 armor, equating to 50% physical damage reduction. As you can see, our level 1 Ahri with a long sword now has 63 total AD (53 base AD from itself + 10 AD from the long sword). If Ahri were to basic attack our now armor-equipped target, the damage dealt would be: Total damage from source _ Target’s Damage reduction = 63 _ 0.5 = 31.5 damage.

Each champion will have different damage formulas involving other stats for their abilities and their respective auto attack, but I hope this simple example helps you understand the topic better.

For further information regarding damage calculations, I recommend the following link: https://leagueoflegends.fandom.com/wiki/Damage, mainly the sections Damage type classifications and Calculating Damage.
