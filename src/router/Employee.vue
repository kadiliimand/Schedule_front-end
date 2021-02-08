<template>
  <div>
    <h1>My schedule</h1>
    <table border="1">
      <tr>
        <th>Date</th>
        <th>Start time</th>
        <th>End time</th>
        <th>Worked time</th>
        <th>Overtime <input v-model="overtime" placeholder="overtime"></th>
        <button v-on:click="saveInHtml()">Submit overtime!</button>

      </tr>
      <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <td>{{ row.start_time }}</td>
        <td>{{ row.end_time }}</td>
        <td>{{ row.worked_time }}</td>

      </tr>
    </table>
    <h1>Team schedule</h1>
    <table border="1">
      <th>Date</th>
      <th>Employee name</th>
      <tr v-for="column in employee">
        <td>{{ column.name }}</td>
      <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <td>{{ row.start_time }}</td>
        <td>{{ row.end_time }}</td>
        <td>{{ row.worked_time }}</td>

      </tr>
    </table>

  </div>

</template>
