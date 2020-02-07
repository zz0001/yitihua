import Vue from 'vue'
import { Header, Button, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
console.log()
Vue.prototype.hideLoading = () => {
    Indicator.close()
};
Vue.prototype.toast = function (txt, type, fn) {
    if (!type) { type = 'warn' }
    this.$createToast({
        time: 1500,
        mask: true,
        txt: txt,
        type: type,
        onTimeout: fn || null
    }).show()
}
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
import chooseLocation from "./view/patrolReport/chooseLocation";
Vue.createAPI(chooseLocation)
import signSuccess from './component/sign-success';
Vue.createAPI(signSuccess)
import signFail from './component/sign-fail';
Vue.createAPI(signFail)
import signWarn from './component/sign-warn';
Vue.createAPI(signWarn)
import thank from '%/tk_components/index.js';
Vue.use(thank);
Vue.component('mt-header',Header);
Vue.component('mt-button',Button);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// import {Scroll, Slide} from 'cube-ui/src/index.js';
// Vue.use(Scroll);
// Vue.use(Slide);
// import ('%/tk_components/index.js').then(d => {
//     Vue.use(d.default)
// })
