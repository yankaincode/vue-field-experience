<template>
  <div class="app">
    <div class="app__background-container background-container"></div>

    <div class="app__window-container window-container">

      <header class="window-container__header-container header-container">
        <nav class="header-container__nav-bar nav-bar">
          <a
           v-for="tab in tabs"
           :key="tab"
           :href="tab.href"
           :class="['nav-bar__tab-link', 'tab-link', 'link',
           {'tab-link--active' : isTabActive(tab.href)}]"
           :aria-label="assignTabLabel(tab.href, tab.title)"
         >
           {{tab.title}}
         </a>
        </nav>
      </header>

      <main class="window-container__main-container main-container">
        <h1 class="main-container__page-title page-title">
          {{ currentView.title }}
        </h1>
        <Transition name="page-toggle" mode="out-in" type="transition" duration="300" appear="appear">
          <KeepAlive>
            <component
              :is="currentView"
              class="main-container__page-content page-content"
            ></component>
          </KeepAlive>
        </Transition>
      </main>

      <footer class="window-container__footer-container footer-container">
        <svg class="footer-container__svg svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <a xlink:href="https://github.com/" target="_blank" rel="noopener" class="svg__svg-link svg-link" aria-label="View the code source of the project on GitHub">
            <rect class="svg-link__rect"></rect>
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </a>
        </svg>
        <p class="footer-container__p-item p-item">Coded by <a href="https://yankaincode.com/" target="_blank" rel="noopener"  class="link link--Yanka">Yanka_InCode</a></p>
        <p class="footer-container__p-item p-item">Background image compilation and favicon are created by <a href="https://viola-igua.tumblr.com/" target="_blank" rel="noopener" class="link link--Viola">ViolaIgua</a></p>
        <p class="footer-container__p-item p-item p-item--copy">&copy;
          2022 - Nowadays. &shy;All rigths reserved.
        </p>
      </footer>
    </div>

  </div>
</template>

