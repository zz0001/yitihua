import Vue from 'vue'
import Router from 'vue-router'
const path = require('path')
Vue.use(Router)

export function createRouter() {
    var router = new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: []
    })
    return router;
}