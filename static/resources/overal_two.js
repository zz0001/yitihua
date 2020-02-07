/**
 * 走访企业记录
 * @param row_id
 * @param businessLeaderPosition 职务
 * @param currentSales 销售额
 * @param currentTaxAmount 纳税额
 * @param projectedSales 预计销售额
 * @param problemsAndAppeals 企业问题及诉求
 * @param problemsAndAppealsSolution 诉求解决情况
 * @param enterpriseSuggestion 企业建议
 * @param suggestionSolved 建议解决情况
 */
function visitingEnterprise(row_id, businessLeaderPosition, currentSales, currentTaxAmount, projectedSales, problemsAndAppeals, problemsAndAppealsSolution, enterpriseSuggestion, suggestionSolved) {
    if (isNull(businessLeaderPosition)) {
        toast("请输入负责人职务");
    } else if (isNull(window.visitIndustryTypeId)) {
        toast("请选择产业类型");
    } else if (isNull(currentSales)) {
        toast("请输入本年销售额");
    } else if (isNull(currentTaxAmount)) {
        toast("请输入本年纳税额");
    } else if (isNull(projectedSales)) {
        toast("请输入明年预计销售额");
    } else if (isNull(problemsAndAppeals)) {
        toast("请输入企业问题及诉求");
    } else if (isNull(problemsAndAppealsSolution)) {
        toast("请输入问题及诉求解决情况");
    } else if (isNull(enterpriseSuggestion)) {
        toast("请输入企业建议");
    } else if (isNull(suggestionSolved)) {
        toast("请输入建议解决情况");
    } else {
        var obj = "";
        obj += toJson("row_id", row_id) + "&";
        obj += toJson("phone", $.trim(window.localStorage.userPhone)) + "&";
        obj += toJson("userName", $.trim(window.localStorage.userName)) + "&";
        if (isNull(row_id)) {
            obj += toJson("registerAddress", window.localStorage.columnCityNameId) + "&";//登记处
        } else {
            obj += toJson("registerAddress", window.houseEditRegisterAddressId) + "&";//登记处
        }
        obj += toJson("floor", $.trim(window.housefloor_code)) + "&";//楼层
        obj += toJson("areaId", $.trim(window.house_edit_shequ_code)) + "&";//区域
        obj += toJson("isZj", $.trim(window.house_edit_mediation_code)) + "&";//是否中介
        obj += toJson("lxPhone", $.trim(phone)) + "&";
        obj += toJson("spType", $.trim(window.house_edit_shopsType_code)) + "&";//商铺类型
        obj += toJson("cfType", $.trim(window.house_edit_workshopType_code)) + "&";//厂房类型
        obj += toJson("xzlType", $.trim(window.house_edit_office_code)) + "&";//写字楼类型
        obj += toJson("lxUserName", $.trim(name)) + "&";
        obj += toJson("userId", window.localStorage.userId);
        doPost("xfz_houseWantedEdit.action", obj, function (data) {
            if (data.code == 0) {
                app.$router.push("../visit/visitWelcomeList.html");
            } else {
                toast(data.message);
            }
        }, "", "");
    }
}
/**
 * 走访农户记录
 * @param row_id
 * @param age 年龄
 * @param workUnit 工作单位
 * @param respondentsPhone 联系电话
 * @param address 农户地址
 * @param appeal 诉求
 * @param appealNo 诉求数量
 * @param solveNo 解决问题个数
 * @param solovedProblemsDescription 解决问题描述
 */
function visitingEnterprise(row_id, age, workUnit, respondentsPhone, address, appeal, appealNo, solveNo, solovedProblemsDescription) {
    if (isNull(age)) {
        toast("请输入年龄");
    } else if (isNull(workUnit)) {
        toast("请输入工作单位");
    } else if (isNull(respondentsPhone)) {
        toast("请输入联系电话");
    } else if (isNull(address)) {
        toast("请输入农户住址");
    } else if (isNull(appeal)) {
        toast("请输入诉求");
    } else if (isNull(appealNo)) {
        toast("请输入诉求数量");
    } else if (isNull(problemsAndAppealsSolution)) {
        toast("请选择问题分类");
    } else if (isNull(solveNo)) {
        toast("请输入解决问题个数");
    } else if (isNull(solovedProblemsDescription)) {
        toast("请输入解决问题描述");
    } else {
        var obj = "";
        obj += toJson("row_id", row_id) + "&";
        obj += toJson("phone", $.trim(window.localStorage.userPhone)) + "&";
        obj += toJson("userName", $.trim(window.localStorage.userName)) + "&";
        if (isNull(row_id)) {
            obj += toJson("registerAddress", window.localStorage.columnCityNameId) + "&";//登记处
        } else {
            obj += toJson("registerAddress", window.houseEditRegisterAddressId) + "&";//登记处
        }
        obj += toJson("floor", $.trim(window.housefloor_code)) + "&";//楼层
        obj += toJson("areaId", $.trim(window.house_edit_shequ_code)) + "&";//区域
        obj += toJson("isZj", $.trim(window.house_edit_mediation_code)) + "&";//是否中介
        obj += toJson("lxPhone", $.trim(phone)) + "&";
        obj += toJson("spType", $.trim(window.house_edit_shopsType_code)) + "&";//商铺类型
        obj += toJson("cfType", $.trim(window.house_edit_workshopType_code)) + "&";//厂房类型
        obj += toJson("xzlType", $.trim(window.house_edit_office_code)) + "&";//写字楼类型
        obj += toJson("lxUserName", $.trim(name)) + "&";
        obj += toJson("userId", window.localStorage.userId);
        doPost("xfz_houseWantedEdit.action", obj, function (data) {
            if (data.code == 0) {
                app.$router.push("../visit/visitWelcomeList.html");
            } else {
                toast(data.message);
            }
        }, "", "");
    }
}
/**
 * 问题上报
 * @param row_id
 * @param address
 * @param problem
 */
