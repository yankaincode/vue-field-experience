<template>
  <div class="main-container container--small container--centered">
    <h1 class="page-title">Data</h1>

    <h2 class="">Data form</h2>
    <data-form @add:data="addData" />

    <h2 class="">Data table</h2>
    <data-table :dataCollection="dataCollection" />
  </div>
</template>

<script>
  import DataTable from '@/components/DataTable.vue'
  import DataForm from '@/components/DataForm.vue'

  export default {
    name: 'app',
    components: {
      DataTable,
      DataForm
    },
    data() {
      return {
        dataCollection: [
          {
            id: 1,
            name: 'Richard Hendricks',
            email: 'richard@piedpiper.com',
          },
          {
            id: 2,
            name: 'Bertram Gilfoyle',
            email: 'gilfoyle@piedpiper.com',
          },
          {
            id: 3,
            name: 'Dinesh Chugtai',
            email: 'dinesh@piedpiper.com',
          },
        ],
      }
    },
    methods: {
      addData(data) {
        const lastId = this.dataCollection.length > 0
          ? this.dataCollection.length : 0;
        const id = lastId + 1;
        const newData = { ...data, id };

        this.dataCollection = [...this.dataCollection, newData]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./library.blocks/css-normalize/css-normalize.scss";

  .main-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 15px 10px;
    color: #2c3e50;
  }

  .page-title {
    text-align: center;
    color: DarkTurquoise;
  }

  .container--small {max-width: 680px;}
  .container--centered {margin: auto;}
</style>
