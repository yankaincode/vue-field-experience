<template>
  <SlotDetails class="data-details" :detailsBodyId="'exchangeDetailsBody'" :isDetailsOpened="true">

    <template #summary>Data exchange clarification</template>

    <template #details-body>
      <ul class="ul-list ul-list--square">
        <li class="ul-list__item item">Data Form and Table exchange data with <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener" class="link">JSON Placeholder API</a> (Free fake API for testing and prototyping in development). Default data in the Table is received from the API. Data from the Form sends to the API server before being added to the Table.</li>
        <li class="ul-list__item item">If you switch to the other tab of this website, data in input fields will be: for the Form - preserved, for the Table - cancelled. Also, data is preserved within input fields before sending in case of sending failure. All changes and data in input fields will be reset to default state on reload or on closing of the current source.</li>
        <li class="ul-list__item item">This website doesn’t use cookies: doesn't gather, save or send any information about your device and activity. Data exchange is safe on both sides through HTTPS secure communication. But, nevertheless, it's a training front-end pet-project, and I (Yanka_inCode, the developer of this website) am not responsible for the server side (the API) and for absolute safety of data appended by yourself. So, it's better not input any private data, by which anybody known by you could be identified (real names and e-mail addresses).</li>
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

    & .summary {
      font-size: $majorFontSize + 0.1em;

      background: linear-gradient(150deg, LightBlue, Azure, LavenderBlush, PapayaWhip, PowderBlue, Turquoise, Violet);

      &:hover,
      &:focus {
        background: linear-gradient(150deg, LightBlue, Azure, LavenderBlush, PapayaWhip, Violet);
      }
    }

    &.slot-details--open .summary {
      background: linear-gradient(185deg, Violet, LightBlue, LavenderBlush, PapayaWhip, Turquoise);
      box-shadow: 0 0 0.15em 0.15em Purple;

      &:hover,
      &:focus {
        background: linear-gradient(185deg, LightBlue, Azure, LavenderBlush, Pink);
      }
    }

    & .details-body {font-size: $majorFontSize - 0.15em;}
  }

  @media screen and (min-width: 1024px) {
    .data-details {
      max-width: 90%;
      margin: auto;
    }
  }
</style>
