import { reactive } from 'vue';
import { controlValidationForm, controlValidationTable } from './controlValidation.js';

export const controlModeDelete = reactive({
  status: false,
  id: null,

  set(isLaunched, id = null) {
    this.status = isLaunched;
    this.id = id;
  },
  get() {
    return this.status;
  }
});

export const controlModeEdit = reactive({
  status: false,
  id: null,

  editingData: null,
  cachedData: null,

  set(isLaunched, editingData = null) {
    this.status = isLaunched;
    this.editingData = editingData;

    if (isLaunched) {
      this.id = editingData.id;
      this.cachedData = Object.assign({}, editingData);
      controlValidationForm.nullEndpointStatus();
    } else {
      this.id = null;
      this.cachedData = null;
      controlValidationTable.nullEndpointStatus();
    }
  },
  get() {
    return this.status;
  },

  cancelEdit() {
    Object.assign(this.editingData, this.cachedData);
    this.set(false);
  },
  determineUpdated() {
    let changedNum = 0
    let changedObj = {}

    for (let prop in this.editingData) {
      if (this.editingData[prop] !== this.cachedData[prop]) {
        changedNum++
        changedObj[prop] = this.editingData[prop]
      }
    }
    // As id property never changes: realCachedLength - 1,
    let cachedLength = Object.keys(this.cachedData).length - 1

    return (changedNum === 0) ? 'none'
      : (changedNum === cachedLength) ? 'all' : changedObj
  }
});
