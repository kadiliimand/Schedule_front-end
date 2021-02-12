<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link>
      <router-link v-show="token">Employee</router-link>
      <router-link v-show="token">My Schedule</router-link>
      <router-link v-show="token">Team Schedule</router-link>
      <router-link v-show="token">Employer</router-link>
      <router-link v-show="token">Create Employee</router-link>
      <router-link v-show="token">Get Employees</router-link>
      <router-link v-show="token">Create Schedule</router-link>
      <router-link v-show="token">Get Schedule</router-link>
      <router-link v-show="token">Export Data</router-link>

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
  position: center;
}

#nav {
  padding: 30px;
  position: center;
}

#nav h1 {
  font-weight: bold;
  color: #2c3e50;
  position: center;
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
