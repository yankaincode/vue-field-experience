<template>
  <div class="main-container">
    <h1 class="page-title">Data</h1>

    <h2 class="section-title">Data form</h2>
    <data-form @add:data="addData" />

    <h2 class="section-title">Data table</h2>
    <data-table
      :dataCollection="dataCollection"
      @delete:data="deleteData"
      @edit:data="editData"
    />

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
        const newData = { id, ...data };

        this.dataCollection = [...this.dataCollection, newData]
      },
      
      deleteData(id) {
        this.dataCollection = this.dataCollection.filter(
          data => data.id !== id //приходится по всем проходиться
        )
      },

      editData(id, updatedData) {
        this.dataCollection = this.dataCollection.map(data =>
          data.id === id ? updatedData : data
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./library.blocks/css-normalize/css-normalize.scss";
  @import './templates.scss';

  .main-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 800px;
    padding: 5px;
    color: MidnightBlue;
    @extend %container--centered;
  }

  .page-title {
    margin: 0;
    border-radius: 15px 15px 0 0;
    padding: 30px 0 10px;
    text-align: center;
    color: white;
    background-color: Teal;
  }
  .section-title {
    padding-left: 10px;
  }
</style>
