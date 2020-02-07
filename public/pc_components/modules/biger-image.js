import CreateAPI from 'vue-create-api'
import bigerImage from '../components/biger-image.vue'

function api(Vue, bigerImage) {
    if (!Vue.createAPI) {
        Vue.use(CreateAPI)
    }
    if (!Vue.prototype.$createPcBigerImage) {
        Vue.createAPI(bigerImage, false)
    }
}
bigerImage.install = function(Vue) {
    Vue.component(bigerImage.name, bigerImage);
    api(Vue, bigerImage)
}
export default bigerImage