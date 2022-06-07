import { reactive } from 'vue';

const isValid = (inputTypeStr, inputValue) => {
  let regExpPrecept;

  switch(inputTypeStr) {
    case 'name':
      regExpPrecept = /(^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я\s\'\-\.]{0,63})[a-zA-Zа-яА-Я]$)/;
      break;
    case 'email':
      regExpPrecept = /^[a-zA-Z0-9]([\w\.\-]{0,62})[a-zA-Z0-9]@[a-z0-9]([\w\.\-]{1,62})\.([a-z]{2,8})$/;
      break;
  }

  return regExpPrecept.test(inputValue);
}

export const controlInput = reactive({
  verifyValidity(data, validStatusVar) {
    for (const prop in data) {
      if (data[prop] === '') {
        validStatusVar.pushError(prop, `empty-${prop}`)

      } else if (!isValid(prop, data[prop])) {
        validStatusVar.pushError(prop, `invalid-${prop}`)
      }
    }
    if (validStatusVar.errorsArr.length !== 0) validStatusVar.set('rejected')
  },

  assignClass(inputTypeStr, inputValue, validStatusVar) {
    let isError = validStatusVar.errors[inputTypeStr].length > 0;

    return {
      'input--rejected': isError,
      'input--empty': inputValue === '' && !isError,
      'input--filled': inputValue !== '' && !isError
    }
  },

  manageKeydown(inputTypeStr) {
    let regExpLetters;

    switch(inputTypeStr) {
      case 'name':
        regExpLetters = /[a-zA-Zа-яА-Я\s\'\-\.]/;
        break;
      case 'email':
        regExpLetters = /[\w\-\.\@]/;
        break;
    }

    if (!event.key.match(regExpLetters)
    && event.code !== "ArrowRight" && event.code !== "ArrowLeft"
    && event.code !== "Backspace" && event.code !== "Delete")
      event.preventDefault();
  }
})
