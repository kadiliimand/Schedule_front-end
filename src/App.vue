<template>
  <div id="app">
    <div id="nav">
      <v-btn to="/Login" outlined>Login</v-btn> |
      <v-btn to="/Employee" outlined>Employee</v-btn> |
      <v-btn to="/employee/MySchedule" outlined>My Schedule</v-btn> |
      <v-btn to="/employee/TeamSchedule" outlined>Team Schedule</v-btn> |
      <v-btn to="/Employer" outlined>Employer</v-btn> |
      <v-btn to="/Employer/CreateEmployee" outlined>Create Employee</v-btn> |
      <v-btn to="/Employer/CreateSchedule" outlined>Create Schedule</v-btn> |
      <v-btn to="/Employer/GetEmployees" outlined>Get Employees</v-btn> |
      <v-btn to="/Employer/GetSchedule" outlined>Get Schedule</v-btn> |
      <v-btn to="/Employer/ExportData" outlined>Export Data</v-btn> |
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function () {
    return{
      token: localStorage.getItem('user-token')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: center;
  border: black;
  text-border-style: outset;
  border: black;
  outline: black;
}
#nav {
  padding: 30px;
  position: center;
  border: black;
}
#nav h1 {
  font-weight: bold;
  color: #2c3e50;
  position: center;
  border: black;
}
#nav router-link-exact-active {
  color: #2c3e50;
}
#nav table{
  position: center;
}
h1{
  color: darkgreen;
  text-align: center;
  position: center;
}
table{
  width: auto;
}


</style>