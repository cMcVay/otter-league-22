# Otter Fantasy Baseball League

A Fantasy Baseball App for the casual baseball fan.

[Current Version of Site](https://otterproject.space/)

[Past Version of Site](https://lucid-banach-6d2c6f.netlify.app/)

## Table of Contents

* [Objective](https://github.com/cMcVay/otter-league-22#objective)
* [Approach](https://github.com/cMcVay/otter-league-22#approach)
* [Implementation](https://github.com/cMcVay/otter-league-22#implementation)
    * [Game](https://github.com/cMcVay/otter-league-22#game)
    * [Design](https://github.com/cMcVay/otter-league-22#design)
    * [Style](https://github.com/cMcVay/otter-league-22#style)
        * [Fonts & Colors](https://github.com/cMcVay/otter-league-22#fonts--colors)
        * [Wireframes](https://github.com/cMcVay/otter-league-22#wireframes)
* [Updates](https://github.com/cMcVay/otter-league-22#updates)
* [Creator & Copyright](https://github.com/cMcVay/otter-league-22#creator--license)

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

**Headers:** TBD

**Paragraph:** TBD

The color scheme:
![Otter Projects](https://user-images.githubusercontent.com/86023551/186447961-0c78337b-cf2c-4bfa-a584-3a1e4a332601.png)


#### Wireframes

![OtterHome](https://user-images.githubusercontent.com/86023551/186444352-0d4275af-d9d1-4da3-b77e-391302a5a2a7.png)  
**Home Page:** A view of the current score and a preview of the roster. All items are clickable and link to a new component.  
![OtterBoxScore](https://user-images.githubusercontent.com/86023551/186444405-e35239b6-79dd-4142-8c2f-f0929efd2f99.png)  
**Box Score:** When the scoreboard on the home page is clicked, this box score will show up. Clicking on the team name buttons will swap the players and stats that are displayed. Clicking on a player will open a window that shows the player profile.  
![OtterPlayerProfile](https://user-images.githubusercontent.com/86023551/186444434-c3a0f30e-38ea-43cd-a49d-3e5fbade74c8.png)  
**Player profile** window.  
![OtterStandings](https://user-images.githubusercontent.com/86023551/186444452-7c27d5e0-ddb3-43b6-bd8e-0b01ac542b1c.png)  
**Standings:** Clicking on the standings button on the home page will bring users to the standings page.  


## Updates

The current display of the app is simplified and basic to allow users to interact with the app as changes are made. Similar to an agile methodology, feature changes happen in stages as the app is still active for users. 

The next changes will be to the UI and styles to make the app match the wireframes. This will be achieved by creating components for each of the home page buttons and for each page. These components will use css in js to control the styles. I'm choosing this so that there is more control over each component's style.

Another change will be to the way that the stats are read by the site. I want to make a store that everything draws from. This store will get created when the page is loaded. In the future, this store will be created from an API to the statistics in a database. But until I know more about back end, I will be using js to convert player statistics from an array into player objects.

Authentication and authorization will allow users to log in to an account. This account will give them access to certain leagues (that they are a part of) and from their home page, they will see all features specific to their team. This will also allow users to interact with the app by adding players, editing lineups, and drafting. These interactions will affect a database which stores the league information so that other users in the same league will be able to see the changes.

In the further future, I will learn swift in order to code this as a mobile app.

## Creator & Copyright

This app is created by Connor Ross McVay

Copyright (C) Connor Ross McVay

