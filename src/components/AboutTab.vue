<template>
  <div class="about-tab">

    <section class="about-tab__section section">
      <h2 class="section__title title">Project description</h2>
      <div class="section__content content content--article">

        <p class="content__p-item p-item">
          It's a front-end project made on Vue.js framework with Vue CLI.
          <br />Data Form and Table exchange JSON data with <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener" class="link">JSON Placeholder API</a> by Asynchronous API calls via Axios HTTP client, using Promises and Error handling.
        </p>
        <p class="content__p-item p-item">
          The website is based on documentations <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener" class="link">for Vue 3</a> and <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener" class="link">for Axios</a> and guided by <a href="https://www.taniarascia.com/getting-started-with-vue/" target="_blank" rel="noopener" class="link">'Vue Tutorial: An Overview and Walkthrough'</a> by Tania Rascia, but more self-made features were implemented for a stand-alone practice:
        </p>
        <ul class="content__ul-list ul-list ul-list--roll">
          <li>separated error reporting about each input field of Form and Table (State Management with Reactivity API),</li>
          <li>implemented thorough validation with RegExp and blocking of inappropriate key input (it works within PC),</li>
          <li>added error reporting, if default data wasn't received from the server, and preserving data within input fields in case it wasn't sent successfully (because of Network error, for example),</li>
          <li>PATCH and PUT request methods were applied for edit, taking into account data with no change won't be sent to the server,</li>
          <li>new data appended through Form is not fully back-end friendly for now (error 500 exists within <a class="link" href="https://taniarascia.github.io/vue-tutorial/">the demo of the guide</a> on PUT method as well), so as a workaround a PATCH request method only was used for the case,</li>
          <li>added &lt;component&gt; routing and listening of 'hashchange' event to switch tabs and update title of the document,</li>
          <li>included a 404 page,</li>
          <li>added animations by built-in components &lt;Transition&gt; and &lt;TransitionGroup&gt;,</li>
          <li>created &lt;slot&gt; element for custom &lt;details&gt; realization (to extend it with Vue transitions),</li>
          <li>added more style to UI design with attention to UX (thereby, made validation status visual for end-user as well),</li>
          <li>worked with Axios, SCSS, BEM, Git for practice.</li>
        </ul>

        <p class="content__p-item p-item">All used stack and tools:</p>

        <div class="content__tools-container tools-container">
          <ul class="tools-container__ul-list ul-list ul-list--string ul-list--basis">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS (+ ESMA6)</li>
          </ul>
          <ul class="tools-container__ul-list ul-list ul-list--string ul-list--addon">
            <li>Vue 3</li>
            <li>Axios</li>
            <li>SASS (SCSS)</li>
            <li>Autoprefixer</li>
          </ul>
          <ul class="tools-container__ul-list ul-list ul-list--string ul-list--pallet">
            <li>BEM methodology</li>
            <li>Git</li>
            <li>Vue Devtools</li>
            <li>Vue CLI</li>
            <li>Babel</li>
            <li>npm manager</li>
          </ul>
          <ul class="tools-container__ul-list ul-list ul-list--string ul-list--ui">
            <li>Mobile-first approach</li>
            <li>Adaptive design: from mobile to 8k</li>
            <li>Cross-browser</li>
          </ul>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'about-tab',
    title: 'About project'
  }
</script>

<style scoped lang="scss">
  @forward './../modules/list.scss';

  @mixin symbol($content) {
    & li:before {content: $content;}
  }

  .ul-list {
    &--basis {@include symbol("\01F3BC");}
    &--addon {@include symbol("\01F3B7");}
    &--pallet {@include symbol("\01F941");}
    &--ui {@include symbol("\01F3A7");}
  }

  @media screen and (min-width: 400px) {
    .tools-container {text-align: center;}
  }
</style>
