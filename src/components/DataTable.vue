<template>
  <table class="data-table">

    <Transition name="table-header" type="transition" mode="in-out">
      <caption v-if="dataCollection.length < 1" class="data-table__caption caption caption--bold-message">
        No data here. Add some new!
      </caption>
      <thead v-else class="data-table__thead thead">
        <tr class="thead__row row">
          <th class="thead__cell cell">Name</th>
          <th class="thead__cell cell">Email</th>
          <th class="thead__cell cell">Actions</th>
        </tr>
      </thead>
    </Transition>

    <TransitionGroup
      tag="tbody"
      name="row-activity"
      type="transition"
      :duration="{enter: 1100, leave: 500}"
      class="data-table__tbody tbody"
    >
      <tr
        v-for="data in dataCollection"
        :key="data.id"
        :class="['tbody__row', 'row', {'row--editing': controlModeEdit.id === data.id}]"
      >

        <td v-if="controlModeEdit.id === data.id" class="tbody__cell cell">
          <input
            ref="editFirst"
            type="text"
            maxlength="65"
            v-model.trim="data.name"
            :class="['tbody__input', 'input',
              controlInput.assignClass('name', data.name, controlValidationTable)
            ]"
            :disabled="controlValidationTable.isProcessed()"
            @focus="controlValidationTable.clearErrors('name')"
            @keydown="controlInput.manageKeydown('name')"
          />
        </td>
        <td
          v-else
          class="tbody__cell cell"
        >{{ data.name }}</td>

        <td v-if="controlModeEdit.id === data.id" class="tbody__cell cell">
          <input
            type="email"
            maxlength="138"
            v-model.trim="data.email"
            :class="['tbody__input', 'input',
              controlInput.assignClass('email', data.email, controlValidationTable)
            ]"
            :disabled="controlValidationTable.isProcessed()"
            @focus="controlValidationTable.clearErrors('email')"
            @keydown="controlInput.manageKeydown('email')"
          />
        </td>
        <td v-else class="tbody__cell cell">{{ data.email }}</td>

        <td class="tbody__cell cell">
          <Transition name="actions-activity" type="animation">
            <DataStatus
              v-if="(controlModeEdit.id === data.id || controlModeDelete.id === data.id)"
              class="status-window"
              :errors-arr="controlValidationTable.errorsArr"
              :validation-status="controlValidationTable.get()"
            />
          </Transition>
          <Transition name="actions-activity" mode="out-in" type="animation">
            <div v-if="!controlModeEdit.get()" class="cell__actions-container actions-container">
              <button
                @click="launchEdit(data)"
                :disabled="controlModeDelete.get() || controlValidationForm.isProcessed()"
                class="actions-container__action-button action-button button action-button--edit"
                aria-label="Edit data from this row"
              >Edit</button>
              <button
                @click="$emit('delete:data', data.id)"
                :disabled="(controlModeDelete.get() && controlModeDelete.id !== data.id)
                || controlValidationTable.isProcessed()
                || controlValidationForm.isProcessed()
                || controlValidationTable.isError()"
                class="actions-container__action-button action-button button action-button--delete"
                aria-label="Delete this row"
              >Delete</button>
            </div>
            <div v-else-if="controlModeEdit.id === data.id" class="cell__actions-container actions-container">
              <button
                @click="$emit('edit:data', data)"
                :disabled="controlValidationTable.isProcessed()"
                class="actions-container__action-button action-button button action-button--save"
                aria-label="Save changes"
              >Save</button>
              <button
                @click="controlModeEdit.cancelEdit()"
                :disabled="controlValidationTable.isProcessed()"
                class="actions-container__action-button action-button button action-button--cancel"
                aria-label="Cancel changes"
              >Cancel</button>
            </div>
            <div v-else class="cell__actions-container actions-container"></div>
          </Transition>
        </td>

      </tr>
    </TransitionGroup>

  </table>
</template>

