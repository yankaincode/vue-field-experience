<template>
  <div :class="['data-status', assignStatusClass]">
    <p v-if="this.status !== 'rejected' || errorsArr.length === 0"
      class="data-status__p-item p-item"
    >
      {{ assignStatusMessage() }}
    </p>
    <ol v-else :class="['data-status__errors-ol', 'errors-ol', 'ol-list',
      (errorsArr.length > 1) ? 'ol-list--roman' : 'ol-list--no-marker']"
    >
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
      dataQuantity: {
        // Necessary if status should be on display in every case.
        type: Number,
        default: -1
      },
      editMode: {
        // Necessary if editMode status should be catched
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
          : (this.dataQuantity === 0 && ['', 'with-data'].includes(validationStatus)) ? 'no-data'
          : (this.dataQuantity > 0 && (validationStatus === '' || validationStatus === 'no-data')) ? 'with-data'
          : validationStatus
      }
    }
  }
</script>

<style scoped lang="scss">
  @forward './../modules/list.scss';

  @mixin symbol($char) {
    &:before {content: $char;}
  }

  .data-status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-weight: bold;

    & .p-item {text-align: center;}

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
      color: RoyalBlue;
      @include symbol("\2728");
    }
    &--no-data {
      color: Teal;
      @include symbol("\01F4AB");
    }
    &--edit-mode {
      color: Indigo;
      @include symbol("\01F4DD");
    }

    &--none {display: none}

    & .errors-ol {
      list-style-position:inside;

      & li::marker {color: DarkMagenta;}
    }
  }
</style>
