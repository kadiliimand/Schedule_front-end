<template>
  <div>
    <div>
      <v-col cols="10" sm="5">
        <br><br>
        <h1>Create shift</h1>
        <br><br>

        <v-text-field v-model="name" label="Employee name" outlined required></v-text-field>
        <br>
        Choose shift date: {{date}}
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

        <v-text-field v-model="updateId" label="Shift id" outlined required></v-text-field>
        <br>
        <v-text-field v-model="updateName" label="Employee name" outlined required></v-text-field>
        <br>
        Choose shift date: {{ date }}
        <v-date-picker v-model="updateDate" required></v-date-picker>
        <br>
        <v-text-field v-model="updateStartTime" label="New shift start time" placeholder="format 00:00" outlined
                      required></v-text-field>
        <br>
        <v-text-field v-model="updateEndTime" label="New shift end time" placeholder="format 00:00" outlined
                      required></v-text-field>
        <br>
        <v-text-field v-model="updateSalaryCode" label="Salary code" outlined required></v-text-field>
        <br>

        <v-btn v-on:click="changeShift()">Change shift</v-btn>
        <br><br><br>

        <h1>Delete shift</h1>
        <br><br>

        <v-text-field v-model="deleteId" label="Shift id" outlined required></v-text-field>
        <br>

        <v-btn v-on:click="deleteShift()">Delete shift</v-btn>

      </v-col>
      <br><br><br><br>
      <v-btn to="/Employer" outlined>Back</v-btn>
      <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>
    </div>
    <br><br><br><br>

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
      .then(response => this.created = alert(response.data))
      .catch(error => this.answer = alert(error.response.data.message))
}


let changeShift = function () {
  this.$http.put(this.$host +'/public/changeScheduleRow', {}, {
    params: {
      updateId: this.updateId,
      updateName: this.updateName,
      updateDate: this.updateDate,
      updateStartTime: this.updateStartTime,
      updateEndTime: this.updateEndTime,
      updateSalaryCode: this.updateSalaryCode,
      answer: 'Shift changed'
    }
  })
      .then(response => this.changed = alert(response.data))
      .catch(error => this.answer = alert(error.response.data.message))
}

let deleteShift = function () {
  this.$http.delete(this.$host +'/public/deleteEmployeeScheduleRow', {
    params: {
      deleteId: this.deleteId
    }
  })
      .then(response => this.deleted = alert(response.data))
      .catch(error => this.answer = alert(error.response.data.message))
}

export default {
  name: 'CreateSchedule',
  components: {},
  data: function () {
    return {
      created: '',
      changed: '',
      deleted: '',
      schedule: {},
      name: '',
      date: '',
      startTime: '',
      endTime: '',
      salaryCode: '',
      id: '',
      updateId: '',
      updateName: '',
      updateDate: '',
      updateStartTime: '',
      updateEndTime: '',
      updateSalaryCode: '',
      deleteId: ''
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