function appWorkOrder_workOrderReport(componentIdNo, address, problem, reportTime, deadline) {
    console.log("上传的图片信息：" + window.picture_upImg + "经纬度：" + window.choiceLongitude + "," + window.choiceLatitude);
    var obj = "";
    obj += toJson("origin", "4") + "&";//工单来源 4:巡查人员上报
    obj += toJson("componentIdNo", $.trim(componentIdNo)) + "&";//部件编号
    obj += toJson("gridId", $.trim(window.choiceOneGridId)) + "&";//所属网格
    obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";//职能事项
    obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";//大类
   // obj += toJson("smallClass", $.trim(window.choiceSmallType)) + "&";//小类类
    obj += toJson("loginId", $.trim(window.localStorage.loginId)) + "&";//上报人
    obj += toJson("reportPersonPhone", $.trim(window.localStorage.userPhone)) + "&";//上报人联系方式
    obj += toJson("location", $.trim(address)) + "&";//位置描述
    obj += toJson("problem", $.trim(problem)) + "&";//问题描述
    obj += toJson("reportPics", window.picture_upImg) + "&";//图片
    obj += toJson("longitude", $.trim(window.choiceLongitude)) + "&";//经度
    obj += toJson("latitude", $.trim(window.choiceLatitude)) + "&";//纬度
    obj += toJson("reportTime", $.trim(reportTime)) + "&";//上报时间
    obj += toJson("deadline", $.trim(deadline));//截止时间
    doPost("MobileCaseReport.action", obj, function (data) {
    	window.commitFlag=0;
    	$("#save_returnAddress").removeClass("gray_gray_background");
    	$("#save_returnAddress").addClass("orange_background");
        if (data.code == 0) {
            toast(data.message);
            cleadCaseEdit();
            window.thisCaseQueryType = "1";
            window.CaseWelcomePage = "";
            waitJumpPage("../case/caseList.html");
        } else {
            toast(data.message);
        }
    }, "", "");
}

/**
 * 修改密码
 * @param oldpwd 原密码
 * @param newpwd 新密码
 */
