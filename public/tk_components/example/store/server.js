import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Qs from 'qs';
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "/";
axios.defaults.timeout = 100000;
axios.defaults.headers = { //设置相应头
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json, text/plain'
}
var $vue=new Vue();
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
        if (typeof(res.data) == 'string') {
            return JSON.parse(res.data)
        } else {
            return res.data
        }
    },
    err => {
        console.log("服务器报错")
    }
)
