<template>
  <div>
    <h1>My schedule</h1>
    Insert name:<input v-model="name"><br>
    Choose start date:<datepicker v-model="startDate"></datepicker>
    Choose end date:<datepicker v-model="endDate"></datepicker><br>
    <br><br>

    <table border="1">
      <tr>

        <th>Date</th>
        <th>Start time</th>
        <th>End time</th>
        <th>Worked time</th>
        <th>Overtime <input v-model="overtime" placeholder="overtime"></th>
        <button v-on:click="getData()">Submit overtime!</button>

      </tr>
      <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <td>{{ row.start_time }}</td>
        <td>{{ row.end_time }}</td>
        <td>{{ row.worked_time }}</td>

      </tr>
    </table>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';

let getData = function () {
  this.$http.get('http://localhost:8080/Katrin/mySchedule', {
    params: {
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      workedTime: this.workedTime,
      overtime: this.overtime
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
