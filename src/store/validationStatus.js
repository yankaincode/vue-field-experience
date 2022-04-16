import { reactive } from 'vue'

export const validationStatus = reactive({
  value: '',
  update(newValue) {
    this.value = newValue;
  }
})
