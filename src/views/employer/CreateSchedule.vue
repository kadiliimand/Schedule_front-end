<template>
  <div>
    <h1>Create schedule</h1>
    Name: <input v-model="name">
    Date: <input v-model="date">
    Schedule start time: <input v-model="startTime" placeholder="format 00:00">
    Schedule end time: <input v-model="endTime" placeholder="format 00:00">
    <button v-on:click="saveInHtml()">Save shift</button>

    <table border="1">
      <tr>
        <th>Schedule</th>
      <tr v-for="row in employees">
        <td>{{ row.name }}</td>
        <td>Date</td>
        <td>
          <table border="1">
            <tr>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
            </tr>
            <tr v-for="scheduleRow in row.employeeList">
              <td>{{ scheduleRow.date }}</td>
              <td>{{ scheduleRow.startTime }}</td>
              <td>{{ scheduleRow.endTime }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
let getData = function () {
  this.$http.get('http://localhost:8080/employee')
      .then(response => this.employees = response.data)
      .catch(response => console.log(response))
}

let saveInJs = function () {
  this.$http.post('http://localhost:8080/createSchedule', {}, {params: {date: this.date, startTime: this.startTime, endTime: this.endTime}})
}

export default {
  name: 'CreateSchedule',
  components: {},
  data: function () {
    return {
      employee: {},
      employees: []
    }
  },
  methods: {
    saveInHtml: saveInJs,
    getData: getData
  },
  mounted() {
    this.getData();
  }
}
</script>
