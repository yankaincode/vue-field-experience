<template>
  <header class="header-container">

    <nav class="header-container__nav-bar nav-bar">
      <a
        v-for="tab in tabs"
        :key="tab"
        :href="tab.href"
        :class="['nav-bar__tab-link', 'tab-link', 'link',
        {'tab-link--active' : isTabActive(tab.href)}]"
        :aria-label="assignTabLabel(tab.href, tab.title)"
      >
        {{ tab.title }}
      </a>
    </nav>

  </header>
</template>

<script>
  export default {
    name: 'header-container',
    props: {
      tabs: {
        type: Array,
        required: true
      },
      currentTab: {
        type: String,
        required: true
      },

    },
    methods: {
      isTabActive(tabHref) {
        return tabHref === this.currentTab
      },

      assignTabLabel(tabHref, tabTitle) {
        return (this.isTabActive(tabHref)) ? `The '${tabTitle}' page is opened` : `Open '${tabTitle}' page`
      }
    }
  }
</script>

<style scoped lang="scss">
  @forward './../modules/selection-vs-focus.scss';
  @use './../modules/global-vars.scss' as *;

  .header-container {
    margin-right: 1em;
    margin-left: 1em;
  }

  .nav-bar {
    display: flex;

    &__tab-link {
      min-width: 100px;
      max-width: 150px;
      margin-right: 0.4em;
      padding: 0.5em 0.7em 0.7em;
      font-size: $majorFontSize + 0.05em;

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

    &--active {
      background: linear-gradient(90deg, Wheat, White);
      box-shadow: 0 0 0.3em 0.1em SaddleBrown;
    }
  }

  @media (pointer: fine) {
    .tab-link {
      &:hover {
        background: linear-gradient(130deg, LightSeaGreen, Aquamarine, White, Wheat, RosyBrown);
        top: 0;
      }

      &--active:hover {
        background: linear-gradient(130deg, Wheat, White, FloralWhite, Wheat, RosyBrown);
        top: 0.4em;
      }
    }
  }

  @media screen and (min-width: 1024px) and (pointer: fine) {
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
  }

  @media screen and (min-width: 1024px) {
    .header-container  {margin-right: unset;}

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
        margin-bottom: 0.4em;
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
    }
  }
</style>
