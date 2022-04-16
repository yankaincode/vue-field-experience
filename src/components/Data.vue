<template>
  <div class="data-page content-container">

    <div class="data-page__section section">
      <h2 class="section__title">Data form</h2>
      <data-form @add:data="addData"></data-form>
    </div>

    <div class="data-page__section section">
      <data-status :class="statusClass">
        {{ assignStatusMessageVsClass() }}
      </data-status>
    </div>

    <div class="data-page__section section">
      <h2 class="section__title">Data table</h2>
      <data-table
        :dataCollection="dataCollection"
        @delete:data="deleteData"
        @edit:data="editData"
      />
    </div>

  </div>
</template>

<script>
  import DataForm from './DataForm.vue'
  import DataStatus from './DataStatus.vue'
  import DataTable from './DataTable.vue'

  import { validationStatus } from './../store/validationStatus.js'

  export default {
    name: 'data-page',
    components: {
      DataForm,
      DataStatus,
      DataTable
    },
    data() {
      return {
        validationStatus,
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
        statusClass: '',
        statusMessage: '',
        statusMessageObject: {
          'pending': 'Validation is in process. Please, wait a bit',
          'empty-input': 'Please, fill out all required fields',
          'invalid-name': 'The entered name isn\'t valid. Please, verify its accuracy',
          'invalid-email': 'The entered e-mail isn\'t valid. Please, verify its accuracy',
          'fulfilled': 'Data was successfully added',
          'with-data': 'Input some new data or edit the table',
          'no-data': 'Input some new data'
        }
      }
    },
    computed: {
      dataQuantity() {
        return this.dataCollection.length
      }
    },
    deactivated() {
      if (validationStatus.value === 'empty-input'
      || validationStatus.value === 'invalid-name'
      || validationStatus.value === 'invalid-email'
      || validationStatus.value === 'fulfilled')
      validationStatus.update('')
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
          data => data.id !== id
        )
      },

      editData(id, updatedData) {
        this.dataCollection = this.dataCollection.map(data =>
          data.id === id ? updatedData : data
        )
      },

      assignStatusMessageVsClass() {
        let status = validationStatus.value

        if (this.dataQuantity === 0) {
          if (status === ''
          || status === 'with-data'
          || status === 'fulfilled') {
            status = 'no-data'
          }
        } else if (this.dataQuantity !== 0
          && (status === '' || status === 'no-data')) {
          status = 'with-data'
        }

        this.statusMessage = this.statusMessageObject[status]
        this.statusClass = `data-status--${status}`

        return this.statusMessage
      }
    }
  }
</script>

<style  lang="scss"></style>
