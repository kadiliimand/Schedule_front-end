<template>
  <div>
    <div>
      <v-col cols="10" sm="5">
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

let createShift = function () {
  this.$http.post(this.$host +'/public/createSchedule', {}, {
    params: {
      name: this.name,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      salaryCode: this.salaryCode

    }
  })
      .then(response => this.created = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
}


let changeShift = function () {
  this.$http.put(this.$host +'/public/changeScheduleRow', {}, {
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
      .catch(error => this.answer = alert(error.response.data.message))
}

let deleteShift = function () {
  this.$http.delete(this.$host +'/public/deleteEmployeeScheduleRow', {
    params: {
      id: this.id
    }
  })
      .then(response => this.deleted = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
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
  },
  // mounted() {
  //   this.getData();
  // }
}
</script>
<style scoped></style>