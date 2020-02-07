import Vue from 'vue'
import Vuex from 'vuex'
import './server.js'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            platModule:{
                hslh: {},
                wggl: {},
                zhzf: {},
                zwfw: {}
            },

            ////////////////////巡查上报暂存内容////////////////////
            patrolReportStorage: [],

            // 建筑管理
            /**
             * 在建建筑
             */
            constructingBuilding: {
                hasStorage: Boolean, // 是否有暂存信息的标志位
                moreAddress: {},
                describe: '',
                photoList: [],
                newLocation: {},
                autoHandle: Boolean,
            },

            ////////////////////案件上报暂存内容////////////////////
            chosenPersonInAction: {
                id: '',
                name: '',
            },

            ////////////////////系统信息////////////////////
            version: '2.9',
        },
        mutations: {},
        actions: {}
    })
}
