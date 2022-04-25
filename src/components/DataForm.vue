<template>
  <div class="data-form">
    <form @submit.prevent="handleSubmit" class="form">

      <label for="name" class="form__label label">Name:</label>
      <input
        ref="firstFormInput"
        type="text"
        maxlength="65"
        v-model.trim="data.name"
        :class="['form__input', 'input',
          {'input--rejected': validationStatus.value === 'empty-input' && isEmptyName
          || validationStatus.value === 'invalid-name'},
          isEmptyName ? 'input--empty' : 'input--filled'
        ]"
        @click="clearStatus"
        @focus="clearStatus"
        @keydown="handleInput('name')"
        @keyup="clearStatus"
      />

      <label for="email" class="form__label label">Email:</label>
      <input
        type="email"
        maxlength="138"
        v-model.trim="data.email"
        :class="['form__input', 'input',
          {'input--rejected': validationStatus.value === 'empty-input' && isEmptyEmail
          || validationStatus.value === 'invalid-email'},
          isEmptyEmail ? 'input--empty' : 'input--filled'
        ]"
        @focus="clearStatus"
        @keydown="handleInput('email')"
        @keyup="clearStatus"
      />

      <input type="submit" class="form__submit-button submit-button" value="Add data" />

    </form>
  </div>
</template>

<script>
  import { validationStatus } from './../store/validationStatus.js'
  import * as checkForm from './../modules/check-form.js'

  export default {
    name: 'data-form',
    data() {
      return {
        validationStatus,
        data: {
          name: '',
          email: ''
        }
      }
    },
    computed: {
      isEmptyName() {
        return this.data.name === ''
      },
      isEmptyEmail() {
        return this.data.email === ''
      }
    },
    methods: {
      handleSubmit() {
        validationStatus.update('pending')

        if (this.isEmptyName || this.isEmptyEmail) {
          validationStatus.update('empty-input')
          return
        } else if (!checkForm.isNameValid(this.data.name)) {
          validationStatus.update('invalid-name')
          return
        } else if (!checkForm.isEmailValid(this.data.email)) {
          validationStatus.update('invalid-email')
          return
        }

        this.$emit('add:data', this.data)
        this.data = {
          name: '',
          email: '',
        }
        this.$refs.firstFormInput.focus()

        validationStatus.update('fulfilled')
      },

      clearStatus() {
        validationStatus.update('')
      },

      handleInput(field) {
        checkForm.handleInput(field)
      }
    }
  }
</script>

<style scoped lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px 10px;

    &__input {
      width: 100%;
      margin-bottom: 15px;
      padding: 7px 10px;
      border-width: 6px;
      border-style: outset;
    }

    &__label {
      align-self: flex-start;
    }

    &__submit-button {
      margin-top: 10px;
      padding: 10px 25px 5px;
      border: 3px outset MediumSlateBlue;
      border-radius: 10px;

      &:active {border-style: inset;}
    }
  }

  @media screen and (min-width: 500px) {
    .input {width: 75%;}
    .label {align-self: center;}
  }
  @media screen and (min-width: 700px) {
    .input {width: 60%;}
  }

  .submit-button {
    font-size: 1em;
    background: linear-gradient(
      130deg,
      Plum, MintCream, SkyBlue
    );

    &:hover {
      background: linear-gradient(
        130deg,
       white, Aquamarine, Pink
      );
    }
    &:active {
      background: linear-gradient(
        130deg,
       PeachPuff, Aquamarine, Violet
      );
    }
  }
</style>
