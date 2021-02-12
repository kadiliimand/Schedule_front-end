<template>
  <div>
    Choose start date:
    <v-date-picker v-model="dateFrom"></v-date-picker>
    Choose end date:
    <v-date-picker v-model="dateTo"></v-date-picker>
    <button v-on:click="getNames()">Get schedule</button>
    <table border="1">
      <tr>
        <th>Date</th>
        <th colspan="2">Katrin Kutti</th>
        <th colspan="2">Kadi Liimand</th>
        <th colspan="2">Gunnar Mäemets</th>
        <th colspan="2">Teine Nimi</th>


      </tr>
      <tr>
        <td rowspan="2">01.01.2021</td>
        <td>Shift start Time</td>
        <td>Shift end time</td>
        <td>Shift start Time</td>
        <td>Shift end time</td>
        <td>Shift start Time</td>
        <td>Shift end time</td>
        <td>Shift start Time</td>
        <td>Shift end time</td>

      </tr>
      <tr>
        <td>10:00</td>
        <td>20:00</td>
        <td>09:00</td>
        <td>18:00</td>
      </tr>
    </table>
  </div>
</template>

<script>

let getNames = function () {
  this.$http.get('http://localhost:8080/public/getAllEmployeesNames')
      .then(response => this.employees = response.data)
      .catch(response => console.log(response))
}

let getShifts = function () {
  this.$http.get('http://localhost:8080/public/getScheduleDataWithNames', {
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
      employees: {},
      schedule: {}
    }
  },

  methods: {
    getNames: getNames,
    getShifts: getShifts
  },

  mounted() {
    this.getData();
  }
}

</script>

<style scoped></style>