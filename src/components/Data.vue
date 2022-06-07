<template>
  <div v-if="downloadStatus !== 'fulfilled'"
    :class="[ 'data-tab', 'data-tab--downloader',
      {'data-tab--rejected': downloadStatus === 'rejected',
      'data-tab--pending': downloadStatus === 'pending'}
    ]"
  >
    <p v-if="downloadStatus === 'pending'" class="data-tab__p">
      Loading process is launched. Please, wait a bit...
    </p>
    <div v-else>
      <p class="data-tab--downloader__p p">
        Sorry, we've met a download error.
        <br />Check your connection to the Internet. If it's alright, please inform me of this incident by e-mail on <a class="link" href="mailto:support@yankaincode.com?subject=Data tab: A download error &body=I tried to open Data tab, but it didn't download, and it wasn't the Internet connection issue.">support@yankaincode.com</a>.
      </p>
      <button @click="getData" class="data-tab--downloader__button button">Update the page</button>
    </div>
  </div>

  <div v-else class="data-tab">
    <div class="data-tab__section section">
      <h2 class="section__title title">Data form</h2>
      <Transition name="form-show-up" type="transition" appear>
        <KeepAlive>
          <DataForm
            @add:data="addData"
            class="section__content content"
          />
        </KeepAlive>
      </Transition>
    </div>

    <div class="data-tab__section section">
      <DataStatus
        :errors-arr="controlValidationForm.errorsArr"
        :validation-status="controlValidationForm.get()"
        :data-quantity="dataCollection.length"
        :edit-mode="controlModeEdit.get()"
        class="section__content content"
      />
    </div>

    <div class="data-tab__section section">
      <h2 class="section__title title">Data table</h2>
      <DataTable
        :data-collection="dataCollection"
        @delete:data="deleteData"
        @edit:data="editData"
        class="section__table table"
      />
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Promise from 'core-js-pure/actual/promise';

  import DataForm from './DataForm.vue'
  import DataStatus from './DataStatus.vue'
  import DataTable from './DataTable.vue'

  import { controlValidationForm, controlValidationTable } from './../store/controlValidation.js'
  import { controlModeDelete, controlModeEdit } from './../store/controlMode.js'
  import { controlInput } from './../store/controlInput.js'

  export default {
    name: 'data-tab',
    components: {
      DataForm,
      DataStatus,
      DataTable
    },
    data() {
      return {
        controlValidationForm,
        controlValidationTable,
        controlModeEdit,
        controlModeDelete,
        controlInput,

        dataCollection: Array,
        dataLastExistedId: Number,
        dataDownloadedLength: Number,

        downloadUrl: 'https://jsonplaceholder.typicode.com/users',
        downloadStatus: String
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        this.downloadStatus = 'pending'

        try {
          const request = await axios.get(this.downloadUrl, {
            timeout: 20000
          })
          await setTimeout( () => {
            this.downloadStatus = 'fulfilled'
            this.dataCollection = request.data
            this.dataLastExistedId = this.dataCollection.length
            this.dataDownloadedLength = this.dataCollection.length
          }, 600)

        } catch (error) {
          this.downloadStatus = 'rejected'
        }
      },

      async addData(data) {
        controlValidationForm.set('pending')

        if (['network-error', 'fatal-error'].includes(controlValidationTable.get())) controlValidationTable.set('')

        try {
          controlInput.verifyValidity(data, controlValidationForm)
          if (controlValidationForm.get() === 'rejected') throw 'rejected'

          this.dataLastExistedId++
          let id = this.dataLastExistedId

          const newData = { id, ...data }
          const request = await axios.post(this.downloadUrl, {
            data: newData,
            timeout: 20000
          })

          controlValidationForm.set('fulfilled')

          this.dataCollection = [...this.dataCollection, newData]

          await setTimeout(() => {
            data.name = ''
            data.email = ''
            controlValidationForm.set('')
          }, 1500)

        } catch(error) {
          controlValidationForm.set(this.setErrorType(error))
        }
      },

      async editData(data) {
        let determinedUpdated = controlModeEdit.determineUpdated()
        if (determinedUpdated === 'none') {
          controlModeEdit.cancelEdit()
          return
        }

        controlValidationTable.set('pending')

        try {
          controlInput.verifyValidity({name: data.name, email: data.email}, controlValidationTable)
          if (controlValidationTable.get() === 'rejected') throw 'rejected'

          let id = data.id
          let arrIndex = this.dataCollection.indexOf(data)

          if (id <= this.dataDownloadedLength && determinedUpdated === 'all') {
            // Original data from JSON have no problems with neither PUT, nor PATCH request methods
            const request = await axios.put(`${this.downloadUrl}/${id}`, {
              data: data,
              timeout: 20000
            })
            this.dataCollection[arrIndex] = data

          } else {
            // New data from the Form is not fully back-end friendly for now (error 500),
            // so to save the corrected new data in the table - use a PATCH request method only
            const request = await axios.patch(`${this.downloadUrl}/${id}`, {
              data: determinedUpdated,
              timeout: 20000
            })

            for (let prop in determinedUpdated) {
              this.dataCollection[arrIndex][prop] = determinedUpdated[prop]
            }
          }

          controlValidationTable.set('fulfilled')
          await setTimeout( () => {
            controlModeEdit.set(false);
            controlValidationTable.set('')
          }, 1500)

        } catch (error) {
          controlValidationTable.set(this.setErrorType(error))
        }
      },

      async deleteData(id) {
        controlValidationTable.set('pending')
        controlValidationForm.nullEndpointStatus()

        controlModeDelete.set(true, id)

        try {
          const request = await axios.delete(`${this.downloadUrl}/${id}`, {
            timeout: 20000
          })

          controlValidationTable.set('fulfilled')

          await setTimeout(() => {
            this.dataCollection = this.dataCollection.filter(data => data.id !== id)
            controlValidationTable.set('')
            controlModeDelete.set(false)
          }, 1500)

        } catch(error) {
          controlValidationTable.set(this.setErrorType(error))
          await setTimeout( () => { controlModeDelete.set(false) }, 5000)
        }
      },

      setErrorType(error) {
        let errorType = (error === 'rejected') ? 'rejected'
          : (error.message === 'Network Error') ? 'network-error'
          : 'fatal-error'

        if (errorType === 'fatal-error') console.error(error.message)

        return errorType
      }
    }
  }
</script>

<style scoped lang="scss">
  .data-tab--downloader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    border-radius: 0 0 15px 15px;
    font-weight: bold;

    &__p {text-align: center;}

    &__button {
      padding: 8px 15px 5px;
      background-color: LightCyan;
    }
  }

  .data-tab {
    &--rejected {
      background: linear-gradient(180deg, Lavender, MistyRose);
    }
    &--pending {
      background: linear-gradient(180deg, Honeydew, Khaki);
    }
  }

  /*------------------ Animations ------------------*/
  //--------- form-show-up
  .form-show-up {
    &-enter-active {transition: all 0.3s ease-out;}

    &-enter-from {
      font-size: 0em;
      transform: translateY(-20px);
      opacity: 0.1;
    }
    &-enter-to {opacity: 0.8;}
  }
</style>
