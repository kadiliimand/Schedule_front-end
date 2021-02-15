<template>
  <div>

    <v-btn to="/employee/mySchedule" outlined>My Schedule</v-btn>
    <br><br>
    <v-btn to="/employee/teamSchedule" outlined>Team Schedule</v-btn>
    <br><br>
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