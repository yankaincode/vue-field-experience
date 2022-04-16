<template>
  <div class="about-page content-container">

    <div class="section section--text">
      <h2 class="section__title">Project description</h2>

      <p>This website is made on Vue.js framework. Table receives JSON data using Axios.</p>
      <p>The project is based on:</p>
      <ul class="section__ul ul ul--guides">
        <li>
          an introductory guide <a href="https://www.taniarascia.com/getting-started-with-vue/" target="_blank" rel="noopener">'Vue Tutorial: An Overview and Walkthrough'</a> by Tania Rascia;
        </li>
        <li>
          a <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener">documentation</a> for Vue 3;
        </li>
      </ul>
      <p>All used stack and tools:</p>
      <ul class="section__ul ul ul--string ul--basis">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JS (+ ESMA6)</li>
      </ul>
      <ul class="section__ul ul ul--string ul--addon">
        <li>Vue 3</li>
        <li>Axios</li>
        <li>SASS (SCSS)</li>
      </ul>
      <ul class="section__ul ul ul--string ul--pallet">
        <li>BEM methodology</li>
        <li>Git</li>
        <li>Vue Devtools</li>
        <li>npm manager</li>
      </ul>
      <ul class="section__ul ul ul--string ul--ui">
        <li>mobile-first</li>
        <li>cross-browser</li>
        <li>adoptable to different screens</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'about-page'
  }
</script>

<style scoped lang="scss">
  @mixin symbol($content) {
    & li:before {content: $content;}
  }

  .ul {
    margin-right: 20px;
    &--guides {
      margin-left: 35px;
      list-style-type: square;
    }
    &--string {
      text-align: center;

      & li {
        display: inline-block;

        &:before {
          padding: 0 5px 0 20px;
          &:first-child {padding-left: 0;}
        }
      }
    }

    &--basis {@include symbol("\01F9E9");}
    &--addon {@include symbol("\01F3B7");}
    &--pallet {@include symbol("\01F941");}
    &--ui {@include symbol("\01F3B8");}
  }
</style>
