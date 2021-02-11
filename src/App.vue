<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to ="/Employee">Employee</router-link> |
      <router-link to="/employee/MySchedule">My Schedule</router-link> |
      <router-link to="/employee/TeamSchedule">Team Schedule</router-link> |
      <router-link to="/Employer">Employer</router-link> |
      <router-link to="/employer/CreateEmployee">Create Employee</router-link> |
      <router-link to="/employer/CreateSchedule">Create Schedule</router-link> |
      <router-link to="/employer/ExportData">Export Data</router-link> |
      <router-link to="/employer/GetEmployees">Get Employees</router-link> |
      <router-link to="/employer/GetSchedule">Get Schedule</router-link> |
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "ExportData",

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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
