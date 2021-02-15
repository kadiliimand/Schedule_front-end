<template>
  <div>

    <v-btn to="/employer/createEmployee" outlined>Create Employee</v-btn>
    <br><br>
    <v-btn to="/employer/GetEmployees" outlined>Get Employees</v-btn>
    <br><br>
    <v-btn to="/employer/createSchedule" outlined>Create Schedule</v-btn>
    <br><br>
    <v-btn to="/employer/GetSchedule" outlined>Get Schedule</v-btn>
    <br><br>
    <v-btn to="/employer/exportData" outlined>Export Data</v-btn>
    <br><br><br><br><br><br><br>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

  </div>
</template>
<script>
let logout = function () {
  localStorage.removeItem('user-token')
}
export default {
  name: 'Logout',
  data: function () {
  },

  methods: {
    logout: logout

  }
}
</script>
<style scoped></style>