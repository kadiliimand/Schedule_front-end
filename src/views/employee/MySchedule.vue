<template>
<div id="mySchedule">
  <div id="center">
    <h1>My schedule</h1>
    <br><br>
    Insert name:<br><input v-model="name"><br>
    Choose start date:
    <datepicker v-model="dateFrom"></datepicker>
    Choose end date:
    <datepicker v-model="dateTo"></datepicker>
    <br>
    <button v-on:click="getData()">Get schedule</button>
    <br><br>


  <table border="2">
    <tr>

      <th>Date</th>
      <th>Shift start</th>
      <th>Shift end</th>
      <th>Worked time</th>
      <!--        <th>Overtime <input v-model="overtime" placeholder="overtime"></th>-->
      <!--        <button v-on:click="getData()">Submit overtime!</button>-->

    </tr>
    <tr v-for="row in schedule">
      <td>{{ row.date }}</td>
      <td>{{ row.startTime }}</td>
      <td>{{ row.endTime }}</td>
      <td>{{ row.workedTime }}</td>

    </tr>
  </table>
  </div>
</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';

let getData = function () {
  this.$http.get('http://localhost:8080/public/getEmployeeScheduleData', {
    params: {
      name: this.name,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    }
  })
      .then(response => this.schedule = response.data)
      .catch(error => this.schedule = error.response.data.message);
}

export default {
  name: 'MySchedule',
  components: {Datepicker},
  data: function () {
    return {
      name: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      schedule: {}
    }
  },

  methods: {
    getData: getData,
  },
  mounted() {
    this.getData();
  }
}
</script>
<style scoped>
</style>
