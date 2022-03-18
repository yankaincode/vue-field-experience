<template>
  <div id="data-form">
    <form @submit.prevent="handleSubmit" class="form">

      <label for="name" class="label">Name:</label>
      <input
        id="name"
        ref="first"
        type="text"
        v-model="data.name"
        class="input"
        :class="{ 'input--error': submitting && isEmptyName }"
        @focus="clearStatus"
        @keypress="clearStatus"
        @click="clearStatus"
      />

      <label for="email" class="label">Email:</label>
      <input
        id="email"
        type="email"
        v-model="data.email"
        class="input"
        :class="{ 'input--error': submitting && isEmptyEmail }"
        @focus="clearStatus"
      />

      <input type="submit" class="submit-button" value="Add data" />

      <p
        v-if="submitting && error"
        class="error-message"
      >
        &#9940; Please fill out all required fields
      </p>
      <p
        v-if="success"
        class="success-message"
      >
        &#9989; Data successfully added
      </p>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'data-form',
    data() {
      return {
        submitting: false,
        success: false,
        error: false,
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
      },
    },
    methods: {
      handleSubmit() {
        this.submitting = true
        this.success = false
        this.error = false

        if (this.isEmptyName || this.isEmptyEmail) {
          this.error = true
          return
        }

        this.$emit('add:data', this.data)
        this.data = {
          name: '',
          email: '',
        }
        this.$refs.first.focus()

        this.success = true
        this.error = false
      },

      clearStatus() {
        this.submitting = false
        this.success = false
        this.error = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './../templates.scss';

  .form {
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }

  .label,
  .input,
  .submit-button {
    display: block;
    //text-align: center;
  //  margin: auto;
  }

  .label {
    //margin-top: 15px;
  }

  .input {
    //align-self: center;
    width: 90%;
    margin-bottom: 10px;
    padding: 7px 10px;

    &--error {
      border-color: Red;
    }
  }

  @media screen and (min-width: 500px) {
    .input {width: 70%;}
  }
  @media screen and (min-width: 700px) {
    .input {width: 50%;}
  }

  .submit-button {
    padding: 5px 25px;
    border: 3px outset DarkOrchid;
    border-radius: 10px;
    font-size: 1em;
    color: white;
    background: DarkOrchid;

    &:hover {background: DarkMagenta;}

    &:active {
      border-style: inset;
      background: Purple;
    }
  }

  [class*='message'] {
    text-align: center;
    font-weight: bold;
  }

  .error-message {
    color: Red;
  }

  .success-message {
    color: SeaGreen;
  }
</style>
