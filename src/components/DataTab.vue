<template>
  <DataDownloader
    v-if="downloadStatus !== 'fulfilled'"
    :download-status="downloadStatus"
    class="data-tab"
  />
  <div
    v-else
    :class="['data-tab',
      {'data-tab--progress': controlValidationForm.get() ==='pending'
      || controlValidationTable.get() ==='pending'}
    ]"
  >

    <section class="data-tab__section section">
      <h2 class="section__title title">Data form</h2>
      <Transition name="show-up" type="transition" appear>
        <KeepAlive>
          <DataForm
            @add:data="addData"
            class="section__content content"
          />
        </KeepAlive>
      </Transition>
    </section>

    <section class="data-tab__section section">
      <DataStatus
        :errors-arr="controlValidationForm.errorsArr"
        :validation-status="controlValidationForm.get()"
        :data-quantity="dataCollection.length"
        :edit-mode="controlModeEdit.get()"
        class="section__content content"
      />
    </section>

    <section class="data-tab__section section">
      <h2 class="section__title title">Data table</h2>
      <DataTable
        :data-collection="dataCollection"
        @delete:data="deleteData"
        @edit:data="editData"
        class="section__table table"
      />
    </section>

  </div>
</template>

<script>
  import axios from 'axios'

  import DataDownloader from './DataDownloader.vue'
  import DataForm from './DataForm.vue'
  import DataStatus from './DataStatus.vue'
  import DataTable from './DataTable.vue'

  import { controlValidationForm, controlValidationTable } from './../store/controlValidation.js'
  import { controlModeDelete, controlModeEdit } from './../store/controlMode.js'
  import { controlInput } from './../store/controlInput.js'

  export default {
    name: 'data-tab',
    title: 'Project: Data Exchange',
    components: {
      DataDownloader,
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
          }, 2500)

        } catch (error) {
          await setTimeout( () => {
            this.downloadStatus = 'rejected'
          }, 2500)
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
          }, 1500)

        } catch(error) {
          controlValidationTable.set(this.setErrorType(error))

        } finally {
          const timing = (controlValidationTable.get() === 'fulfilled') ? 1500 : 5000
          await setTimeout( () => {
            controlValidationTable.set('')
            controlModeDelete.set(false)
          }, timing)
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
  .data-tab--progress {cursor: progress;}

  /*------------------ Animations ------------------*/
  //--------- show-up
  .show-up {
    &-enter-active {transition: all 0.3s ease-out;}
    &-leave-active {transition: all 0.2s ease-in-out;}

    &-enter-from,
    &-leave-to {
      font-size: 0em;
      transform: translateY(-2em);
      opacity: 0.1;
    }
    &-enter-to,
    &-leave-from {
      opacity: 0.8;
    }
  }
</style>
