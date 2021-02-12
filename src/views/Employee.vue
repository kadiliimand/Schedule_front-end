<template>
  <div>

    <router-link to="/employee/mySchedule">My Schedule</router-link>
    <br><br>
    <router-link to="/employee/teamSchedule">Team Schedule</router-link>
    <br><br>
    <button v-on:click="saveInHtml()">Logout!</button>
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
    saveInHtml: logout

  }
}


</script>
<style scoped></style>