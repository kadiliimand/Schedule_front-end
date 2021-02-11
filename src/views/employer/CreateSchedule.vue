
<template>
  <div>
    <h1>Create schedule</h1>
    Name: <input v-model="name" required><br>
    <datepicker v-model="date" required></datepicker>
    Schedule start time: <input v-model="startTime" placeholder="format 00:00" required>
    Schedule end time: <input v-model="endTime" placeholder="format 00:00" required>
    <button v-on:click="saveInHtml()">Save shift</button>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Shift start time</th>
        <th>Shift end time</th>

      </tr>
      <tr v-for="row in schedule">
        <td>{{ row.name }}</td>
        <td>{{ row.date }}</td>
        <td>{{ row.startTime }}</td>
        <td>{{ row.endTime }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
// let getData = function () {
//   this.$http.get('http://localhost:8080/public/getAllEmployeesNames', this.employee)
//       .then(response => this.response = response.data)
//       .catch(response => console.log(response))
// }
import Datepicker from 'vuejs-datepicker';
let saveInJs = function () {
  this.$http.post('http://localhost:8080/public/createSchedule', {}, {
    params: {
      name: this.name,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime
    }
  })
      .then(response => this.response = response.data)
      .catch(response => console.log(response))
}

export default {
  name: 'CreateSchedule',
  components: {Datepicker},
  data: function () {
    return {
      name: '',
      date: new Date(),
      startTime: '',
      endTime: '',
      schedule: {}
    }
  },

  methods: {
    saveInHtml: saveInJs,
  },
  mounted() {
    this.getData();
  }
}
</script>
