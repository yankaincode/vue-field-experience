"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlModeEdit = exports.controlModeDelete = void 0;

var _vue = require("vue");

var _controlValidation = require("./controlValidation.js");

var controlModeDelete = (0, _vue.reactive)({
  status: false,
  id: null,
  set: function set(isLaunched) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.status = isLaunched;
    this.id = id;
  },
  get: function get() {
    return this.status;
  }
});
exports.controlModeDelete = controlModeDelete;
var controlModeEdit = (0, _vue.reactive)({
  status: false,
  id: null,
  editingData: null,
  cachedData: null,
  set: function set(isLaunched) {
    var editingData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.status = isLaunched;
    this.editingData = editingData;

    if (isLaunched) {
      this.id = editingData.id;
      this.cachedData = Object.assign({}, editingData);

      _controlValidation.controlValidationForm.nullEndpointStatus();
    } else {
      this.id = null;
      this.cachedData = null;

      _controlValidation.controlValidationTable.nullEndpointStatus();
    }
  },
  get: function get() {
    return this.status;
  },
  cancelEdit: function cancelEdit() {
    Object.assign(this.editingData, this.cachedData);
    this.set(false);
  },
  determineUpdated: function determineUpdated() {
    var changedNum = 0;
    var changedObj = {};

    for (var prop in this.editingData) {
      if (this.editingData[prop] !== this.cachedData[prop]) {
        changedNum++;
        changedObj[prop] = this.editingData[prop];
      }
    } // As id property never changes: realCachedLength - 1,


    var cachedLength = Object.keys(this.cachedData).length - 1;
    return changedNum === 0 ? 'none' : changedNum === cachedLength ? 'all' : changedObj;
  }
});
exports.controlModeEdit = controlModeEdit;