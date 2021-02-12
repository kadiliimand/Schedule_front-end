<template>
  <div>
    Choose start date:
    <datepicker v-model="dateFrom"></datepicker>
    Choose end date:
    <datepicker v-model="dateTo"></datepicker>
    <button v-on:click="getData()">Get schedule</button>

    <table border="1">
      <th>Date</th>
        <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <table border="1">
          <tr>
            <th>Employee</th>
          <tr v-for="row in schedule">
            <td>{{ row.name }}
              <table border="1">
                <tr>
                  <th>Shift start time</th>
                  <th>Shift end time</th>
                </tr>
                <tr v-for="row in schedule">
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