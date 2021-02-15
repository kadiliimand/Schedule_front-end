<template>
  <div>
    <div>
      <v-col cols="10" sm="5">
      <h1>Create shift</h1>
<br><br>

        <v-text-field label="name" outlined required></v-text-field>
        <br>
        Choose shift date:
        <v-date-picker v-model="date" outlined required></v-date-picker>
        <br>
        <v-text-field label="startTime" placeholder="format 00:00" outlined required></v-text-field>
        <br>
        <v-text-field label="endTime" placeholder="format 00:00" outlined required></v-text-field>
        <br>
      <v-btn v-on:click="saveInHtml()">Save shift</v-btn>
      <br>
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
<br><br>
      <h1>Change shift</h1>
<br><br>

        <v-text-field label="id" outlined required></v-text-field>
        <br>
        <v-text-field label="name" outlined required></v-text-field>
        <br>
        Choose shift date: {{ date }}
        <v-date-picker v-model="date" required></v-date-picker>
        <br>
        <v-text-field label="startTime" placeholder="format 00:00" outlined required></v-text-field>
        <br>
        <v-text-field label="endTime" placeholder="format 00:00" outlined required></v-text-field>
        <br>
      <v-btn v-on:click="saveInHtml()">Change shift</v-btn>
      <br><br><br>

      <h1>Delete shift</h1>


        <v-text-field label="id" outlined required></v-text-field>
        <br>

      <v-btn v-on:click="saveInHtml()">Delete shift</v-btn>
      </v-col>
      <br><br><br><br>
      <v-btn to="/Employer" outlined>Back</v-btn>
      <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>
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
    changeShift: changeShift,
    deleteShift: deleteShift
  },
  mounted() {
    this.getData();
  }
}
</script>
<style scoped></style>