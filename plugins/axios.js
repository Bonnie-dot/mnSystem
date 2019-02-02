import axios from "axios"
import Vue from 'vue'
axios.create({
    baseUrl:'http://127.0.0.1'
})
Vue.prototype.$axios=axios;