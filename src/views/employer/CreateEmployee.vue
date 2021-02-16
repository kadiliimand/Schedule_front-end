<template>
  <div class="Employer">
    <v-col cols="10" sm="5">
      <br><br>
      <h1>Create new employee</h1>
      <br><br>

      <v-text-field v-model="idNumber" label="Id number" outlined required></v-text-field>
      <br>
      <v-text-field v-model="name" label="Employee name" outlined required></v-text-field>
      <br>
      <v-text-field v-model="departmentCode" label="Department code" outlined required></v-text-field>
      <br>
      <v-text-field v-model="hourlyPay" label="Hourly pay" outlined required></v-text-field>
      <br>
      <v-text-field v-model="password" label="Password" outlined required></v-text-field>
      <br>

      <v-btn v-on:click="createEmployee()" outlined>Save employee</v-btn>
      <br><br><br><br>


      <h1>Update Employee Data</h1>
      <br><br>

      <v-text-field v-model="id" label="Employee id" outlined required></v-text-field>
      <br>
      <v-text-field v-model="name" label="Name" outlined required></v-text-field>
      <br>
      <v-text-field v-model="idNumber" label="Id number" outlined required></v-text-field>
      <br>
      <v-text-field v-model="departmentCode" label="Department code" outlined required></v-text-field>
      <br>
      <v-text-field v-model="hourlyPay" label="Hourly pay" outlined required></v-text-field>
      <br>
      <v-text-field v-model="password" label="Password" outlined required></v-text-field>
      <br>
      <v-btn v-on:click="updateEmployee()" outlined>Update</v-btn>
      <br><br><br>

    </v-col>
    <br><br><br><br>
    <v-btn to="/Employer" outlined>Back</v-btn>
    <v-btn v-on:click="logout()" to="/Login" outlined>Logout!</v-btn>

  </div>

</template>
<script>
let createEmployee = function () {
  this.$http.post(this.$host +'/public/createEmployee', {}, {
    params: {
      idNumber: this.idNumber,
      name: this.name,
      departmentCode: this.departmentCode,
      hourlyPay: this.hourlyPay,
      password: this.password
    }
  })
      .then(response => this.answer = response.data)
      .catch(response => console.log(response.data))
}
let updateEmployee = function () {
  this.$http.put(this.$host +'/public/updateEmployeeData', {}, {
    params: {
      id: this.id,
      idNumber: this.idNumber,
      name: this.name,
      departmentCode: this.departmentCode,
      hourlyPay: this.hourlyPay,
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
      id: '',
      idNumber: '',
      name: '',
      departmentCode: '',
      hourlyPay: '',
      password: '',
      answer: 'Computer Says YES'
    }
  },
  methods: {
    createEmployee: createEmployee,
    updateEmployee: updateEmployee
  }
}
</script>