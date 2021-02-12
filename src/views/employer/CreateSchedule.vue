<template>
  <div>
    <div>
      <h1>Create shift</h1>
      Name: <input v-model="name" required><br>
      Choose shift date:
      <v-date-picker v-model="date" required></v-date-picker>
      <br>
      Schedule start time: <input v-model="startTime" placeholder="format 00:00" required><br>
      Schedule end time: <input v-model="endTime" placeholder="format 00:00" required><br>
      <button v-on:click="saveInHtml()">Save shift</button>
      <br>
      <br>

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
          <td>{{ row.whId }}</td>
          <td>{{ row.idNumber }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.date }}</td>
          <td>{{ row.startTime }}</td>
          <td>{{ row.endTime }}</td>
          <td>{{ row.workedHours }}</td>
        </tr>
      </table>

      <h1>Change shift</h1>
      Shift id: <input v-model="id" required><br>
      Name: <input v-model="name" required><br>
      Choose shift date:
      <datepicker v-model="date" required></datepicker>
      <br>
      Schedule start time: <input v-model="startTime" placeholder="format 00:00" required><br>
      Schedule end time: <input v-model="endTime" placeholder="format 00:00" required><br>
      <button v-on:click="saveInHtml()">Change shift</button>
      <br>

      <h1>Delete shift</h1>
      Shift id: <input v-model="id" required><br>
      <button v-on:click="saveInHtml()">Delete shift</button>
      <br>

    </div>
  </div>
</template>
<script>

let createShift = function () {
  this.$http.post('http://localhost:8080/public/createSchedule', {}, {
    params: {
      name: this.name,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,

    }
  })
      .then(response => this.answer = response.data)
      .catch(response => console.log(response))
}

let getData = function () {
  this.$http.get('http://localhost:8080/public/getScheduleDataWithNames')
      .then(response => this.schedule = response.data)
      .catch(response => console.log(response))
}
let changeShift = function () {
  this.$http.post('http://localhost:8080/public/changeScheduleRow', {}, {
    params: {
      id: this.id,
      name: this.name,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      answer: 'Shift changed'
    }
  })
      .then(response => this.answer = response.data)
      .catch(response => console.log(response))
}

let deleteShift = function () {
  this.$http.post('http://localhost:8080/public/deleteEmployeeScheduleRow', {}, {
    params: {
      id: this.id
    }
  })
      .then(response => this.answer = response.data)
      .catch(response => console.log(response))
}

export default {
  name: 'CreateSchedule',
  components: {},
  data: function () {
    return {
      answer: 'Shift created',
      changed: 'Shift changed',
      deleted: 'Shift deleted',
      schedule: {}
    }
  },

  methods: {
    saveInHtml: createShift,
    getData: getData,
    changeShift: changeShift,
    deleteShift: deleteShift
  },
  mounted() {
    this.getData();
  }
}
</script>
<style scoped></style>