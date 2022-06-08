<template>
  <div class="broken-link">
    <section class="broken-link__section section">
      <h2 class="section__title title">Oh, it's 404 error!</h2>
      <div class="section__content content">
        <p class="content__p-item p-item">
          The page you were trying to access doesn't exist at all within this website or couldn't be found here.
          <br>Select any existing tab of your interest at the navigation bar or choose a link from the footer.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'broken-link',
    title: 'Non-existent path have brought you here'
  }
</script>

<style scoped lang="scss">
  .broken-link__section {
    & .title {background: linear-gradient(90deg, Pink, PowderBlue);}
    & .content {
      min-height: 105px;
      margin-top: 30px;
    }
    & .p-item {text-align: center;}
  }
</style>
