<!-- 通知公告：首页点击更多时跳转此页面 -->
<template>
    <div data-role="page" id="notice_welcome_list_page">
        <tk-header>
            通知公告
        </tk-header>

        <div class="page_content" style="">
            <div class="search_div">
                <input id="notice_welcome_list_inp" style="width:80%;" class="alert_edit_div_input" type="text"
                       placeholder="请输入搜索内容" v-model="searchContent"/>
                <img id="refresh_service" style="display: none;" src="/staitc/resources/images/icon_gray_screen.png"
                     class=" ">
                <div id="service_search" class="orange_background smaller">搜索</div>
            </div>
            <!--<div id="notice_welcome_list_wrapper" class="jszx-wrapper">-->
                <!--<div class="jszx-scroller">-->
                    <!--<div id="notice_welcome_list_html" class="html_margin white_background">-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <tk-scroll
                    style="background-color: white"
                    :url="urllist"
                    :param="params"
                    transfer="datas"
                    :options="{
                            pullDown: true,
                            pullUp: true
                        }"
                    v-model="recordList">
                <div class="patrol-record-item" v-for="item in recordList" @click="showDetail(i, item)">
                    <div class="patrol-record-item-title">{{item.title}}</div>

                    <div class="patrol-record-item-time">{{item.noticeType}}||{{item.creatTime}}</div>
                </div>
            </tk-scroll>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "noticeWelcomeList",
        data() {
            return {
                date: '',
                searchContent:"",
                 urllist:'/wgh/app/' + 'noticeList.action',
               //  urllist:"http://192.168.1.147:8080/yth_mysql/app/noticeList.action",
                params:{para: 'userid=&' + 'searchContent=&noticeType=&pageSize=20',pageNum:1},

                recordList: [

                ],
            }
        },
        mounted(){
            window.searchPage = 2;
            var that=this;
            this.app_noticeList();
            $("#notice_welcome_list_html").empty();
            $("#notice_welcome_list_page #service_search").listen("quickClick", function (e) {
                window.searchPage = 2;

                that.params={para: 'userid=&' + 'searchContent='+that.searchContent+'&noticeType=&pageSize=20',pageNum:1};
                that.app_noticeList();
            });
            // initNoticeWelcomeList()
            // function initNoticeWelcomeList() {
            //     $("#notice_welcome_list_wrapper")[0].style.height = window.localInnerHeight - $("#notice_welcome_list_page .page_header").height() - $("#notice_welcome_list_page .search_div").height()-$("#notice_welcome_list_page .page_footer").height() + "px";
            //     initScroll({
            //         "wrapper": "notice_welcome_list_wrapper",
            //         "dir": "y",
            //         "bounce": false,
            //         "scrollBar": true,
            //         "pullUpLoading": function (reset) { //涓婃媺
            //
            //             if (window.searchPage > window.arrayDataLength) {
            //                 reset(true);
            //                 toast("没有更多的数据了");
            //             } else {
            //                 app_noticeList(reset, window.searchPage++, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
            //             }
            //         },
            //         "pullDownLoading": function (reset) { //涓嬫媺
            //             window.searchPage = 2;
            //             app_noticeList(reset, 1, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
            //         }
            //     });
            //     scrollToTop("notice_welcome_list_wrapper");
            //     window.noticeTypeName = "";
            //     app_noticeList(false, 1, "", "", "notice_welcome_list_html");
            //     $("#notice_welcome_list_page #notice_welcome_list_inp").val("");
            //     window.noticeTypeList = "";
            //     window.noticetype="";
            // }
        },
        methods:{

            app_noticeList() {
                var that=this;
                //var url="http://192.168.1.147:8080/yth_mysql/app/noticeList.action"
                axios.post(this.urllist, this.params).then(data => {

                    if (data.code == 0) {

                        var array = data.datas;

                        if (!isNull(array) && array.length > 0) {
                            that.recordList=array;


                        } else {

                        }
                    } else {

                        toast(data.message);
                    }
                    window.flag1 = true;
                })
            },
            showDetail(i,item){


                this.$router.push({path: '/notice-detail', query: {rowId: item.row_id}});
            },
        }
    }
</script>

<style lang="less" scoped>
#notice_welcome_list_wrapper{
    height: calc(100vh - 8em - 35px);
}
    #notice_welcome_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #notice_welcome_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }


    #notice_welcome_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }



    #notice_welcome_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #notice_welcome_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #notice_welcome_list_page .search_div {
        height: 4em;
    }

    #notice_welcome_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    .red_round_rank{
        width: 0.5em;
        height: 0.5em;
        background: red;
        border-radius: 0.5em;
        position: relative;
        float: left;
        /* margin-right: 2.0em;
        margin-top: -3.5em; */
        border: 2px solid #ffffff;
    }
.patrol-record-item {
    height: 84px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: start;
    background-color: white;
    border-bottom: 1px solid #cccccc;
    padding-left: 24px;

.patrol-record-item-title {
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(100% - 24px);
}

.patrol-record-item-time {
    margin-top: 14px;
    font-size: 12px;
    color: rgb(153,153,153);
}

}
</style>
