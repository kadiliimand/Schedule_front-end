<template>
  <div class="home">
    <v-col cols="10" sm="5">
      <br><br>
      <h1>Employee login</h1>
      <br><br>
      <v-text-field v-model="idNumber" label="Id number" outlined></v-text-field>
      <br>
      <v-text-field v-model="password" label="Password" outlined></v-text-field>
      <br><br>

      <v-btn to="/Employee" v-on:click="login()" outlined>Login</v-btn>
      <br>
      <br>
      <br>

      <h1>Employer login</h1>
      <br><br>

      <v-text-field v-model="idNumber" label="Id number" outlined></v-text-field>
      <br>
      <v-text-field v-model="password" label="Password" outlined></v-text-field>
      <br><br>

      <v-btn to="/Employer" v-on:click="login()" outlined>Login</v-btn>
    </v-col>
  </div>

</template>
<script>
let login = function () {
  localStorage.removeItem('user-token');
  this.$http.post('http://localhost:8080/public/login', {}, {
    params: {
      idNumber: this.idNumber,
      password: this.password
    }
  })
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
<style scoped></style>