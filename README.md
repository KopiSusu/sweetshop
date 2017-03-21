# Koh Code Example!!

## THE SUPER SWEET SUGAR SHOP

React, Redux, Webpack implementation of Super Sweet Sugar Shop.

Karma, Jasmine, Enzyme (airBnB's pretty awesome react specific testing library)

Babel all day and all night (gotta love writting javascript that compiles to... more javascript!!!)

## SETUP

1. Install [NodeJS](nodejs.org)
2. Run `npm install`

## TO RUN: 
Iv used pretty standard commands just to keep it easy, webpack builds src into public then express serves it up on port: 3000

1. npm run start --> runs express and webpack-dev-server with hot-reloading because meh to refreshing
2. npm run test --> runs karma start, which has technically less characters so you could justs go with karma start 

## File Structure

	* -- src
		|___ actions
		|___ components
		|___ containers
		|___ data
		|___ reducers
		|___ index.js


## TEST FILES

All test files are in __test__ folders in their respective folders (e.g actions/__test__, components/__test__)

## Platforms

Should work on mobile, tablet, and desktop.

## NOTES:

This is my code example project. I added minimal styling to the app, as it was not something I was focusing on for this small example. However I did use BEM methodology for what styling I had, as i find that BEM is great for creating univerally readable themes and understanding the relationship between your css and your html (because sometimes your css gets way more crazy then your JS). It should work on all devices, I put in a couple different breakpoints.

This was my first advent into Enzyme and I was amazed at how simple it was and easy to learn, especially compared to using the regular reactTestUtils (where your component test code normally doubles or tripples the size of your actual components). Their doc is pretty decent as well.

I'm a big Redux fan. Team is awesome. Code is awesome. Single Store is awesome. Though for the small amount of state this app consisted off it may have been unnessecary, I dont think flux or higher component state would get to that annoying to maintain level like it normally does in large applications.

No routes needed for this extremely simple app but React-router combined with React-router-redux makes it super easy to know where you are at all times in all the places.

I don't think webpack even needs an introduction at this point, bascially industry standard.

Curious about my other projects? Check out my portfolio site!

https://the-bengkel.com

Enjoy reviewing the code!



