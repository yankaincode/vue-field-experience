<template>
  <div class="app-container">
    <div class="app-container__background-container background-container"></div>

    <div class="app-container__window-container window-container">
      <HeaderContainer
        class="window-container__side-container side-container"
        :tabs="tabs"
        :current-tab="currentTab"
      />

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

      <FooterContainer class="window-container__side-container side-container" />
    </div>

  </div>
</template>

<script>
  import HeaderContainer from '@/components/HeaderContainer.vue'
  import FooterContainer from '@/components/FooterContainer.vue'

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
      HeaderContainer,
      FooterContainer,

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
      if (window.location.hash === '') window.location.replace(`${window.location.href}#about`)

      this.updateDocTitle()
      window.addEventListener('hashchange', this.onTabChange)
    },
    updated() {
      if (!document.activeElement.classList.contains('tab-link--active')) document.activeElement.blur()
    },

    methods: {
      onTabChange() {
        this.currentTab = window.location.hash
        this.updateDocTitle()
      },

      updateDocTitle() {
        document.title = `${this.currentView.title} ✦ by Yanka_InCode`
      }
    }
  }
</script>

<style lang="scss">
  @forward "./../library_modules/css-normalize/css-normalize";
  @forward './modules/selection-vs-focus.scss';
  @forward './modules/section.scss';
  @forward './modules/link.scss';

  @use './modules/global-vars.scss' as *;

  .background-container {
    z-index: -100;
    position: fixed;
    height: 100%;
    width: 100%;

    background-image: url('./assets/ViolaIgua-background--lower-quality.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;

    pointer-events: none;

    -webkit-animation: change-back 2s linear 0s 1;
    animation: change-back 2s linear 0s 1;
  }

  .window-container {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: $majorFontSize;
    color: MidnightBlue;
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

    // break-long-words
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  @media screen and (min-width: 1024px) {
    .window-container {
      flex-direction: row;
      max-width: 1300px;
      margin: 0 auto;
    }
    .main-container {flex: 5 1 800px;}
    .side-container {flex: 0 1 150px;}

    .page-content {
      min-height: 280px;
      padding-right: 1em;
      padding-left: 1em;
    }
  }

  @media screen and (min-width: 2048px) {
    .background-container {
      background-image: url('./assets/ViolaIgua-background--original.png');
    }
    .window-container {
      max-width: 2000px;
      font-size: $majorFontSize + 0.5em;
    }
    .side-container {flex-basis: 250px;}
    .page-content {min-height: 400px;}
  }

  @media screen and (min-width: 3840px) {
    .window-container {
      max-width: 3300px;
      font-size: $majorFontSize + 1.5em;
    }
    .side-container {flex-basis: 400px;}
    .page-content {min-height: 600px;}
  }

  @media screen and (min-width: 5120px) {
    .window-container {
      max-width: 4200px;
      font-size: $majorFontSize + 2.2em;
    }
    .side-container {flex-basis: 550px;}
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

  //--------- change-back
  @-webkit-keyframes change-back {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @keyframes change-back {
    from {opacity: 0;}
    to {opacity: 1;}
  }
</style>
