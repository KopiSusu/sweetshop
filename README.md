# Stride Code Challange!!

## THE SUPER SWEET SUGAR SHOP

React, Redux, Webpack implementation of Super Sweet Sugar Shop.

Karma, Jasmine, Enzyme (airBnB's pretty awesome react specific testing library)

Babel all day and all night (gotta love writting javascript that compiles to... more javascript!!!)

## SETUP

1. Install [NodeJS](nodejs.org)
2. Run `npm install`

## TO RUN: 
# Iv kept the same default commands just to keep it easy, webpack builds src into public then express serves it up on port: 3000

1. npm run serve --> runs express and webpack-dev-server with hot-reloading because meh to refreshing
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

All test files are in __test__ folders in their respective folders (e.g actions/__test__, components/__test__ )


## NOTES:

This was probably the most enjoyable codding challange iv taken. And the constant emphasis on testing is insanely refreshing. This was my first advent into Enzyme and I was amazed at how simple it was and easy to learn, especially compared to using the regular reactTestUtils (where your component test code normally doubles or tripples the size of your actual components). Their doc is pretty decent as well.

I'm a big Redux fan. Team is awesome. Code is awesome. Single Store is awesome. Though for the small amount of state this app consisted off it may have been unnessecary, I dont think flux would get to that annoying to maintain level like it normally does in large applications.

No routes needed for this app but React-router combined with React-router-redux makes it super easy to know where you are at all times in all the places.

I don't think webpack even needs an introduction at this point, bascially industry standard.

I added minimal styling to the app, as it was not asked for.

Very much looking forward to the code review! 



