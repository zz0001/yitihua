import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
import chartb from './components/two-chartb.vue'
Vue.component('pc-chartb', chartb)
import pcSlide from './components/pc-slide.vue'
Vue.component('pc-slide', pcSlide)
import pcBox from './components/box';
Vue.component('pc-box', pcBox)
import imagePreview from '../pot_components/src/components/image-preview/image-preview.vue'
Vue.createAPI(imagePreview)
import gundong from './components/gundong.vue';
Vue.component('pc-gundong', gundong)
import codeEditor from './components/editor/codeEditor.vue';
Vue.createAPI(codeEditor)
import JSONEditor from './components/bejson/index.vue';
Vue.createAPI(JSONEditor)
import tkButton from '../tk_components/components/button'
Vue.component('tk-button', tkButton)
import liandong from './components/liandong.vue'
Vue.createAPI(liandong)
Vue.component('pc-liandong',liandong)
export function createApp() {
    // create store and router instances
    const store = createStore()
    const router = createRouter()

    // sync the router with the vuex store.
    // this registers `store.state.route`
    sync(store, router);
    // create the app instance.
    // here we inject the router, store and ssr context to all child components,
    // making them available everywhere as `this.$router` and `this.$store`.
    const app = new Vue({
        router,
        store,
        mounted() {

        },
        render: h => h(App)
    })

    // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.
    return { app, router, store }
}