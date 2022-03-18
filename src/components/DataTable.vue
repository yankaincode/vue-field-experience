<template>
  <div id="data-table" class="data-table-container">
    <p v-if="dataCollection.length < 1" class="empty-table-message">No data added</p>
    <table v-else class="table">
      <thead class="table__thead thead">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody class="table__tbody tbody">
        <tr v-for="data in dataCollection" :key="data.id">

          <td v-if="editing === data.id">
            <input ref="lastone" type="text" v-model="data.name" class="tbody__input" />
          </td>
          <td v-else>{{ data.name }}</td>

          <td v-if="editing === data.id">
            <input type="email" v-model="data.email" class="tbody__input" />
          </td>
          <td v-else>{{ data.email }}</td>

          <td v-if="editing === data.id" class="actions-container">
            <button @click="editData(data)"
              class="actions-container__button button--save"
            >Save</button>
            <button @click="cancelEdit(data)"
              class="actions-container__button button--cancel"
            >Cancel</button>
          </td>
          <td v-else class="actions-container">
            <button @click="editMode(data), focusInput"
              class="actions-container__button button--initial"
            >Edit</button>
            <button @click="$emit('delete:data', data.id)"
              class="actions-container__button button--initial"
            >Delete</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'data-table',
    props: {
      dataCollection: Array
    },
    data() {
      return {
        editing: null,
        cachedData: null
      }
    },

    methods: {
      focusInput() {
        if (this.editing > -1) {
          this.$refs.lastone.focus() // не работает фокус на первом input
        }
      },

      editMode(data) {
        this.cachedData = Object.assign({}, data)
        this.editing = data.id //сохраняет любое значение поля при нажатии на редактирование на другом поле - так можно сохранить пустое поле
        //Варианты:
        // - проверка перед переходом к редактированию другого поля
        // - блокировка остальных кнопок редактирования, чтобы предварительно сохранить или отменить введенное
      },

      cancelEdit(data) {
        Object.assign(data, this.cachedData)
        this.editing = null
        this.cachedData = null
      },

      editData(data) {
        if (data.name === '' || data.email === '') { // подсвечивать пустое поле
          return
        }

        this.$emit('edit:data', data.id, data) // должна быть проверка, что введен email
        this.editing = null
        this.cachedData = null
      }
    }
  }
</script>

<style scoped  lang="scss">
  @import './../templates.scss';

  .table {
    width: 100%;
    border-collapse: collapse;

    &__thead {background-color: PowderBlue;}
    &__tbody {background-color: LightCyan;}

    & th,
    & td {
      padding: 10px 10px 0;
    }
  }

  .thead {
    & th:last-child {width: 20%; text-align: center;}
    & th {
      width: 40%;
      padding-bottom: 5px;
      text-align: left;
    }

    & tr {border-bottom: 3px ridge SteelBlue;}
  }

  .tbody { // нужно центрирвоать содержимое строк
    & td {padding-bottom: 2px;}
    & tr {border-bottom: 2px solid SteelBlue;}

    &__input {
      width: 90%;
      padding: 0;
      border: 2px inset SteelBlue;
      border-radius: 8px;
      font-size: 14.5px;
      background-color: LemonChiffon;

      &:focus {background-color: White;}
    }
  }

  .actions-container {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 10px;

    &__button {
      border: 2px ridge RosyBrown;
      border-radius: 8px;

      &:hover {
        filter: brightness(120%); //не срабатывает hover когда нажал на кнопку и остался на ней
      }
    }
  }

  .button {
    &--initial {background-color: Khaki;}

    &--save {background-color: PaleGreen;}
    &--cancel {background-color: LightYellow;}
  }

  .empty-table-message {
    padding: 10px 10px 5px;
    border-bottom: 3px ridge SteelBlue;
    text-align: center;
    font-weight: bold;
    background-color: PowderBlue;
  }
</style>
