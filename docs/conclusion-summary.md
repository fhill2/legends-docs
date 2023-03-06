# Conclusion - Summary

## Data

Data research was carried out before the development of the application started. 3 datasets were found with data accurate enough to be used for the application, [Community Dragon](https://www.communitydragon.org/), [Data Dragon](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html), [League of Legends wiki data](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki). Additional tools were used and developed to automate the retrieval of parts of these datasets. [ChooChooShoe's LoL Wiki webscraper](https://github.com/ChooChooShoe/lol-damage-calculator/tree/master/buildtools) was used to retrieve data from the League of Legends wiki. Scripts, written in Python, were created to post process the League of Legends wiki data, and retrieve data from the Community Dragon. Our team fulfilled the requirement of a fully automated data retrieval process. Data being used in our application could be updated without any manual intervention and on any schedule.


## Frontend

Our frontend team developed a user interface for an application that calculates damage calculations for certain champions in the game League of Legends. 
The application was developed following a user centered approach, by iteratively obtaining user feedback throughout the period of development.
Tools were chosen based on the requirements the application needed to fullfil. 
[Vite-React-Express Boilerplate](https://github.com/joeynguyen/vite-react-express-boilerplate) was used to scaffold the application, accelerating the initial setup.
React was used to provide structure to the frontend, reduce code maintenance, and to make parts of the interface modular and reusable. Javascript libraries `react-query` and `floating-ui` were used to compliment React, providing features that React did not have.
Vite and Rollup was used to bundle our application, and send a production ready application to user's browsers.
Railway was used to deploy the application to our users for testing.

Our team learned from the challenges faced during the application's development, such as appropriate React state management and data flow, using the correct hooks, and modularising code into components. Challenges surrounding create-react-app were overcome and alternative software was implemented. 2 user feedback cycles were initially planned, but tasks had to be rescheduled to accomodate the challenges faced during development. Therefore, a single user feedback cycle was only completed. 

## Backend


## Overall
