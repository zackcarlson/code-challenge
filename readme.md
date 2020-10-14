# Solution to New Engen Code Challenge

By [Zack Carlson](mailto:zackt.carlson@gmail.com)

[Live Link](https://new-engen-challenge.herokuapp.com/)🚀

## Instructions

1. Navigate to [repo](https://github.com/zackcarlson/code-challenge)
2. Clone locally using
   `git clone https://github.com/zackcarlson/code-challenge.git`
3. Install dependencies using `npm install`
4. Run tests using `npm test`
5. Start your dev server using `npm run dev`
6. Navigate to app in [browser](http://localhost:3000)
7. Enjoy!

## Discussion

I used the following technologies: React, React Context, React Hooks, React Router, PropTypes, TypeScript, GraphQL, Apollo Client, Enzyme, Jest, Serve, Husky, Eslint, Prettier, and CSS.
I used [create-react-app](https://github.com/facebook/create-react-app)
to generate the scaffolding for this app.

## Core Goals

#### Replicate design

- [x] Use given [font](./src/assets/fonts/font.md)
- [x] Replicate [Sketch file](./src/assets/design/NewEngenColors.sketch)
- [x] Use [iconography](./src/assets/icons/)

#### Replicate functionality

- [x] Click "Load More" button retrieves "# of your choice" more colors from database
- [x] Display a grid list of colors on homepage
- [x] When a color is clicked, it should be saved to the color cart.
- [x] Cart Icon that displays the current number of added colors in the sites header.
- [x] Clicking on the cart icon should route you to the `/cart` route view which should display the list of saved palette colors which a user can delete.
- [x] Refreshing the `/cart` route should reload the page and rehydrate the page with the correct data (ie the colors the user selected before refreshing the page).
- [x] The styling should be responsive so the application looks appropriate no matter the screen size.

## Stretch Goals

#### Name and save current selected cart colors on the `/cart` route and display a list of previously saved color palettes

- [x] I completed this functionality using React Context and localStorage.

#### Adding animation and motion (id route transitions, hover effects where it seems appropriate)

- [x] I didn't add in route transitions, but I did add in appropriate hover effects.
