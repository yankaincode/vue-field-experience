<template>
    <Transition
      tag="div"
      name="toggle-status"
      type="transition"
      mode="out-in"
      :class="[ 'data-downloader',
        {'data-downloader--rejected': downloadStatus === 'rejected',
        'data-downloader--pending': downloadStatus === 'pending'}
      ]"
    >
      <div v-if="downloadStatus === 'pending'" class="data-downloader__pending-container pending-container">
        <p class="pending-container__p-item p-item">
          Loading process is launched. Please, wait a bit...
        </p>
      </div>

      <div v-else class="data-downloader__rejected-container rejected-container">
        <p class="rejected-container__p-item p-item">Sorry, it's a  download error. Some possible solutions:</p>
        <ul class="rejected-container__ul-list ul-list">
          <li>check your connection to the Internet;</li>
          <li>update the page;</li>
          <li>try to retrieve data by the button below.</li>
        </ul>
        <button @click="getData" class="rejected-container__button button">Retrieve data from the server again</button>
        <p class="rejected-container__p-item p-item">
          If nothing has changed, please inform me of this incident by e-mail on <a class="link" href="mailto:support@yankaincode.com?subject=Error Report | Vue project by Yanka_Incode &body=Greets!%0A%0AI've tried to open Data tab, but it didn't download.%0AIt wasn't the Internet connection issue. Reload of the website and try to retrieve data from the server again by an appropriate button didn't help.">support@yankaincode.com</a>.
        </p>
      </div>

    </Transition>
</template>

<script>
  export default {
    name: 'data-downloader',
    props: {
      downloadStatus: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './../modules/lists.scss';

  .data-downloader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7em;
    border-radius: 0 0 1em 1em;
    font-weight: bold;
    text-align: center;

    &--pending {background: linear-gradient(180deg, Honeydew, Khaki);}
    &--rejected {background: linear-gradient(180deg, Lavender, MistyRose);}

    & .p-item {
      padding-top: 1.6em;
      padding-bottom: 0.6em;
    }

    & .button {
      border: 0.2em ridge SlateBlue;
      border-radius: 0.5em;
      padding: 0.5em 1em 0.3em;
      background-color: LightCyan;
      transition: all 0.05s linear;

      &:hover {background-color: Azure;}
      &:active {background-color: PaleTurquoise;}
    }
  }

  /*------------------ Animations ------------------*/
  //--------- toggle-status
  .toggle-status {
    &-enter-active {transition: all 0.3s ease-out;}
    &-leave-active {transition: all 0.3s ease-out;}

    &-enter-from,
    &-leave-to {
      font-size: 0em;
    }
  }
</style>
