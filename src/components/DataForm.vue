<template>
  <form
    name="dataForm"
    class="data-form form"
    @submit.prevent="$emit('add:data', data)"
  >

    <label for="name" class="form__label label">Name:</label>
    <input
      ref="firstFormInput"
      type="text"
      maxlength="65"
      v-model.trim="data.name"
      :class="['form__input', 'input',
        controlInput.assignClass('name', data.name, controlValidationForm)
      ]"
      :disabled="controlValidationForm.isProcessed()
      || controlModeEdit.get()"
      @focus="controlValidationForm.clearErrors('name')"
      @keydown="controlInput.manageKeydown('name')"
    />

    <label for="email" class="form__label label">Email:</label>
    <input
      type="email"
      maxlength="138"
      v-model.trim="data.email"
      :class="['form__input', 'input',
        controlInput.assignClass('email', data.email, controlValidationForm)
      ]"
      :disabled="controlValidationForm.isProcessed()
      || controlModeEdit.get()"
      @focus="controlValidationForm.clearErrors('email')"
      @keydown="controlInput.manageKeydown('email')"
    />

    <input
      type="submit"
      class="form__submit-button submit-button"
      value="Add data"
      :disabled="controlValidationForm.isProcessed()
      || controlModeEdit.get()"
    />

  </form>
</template>

<script>
  import { controlValidationForm} from './../store/controlValidation.js'
  import { controlInput } from './../store/controlInput.js'
  import { controlModeEdit } from './../store/controlMode.js'

  export default {
    name: 'data-form',
    emits: ['add:data'],
    data() {
      return {
        controlValidationForm,
        controlInput,
        controlModeEdit,
        data: {
          name: '',
          email: ''
        }
      }
    },
    deactivated() {
      controlValidationForm.nullEndpointStatus()
    }
  }
</script>

<style scoped lang="scss">
  @import './../modules/data-input.scss';

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 10px;

    &__input {
      width: 100%;
      max-width: 450px;
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
    }
  }

  .submit-button {
    border: 3px outset SlateBlue;
    border-radius: 10px;
    font-size: 1em;
    background: linear-gradient(
      90deg,
      Khaki, MintCream, PaleGreen
    );

    &:hover {
      background: linear-gradient(
        90deg,
        Pink, Azure, Aquamarine
      );
    }
    &:active {
      border-style: inset;
      background: linear-gradient(
        90deg,
        Violet, PeachPuff, SpringGreen
      );
    }
  }

  @media screen and (min-width: 500px) {
    .form {
      &__input {width: 75%;}
      &__label {align-self: center;}
    }
  }

  @media screen and (min-width: 700px) {
    .form__input {width: 60%;}
  }

  @media print {
    .form__label {align-self: center;}
  }
</style>
