import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Qs from 'qs';

Vue.use(VueAxios, axios);
axios.defaults.baseURL = "/";
Vue.prototype.baseURL = "/wgh/app/"

// axios.defaults.baseURL = "https://202.102.101.92:20001/"
axios.defaults.timeout = 100000;
axios.defaults.headers = { //设置相应头
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json, text/plain'
}
var $vue = new Vue();
var loadings = [];
axios.defaults.transformRequest = [
    d => { //对发送的数据进行处理
        d = d || {};
        var token = localStorage.getItem('token') || '';
        loadings.push($vue.$createTkLoading());
        if (token) {
            d.token = token;
        }
        d.type = 'mobile';
        // d.userId = userId;
        return Qs.stringify(d)
    }
];

axios.interceptors.request.use(
    request => {
        return request
    }
)
axios.interceptors.response.use(
    res => {
        if (loadings.length) {
            var loading = loadings.splice(0, 1);
            loading && loading[0] && loading[0].hide();
        }
        if (typeof (res.data) == 'string') {
            return JSON.parse(res.data)
        } else {
            return res.data
        }
    },
    err => {
        if (loadings.length) {
            var loading = loadings.splice(0, 1);
            loading && loading[0] && loading[0].hide();
        }
        console.log("服务器报错")
    }
)
