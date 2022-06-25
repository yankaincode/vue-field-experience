<template>
  <footer class="footer-container">

    <svg class="footer-container__svg svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <a xlink:href="https://github.com/yankaincode/vue-field-experience" target="_blank" rel="noopener" class="svg__svg-link svg-link" aria-label="View the code source of the project on GitHub">
        <rect class="svg-link__rect"></rect>
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        ></path>
      </a>
    </svg>

    <p class="footer-container__p-item p-item">
      Coded and designed by <a href="https://github.com/yankaincode" aria-label="Yanka_InCode on GitHub" target="_blank" rel="noopener" class="link link--Yanka">Yanka_InCode</a>
    </p>
    <p class="footer-container__p-item p-item">
      Background image compilation and favicon are created by <a href="https://viola-igua.tumblr.com/" aria-label="ViolaIgua on Tumblr" target="_blank" rel="noopener" class="link link--Viola">ViolaIgua</a>
    </p>
    <p class="footer-container__p-item p-item p-item--copy">&copy;
      2022 - Nowadays. &shy;All rigths reserved.
    </p>

  </footer>
</template>

<script>
  export default {
    name: 'footer-container'
  }
</script>

<style scoped lang="scss">
  @forward './../modules/svg.scss';
  @use './../modules/global-vars.scss' as *;

  .footer-container {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0.8em;
    text-align: center;
    border-radius: 0 0 1em 1em;
    background-color: rgba(255, 250, 240, 0.9);
    box-shadow: 0 0 0.4em 0.1em SlateBlue;

    &__p-item {
      padding: 0.1em 0 0.6em;
      line-height: 1.4;
      font-size: $majorFontSize - 0.2em;
      font-weight: bold;
    }
    &__p-item:last-child {padding-bottom: unset;}
    &>.p-item--copy {font-size: $majorFontSize - 0.25em;}

    &__svg {
      -webkit-animation: svg-box-shadow 12s linear infinite;
      animation: svg-box-shadow 12s linear infinite;
    }
  }

  .link {
    &--Yanka {font-family: sans-serif;}
    &--Viola {font-family: serif;}

    &--Yanka,
    &--Viola {
      line-height: 1;
      text-shadow:
        0 0.1em 0.4em white,
        0 -0.1em 0.4em white,
        -0.1em 0 0.4em white,
        0.1em 0 0.4em white;
    }
  }

  @media screen and (min-width: 1024px) {
    .footer-container {
      width: unset;
      margin: auto 1em 1.5em 0;
      border-radius: 0 1.5em 1.5em 0;
      text-align: unset;

      &__p-item {font-size: $majorFontSize - 0.25em;}
      &>.p-item--copy {font-size: $majorFontSize - 0.3em;}
    }
  }

  /*------------------ Animations ------------------*/
  //--------- svg-box-shadow
  @-webkit-keyframes svg-box-shadow {
    0% {box-shadow: 0 0 0.3em 0.1em DodgerBlue;}
    20% {box-shadow: 0 0 0.3em 0.1em SpringGreen;}
    40% {box-shadow: 0 0 0.3em 0.1em Aquamarine;}
    60% {box-shadow: 0 0 0.3em 0.1em Yellow;}
    80% {box-shadow: 0 0 0.3em 0.1em Magenta;}
    90% {box-shadow: 0 0 0.3em 0.1em MediumSlateBlue;}
    100% {box-shadow: 0 0 0.3em 0.1em DodgerBlue;}
  }

  @keyframes svg-box-shadow {
    0% {box-shadow: 0 0 0.3em 0.1em DodgerBlue;}
    20% {box-shadow: 0 0 0.3em 0.1em SpringGreen;}
    40% {box-shadow: 0 0 0.3em 0.1em Aquamarine;}
    60% {box-shadow: 0 0 0.3em 0.1em Yellow;}
    80% {box-shadow: 0 0 0.3em 0.1em Magenta;}
    90% {box-shadow: 0 0 0.3em 0.1em MediumSlateBlue;}
    100% {box-shadow: 0 0 0.3em 0.1em DodgerBlue;}
  }
</style>
