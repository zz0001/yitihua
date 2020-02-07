var baseUrl = '/zhzf'
import {Indicator} from 'mint-ui'

export default async (type = 'GET', url = '', data = {}, tip = true, method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    // 添加公共的参数
    data.userId = "";
    data.token = localStorage.getItem('token');
    if (type === 'GET') {
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    return new Promise((resolve, reject) => {
        let requestObj;
        if (window.XMLHttpRequest) {
            requestObj = new XMLHttpRequest()
        } else {
            requestObj = new ActiveXObject
        }

        let sendData = '';
        if (type === 'POST') {
            sendData = JSON.stringify(data)
        }

        requestObj.open(type, url, true);
        requestObj.setRequestHeader("Content-type", "application/json;charset=UTF-8");

        if (tip) {
            Indicator.open({
                text: '正在加载...',
                spinnerType: 'fading-circle'
            })
        }

        console.log("请求地址\n " + url);
        console.log("请求数据\n " + sendData);

        requestObj.send(sendData);

        requestObj.onreadystatechange = () => {
            if (requestObj.readyState === 4) {
                if (requestObj.status === 200) {
                    let obj = requestObj.response;
                    if (typeof obj !== 'object') {
                        obj = eval("(" + obj + ")")
                    }
                    console.log("返回数据\n " + JSON.stringify(obj));
                    resolve(obj);
                } else {
                    console.log(requestObj);
                    reject(requestObj);
                }
            }
        }
    })
}
