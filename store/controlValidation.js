"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlValidationTable = exports.controlValidationForm = void 0;

var _vue = require("vue");

var controlValidation = {
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
  set: function set(newValue) {
    if ((newValue === '' || newValue === 'pending') && this.errorsArr.length !== 0) this.clearErrors('all');
    this.status = newValue;
  },
  get: function get() {
    return this.status;
  },
  isProcessed: function isProcessed() {
    return ['pending', 'fulfilled'].includes(this.get());
  },
  isError: function isError() {
    return ['network-error', 'fatal-error', 'rejected'].includes(this.status);
  },
  nullEndpointStatus: function nullEndpointStatus() {
    if (['network-error', 'fatal-error', 'rejected', 'fulfilled'].includes(this.get())) this.set('');
  },
  pushError: function pushError(inputNameStr, errorNameStr) {
    this.errors[inputNameStr].push(errorNameStr);
    this.errorsArr.push(errorNameStr);
  },
  clearErrors: function clearErrors(input) {
    var _this = this;

    if (input === 'all') {
      for (var prop in this.errors) {
        this.errors[prop] = [];
      }

      this.errorsArr = [];
    } else {
      if (this.errors[input].length === 0) return;
      this.errors[input] = [];
      this.errorsArr = this.errorsArr.filter(function (error) {
        return !_this.errorTypes[input].includes(error);
      });
      if (this.errorsArr.length === 0) this.set('');
    }
  }
};
var controlValidationForm = (0, _vue.reactive)(Object.assign({}, controlValidation));
exports.controlValidationForm = controlValidationForm;
var controlValidationTable = (0, _vue.reactive)(Object.assign({}, controlValidation));
exports.controlValidationTable = controlValidationTable;