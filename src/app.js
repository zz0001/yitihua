import Vue from 'vue'
import App from './App.vue'
import {createStore} from './store'
import {createRouter} from './router'
import {sync} from 'vuex-router-sync'
import './module.js'
import './style/index.less';

function init() {
    
    import('./config/rem.js');
    if (window.navigator.platform != 'Win32' && (window.navigator.platform != "MacIntel")) {
        var isAndroid = /Android/.test(navigator.userAgent);
        var isIos = /iPhone/.test(navigator.userAgent);
        Vue.prototype.isAndroid = isAndroid;
        Vue.prototype.isIos = isIos;
        var body = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.charset = "GBK";
        if (isIos) {
            script.src = "./static/cordova-ios/cordova.js";
        } else if (isAndroid) {
            script.src = "./static/cordova/cordova.js";
        }
        body.appendChild(script);
    }else{
        import('vconsole').then(d=>{
            new d();
        });
    }
}

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
            init()
        },
        render: h => h(App)
    })

    // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.
    return {app, router, store}
}