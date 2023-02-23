# Evaluation


# Data

*Implementing a data gathering process was taking too much resources*

Our team decided between two data gathering processes before implementing

- Scraping 


Our team decided to use ChooChooShoe's web scraper




*Making a decision to use a third party scraper after realising implementing our own was too costly*
Our team planned to create a web scraper that could scrape the 

After our team had decided to scrape the data 

Explain how we decided to build our own custom implementation, and 



This was viable, as multiple team members had experience.



This became more we spent resources on this task, as there tasks we could not start until the correct data was in place.

Or we could start from their own scraped implementation, clean up the code that we did not need. Ideally

Our team decided


# Frontend

*Tailwind did not integrate easily with create-react-app*


*sharing types and data across server and client backend*

The team wanted to share types to initialise the React frontend, and the Express server. Because we were using Javascript and not Typescript, this meant importing a shared typed file as we did not want duplicate code. The project was held inside a monorepo, with a separate package.json for both `client` and `server`.

As `create-react-app` does not allow files existing outside the `src` directory to be imported, we created a custom build script in Python that symlinks the shared files to both `client` and `server` `src` folders.


# Deployment 


*create-react-app caused deployment docker image*

During the later stages of development when we started to prepare for user UI testing, the building of the docker images for the automated deployments of the application would fail. This was due to the custom build scripts we created to remedy the `create-react-app`.

At this stage, it became evident that `create-react-app` was not integrating with other software and tools being used to develop the app, and alternatives were researched that could provide the same features. 


Vite was chosen as an alternative, as it was lightweight and minimal, and migration from `create-react-app` to Vite would not cost our team a lot of resources.

By using Vite, the project did not need a custom build script as no files needed to be symlinked. The removal of the custom build script fixed the errors when building a docker image of the application for deployment.
