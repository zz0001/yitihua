import Vue from 'vue'
import Router from 'vue-router'
import routes from './route.json';
Vue.use(Router)

export function createRouter() {
    var router = new Router({
        mode:'hash',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: routes.map(item => {
            return {
                path:item.path,
                component: () =>
                    import (`../page/${item.componentUrl}`)
            }
        })
    })
    return router;
}
