<template>
  <div>
    Choose start date:
    <v-date-picker v-model="dateFrom"></v-date-picker>
    Choose end date:
    <v-date-picker v-model="dateTo"></v-date-picker>
    <button v-on:click="getData()">Get schedule</button>
    <v-card1-->
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
    </v-card1-->
  </div>
</template>

<script>

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
  components: {},
  data: function () {
    return {
      search: '',
      headers: [{text: 'Date', value: "date"}, {text: 'Name', value: "name"}],
      shifts: [{text: 'Shift start', value: "startTime"}, {text: 'Shift end', value: "endTime"}]
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