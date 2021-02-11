<template>
  <div class="home">
    <h1>Employee login</h1>
    Id number:<input v-model="idNumber"><br>
    Password:<input v-model="password"><br><br>
    <button v-on:click="login()">Login</button>

    <br>
    <br>
    <br>
<!--    <h1>Employer login</h1>-->
<!--    Id number:<input v-model="idNumber"><br>-->
<!--    Password:<input v-model="password"><br><br>-->
<!--    <button v-on:click="login()">Login</button>-->
  </div>

</template>
<script>
let login = function () {
  localStorage.removeItem('user-token');
  this.$http.post('http://localhost:8080/public/login', {}, {params:{idNumber: this.idNumber, password: this.password}})
    .then(response => {
      alert(response.data);
      let token = response.data;
      localStorage.setItem('user-token', token)
      this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
    })
}
export default {
  name: 'Login',
  components: {},
  data: function () {
    return {
      idNumber: '',
      password: ''
    }
  },
  methods: {
    login: login,
  }
}
</script>
