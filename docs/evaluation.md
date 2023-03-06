# Evaluation


## Data

### Data Scraping - Challenges

Our team started implementing a web scraper to pull data we needed in our application from the [League of Legends wiki](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki) into our project. The development of the web scraper ran behind schedule as our team did not predict how long it would take to implement the scraper correctly.

Our team could have avoided the delays by more accurately predicting the time the scraper would take to implement, and spending more resources during this period to complete it. This time period was not given anymore importance than the rest when it should have, as tasks planned in the future could not start until this task was complete. Also, the discovery of an existing webscraper before development started would have given our team an alternative to use as soon as the task started running late.

## Backend


## Frontend

**Frontend Data Challenges**

There were multiple challenges discovered when state management was implemented for the frontend.

Our team wanted the frontend's state to be managed in a single object, so the state was kept in a single location. For any child components using the parent state, React determines if they should re-render by shallow comparing the contents of the current state with the new state being set. Sometimes only part of the full state object needed to be updated, such as a nested object within the main state object. Once updated, this state object would not trigger a re render of the child components, and the new data was not shown on the UI.

React documentation presents a solution to setting state, involving destructuring into the `setState()` function. This solution would be adequate for less complex state objects. With our state object, the syntax was complex and easy to write incorrectly, and the state update was implicit.

Also, compared to stateful React Components, functional React components do not provide a callback that is executed after a state update, only the `useEffect()` hook can be used to execute code after a state update. In the current implementation, this restricted the data flow of our application. The execution flow, from when the user performs an action, had to finalise with a single state update, as setting state in React is asynchronous, and no callbacks could be leveraged to perform actions after the state update. `useEffect()` was implemented as a solution, but introduced infinite loops because no variables could be passed into the `useEffect()` hook to conditionally trigger it as the custom setter functions replaced the entire state object every time.

Our final implementation involved using the `react-query` library, and a new variable. Every time the main state object was updated, a base64 string was generated using the contents of the state object and stored into the variable. This state variable was watched by the `react-query` library. When the contents of the base64 string variable changed, a GET request was sent to the server, requesting new data for the application.

After the library was implemented and the state management was fixed, our team evaluated the solutions implemented and realised an important
detail overlooked. Frontend state only needed to store data related to the actions a user performs on the UI. Any other data can be sent to the client when a component first renders or the application is first visted. This reduced the amount of frontend state and did not require a state object with nested objects, therefore not requiring custom setter functions, or an external library dependancy. `useEffect()` hook could now be used as only parts of the state would be updated.

As solutions were implemented that were not going to be used in the final product, development time was wasted. Better planning and consideration of the frontend's data use before development would have saved our team resources. If the application was developed again, or developed further to be released to the public, the state management of the frontend would be reworked to reduce complexity and ease the maintenance of the application.


**create-react-app - Challenges**

Multiple challenges were faced by our team because we decided to start from a react project scaffolded by create-react-app.

As create-react-app does not scaffold with Tailwind CSS by default, additional setup was necessary to use Tailwind CSS. Also, Tailwind is used with create-react-app, [custom PostCSS configurations are not supported](https://tailwindcss.com/docs/guides/create-react-app), and are incompatible with many important tools in the PostCSS ecosystem, like `postcss-import`.

The team wanted to share types to initialise the React frontend, and the Express server. Because our team were using Javascript, we could not use Typescript's features to import the types before the code is compiled to Javascript. As `create-react-app` does not allow files existing outside the `src` directory to be imported, we created a custom build script in Python that symlinks the shared files to both `client` and `server` `src` folders.

During the later stages of development, when we started to prepare for user feedback and testing, Railway would error when building the docker images for deployment. Further debugging found the custom build scripts we implemented to share types in the `create-react-app` project were causing this.

At this stage, it became evident that `create-react-app` was not integrating with the other software and tools our team were using to develop the application, and alternatives were considered that could provide the same features. 

Vite was chosen as an alternative, as it is lightweight and minimal, and migration from `create-react-app` to Vite would not cost our team a lot of resources.

By using Vite, the project did not need a custom build script as types could be shared within the project. The removal of the custom build script fixed the errors when building a docker image of the application for deployment.

Resources could have been saved, and these problems avoided, if more research on the compatability of the chosen tools was carried out before development.

**Post Development**

During development, our team paid attention to the tasks that needed to be completed for post development to start. For example, before the application's release, a deployment provider was setup, and data retrieval was fully automated. These tasks were completed earlier than necessary so our team would have less workload during the initial weeks of the application's release.

