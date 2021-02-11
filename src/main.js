import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";


Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')

const token = localStorage.getItem('user-token')
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
}