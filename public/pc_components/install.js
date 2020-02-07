
  import CreateAPI from 'vue-create-api'
  import chartb from './components/two-chartb.vue'
  import pcSlide from './components/pc-slide.vue'
  import pcBox from './components/box';
  import imagePreview from '../pot_components/src/components/image-preview/image-preview.vue'
  import gundong from './components/gundong.vue';
  import liandong from './components/liandong.vue';
  function install(Vue) {
    if (install.installed) {
      return
    }
    install.installed = true
    Vue.use(CreateAPI)
    Vue.component('pc-gundong',gundong)
    Vue.component('pc-box',pcBox)
    Vue.component('pc-slide',pcSlide)
    Vue.component('pc-chartb',chartb)
    Vue.component('pc-liandong',liandong)
    Vue.createAPI(imagePreview)
  }
  
  const PC = {
    /* eslint-disable no-undef */
    version: 1.0,
    install,
    createAPI
  }
  
  
  export default PC
  