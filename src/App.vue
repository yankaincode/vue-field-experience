<template>
  <div class="body-container">
    <div class="window-container">

      <header class="header-container">
        <nav class="header-container__nav-bar nav-bar">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab"
            :class="['nav-bar__tab-button', 'tab-button', {'tab-button--active' : currentTab === tab}]"
          >
            {{tab}}
          </button>
        </nav>
      </header>

      <main class="main-container">
        <h1 class="page__title">{{currentTab}}</h1>
        <Transition name="fade" mode="out-in" type="transition" duration="300" appear="appear">
          <KeepAlive>
            <component
              :is="currentTab"
              class="main-container__tab"
            ></component>
          </KeepAlive>
        </Transition>
      </main>

      <footer class="footer-container">
        <p>Coded by <a href="https://yankaincode.com/" target="_blank" rel="noopener"  class="link">Yanka_InCode</a></p>
        <p>Background image compilated by <a href="https://viola-igua.tumblr.com/" target="_blank" rel="noopener" class="link">ViolaIgua</a></p>
      </footer>
    </div>

  </div>
</template>

<script>
  import About from '@/components/About.vue'
  import Data from '@/components/Data.vue'

  export default {
    name: 'app',
    components: {
      About,
      Data
    },
    data() {
      return {
        currentTab: 'About',
        tabs: ['About', 'Data']
      }
    },
    mounted() {
      const headerTabButtons = document.querySelector('.header-container__nav-bar').children

      for (let button of headerTabButtons) {
        if (button.innerText === this.currentTab) {
          button.setAttribute('aria-label', 'The tab is opened.')
        } else {
          button.setAttribute('aria-label', 'Open the tab on this page.')
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  @import "./library.blocks/css-normalize/css-normalize.scss";
  @import './templates.scss';

  $bodyTextColor: MidnightBlue;
  %focusSelectStyle {
    color: $bodyTextColor;
    text-shadow: none;
  }

  ::-moz-selection,
  ::selection {
    background-color: PowderBlue;
    @extend %focusSelectStyle;
  }

  a,
  select,
  textarea,
  button,
  input[type="submit"],
  summary {
    &:focus {
      background: linear-gradient(
        130deg,
        LightSkyBlue, PaleTurquoise, LightCyan, LightBlue, SkyBlue, DodgerBlue
      );
      @extend %focusSelectStyle;
    }
  }

  .body-container {
    background-image: url('./assets/ViolaIgua-background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    @extend %break-long-words;
  }

  .window-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 800px;
    margin: auto;
    padding: 15px 0;
    font-family: Helvetica, Arial, sans-serif;
    color: $bodyTextColor;
  }

  .header-container {
    &__nav-bar {}
  }

  .nav-bar {
    &__tab-button {
      width: 100px;
      margin-left: 10px;
      padding: 10px 10px 5px;
      box-shadow: 0 0 6px 2px SlateBlue;

      &:first-child {margin-left: 20px;}
    }
  }

  .tab-button {
    border-radius: 5px 5px 0 0;
    background-color: MediumAquamarine;

    &:hover {
      background: linear-gradient(90deg, MediumAquamarine, White);
    }

    &--active {
      background: linear-gradient(180deg, MediumAquamarine, Wheat, White);

      &:hover {
        background: linear-gradient(90deg, MediumAquamarine, Wheat, White);
      }
    }
  }

  .main-container {
    flex: 1 1 auto;
    padding: 5px;
    border-radius: 15px;
    line-height: 1.8;
    background-color: Snow;
    box-shadow:
      -1px 1px 6px SlateBlue,
      1px -1px 6px SlateBlue;

    &__tab {

    }
  }

  .footer-container {
    max-width: 500px;
    margin: auto;
    padding-top: 10px;
    text-align: center;

    & p {
      padding: 0 10px;
      line-height: 1.4;
      font-size: .9em;
      font-weight: bold;
      text-shadow:
        0 2px 5px white,
        0 -2px 5px white,
        -2px 0 5px white,
        2px 0 5px white;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
