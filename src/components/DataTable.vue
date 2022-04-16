<template>
  <div class="data-table">

    <table  class="table">

      <caption
        v-if="dataCollection.length < 1"
        class="table__caption caption"
      >
        No data added
      </caption>
      <thead v-else class="table__thead thead">
        <tr class="thead__tr tr">
          <th class="thead__th th">Name</th>
          <th class="thead__th th">Email</th>
          <th class="thead__th th">Actions</th>
        </tr>
      </thead>

      <tbody class="table__tbody tbody">
        <tr v-for="data in dataCollection" :key="data.id" class="tbody__tr">

          <td v-if="editingId === data.id" class="tbody__td td td--editing">
            <input
              ref="editFirst"
              type="text"
              maxlength="65"
              v-model.trim="data.name"
              class="tbody__input input"
              :class="[
                {'input--rejected': this.editStatus === 'empty-input' && data.name.length === 0
                || this.editStatus === 'invalid-name'},
                data.name.length === 0 ? 'input--empty' : 'input--filled'
              ]"
              @focus="clearStatus"
              @keydown="handleInput('name')"
              @keyup="clearStatus"
            />
          </td>
          <td v-else class="tbody__td td">{{ data.name }}</td>

          <td v-if="editingId === data.id" class="tbody__td td td--editing">
            <input
              type="email"
              maxlength="138"
              v-model.trim="data.email"
              class="tbody__input input"
              :class="[
                {'input--rejected': this.editStatus === 'empty-input' && data.email.length === 0
                || this.editStatus === 'invalid-email'},
                data.email.length === 0 ? 'input--empty' : 'input--filled'
              ]"
              @focus="clearStatus"
              @keydown="handleInput('email')"
              @keyup="clearStatus"
            />
          </td>
          <td v-else class="tbody__td td">{{ data.email }}</td>

          <td
            class="tbody__td td"
            :class="{'td--editing': editingId === data.id,
            'td--not-editing': editingId !== data.id && this.editLaunched}"
          >
            <Transition name="action-buttons" mode="out-in">
              <div v-if="!editingId" class="td__actions-container actions-container">
                <button
                  @click="launchEdit(data)"
                  class="actions-container__button button--edit"
                  aria-label="Edit data from this row."
                >Edit</button>
                <button
                  @click="$emit('delete:data', data.id)"
                  class="actions-container__button button--delete"
                  aria-label="Delete this row."
                >Delete</button>
              </div>
              <div v-else-if="editingId === data.id" class="td__actions-container actions-container">
                <button
                  @click="saveEdit(data)"
                  class="actions-container__button button--save"
                  aria-label="Save changes."
                >Save</button>
                <button
                  @click="cancelEdit(data)"
                  class="actions-container__button button--cancel"
                  aria-label="Cancel changes."
                >Cancel</button>
              </div>
              <div v-else class="td__actions-container actions-container"></div>
            </Transition>
          </td>

        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import * as checkForm from './../modules/check-form.js'

  export default {
    name: 'data-table',
    props: {
      dataCollection: Array
    },
    data() {
      return {
        editingId: null,
        cachedData: null,
        editLaunched: false,
        editStatus: ''
      }
    },
    methods: {
      launchEdit(data) {
        this.editLaunched = true

        this.cachedData = Object.assign({}, data)
        this.editingId = data.id

        this.$nextTick(() => {
          this.$refs.editFirst[0].focus()
        })
      },

      cancelEdit(data) {
        Object.assign(data, this.cachedData)
        this.editingId = null
        this.cachedData = null

        this.editLaunched = false
        this.editStatus = ''
      },

      saveEdit(data) {
        if (data.name === '' || data.email === '') {
          this.editStatus = 'empty-input'
          return
        } else if (!checkForm.isNameValid(data.name)) {
          this.editStatus = 'invalid-name'
          return
        } else if (!checkForm.isEmailValid(data.email)) {
          this.editStatus = 'invalid-email'
          return
        }

        this.$emit('edit:data', data.id, data)
        this.editingId = null
        this.cachedData = null

        this.editLaunched = false
        this.editStatus = ''
      },

      clearStatus() {
        this.editStatus = ''
      },

      handleInput(field) {
        checkForm.handleInput(field)
      }
    }
  }
</script>

<style scoped lang="scss">
  %table-border-style {
    border-width: 2px 4px;
    border-style: inset;
    border-color: Teal;
  }

  .table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    @extend %table-border-style;

    &__thead {background-color: PaleTurquoise;}
    &__caption {
      padding: 10px 10px 5px;
      background-color: Wheat;
      @extend %table-border-style;
    }
  }

  .caption {
    text-align: center;
    font-weight: bold;
  }

  .thead__th,
  .tbody__td {
    display: block;
    margin: auto;
    padding-right: 10px;
    padding-left: 10px;

    &:last-child {padding-left: unset;}
  }

  .thead {
    &__th {
      margin: auto;
      padding-top: 8px;
    }

    &__tr {border-bottom: 2px ridge SteelBlue;}
  }

  .tbody {
    &__td {
      height: 40px;
      padding-top: 4px;
      padding-bottom: 4px;
      line-height: 2;
      &:last-child {padding-top: unset; padding-bottom: unset;}
    }

    &__tr {
      border-bottom: 1px solid SteelBlue;

      &:last-child {border-bottom: none;}

      &:nth-child(odd) {background-color: Azure;}
      &:nth-child(even) {background-color: LightCyan;}

      &:hover {background-color: rgb(106, 90, 205, 0.3);}
    }

    &__input {
      width: 100%;
      padding: 3px 5px 0;
      border-width: 3px;
      border-style: inset;
      font-size: 16px;
    }
  }

  .td {
    &--editing {
      padding-right: 3px;
      padding-left: 3px;
      background-color: SlateBlue;
    }
    &--not-editing {
      background-color: rgb(106, 90, 205, 0.3);
      transition: all 0.25s linear;
    }
  }

  @media screen and (min-width: 500px) {
    .thead__th,
    .tbody__td {
      &:last-child {
        display: table-cell;
      }
    }

    .thead__th {
      width: 70%;

      &:last-child {width: 30%;}
    }
  }

  @media screen and (min-width: 700px) {
    .thead__th,
    .tbody__td {
      display: table-cell;
    }

    .thead {
      &__th {
        width: 40%;
        padding-top: 10px;
        padding-bottom: 5px;
        text-align: left;

        &:last-child {width: 20%; text-align: center;}
      }
    }

    .tbody__input {width: 100%;}
  }

  .actions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &__button {
      padding: 6px 5px 2px;
      border: 1px ridge RosyBrown;
      border-radius: 8px;
      font-size: 0.9em;

      &:hover {
        background-color: White;
      }
    }
  }

  .button {
    &--edit {background-color: Wheat;}
    &--delete {background-color: BurlyWood;}

    &--save {background-color: PaleGreen;}
    &--cancel {background-color: LightPink;}
  }

  .action-buttons-enter-active {
    animation: toggle-on-x 1s;
  }
  .action-buttons-leave-active {
    animation: toggle-on-x 0.5s reverse;
  }

  @keyframes toggle-on-x {
    0% {transform: translateX(-8px);}
    50% {transform: translateX(8px);}
    100% {transform: translateX(0);}
  }

  .action-buttons-enter-from {
    opacity: 0;
    transform: translateX(-8px);
  }

  .action-buttons-leave-to {
    transform: translateX(8px);
  }
</style>