function appWorkOrder_changePassword(oldpwd, newpwd) {
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("passwordOld", $.trim(oldpwd)) + "&";
    obj += toJson("newPassword", $.trim(newpwd));
    doPost("app_changePassword.action", obj, function (data) {
        if (data.code == 0) {
            toast(data.message);
            waitJumpPage("../more/moreWelcome.html");
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 工单处理
 * @param comment
 */
function appWorkOrder_workOrderProcess(comment) {
    console.log("上传的图片信息：" + window.picture_upImg);

//    var file="";
//    var fileType="";
//    if(window.caseUploadPath){
//    	file=window.caseUploadPath;
//    	fileType=window.casefileType;
//    }
    var area=$('input[name="area"]:checked').val();
    if(window.localStorage.currarea=="0"){
    	area="0";
    }
    //alert(window.picture_upImg);
    var obj = "";
    obj += toJson("comment", comment) + "&";//意见
    obj += toJson("pics", $.trim(window.picture_upImg)) + "&";//t图片，;号分割
    obj += toJson("taskId", $.trim(window.caseTaskOneTaskId)) + "&";//任务的id
  //  obj += toJson("nxtPerson", $.trim(window.caseOneTaskPeopleId)) + "&";//下一步执行的人
    obj += toJson("opValue", $.trim(window.caseOneTaskAction.opValue)) + "&";//下一流转的条件
 //   obj += toJson("destId", $.trim(window.caseOneTaskAction.destId)) + "&";//下一节点的id
    obj += toJson("delayNum", $.trim(window.choiceDelayAddTime)) + "&";//延期时长
    obj += toJson("rowId", $.trim(window.caseRow_id)) + "&";//业务表id
    obj += toJson("dealPerson", $.trim(window.selectsum)) + "&";
    obj += toJson("leaderId", $.trim(window.leaderId)) + "&";
    obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";
    obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";
    obj += toJson("area", $.trim(area)) + "&";
  //  obj += toJson("file", $.trim(file)) + "&";//flie
  //  obj += toJson("fileType", $.trim(fileType)) + "&";//filetype
    obj += toJson("loginId", $.trim(window.localStorage.loginId));
    doPost("dsbOrderProcess.action", obj, function (data) {
        if (data.code == 0) {
            toast(data.message);
            window.thisCaseQueryType = "1";
            window.CaseWelcomePage = "";
            waitJumpPage("../hscasetask/waitTodoCaseList.html");
        } else {
            toast(data.message);
        }
    }, "", "");

}


/**
 * 部件上报
 * @param row_id
 * @param address
 * @param problem
 */
function app_componentEdit(row_id, componentName, startDate, changeDate, address, note) {
    if (isNull($.trim(componentName))) {
        toast("请输入部件名称");
    } else if (isNull($.trim(window.partStatuId))) {
        toast("请选择部件状态");
    } else if (isNull($.trim(window.choiceOneGridId))) {
        toast("请选择所属网格");
    } else if (isNull($.trim(window.choiceBigType))) {
        toast("请选择部件大类");
    } else if (isNull($.trim(window.choiceSmallType))) {
        toast("请选择部件小类");
    } else if (isNull($.trim(window.choiceManageDeptCode))) {
        toast("请选择主管部门");
    } else if (isNull($.trim(window.choiceOwnershipDeptCode))) {
        toast("请选择权属单位");
    } else if (isNull(window.choiceOneDataSourceId)) {
        toast("请选择数据来源")
    } else if (isNull($.trim(startDate))) {
        toast("请选择初始日期");
    } else if (isNull($.trim(address))) {
        toast("请选择地址");
    } else {
        var obj = "";
        obj += toJson("row_id", row_id) + "&";
        obj += toJson("userId", window.localStorage.userId) + "&";
        obj += toJson("componentName", $.trim(componentName)) + "&";
        obj += toJson("componentState", $.trim(window.partStatuId)) + "&";
        obj += toJson("deptCode", $.trim(window.choiceOneGridId)) + "&";
        obj += toJson("bigType", $.trim(window.choiceBigType)) + "&";
        obj += toJson("smallType", $.trim(window.choiceSmallType)) + "&";
        if (!isNull(row_id)) {
            obj += toJson("oldDeptId", $.trim(window.oldDeptId)) + "&";
            obj += toJson("oldTypeBigId", $.trim(window.oldTypeBigId)) + "&";
            obj += toJson("oldTypeSmallId", $.trim(window.oldTypeSmallId)) + "&";
        }
        obj += toJson("manageDeptCode", $.trim(window.choiceManageDeptCode)) + "&";
        obj += toJson("manageDeptName", $.trim(window.choiceManageDeptName)) + "&";
        obj += toJson("ownershipDeptCode", $.trim(window.choiceOwnershipDeptCode)) + "&";
        obj += toJson("ownershipDeptName", $.trim(window.choiceOwnershipDeptName)) + "&";
        obj += toJson("conserveDeptCode", $.trim(window.choiceConserveDeptCode)) + "&";
        obj += toJson("conserveDeptName", window.choiceconserveDeptName) + "&";
        obj += toJson("dataSource", $.trim(window.choiceOneDataSourceId)) + "&";
        obj += toJson("startDate", startDate) + "&";
        obj += toJson("changeDate", changeDate) + "&";
        obj += toJson("longitude", window.choiceLongitude) + "&";
        obj += toJson("latitude", window.choiceLatitude) + "&";
        obj += toJson("address", address) + "&";
        obj += toJson("note", note);
        doPost("app_componentEdit.action", obj, function (data) {
            if (data.code == 0) {
                waitJumpPage("../parts/myPartsList.html");
            } else {
                toast(data.message);
            }
        }, "", "");
    }
}

/**
 * 巡查上报
 * @param row_id
 * @param address 地址
 * @param problem 备注
 */
function patrolReport(row_id, address, problem) {
    if (isNull(address)) {
        toast("请选择地址");
    } else if (isNull(problem)) {
        toast("请输入备注");
    } else {
        var obj = "";
        obj += toJson("row_id", $.trim(window.patrolDetailId)) + "&";
        obj += toJson("picture", $.trim(window.picture_upImg)) + "&";
        obj += toJson("longitude", $.trim(window.choiceLongitude)) + "&";//经度
        obj += toJson("latitude", $.trim(window.choiceLatitude)) + "&";//纬度
        obj += toJson("location", $.trim(address)) + "&";//区域
        obj += toJson("remark", $.trim(problem)) + "&";//是否中介
        obj += toJson("userId", window.localStorage.userId) + "&";
        obj += toJson("state", window.patrolState);
        console.log(obj)
        doPost("app_patrolReport.action", obj, function (data) {
            console.log(JSON.stringify(data))
            if (data.code == 0) {
                window.patrolWelcomePage = "";
                window.thisPatrolPage = "";
                app.$router.push("../patrol/patrolWelcomeList.html");
            } else {
                toast(data.message);
            }
        }, "", "");
    }
}
/**
 * 开始结束巡查
 * @param operation 1开始；2结束
 */
function startOrFinish(operation) {
    var obj = "";
    obj += toJson("operation", operation) + "&";
    obj += toJson("row_id", $.trim(window.patrolDetailId)) + "&";
    obj += toJson("userId", window.localStorage.userId);
    doPost("app_startOrFinish.action", obj, function (data) {
        if (data.code == 0) {
            if (2 == parseInt(operation)) {
                window.patrolWelcomePage = "";
                window.thisPatrolPage = "";
                toast("本次巡查结束");
                waitJumpPage("../patrol/patrolWelcomeList.html");
            } else {
                toast("巡查开始");
                waitJumpPage("../patrol/patrolReport.html");
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}

/**
 * 走访企业编辑
 * @param row_id
 * @param businessLeaderPosition 负责人职务
 * @param currentSales 本年销售
 * @param currentTaxAmount 本年纳税
 * @param projectedSales 明年预计销售
 * @param problemsAndAppeals 企业问题及诉求
 * @param problemsAndAppealsSolution 问题及诉求解决情况
 * @param enterpriseSuggestion 企业建议
 * @param suggestionSolved 建议解决情况
 */
function app_saveEnterpriseInfo(row_id, businessLeaderPosition, currentSales, currentTaxAmount, projectedSales, problemsAndAppeals, problemsAndAppealsSolution, enterpriseSuggestion, suggestionSolved) {
    console.log("上传的图片信息：" + window.picture_upImg);
    var obj = "";
    obj += toJson("enterpriseId", $.trim(window.visitWelcomeTaskInfo.id)) + "&";//企业Id
    obj += toJson("enterpriseName", $.trim(window.visitWelcomeTaskInfo.name)) + "&";//企业名称
    obj += toJson("businessLeader", $.trim(window.enterpriseBasicInformation.legalRepresentative)) + "&";//企业负责人
    obj += toJson("businessLeaderPosition", $.trim(businessLeaderPosition)) + "&";//企业负责人职务
    obj += toJson("businessLeaderPhone", $.trim(window.enterpriseBasicInformation.legalPersonContact)) + "&";//企业负责人手机
    obj += toJson("businessScope", $.trim(window.enterpriseBasicInformation.industryOwned)) + "&";//企业经营范围
    obj += toJson("address", $.trim(window.enterpriseBasicInformation.address)) + "&";//企业详细地址
    obj += toJson("gridId", $.trim(window.enterpriseBasicInformation.gridId)) + "&";//所属镇(街)
    obj += toJson("gridName", $.trim(window.enterpriseBasicInformation.gridName)) + "&";//所属镇(街)
    obj += toJson("workerNo", $.trim(window.enterpriseBasicInformation.scale)) + "&";//企业规模
    obj += toJson("currentSales", parseFloat(currentSales).toFixed(1)) + "&";//本年销售额 一位小数
    obj += toJson("currentTaxAmount", parseFloat(currentTaxAmount).toFixed(1)) + "&";//本年纳税额 一位小数
    obj += toJson("projectedSales", parseFloat(projectedSales).toFixed(1)) + "&";//明年预计销售额 一位小数
    obj += toJson("problemsAndAppeals", problemsAndAppeals) + "&";//企业问题及诉求
    obj += toJson("problemsAndAppealsSolution", problemsAndAppealsSolution) + "&";//问题及求诉解决情况
    obj += toJson("enterpriseSuggestion", enterpriseSuggestion) + "&";//企业建议
    obj += toJson("suggestionSolved", suggestionSolved) + "&";//建议解决情况
    obj += toJson("visitorId", window.localStorage.userId) + "&";//建议解决情况
    obj += toJson("visitPic", $.trim(window.picture_upImg)) + "&";//走访图片
    obj += toJson("visitorTime", window.visitWelcomeTaskInfo.allocationTime) + "&";//产业类型
    obj += toJson("industryType", window.visitIndustryTypeId) + "&";//调查时间
    obj += toJson("taskId", window.visitWelcomeTaskId);//任务id
    doPost("app_saveEnterpriseInfo.action", obj, function (data) {
        if (data.code == 0) {
            window.VisitWelcomePage = "";
            window.thisCheckVisitType = "1";
            app_sendTask(3);
            waitJumpPage("../visit/visitWelcomeList.html");
        } else {
            toast(data.message);
        }
    }, "", "");
}

/**
 * 走访农户
 * @param row_id
 * @param age 年龄
 * @param workUnit 工作单位
 * @param respondentsPhone 联系电话
 * @param address 农户住址
 * @param appeal 诉求
 * @param appealNo 诉求数量
 * @param solveNo problemsType
 * @param solveNo 解决问题个数
 * @param solovedProblemsDescription 解决问题描述
 */
function app_saveFarmerInfo(row_id, age, workUnit, respondentsPhone, address, appeal, appealNo, problemsType, solveNo, solovedProblemsDescription) {
    console.log("上传的图片信息：" + window.picture_upImg);
    var obj = "";
    obj += toJson("taskId", row_id) + "&";
    obj += toJson("visitorId", $.trim(window.localStorage.userId)) + "&";//走访人姓名
    obj += toJson("visitorName", $.trim(window.visitWelcomeTaskInfo.allocationUserId)) + "&";//走访人姓名
    obj += toJson("workUnit", $.trim(workUnit)) + "&";//工作单位
    obj += toJson("name", $.trim(window.visitWelcomeTaskInfo.taskName)) + "&";//农户姓名
    obj += toJson("address", $.trim(window.visitWelcomeTaskInfo.address)) + "&";//农户住址
    obj += toJson("age", parseInt(age)) + "&";//年龄
    obj += toJson("respondentsPhone", $.trim(respondentsPhone)) + "&";//被访人联系电话
    obj += toJson("appeal", $.trim(appeal)) + "&";//梳理诉求
    obj += toJson("appealNo", $.trim(appealNo)) + "&";//诉求数量
    obj += toJson("problemsType", $.trim(problemsType)) + "&";//问题分类
    obj += toJson("visitPic", $.trim(window.picture_upImg)) + "&";//走访图片
    obj += toJson("solveNo", $.trim(solveNo)) + "&";//解决问题个数
    obj += toJson("solovedProblemsDescription", solovedProblemsDescription);//解决问题描述
    doPost("app_saveFarmerInfo.action", obj, function (data) {
        if (data.code == 0) {
            window.VisitWelcomePage = "";
            window.thisCheckVisitType = "1";
            app_sendTask(3);
            waitJumpPage("../visit/visitWelcomeList.html");
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 直接拍照
 */
function getPhotograph() {
    var html='<div class="max-dialog">'
            +   '<div class="max-dialog-masker"></div>'
            +   '<div style="position:absolute;width:100%;bottom:0;text-align:center;background:#fff;">'
            +       '<div style="padding:15px;border-bottom:solid 1px #eee;" class="btn1">拍照</div>'
            +       '<div style="padding:15px;" class="btn2">相册</div>'
            +   '</div>'
            +'</div>';
    var $html=$(html).appendTo('.ui-page-active');
    $html.find(".max-dialog-masker").click(function () {
        $html.remove();
    });
    $html.find(".btn1").click(function () {
        navigator.camera.getPicture(getOnlyPhoto, userPicFail, {
            //destinationType: Camera.DestinationType.DATA_URL
        });
        $html.remove();
    });
    $html.find(".btn2").click(function () {
        navigator.camera.getPicture(getOnlyPhoto, userPicFail, {
            //destinationType: Camera.DestinationType.DATA_URL
            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
        });
        $html.remove();
    });

}
/*图片相关方法*/
function userPicFail() {
    //window.history.back();
}
function getCheckPhoto() {
    navigator.camera.getPicture(checkPicSucessNotCut, userPicFail, {
        //quality:20,
        //saveToPhotoAlbum:true
    });
}

/**
 * 获取图片长度
 * @param scrollid
 * @param wrapper
 * @param array
 * @param id
 */
function imgWidth(scrollid, wrapper, array, id) {
    console.log(scrollid + "\t," + wrapper);
    if (array > 2) {
        $("#" + scrollid)[0].style.width = 185 + "%";

        $("#" + id)[0].style.width = 185 + "%";
        initScroll({
            "wrapper": wrapper,
            "dir": "x",
            "bounce": true,
            "scrollBar": true
        });
    } else {
        $("#" + scrollid)[0].style.width = window.localInnerWidth + "px";
        $("#" + id)[0].style.width = 160 + "%";
        initScroll({
            "wrapper": wrapper,
            "dir": "x",
            "bounce": true,
            "scrollBar": true
        });
    }

}
function checkPicSucessNotCut(url) {
    compressImage(url, 300, function (base64) {
        $("#" + window.upload_addimg).empty();
        app_inspectFeedUpLoadPic(base64, window.upload_addimg_id);
    });
}
/*获取图片的成功回调*/
function getOnlyPhoto(url) {
    console.log("开始调用方法：" + url);
    compressImage(url, 300, function (base64) {
        console.log("获取到了图片");
        if (!isNull(window.picture_array) && window.picture_array.length > 0) {
            //拍非第一张图片
            var leng = window.picture_array.length;
            window.picture_array[leng] = base64;
            var commodity_add_img_info = ' <div class="imgdiv">';
            commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
            commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
            commodity_add_img_info += '</div>';
            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array.length, window.upload_addimg);
            $("#good_num").val(window.picture_array.length + "/5");
            var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
            var $add_img = "";
            if (window.picture_array.length > 4) {
                $("#" + window.upload_addimg + " #choicemore").remove();
            } else {
                var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/static/resources/images/icon_add_photo.png" id="choicemore">';
                $("#" + window.upload_addimg + " #choicemore").remove();
                $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                $add_img.click(function (e) {
                    getPhotograph();
                });
            }
            $commodity_add_img_info.data('data', window.picture_array[leng]);
            $commodity_add_img_info.listen("quickClick", function (e) {
                //点击事件
                var data = $(e.currentTarget).data("data");
                $(e.currentTarget).hide();
                //if (window.picture_array.length < 5) {
                var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/static/resources/images/icon_add_photo.png" id="choicemore">';
                $("#" + window.upload_addimg + " #choicemore").remove();
                var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                //  }
                $add_img.click(function (e) {
                    getPhotograph();
                });
                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array.length, window.upload_addimg);
                for (var i = 0; i < window.picture_array.length; i++) {
                    if (window.picture_array[i] == data) {
                        $("#good_num").val(window.picture_array.length - 1 + "/5");
                        window.picture_array.splice(i, 1);
                        $(".max-confirm2").remove();
                        break;
                    }
                }
            });
        } else {
            $("#" + window.upload_addimg).empty();
            console.log("第一张图片");
            //拍第一张图片
            window.picture_array = new Array();
            window.picture_array[0] = base64;
            var commodity_add_img_info = "";
            commodity_add_img_info += ' <div class="imgdiv">';
            commodity_add_img_info += '     <img class="delimg" src="/static/resources/images/del3.png">';
            commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
            commodity_add_img_info += ' </div>';
            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array.length, window.upload_addimg);
            var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
            $("#good_num").val(window.picture_array.length + "/5");
            var $add_img = "";
            if (window.picture_array.length < 4) {
                var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/static/resources/images/icon_add_photo.png" id="choicemore">';
                $("#" + window.upload_addimg + " #choicemore").remove();
                $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                $add_img.click(function (e) {
                    getPhotograph();
                });
            }

            $commodity_add_img.data('data', window.picture_array[0]);
            $commodity_add_img.listen("quickClick", function (e) {
                //点击事件
                var data = $(e.currentTarget).data("data");
                $(e.currentTarget).hide();
                //  if (window.picture_array.length < 5) {
                var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/static/resources/images/icon_add_photo.png" id="choicemore">';
                $("#" + window.upload_addimg + " #choicemore").remove();
                var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                //  }
                $add_img.click(function (e) {
                    getPhotograph();
                });
                for (var i = 0; i < window.picture_array.length; i++) {
                    if (window.picture_array[i] == data) {
                        window.picture_array.splice(i, 1);
                        $("#good_num").val(window.picture_array.length + "/5");
                        $(".max-confirm2").remove();
                        break;
                    }
                }
            });
        }
    });
    console.log("图片：" + window.picture_array);
}

/**
 *
 * @param typename 筛选查询标记
 * @param cleanfun 清空的信息
 * @param fun 点击的方法
 */
function titleScreenSearchHelp(typename, cleanfun, fun) {
    //window.soliciting_scroll_type = typename;
    cleanfun();
    if ($(".max-dialog").is(':visible') == true) {
        $(".jszx-bar-icon-up div p img").attr("src", "/static/resources/images/icon_gray_solid_down.png");
        $(".max-dialog").remove();
    } else {
        fun();
    }
}
/**
 * 确认检查项
 */
function setCheckTable(handleOpinions) {
    showAllAlert("请确认检查项", function () {
    }, "返回修改", function () {
        $("#all_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px";
        initScroll({
            "wrapper": "all_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }, "2", "确认上报", function () {
        //提交
        app_inspectFeedBack(window.checkWelcomeInfo.row_id, handleOpinions);
    });
    var firstNum = '';
    if (!isNull(window.errorCheckItemListy) && window.errorCheckItemListy.length > 0) {
        for (var i = 0; i < window.errorCheckItemListy.length; i++) {
            firstNum = i;
            var htmltitle = '';
            var html = '';
            if (i == 0) {
                htmltitle += '<p style="padding:1em 0em 1em 0.5em;background:#f7f7f7;">已违规</p>';
            }
            var $rowtitle = createListRow(htmltitle).appendTo($("#all_html_div"));
            html += '   <table class="inp_table" cellpadding="0" cellspacing="0">';
            html += '       <tr>';
            html += '          <td class="" style="padding:0.5em;">' + window.errorCheckItemListy[i].name + '</td>';
            html += '       </tr>';
            html += '       <tr>';
            html += '           <td colspan="2" class="commodityAddImgs" style="background: #ffffff;">';
            html += '               <div id="check_table_img_wrapper" class="jszx-wrapper">';
            html += '                   <div class="jszx-scroller" id="check_table_img_scroll">';
            html += '                       <div id="check_table_img">';
            html += '                          <img class="goodsimgone" style="padding-top:2em;" src="' + window.imgUrl + window.errorCheckItemListy[i].path + '">';
            html += '                       </div>';
            html += '                   </div>';
            html += '               </div>';
            html += '            </td>';
            html += '        </tr>';
            html += '     </table>';
            var $row = createListRow(html).appendTo($("#all_html_div"));
        }
        if (firstNum == (parseInt(window.errorCheckItemListy.length - 1)) && window.errorCheckItemListy.length != window.checkInspectTypeInfo.length) {
            //错误检查项
            var twohtmltitle = '    <p style="padding:1em 0em 1em 0.5em;background:#f7f7f7;">未违规</p>';
            var $rowtwotitle = createListRow(twohtmltitle).appendTo($("#all_html_div"));
            for (var j = 0; j < window.checkInspectTypeInfo.length; j++) {
                var info = "";
                for (var k = 0; k < window.errorCheckItemListy.length; k++) {
                    if (window.checkInspectTypeInfo[j].row_id == window.errorCheckItemListy[k].Row_id) {
                        info = "yes";
                    }
                    if (k == (parseInt(window.errorCheckItemListy.length) - 1) && isNull(info)) {
                        var twohtml = '    <table class="inp_table" cellpadding="0" cellspacing="0">';
                        twohtml += '       <tr>';
                        twohtml += '           <td class="gray_line_bottom" style="padding:0.5em;">' + window.checkInspectTypeInfo[j].name + '</td>';
                        twohtml += '       </tr>';
                        twohtml += '   </table>';
                        var $tworow = createListRow(twohtml).appendTo($("#all_html_div"));
                    }
                }
            }
        }
        //else {
        //    toast("没有违规项");
        //}
    } else {
        noListShow("", "没有违规项", "", $("#all_html_div"), "");
    }
}
/**
 * 检查
 * @param row_id
 * @param handleOpinions 备注
 */
function app_inspectFeedBack(row_id, handleOpinions, nextId) {
    console.log("上传的错误信息：" + JSON.stringify(window.errorCheckItemListy));
    var obj = "";
    obj += toJson("row_id", row_id) + "&";
    obj += toJson("handleOpinions", handleOpinions) + "&";//意见
    obj += toJson("flag", $.trim(window.checkTaskDetaillvl)) + "&";//状态：1下派，2同级指派，3反馈
    if (isNull($.trim(window.errorCheckItemListy))) {
        obj += toJson("pictures", "") + "&";
    } else {
        obj += toJson("pictures", JSON.stringify(window.errorCheckItemListy)) + "&";
    }
    obj += toJson("nextId", $.trim(nextId)) + "&";//指派人员的id
    obj += toJson("userId", window.localStorage.userId);
    doPost("app_inspectFeedBack.action", obj, function (data) {
        if (data.code == 0) {
            toast(data.message);
            window.CheckWelcomePage = "";
            window.thisCheckQueryType = 1;
            waitJumpPage("../check/checkWelcomeList.html");
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * d登录
 * @param name
 * @param pwd
 */
function app_userLogin(name, pwd) {
    var obj = "";
    obj += toJson("userName", DelUndefind(name)) + "&"; //用户名
    obj += toJson("passWord", $.md5(DelUndefind(pwd)));
    console.log("--------------"+obj);
    doPost("app_userLogin.action", obj, function (data) {
        if (data.code == 0) {
            console.log('xxx登陆成功，调用jpush');
         // cordova.plugins.StartActivity.setJpushAlias(name,function (data) {
            jsict.StartActivity.setJpushAlias(name,function (data) {
             console.log('jpush注册成功！');
                                                },function (error) {
                                                    console.log("startActivity error:" + error);
                                                });

            var data = data.datas[0];
            ////////////
            jsict.logininfo.save(function(res){
                                            console.log(res);
                                        },function(err){
                                            console.error(err);
                                        },data.userId);
                        		        jsict.logininfo.start(function(res){
                        		                      console.log(res);
                        		                  },function(err){
                        		                      console.error(err);
                        		                  });
//            if(data.userType==="03"||data.userType==="02"||data.userType==="05"||data.userType==="19"){
//                        	jsict.logininfo.save(function(res){
//                                console.log(res);
//                            },function(err){
//                                console.error(err);
//                            },data.userId);
//            		        jsict.logininfo.start(function(res){
//            		                      console.log(res);
//            		                  },function(err){
//            		                      console.error(err);
//            		                  });
//            }
            ////////////
            window.localStorage.userId = data.userId;
            window.localStorage.userName = data.userName;
            window.localStorage.loginId = data.loginId;
            if ("yes" == window.localStorage.yesOrNoRemberPwd) {
                console.log("记住了");
                window.localStorage.passWord = pwd;
            } else {
                console.log("不记住");
                window.localStorage.passWord = "";
            }
            window.localStorage.userPhone = data.phone;
            window.localStorage.deptId = data.deptId;
            window.localStorage.deptName = data.deptName;
            if (!isNull(data.pic)) {
                window.localStorage.userLogo = window.imgUrl + data.pic;
            } else {
                window.localStorage.userLogo = "";
            }
            window.localStorage.userType = data.userType;
            window.localStorage.userLoginState = data.userState;
            window.localStorage.signState = data.signState;
            window.localStorage.userTypeName = data.userTypeName;
            $("#userTypeName").text(data.userTypeName);


            app.$router.push("../load/welcome.html");

           /* var option = {
    	            "alias" : window.localStorage.loginId,
    	            "tags": 1
    	        };
    	        jsict.jpush.setAliasAndTags(function(res){
    	            console.log(res);
    	           // alert("success:"+res);
    	        },function(err){
    	            console.error(err);
    	          //  alert("err:"+res);
    	        },option);*/
//            var option = {
//                "alias" : data.loginId,
//                "tags":5
//            };
//            jsict.jpush.setAliasAndTags(function(res){
//                console.log(res);
//            },function(err){
//                console.error(err);
//            },option);

        } else {
            window.localStorage.clear();
            $("#login_username").val();
            $("#login_pwdinputtd").val();
            app.$router.push("../load/login.html");
            toast(data.message);
        }
    }, "", "");
}
/****华为桌面通知***/
/*function app_messageShow() {

	var num;
    var obj = "";
    var workrednum=0;
    var workrank=0;
    var rednotice=0;
    var centertasknum=0;
    var jsons = "";
	jsons += toJson("dealDeptId", window.localStorage.deptId);
    doPost("centerTaskSupervisionLogNum.action", jsons, function (data) {
    	console.log(data);
    	var supervisionLogNum=parseInt(data.num);
    	var obj = "";
        obj += toJson("userId", $.trim(window.localStorage.userId));
        doPost("appWorkOrder_todoTotalByType2.action", obj, function (data) {

        	workrednum = supervisionLogNum+data.datas.orderTotal;
                var obj2 = "";
                obj2 += toJson("userid", $.trim(window.localStorage.userId));
                doPost("readStatus.action", obj2, function (data) {
                	console.log(data)
                    	workrank = data.unreadnum;
                	 var obj3 = "";
                     obj3 += toJson("userid", $.trim(window.localStorage.userId));
                     doPost("readInformnoticeStatus.action", obj3, function (data) {
                    	 rednotice = data.unreadnum;
                    	 var obj = "";
                         obj += toJson("userid", $.trim(window.localStorage.userId));
                         doPost("centerTaskNum.action", obj, function (data) {
                        	 centertasknum = data.datas;

                        	 var leadobj = "";
                        	 leadobj += toJson("loginId", window.localStorage.loginId);
                             doPost("getCount.action", leadobj, function (data) {
                             	console.log(data)
                                 var leadtotal=parseInt(data.caseinfo)+parseInt(data.caseDepartmentCo)+parseInt(data.comLaw)
                                 if(window.localStorage.userType === "02"){
                                	 leadtotal=parseInt(data.caseDepartmentCo)+parseInt(data.comLaw);
                                 }
                                 var shownum=workrednum+workrank+rednotice+centertasknum+leadtotal;
                                 var option = {
                        	            "alias" : window.localStorage.loginId,
                        	            "tags": shownum
                        	        };
                        	        jsict.jpush.setAliasAndTags(function(res){
                        	            console.log(res);
                        	           // alert("success:"+res);
                        	        },function(err){
                        	            console.error(err);
                        	          //  alert("err:"+res);
                        	        },option);
                        	 console.log(shownum)


                             }, "");

                         }, "");
                     }, "");

                }, "");

        }, "");
    }, "");

}*/

function reportLocation(userId){
/*	var interval = 0;
	var self = this;
	var startTime = new Date().getTime();
	var count = 0
	var callback = function() {
		var bb=new Date().getTime();
	    count++;
	    var offset = new Date().getTime() - (startTime + count * 30000);
	    var nextTime = 30000 - offset;
	    if (nextTime < 0) {
	          nextTime = 0;
	    }
	    for (var i=0; i<=1000000000; i++) {

	    }

	    navigator.geolocation.getCurrentPosition(function (point) {
            console.log("定位成功")
            var geocode = new T.Geocoder();
            geocode.getLocation(new T.LngLat(point.coords.longitude, point.coords.latitude), function (result) {
                console.log("定位地址成功")
                //alert("定位上报成功")
                var obj = "";
                obj += toJson("userId", userId) + "&";
                obj += toJson("longitude", point.coords.longitude) + "&";
                obj += toJson("latitude", point.coords.latitude) + "&";
                obj += toJson("address", result.getAddress());
                console.log("定位参数:"+obj)
                doPost("app_userLocusEidt.action", obj, function (data) {
                	this.aa=new Date().getTime();
                    if (data.code == 0) {
                        console.log("定位上报成功")
                    } else {
                        console.log("定位上报失败")
                    }
                    console.log(this.aa-bb);
//                   setTimeout(callback, 30000-(this.aa-bb));
                    clearInterval(setTimeInterval);
                    setTimeInterval = window.setInterval(callback, 30000-(this.aa-bb));
                }, "", "");
            });
        }, function (error) {
            console.log(JSON.stringify(error))
        });
	  }
	callback();
	*/


  /*setInterval(function() {
		 console.log("定位开始")
	        navigator.geolocation.getCurrentPosition(function (point) {
	            console.log("定位成功")
	            var geocode = new T.Geocoder();
	            geocode.getLocation(new T.LngLat(point.coords.longitude, point.coords.latitude), function (result) {
	                console.log("定位地址成功")
	                var obj = "";
	                obj += toJson("userId", userId) + "&";
	                obj += toJson("longitude", point.coords.longitude) + "&";
	                obj += toJson("latitude", point.coords.latitude) + "&";
	                obj += toJson("address", result.getAddress());
	                console.log("定位参数:"+obj)
	                doPost("app_userLocusEidt.action", obj, function (data) {
	                    if (data.code == 0) {
	                        console.log("定位上报成功")
	                    } else {
	                        console.log("定位上报失败")
	                    }
	                }, "", "");
	            });
	        }, function (error) {
	            console.log(JSON.stringify(error))
	        });
	}, 30000)*/
}

/**
 *
 * @param name
 * @param userState 01在线，02离线
 */
function app_userSign(userState) {
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&"; //用户名
    obj += toJson("userState", userState);
    doPost("app_userSign.action", obj, function (data) {
        if (data.code == 0) {
            window.localStorage.userLoginState = userState;
            if ("01" == userState) {
                toast("签到成功");
            } else {
                toast("签退成功");
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}


/**
 * 删除
 * @param row_id
 * @param type
 */
function app_commonDelete(row_id, type) {
    var obj = "";
    obj += toJson("row_id", row_id) + "&";
    obj += toJson("type", type);
    doPost("app_commonDelete.action", obj, function (data) {
        if (data.code == 0) {
            switch (parseInt(type)) {
                case 1:
                    app_componentList(false, 1, "", window.localStorage.userId, "", "", "");
                    break;
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 工单图片上传（多张循环）
 * @param img
 * @param type
 * @param source 来源
 */
function appWorkOrder_upLoadPic(img, type, source) {
    var obj = "";
    obj += toJson("base64Str", img);
    doPost("app_publicOpinion_upPic.action", obj, function (data) {
        if (data.code == 0) {
            console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
            if (type < parseInt(window.picture_array.length)) {
                console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                var typename = parseInt(type) + 1;
                appWorkOrder_upLoadPic(window.picture_array[type], typename, source);
            } else {
                console.log("图片上传结束");
            }
            if (isNull(window.picture_upImg)) {
                window.picture_upImg = data.datas.path;
            } else {
                window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
            }

            //alert("图片数据：" + window.picture_upImg);
            toast(data.message);
            if (parseInt(type) == window.picture_array.length) {
                if (isNull(source)) {
                    //问题上报
                    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
                } else if ("caseTaskEdit" == source) {
                    //工单处理
                    appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                }
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 舆情图片上传
 * @param img
 * @param type
 */
function app_publicOpinion_upPic(img, type) {
    console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
    var obj = "";
    obj += toJson("base64Str", img);
    doPost("app_publicOpinion_upPic.action", obj, function (data) {
        if (data.code == 0) {
            if (type < parseInt(window.picture_array.length)) {
                console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                var typename = parseInt(type) + 1;
                app_publicOpinion_upPic(window.picture_array[type], typename);
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
                console.log("type和图片长度相等" + type);
                app_publicOpinionFeedBack($("#opinion_solve_problem").val());
            } else {
                console.log("type和图片长度不相等");
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 走访图片上传（多张循环）
 * @param img
 * @param type
 * @param taskType
 */
function app_upPic(img, type, taskType) {
    console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
    var obj = "";
    obj += toJson("base64Str", img) + "&";
    obj += toJson("taskType", taskType) + "&";
    doPost("app_upPic.action", obj, function (data) {
        if (data.code == 0) {
            if (type < parseInt(window.picture_array.length)) {
                console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                var typename = parseInt(type) + 1;
                app_upPic(window.picture_array[type], typename, taskType);
            } else {
                console.log("图片上传结束");
            }
            if (isNull(window.picture_upImg)) {
                window.picture_upImg = data.datas.path;
            } else {
                window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
            }
            console.log("当前type" + type + "；总共张数：" + window.picture_array.length)
            if (parseInt(type) == window.picture_array.length) {
                console.log("type和图片长度相等" + taskType);
                if (2 == parseInt(taskType)) {
                    //企业
                    console.log("企业信息");
                    app_saveEnterpriseInfo(window.visitWelcomeTaskId, $("#visit_enterprise_edit_businessLeaderPosition").val(), $("#visit_enterprise_edit_currentSales").val(), $("#visit_enterprise_edit_currentTaxAmount").val(), $("#visit_enterprise_edit_projectedSales").val(), $("#visit_enterprise_edit_problemsAndAppeals").val(), $("#visit_enterprise_edit_problemsAndAppealsSolution").val(), $("#visit_enterprise_edit_enterpriseSuggestion").val(), $("#visit_enterprise_edit_suggestionSolved").val());
                } else if (1 == parseInt(taskType)) {
                    //农户
                    console.log("农户信息");
                    app_saveFarmerInfo(window.visitWelcomeTaskId, $("#visit_farmer_edit_age").val(), $("#visit_farmer_edit_workUnit").val(), $("#visit_farmer_edit_respondentsPhone").val(), $("#visit_farmer_edit_address").val(), $("#visit_farmer_edit_appeal").val(), $("#visit_farmer_edit_appealNo").val(), $("#visit_farmer_edit_problemsType").val(), $("#visit_farmer_edit_solveNo").val(), $("#visit_farmer_edit_solovedProblemsDescription").val());
                }
            } else {
                console.log("type和图片长度不相等");
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 巡查图片上报
 * @param img
 * @param type
 * @param taskType
 */
function upPatrolPic(img, type) {
    console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
    var obj = "";
    obj += toJson("base64Str", img);
    doPost("app_upPatrolPic.action", obj, function (data) {
        if (data.code == 0) {
            if (type < parseInt(window.picture_array.length)) {
                console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                var typename = parseInt(type) + 1;
                upPatrolPic(window.picture_array[type], typename);
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
                patrolReport("", $("#patrol_report_address").html(), $("#patrol_report_problem").val());
            } else {
                console.log("type和图片长度不相等");
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 图片上传 单张
 * @param img
 * @param type
 */
function app_inspectFeedUpLoadPic(img, id) {
    var obj = "";
    obj += toJson("base64Str", img);
    doPost("app_inspectFeedUpLoadPic.action", obj, function (data) {
        if (data.code == 0) {
            console.log("数据部位空：" + JSON.stringify(window.errorCheckItemListy));
            var info = {
                "Row_id": id,
                "path": data.datas,
                "name": window.upload_addimg_name
            };
            window.errorCheckItemListy.push(info);
            window.upload_imgscroll = "check_table_img_scroll_" + id;
            window.upload_imgwrapper = "check_table_img_wrapper_" + id;
            window.upload_addimg = "check_table_img_" + id;
            window.upload_addimg_id = id;
            console.log("class为：" + $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().prop("class"));
            console.log("id为：" + $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().prop("id"));
            if ("/static/resources/images/icon_block_gray.png" == $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().find("tr:first-child td:first-child img").attr("src")) {
                $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().find("tr:first-child td:first-child img").attr("src", "/static/resources/images/icon_block_blue_press.png");

            } else {
                $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().find("tr:first-child td:first-child img").attr("src", "/static/resources/images/icon_block_gray.png");
            }
            var commodity_add_img_info = "";
            commodity_add_img_info += ' <div class="imgdiv">';
            commodity_add_img_info += '     <img class="delimg" src="/static/resources/images/del3.png">';
            commodity_add_img_info += '     <img class="goodsimgone" src="' + img + '">';
            commodity_add_img_info += ' </div>';
            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array.length, window.upload_addimg);
            var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
            $commodity_add_img.data('data', info);
            $commodity_add_img.listen("quickClick", function (e) {
                //点击事件
                var data = $(e.currentTarget).data("data");
                console.log("当前数据为：" + JSON.stringify(data));
                $(e.currentTarget).hide();
                var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/static/resources/images/icon_add_photo.png" id="choicemore_' + id + '">';
                $("#choicemore_" + id).remove();
                var $add_img = createListRow(add_img).appendTo("#check_table_img_" + id);
                $add_img.listen("quickClick", function (e) {
                    getCheckPhoto();
                });
                console.log("删除之前的数据：" + JSON.stringify(window.errorCheckItemListy));
                for (var i = 0; i < window.errorCheckItemListy.length; i++) {
                    if (window.errorCheckItemListy[i].Row_id == id) {
                        window.errorCheckItemListy.splice(i, 1);
                        console.log("class为：" + $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().prop("class"));
                        console.log("id为：" + $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().prop("id"));
                        $("#check_table_img_wrapper_" + id).parent().parent().parent().parent().find("tr:first-child td:first-child img").attr("src", "/static/resources/images/icon_block_gray.png");
                        $(".max-confirm2").remove();
                        break;
                    }
                }
                console.log("删除之后的数据：" + JSON.stringify(window.errorCheckItemListy));
            });
        } else {
            toast("失败");
            $("#choicemore_" + id).empty();
            toast(data.message);
        }
    }, "", "");
}
