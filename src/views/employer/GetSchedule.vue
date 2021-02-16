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
          <th>Date</th>
          <th v-for="row in names" colspan="2">{{ row.name }}</th>
        <tr v-for="row in schedule">
          <td>{{ row.date }}</td>
          <td>{{ row.startTime }}</td>
          <td>{{ row.endTime }}</td>
        </tr>
      </table>
      <br><br><br><br>
    </v-col>
    <v-btn to="/Employer" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

  </div>
</template>

<script>

let getAllData = function () {
  this.$http.get(this.$host +'/public/getAllEmployeesNames')
      .then(response => this.names = response.data)
      .catch(response => console.log(response))

  this.$http.get(this.$host +'/public/getAllEmployeesScheduleDataWithNames', {
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
  name: "GetSchedule",
  components: {},
  data: function () {
    return {
      dateFrom: '',
      dateTo: '',
      names: {},
      schedule: {}
    }
  },

  methods: {
    getAllData: getAllData,
    logout: logout
  },

}

</script>

<style scoped></style>