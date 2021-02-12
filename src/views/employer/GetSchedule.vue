<template>
  <div>
    Choose start date:
    <v-date-picker v-model="dateFrom"></v-date-picker>
    Choose end date:
    <v-date-picker v-model="dateTo"></v-date-picker>
    <button v-on:click="getNames()">Get schedule</button>
    <v-card>
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="shifts" :search="search"></v-data-table>
    </v-card>
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
      schedule: {},
      search: '',
      headers: [{text: date, value: "date"}, {text: name, value: {employees}}],
      shifts: [{text: 'Shift start', value: "startTime"}, {text: 'Shift end', value: "endTime"}]
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