<script>
  import AboutTab from '@/components/AboutTab.vue'
  import DataTab from '@/components/DataTab.vue'
  import BrokenLinkTab from '@/components/BrokenLinkTab.vue'

  const routes = {
    '' : AboutTab,
    '#about': AboutTab,
    '#data-exchange': DataTab
  }

  export default {
    name: 'app',
    components: {
      AboutTab,
      DataTab,
      BrokenLinkTab
    },
    data() {
      return {
        currentTab: window.location.hash,
        tabs: [
          {title: AboutTab.title, href: '#about'},
          {title: DataTab.title, href: '#data-exchange'}
        ]
      }
    },
    computed: {
      currentView() {
        return routes[this.currentTab || ''] || BrokenLinkTab
      }
    },

    mounted() {
      // A workaround for just opened 'About' page to make the appropriate tab visually active and not saving the hash replacement in the history navigation
      if (window.location.hash === '') window.location.replace(`${window.location.origin}#about`)

      this.updateDocTitle()
      window.addEventListener('hashchange', this.onTabChange)
    },
    updated() {
      if (!document.activeElement.classList.contains('tab-link--active')) document.activeElement.blur()
    },

    methods: {
      isTabActive(tabHref) {
        return tabHref === this.currentTab
      },

      assignTabLabel(tabHref, tabTitle) {
        return (this.isTabActive(tabHref)) ? `The '${tabTitle}' page is opened` : `Open '${tabTitle}' page`
      },

      onTabChange() {
        this.currentTab = window.location.hash
        this.updateDocTitle()
      },

      updateDocTitle() {
        document.title = `${this.currentView.title} ✦ by Yanka_Incode`
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

  $majorFontSize: 1em;

  .background-container {
    z-index: -100;
    position: fixed;
    height: 100%;
    width: 100%;

    background: repeating-linear-gradient(
      35deg, White 0em, LightCyan 10em, Aquamarine 20em, MediumSlateBlue 30em, Violet 40em, Pink 50em, Cornsilk 60em, Ivory 70em, White 80em
    );
    background-image: url('./assets/ViolaIgua-background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;

    pointer-events: none;
  }

  .window-container {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: $majorFontSize;
    color: MidnightBlue;

    // break-long-words
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .header-container {
    margin-right: 1em;
    margin-left: 1em;
  }

  .nav-bar {
    display: flex;

    &__tab-link {
      min-width: 100px;
      max-width: 150px;
      margin-right: 0.3em;
      padding: 0.5em 0.7em 0.7em;
      font-size: $majorFontSize + 0.1em;

      &:last-child {margin-right: unset;}
    }
  }

  .tab-link {
    z-index: 5;
    position: relative;
    top: 0.4em;
    border-radius: 0.5em 0.5em 0 0;
    text-align: center;
    color: Navy;
    background: linear-gradient(90deg, Turquoise, Aquamarine, White);
    box-shadow: 0 0 0.3em 0.1em SlateBlue;
    transition: all 0.2s linear;

    &:hover {
      background: linear-gradient(130deg, LightSeaGreen, Aquamarine, White, Wheat, RosyBrown);
      top: 0;
    }

    &--active {
      background: linear-gradient(90deg, Wheat, White);
      box-shadow: 0 0 0.3em 0.1em SaddleBrown;

      &:hover {
        background: linear-gradient(130deg, Wheat, White, FloralWhite, Wheat, RosyBrown);
        top: 0.4em;
      }
    }
  }

  .main-container {
    z-index: 10;
    padding: 0.3em;
    border-radius: 1em;
    line-height: 1.8;
    background-color: Snow;
    box-shadow:
      -0.1em 0.1em 0.3em SlateBlue,
      0.1em -0.1em 0.3em SlateBlue;
  }

  .page-title {
    margin: 0;
    padding: 0.5em 0.6em 0.1em;
    border-radius: 0.45em 0.45em 0 0;
    text-align: center;
    color: white;
    background-color: Teal;
  }
  .page-content {
    min-height: 250px;
    padding: 0.7em 0.5em 0.8em;
  }

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
      padding: 0.1em 0;
      line-height: 1.4;
      font-size: 0.8em;
      font-weight: bold;
    }
    &>.p-item--copy {
      padding-top: 1em;
      font-size: 0.75em;
    }

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

  @media screen and (min-width: 1000px) {
    .window-container {
      flex-direction: row;
      max-width: 1300px;
      margin: 0 auto;
    }
    .main-container {flex: 5 1 800px;}
    .header-container  {margin-right: unset;}

    .header-container,
    .footer-container {
      flex: 0 1 150px;
    }

    .nav-bar {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 0;

      &__tab-link {
        min-width: unset;
        max-width: unset;
        width: 100%;
        margin-right: unset;
        margin-bottom: 0.3em;
        padding: 0.5em 0.5em 0.3em;

        &:first-child {margin-top: 1em;}
        &:last-child {margin-bottom: unset;}
      }
    }

    .tab-link {
      top: 0;
      left: 0.5em;
      padding-right: 1em;
      border-radius: 0.5em 0 0 0.5em;
      text-align: left;

      &:hover {left: 0;}

      &--active:hover {
        top: 0;
        left: 0.5em;
      }
    }

    .page-content {
      min-height: 280px;
      padding-right: 1em;
      padding-left: 1em;
    }

    .footer-container {
      width: unset;
      margin: auto 1em 1.5em 0;
      border-radius: 0 1.5em 1.5em 0;
      text-align: unset;

      &__p-item {padding-bottom: 0.8em;}
      &__p-item:last-child {padding-bottom: unset;}
    }
  }

  @media screen and (min-width: 2048px) {
    .window-container {
      max-width: 2000px;
      font-size: $majorFontSize + 0.5em;
    }

    .header-container,
    .footer-container {
      flex-basis: 250px;
    }
    .page-content {min-height: 400px;}
  }
  @media screen and (min-width: 3840px) {
    .window-container {
      max-width: 3300px;
      font-size: $majorFontSize + 1.5em;
    }
    .header-container,
    .footer-container {
      flex-basis: 400px;
    }
    .page-content {min-height: 600px;}
  }
  @media screen and (min-width: 5120px) {
    .window-container {
      max-width: 4200px;
      font-size: $majorFontSize + 2.2em;
    }
    .header-container,
    .footer-container {
      flex-basis: 550px;
    }
    .page-content {min-height: 750px;}
  }

  /*------------------ Animations ------------------*/
  //--------- page-toggle
  .page-toggle {
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
