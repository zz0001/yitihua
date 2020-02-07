import Vue from 'vue';
window.Vue = Vue;
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
import tView from '../components/tview.vue'
Vue.createAPI(tView, false)