<template>
  <div :class="['data-status', assignStatusClass]">
    <p v-if="this.status !== 'rejected' || errorsArr.length === 0"
      class="data-status__p-item p-item"
    >
      {{ assignStatusMessage() }}
    </p>
    <ol v-else :class="['data-status__errors-ol', 'errors-ol',
    (dataQuantity > -1) ? 'errors-ol--roman' : 'errors-ol--no-marker']">
      <li v-for="error in errorsArr">
        <strong>{{ messageTypesObj[error] }}</strong>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'data-status',

    props: {
      errorsArr: {
        type: Array,
        required: true
      },
      validationStatus: {
        type: String,
        required: true
      },
      dataQuantity: { // Necessary if status should be on display in every case.
        type: Number,
        default: -1
      },
      editMode:  { // Necessary if editMode status should be catched
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        status: '',
        messageTypesObj: {
          // Common status types:
          'pending': 'Validation is in process. Please, wait a bit',
          'fulfilled': 'Data was successfully processed',

          // Error types:
          'empty-name': 'Fill the name field',
          'empty-email': 'Fill the email field',
          'invalid-name': 'The entered name isn\'t valid',
          'invalid-email': 'The entered e-mail isn\'t valid',
          'network-error': 'It\'s a Network error. Check your connection to the Internet, then try again',
          'fatal-error': 'Something went pretty wrong. Check your Internet connection, just try again, restart the page.',

          // If dataQuantity is specified, available status types:
          'with-data': 'Input some new data or edit the table',
          'no-data': 'Input some new data',
          // If editMode is specified:
          'edit-mode': 'Edit mode is launched'
        }
      }
    },

    computed: {
      assignStatusClass() {
        return (this.status !== '') ? `data-status--${this.status}` : 'data-status--none'
      }
    },

    methods: {
      assignStatusMessage() {
        this.status = (this.dataQuantity > -1) ? this.assignClass(this.validationStatus) : this.validationStatus
        if (this.status === '') return

        return this.messageTypesObj[this.status]
      },

      assignClass(validationStatus) {
        return (this.editMode) ? 'edit-mode'
          : (this.dataQuantity === 0 && ['', 'with-data', 'fulfilled'].includes(validationStatus)) ? 'no-data'
          : (this.dataQuantity > 0 && (validationStatus === '' || validationStatus === 'no-data')) ? 'with-data'
          : validationStatus
      }
    }
  }
</script>

<style scoped lang="scss">
  @mixin symbol($char) {
    &:before {
      content: $char;
      display: block;
    }
  }

  .data-status {
    text-align: center;
    font-weight: bold;

    &--pending {
      color: MediumBlue;
      @include symbol("\01F570\0FE0F");
    }
    &--fulfilled {
      color: SeaGreen;
      @include symbol("\2705");
    }

    &--rejected {
      color: Crimson;
      @include symbol("\26D4");
    }
    &--network-error {
      color: Purple;
      @include symbol("\01F4E1");
    }
    &--fatal-error {
      color: DarkMagenta;
      @include symbol("\274C");
    }

    &--with-data {
      color: MediumBlue;
      @include symbol("\2728");
    }
    &--no-data {
      color: Blue;
      @include symbol("\01F4AB");
    }
    &--edit-mode {
      color: Indigo;
      @include symbol("\01F4DD");
    }

    &--none {display: none}
  }

  .errors-ol {
    &--roman {
      list-style-type: upper-roman;

      & li::marker {
        font-family: Garamond;
        color: DarkMagenta;
      }
    }

    &--no-marker {list-style-type: none;}
  }
</style>
