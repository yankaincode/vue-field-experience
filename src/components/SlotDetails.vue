<template>
  <div :class="['slot-details',
    {'slot-details--open': isDetailsOpened}]"
  >
    <button
      @click="isDetailsOpened = !isDetailsOpened"
      class="slot-details__summary summary button"
      :aria-expanded="isDetailsOpened"
      :aria-controls="detailsBodyId"
    >
      <span v-if="isDetailsOpened" aria-hidden="true">
        <svg class="summary__arrow-svg arrow-svg svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z"/>
        </svg>
      </span>
      <span v-else aria-hidden="true">
        <svg class="summary__arrow-svg arrow-svg svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
        </svg>
      </span>

      <slot name="summary"></slot>
    </button>

    <Transition
      v-show="isDetailsOpened"
      name="show-up-items"
      type="transition"
      class="slot-details__details-body details-body"
      appear="appear"
      :id="detailsBodyId"
    >
      <slot name="details-body"></slot>
    </Transition>

  </div>
</template>

<script>
  export default {
    name: 'slot-details',
    props: {
      isDetailsOpened: {
        type: Boolean,
        default: false
      },
      detailsBodyId: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss">
  .slot-details {
    border-radius: 1.4em;

    & .summary {
      width: 100%;
      border-radius: 1em;
      font-weight: bold;
      transition: all 0.15s ease-out;

      &__arrow-svg {
        position: relative;
        top: 0.12em;
        display: inline-block;
        height: 1em;
        width: 1em;
        margin-right: 0.5em;
      }
    }

    &--open {
      & .summary {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;

        &__arrow-svg {transform: rotate(90deg);}
      }
    }
  }

  .summary {padding: 0.5em;}
  .details-body {margin: 1em 1em 1em 2em;}

  @media screen and (min-width: 400px) {
    .details-body {
      margin-right: 2em;
      margin-left: 2.5em;
    }
  }

  @media screen and (min-width: 700px) {
    .summary {padding-left: 1.5em;}

    .details-body {
      margin-right: 3.5em;
      margin-left: 4em;
    }
  }

  /*------------------ Animations ------------------*/
  //--------- show-up-items
  .show-up-items {
    &-enter-active {
      transition: all 1.1s ease 0.8s;
      & .item {transition: all 0.8s ease;}
    }

    &-leave-active {
      transition: all 1s ease 0.8s;
      & .item {transition: all 0.8s ease 0.5s;}
    }

    &-enter-from,
    &-leave-to {
      margin-top: 0;
      margin-bottom: 0;
      transform: translateY(-0.1em);
      opacity: 0;

      & .item {
        transform: translateY(-0.1em);
        font-size: 0;
        opacity: 0.001; // Hack around a Chrome 96 bug from the Vue 3 documentation
      }
    }
  }
</style>
