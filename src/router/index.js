import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views2/Login.vue'
import Employee from '../views2/Employee'
import Employer from '../views2/Employer'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/employer',
    name: 'Employer',
    component: Employer
  }
]

const router = new VueRouter({
  routes
})

export default router
