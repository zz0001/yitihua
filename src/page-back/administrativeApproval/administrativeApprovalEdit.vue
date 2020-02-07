<template>
<div id="administrative_edit_page">
    <tk-header>
        审批详情
        <span
            @click='$router.push("adminTaskSteps.vue")'
           slot="right">处理步骤</span>
    </tk-header>
    <tk-scroll>
        <tk-detail :list="list">

        </tk-detail>
    </tk-scroll>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                key: '事项名称',
                value: ''
            }, {
                key: '事项类型',
                value: ''
            }, {
                key: '办事对象类型',
                value: ''
            }, {
                key: '办事姓名',
                value: ''
            }, {
                key: '证件类型',
                value: ''
            }, {
                key: '证件号码',
                value: ''
            }, {
                key: '性别',
                value: ''
            }, {
                key: '出生日期',
                value: ''
            }, {
                key: '固定电话',
                value: ''
            }, {
                key: '手机号码',
                value: ''
            }, {
                key: '户籍地址',
                value: ''
            }, {
                key: '居住地址',
                value: ''
            }, {
                key: '处理人',
                value: ''
            }, {
                key: '受理时间',
                value: ''
            }, {
                key: '办结时间',
                value: ''
            }, {
                key: '超时时间',
                value: ''
            }]
        }
    },
    mounted() {
        var that=this;
        initiApprovalEdit();
            //商品图片
            $("#administrative_edit_page #choicemore").click(function (e) {
                window.upload_imgscroll = "leader_handle_edit_img_scroll";
                window.upload_imgwrapper = "leader_handle_edit_img_wrapper";
                window.upload_addimg = "leader_handle_edit_img";
                getPhotograph();
            });
            //截止时间
            chooseDate("leader_edit_endTime", "datetime");

            /*保存*/
            $("#administrative_edit_page .page_footer").listen("quickClick", function (e) {
                /*if (isNull(window.choiceThingsParts)) {
                    toast("请选择职能事项");
                } else if (isNull(window.choiceBigType)) {
                    toast("请选择大类");
                } else if (isNull(window.choiceSmallType)) {
                    toast("请选择小类");
                } else */
                if (window.leadercommitFlag) {

                } else {
                    if (isNull($("#leader_handle_edit_problem").val())) {
                        toast("请输入问题描述");
                    } else if (isNull($("#leader_edit_endTime").val())) {
                        toast("请选截止时间");
                    } else if (isNull($("#case_doDept").val())) { //window.doDeptArr
                        toast("请选处置部门");
                    } else {
                        showContentAlert("确认保存本次提交吗？", function () {}, function () {
                            window.leadercommitFlag = 1;
                            $("#save_handle_leader").removeClass("orange_background");
                            $("#save_handle_leader").addClass("gray_gray_background");
                            if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                window.picture_upImg = "";
                                publicOpinion_upPicture(window.picture_array[0], 1);

                            } else {
                                appWorkOrder_leaderOrderReport("", $("#leader_handle_edit_problem").val(), $("#leader_edit_endTime").val(), getNowTime(), window.doDeptArr);
                            }
                        }, "确定");
                    }
                }
            });
        function publicOpinion_upPicture(img, type) {
            console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
            var obj = "";
            obj += toJson("base64Str", img);
            doPost("app_publicOpinion_upPic.action", obj, function (data) {
                if (data.code == 0) {
                    if (type < parseInt(window.picture_array.length)) {
                        console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                        var typename = parseInt(type) + 1;
                        publicOpinion_upPicture(window.picture_array[type], typename);
                    } else {
                        console.log("图片上传结束");
                    }
                    if (isNull(window.picture_upImg)) {
                        window.picture_upImg = data.datas.path;
                    } else {
                        window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                    }
                    console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
                    if (parseInt(type) == window.picture_array.length) {
                        appWorkOrder_leaderOrderReport("", $("#leader_handle_edit_problem").val(), $("#leader_edit_endTime").val(), getNowTime(), window.doDeptArr);
                        console.log("type和图片长度相等" + type);
                    } else {
                        console.log("type和图片长度不相等");
                    }
                } else {
                    toast(data.message);
                }
            }, "", "");
        }

        function initiApprovalEdit() {
            $("#administrative_edit_wrapper")[0].style.height = window.localInnerHeight - $("#administrative_edit_page .page_header").height() - $("#administrative_edit_page .page_footer").height() + "px";
            initScroll({
                "wrapper": "administrative_edit_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("administrative_edit_wrapper");
            loadApprovalEdit();
            window.leadercommitFlag = 0;
        }

        function loadApprovalEdit() {
            $("#administrative_edit_page table tr td").addClass("gray_line_bottom");
            $("#administrative_edit_page table tr td input").val("");
            $("#administrative_edit_page table tr td textarea").val("");
            //图片集合
            var data = window.governmentAffairsInfo;
            that.list[0].value=data.affairName;
            that.list[1].value=(data.affairType=='1')?"咨询件":"受理件";
            that.list[2].value=(data.objectType == "0")?"自然人":"法人";
            that.list[3].value=data.name;
            that.list[4].value=data.docmentType;
            that.list[5].value=data.docmentNumber;
            that.list[6].value=(data.sex == "0") ?"男":"女";
            that.list[7].value=data.birthday;
            that.list[8].value=data.telephone;
            that.list[9].value=data.mobilePhone;
            that.list[10].value=data.registAddress;
            that.list[11].value=data.liveAddress;
            that.list[12].value=data.acceptPersonName;
            that.list[13].value=data.acceptTime;
            that.list[14].value=data.endTime;
            that.list[15].value=data.overTime;
        }
        //部门名称
        function app_getDeptType(type, source) {
            var obj = "";
            $('.KpiTcbackG').remove();
            // var info = '<div class="KpiTcbackG" style="display:none;">'+
            //         '<div class="Tipscontent">'+
            //             '<p>处理部门</p>'+
            //             '<form style="padding:3% 5%;">'+
            //             '<div class="checkboxList">'+
            //
            //             '</div>'+
            //             '<div class="tc mt5">'+
            //                 '<span class="KpiFormBut">确定</span>'+
            //             '</div>'+
            //             '</form>'+
            //         '</div>'+
            //     '</div>';
            var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>处理部门</p><ul id="hear">' +
                '<li class="action"><a href="#fragment-1"><span>村、社区</span></a></li>' +
                '<li><a href="#fragment-2"><span>职能部门</span></a></li>' +
                '<li><a href="#fragment-3"><span>专业公司</span></a></li> </ul>' +
                '<div id="fragment-1" style="display: block;" class="checkboxList">'

                +
                '</div>' +
                '<div id="fragment-2" class="checkboxList2">' +
                '</div>' +
                '<div id="fragment-3" class="checkboxList3">' +
                '</div>' +
                '<div class="tc mt5">' +
                '<span class="KpiFormBut">确定</span>' +
                '</div>' +
                '</div>'

                +
                '</div>';

            $('#administrative_edit_page').append($(info));
            //$('#leader_one_html').html(info);
            $("#hear li").eq(0).listen("quickClick", function (e) {
                $("#hear li").removeClass("action");
                $("#hear li").eq(0).addClass("action");
                $("#fragment-2").hide();
                $("#fragment-3").hide();
                $("#fragment-1").show();
            })
            $("#hear li").eq(1).listen("quickClick", function (e) {

                $("#hear li").removeClass("action");
                $("#hear li").eq(1).addClass("action");
                $("#fragment-1").hide();
                $("#fragment-3").hide();
                $("#fragment-2").show();
            })
            $("#hear li").eq(2).listen("quickClick", function (e) {

                $("#hear li").removeClass("action");
                $("#hear li").eq(2).addClass("action");
                $("#fragment-1").hide();
                $("#fragment-2").hide();
                $("#fragment-3").show();
            })

            doPost("chooseDepartment.action", obj, function (data) {
                if (!isNull(data) && data.length > 0) {
                    var array = data;
                    for (var i = 0; i < array.length; i++) {
                        var info1;
                        var info2;
                        var info3;
                        window.doDeptArr = [];
                        if (array[i].deptTypeCode == "01") {
                            info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                '<span class="disI vm f14" style="margin-left:3%;">' + array[i].deptName + '</span>' +
                                ' </div>');
                            info1.data('lidata', array[i]);
                            info1.listen("quickClick", function (e) {

                                var isCheck = $(e.currentTarget).find('input').is(":checked");

                                var data = $(e.currentTarget).data("lidata");

                                if (!isCheck) { //false一开始未选中   true，已被选中
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    if (window.doDeptArr.length > 0) {
                                        var flag = null;
                                        for (var i = 0; i < window.doDeptArr.length; i++) {
                                            if (data.deptCode == window.doDeptArr[i].deptCode) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                        if (!flag) {
                                            window.doDeptArr.push(data);
                                        }
                                    } else {
                                        window.doDeptArr.push(data);
                                    }
                                } else { //去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for (var i = 0; i < window.doDeptArr.length; i++) {
                                        if (data.deptCode == window.doDeptArr[i].deptCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index != -1) {
                                        window.doDeptArr.splice(index, 1);
                                    }
                                }

                                //console.error("data:"+JSON.stringify(data))
                                console.error("window.doDeptArr:" + JSON.stringify(window.doDeptArr))

                            });
                        } else if (array[i].deptTypeCode == "02") {
                            info2 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                '<span class="disI vm f14" style="margin-left:3%;">' + array[i].deptName + '</span>' +
                                ' </div>');
                            info2.data('lidata1', array[i]);
                            info2.listen("quickClick", function (e) {

                                var isCheck = $(e.currentTarget).find('input').is(":checked");

                                var data = $(e.currentTarget).data("lidata1");

                                if (!isCheck) { //false一开始未选中   true，已被选中
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    if (window.doDeptArr.length > 0) {
                                        var flag = null;
                                        for (var i = 0; i < window.doDeptArr.length; i++) {
                                            if (data.deptCode == window.doDeptArr[i].deptCode) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                        if (!flag) {
                                            window.doDeptArr.push(data);
                                        }
                                    } else {
                                        window.doDeptArr.push(data);
                                    }
                                } else { //去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for (var i = 0; i < window.doDeptArr.length; i++) {
                                        if (data.deptCode == window.doDeptArr[i].deptCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index != -1) {
                                        window.doDeptArr.splice(index, 1);
                                    }
                                }

                                //console.error("data:"+JSON.stringify(data))
                                console.error("window.doDeptArr:" + JSON.stringify(window.doDeptArr))

                            });
                        } else if (array[i].deptTypeCode == "03") {
                            info3 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                '<span class="disI vm f14" style="margin-left:3%;">' + array[i].deptName + '</span>' +
                                ' </div>');
                            info3.data('lidata2', array[i]);
                            info3.listen("quickClick", function (e) {

                                var isCheck = $(e.currentTarget).find('input').is(":checked");

                                var data = $(e.currentTarget).data("lidata2");

                                if (!isCheck) { //false一开始未选中   true，已被选中
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    if (window.doDeptArr.length > 0) {
                                        var flag = null;
                                        for (var i = 0; i < window.doDeptArr.length; i++) {
                                            if (data.deptCode == window.doDeptArr[i].deptCode) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                        if (!flag) {
                                            window.doDeptArr.push(data);
                                        }
                                    } else {
                                        window.doDeptArr.push(data);
                                    }
                                } else { //去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for (var i = 0; i < window.doDeptArr.length; i++) {
                                        if (data.deptCode == window.doDeptArr[i].deptCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index != -1) {
                                        window.doDeptArr.splice(index, 1);
                                    }
                                }

                                //console.error("data:"+JSON.stringify(data))
                                console.error("window.doDeptArr:" + JSON.stringify(window.doDeptArr))

                            });
                        }

                        $('#administrative_edit_page').find('.checkboxList').append(info1);
                        $('#administrative_edit_page').find('.checkboxList2').append(info2);
                        $('#administrative_edit_page').find('.checkboxList3').append(info3);
                    }
                    //确定按钮
                    $('#administrative_edit_page').find('.KpiFormBut').listen("quickClick", function (e) {
                        var str = '';
                        if (window.doDeptArr.length > 0) {
                            for (var i = 0; i < window.doDeptArr.length; i++) {
                                if (i == window.doDeptArr.length - 1) {
                                    str += window.doDeptArr[i].deptName;
                                } else {
                                    str += window.doDeptArr[i].deptName + ',';
                                }
                            }
                        }
                        $('#administrative_edit_page').find('.KpiTcbackG').hide();
                        $("#case_doDept").val(str);

                    });
                    $('#administrative_edit_page').find('.KpiTcbackG').show();

                } else {
                    toast(data.message);
                }
            }, "", "");
        }
        //上报

        function appWorkOrder_leaderOrderReport(componentIdNo, problem, deadline, reportTime, doDeptArr) {
            var doDeptStr = "";
            if (doDeptArr.length > 0) {
                for (var i = 0; i < doDeptArr.length; i++) {
                    if (i == doDeptArr.length - 1) {
                        doDeptStr += doDeptArr[i].deptCode;
                    } else {
                        doDeptStr += doDeptArr[i].deptCode + ';';
                    }
                }
            }
            console.error("zhangsan::" + JSON.stringify(window.doDeptArr));
            console.error("zhangsan::" + doDeptStr);

            console.log("上传的图片信息：" + window.picture_upImg + "经纬度：" + window.choiceLongitude + "," + window.choiceLatitude);
            var obj = "";
            obj += toJson("origin", "0") + "&"; //工单来源 4:巡查人员上报
            obj += toJson("loginId", window.localStorage.loginId) + "&"; //工单来源 4:巡查人员上报 
            obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&"; //职能事项
            obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&"; //大类
            obj += toJson("smallClass", $.trim(window.choiceSmallType)) + "&"; //小类类 
            obj += toJson("problem", $.trim(problem)) + "&"; //问题描述
            obj += toJson("reportPics", window.picture_upImg) + "&"; //图片 
            obj += toJson("reportTime", $.trim(reportTime)) + "&"; //上报时间
            obj += toJson("deadLine", $.trim(deadline)) + "&";; //截止时间
            obj += toJson("gridId", doDeptStr); //处置部门
            doPost("LeaderCaseReport.action", obj, function (data) {
                window.leadercommitFlag = 0;
                $("#save_handle_leader").removeClass("gray_gray_background");
                $("#save_handle_leader").addClass("orange_background");
                if (data.code == 0) {
                    toast(data.message);
                    cleadCaseEdit();
                    window.thisCaseQueryType = "1";
                    window.CaseWelcomePage = "";
                    waitJumpPage("../leaderOrder/leaderList.html");
                } else {
                    toast(data.message);
                }
            }, "", "");
        }
    }

}
</script>

