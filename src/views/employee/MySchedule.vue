<template>
  <div>
    <v-col cols="10" sm="5">
      <br><br>
      <h1>My schedule</h1>
      <br><br>

      <v-text-field v-model="name" label="Insert name" outlined></v-text-field>
      Choose start date: {{ dateFrom }}
      <v-date-picker v-model="dateFrom"></v-date-picker>
      Choose end date: {{ dateTo }}
      <v-date-picker v-model="dateTo"></v-date-picker>

      <br>
      <v-btn v-on:click="getData()" outlined>Get schedule</v-btn>
      <br><br><br><br>

    </v-col>

    <table border="1">
      <tr>

        <th>Date</th>
        <th>Shift start</th>
        <th>Shift end</th>
        <th>Worked time</th>

      </tr>
      <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <td>{{ row.startTime }}</td>
        <td>{{ row.endTime }}</td>
        <td>{{ row.workedHours }}</td>

      </tr>
    </table>
    <br><br><br><br>
    <v-btn to="/Employee" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>
    <br><br><br><br>

  </div>

</template>
<script>

let getData = function () {
  this.$http.get(this.$host + '/public/getEmployeeScheduleData', {
    params: {
      name: this.name,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    }
  })
      .then(response => this.schedule = response.data)
      .catch(error => this.answer = alert(error.response.data.message));
}
let logout = function () {
  localStorage.removeItem('user-token')
}


export default {
  name: 'MySchedule',
  components: {},
  data: function () {
    return {
      name: '',
      dateFrom: '',
      dateTo: '',
      schedule: {},

    }
  },

  methods: {
    getData: getData,
    logout: logout
  },
  // mounted() {
  //   this.getData();
  // }
}
</script>
<style scoped>
</style>
