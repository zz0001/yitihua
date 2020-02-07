/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let baseUrl
let routerMode
let baseImgUrl
let zhzf_baseUrl = '/zhzf';

if (process.env.NODE_ENV === 'development') {
    // baseUrl = 'https://202.102.101.51:8085/zjgzf'
    // baseUrl = 'https://192.168.0.117:8080/zhzf'
    // baseUrl = 'https://192.168.0.113:8080/zhzfsaas'

    // baseUrl = 'https://10.1.159.219:18080/zjgzf'
    // baseImgUrl = 'https://10.1.159.219:18080'

    // baseUrl = 'https://10.1.163.172:8085/zhzf'
    // baseImgUrl = 'https://10.1.163.172:8085'

    baseUrl = 'https://121.229.13.196:8085/zhzf'
    baseImgUrl = 'https://121.229.13.196:8085'


    // baseUrl = 'https://121.229.14.125:8085/zhzf'
    // baseImgUrl = 'https://121.229.14.125:8085:18080'

    // baseImgUrl = 'https://202.102.101.51:8085'
    // baseImgUrl = 'https://192.168.0.118:8080'
    routerMode = 'hash'
} else {
    // baseUrl = 'https://202.102.101.51:8085/zjgzf'
    // baseUrl = 'https://192.168.0.118:8080/zhzf'

    // baseUrl = 'https://10.1.159.219:18080/zjgzf'
    // baseImgUrl = 'https://10.1.159.219:18080'

    // baseUrl = 'https://10.1.163.172:8085/zhzf'
    // baseImgUrl = 'https://10.1.163.172:8085'

    baseUrl = 'https://121.229.13.196:8085/zhzf'
    baseImgUrl = 'https://121.229.13.196:8085'

    // baseUrl = 'https://121.229.14.125:8085/zhzf'
    // baseImgUrl = 'https://121.229.14.125:8085:18080'

    // baseImgUrl = 'https://202.102.101.51:8085'
    // baseUrl = 'https://121.229.14.125:8085/zhzf'
    routerMode = 'hash'
}
export {
    baseUrl,
    baseImgUrl,
    routerMode,
    zhzf_baseUrl
}
