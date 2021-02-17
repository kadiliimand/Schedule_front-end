<template>
  <div>
    <v-col cols="10" sm="5">

      Choose start date: {{ dateFrom }}
      <v-date-picker v-model="dateFrom"></v-date-picker>
      Choose end date: {{ dateTo }}
      <v-date-picker v-model="dateTo"></v-date-picker>
      <v-btn v-on:click="getAllData()" outlined>Get schedule</v-btn>
      <br><br>
      <table border="1">
        <tr>
          <th rowspan="2">Date</th>
          <th v-for="row in schedule.names" colspan="2">{{ row }}</th>
        </tr>
        <tr>
          <template v-for="row in schedule.names">
            <td>start time</td>
            <td>end time</td>
          </template>

        <tr v-for="row in schedule.table">
          <td>{{row.date}}</td>
          <template v-for="row2 in row.employeeTimesList">
            <td>{{ row2.fromTime }}</td>
            <td>{{ row2.toTime }}</td>
          </template>
        </tr>
      </table>
      <br><br><br><br>
    </v-col>
    <v-btn to="/Employee" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>
    <br><br><br><br>

  </div>
</template>

<script>

let getAllData = function () {

  this.$http.get(this.$host +'/public/getAllEmployeeScheduleDataWithNamesReport', {
    params: {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }
  })
      .then(response => this.schedule = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
}

let logout = function () {
  localStorage.removeItem('user-token')


}
export default {
  name: "GetSchedule",
  components: {},
  data: function () {
    return {
      dateFrom: '',
      dateTo: '',
      schedule: {}

    }
  },

  methods: {
    getAllData: getAllData,
    logout: logout
  },

}
</script>
<style scoped>

</style>