<script>
  import DataStatus from './DataStatus.vue'

  import { controlValidationTable, controlValidationForm } from './../store/controlValidation.js'
  import { controlModeDelete, controlModeEdit } from './../store/controlMode.js'
  import { controlInput } from './../store/controlInput.js'

  export default {
    name: 'data-table',
    components: {
      DataStatus
    },
    props: {
      dataCollection: Array
    },
    emits: ['edit:data', 'delete:data'],
    data() {
      return {
        controlValidationTable,
        controlValidationForm,
        controlModeEdit,
        controlModeDelete,
        controlInput,
        scrollPositionY: null
      }
    },
    deactivated() {
      if (controlModeEdit.get()) controlModeEdit.cancelEdit()
    },
    methods: {
      launchEdit(data) {
        controlModeEdit.set(true, data)

        this.$nextTick(() => {
          this.$refs.editFirst[0].focus()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @forward './../modules/data-input.scss';

  @use './../modules/global-vars.scss' as *;

  %table-border-style {
    border-width: 0.1em 0.25em;
    border-style: inset;
  }

  .data-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-color: Teal;
    @extend %table-border-style;

    &__thead {background: linear-gradient(0, White, PeachPuff);}

    &__caption {
      min-height: 2.5em;
      padding: 0.6em;
      border-color: BlueViolet;
      background: linear-gradient(181deg, LightCyan, Cornsilk, Wheat);
      @extend %table-border-style;
    }
  }

  .caption--bold-message {font-weight: bold;}

  .cell {
    display: block;
    padding-right: 0.65em;
    padding-left: 0.65em;
  }

  .thead {
    &__row {border-bottom: 0.1em ridge SteelBlue;}
    &__cell {
      line-height: 2.8em;
      text-align: center;
      font-size: $majorFontSize + 0.1em;
    }
  }

  .tbody {
    &__row {
      border-bottom: 0.1em solid SteelBlue;
      transition: all 0.25s linear;

      &:last-child {border-bottom: unset;}

      &:nth-child(odd) {background-color: Azure;}
      &:nth-child(even) {background-color: LightCyan;}

      &:hover {background-color: rgba(238, 130, 238, 0.4);}
    }

    &__cell {
      padding-top: 0.5em;
      padding-bottom: 0.5em;

      &:last-child {padding-bottom: 0.5em;}
    }

    &__input {
      width: 100%;
      padding: 0.1em 0.35em;
      border-width: 0.2em;
      border-style: inset;
    }
  }

  .row--editing {background-color: SlateBlue !important;}

  .actions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    &__action-button {
      height: 1.8em;
      line-height: 1.8em;
      padding-right: 0.4em;
      padding-left: 0.4em;
    }
  }

  .action-button {
    border: 0.1em ridge RosyBrown;
    border-radius: 0.5em;

    &:hover {background-color: Beige;}

    &--edit {background-color: Wheat;}
    &--delete {background-color: BurlyWood;}

    &--save {background-color: PaleGreen;}
    &--cancel {background-color: LightPink;}
  }

  .status-window {
    margin-bottom: 0.65em;
    padding: 0.5em 0.95em 0.2em;
    border: 0.15em groove SlateBlue;
    border-radius: 0.95em;
    line-height: 1;
    font-size: $majorFontSize - 0.1em;
    background: White;

    &:before {margin-bottom: 0.35em;}
  }

  @media screen and (min-width: 500px) {
    .cell {
      &:last-child {display: table-cell;}
    }

    .thead__cell {
      width: 60%;
      text-align: left;

      &:last-child {
        width: 40%;
        padding-right: 5%;
        text-align: right;
      }
    }

    .tbody{
      &__input {
        width: 100%;
        padding-right: 0.65em;
      }
    }

    .actions-container {
      padding-right: 5%;
      justify-content: flex-end;
    }

    .status-window {
      margin-bottom: 0.4em;
      border-bottom-right-radius: 0;
    }

    .row--editing {
      & .cell {
        padding-right: 0.2em;
        padding-left: 0.2em;

        &:last-child  {
          padding-right: 0.65em;
          padding-left: 0.65em;
        }
      }
    }
  }

  @media screen and (min-width: 700px) {
    .cell {display: table-cell;}

    .thead {
      &__cell {
        padding-top: 0.3em;

        &:last-child {padding-right: 4%;}
      }
    }

    .tbody__input {width: 100%;}
  }

  @media screen and (min-width: 1500px) {
    .thead {
      &__cell {width: 45%;}
      &:last-child {width: 10%;}
    }
  }

  @media print {
    .data-table {margin-bottom: 55px;}

    .cell {
      display: table-cell;
      text-align: left;
    }

    .cell:last-child {display: none;}
  }

  /*------------------ Animations ------------------*/
  //--------- table-header
  .table-header {
      &-enter,
      &-leave {
        &-active {transition: all 1s linear;}
      }

      &-enter-from,
      &-leave-to {
        opacity: 0;
        font-size: 0em;
      }

      &-enter-to,
      &-leave-from {
        opacity: 0.8;
      }
    }

  //--------- row-activity
  .row-activity {
    &-enter-from,
    &-leave-to {
      opacity: 0;
    }

    &-enter-from {
      font-size: 0em;
      transform: translateY(-200px) rotate(80deg) scaleX(0.1);
    }
    &-enter-active {
      background: linear-gradient(
        90deg,
        Violet, PeachPuff, SpringGreen
      ) !important;
      opacity: 0.5;
      transition: transform 1.1s ease-out;
    }
    &-enter-to {opacity: 0.9;}

    &-leave-active {
      background-color: SlateBlue !important;
      transform: scaleY(0.1);
      transition: all 0.5s ease;
    }
  }

  //--------- actions-activity
  .actions-activity {
    &-enter-active {
      -webkit-animation: toggle-on-x 0.4s;
      animation: toggle-on-x 0.4s;
    }
    &-leave-active {
      -webkit-animation: toggle-on-x 0.4s reverse;
      animation: toggle-on-x 0.4s reverse;
    }
  }

  @-webkit-keyframes toggle-on-x {
    0% {transform: translateX(-1.1em);}
    100% {transform: translateX(0);}
  }

  @keyframes toggle-on-x {
    0% {transform: translateX(-1.1em);}
    100% {transform: translateX(0);}
  }
</style>
