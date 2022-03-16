<template>
  <div id="data-table" class="data-table-container">
    <table class="table">
      <thead class="table__head">
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="data in dataCollection" :key="data.id">
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'data-table',
    props: {
      dataCollection: Array,
    },
  }
</script>

<style scoped  lang="scss">
  .table {
    width: 100%;
    border-collapse: collapse;

    &__head {
      background-color: PowderBlue;

      & th {padding: 10px 10px 5px;}
      & tr {border-bottom: 3px ridge SteelBlue;}
    }

    &__body {
      background-color: LightCyan;

      & td {padding: 10px 10px 2px;}
      & tr {border-bottom: 2px solid SteelBlue;}
    }
  }
</style>
