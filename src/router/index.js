import Vue from 'vue'
import Router from 'vue-router'
import chenRoute from './chenRoute.json';
import caoRoute from './caoRoute.json';
import wuRoute from './wuRoute.json';
import zhangRoute from './zhangRoute.json';
var newRoute=chenRoute.concat(caoRoute).concat(wuRoute).concat(zhangRoute);
Vue.use(Router)

export function createRouter() {
    var router = new Router({
        mode: process.env.VUE_ENV == 'spa' ? 'hash' : 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [{
            path: '/',
            redirect: "/login"
        }]
            .concat(newRoute.map(item => {
            return {
                path: '/' + item.path,
                component: () =>
                    import (`@/view/${item.componentUrl}`)
            }
        }))
    })
    return router;
}
