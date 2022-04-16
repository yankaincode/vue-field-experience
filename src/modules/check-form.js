import { validationStatus } from './../store/validationStatus.js'

"use strict";

export const isNameValid = inputValue => {
  let regExpName = /(^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я\s\'\-\.]{0,63})[a-zA-Zа-яА-Я]$)/;

  return regExpName.test(inputValue);
}

export const isEmailValid = inputValue => {
  let regExpEmail = /^[a-zA-Z0-9]([\w\.\-]{0,62})[a-zA-Z0-9]@[a-z0-9]([\w\.\-]{1,62})\.([a-z]{2,8})$/;

  return regExpEmail.test(inputValue);
}

export const controlKeydownName = () => {
  let regExpLetters = /[a-zA-Zа-яА-Я\s\'\-\.]/;

  if (!event.key.match(regExpLetters)
  && event.code !== "ArrowRight" && event.code !== "ArrowLeft"
  && event.code !== "Backspace" && event.code !== "Delete") {
    event.preventDefault();
    return;
  }
}

export const controlKeydownEmail = () => {
  let regExpLetters = /[\w\-\.\@]/;

  if (!event.key.match(regExpLetters)
  && event.code !== "ArrowRight" && event.code !== "ArrowLeft"
  && event.code !== "Backspace" && event.code !== "Delete") {
    event.preventDefault();
    return;
  }
}

export const handleInput = field => {
  if (field === 'name') {
    controlKeydownName();
  } else if (field === 'email') {
    controlKeydownEmail();
  }
}
