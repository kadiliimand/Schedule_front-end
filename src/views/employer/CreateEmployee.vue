<template>
  <div class="Employer">
    <h1>Create new employee</h1>
    Id number:<input v-model="idNumber" required><br>
    Name:<input v-model="name" required><br>
    Department:<input v-model="departmentCode" required><br>
    Hourly pay:<input v-model="hourlyPay" required><br>
    Salary code: <input v-model="salaryCode" required><br>
    Password:<input v-model="password" required><br>
    <button v-on:click="saveInHtml()">Save employee</button><br><br>
    <b>{{answer}}</b>
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