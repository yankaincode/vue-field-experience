<template>
  <div class="about-tab">

    <div class="section">
      <h2 class="section__title title">Project description</h2>
      <div class="section__content content">
        <p>It's a front-end project made on Vue.js framework.
          <br />Data Form and Table exchange JSON data with <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener" class="link">JSON Placeholder API</a> by Asynchronous API calls via Axios HTTP client, using Promises and Error handling.</p>
        <p>
          The website is based on documentations <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener" class="link">for Vue 3</a> and <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener" class="link">for Axios</a> and inspired by introduction guide <a href="https://www.taniarascia.com/getting-started-with-vue/" target="_blank" rel="noopener" class="link">'Vue Tutorial: An Overview and Walkthrough'</a> by Tania Rascia, but went further than guide:
        </p>
        <ul class="content__ul-list ul-list ul-list--roll">
          <li>added more thorough verification and separated error reporting to end-user for each input field of Form and Table (State Management with Reactivity API),</li>
          <li>added preserving data within input fields in case it wasn't sent (because of Network error, for example),</li>
          <li>PATCH and PUT request methods were used for edit,</li>
          <li>new data from Form is not fully back-end friendly for now (error 500 exists within <a class="link" href="https://taniarascia.github.io/vue-tutorial/">the demo of the guide</a> on PUT method as well), so as a workaround for editing new data a PATCH request method only was used for the case,</li>
          <li>added &lt;component&gt; switching for tabs,</li>
          <li>added animations by built-in components &lt;Transition&gt; and &lt;TransitionGroup&gt;,</li>
          <li>worked with SCSS, BEM, Git for practice,</li>
          <li>added more style (tried my best in UI design).</li>
        </ul>
        <p>All used stack and tools:</p>
        <ul class="content__ul-list ul-list ul-list--string ul-list--basis">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JS (+ ESMA6)</li>
        </ul>
        <ul class="content__ul-list ul-list ul-list--string ul-list--addon">
          <li>Vue 3</li>
          <li>Axios</li>
          <li>SASS (SCSS)</li>
        </ul>
        <ul class="content__ul-list ul-list ul-list--string ul-list--pallet">
          <li>BEM methodology</li>
          <li>Git</li>
          <li>Vue Devtools</li>
          <li>npm manager</li>
        </ul>
        <ul class="content__ul-list ul-list ul-list--string ul-list--ui">
          <li>mobile-first</li>
          <li>cross-browser</li>
          <li>adoptable to different screens</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'about-tab'
  }
</script>

<style scoped lang="scss">
  @import './../modules/lists.scss';

  @mixin symbol($content) {
    & li:before {content: $content;}
  }

  .ul-list {
    &--basis {@include symbol("\01F3BC");}
    &--addon {@include symbol("\01F3B7");}
    &--pallet {@include symbol("\01F941");}
    &--ui {@include symbol("\01F3A7");}
  }
</style>
