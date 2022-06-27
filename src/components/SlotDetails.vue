<template>
  <div :class="['slot-details',
    {'slot-details--open': isDetailsOpened}]"
  >
    <button
      @click="isDetailsOpened = !isDetailsOpened"
      class="slot-details__summary summary summary--arrow button"
    >
      <slot name="summary"></slot>
    </button>

    <Transition
      v-show="isDetailsOpened"
      name="show-up-items"
      type="transition"
      class="slot-details__details-body details-body"
      appear="appear"
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
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .slot-details {
    border-radius: 1.2em;

    & .summary {
      width: 100%;
      padding: 0.8em 0.8em 0.5em;
      border-radius: 0.9em;
      text-align: left;
      font-weight: bold;
      transition: border-radius 0.15s ease-out;

      &--arrow::before {
        display: inline-block;
        width: 1em;
        margin-right: 0.3em;
        content:"\1F89A";
        transition: transform 0.25s linear 0.1s;
      }
    }

    &--open {
      & .summary {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        box-shadow: 0 0 0.15em 0.15em Purple;

        &--arrow::before {transform: rotate(90deg);}
      }
    }
  }

  .details-body {margin: 1em 1em 1em 2em;}

  @media screen and (min-width: 400px) {
    .details-body {
      margin-right: 2em;
      margin-left: 2.5em;
    }
  }

  @media screen and (min-width: 700px) {
    .details-body {
      margin-right: 3.5em;
      margin-left: 4em;
    }
  }

  /*------------------ Animations ------------------*/
  //--------- show-up-items
  .show-up-items {
    &-enter-active,
    &-leave-active {
      transition: all 0.5s ease 0.1s;
      & .item {transition: all 0.5s ease;}
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
        opacity: 0.001; //Hack around a Chrome 96 bug
      }
    }
  }
</style>
