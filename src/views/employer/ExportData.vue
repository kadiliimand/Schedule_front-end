<template>
  <div>
    <v-col cols="10" sm="5">

      Choose start date: {{ date }}
      <v-date-picker v-model="dateFrom"></v-date-picker>
      Choose end date: {{ date }}
      <v-date-picker v-model="dateTo"></v-date-picker>
      <v-btn v-d v-on:click="generateReport()" outlined>Generate report</v-btn>
      <br><br>
      <table border="1">
        <tr>
          <th>Id number</th>
          <th></th>
          <th></th>
          <th>Salary code</th>
          <th>Hourly pay</th>
          <th>Worked time</th>
          <th></th>
          <th>Department code</th>
        </tr>
        <tr v-for="row in data">
          <td>{{ row.idNumber }}</td>
          <td></td>
          <td></td>
          <td>{{ row.salaryCode }}</td>
          <td>{{ row.hourlyPay }}</td>
          <td>{{ row.workedHours }}</td>
          <td></td>
          <td>{{ row.departmentCode }}</td>

        </tr>

      </table>
      <br><br>

      <v-btn v-d v-on:click="exportToCsv()" outlined>Export report to CSV</v-btn>
    </v-col>
    <br><br>
    <v-btn to="/Employer" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>
    <br><br><br><br>
  </div>
</template>
<script>

let generateReport = function () {
  this.$http.get(this.$host + '/public/exportData', {params: {dateFrom: this.dateFrom, dateTo: this.dateTo}})
      .then(response => this.data = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
}
let exportToCsv = function () {
  this.$http.get(this.$host + '/public/testExportDataToCSV', {params: {dateFrom: this.dateFrom, dateTo: this.dateTo}})
      .then(response => this.data = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
}

export default {
  name: "ExportData",
  components: {},
  data: function () {
    return {
      data: {},

    }
  },

  methods: {
    generateReport: generateReport,
    exportToCsv: exportToCsv
  },

}

</script>