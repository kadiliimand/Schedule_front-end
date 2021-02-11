<template>
  <div>
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Id number</th>
        <th>Department code</th>
        <th>Hourly pay</th>
        <th>Salary code</th>
        <th>password</th>

      </tr>
      <tr v-for="row in employee">
        <td>{{row.id}}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.idNumber }}</td>
        <td>{{ row.departmentCode }}</td>
        <td>{{ row.hourlyPay }}</td>
        <td>{{ row.salaryCode }}</td>
        <td>{{ row.password }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/public/getAllEmployeesData')
      .then(response => this.employee = response.data)
      .catch(response => console.log(response))
}
export default {
  name: "GetEmployees",
  components: {},
  data: function () {
    return {
      employee: {}
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

<style scoped>

</style>