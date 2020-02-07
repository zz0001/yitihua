import Vue from 'vue';
window.Vue = Vue;
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
import JSONEditor from './index.vue'
Vue.createAPI(JSONEditor, false)
import codeEditor from '../editor/codeEditor.vue';
Vue.createAPI(codeEditor, false)