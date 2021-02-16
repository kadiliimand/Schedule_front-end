<template>
  <div>
    <v-col cols="10" sm="5">
    <v-btn v-on:click="getData" outlined>Get Employee Data</v-btn>
      <br><br><br><br>
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Id number</th>
        <th>Department code</th>
        <th>Hourly pay</th>
        <th>Salary code</th>

      </tr>
      <tr v-for="row in employee">
        <td>{{row.id}}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.idNumber }}</td>
        <td>{{ row.departmentCode }}</td>
        <td>{{ row.hourlyPay }}</td>
        <td>{{ row.salaryCode }}</td>
      </tr>
    </table>
    </v-col>
    <br><br><br><br>
    <v-btn to="/Employer" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

  </div>
</template>

<script>
let getData = function () {
  this.$http.get(this.$host +'/public/getAllEmployeesData')
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

  // mounted() {
  //   this.getData();
  // }
}

</script>

<style scoped>

</style>