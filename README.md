# Server side - Natsuki

This is the server-side for a web app called Natsuki. The app is most like a small social network but for creating events and gatherings for different communities.

The application is deployed and live at : https://natsuki.herokuapp.com/

## How to run locally

### Run
1. Navigate into the folder (in command line/terminal)
2. Run `npm install` to install all required dependencies
3. Run `npm run start-dev` to start the development build scripts
4. Run `npm run test` to run test cases and see the results
5. Run `npm run start` to start the server.
6. The application is now live at : http://localhost:3000


## Techs used

* NodeJS/Express with Passport patterns and JWT for authentication
* MongoDB for the database and Mongoose for database connection
* Mochai and Chai for unit testing

## Features
* Authentication (sign in and sign up) , and authentication requirement for routing
* Routing to some certain routes
* Creating events and perform actions to it (join or save or host an event)
* Generalization of situation when the database is updated, so new token can be sent back to update real-time in browser
* User's info for personal page is ready (dashboard/timeline)
* Searching for events is supported. Return events with name that includes the query keyword

## Features to implement
* Routes for daily feeds haven't been implemented yet
* Connection between users (messaging/adding friends) haven't been implemented yet
* No push notification at the moment
