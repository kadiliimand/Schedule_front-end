
<template>
  <div>
    <h1>Create schedule</h1>
    Name: <input v-model="name" required><br>
    <datepicker v-model="date" required></datepicker>
    Schedule start time: <input v-model="startTime" placeholder="format 00:00" required>
    Schedule end time: <input v-model="endTime" placeholder="format 00:00" required>
    <button v-on:click="saveInHtml()">Save shift</button><br>
    <table border="1">
      <tr>
        <th>Shift id</th>
        <th>Id number</th>
        <th>Name</th>
        <th>Date</th>
        <th>Shift start time</th>
        <th>Shift end time</th>
        <th>Worked time</th>

      </tr>
      <tr v-for="row in schedule">
        <td>{{ row.id }}</td>
        <td>{{ row.idNumber }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.date }}</td>
        <td>{{ row.startTime }}</td>
        <td>{{ row.endTime }}</td>
        <td>{{ row.workedTime }}</td>

      </tr>
    </table>
    {{schedule}}
  </div>
</template>
<script>
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
      .then(response => this.answer = response.data)
      .catch(response => console.log(response))
}


let getData = function () {
  this.$http.get('http://localhost:8080/public/getScheduleData')
      .then(response => this.schedule = response.data)
      .catch(response => console.log(response))
}


export default {
  name: 'CreateSchedule',
  components: {Datepicker},
  data: function () {
    return {
      name: '',
      date: '',
      startTime: '',
      endTime: '',
      schedule: {},
      answer: 'Shift created!'
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
