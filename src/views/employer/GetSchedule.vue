<template>
  <div>      <v-col cols="10" sm="5">

  Choose start date:
    <v-date-picker v-model="dateFrom"></v-date-picker>
    Choose end date:
    <v-date-picker v-model="dateTo"></v-date-picker>
    <v-btn v-on:click="getShifts()" outlined>Get schedule</v-btn>
    <br><br>
    <table border="1">
      <tr>
        <th>Date</th>
        <th v-for="row in schedule" colspan="2">{{ row.name }}</th>
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

let getShifts = function () {
  this.$http.get('http://localhost:8080/public/getAllEmployeesScheduleDataWithNames', {
    params: {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }
  })
      .then(response => this.schedule = response.data)
      .catch(response => console.log(response))
}
export default {
  name: "GetSchedule",
  components: {},
  data: function () {
    return {
      schedule: {}
    }
  },

  methods: {
    getShifts: getShifts
  },

  mounted() {
    this.getData();
  }
}

</script>

<style scoped></style>