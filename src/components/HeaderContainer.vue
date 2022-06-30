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

  // Vars for tab hover transitions
  $tabGap: 0.4em;
  $tabStep: 0.35em;
  $paddingY: 0.5em;
  $paddingX: 0.7em;

  .nav-bar {
    display: flex;

    &__tab-link {
      z-index: 5;
      min-height: 40px;
      min-width: 100px;
      max-width: 150px;
      margin-right: $tabGap;
      font-size: $majorFontSize + 0.05em;
      color: Navy;
      box-shadow: 0 0 0.3em 0.1em SlateBlue;

      &:last-child {margin-right: unset;}
    }
  }

  .tab-link {
    padding-top: $paddingY;
    padding-right: $paddingX;
    padding-left: $paddingX;
    border-radius: 0.5em 0.5em 0 0;
    text-align: center;
    background: linear-gradient(90deg, Turquoise, Aquamarine, White);
    transition: all 0.2s linear;

    &--active {
      background: linear-gradient(90deg, Wheat, White);
      box-shadow: 0 0 0.3em 0.1em SaddleBrown;
    }
  }

  @media screen and (pointer: coarse) {
    .header-container {margin-top: $tabGap;}
    .tab-link {padding-bottom: $paddingY;}
  }

  @media screen and (pointer: fine) {
    .tab-link {
      position: relative;
      top: $tabGap;
      padding-bottom: $paddingY + $tabStep;

      &:hover {
        background: linear-gradient(130deg, LightSeaGreen, Aquamarine, White, Wheat, RosyBrown);
        top: 0;
      }

      &--active:hover {
        background: linear-gradient(130deg, Wheat, White, FloralWhite, Wheat, RosyBrown);
        top: $tabGap;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .header-container {
      margin-top: 2.4em;
      margin-right: unset;
    }

    .nav-bar {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &__tab-link {
        min-width: unset;
        max-width: unset;
        margin-right: unset;
        margin-bottom: $tabGap;

        &:last-child {margin-bottom: unset;}
      }
    }

    .tab-link {
      border-radius: 0.5em 0 0 0.5em;
      text-align: left;
      padding-top: $paddingY + 0.25em;
      padding-bottom: $paddingY;
    }
  }

  @media screen and (min-width: 1024px) and (pointer: coarse) {
    .nav-bar__tab-link {width: 90%;}
    .tab-link {padding-right: $paddingX - $tabStep;}
  }

  @media screen and (min-width: 1024px) and (pointer: fine) {
    .nav-bar__tab-link {width: 100%;}

    .tab-link {
      top: 0;
      left: $tabGap * 2;
      padding-right: $paddingX + 0.5em;

      &:hover {left: 0;}

      &--active:hover {
        top: 0;
        left: $tabGap * 2;
      }
    }
  }
</style>
