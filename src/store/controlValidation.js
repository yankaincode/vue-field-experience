import { reactive } from 'vue';

const controlValidation = {
  status: '',
  errors: {
    name: [],
    email: []
  },
  errorsArr: [],

  errorTypes: {
    name: ['empty-name', 'invalid-name'],
    email: ['empty-email', 'invalid-email']
  },

  set(newValue) {
    if ((newValue === '' || newValue === 'pending') && this.errorsArr.length !== 0) this.clearErrors('all');
    this.status = newValue;
  },
  get() {
    return this.status;
  },

  isProcessed() {
    return (['pending', 'fulfilled'].includes(this.get()))
  },
  isError() {
    return ['network-error', 'fatal-error', 'rejected'].includes(this.status)
  },

  nullEndpointStatus() {
    if (['network-error', 'fatal-error', 'rejected', 'fulfilled'].includes(this.get())) this.set('')
  },

  pushError(inputNameStr, errorNameStr) {
    this.errors[inputNameStr].push(errorNameStr);
    this.errorsArr.push(errorNameStr);
  },
  clearErrors(input) {
    if (input === 'all') {
      for (let prop in this.errors) {
        this.errors[prop] = [];
      }
      this.errorsArr = [];

    } else {
      if (this.errors[input].length === 0) return;
      this.errors[input] = [];

      this.errorsArr = this.errorsArr.filter(error => !this.errorTypes[input].includes(error));
      if (this.errorsArr.length === 0) this.set('');
    }
  }
};

export const controlValidationForm = reactive(Object.assign({}, controlValidation));
export const controlValidationTable = reactive(Object.assign({}, controlValidation));
