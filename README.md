
# Project: Data exchange

## Essence
It's a front-end project made on Vue.js framework.  
Data Form and Table exchange JSON data with JSON Placeholder API by Asynchronous API calls via Axios HTTP client, using Promises and Error handling.

## Foundation
The website is based on documentations [for Vue 3](https://vuejs.org/guide/introduction.html) and [for Axios](https://axios-http.com/docs/intro) and inspired by introduction guide ['Vue Tutorial: An Overview and Walkthrough'](https://www.taniarascia.com/getting-started-with-vue/) by Tania Rascia, but went further than guide.

### Improvements and developments:
* added more thorough verification and separated error reporting to end-user for each input field of Form and Table (State Management with Reactivity API),
* added preserving data within input fields in case it wasn't sent (because of Network error, for example),
* PATCH and PUT request methods were used for edit,
* new data from Form is not fully back-end friendly for now (error 500 exists within the demo of the guide on PUT method as well), so as a workaround for editing new data a PATCH request method only was used for the case,
* added <component> switching for tabs,
* added animations by built-in components <Transition> and <TransitionGroup>,
* added more style to UI design,
* worked with SCSS, BEM, Git for practice.

### All used stack and tools:
* HTML5, CSS3, JS (+ ESMA6);
* Vue 3, Axios, SASS (SCSS);
* BEM methodology, Git, Vue Devtools, npm manager;
* mobile-first, cross-browser, adoptable to different screens.

## Creators
Coded by [Yanka_InCode](https://yankaincode.com/).

Background image compilation and favicon are created by [ViolaIgua](https://viola-igua.tumblr.com/).

## License
The code source of the project is distributed under [MIT License](./LICENSE).

All images used in this project are not a part of the MIT License agreement. All rights reserved and belongs to their owners.
