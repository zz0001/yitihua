// 二次封装一些常用的公共函数

import Vue from 'vue'

// 对cube-ui的 toast 进行二次封装
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

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) { return false }
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) { return false }
    return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) { return false }
    window.localStorage.removeItem(name)
}

// 自定义文件夹变量
var appDirectory

// 自定义文件夹路径
var appDirectoryPath

document.addEventListener('deviceready', function () {
    // 创建appRoot目录
    window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function (dirEntry) {
        dirEntry.getDirectory('appRoot', { create: true, exclusive: false }, function (directoryEntry) {
            appDirectory = directoryEntry
            appDirectoryPath = directoryEntry.toURL().replace('file://', '')
        })
    }, function () {

    })
}, false)

export {
    appDirectory,
    appDirectoryPath
}

/**
 * 压缩图片 photoCompress
 */
export const photoCompress = (src, w, fn) => {
    w = w || 1920
    var newImg = new Image()
    newImg.src = src
    var imgWidth
    var imgHeight
    var offsetX = 0
    var offsetY = 0
    newImg.onload = function(){
        var img = document.createElement('img')
        img.src = newImg.src
        var imgWidth = img.width
        var imgHeight = img.height
        var canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = w * imgHeight / imgWidth
        if (canvas.height > w) {
            canvas.height = w
            canvas.width = w * imgWidth / imgHeight
        }
        var ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        var base64 = canvas.toDataURL('image/jpeg', 0.7)
        fn(base64)
    }
}

// 引入百度地图
(function(){
    window.BMap_loadScriptTime = (new Date).getTime()
    var scripts = "<script type='text/javascript' src='https://api.map.baidu.com/getscript?v=3.0&ak=FrKAG9C5ink4MWLms0jQt17nydpXcAgZ&services=&t=20180102163224'><\/script>"
    document.write(scripts)
})()
