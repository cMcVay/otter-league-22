# Otter Fantasy Baseball League

A Fantasy Baseball App for the casual baseball fan.

[Current Version of Site](https://otterproject.space/)

[Past Version of Site](https://lucid-banach-6d2c6f.netlify.app/)

## Table of Contents

* [Objective]()
* [Approach]()
* [Implementation]()
    * [Game]()
    * [Design]()
    * [Style]()
        * [Fonts & Colors]()
        * [Wireframes]()
* [Updates]()
* [Creator & License]()

## Objective

**A web app that allows multiple users to participate in a fantasy baseball league that is less complex and demanding than a traditional fantasy baseball platform.**

After playing in a fantasy baseball league on a well know fantasy sports platform, I found multiple problems with the experience.
1. **Daily Lineup Changes Necessary:** Since baseball is played daily, maintenance of your fantasy lineup is a daily task. For the casual fan, it is unrealistic that they will have time/ remember to log on everyday across a 180 day season.
2. **Complex Scoring:** Fantasy Baseball has two traditional scoring systems: Roto and Points. In a roto league, players performances in certain categories (ex. Home Runs) are summed up and compared to an opponent's, or the rest of the league's, categories. In a points league, player performance results in a certain amount of points, and the sum of a lineup's points are the team's point total. These can be difficult scoring systems if you aren't fully familiar with all of the statistical categories. Additionally, they can be hard statistics to track over the course of multiple games.
3. **Every Game Counts:** Fantasy Baseball platforms use the player's performance from every game. This means that, across a given scoring period, every action that a player does has either a positive or negative effect on your team's success.
Without a platform that could accomodate customized solutions to these problems, I aim to create my own app.
## Approach

In order to build this app. I learned web development and coding. Through online tutorials, videos, and Codecademy courses, I learned HTML, CSS, and JavaScript.

The app will be a react app that way it can accomodate scoring updates to the DOM while also giving users the ability to interact with their roster.

I will begin with a more static site that derives it's scoring from an array that holds player's performance. There won't be any user interactivity beyond a player search feature and react router. Otherwise, the interactive components will be introduced when there is an ability to log in to an account and once there is back end to save user's roster updates.

The style will be designed with mobile screen sizes in mind as the most frequent view dimensions.
## Implementation

### Game
As a reminder, the problems outlined in the objective were:
1. Daily Lineup Changes Necessary
2. Complex Scoring
3. Every Game Counts
The solutions and the foundation of the Otter League are:
1. **Auto Lineup Adjustments:** Lineups are optimally adjusted automatically. Therefore, users will not be at a disadvantage if they miss a lineup adjustment or don't pay attention for several days. Additionally, 9 day scoring periods allow for more time for engagement. If users are busy or disconnected for several days, they can check back in within the 9 days without feeling lost or disappointed.
2. **Simplified Scoring:** Player performance is evaluated on a 5 point scale. While the formula is complex in itself, it is not necessary for users to understand it's intricacies. Users simply will know a player's success using the accessible 5 point scale. When watching a game, users don't need to track any statistics because the scoring scale simplifies in a way that more closely reflects a qualitative evaluation.
3. **Only The Best Game Counts:** This is the biggest difference from traditional fantasy baseball leagues. Only the best player performance in a given period will be used for the team's score. Therefore, when watching a game, a user can continually root for positive actions without the fear that negative actions will diminish their score. Also, if a player has a great individual game, it matters more to a users team than if they have consistent average success. In this way, there is greater excitement for the casual fan because if they only can view a single game in the 9 day period there is an actual chance that they witness an impactful performance to their team's success.

The basic structure will be 6 teams. Each team will have a roster of 15 players (5 infielders, 5 outfielders, and 5 pitchers). New players may only be added to a team to replace injured players. Once a new player is added, they will remain on the team for the rest of the season. The roster will consist of 15 active players and an unlimited number of reserve players that are either injured players or players added as injury replacements.

There are 20 scoring periods of 9 days each across the entire season. Each scoring period consists of three head-to-head matchups.

The best 3 player individual game performances at each position are counted towards the scoring period total for a team.

Pitchers are evaluated on a 10 point scale. 

* Final scores for each scoring period are calculated through the following process:
* Player performance is calculated using formula that adds weighted values for certain statistics then compares them to a 5 point scale
* The top 3 infielders and top 3 outfielders scores are selected.
* The Opponent's pitcher's have their performance calculated using a formulat that adds weighted values for certain statistics then divides by the extent of the pitcher's game participation and rounds to nearest integer on 0-10 scale.
* The Opponent's top 3 pitchers are summed and compared to ranges on a 4 point scale.
* The team's infielder and outfielders have the Opponent's pitching range subracted from each individually (ex. Opponent pitchers are range 3, so infielder that had 5 has 2)
* The team's scores after subraction are summed to determine the team's final total.
* The totals are compared to determine matchup winner. 

The teams with the two best head-to-head records at the end of the season are placed in a matchup where their top player performances from the entire season are compared in the same system as above. The winner is the champion of the league.
### Design

The app will consist of a team page, standings page, roster page, and player page.

Team page will serve as the home page witht the other pages appearing using react router.

The **team page** will have the team's current score and results, the team's placement in the standings, a brief view of the roster, and any league wide news articles.

The **standings page** will have the win-loss records for each team displayed in a table. It will also have the statistical leaders for the players.

The **roster page** will display the active and inactive players on the team in a table that shows the player's stats. This page will also eventually allow for user interactions to alter the roster.

The **player page** will display a players details, status, team, and statistics. If a player is available, there will be interactivity to add the player.

### Style

The overall style will be focused on simplicity and brevity. Names and scores will be emphasized while smaller details will often be hidden. The layout will focus on ease for mobile interactions by using button like elements rather than text link formatting.

#### Fonts & Colors
The fonts used are:
**Headers:**
**Paragraph:**

The color scheme:

#### Wireframes

## Updates
## Creator & License

This app is created by Connor Ross McVay

Copyright (C) Connor Ross McVay

