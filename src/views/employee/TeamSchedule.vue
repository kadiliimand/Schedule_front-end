<template>
  <div>
    Choose start date:
    <datepicker v-model="dateFrom"></datepicker>
    Choose end date:
    <datepicker v-model="dateTo"></datepicker>

    <button v-on:click="getData()">Get team schedule</button>
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
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

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
export default {
  name: "GetTeamSchedule",
  components: {Datepicker},
  data: function () {
    return {
      dateFrom: new Date(),
      dateTo: new Date(),
      schedule: {}
    }
  },

  methods: {
    getData: getData
  },

  mounted() {
    this.getData();
  }
}

</script>

<style scoped>

</style>