<style lang="less">
#administrative_edit_page .page_header .right_img {
    width: 2em;
    top: 0.2em;
}

/*img start*/
#administrative_edit_page .commodityAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#administrative_edit_page .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}

#administrative_edit_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}

#administrative_edit_page .delimg {
    width: 2em;
    height: 2em;
    position: relative;
    top: 0em;
    left: 5em;
}

#administrative_edit_page #leader_handle_edit_img {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}

#administrative_edit_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}

/*img end*/
#administrative_edit_page .div_input_value_img {
    width: 1.5em;
    height: 1.5em;
    padding-right: 0.5em;
}

/*复选框样式*/
.KpiTcbackG {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.5);
}

.KpiTcbackG .Tipscontent {
    width: 81%;
    margin: 40% auto 0;
    background: #fff;
    border-radius: 6px;
    padding: 5%;
    height: 350px;
    overflow-y: auto;
}

.webkit-appearance {
    -webkit-appearance: checkbox !important;
}

.disI {
    display: inline-block;
}

.vm {
    vertical-align: middle;
}

.f14 {
    font-size: 14px;
}

.KpiFormBut {
    width: 30%;
    background: #f5a035;
    padding: 1.5%;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
}

.tc {
    text-align: center;
}

.mt5 {
    margin-top: 5%;
}

/*复选框样式end*/
#hear {
    width: 100%;
    height: 44px;
    line-height: 45px;
    border-bottom: 1px solid #cccccc;
}

#hear li {
    text-align: center;
    width: 33%;
    float: left;
}

#fragment-1,
#fragment-2,
#fragment-3 {
    width: 100%;
    display: none;
    text-align: left;
    margin-left: 22px;
    margin-top: 12px;
}

.action {
    border-bottom: 2px solid red;
    height: 43px;
}
</style>
