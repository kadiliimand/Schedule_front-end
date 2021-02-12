<template>
  <div>
    Choose start date:
    <datepicker v-model="dateFrom"></datepicker>
    Choose end date:
    <datepicker v-model="dateTo"></datepicker>
    <button v-on:click="getData()">Get schedule</button>

    <table border="3">
      <tr>
        <th>Date</th>
      <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <table border="2">
            <th v-for="row in schedule">Employee</th>
          <tr>
            <td>{{ row.idNumber }}>
              <table border="1">
                  <th v-for="row in schedule">Shift start time</th>
                  <th v-for="row in schedule">Shift end time</th>
                <tr >
                  <td>{{ row.startTime }}</td>
                  <td>{{ row.endTime }}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </tr>
    </table>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

let getData = function () {
  this.$http.get('http://localhost:8080/public/getAllEmployeesScheduleData', {
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
  components: {Datepicker},
  data: function () {
    return {
      dateFrom: new Date(),
      dateTo: new Date(),
      schedule: ''
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

<style scoped></style>