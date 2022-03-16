<template>
  <div id="data-form">
    <form @submit.prevent="handleSubmit">

      <label for="name" class="label">Name</label>
      <input
        id="name"
        ref="first"
        type="text"
        v-model="data.name"
        class="input"
        :class="{ 'has-error': submitting && invalidName }"
        @focus="clearStatus"
        @keypress="clearStatus"
      />  <!-- isn't @focus enough? or only @keypress? -->

      <label for="email" class="label">Email</label>
      <input
        id="email"
        type="email"
        v-model="data.email"
        class="input"
        :class="{ 'has-error': submitting && invalidEmail }"
        @focus="clearStatus"
        @keypress="clearStatus"
      />

      <input type="submit" class="submit-button" value="Add data" />

      <p
        v-if="error && submitting"
        class="error-message"
      >
        ❗Please fill out all required fields
      </p>
      <p
        v-if="success"
        class="success-message"
      >
        ✅ Data successfully added
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
    computed: {  // what will be returned, where? how it works
      invalidName() {
        return this.data.name === ''
      },

      invalidEmail() {
        return this.data.email === ''
      },
    },
    methods: {
      handleSubmit() {
        this.clearStatus()
        this.submitting = true

        if (this.invalidName || this.invalidEmail) {
          this.error = true // why submitting isn't false too here?
          return
        }

        this.$emit('add:data', this.data)
        this.$refs.first.focus()
        this.data = {
          name: '',
          email: '',
        }

        this.submitting = false
        this.success = true
        this.error = false
      },

      clearStatus() {
        this.success = false
        this.error = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './../templates.scss';

  .label,
  .input,
  .submit-button {
    display: block;
  }

  .label {
    margin-top: 15px;
  }

  .input {
    margin-bottom: 10px;
    padding: 7px 10px;
  }

  .submit-button {
    margin: auto;
    padding: 5px 25px;
    border: 3px outset DarkOrchid;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background: DarkOrchid;

    &:hover {background: DarkMagenta;}

    &:active {
      border-style: inset;
      background: Purple;
    }
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }

  [class*='-message'] {
    text-align: center;
    font-weight: 600;
  }
</style>
