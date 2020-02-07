<template>
    <div data-role="page" id="people_detail_page">
        <!--<div class="page_header">-->
            <!--<img class="left_img back-button" src="/static/resources/images/icon_white_back.png">-->
            <!--<div class="page_header_title">联系人详情</div>-->
        <!--</div>-->
        <tk-header>
            联系人详情
        </tk-header>
        <div class="page_content">
            <div id="people_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div>
                        <div style="text-align:center;background:#fff;height:6em;"><img style="margin-top: 1em;"/>
                        </div>
                        <div id="peopleName" class="name"></div>
                    </div>

                    <div class="sxsplit"></div>
                    <div id="peoplePhone">手机:<span></span>
                        <img class="callphone" src="/static/resources/images/call.png"/>
                    </div>
                    <div id="peopleTel">固定电话:<span></span>
                        <img class="calltel" src="/static/resources/images/call.png"/>
                    </div>
                    <div id="peopleDuty">职务:<span></span></div>
                    <!-- <tk-cell-one @click="toChat">聊天</tk-cell-one> -->
                </div>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "peopleDetail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            console.log(this.$route.query.data)
            // $("#people_detail_page").live("pageshow", function () {
            initPeopleDetail();
            //返回
            $("#people_detail_page .back-button").listen("quickClick", function (e) {
                // $.mobile.changePage("../phone/peoplePhone.html");
                that.$router.back(-1);
            });
            $(".sort_box").on("click", ".sort_list", function (e) {
                var phone = $(e.currentTarget).attr("mobile");
            })

            // });

            function initPeopleDetail() {
                $("#people_detail_wrapper")[0].style.height = window.localInnerHeight - $("#people_detail_page .page_header").height() - $("#people_detail_page .page_footer").height();//- $("#people_detail_page .search_div").height()
                -$("#people_detail_page .page_footer").height() + "px";
                // initScroll({
                //     "wrapper": "people_detail_wrapper",
                //     "dir": "y",
                //     "bounce": false,
                //     "scrollBar": false
                // });
                window.info = '{"code":"0","datas":[{"deptName":"系统管理","userList":[{"phone":" ","tel":" ","id":"402880e92db726b5012db729f65f0001","userName":"系统管理员"}],"userCount":1,"id":"402880e92db5d2ee012db601b2220004"},{"deptName":"江苏省","userList":[],"userCount":0,"children":[{"children":[{"children":[{"children":[{"children":[{"id":"002002001001001001","text":"走访三级网格测试"}],"id":"002002001001001","text":"走访二级网格测试","state":"closed"}],"id":"002002001001","text":"丁岗镇(新能源产业园)","state":"closed"},{"id":"002002001002","text":"大路镇"},{"id":"002002001003","text":"姚桥镇"},{"id":"002002001004","text":"大港街道"},{"id":"002002001005","text":"丁卯街道(大学科技园)"}],"id":"002002001","text":"吴江平望","state":"closed"}],"id":"002002","text":"镇江市","state":"closed"}],"id":"8a8184b55b45f27c015b474e66520055"}]}';
                //scrollToTop("people_detail_wrapper");
                $("#people_phone_html").empty();
                $("#people_phone_inp").val("");

                var phone = that.$route.query.data.mobile;
                var tel = that.$route.query.data.tel;
                var duty = that.$route.query.data.duty;
                var peoplename = that.$route.query.data.display_name;
                $("#peopleName").text(peoplename);

                if (phone) {
                    $("#peoplePhone span").text(phone);
                } else {
                    $("#peoplePhone span").text("");
                }
                if (tel) {
                    $("#peopleTel span").text(tel);
                } else {
                    $("#peopleTel span").text("");
                }
                if (duty) {
                    $("#peopleDuty span").text(duty);
                } else {
                    $("#peopleDuty span").text("");
                }
                if (!phone) {
                    $(".callphone").hide();
                } else {
                    $(".callphone").show();
                }
                if (!tel) {
                    $(".calltel").hide();
                } else {
                    $(".calltel").show();
                }
            }

            $(".callphone").on("click", function () {
                showContentAlert('确定要给：' + window.peoplename + "，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦", function () {
                }, function () {
                    jsict.util.call(function () {
                        console.log("电话拨打ok");
                    }, function (err) {
                        console.log("电话拨打失败" + err);
                    }, window.phone);
                }, "拨打");
            })
            $(".calltel").on("click", function () {
                showContentAlert('确定要给：' + window.peoplename + "，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦", function () {
                }, function () {
                    jsict.util.call(function () {
                        console.log("电话拨打ok");
                    }, function (err) {
                        console.log("电话拨打失败" + err);
                    }, window.tel);
                }, "拨打");
            })
        },
        methods: {
            toChat(){
                this.$router.push('/chatRoom')
            }
        }
    }
</script>

<style lang="less" scoped>
    #people_detail_page .search_div {
        height: 3.2em;
        background: #edeef1;
    }

    #people_detail_page #people_phone_inp {
        width: 75%;
        float: left;
        margin-top: 0.5em;
    }

    #people_detail_page #people_phone_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 1em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #people_detail_page table tr td:first-child, #people_detail_page .page_content p {
        padding: 1em;
        text-align: left;
    }

    #people_detail_page table {
        margin-left: 0em;
    }

    #people_detail_page table tr td:last-child {
        padding-right: 1em;
        width: 2em;
    }

    #people_detail_page .page_content p {
        background: #f3f3f3;
    }

    #people_detail_page .phone_upback_img {
        width: 0.5em;
        padding: 0em 0.5em;
    }

    #peopleName {
        height: 3em;
        background-color: #ffffff;
        text-align: center;
    }

    #peoplePhone, #peopleTel, #peopleDuty {
        height: 5em;
        background-color: #ffffff;
        line-height: 5em;
        padding-left: 2em;
        border-bottom: 1px solid #ddd;
    }

    .sxsplit {
        height: 1em;
        background-color: #ddd;
    }

    .callphone, .calltel {
        float: right;
        margin-top: 1.8em;
        margin-right: 1em;
        width: 22px;
    }
</style>
