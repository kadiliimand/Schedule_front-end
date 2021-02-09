import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Employee from '../views/Employee'
import MySchedule from '../views/employee/MySchedule'
import TeamSchedule from '../views/employee/TeamSchedule'
import Employer from '../views/Employer'
import CreateEmployee from '../views/employer/CreateEmployee'
import CreateSchedule from '../views/employer/CreateSchedule'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/employee/MySchedule',
    name: 'MySchedule',
    component: MySchedule
  },
  {
    path: '/employee/TeamSchedule',
    name: 'TeamSchedule',
    component: TeamSchedule
  },


  {
    path: '/Employer',
    name: 'Employer',
    component: Employer
  },
  {
    path: '/employer/CreateEmployee',
    name: 'CreateEmployee',
    component: CreateEmployee
  },
  {
    path: '/employer/CreateSchedule',
    name: 'CreateSchedule',
    component: CreateSchedule
  },

]

const router = new VueRouter({
  routes
})

export default router
