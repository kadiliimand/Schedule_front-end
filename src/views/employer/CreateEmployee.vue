<template>
  <div class="Employer">
    <h1>Create new employee</h1>
    <v-col cols="10" sm="5">

    <v-text-field v-model="idNumber" label="Id number" outlined required></v-text-field>
    <br>
    <v-text-field v-model="name" label="Employee name" outlined required></v-text-field>
    <br>
    <v-text-field v-model="departmentCode" label="Department code" outlined required></v-text-field>
    <br>
    <v-text-field v-model="hourlyPay" label="Hourly pay" outlined required></v-text-field>
    <br>
    <v-text-field v-model="salaryCode" label="Salary code" outlined required></v-text-field>
    <br>
    <v-text-field v-model="password" label="Password" outlined required></v-text-field>
    <br>
    </v-col>
    <v-btn v-on:click="saveInHtml()" outlined>Save employee</v-btn>
    <br><br>
    <b>{{ answer }}</b>
    <v-btn to="/Employer" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

  </div>

</template>
<script>
let saveInJs = function () {
  this.$http.post('http://localhost:8080/public/createEmployee', {}, {
    params: {
      idNumber: this.idNumber,
      name: this.name,
      departmentCode: this.departmentCode,
      hourlyPay: this.hourlyPay,
      salaryCode: this.salaryCode,
      password: this.password
    }
  })
      .then(response => this.answer = response.data)
      .catch(response => console.log(response.data))
}

export default {
  name: 'CreateEmployee',
  components: {},
  data: function () {
    return {
      idNumber: '',
      name: '',
      departmentCode: '',
      hourlyPay: '',
      salaryCode: '',
      password: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>