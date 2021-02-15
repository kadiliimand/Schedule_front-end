<template>
  <div>
    <div>
      <v-col cols="10" sm="5">
        <h1>Get Schedule data</h1>
        <br><br>
        <v-date-picker v-model="dateFrom" required></v-date-picker>
        <v-date-picker v-model="dateTo" required></v-date-picker>
        <v-btn v-on:click="getData()" outlined>Get Schedule Data</v-btn>
        <br><br>
        <table border="1">
          <tr>
            <th>Shift id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Shift start time</th>
            <th>Shift end time</th>
            <th>Worked time</th>
            <th>Salary code</th>
          </tr>
          <tr v-for="row in schedule">
            <td>{{ row.whId }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.date }}</td>
            <td>{{ row.startTime }}</td>
            <td>{{ row.endTime }}</td>
            <td>{{ row.workedHours }}</td>
            <td>{{ row.salaryCode }}</td>
          </tr>
        </table>
        <br><br>
        <h1>Create shift</h1>
        <br><br>

        <v-text-field v-model="name" label="Employee name" outlined required></v-text-field>
        <br>
        Choose shift date: {{ date }}
        <v-date-picker v-model="date" required></v-date-picker>
        <br>
        <v-text-field v-model="startTime" label="Shift start time" placeholder="format 00:00" outlined
                      required></v-text-field>
        <br>
        <v-text-field v-model="endTime" label="Shift end time" placeholder="format 00:00" outlined
                      required></v-text-field>
        <br>
        <v-text-field v-model="salaryCode" label="Salary code" outlined required></v-text-field>
        <br>

        <v-btn v-on:click="createShift()">Save shift</v-btn>
        <br>
        <br>
        <br>

        <h1>Change shift</h1>
        <br><br>

        <v-text-field v-model="id" label="Shift id" outlined required></v-text-field>
        <br>
        <v-text-field v-model="name" label="Employee name" outlined required></v-text-field>
        <br>
        Choose shift date: {{ date }}
        <v-date-picker v-model="date" required></v-date-picker>
        <br>
        <v-text-field v-model="startTime" label="New shift start time" placeholder="format 00:00" outlined
                      required></v-text-field>
        <br>
        <v-text-field v-model="endTime" label="New shift end time" placeholder="format 00:00" outlined
                      required></v-text-field>
        <br>
        <v-text-field v-model="salaryCode" label="Salary code" outlined required></v-text-field>
        <br>

        <v-btn v-on:click="changeShift()">Change shift</v-btn>
        <br><br><br>

        <h1>Delete shift</h1>
        <br><br>

        <v-text-field v-model="id" label="Shift id" outlined required></v-text-field>
        <br>

        <v-btn v-on:click="deleteShift()">Delete shift</v-btn>
      </v-col>
      <br><br><br><br>
      <v-btn to="/Employer" outlined>Back</v-btn>
      <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>
    </div>
  </div>
</template>
<script>
let getData = function () {
  this.$http.get('http://localhost:8080/public/getAllEmployeesScheduleDataWithNames', {
    params: {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }
  })
      .then(response => this.schedule = response.data)
      .catch(response => console.log(response))
}

let createShift = function () {
  this.$http.post('http://localhost:8080/public/createSchedule', {}, {
    params: {
      name: this.name,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      salaryCode: this.salaryCode

    }
  })
      .then(response => this.created = response.data)
      .catch(response => console.log(response))
}


let changeShift = function () {
  this.$http.put('http://localhost:8080/public/changeScheduleRow', {}, {
    params: {
      id: this.id,
      name: this.name,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      salaryCode: this.salaryCode,
      answer: 'Shift changed'
    }
  })
      .then(response => this.changed = response.data)
      .catch(response => console.log(response))
}

let deleteShift = function () {
  this.$http.delete('http://localhost:8080/public/deleteEmployeeScheduleRow', {
    params: {
      whId: this.whId
    }
  })
      .then(response => this.deleted = response.data)
      .catch(response => console.log(response))
}

export default {
  name: 'CreateSchedule',
  components: {},
  data: function () {
    return {
      created: 'Shift created',
      changed: 'Shift changed',
      deleted: 'Shift deleted',
      schedule: {}
    }
  },

  methods: {
    createShift: createShift,
    changeShift: changeShift,
    deleteShift: deleteShift,
    getData: getData
  },
  mounted() {
    this.getData();
  }
}
</script>
<style scoped></style>