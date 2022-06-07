<template>
  <div class="body-container">
    <div class="window-container">

      <header class="header-container">
        <nav class="header-container__nav-bar nav-bar">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab"
            :class="['nav-bar__tab-button', 'tab-button',
            {'tab-button--active' : currentTab === tab}]"
            :aria-label="assignAriaLabel(tab)"
          >
            {{tab}}
          </button>
        </nav>
      </header>

      <main class="main-container">
        <h1 class="main-container__tab-title tab-title">{{currentTab}}</h1>
        <Transition name="tab-toggle" mode="out-in" type="transition" duration="300" appear="appear">
          <KeepAlive>
            <component
              :is="currentTab"
              class="main-container__tab-content tab-content"
            ></component>
          </KeepAlive>
        </Transition>
      </main>

      <footer class="footer-container">
        <svg class="footer-container__svg svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <a xlink:href="https://github.com/" target="_blank" rel="noopener" class="svg__svg-link svg-link" aria-label="View the code source of the project on GitHub">
            <rect class="svg-link__rect"></rect>
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </a>
        </svg>
        <p class="footer-container__p">Coded by <a href="https://yankaincode.com/" target="_blank" rel="noopener"  class="link link--Yanka">Yanka_InCode</a></p>
        <p class="footer-container__p">Background image compilated by <a href="https://viola-igua.tumblr.com/" target="_blank" rel="noopener" class="link link--Viola">ViolaIgua</a></p>
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
    methods: {
      assignAriaLabel(tab) {
        return (tab === this.currentTab) ? `The ${tab} tab is opened.` : `Open the ${tab} tab.`
      }
    }
  }
</script>

<style lang="scss">
  @import "./library.blocks/css-normalize/css-normalize.scss";
  @import './modules/selection-vs-focus.scss';
  @import './modules/section.scss';
  @import './modules/link.scss';
  @import './modules/svg.scss';

  .body-container {
    height: 100%;
    background-image: url('./assets/ViolaIgua-background.png');
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;

    //Break long words
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .window-container {
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    padding: 15px 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1em;
    color: MidnightBlue;
  }

  .nav-bar {
    &__tab-button {
      width: 100px;
      margin-left: 10px;
      padding: 10px 10px 15px;
      font-size: 1.1em;

      &:first-child {margin-left: 20px;}
    }
  }

  .tab-button {
    z-index: 5;
    position: relative;
    top: 10px;
    border-radius: 5px 5px 0 0;
    color: Navy;
    background: linear-gradient(90deg, Turquoise, Aquamarine, White);
    box-shadow: 0 0 4px 2px SlateBlue;
    transition: all 0.2s linear;

    &:hover {
      background: linear-gradient(130deg, LightSeaGreen, Aquamarine, White, Wheat, RosyBrown);
      top: 0;
    }

    &--active {
      background: linear-gradient(90deg, Wheat, White);
      box-shadow: 0 0 4px 2px SaddleBrown;

      &:hover {
        background: linear-gradient(130deg, Wheat, White, FloralWhite, Wheat, RosyBrown);
        top: 10px;
      }
    }
  }

  .main-container {
    z-index: 10;
    padding: 5px;
    border-radius: 15px;
    line-height: 1.8;
    background-color: Snow;
    box-shadow:
      -1px 1px 6px SlateBlue,
      1px -1px 6px SlateBlue;

    &__tab-title {}
    &__tab-content {}
  }

  .tab-title {
    margin: 0;
    padding: 20px 0 5px;
    border-radius: 13px 13px 0 0;
    text-align: center;
    color: white;
    background-color: Teal;
  }
  .tab-content {
    min-height: 200px;
    padding: 10px 5px 15px;
  }

  .footer-container {
    width: 80%;
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    border-radius: 0 0 15px 15px;
    background-color: rgba(255, 250, 240, 0.9);
    box-shadow: 0 0 2px 2px SlateBlue;

    &__p {
      padding: 2px 0;
      line-height: 1.4;
      font-size: .8em;
      font-weight: bold;
    }
    
    &__svg {animation: svg-box-shadow 12s linear infinite;}
  }

  .link {
    &--Yanka {font-family: sans-serif;}
    &--Viola {font-family: serif;}

    &--Yanka,
    &--Viola {
      text-shadow:
        0 2px 5px white,
        0 -2px 5px white,
        -2px 0 5px white,
        2px 0 5px white;
    }
  }

  @media screen and (min-width: 1000px) {
    .window-container {
      flex-direction: row;
      margin: 0 auto;
    }
    .main-container {flex: 2 0 700px;}

    .nav-bar,
    .footer-container {
      flex: 0 1 140px;
    }

    .nav-bar {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 20px;

      &__tab-button {
        width: 130px;
        margin: unset;
        margin-top: 8px;
        padding: 15px 15px 10px;

        &:first-child {
          margin: unset;
          margin-top: 35px;
        }
      }
    }

    .tab-button {
      top: 0;
      left: 15px;
      padding-right: 30px;
      border-radius: 5px 0 0 5px;

      &:hover {left: 0;}

      &--active:hover {
        top: 0;
        left: 15px;
      }
    }

    .tab-content {
      padding-right: 15px;
      padding-left: 15px;
    }

    .footer-container {
      width: 90%;
      margin: auto 15px 20px 0;
      border-radius: 0 25px 25px 0;
      text-align: unset;

      &__p {padding-bottom: 10px;}
      &__p:last-child {padding-bottom: unset;}
    }
  }

  @media screen and (min-width: 1900px) {
    .nav-bar__tab-button {width: 160px;}
    .window-container {max-width: 1400px;}
  }

  /*------------------ Animations ------------------*/
  //--------- tab-toggle
  .tab-toggle {
    &-enter,
    &-leave {
      &-active {transition: opacity 0.25s ease-out;}
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }

  //--------- svg-box-shadow
  @keyframes svg-box-shadow {
    0% {box-shadow: 0 0 3px 2px DodgerBlue;}
    20% {box-shadow: 0 0 3px 2px SpringGreen;}
    40% {box-shadow: 0 0 3px 2px Aquamarine;}
    60% {box-shadow: 0 0 3px 2px Yellow;}
    80% {box-shadow: 0 0 3px 2px Magenta;}
    90% {box-shadow: 0 0 3px 2px MediumSlateBlue;}
    100% {box-shadow: 0 0 3px 2px DodgerBlue;}
  }
</style>
