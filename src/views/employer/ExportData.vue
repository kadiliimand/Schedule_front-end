<template>
  <div>
    Choose start date:
    <v-date-picker v-model="dateFrom"></v-date-picker>
    Choose end date:
    <v-date-picker v-model="dateTo"></v-date-picker>
    <button v-on:click="exportData()">Export data</button>

    <table border="1">
      <tr>
        <th>Id number</th>
        <th>Salary code</th>
        <th>Hourly pay</th>
        <th>Worked time</th>
        <th></th>
        <th>Department code</th>
      </tr>
      <tr v-for="row in answer">
        <td>{{ row.idNumber }}</td>
        <td>{{ row.salaryCode }}</td>
        <td>{{ row.hourlyPay }}</td>
        <td>{{ row.workedHours }}</td>
        <td></td>
        <td>{{ row.departmentCode }}</td>

      </tr>

    </table>
    <br><br><br><br>
    <v-btn to="/Employer" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

  </div>
</template>
<script>

let exportData = function () {
  this.$http.get('http://localhost:8080/public/exportData', {params: {dateFrom: this.dateFrom, dateTo: this.dateTo}})
      .then(response => this.answer = response.data)
      .catch(response => console.log(response))
}
export default {
  name: "ExportData",
  components: {},
  data: function () {
    return {
      answer: {}
    }
  },

  methods: {
    exportData: exportData
  },

  mounted() {
    this.exportData();
  }
}

</script>