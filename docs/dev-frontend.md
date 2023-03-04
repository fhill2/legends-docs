## Frontend

The frontend of our application refers to the

### React

React is a free and open-source front-end JavaScript library for building user interfaces based on components.[^7]
It was used to create the Presentation Layer of our 

As React is only concerned with the user interface and rendering components to the DOM[^8], additional libraries were used. [react-query](https://github.com/TanStack/query) was used for state management. [floating-ui](https://floating-ui.com/) was used to create the champion and item selectors.

The initial setup of the repository was accelerated by starting from a clone of [Vite-React-Express Boilerplate](https://github.com/joeynguyen/vite-react-express-boilerplate). This provided us a foundation to build our application on.  The use of the boilerplate in our project was permissible due to its MIT license.

The implementation of the frontend was centered around the Scenario endpoint.

#### State Mangement

Frontend state was managed inside a single object using React's `useState()` hook, and was initialised using the same types used to initialise the backend. The state was stored in the root component and was the source of truth for the other components. Child components accessed the main state object via prop drilling. 

In certain cases, data had to be passed from child components up to the root component, such as changing the champion's level or ability rank. This was implemented by passing a setter function from the parent component to the child components. When handlers were called, these functions were called to set the data.

Every time the frontend's state changed, the state object was base64 encoded and the string result stored in a variable managed by React's `useState()` hook. Anytime the base64 encoded string changed value, a callback function was called, and a GET request was sent to the scenario endpoint of the server including the base64 string in the URL. Triggering callback functions on variable state change was implemented with the `react-query` library.

This reasoning for the implementation explained above was decided as it was a requirement for scenario data to be refreshed every time the user edited a field of the interface, as every value changed on the user interface affected the damage calculation values shown on the interface.



#### Data Flow

React's `fetch()` API was used to perform GET requests to the server. Every time new data was received from the server, it was accessed, and merged with the frontend's main state object. 

To populate the champion and item selectors, the server sends a file to the client containing a map of names to IDs when the application is first visited by the user. The name is used for display on the user interface, the ID is sent to the server when a user selects a champion or item.

When a new champion is selected using the champion selector dropdown, the child component `Input.jsx` calls the function on the parent, `Champion.jsx`, and passes the name of the champion. a GET request, including the champions name, is sent to the champions endpoint on the server, and a complete champion data object is received, then the setter function is called on the parent above, `App.jsx`, with a callback function as its input argument. The callback function contains the new state of the main state object.

This flow of data is similar when a new item is selected using the item selector dropdowns, but a GET request is not performed, as no server side data is necessary for items. The id and name of the chosen item are stored in the main state object.

![Frontend Components - Arrows represents data flow](assets/development/frontend-uml-data-flow.png){width=100% height=100%}

#### Structure
If a component could provide functionality in more than a single part of the user interface, it was encapsulated into and exported from a module.

**shared.jsx** - contains utility and wrapper components to be imported anywhere else in the application. 
React provides the ability to pass components into other components. This technique is used in the application to apply borders to components, while also keeping a single copy of the styling for the border. `Border` `ShadowBorder` components in this file implement this.

`ImgWithDefault` component is also included that wraps an <img> element, and provides a custom `onError` callback handler if the src attribute path cannot be found.


Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns[^9] with components. This approach was followed and considered while creating the components of the application. Here is a summary of how the application's logic was distributed between components.

**components/Ability.jsx** - contains logic to edit ability rank selectors and JSX to 
**components/Champion.jsx**
**components/Input.jsx**
**components/IntegerIncDec.jsx**
**components/SelectSquares.jsx**
**components/Stats.jsx**



This prevented code reuse, and made maintainng the application easier.. The diagram below shows how the frontend was modularised, with 1 color per React component.


![Frontend Layout - A single color represents the same React component](assets/development/frontend-uml-layout.png){width=100% height=100%}


### Tailwind

Tailwind was chosen because.. Tailwind stays close to CSS..




### Vite



[^7] [Wikipedia - React](https://en.wikipedia.org/wiki/React_(JavaScript_library))

[^8] [Wikipedia - React](https://en.wikipedia.org/wiki/React_(JavaScript_library))

[^9] [reactjs.org - introducing jsx](https://reactjs.org/docs/introducing-jsx.html)
