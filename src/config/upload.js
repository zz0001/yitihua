// import {encryptByDES} from '../../public/encryption/des';
import lrz from 'lrz';
import $ from 'jquery';
import {baseUrl} from './env'
import {photoCompress} from './common'


// const des_key = "h1y2i3j4l8";//设置加密协议

/**
 * 使用ajax实现图片上传
 *  type:【1:意见反馈  】
 * @return string
 */
export async function uploadImage(photo, id, type, times) {
    let formData = new FormData();
    let response = '';
    let fileName = getTimeStamp() + '.jpg';

    let obj;

    var ipAdd;
    if (type == 1) {
        //案件
        // alert(1);
        // alert('上传案件照片')
        ipAdd = '/app/case/doAppUploadCaseFile';
        // ipAdd = '/app/case/doAppUploadCaseFile';
        formData.append('annexNo', id);
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('fileName', fileName);
        formData.append('type', times);
    } else if (type == 2) {
        // alert('上传违建照片')
        //违建
        ipAdd = '/app/common/doAppUploadFile';
        formData.append('annexNo', id);
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('fileName', fileName);
        formData.append('moduleName', 'illegalBuilding');
        formData.append('annexType', '01');
    } else if (type == 10) {
        // alert('上传督查督办')
        //违建
        ipAdd = '/app/mission/uploadPicture';
        formData.append('annexNo', id);
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('fileName', fileName);
    }  else if (type == 11) {
        // 双随机上报
        ipAdd = '/app/doublerandom/uploadPicture';
        formData.append('annexNo', id);
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('fileName', fileName);
    } else {
        // alert('上传违停照片')
        //违停
        ipAdd = '/app/illegalpark/doAppUploadFile';
        formData.append('annexNo', id);
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('fileName', fileName);
        formData.append('annexType', '01');
    }

    return lrz(photo, {quality: 0.5}).then(function (rst) {
        formData.append('file', rst.file);

        $.ajax({
            url: baseUrl + ipAdd,
            type: 'POST',
            cache: false,
            processData: false,
            contentType: false,
            data: formData,
            dataType: 'json',
            async: false,
            success: function (res) {
                console.log('upload success: ' + JSON.stringify(res));
                response = JSON.stringify(res);
            },
            error: function (data, type, err) {
                console.log('upload fail: ' + err);
                console.log('upload fail type: ' + type);
                response = 'failed';
            }
        });
        console.log('return： ' + response);
        return response;
    });
    // },1000)

}

function getTimeStamp() {
    // var tipI = 1;
    // localStorage.setItem('tipI',tipI);
    var tt = localStorage.getItem('tipI');
    // console.log('er'+tt);
    tt = Number(tt) + 1;

    localStorage.setItem('tipI', tt);

    // console.log('er'+tt);
    let date = new Date();
    let year = date.getFullYear().toString(); //获取当前年份
    let mon = (date.getMonth() + 1).toString(); //获取当前月份
    let da = date.getDate().toString(); //获取当前日.toString()
    let h = date.getHours().toString(); //获取小时
    let m = date.getMinutes().toString(); //获取分钟
    let s = date.getSeconds().toString(); //获取秒
    return year + mon + da + h + m + s + tt;
}

const objToStr = (d) => {//将对象变为字符串
    let str = '';
    for (let key in d) {
        str += (key + '=' + d[key] + ',')
    }
    return str;
};
