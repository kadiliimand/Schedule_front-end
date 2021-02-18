<template>
  <div>
    <v-col cols="10" sm="5">

      Choose start date: {{ date }}
      <v-date-picker v-model="dateFrom"></v-date-picker>
      Choose end date: {{ date }}
      <v-date-picker v-model="dateTo"></v-date-picker>
      <v-btn outlined id="dwn_btn" v-on:click="generateReport()">Generate report</v-btn>
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
        <tr v-for="row in report">
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

      <v-btn :href="link" target="_blank" download outlined>Export report to CSV</v-btn>

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
      .then(response => this.report = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
}
let exportToCsv = function () {
  this.$http.get(this.$host + '/public/testExportDataToCSV', {params: {dateFrom: this.dateFrom, dateTo: this.dateTo}})
      .then(response => this.reportData = response.data)
      .catch(error => this.answer = alert(error.response.data.message))
}

export default {
  name: "ExportData",
  components: {},
  data: function () {
    return {
      report: {},
      reportData: {},
      date: '',
      dateFrom: '',
      dateTo: ''
    }
  },

  methods: {
    generateReport: generateReport,
    exportToCsv: exportToCsv
  },
  computed:
      {
        link: function (){
//          this.$http.get(this.$host + '/public/testExportDataToCSV', {params: {dateFrom: this.dateFrom, dateTo: this.dateTo}})
//              .then(response => this.reportData = response.data)
//              .catch(error => this.answer = alert(error.response.data.message))
          return this.$host + '/public/testExportDataToCSV?dateFrom=' + this.dateFrom + "&dateTo=" + this.dateTo
        }
      }

}

</script>