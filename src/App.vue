<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/Employee">Employee</router-link> |
      <router-link to="/employee/MySchedule">My Schedule</router-link> |
      <router-link to="/employee/TeamSchedule">Team Schedule</router-link> |
      <router-link to="/Employer">Employer</router-link> |
      <router-link to="/Employer/CreateEmployee">Create Employee</router-link> |
      <router-link to="/Employer/GetEmployees">Get Employees</router-link> |
      <router-link to="/Employer/CreateSchedule">Create Schedule</router-link> |
      <router-link to="/Employer/GetSchedule">Get Schedule</router-link> |
      <router-link to="/Employer/ExportData">Export Data</router-link> |
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
</style>