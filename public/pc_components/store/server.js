import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Qs from 'qs';
Vue.use(VueAxios, axios);
Vue.prototype.baseURL = axios.defaults.baseURL = "/"
    // axios.defaults.baseURL = "http://202.102.101.92:20001/"
axios.defaults.timeout = 12000;
axios.defaults.headers = { //设置相应头
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json, text/plain'
}
axios.defaults.transformRequest = [
    d => { //对发送的数据进行处理
        d = d || {};
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
        return res.data
    },
    err => {
        console.log("错误代码777")
    }
)