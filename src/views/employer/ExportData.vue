<template>
  <div>
    Choose start date: <v-date-picker v-model="dateFrom"></v-date-picker>
    Choose end date: <v-date-picker v-model="dateTo"></v-date-picker>

    <button v-on:click="exportData()">Export data</button>
  </div>
</template>
<script>

let exportData = function (){
  this.$http.get('http://localhost:8080/public/exportData', {params: {dateFrom: this.dateFrom, dateTo: this.dateTo}})
  .then(response => this.export = response.data)
  .catch(response => console.log(response))
}
export default {
  name: "ExportData",
  components: {},
  data: function () {
    return {
      export: {}
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