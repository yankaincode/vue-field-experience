
# Project: Data exchange

## Essence
It's a front-end project made on Vue.js framework with Vue CLI.  
Data Form and Table exchange JSON data with JSON Placeholder API by Asynchronous API calls via Axios HTTP client, using Promises and Error handling.  
The Data resets only on reload and on closing of the current source. It doesn’t use cookies.

## Foundation
The website is based on documentations [for Vue 3](https://vuejs.org/guide/introduction.html) and [for Axios](https://axios-http.com/docs/intro) and inspired by introduction guide ['Vue Tutorial: An Overview and Walkthrough'](https://www.taniarascia.com/getting-started-with-vue/) by Tania Rascia, but went further than guide.

### Improvements and developments:
* added more thorough verification and separated error reporting to end-user for each input field of Form and Table (State Management with Reactivity API),
* added preserving data within input fields in case it wasn't sent (because of Network error, for example),
* PATCH and PUT request methods were used for edit,
* new data appended through Form is not fully back-end friendly for now (error 500 exists within [the demo of the guide](https://taniarascia.github.io/vue-tutorial/) on PUT method as well), so as a workaround a PATCH request method only was used for the case,
* added &lt;component&gt; routing and listening of 'hashchange' event to switch tabs and update title of the document,
* added animations by built-in components &lt;Transition&gt; and &lt;TransitionGroup&gt;,
* added more style to UI design,
* worked with SCSS, BEM, Git for practice.

### All used stack and tools:
* HTML5, CSS3, JS (+ ESMA6);
* Vue 3, Axios, SASS (SCSS), Autoprefixer;
* BEM methodology, Git, Vue Devtools, npm manager;
* mobile-first approach, adaptive web design, cross-browser.

## Creators
Coded by [Yanka_InCode](https://github.com/yankaincode).

Background image compilation and favicon are created by [ViolaIgua](https://viola-igua.tumblr.com/).

## License
The code source of the project is distributed under [MIT License](./LICENSE).

All images used in this project are not a part of the MIT License agreement. All rights reserved and belongs to their owners.
