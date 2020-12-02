# React App for Adviqo Test.

steps to run the project

1) clone the project.

2) execute 'npm install' to install dependencieis.

3) execute 'npm run start' to start the project

5) execute 'npm run start-node' to start a node server to serve data



### Home page 
Home page has the rate list of advisors viewable in table. We can generate as much data as we want through the input field.
Table is sortable on every column, also we can use the language filter to filter out the table on language.



### Directory Structure

Styled folder has all the resuable style components.

Components folder have a generic table component

Core folder has a navigation component and redux folder which contain store management.

pages folder has the viewable pages components.

Theme folder stores the color scheme that is used through out the project.

Enviorment file stores the common end point for store.

assets folder have the icons that i am using

### tech stack and libraries.

Redux and Redux-saga is used as default store to get data.

Fetch is used in Redux-saga to do REST calls.

React-hooks are used to maintain state through out the project.

Styled-components are used as default style provider instead of css/sass.


