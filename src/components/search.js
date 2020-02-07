
import searchContentt from './searchContent.vue'
import editTextView from './edit-text-view'
import editAreaVieww from './text-area-view'
const SearchContent = {
    install:function (Vue) {
        Vue.component('SearchContent',searchContentt)
    }
}
const lineTextView = {
    install:function (Vue) {
        Vue.component('lineTextView',editTextView)
    }
}
const editAreaView = {
    install:function (Vue) {
        Vue.component('editAreaVieww',editAreaVieww)
    }
}
export default SearchContent
export default lineTextView
export default editAreaView
