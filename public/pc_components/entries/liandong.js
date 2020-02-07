import Vue from 'vue';
window.Vue = Vue;
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
import liandong from '../components/liandong.vue'
Vue.createAPI(liandong, false)