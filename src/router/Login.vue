<template>
  <div class="home">
    <h1>Employee login</h1>
    Username:<input v-model="userName" placeholder="Username"><br>
    Password:<input v-model="password" placeholder="Password"><br>
    <button v-on:click="saveInHtml()">Submit</button>
    <br>
    <br>
    <br>
    <h1>Employer login</h1>
    Username:<input v-model="userName" placeholder="Username"><br>
    Password:<input v-model="password" placeholder="Password"><br>
    <button v-on:click="saveInHtml()">Submit</button>
  </div>

</template>