<template>
  <p class="data-status">
    <slot />
  </p>
</template>

<script>
  export default {
    name: 'data-status'
  }
</script>

<style scoped lang="scss">
  @mixin symbol($char) {
    &:before {
      content: $char;
      display: block;
    }
  }

  .data-status {
    padding: 5px 15px;
    text-align: center;
    font-weight: bold;

    &--pending {
      color: MediumBlue;
      @include symbol("\0231B");
    }

    &--empty-input,
    &--invalid-name,
    &--invalid-email {
      color: Crimson;
    }

    &--empty-input {
      @include symbol("\26D4");
    }

    &--invalid-name,
    &--invalid-email {
      @include symbol("\274C");
    }

    &--fulfilled {
      color: SeaGreen;
      @include symbol("\2705");
    }

    &--with-data {
      color: MediumBlue;
      @include symbol("\2728");
    }

    &--no-data {
      color: Indigo;
      @include symbol("\01F4AB");
    }
  }
</style>
