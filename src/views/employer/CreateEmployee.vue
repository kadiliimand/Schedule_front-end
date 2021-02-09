<template>
  <div class="home">
    <h1>Create new employee</h1>
    Id number:<input v-model="idNumber"><br>
    Name:<input v-model="name"><br>
    Department:<input v-model="departmentCode"><br>
    Hourly pay:<input v-model="hourlyPay"><br>
    Salary code: <input v-model="salaryCode"><br>
    Password:<input v-model="password"><br>
    <button v-on:click="saveInHtml()">Save employee</button><br><br>
    {{answer}}
  </div>

</template>
<script>
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/createEmployee', {}, {
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
  name: 'Employee',
  components: {},
  data: function () {
    return {
      idNumber: '',
      name: '',
      address: '',
      department: '',
      hourlyPay: '',
      salaryCode: '',
      password: '',
      answer: 'New employee created!'
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>