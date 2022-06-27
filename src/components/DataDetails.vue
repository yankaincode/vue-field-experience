<template>
  <SlotDetails class="data-details" :isDetailsOpened="true">

    <template #summary>Data exchange clarification</template>

    <template #details-body>
      <ul class="details-body__ul-list ul-list ul-list--square">
        <li class="ul-list__item item">Data Form and Table exchange data with <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener" class="link">JSON Placeholder API</a> (Free fake API for testing and prototyping). Default data in the Table is received from the API.</li>
        <li class="ul-list__item item">This website doesn’t use cookies: doesn't save or send info about your device and activity.</li>
        <li class="ul-list__item item">Data changes resets to default state only on reload or on closing of the current source. If you switch to another tab of this website while editing the Table, new inputted data will be cancelled.</li>
        <li class="ul-list__item item">Data exchange is safe on both sides through HTTPS secure communication. But it's better not send any private data.</li>
      </ul>
    </template>

  </SlotDetails>
</template>

<script>
  import SlotDetails from './SlotDetails.vue'
  export default {
    name: 'data-details',
    components: {
      SlotDetails
    }
  }
</script>

<style lang="scss">
  @forward './../modules/list.scss';

  @use './../modules/global-vars.scss' as *;

  .data-details {
    border: 0.25em ridge Purple;
    background-color: rgba(127, 255, 212, 0.1);

    & .details-body {
      font-size: $majorFontSize - 0.2em;
    }
  }

  .slot-details {
    & .summary {
      background: linear-gradient(150deg, LightBlue, Azure, LavenderBlush, PapayaWhip, PowderBlue, Turquoise, Violet);

      &:hover,
      &:focus {
        background: linear-gradient(150deg, LightBlue, Azure, LavenderBlush, PapayaWhip, Violet);
      }
    }

    &--open .summary {
      background: linear-gradient(185deg, Violet, LightBlue, LavenderBlush, PapayaWhip, Turquoise);
      box-shadow: 0 0 0.15em 0.15em Purple;

      &:hover,
      &:focus {
        background: linear-gradient(185deg, LightBlue, Azure, LavenderBlush, Pink);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .data-details {
      max-width: 90%;
      margin: auto;
    }
  }
</style>
