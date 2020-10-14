# New Engen Applicant Interview Challenge

Welcome to New Engen's at home proficiency challenge! This challenge gauges your knowledge on a few different metrics that we use, in part, to evaluate your skills with frontend development which is moderately geared towards javascript. In this repo, you will find the assets that are required to replicate the design that is also included in this repo. Both .sketch and .png assets are available.

To get started, clone this repo. Add your work to it in whatever structure you prefer, then push it to your own, renamed repo. When you are finished, follow the instructions at the end of this document.

We use React+Typescript here at NewEngen, so while completing the project please limit the use of 3rd party libraries such as Redux, Recompose, Mobx etc for any state management or HOCs. 3rd library parties for styling such as emotion or styled-components are perfectly fine.

This challenge has different milestones.

## Core

Stated briefly, the core goal is to create a simple but functional app that has a data, view and logic layer. The idea is simple. Display a grid list of colors, you can add colors to the colorcart which saves your currently selected colors in a palette which you can view and modify as needed.

The core goals should be completed in full.

## Stretch Goals

The stretch goals can also be met if you choose to do so. Not completing the stretch goals does not disqualify you in any way nor will it lead to a disadvantage in comparison to other applicants.

## Additional Information

An applicant completing a well thought out solution to the core challenges is just as meaningful to us as a solution that completes all goals but is not implemented very well.

If you'd like to implement additional functionality, or change the functionality of this challenge, feel free but be prepared to discuss your reasoning for doing so. We like critical thinking. We don't like improper implementation without reason.

## Time

Our recommendation is to spend about 2-3 hours on this challenge. You're welcome to spend a little extra time if you wish, but it is not required. Your time is very valuable and we are appreciative you're taking the time to demonstrate your skills for us.

## Core Goals

- Replicate design
  - [Font](./fonts/font.md)
  - Styles. The sketch file has an included a swatches artboard which includes the colors you can use. Take note of the small details.
  - Iconography. The sketch file has the icons that should be used where necessary in the icons artboard. These can be exported and used as you see fit.
- Replicate functionality
  - To prevent unnecessary use of time setting up and building a node server to respond with a list of colors, we've provided a pre-built GraphQL api which is readily available to fetch and display a list of colors from. Information for the GraphQL Server provided is at the bottom of this readme.
  - Clicking the "load more" button should retrieve an "number of your choice" more colors from the colors database and display them on the homepage colors list _optional implementation: instead of having a "load more" button trigger, you may also implement infinite scrolling that loads more colors automatically as the user scrolls_
  - When a color is clicked, it should be saved to the color cart.
  - Cart Icon that displays the current number of added colors in the sites header.
  - Clicking on the cart icon should route you to the `/cart` route view which should display the list of saved palette colors which a user can delete.
  - Refreshing the `/cart` route should reload the page and rehydrate the page with the correct data (ie the colors the user selected before refreshing the page).
  - The styling should be responsive so the application looks appropriate no matter the screen size.

## Stretch Goals

Here are some ideas which have also been designed in the sketch file. Feel free to complete one, a few or all of the stretch goals. _Not completing stretch goals does not disqualify or hurt our view on the overall outcome of the code challenge_

- Add in functionality on the `/cart` route to name and save the currently selected colors in the cart, and display a list of previously saved color palettes
- Adding animation and motion (id route transitions, hover effects where it seems appropriate)

## Deliverables

In your email submission response to the test, please include the following:

- Link to your repo
- URL to your hosted App (Use a free hosting service of your choice. ie Heroku, Netlify, Github Pages, Zeit, Firebase, Surge etc...)

Thanks and we look forward to your submission!

## GraphQL API

- Playground URL: https://colourlovers-graphql-api.herokuapp.com
- API Endpoint: https://colourlovers-graphql-api.herokuapp.com/graphql

**Please use the playground to discover the queries and available params for such queries to use in your application.**
**The GraphQL API has no cors policy, so you should have no problems retrieving the data**

We've provided you with a graphql api that provides you with everything you'll need to complete the project. If you are completely unfamiliar with GraphQL or Apollo, I would suggest reading the very simple and straight forward introductory section on apollo-client which takes about 5 mins to setup and you'll only need to use the `Query` component or the `useQuery` hook to grab data from the GraphQL endpoint. The introduction is available [Here](https://www.apollographql.com/docs/react/get-started/). If you have any questions or need and support, please don't hestitate to reach out for guidance.
