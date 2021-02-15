<template>
  <div>
    <v-col cols="10" sm="5">
      Choose start date:
      <v-date-picker v-model="dateFrom" outlined></v-date-picker>
      Choose end date:
      <v-date-picker v-model="dateTo"></v-date-picker>
    </v-col>
    <v-btn v-on:click="getData()" outlined>Get team schedule</v-btn>
    <table border="2">
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
    <br><br><br><br>
    <v-btn to="/Employee" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

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
let logout = function () {
  localStorage.removeItem('user-token')
}

export default {
  name: "GetTeamSchedule",
  components: {},
  data: function () {
    return {
      dateFrom: '',
      dateTo: '',
      schedule: {}
    }
  },

  methods: {
    getData: getData,
    logout: logout
  },

  mounted() {
    this.getData();
  }
}

</script>

<style scoped>

</style>