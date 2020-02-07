/**
 * 赋值一维代码
 * @param  {[type]} type [类别1、服务半径  2、民族    3、通知类别  4、公共资源类别    5、留言类别  6、是否选择  7、男女选择8、学历9、婚姻状态10、事项类别11、政治面貌]14店铺级别16上架下架
 * @return {[type]}      [description]
 */
function app_getBaseType(type, source) {
    var obj = "";
    obj += toJson("type", type);
    doPost("app_getBaseType.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(data.datas) && array.length > 0) {
                if (isNull(source)) {
                    showChoiceOne();
                }
                for (var i = 0; i < array.length; i++) {
                    var info = '<p class="alert_edit_title gray_line_bottom">' + array[i].item_text + '</p>';
                    var $row;
                    if (isNull(source)) {
                        $row = createListRow(info).appendTo("#choice_one_html");
                    } else {
                        $row = createListRow(info).appendTo("#screen_content1");
                    }
                    $row.data('data', array[i]);
                    $row.listen("quickClick", function (e) {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        console.log("type:" + type);
                        switch (type) {
                            case 2:
                                //部件状态
                                window.partStatuName = data.item_text;
                                window.partStatuId = data.item_value;
                                $("#my_add_part_component_state").val(data.item_text);
                                break;
                            case 3:
                                //数据来源
                                window.choiceOneDataSourceId = data.item_value;
                                window.choiceOneDataSourceName = data.item_text;
                                $("#my_add_part_datasource").val(data.item_text);
                                break;
                            case 6:
                                //条线
                                window.lineTypeId = data.item_value;
                                window.lineTypeName = data.item_text;
                                $("#case_edit_orgin").val(data.item_text);
                                break;
                            case 7:
                                //产业类型
                                window.visitIndustryTypeId = data.item_value;
                                window.visitIndustryTypeName = data.item_text;
                                $("#visit_enterprise_edit_industryType").val(data.item_text);
                                break;
                            case 9:
                                //延期时长
                                window.choiceDelayAddTime = data.item_value;
                                window.choiceDelayAddTimeName = data.item_text;
                                $("#case_task_edit_addtime").val(data.item_text);
                                break;

                        }
                    });
                }
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 查询一维代码
 * @param type
 * @param source
 */
function searchApp_getBaseType(type, source) {
    var obj = "";
    obj += toJson("type", type);
    doPost("app_getBaseType.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(data.datas) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var info = "";
                    if (2 == parseInt(type) && window.partStatuId == array[i].item_value) {
                        info += '<p class="alert_edit_title gray_line_bottom oranger_font">' + array[i].item_text + '</p>';
                    } else {
                        info += '<p class="alert_edit_title gray_line_bottom">' + array[i].item_text + '</p>';
                    }
                    var $row;
                    $row = createListRow(info).appendTo("#screen_content1");
                    $row.data('data', array[i]);
                    $row.listen("quickClick", function (e) {
                        //点击事件
                        $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                        $(e.currentTarget).find("p").addClass("oranger_font");
                        var data = $(e.currentTarget).data("data");
                        console.log("type:" + type);
                        switch (parseInt(type)) {
                            case 2:
                                //部件状态
                                if ("allparts" == source) {
                                    //部件列表
                                    window.partTemporaryStatuId = data.item_value;
                                }
                                break;
                            case 3:
                                //数据来源
                                window.choiceOneDataSourceId = data.item_value;
                                window.choiceOneDataSourceName = data.item_text;
                                //window.choiceOneDataSourceId = data.item_value;
                                //window.choiceOneDataSourceName = data.item_text;
                                //$("#my_add_part_datasource").val(data.item_text);
                                break;
                            case 4:
                                //文档类型
                                window.fileTypeList = data.item_value;
                                //window.choiceOneDataSourceName = data.item_text;
                                //window.choiceOneDataSourceId = data.item_value;
                                //window.choiceOneDataSourceName = data.item_text;
                                //$("#my_add_part_datasource").val(data.item_text);
                                break;
                        }
                    });
                }
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 * 查询网格
 * @param type
 */
function app_findAllDeptByUser(type) {
    $("#provcity_discthtml").empty();
    var obj = "";
    obj += toJson("userId", $.trim(window.localStorage.userId));
    doPost("app_findAllDeptByUser.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            window.findAllDeptUserInfo = array;
            setMoreLevelFun(array, type);
            //if (!isNull(array) && array.length > 0) {
            //    //showChoiceOne();
            //
            //    for (var i = 0; i < array.length; i++) {
            //        var info = '<p class="smaller"style="padding:0em;margin:0em;text-align: left;margin-left:1em;">' + array[i].text + '</p>';
            //        //var info = '<p class="alert_edit_title gray_line_bottom">' + array[i].text + '</p>';
            //        var $row = createListRow(info).appendTo("#provcity_discthtml");
            //        $row.data('data', array[i]);
            //        $row.listen("quickClick", function (e) {
            //            //点击事件
            //            var data = $(e.currentTarget).data("data");
            //            console.log("第二次数据：" + JSON.stringify(data));
            //            //window.choiceOneGridId = data.id;
            //            //window.choiceOneGridName = data.text;
            //            //$("#my_add_part_deptcode").val(data.text);
            //            //$("#case_edit_gridCode").val(data.text);
            //        });
            //    }
            //}
        } else {
            toast(data.message);
        }
    }, "", "");
}

function setMoreLevelFun(array, type) {
    if (!isNull(array) && array.length > 0) {
        if ($("#screen_prov" + type).length > 0) {
            //存在
            console.log("content当前id存在，不可创建");
        } else {
            console.log("content当前id不存在，可创建");
            var namehtml = "<span style='padding-left:0em;padding-right:0.5em;'class='' id='screen_prov" + type + "'></span>";
            var $namehtml = createListRow(namehtml).appendTo("#screen_city_val");
            $namehtml.css("display", "inline-block");
            $namehtml.data('data', type);
            $namehtml.listen("quickClick", function (e) {
                console.log("类型：" + type);
                $("#provcity_discthtml div:first-child").hide();
                $("#provcity_discthtml #morelevel" + type).parent(".list_row").show();
                $("#provcity_discthtml #morelevel" + type).show();
                $("#provcity_discthtml #morelevel" + type + " div").show();
            });
        }
        if ($("#morelevel" + type).length > 0) {
            //存在
            $("#provcity_discthtml #morelevel" + type).empty();
            $("#provcity_discthtml div:first-child").hide();
            $("#provcity_discthtml #morelevel" + type).parent(".list_row").show();
            $("#provcity_discthtml #morelevel" + type).show();
            console.log("content当前id存在，不可创建");
        } else {
            //不存在
            $("#morelevel" + type).empty();
            console.log("content当前id不存在，可创建");
            var divhtml = '<div id="morelevel' + type + '"></div>';
            var $divhtml = createListRow(divhtml).appendTo("#provcity_discthtml");
            $("#provcity_discthtml div:first-child").hide();
            $("#provcity_discthtml #morelevel" + type).parent(".list_row").show();
            $("#provcity_discthtml #morelevel" + type).show();
        }
        for (var i = 0; i < array.length; i++) {
            var info = '<p class="smaller"style="padding:0em;margin:0em;text-align: left;margin-left:1em;color:#666666;font-size: 1.5em">' + array[i].text + '</p>';
            var $row = "";
            $row = createListRow(info).appendTo("#morelevel" + type);
            $row.data('data', array[i]);
            $row.listen("quickClick", function (e) {
                //点击事件
                var data = $(e.currentTarget).data("data");
                if ("请选择" == data.text) {
                    console.log("请选择");
                } else {
                    console.log("不是请选择");
                }
                console.log("第二次数据：" + JSON.stringify(data));
                if (data.hasOwnProperty("children")) {
                    console.log("含有");
                    //if(0==parseInt(type)){
                    if ("请选择" == data.text) {
                        setMoreLevelFun(data.children, "0");
                    } else {
                        var innum = parseInt(type) + 1;
                        $("#screen_prov" + type).html(data.text);
                        setMoreLevelFun(data.children, innum);
                    }
                } else {
                    console.log("不含有");
                    window.choiceOneGridId = data.id;
                    window.choiceOneGridName = data.text;
                    $("#my_add_part_deptcode").val(data.text);
                    $("#case_edit_gridCode").val(data.text);
                    $(".provcityscreen").fadeOut(800, function () {
                        $(".provcityscreen").remove();
                    });
                }
            });
        }
    }
}
/**
 * 多维代码
 * @param parent_id 父节点Id
 * @param dmbh 001:部件大小类；002:部件部门
 */
function app_getMultiCodeChild(parent_id, dmbh, id, type, num) {
    $("#screen_more_content" + id).empty();
    scrollToTop("screen_more_content" + id + "_wrapper");
    var obj = "";
    obj += toJson("parent_id", parent_id) + "&";
    obj += toJson("dmbh", dmbh);
    doPost("app_getMultiCodeChild.action", obj, function (data) {
            if (data.code == 0) {
                var array = data.datas;
                if (!isNull(array) && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        var html = '';
                        var $row = "";
                        if ("caseEditSmall" == type) {
                            html = '<p style="text-align: center;border-top:1px solid #f3f3f3;" class="alert_edit_title small">' + array[i].text + '</p>';
                        } else {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="alert_edit_title small">' + array[i].text + '</p>';
                        }
                        $row = createListRow(html).appendTo($("#screen_more_content" + id));
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                        	event.stopPropagation();
                                //点击事件
                                //$("#screen_content2").empty();
                                //scrollToTop("screen_content2_wrapper");
                                var data = $(e.currentTarget).data("data");
                                var parentid = data.id;
                                console.log("数据：" + JSON.stringify(data));
                                if (isNull(dmbh)) {
                                    if (1 == parseInt(id)) {
                                        $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                        $(e.currentTarget).find("p").addClass("oranger_font");
                                        if ("bigsmall" == type) {
                                            //大小类
                                            window.choiceBigType = parentid;
                                            $("#my_add_part_component_type_big").val(data.text);

                                            app_getMultiCodeChild(parentid, "", 2, type);
                                        } else if ("caseEdit" == type) {
                                            //问题上报 从职能事项进入
                                            window.choiceThingsParts = data.id;
                                            window.choiceThingsPartsName = data.text;
                                            window.choiceBigType = "";//部件大类：
                                            window.choiceSmallType = "";//部件小类：
                                            $("#case_edit_bigClass").val("");
                                            $("#case_edit_smallClass").val("");
                                            //从第一级部门开始获取
                                            $("#case_task_edit_eventComponent").val(window.choiceThingsPartsName);
                                            if (3 == parseInt(num)) {
                                                $("#screen_more_content3").empty();
                                                scrollToTop("screen_more_content3_wrapper");
                                            }
                                            app_getMultiCodeChild(window.choiceThingsParts, "", 2, "caseEdit");
                                        } else if ("caseEditBig" == type) {
                                            //从大类进入
                                            window.choiceBigType = parentid;
                                            $("#case_edit_bigClass").val(data.text);
                                            window.localStorage.currarea=data.area;
                                            $("#selectarea_div .currarea").text(data.area);
                                            if(data.area!="0"){
                                            	$("#selectarea_div").show();
                                            }else{
                                            	$("#selectarea_div").hide();
                                            }
                                            window.choiceSmallType = "";//部件小类：
                                            $("#case_edit_smallClass").val("");
                                            hideUpSearchDiv();
                                            //开始获取小类
                                            app_getMultiCodeChild(parentid, "", 2, "bigsmall");
                                        } else if ("caseEditSmall" == type) {
                                            window.choiceSmallType = parentid;
                                            $("#case_edit_smallClass").val(data.text);
                                            hideUpSearchDiv();
                                        }

                                    } else if (2 == parseInt(id)) {
                                        if ("bigsmall" == type) {
                                            //部件上报  大小类
                                            window.choiceSmallType = parentid;
                                            $("#case_edit_smallClass").val(data.text);
                                            $("#my_add_part_component_type_small").val(data.text);
                                        } else if ("manage_dept_name" == type) {
                                            //部件上报  主管部门
                                            window.choiceManageDeptCode = data.id;
                                            window.choiceManageDeptName = data.text;
                                            $("#my_add_part_manage_dept_name").val(data.text);
                                        } else if ("ownership_dept_name" == type) {
                                            //部件上报  权属单位
                                            window.choiceOwnershipDeptCode = data.id;
                                            window.choiceOwnershipDeptName = data.text;
                                            $("#my_add_part_ownership_dept_name").val(data.text);
                                        } else if ("caseEdit" == type) {
                                            $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                            $(e.currentTarget).find("p").addClass("oranger_font");
                                            //问题上报 大小类
                                            window.choiceBigType = parentid;
                                            window.localStorage.currarea=data.area;
                                            $("#selectarea_div .currarea").text(data.area);
                                            if(data.area!="0"){
                                            	$("#selectarea_div").show();
                                            }else{
                                            	$("#selectarea_div").hide();
                                            }
                                            hideUpSearchDiv();
                                            $("#case_task_edit_bigClass").val(data.text);
                                            app_getMultiCodeChild(parentid, "", 3, type);
                                        }
                                        if ("caseEdit" != type) {
                                            hideUpSearchDiv();
                                        }
                                    } else if (3 == parseInt(id)) {
                                        if ("caseEdit" == type) {
                                            //问题上报小类
                                            window.choiceSmallType = parentid;
                                            $("#case_edit_smallClass").val(data.text);
                                        }
                                        hideUpSearchDiv();
                                    }
                                } else if ("002" == dmbh) {
                                    if ("bigsmall" == type) {
                                        //大小类
                                        window.choiceBigType = parentid;
                                        $("#my_add_part_component_type_big").val(data.text);
                                        app_getMultiCodeChild(parentid, "", 2, type);
                                    }
                                } else if ("003" == dmbh) {
                                    ////职能事项
                                    //window.choiceThingsParts = data.id;
                                    //window.choiceThingsPartsName = data.text;
                                    //$("#case_edit_eventComponent").val(window.choiceThingsPartsName);
                                    //app_getMultiCodeChild(window.choiceThingsParts, "", 2, "caseEdit_bigsmall");

                                }

                                //if (!isNull(data.children) && data.children.length > 0) {
                                //    var html = "";
                                //    if (isNull(window.house_scroll_parentcommunity_code) || window.house_scroll_parentcommunity_code == window.oneCodeNoChange[0].row_id) {
                                //        html += '<p style="text-align: left;border-right:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + window.oneCodeNoChange[0].item_text + '</p>'
                                //    } else {
                                //        html += '<p style="text-align: left;border-right:1px solid #f3f3f3;" class="alert_edit_title small">' + window.oneCodeNoChange[0].item_text + '</p>'
                                //    }
                                //    var $rowone = createListRow(html).appendTo($("#screen_content2"));
                                //    $rowone.data('data', window.oneCodeNoChange[0]);
                                //    //$rowone.listen("quickClick", function (e) {
                                //    //    //点击事件
                                //    //    var data = $(e.currentTarget).data("data");
                                //    //    window.house_scroll_community_code = "";
                                //    //    window.house_scroll_community = "";
                                //    //    if ("solicitingshop" == jumptype || "saleshop" == jumptype || "rentalshop" == jumptype || "lookingshop" == jumptype) {
                                //    //        $("#rentalshop_hosing_list_area_id").html("区域");
                                //    //    } else {
                                //    //        $("#" + jumptype + "_hosing_list_area_id").html("区域");
                                //    //    }
                                //    //    window.house_scroll_parentcommunity_code = "";
                                //    //    addressSearchFun(jumptype);
                                //    //});
                                //    //for (var j = 0; j < data.children.length; j++) {
                                //    //    var html = "";
                                //    //    if (window.house_scroll_community_code == data.children[j].id) {
                                //    //        html += ' <p style="text-align: left;" class="oranger_font alert_edit_title small "> ' + data.children[j].text + ' </p>';
                                //    //    } else {
                                //    //        html += ' <p style="text-align: left;" class="alert_edit_title small "> ' + data.children[j].text + ' </p>';
                                //    //    }
                                //    //    var $tworow = createListRow(html).appendTo("#screen_content2");
                                //    //    $tworow.data('data', data.children[j]);
                                //    //    $tworow.listen("quickClick", function (e) {
                                //    //        var data = $(e.currentTarget).data("data");
                                //    //        window.house_scroll_community_code = data.id;
                                //    //        window.house_scroll_community = data.text;
                                //    //        window.house_scroll_parentcommunity_code = parentid;
                                //    //        if ("solicitingshop" == jumptype || "saleshop" == jumptype || "rentalshop" == jumptype || "lookingshop" == jumptype) {
                                //    //            $("#rentalshop_hosing_list_area_id").html(substringInfo(data.text, 3));
                                //    //        } else {
                                //    //            $("#" + jumptype + "_hosing_list_area_id").html(substringInfo(data.text, 3));
                                //    //        }
                                //    //
                                //    //        console.log("父类id:" + window.house_scroll_parentcommunity_code);
                                //    //        addressSearchFun(jumptype);
                                //    //    });
                                //    //}
                                //}
                            }
                        );
                        ////默认给第一个二级赋值
                        //if (!isNull(i == 0 && page == 1)) {
                        //    window.searchCity = array[0].cityName;
                        //    findCityListByCityNameRentalHouse(false, array[0].cityName, id, type);
                        //} else {
                        //    //noListShow("", "", "", twoId, "");
                        //}
                    }
                } else {
                    // toast("暂无数据")
                }
            } else {
                toast(data.message);
            }
        },
        "", ""
    )
    ;
}

function app_getDepartmentCodeChild(parent_id, dmbh, id, type) {
    $("#screen_more_content" + id).empty();
    scrollToTop("screen_more_content" + id + "_wrapper");
    var obj = "";
    obj += toJson("parent_id", parent_id) + "&";
    obj += toJson("dmbh", dmbh);
    doPost("app_getMultiCodeChild.action", obj, function (data) {
            if (data.code == 0) {
                var array = data.datas;
                if (!isNull(array) && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        var html = '';
                        var $row = "";
                        html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="alert_edit_title small">' + array[i].text + '</p>';
                        $row = createListRow(html).appendTo($("#screen_more_content" + id));
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                                var data = $(e.currentTarget).data("data");
                                var parentid = data.id;
                                console.log("数据：" + JSON.stringify(data));
                                if (1 == parseInt(id)) {
                                    $("#screen_more_content3").empty();
                                    scrollToTop("screen_more_content3_wrapper");
                                    $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                    $(e.currentTarget).find("p").addClass("oranger_font");
                                    if ("manage_dept_name" == type || "ownership_dept_name" == type || "conserve_dept_name" == type) {
                                        //部门一级
                                        app_getDepartmentCodeChild(parentid, "", 2, type);
                                    }
                                } else if (2 == parseInt(id)) {
                                    //部门二级
                                    $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                    $(e.currentTarget).find("p").addClass("oranger_font");
                                    app_getDepartmentCodeChild(parentid, "", 3, type);
                                } else if (3 == parseInt(id)) {
                                    //三级部门
                                    if ("manage_dept_name" == type) {
                                        //部件上报  主管部门
                                        window.choiceManageDeptCode = data.id;
                                        window.choiceManageDeptName = data.text;
                                        $("#my_add_part_manage_dept_name").val(data.text);
                                    } else if ("ownership_dept_name" == type) {
                                        //部件上报  权属单位
                                        window.choiceOwnershipDeptCode = data.id;
                                        window.choiceOwnershipDeptName = data.text;
                                        $("#my_add_part_ownership_dept_name").val(data.text);
                                    } else if ("conserve_dept_name" == type) {
                                        $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                        $(e.currentTarget).find("p").addClass("oranger_font");
                                        //部件上报 养护单位
                                        window.choiceConserveDeptCode = data.id;
                                        window.choiceconserveDeptName = data.text;
                                        $("#my_add_part_conserve_dept_name").val(data.text);
                                    }
                                    hideUpSearchDiv();
                                } else {

                                }
                            }
                        );
                    }
                } else {
                    toast("暂无数据")
                }
            } else {
                toast(data.message);
            }
        },
        "", ""
    )
    ;
}
/**
 *二级多位代码
 * @param parent_id
 * @param dmbh 001:部件大小类；002:部件部门
 * @param id
 */
function searchApp_getMultiCodeChild(parent_id, dmbh, id) {
    $("#screen_content" + id).empty();
    console.log("id:" + id);
    scrollToTop("screen_content" + id + "_wrapper");
    var obj = "";
    obj += toJson("parent_id", parent_id) + "&";
    obj += toJson("dmbh", dmbh);
    doPost("app_getMultiCodeChild.action", obj, function (data) {
            if (data.code == 0) {
                var array = data.datas;
                if (!isNull(array) && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        var html = '';
                        var $row = "";
                        if (1 == id && window.choiceBigType == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else if (2 == id && window.choiceSmallType == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="alert_edit_title small">' + array[i].text + '</p>';
                        }
                        $row = createListRow(html).appendTo($("#screen_content" + id));
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                                //点击事件
                                //$("#screen_content2").empty();
                                //scrollToTop("screen_content2_wrapper");
                                var data = $(e.currentTarget).data("data");
                                var parentid = data.id;
                                console.log("数据：" + JSON.stringify(data));
                                $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                $(e.currentTarget).find("p").addClass("oranger_font");
                                window.choiceSmallType = "";
                                window.choiceTemporarySmallType = "";
                                if (1 == parseInt(id)) {
                                    window.choiceTemporaryBigType = parentid;
                                    searchApp_getMultiCodeChild(parentid, "", 2);
                                } else if (2 == parseInt(id)) {
                                    window.choiceTemporarySmallType = parentid;
                                }
                            }
                        );
                    }
                } else {
                    toast("暂无数据")
                }
            } else {
                toast(data.message);
            }
        },
        "", ""
    )
    ;
}

/**
 * 巡查二级
 * @param parent_id
 * @param dmbh
 * @param id
 */
function app_getType(parent_id, id) {
    $("#screen_content" + id).empty();
    console.log("id:" + id);
    scrollToTop("screen_content" + id + "_wrapper");
    var obj = "";
    obj += toJson("parentId", parent_id) ;
    //obj += toJson("dmbh", dmbh);
    doPost("app_getType.action", obj, function (data) {
            if (data.code == 0) {
                var array = data.datas;
                if (!isNull(array) && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        var html = '';
                        var $row = "";
                        if (1 == id && window.choiceBigType == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else if (2 == id && window.choiceSmallType == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="alert_edit_title small">' + array[i].text + '</p>';
                        }
                        $row = createListRow(html).appendTo($("#screen_content" + id));
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                                //点击事件
                                //$("#screen_content2").empty();
                                //scrollToTop("screen_content2_wrapper");
                                var data = $(e.currentTarget).data("data");
                                var parentid = data.id;
                                console.log("数据：" + JSON.stringify(data));
                                $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                $(e.currentTarget).find("p").addClass("oranger_font");
                                window.choiceSmallType = "";
                                window.choiceTemporarySmallType = "";
                                if (1 == parseInt(id)) {
                                    window.choiceTemporaryBigType = parentid;
                                    app_getType(parentid,2);
                                } else if (2 == parseInt(id)) {
                                    window.choiceTemporarySmallType = parentid;
                                }
                            }
                        );
                    }
                } else {
                    toast("暂无数据")
                }
            } else {
                toast(data.message);
            }
        },
        "", ""
    )
    ;
}
/**
 * 三级多维代码
 * @param parent_id
 * @param dmbh
 * @param id
 */
function searchThree_getMultiCodeChild(parent_id, dmbh, id) {
    $("#screen_content" + id).empty();
    console.log("id:" + id);
    scrollToTop("screen_content" + id + "_wrapper");
    var obj = "";
    obj += toJson("parent_id", parent_id) + "&";
    obj += toJson("dmbh", dmbh);
    doPost("app_getMultiCodeChild.action", obj, function (data) {
            if (data.code == 0) {
                var array = data.datas;
                if (!isNull(array) && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        var html = '';
                        var $row = "";
                        if (1 == id && window.choiceThingsParts == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else if (2 == id && window.choiceBigType == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else if (3 == id && window.choiceSmallType == array[i].id) {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="oranger_font alert_edit_title small">' + array[i].text + '</p>';
                        } else {
                            html = '<p style="text-align: left;border-right:1px solid #f3f3f3;border-top:1px solid #f3f3f3;" class="alert_edit_title small">' + array[i].text + '</p>';
                        }
                        $row = createListRow(html).appendTo($("#screen_content" + id));
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                                //点击事件
                                //$("#screen_content2").empty();
                                //scrollToTop("screen_content2_wrapper");
                                var data = $(e.currentTarget).data("data");
                                var parentid = data.id;
                                console.log("数据：" + JSON.stringify(data));
                                $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                $(e.currentTarget).find("p").addClass("oranger_font");
                                if (1 == parseInt(id)) {
                                    window.choiceTemporaryThingsParts = parentid;
                                    window.choiceTemporaryBigType = "";
                                    window.choiceTemporaryBigType = "";
                                    $("#screen_content3").empty();
                                    searchThree_getMultiCodeChild(parentid, "", 2);
                                } else if (2 == parseInt(id)) {
                                    window.choiceTemporaryBigType = parentid;
                                    window.choiceTemporarySmallType = "";
                                    searchThree_getMultiCodeChild(parentid, "", 3);
                                } else if (3 == parseInt(id)) {
                                    window.choiceTemporarySmallType = parentid;
                                }
                            }
                        );
                    }
                } else {
                    toast("暂无数据")
                }
            } else {
                toast(data.message);
            }
        },
        "", ""
    )
    ;
}
/**
 * 筛选信息获取
 * @param  {[type]} type [7性别]
 * @return {[type]}      [description]
 */
function filterBaseType(type) {
    //showLoading();
    var obj = "";
    obj += toJson("type", type);
    doPost("app_getBaseType.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(array) && array.length > 0) {
                var info = '<p class="filter_line_height">' + window.noInfoList[0].item_text + '</p>';
                var $info = createListRow(info).appendTo("#alert_filter_content");
                $info.data('data', window.noInfoList[0]);
                $info.listen("quickClick", function (e) {
                    var data = $(e.currentTarget).data("data");
                    $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                    $(e.currentTarget).find("p").addClass("oranger_font");
                    window.lineTypeId = data.item_value;
                    //if ("/static/resources/images/icon_radio_blue.png" == $(e.currentTarget).find("p").find("img").attr("src")) {
                    //    $(e.currentTarget).find("p").find("img").attr("src", "/static/resources/images/icon_radio_gray.png");
                    //    window.filter_sex_code = "";
                    //    console.log("window.filter_sex_code" + window.filter_sex_code);
                    //} else {
                    //    $("#alert_filter_content .list_row img").each(function () {
                    //        $(this).attr("src", "/static/resources/images/icon_radio_gray.png");
                    //    });
                    //    $(e.currentTarget).find("p").find("img").attr("src", "/static/resources/images/icon_radio_blue.png");
                    //    if (type == 4) {
                    //        window.filter_server_code = data.item_code;
                    //        window.mapTypeName = data.item_text;
                    //        $("#publicServiceListPage .page_header_title").html(window.mapTypeName);
                    //        console.log("window.filter_server_code" + window.filter_server_code + data.item_text);
                    //    } else {
                    //        window.filter_sex_code = data.item_code;
                    //        console.log("window.filter_sex_code" + window.filter_sex_code + data.item_text);
                    //    }


                    //}
                });
                for (var i = 0; i < array.length; i++) {
                    var sexinfo = '<p class="filter_line_height">' + array[i].item_text + '</p>';
                    var $sex_row = createListRow(sexinfo).appendTo("#alert_filter_content");
                    $sex_row.data('data', array[i]);
                    $sex_row.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                        $(e.currentTarget).find("p").addClass("oranger_font");
                        window.lineTypeId = data.item_value;
                        //if ("/static/resources/images/icon_radio_blue.png" == $(e.currentTarget).find("p").find("img").attr("src")) {
                        //    $(e.currentTarget).find("p").find("img").attr("src", "/static/resources/images/icon_radio_gray.png");
                        //    window.filter_sex_code = "";
                        //    console.log("window.filter_sex_code" + window.filter_sex_code);
                        //} else {
                        //    $("#alert_filter_content .list_row img").each(function () {
                        //        $(this).attr("src", "/static/resources/images/icon_radio_gray.png");
                        //    });
                        //    $(e.currentTarget).find("p").find("img").attr("src", "/static/resources/images/icon_radio_blue.png");
                        //    if (type == 4) {
                        //        window.filter_server_code = data.item_code;
                        //        window.mapTypeName = data.item_text;
                        //        $("#publicServiceListPage .page_header_title").html(window.mapTypeName);
                        //        console.log("window.filter_server_code" + window.filter_server_code + data.item_text);
                        //    } else {
                        //        window.filter_sex_code = data.item_code;
                        //        console.log("window.filter_sex_code" + window.filter_sex_code + data.item_text);
                        //    }


                        //}
                    });

                }
            } else {
                //性别信息
            }
        } else {
            toast(data.message);
        }
    }, "", "grid");
}
/**
 * 首页待办数量
 */
function appWorkOrder_todoTotal(type) {
    var obj = "";
    obj += toJson("userId", $.trim(window.localStorage.userId)) + "&";
    obj += toJson("type", type);
    doPost("appWorkOrder_todoTotal.action", obj, function (data) {
        if (data.code == 0) {
            if (!isNull(data.total) && 0 != data.total) {
                //$(".welcome_wait_work_rednum").show();
                //$(".welcome_wait_work_rednum").html(data.total);
            } else {
                $(".welcome_wait_work_rednum").hide();
            }

        } else {
            $(".welcome_wait_work_rednum").hide();
            toast(data.message);
        }
    }, "");
}

/**
 * 待办数量分类
 */
function appWorkOrder_todoTotalByType() {
    var obj = "";
    obj += toJson("userId", $.trim(window.localStorage.userId));
    doPost("appWorkOrder_todoTotalByType.action", obj, function (data) {
        if (data.code == 0) {
            var data = data.datas;
            //工单待办总数
            //showOrHideNum(data.orderTotal, "case_welcome_rednum");
            //showOrHideNum(data.orderTotal, "wait_work_welcome_order_rednum");
            //检查待办数量
            showOrHideNum(data.checkTotal, "check_welcome_rednum");
            showOrHideNum(data.checkTotal, "wait_work_welcome_check_rednum");
            //巡查待办数量
            showOrHideNum(data.patrolTotal, "wait_work_welcome_patrol_rednum");
            //舆情待办数量
            showOrHideNum(data.publicSentimentTotal, "opinion_welcome_rednum");
            showOrHideNum(data.publicSentimentTotal, "wait_work_welcome_opinion_rednum");
            //走访待办数量
            showOrHideNum(data.visitingTask, "wait_work_welcome_visit_rednum");
            showOrHideNum(data.visitingTask, "wait_visit_rednum");
        } else {
            $(".welcome_wait_work_rednum").hide();
            toast(data.message);
        }
    }, "");
}

/**
 * 新增数字显示方法
 */
function appWorkOrder_todoTotalByType2() {
	var jsons = "";
	jsons += toJson("dealDeptId", window.localStorage.deptId);
    doPost("centerTaskSupervisionLogNum.action", jsons, function (data) {
    	console.log(data);
    	var supervisionLogNum=data.num;
    	var obj = "";
        obj += toJson("userId", $.trim(window.localStorage.userId));
        doPost("appWorkOrder_todoTotalByType2.action", obj, function (data) {
            if (data.code == 0) {
                var data = data.datas;
                var total = parseInt(supervisionLogNum)+parseInt(data.orderTotal);
                //工单待办总数
                showOrHideNum(data.orderTotal, "case_welcome_rednum");
                showOrHideNum(data.orderTotal, "wait_work_welcome_order_rednum");
                showOrHideNum(total, "welcome_wait_work_rednum");
            } else {
                $(".welcome_wait_work_rednum").hide();
                toast(data.message);
            }
        }, "");
    }, "");

}

/**
 * 督办数量分类
 */
function appWorkOrder_todoTotalSupervision() {
    var obj = "";
    obj += toJson("userId", $.trim(window.localStorage.userId));
    doPost("appWorkOrder_todoTotalSupervision.action", obj, function (data) {
        if (data.code == 0) {
            showOrHideNum(data.total, "wait_work_welcome_order_rednum_duban");
            // //工单待办总数
            // showOrHideNum(data.orderTotal, "case_welcome_rednum");
            // showOrHideNum(data.orderTotal, "wait_work_welcome_order_rednum");
            // //检查待办数量
            // showOrHideNum(data.checkTotal, "check_welcome_rednum");
            // showOrHideNum(data.checkTotal, "wait_work_welcome_check_rednum");
            // //巡查待办数量
            // showOrHideNum(data.patrolTotal, "wait_work_welcome_patrol_rednum");
            // //舆情待办数量
            // showOrHideNum(data.publicSentimentTotal, "opinion_welcome_rednum");
            // showOrHideNum(data.publicSentimentTotal, "wait_work_welcome_opinion_rednum");
            // //走访待办数量
            // showOrHideNum(data.visitingTask, "wait_work_welcome_visit_rednum");
            // showOrHideNum(data.visitingTask, "wait_visit_rednum");
        } else {
            $(".welcome_wait_work_rednum").hide();
            toast(data.message);
        }
    }, "");
}

//待办数量显示隐藏
function showOrHideNum(num, classid) {
    if (!isNull(num) && 0 != num) {
        $("." + classid).show();
        $("." + classid).html(num);
    } else {
        $("." + classid).hide();
    }
}
/**
 * 首页待办列表
 */

//function appWorkOrder_allAgendaList() {
//    $("#welcome_wait_work_html").empty();
//    var obj = "";
//    obj += toJson("userId", window.localStorage.userId) + "&";
//    obj += toJson("queryType", "1") + "&";
//    obj += toJson("startTime", "") + "&";
//    obj += toJson("eventComponent", "") + "&";
//    obj += toJson("bigClass", "") + "&";
//    obj += toJson("smallClass", "") + "&";
//    obj += toJson("pageSize", "20") + "&";
//    obj += toJson("pageNum", 1) + "&";
//    obj += toJson("endTime", "");
//    doPost("appWorkOrder_workOrderList.action", obj, function (data) {
//        if (data.code == 0) {
//            var array = data.datas;
//            if (!isNull(array) && array.length > 0) {
//                for (var i = 0; i < array.length; i++) {
//                    var html = '';
//                    var typename = "";
//
//                        //1:工单
//                        typename = '  <th rowspan="2"><img src="/static/resources/images/icon_list_gd.png"/></th>';
//
//                    var name = "";
//                    if (!isNull(array[i].smallClass)) {
//                        if (isNull(name)) {
//                        	name = array[i].smallClass;
//                        } else {
//                        	name = name + "/" + array[i].smallClass;
//                        }
//                    }
//                    html += '<table cellspacing="0" class="gray_line_bottom list_img_table" cellpadding="0">';
//                    html += '   <tr>';
//                    html += typename;
//                    html += '       <td colspan="2" class="small">' + name + '</td>';
//                    html += '   </tr>';
//                    html += '   <tr>';
//                    html += '       <td class="small gray_font">' + array[i].reportTime + '</td>';
//                    html += '   </tr>';
//                    html += '</table>';
//                    var $html = createListRow(html).appendTo("#welcome_wait_work_html");
//                    $html.data('data', array[i]);
//                    $html.listen("quickClick", function (e) {
//                        var data = $(e.currentTarget).data("data");
//                        window.welcomeCheckJumpType = "welcome";
//                        window.caseRow_id = data.row_id;
//                        window.thisCaseQueryType = "1";
//                        window.CaseTaskDetailPage = "";
//                        app.$router.push("../casetask/caseTaskDetail.html");
//                    });
//                }
//            } else {
//                noListShow("", "", "", $("#welcome_wait_work_html"), "");
//            }
//        } else {
//            toast(data.message);
//        }
//    }, "");
//}
function appWorkOrder_allAgendaList() {
    $("#welcome_wait_work_html").empty();
    var obj = "";
    obj += toJson("loginId", window.localStorage.loginId);

    doPost("myTodo.action", obj, function (data) {
        var array = data.datas;
      if (!isNull(array) && array.length > 0) {
          for (var i = 0; i < array.length; i++) {
              var html = '';
              var typename = "";


                  typename = '  <th rowspan="2"><img src="/static/resources/images/icon_list_gd.png"/></th>';

              var name = "";
              var deadline="";
              if(array[i].dead_line){
            	  deadline=array[i].dead_line;
              }
              html += '<table cellspacing="0" class="gray_line_bottom list_img_table" cellpadding="0">';
              html += '   <tr>';
              html += typename;
              html += '       <td colspan="2" class="small nochangline">' + array[i].problem + '</td>';
              html += '   </tr>';
              html += '   <tr>';
              html += '       <td class="small gray_font">' + deadline + '</td>';
              html += '   </tr>';
              html += '</table>';
              var $html = createListRow(html).appendTo("#welcome_wait_work_html");
              $html.data('data', array[i]);
              $html.listen("quickClick", function (e) {
                  var data = $(e.currentTarget).data("data");
                  if(data.origin=="JB"){
                	  window.currjump="welcome";
                	  window.leadercaseno=data.caseno;
                	  app.$router.push("../leaderHandle/leaderHandleDetail.html");
                  }else if(data.origin=="XB"){
                	  window.currjump="welcome";
                	  window.row_id = data.row_id;
                	  app.$router.push("../deptHandle/deptHandleDetail.html");
                  }else if(data.origin=="ZF"){
                	  window.currjump="welcome";
                	  window.row_id = data.row_id;
                	  app.$router.push("../applicationEnforcement/applicationEnforcementDetail.html");
                  }
//                  window.welcomeCheckJumpType = "welcome";
//                  window.caseRow_id = data.row_id;
//                  window.thisCaseQueryType = "1";
//                  window.CaseTaskDetailPage = "";
//                  app.$router.push("../casetask/caseTaskDetail.html");
              });
          }
      } else {
          noListShow("", "", "", $("#welcome_wait_work_html"), "");
      }
    }, "");
}
/**
 * 通知公告
 * @param pageNum 查询第页数
 * @param pageSize 每页大小
 * @param searchContent 搜索内容
 * @param noticeType 公告类型
 */
function app_noticeList(reset, pageNum, searchContent, noticeType, id) {
    //if (!reset) {
    //    showLoading("正在搜索...");
    //}

    if (parseInt(pageNum) < 2) {
        $("#" + id).empty();
        window.searchPage = 2;
    }
    var obj = "";
    obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
    obj += toJson("searchContent", searchContent) + "&";
    obj += toJson("noticeType", noticeType) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum);
    doPost("noticeList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page[0].total);
            if (!isNull(array) && array.length > 0) {
                $("#load_welcome_page .notice_div").show();
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    if ("welcome_notice_html" == id) {
                        html += '   <div class="small one_notice">' + array[i].title + '</div>';
                        var $html = createListRow(html).appendTo("#" + id);
                        $html.data('data', array[i]);
                        $html.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.noticeContentId = data.row_id;
                            app.$router.push("../notice/noticeDetail.html");
                        });
                    } else {
                        html += '<table cellspacing="0" class="gray_line_bottom list_one_table" cellpadding="0">';
                        html += '   <tr>';
                        html += '       <td colspan="2">'
                        	if(array[i].readstatus == ""){
                            	html += '<div class="red_round_rank"></div>';
                            }
                        html +=	array[i].title + '</td>';
                        html += '   </tr>';
                        html += '   <tr>';
                        html += '       <td class="small gray_font">' + array[i].noticeType + '</td>';
                        html += '       <td class="small gray_font">' + array[i].creatTime + '</td>';
                        html += '   </tr>';
                        html += '</table>';
                        var $html = createListRow(html).appendTo("#" + id);
                        $html.data('data', array[i]);
                        $html.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            console.log("id：" + data.row_id);
                            window.noticeContentId = data.row_id;
                            app.$router.push("../notice/noticeDetail.html");

                        });
                    }

                }
            } else {
                $("#load_welcome_page .notice_div").hide();
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#" + id), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 * 置顶通知公告
 */
function app_noticeTopDetail() {
    var obj = "";
    obj += toJson("userId", $.trim(window.localStorage.userId)) + "&";
    doPost("app_noticeTopDetail.action", obj, function (data) {
        if (data.code == 0) {
            var arrayimg = [];
            window.appNoticeTopDetail = data.datas;
            if (!isNull(data.datas) && data.datas.length > 0) {
                for (var i = 0; i < data.datas.length; i++) {
                    arrayimg[i] = window.imgUrl + data.datas[i].pics;
                }
            }
            setWelcomeBackGround("commodityimgscroll", arrayimg);
        } else {
            setWelcomeBackGround("commodityimgscroll", "");
            toast(data.message);
        }
    }, "");
}
/**
 * 通知公告详情
 */
function app_noticeDetail() {
	var obj = "";
    obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
    obj += toJson("row_id", window.noticeContentId);
    doPost("app_noticeDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            $("#notice_detail_title").html(array.title);
            $("#notice_detail_type").html(array.noticeType + '&nbsp;&nbsp;&nbsp;' + array.creatTime);
            $("#notice_detail_html").html(array.content);
            var h = $("#notice_detail_html").find("a");
            $("#notice_detail_html").find("p").css("text-align","left");
            var html = '附件下载';
            var array = [];
            if(h.length>0){
            	for (var i = 0; i < h.length; i++) {
            		//$("#notice_detail_html").find("a").parent().eq(i).hide();
            		var num = i+1;
                    html += '<div href="'+ h.eq(i).attr("href") +'" style="text-align: left;margin-left: 20pt;">';
                    html +=  h.eq(i).text() ;
                    html += '   </div>';
                    var $html = $("#downtest").html(html);
                }
            }

        } else {
            toast(data.message);
        }
    }, "");
}
/**
 *巡查待办列表
 * @param pageNum 查询第几页
 * @param pageSize 每页大小
 */
function app_patrolToDoList(pageNum, reset) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#patrol_welcome_html").empty();
    }
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum);
    doPost("app_patrolToDoList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="gray_line_bottom list_one_table" cellpadding="0">';
                    html += '   <tr>';
                    html += '        <td colspan="2">' + array[i].department + "&nbsp;|&nbsp;" + array[i].bigClass + "&nbsp;|&nbsp;" + array[i].smallClass + '</td>';
                    html += '   </tr>';
                    html += '   <tr>';
                    html += '       <td class="small gray_font">';
                    html += '           已巡查：<span class="oranger_font">' + array[i].inspectedTimes + '次</span>&nbsp;&nbsp;&nbsp;&nbsp;巡查次数：<span class="oranger_font">' + array[i].inspectionsTotal + '次</span>';
                    html += '       </td>';
                    html += '       <td style="width:4em;" class="small oranger_font">' + array[i].statusName;
                    //html += '           <img class="small_img" src="/static/resources/images/location.png">';
                    html += '      </td>';
                    html += '   </tr>';
                    html += ' </table>';
                    var $html = createListRow(html).appendTo("#patrol_welcome_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.patrolDetailId = data.row_id;
                        app.$router.push("../patrol/patrolDetail.html");
                    });

                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#patrol_welcome_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 *巡查已办列表
 * @param pageNum
 * @param reset
 * @param taskType
 */
function app_patrolDoneList(pageNum, reset, taskType) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#patrol_welcome_html").empty();
    }
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("taskType", taskType) + "&";
    obj += toJson("bigtypeId", $.trim(window.choiceBigType)) + "&";
    obj += toJson("smalltypeId", $.trim(window.choiceSmallType)) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum);
    doPost("app_patrolDoneList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="list_one_table gray_line_bottom" cellpadding="0">';
                    html += '   <tr>';
                    html += '        <td colspan="2">' + array[i].department + "&nbsp;|&nbsp;" + array[i].bigClass + "&nbsp;|&nbsp;" + array[i].smallClass + '</td>';
                    html += '   </tr>';
                    //html += ' </table>';
                    //html += '<table cellspacing="0" class="list_table_topnone  gray_line_bottom" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td class="small gray_font">';
                    html += '           已巡查：<span class="oranger_font">' + array[i].inspectedTimes + '次</span>&nbsp;&nbsp;&nbsp;&nbsp;巡查次数：<span class="oranger_font">' + array[i].inspectionsTotal + '次</span>';
                    html += '       </td>';
                    html += '       <td style="width:4em;" class="small oranger_font">' + array[i].statusName;
                    //html += '           <img class="small_img" src="/static/resources/images/location.png">';
                    html += '      </td>';
                    html += '   </tr>';
                    html += ' </table>';
                    var $html = createListRow(html).appendTo("#patrol_welcome_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.patrolDetailId = data.row_id;
                        app.$router.push("../patrol/patroledDetail.html");
                    });

                }
            } else {
                noListShow("", "", "", $("#patrol_welcome_html"), "");
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 * 巡查详情
 */
function app_patrolDetail() {
    var obj = "";
    obj += toJson("row_id", $.trim(window.patrolDetailId));
    doPost("app_patrolDetail.action", obj, function (data) {
        if (data.code == 0) {
            console.log(JSON.stringify(data))
            var array = data.datas[0];
            if (1 == data.operation) {
                window.patrolState=1;
                //开始巡查
                var $html = createListRow('<div id="save_returnAddress" style="width:83%;" class="alert_bottom_three orange_background">开始巡查</div>').appendTo("#partrol_detail_page .footer_button_div");
                //$html.data('data', array[i]);
                $html.listen("quickClick", function (e) {
                    var data = $(e.currentTarget).data("data");
                    //开始巡查
                    startOrFinish(1);
                });

            } else if (2 == data.operation) {
                //结束巡查
                //开始巡查
                window.patrolState=2;
                var html = '<div id="patrol_report" style="width:35%;float:left;" class="alert_bottom_three  orange_background">巡查上报</div>';
                html += '    <div id="over_patrol_report" style="width:35%;float:left;" class="alert_bottom_three  gray_background">结束巡查</div>';
                var $html = createListRow(html).appendTo("#partrol_detail_page .footer_button_div");
                //$html.data('data', array[i]);
                $html.find("#patrol_report").listen("quickClick", function (e) {
                    var data = $(e.currentTarget).data("data");
                    //继续巡查
                    app.$router.push("../patrol/patrolReport.html");
                });
                $html.find("#over_patrol_report").listen("quickClick", function (e) {
                    var data = $(e.currentTarget).data("data");
                    //结束巡查
                    startOrFinish(2);
                });

            }
            //巡查标题
            $("#partrol_detail_title").html(array.title);
            //网格名称
            $("#partrol_detail_gridName").html(array.gridName);
            //任务类型名称 taskTypeCode
            $("#partrol_detail_taskType").html(array.taskType);
            //开始时间
            $("#partrol_detail_startTime").html(array.startTime);
            //结束时间
            $("#partrol_detail_enddate").html(array.endTime);
            //巡查人
            $("#partrol_detail_patrolPerson").html(array.patrolPerson);
            //任务描述
            $("#partrol_detail_task_desc").html(array.description);
            //指派人
            $("#partrol_detail_assignPerson").html(array.assignPerson);
            //指派时间
            $("#partrol_detail_assignTime").html(array.assignTime);
            //巡查次数
            $("#partrol_detail_patrolTimes").html(array.patrolTimes + "次");


            //巡查标题
            $("#partroled_detail_title").html(array.title);
            //网格名称
            $("#patroled_detail_gridName").html(array.gridName);
            //任务类型名称 taskTypeCode
            $("#patroled_detail_taskType").html(array.taskType);
            //开始时间
            $("#patroled_detail_startTime").html(array.startTime);
            //结束时间
            $("#patroled_detail_enddate").html(array.endTime);
            //巡查人
            $("#patroled_detail_patrolPerson").html(array.patrolPerson);
            //任务描述
            $("#patroled_detail_task_desc").html(array.description);
            //指派人
            $("#patroled_detail_assignPerson").html(array.assignPerson);
            //指派时间
            $("#patroled_detail_assignTime").html(array.assignTime);
            //巡查次数
            $("#patroled_detail_patrolTimes").html(array.patrolTimes + "次");
        } else {
            toast(data.message);
        }
    }, "");
}

/**
 * 巡查记录
 */
function app_patrolRecord() {
    var obj = "";
    obj += toJson("row_id", $.trim(window.patrolDetailId));
    doPost("app_patrolRecord.action", obj, function (data) {
        if (data.code == 0) {
            window.allPatrolRecordInfo = data.datas;
            var array = data.datas[0];
            console.log(JSON.stringify(array));
            window.patrolTimes = data.patrolTimes;
            window.patrolTotalTimes = data.patrolTotalTimes;
            $("#patrol_record_patrolTimes").html(data.patrolTimes + "次");
            $("#patrol_record_patrolTotalTimes").html(data.patrolTotalTimes + "次");
            window.thisPatrolPage = 1;
            $("#patrol_record_number").html("第1次");
            if (!isNull(data.datas) && data.datas.length > 0) {
                setRecordHtml(data.datas[0]);
            }
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 巡查记录
 * @param array
 */
function setRecordHtml(array) {
    console.log("赋值数据为：" + JSON.stringify(array));
    var html2 = '   <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">';
    html2 += '       <tr>';
    html2 += '           <td style="min-width: 5em;" class="gray_line_bottom">开始日期</td>';
    html2 += '           <td colspan="2" class="gray_line_bottom">' + array.startTime + '</td>';
    html2 += '       </tr>';
    html2 += '       <tr>';
    html2 += '           <td style="min-width: 5em;" class="gray_line_bottom">结束日期</td>';
    html2 += '           <td colspan="2" class="gray_line_bottom">' + array.endTime + '</td>';
    html2 += '       </tr>';
    html2 += '       <tr>';
    html2 += '           <td style="min-width: 5em;" class="gray_line_bottom">巡查状态</td>';
    html2 += '           <td colspan="2" class="gray_line_bottom">' + array.state + '</td>';
    html2 += '     </tr>';
    html2 += '     </table>';
    html2 += ' <p class="p_title">巡查轨迹</p>';
    var $html2 = createListRow(html2).appendTo("#patrol_record_html");
    $html2.listen("quickClick", function (e) {
        var data = $(e.currentTarget).data("data");

    });
    if (!isNull(array.locus) && array.locus.length > 0) {
        for (var i = 0; i < array.locus.length; i++) {
            var html4 = '  <table class="inp_table settd_tab gray_line_bigger_bottom parent_address_tab' + i + '" cellpadding="0" cellspacing="0">';
            html4 += '        <tr>';
            html4 += '            <td colspan="2" class="gray_line_bottom address_td" style="color:#333333;">' + (i + 1) + "、" + array.locus[i].location + '</td>';
            html4 += '            <td style="width: 1%;" class="gray_line_bottom"><img id="patrol_record_address_img" class=" div_input_value_img" src="/static/resources/images/icon_gray_solid_down.png"></td>';
            html4 += '        </tr>';
            html4 += '    </table>';
            var $html4 = createListRow(html4).appendTo("#patrol_record_html");
            $html4.data('data', i);
            $html4.listen("quickClick", function (e) {
                var data = $(e.currentTarget).data("data");
                if ($(".hideorshow" + data).is(':visible') == true) {
                    $(".hideorshow" + data).hide();
                    $(".parent_address_tab" + data).addClass("gray_line_bigger_bottom");
                } else {
                    $(".hideorshow" + data).show();
                    $(".parent_address_tab" + data).removeClass("gray_line_bigger_bottom");
                }
            });
            var html5 = '  <table style="display: none;" class="inp_table settd_tab  hideorshow' + i + '" cellpadding="0" cellspacing="0">';
            var imgsarray = array.locus[i].picture;
            if (!isNull(imgsarray) && imgsarray.length > 0) {
                html5 += '    <tr>';
                html5 += '        <td colspan="3" style="padding-bottom:0.3em;" class="commodityAddImgs">';
                html5 += '           <div id="patrol_record' + i + '_img_wrapper" class="jszx-wrapper">';
                html5 += '                <div class="jszx-scroller" id="patrol_record' + i + '_img_scroll">';
                html5 += '                    <div id="patrol_record' + i + '_img" style="height:7.5em;overflow: hidden;display: inline-block;"> ';
                for (var m = 0; m < imgsarray.length; m++) {
                    html5 += '                      <img class="goodsimgone" style="" src="' + window.imgUrl + imgsarray[m].path + '"/>';
                }
                html5 += '                     </div>';
                html5 += '               </div>';
                html5 += '          </div>';
                html5 += '        </td>';
                html5 += '     </tr>';
            } else {
                html5 += '    <tr style="display: none;">';
                html5 += '        <td colspan="3" class="commodityAddImgs">';
                html5 += '           <div id="patrol_record' + i + '_img_wrapper" class="jszx-wrapper">';
                html5 += '                <div class="jszx-scroller" id="patrol_record' + i + '_img_scroll">';
                html5 += '                    <div id="patrol_record' + i + '_img" style="height:7.5em;overflow: hidden;display: inline-block;"> ';
                html5 += '                     </div>';
                html5 += '               </div>';
                html5 += '          </div>';
                html5 += '        </td>';
            }
            html5 += '    </table>';
            var $html5 = createListRow(html5).appendTo("#patrol_record_html");
            imgWidth("patrol_record" + i + "_img_scroll", "patrol_record" + i + "_img_wrapper", imgsarray.length, "patrol_record" + i + "_img");
            var html3 = '  <table style="display: none;" class="inp_table gray_line_bigger_bottom settd_tab   hideorshow' + i + '" cellpadding="0" cellspacing="0">';
            html3 += '       <tr>';
            html3 += '            <td style="min-width: 5em;" class="gray_line_bottom gray_line_bottom">巡查时间</td>';
            html3 += '            <td colspan="2" class="gray_line_bottom">' + array.locus[i].createTime + '</td>';
            html3 += '        </tr>';
            html3 += '        <tr>';
            html3 += '            <td class="" style="padding-top:0.5em;padding-bottom:0em;">描述</td>';
            html3 += '            <td class="" colspan="2"></td>';
            html3 += '        </tr>';
            html3 += '        <tr>';
            html3 += '            <td colspan="3" style="color:#333333;">' + array.locus[i].description + '</td>';
            html3 += '        </tr>';
            html3 += '    </table>';
            var $html3 = createListRow(html3).appendTo("#patrol_record_html");
            $html3.listen("quickClick", function (e) {
                var data = $(e.currentTarget).data("data");
            });
        }
    }
}
/**
 * 巡查轨迹
 */
function app_patrolTrail() {
    var obj = "";
    obj += toJson("row_id", $.trim(window.patrolDetailId));
    doPost("app_patrolTrail.action", obj, function (data) {
        if (data.code == 0) {
            window.lineMapAddress = data.point;
            console.log("轨迹数据" + JSON.stringify(data));
            showLineMapAlert("轨迹");
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 *舆情列表
 * @param pageNum
 * @param reset
 * @param queryType 查询类型 1：待办 2：已办
 */
function app_publicSentimentList(reset, pageNum, queryType, title, keywords, levelId) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        window.searchPage = 2;
        $("#opinion_welcome_list_html").empty();
    }
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("queryType", queryType) + "&";
    obj += toJson("title", $.trim(title)) + "&";
    obj += toJson("keywords", $.trim(keywords)) + "&";
    obj += toJson("levelId", $.trim(levelId)) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum);
    doPost("app_publicSentimentList.action", obj, function (data) {

        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            if (!reset) {
                hideLoading();
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var level_id = "";
                    var createTime = "";
                    var status = "";
                    if (!isNull(array[i].levelId)) {
                        level_id = array[i].levelId;
                    }
                    if (!isNull(array[i].createtime)) {
                        createTime = array[i].createtime;
                    }
                    if (!isNull(array[i].status)) {
                        status = array[i].status;
                    }
                    var html = '';
                    html += '<table cellspacing="0" class="list_table " cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td>' + array[i].title + '</td>';
                    html += '       <td class="oranger_font">' + status + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    html += '<table cellspacing="0" class=" list_table_topnone gray_line_bottom" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td class="small gray_font">' + level_id + '</td>';
                    html += '       <td class="small gray_font">' + createTime + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#opinion_welcome_list_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.opinionInfoRow_Id = data.row_id;
                        console.log("数据：" + JSON.stringify(data));
                        console.log("ddd" + window.opinionInfoRow_Id + "\t," + data.row_id);
                        if (1 == parseInt(queryType)) {
                            window.opinionDetailPage = "";
                            app.$router.push("../opinion/opinionDetail.html");
                        } else {
                            window.opinionedDetailPage = "";
                            app.$router.push("../opinion/opinionedDetail.html");
                        }

                    });
                }
            } else {
                noListShow("", "", "", $("#opinion_welcome_list_html"), "");
            }
        } else {
            if (!reset) {
                hideLoading();
            }
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 * 舆情详情
 */
function app_publicOpinionContent() {
    console.log("id：" + window.opinionInfoRow_Id);
    var obj = "";
    obj += toJson("row_id", window.opinionInfoRow_Id) + "&";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("queryType", window.opinionSearchType);
    doPost("app_publicOpinionContent.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            $("#opinion_detail_page .page_footer").show();
            window.opinionLevel = data.lvl;
            //网格名称
            $("#opinion_detail_title").html(array.title);
            //网格名称
            $("#opinion_detail_gridName").html(array.deptName);
            //作者
            $("#opinion_detail_level_id").html(array.level_id);
            //作者
            $("#opinion_detail_author").html(array.author);
            //预警信息
            $("#opinion_detail_warninginfo").html(array.keywords);
            //信息来源
            $("#opinion_detail_source").html(array.source_url);
            //信息内容
            $("#opinion_detail_content").html(array.content);
            //发布时间
            $("#opinion_detail_time").html(array.createTime);
            //处理状态
            $("#opinion_detail_status").html(array.status);
            //处理描述
            $("#opinion_detail_solvecontent").html(array.processingdetails);
            if (!isNull(array.pic) && array.pic.length > 0) {
                $(".opinioned_imgs").show();
                window.visitEnterpriseImg = array.pic;

                var html = '<table class="inp_table opinioned_imgs" cellpadding="0" cellspacing="0">';
                html += '       <tr>';
                html += '           <td>上传图片</td>';
                html += '           <td colspan="2">';
                html += '               <input class="small" readonly type="text">';
                html += '           </td>';
                html += '       </tr>';
                html += '       <tr>';
                html += '           <td colspan="3" class="commodityAddImgs">';
                html += '               <div id="opinioned_detail_img_wrapper" class="jszx-wrapper">';
                html += '                   <div class="jszx-scroller" id="opinioned_detail_img_scroll">';
                html += '                       <div id="opinioned_detail_img">';
                html += '                         </div>';
                html += '                   </div>';
                html += '               </div>';
                html += '           </td>';
                html += '       </tr>';
                html += '   </table>';
                createListRow(html).appendTo("#opinioned_imgs");
                window.opinionedImgArray = array.pic;
                for (var i = 0; i < array.pic.length; i++) {
                    console.log("数据：" + array.pic[i]);
                    var html = '<img class="goodsimgone" style="padding-top:2em;" src="' + window.imgUrl + array.pic[i] + '" id="choicemore">';
                    var $html = createListRow(html).appendTo("#" + window.upload_addimg);
                    $html.listen("quickClick", function (e) {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        window.lookType = "opinioned";
                        app.$router.push("../casetask/photoLook.html");
                    });
                }
                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.pic.length, window.upload_addimg);
            } else {
                $(".opinioned_imgs").hide();
            }
            //网格名称
            $("#opinioned_detail_title").html(array.title);
            //网格名称
            $("#opinioned_detail_gridName").html(array.deptName);
            //作者
            $("#opinioned_detail_level_id").html(array.level_id);
            //作者
            $("#opinioned_detail_author").html(array.author);
            //预警信息
            $("#opinioned_detail_warninginfo").html(array.keywords);
            //信息来源
            $("#opinioned_detail_source").html(array.source_url);
            //信息内容
            $("#opinioned_detail_content").html(array.content);
            //发布时间
            $("#opinioned_detail_time").html(array.createTime);
            //处理状态
            $("#opinioned_detail_status").html(array.status);
            //处理描述
            $("#opinioned_detail_solvecontent").html(array.processingdetails);
        } else {

            toast(data.message);
        }
    }, "");
}
/**
 * 舆情处理步骤
 */
function get_publicOpinionStep() {
    console.log("id：" + window.opinionInfoRow_Id);
    var obj = "";
    obj += toJson("row_id", window.opinionInfoRow_Id) + "&";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("queryType", window.opinionSearchType);
    doPost("app_publicOpinionContent.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.history;
            for (var i = 0; i < array.length; i++) {
                var costTime = "";
                if (!isNull(array[i].costTime)) {
                    costTime = array[i].costTime;
                }
                var html = '';
                html += '<div>';
                //var operationName = "";
                //if (!isNull(array[i].operation)) {
                //    operationName = "（" + array[i].operationName + "）";
                //}
                html += '    <div class="oranger_font bigger">' + [i + 1] + "、" + array[i].operation;
                //if (1 == parseInt(array[i].isHasAttachment)) {
                //    html += '       <div class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;">图片</div>';
                //}
                html += '    </div>';
                html += '    <p class="normal">开始时间：' + array[i].startTime + '</p>';
                html += '    <p class="normal">结束时间：' + array[i].endTime + '</p>';
                if (!isNull(array[i].userName)) {
                    html += '    <p class="normal">处理人：' + array[i].userName + '</p>';
                }
                html += '    <p class="normal">处理意见：' + array[i].comment + '</p>';
                html += '    <p class="normal">状态：' + array[i].status + '，用时：' + costTime + '</p>';
                html += '</div>';
                var $html = createListRow(html).appendTo("#checked_steps_html");
                $html.data('data', array[i]);
                $html.listen("quickClick", function (e) {
                    //点击事件
                    var data = $(e.currentTarget).data("data");
                    console.log("type:" + data.opValue);
                    //if (!isNull(data.taskId) && 1 == parseInt(data.isHasAttachment)) {
                    //    window.caseTaskIdPic = data.taskId;
                    //    window.lookType = "casestep";
                    //    app.$router.push("../casetask/photoLook.html");
                    //}
                });
            }
        } else {

            toast(data.message);
        }
    }, "");
}
/**
 * 舆情处理
 * @param row_id
 * @param address
 * @param problem
 */
function app_publicOpinionFeedBack(reason) {
    var obj = "";
    obj += toJson("row_id", window.opinionInfoRow_Id) + "&";
    obj += toJson("pictures", $.trim(window.picture_upImg)) + "&";
    obj += toJson("processingdetails", reason);
    doPost("app_publicOpinionFeedBack.action", obj, function (data) {
        if (data.code == 0) {
            toast(data.message);
            window.opinionWelcomePage = "";
            waitJumpPage("../opinion/opinionWelcomeList.html")
        } else {
            toast(data.message);
        }
    }, "", "");
}
/**
 *舆情流程
 * @param businessKey
 */
function app_publicOpinionTask(comment) {
    var obj = "";
    obj += toJson("businessKey", $.trim(window.opinionInfoRow_Id)) + "&";//业务id
    obj += toJson("userId", window.localStorage.userId) + "&";//当前登陆人id
    obj += toJson("nextId", $.trim(window.nextUserId)) + "&";//任务接收人id
    obj += toJson("comment", $.trim(comment)) + "&";//处理意见
    obj += toJson("opearation", $.trim(window.opinionLevel));//任务操作标志0:签收任务1:指派下级部门2:部门内指派3:办结反馈
    doPost("app_publicOpinionTask.action", obj, function (data) {
        if (data.code == 0) {
            window.opinionWelcomePage = "";
            waitJumpPage("../opinion/opinionWelcomeList.html");
        } else {
            toast(data.message);
        }
    }, "");
}

/**
 *领导查看全部工单
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param eventComponent 事件部门
 * @param bigClass 大类
 * @param smallClass 小类
 */
function app_allOrderList(reset, pageNum, startTime, endTime, eventComponent, bigClass, smallClass) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#all_welcome_html").empty();
    }
    var obj = "";
    obj += toJson("startTime", startTime) + "&";
    obj += toJson("eventComponent", eventComponent) + "&";
    obj += toJson("bigClass", bigClass) + "&";
    obj += toJson("smallClass", smallClass) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("endTime", endTime);
    doPost("appWorkOrder_workOrderListAll.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total, 6);
            console.log("长度：" + data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var bigtype = "";
                    if (!isNull(array[i].eventComponent)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].eventComponent;
                        } else {
                            bigtype = bigtype + "/" + array[i].eventComponent;
                        }
                    }
                    if (!isNull(array[i].bigClass)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].bigClass;
                        } else {
                            bigtype = bigtype + "/" + array[i].bigClass;
                        }
                    }
                    if (!isNull(array[i].smallClass)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].smallClass;
                        } else {
                            bigtype = bigtype + "/" + array[i].smallClass;
                        }
                    }
                    var html = '';
                    html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                    html += '   <tr>';

                    // if (1 == queryType) {
                    //     html += '       <td colspan="2" class="" style="text-align: left;">' + bigtype + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].status + '</span></td>';
                    //     //html += '       <td class="small red_font"></td>';
                    // } else {
                    //     html += '       <td colspan="2" class="small" style="text-align: left;">' + bigtype + '</td>';
                    // }
                    html += '       <td colspan="2" class="" style="text-align: left;">' + bigtype + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].status + '</span></td>';

                    html += '   <tr>';
                    html += '       <td class="">' + array[i].caseno + '</td>';
                    html += '       <td class="">' + array[i].reportTime + '</td>';
                    html += '   </tr>';
                    html += '   <tr>';
                    if(array[i].location){
                        html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                    }else{
                        html += '       <td colspan="2" class="small gray_font">' + '' + '</td>';
                    }
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#all_welcome_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.caseRow_id = data.row_id;
                        //window.caseRow_id = data.caseno;

                        window.welcomeCheckJumpType = "";
                        window.CaseTaskDetailPage = "";
                        app.$router.push("../casetask/caseAllDetail.html");
                        // if (1 == parseInt(queryType)) {
                        //     window.CaseTaskDetailPage = "";
                        //     app.$router.push("../casetask/caseTaskDetail.html");
                        // } else {
                        //     window.CaseTaskedDetailPage = "";
                        //     app.$router.push("../casetask/caseTaskedDetail.html");
                        // }
                    });
                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#all_welcome_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}




/**
 *工单列表
 * @param queryType 查询类型  1：待办 2：已办
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param eventComponent 事件部门
 * @param bigClass 大类
 * @param smallClass 小类
 */
function app_workOrderList(reset, pageNum, queryType, startTime, endTime, eventComponent, bigClass, smallClass) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#case_welcome_html").empty();
    }
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("queryType", queryType) + "&";
    obj += toJson("startTime", startTime) + "&";
    obj += toJson("eventComponent", eventComponent) + "&";
    obj += toJson("bigClass", bigClass) + "&";
    obj += toJson("smallClass", smallClass) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("endTime", endTime);
    doPost("appWorkOrder_workOrderList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total, 6);
            if(data.datas.length < 20){
                console.log('进来了')
                window.checkNum = 2;
            }
            console.log("长度：" + data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var bigtype = "";
                    if (!isNull(array[i].eventComponent)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].eventComponent;
                        } else {
                            bigtype = bigtype + "/" + array[i].eventComponent;
                        }
                    }
                    if (!isNull(array[i].bigClass)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].bigClass;
                        } else {
                            bigtype = bigtype + "/" + array[i].bigClass;
                        }
                    }
                    if (!isNull(array[i].smallClass)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].smallClass;
                        } else {
                            bigtype = bigtype + "/" + array[i].smallClass;
                        }
                    }
                    var html = '';
                    html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                    html += '<tr><td colspan="2" style="text-align: left;">'+ ((data.page.pageNum - 1)*20 +(i+1)) +'</td></tr>'
                    html += '   <tr>';

                    if (1 == queryType) {
                    	html += '       <td colspan="2" class="" style="text-align: left;">' + bigtype + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].status + '</span></td>';
                        //html += '       <td class="small red_font"></td>';
                    } else {
                        html += '       <td colspan="2" class="small" style="text-align: left;">' + bigtype + '</td>';
                    }
                    html += '   <tr>';
                    html += '       <td class="">' + array[i].caseno + '</td>';
                    html += '       <td class="">' + array[i].reportTime + '</td>';
                    html += '   </tr>';
                    html += '   <tr>';
                    if (array[i].location) {
                    	html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                    } else {
                    	html += '       <td colspan="2" class="small gray_font"></td>';
                    }

                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#case_welcome_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.caseRow_id = data.row_id;
                        //window.caseRow_id = data.caseno;

                        window.welcomeCheckJumpType = "";
                        if (1 == parseInt(queryType)) {
                            window.CaseTaskDetailPage = "";
                            app.$router.push("../casetask/wiatCaseTaskDetail.html");
                        } else {
                            window.CaseTaskedDetailPage = "";
                            app.$router.push("../casetask/alreadyCaseTaskedDetail.html");
                        }
                    });
                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#case_welcome_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
        window.flag1 = true;
    }, "");
}



/**
 * 工单详情
 * @param row_id
 */
function app_workOrderDetail(row_id) {
    var obj = "";

    obj += toJson("loginId", window.localStorage.loginId) + "&";
    //obj += toJson("type", window.thisCaseQueryType) + "&";
    obj += toJson("rowId", row_id);
    doPost("dsbOrderDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(array.operationList) && array.operationList.length > 0) {
                window.operationListArrayInfo = [];
                for (var i = 0; i < array.operationList.length; i++) {
                    var info = {
                        opName: array.operationList[i].opName,
                        opValue: array.operationList[i].opValue,
                        destId: array.operationList[i].destId
                    };
                    window.operationListArrayInfo.push(info);
                }
                $("#case_task_detail_page .page_footer").show();
                //initCaseTaskDetail();
            } else {
                $("#case_task_detail_page .page_footer").hide();
                //initCaseTaskDetail();
            }
            if (!isNull(array.pics)) {
                $("#case_task_detail_page .commodityAddImgs").show();
                $("#case_tasked_detail_page .commodityAddImgs").show();
                if (array.pics.indexOf(";") > 0) {
                    var info = array.pics.split(";");
                    if (!isNull(info) && info.length > 0) {
                        for (var j = 0; j < info.length; j++) {
                            if (!isNull(info[j])) {
                                var commodity_add_img_info = ' <div class="imgdiv">';
                                //commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
                                commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                commodity_add_img_info += '</div>';
                                var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                $commodity_add_img_info.data('data', info[j]);
                                $commodity_add_img_info.listen("quickClick", function (e) {
                                	var data = $(e.currentTarget).data("data");
                                	var arrdata=[];
                                	arrdata.push(data);
//                                	window.opinionedImgArray = arrdata;
//                                	window.lookType = "opinioned";
//                                    app.$router.push("../casetask/photoLook.html");
                         var url=window.imgUrl+arrdata[0];
                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });
                                });
                            }
                        }
                        window.opinionedImgArray = info;
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.pics.length, window.upload_addimg);
                    }
                } else {
                	var arr = [];
                	arr.push(array.pics);
                    window.opinionedImgArray = arr;
                    var commodity_add_img_info = ' <div class="imgdiv">';
                    //commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + array.pics + '">';
                    commodity_add_img_info += '</div>';
                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                    $commodity_add_img_info.data('data', arr);
                    $commodity_add_img_info.listen("quickClick", function (e) {
                     	var data = $(e.currentTarget).data("data");

//                    	window.opinionedImgArray = data;
//                    	window.lookType = "opinioned";
//                        app.$router.push("../casetask/photoLook.html");
                        var url=window.imgUrl+data[0];
                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });
                    });

                }
                //$("#good_num").val(window.picture_array.length + "/5");
            } else {
                $("#case_task_detail_page .commodityAddImgs").hide();
                $("#case_tasked_detail_page .commodityAddImgs").hide();
            }
            window.caseTaskOneTaskId = array.taskId;
            //步骤
            if (array.processSteps.length>0) {
            	 var html = '';
            	 var arr=array.processSteps;
            	 for(var k=0;k<arr.length;k++){
                 html += '<div class="list_row_case"><div>';

                 html += '    <div class="oranger_font bigger">' + [k + 1] + "、" + arr[k].name;
                 if (!isNull(arr[k].url)) {
                     html += '       <div  url="'+arr[k].url+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                 }
                 html += '    </div>';
//                 html += '    <p class="normal">开始时间：' + arr[k].startTime + '</p>';
                 html += '    <p class="normal">处理时间：' + arr[k].endTime + '</p>';
                 html += '    <p class="normal">处理人：' + arr[k].userName + '</p>';
                 html += '    <p class="normal">处理情况：' + arr[k].message + '</p>';
                 html += '</div></div>';


            	 }
            	 if(window.thisCaseQueryType=="2"){
            		 $("#case_tasked_steps_html").html(html);
            	 }else{
            		 $("#case_task_steps_html").html(html);
            	 }

            }else{
            	 $("#case_task_steps_html").empty();
            }
            if(array.dispose=="1"){
            	$("#task_disposeResult_title_tr").show();
            	$("#task_disposeResult_tr").show();
            	$("#task_disposeResult_img_title_tr").show();
            	$("#task_disposeResult_img_tr").show();
            	$("#task_disposeResult").val(array.disposeResult);
            	$("#tasked_disposeResult_title_tr").show();
            	$("#tasked_disposeResult_tr").show();
            	$("#tasked_disposeResult_img_title_tr").show();
            	$("#tasked_disposeResult_img_tr").show();
            	$("#tasked_disposeResult").val(array.disposeResult);
            	if (!isNull(array.backpath)) {
                    $("#case_task_detail_page .commodityAddImgs").show();
                    $("#case_tasked_detail_page .commodityAddImgs").show();
                    if (array.backpath.indexOf(";") > 0) {
                        var info = array.backpath.split(";");
                        if (!isNull(info) && info.length > 0) {
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    //commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg_dispose);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
//                                        window.lookType = "opinioned";
//                                        app.$router.push("../casetask/photoLook.html");
                                         var url=window.imgUrl + info[j];
                                                                 cordova.plugins.StartActivity.startActivity(url,function (data) {
                                                                                 },function (error) {
                                                                                     console.log("startActivity error:" + error);
                                                                                 });
                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.backpath.length, window.upload_addimg_dispose);
                        }
                    } else {
                    	var arr = [];
                    	arr.push(array.backpath);
                        window.opinionedImgArray = arr;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        //commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + array.backpath + '">';
                        commodity_add_img_info += '</div>';
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg_dispose);
                        $commodity_add_img_info.listen("quickClick", function (e) {
//                            window.lookType = "opinioned";
//                            app.$router.push("../casetask/photoLook.html");
                            var url=window.imgUrl + info[j];
                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                             },function (error) {
                             console.log("startActivity error:" + error);
                            });
                        });

                    }
                    //$("#good_num").val(window.picture_array.length + "/5");
                }
            }else{
            	$("#task_disposeResult_title_tr").hide();
            	$("#task_disposeResult_tr").hide();
            	$("#task_disposeResult_img_title_tr").hide();
            	$("#task_disposeResult_img_tr").hide();
            	$("#tasked_disposeResult_title_tr").hide();
            	$("#tasked_disposeResult_tr").hide();
            	$("#tasked_disposeResult_img_title_tr").hide();
            	$("#tasked_disposeResult_img_tr").hide();
            }
            window.localStorage.originNum=array.originNum;
            //工单编号
            $("#case_task_detail_caseNo").val(array.caseNo);
            //工单来源
            $("#case_task_detail_orgin").val(array.origin);
            //部件编号
            //$("#case_task_detail_componentIdNo").val(array.componentIdNo);
            //所属网格
            $("#case_task_detail_gridId").val(array.gridName);
            //职能事项
            $("#case_task_detail_eventComponent").val(array.eventComponent);
            //大类
            $("#case_task_detail_bigClass").val(array.bigClass);
            //小类
            $("#case_task_detail_smallClass").val(array.smallClass);
            //上报时间
            $("#case_task_detail_reportTime").val(array.reportTime);
            //截止时间
            $("#case_task_detail_Deadline").val(array.deadline);
          //分管领导截止时间
            if(array.deadline2!=""){
     		   $("#case_deadline2_tr").show();
     		   $("#case_task_detail_deadline2").val(array.deadline2);
     	   }else{
     		   $("#case_deadline2_tr").hide();
     	   }
            $("#case_task_detail_Deadline").val(array.deadline);
          //延期时间
            $("#case_task_detail_delayNum").val(array.delayNum);
            if(array.delayNum==""){
            	$("#case_task_detail_delayNum").hide();
            }else{
            	$("#case_task_detail_delayNum").show();
            }
            //上报人
            $("#case_task_detail_reportPerson").val(array.reportPerson);
            //联系方式
            $("#case_task_detail_reportPersonPhone").val(array.reportPersonPhone);
            //位置描述
            $("#case_task_detail_location").html(array.location);
            //问题描述
            $("#case_task_detail_problem").html(array.problem);
            if (!isNull(array.delayType)) {
                //延期类型
                //$("#case_tasked_detail_delayType_tr").show();
                //延期时长
                //$("#case_tasked_detail_delayNum_tr").show();
                //var delayType = "";
                //if (0 == parseInt(array.delayType)) {
                //    delayType = "申请延期";
                //} else if (1 == parseInt(array.delayType)) {
                //    delayType = "同意延期";
                //} else if (2 == parseInt(array.delayType)) {
                //    delayType = "不同意延期";
                //}
                //延期类型
                //$("#case_tasked_detail_delayType").val(delayType);
                //延期时长
                //$("#case_tasked_detail_delayNum").val(array.delayNum);
            } else {
                //延期类型
                //$("#case_tasked_detail_delayType_tr").hide();
                //延期时长
                //$("#case_tasked_detail_delayNum_tr").hide();
            }
            if (!isNull(array.delayType)) {
                //延期类型
                //$("#case_task_detail_delayType_tr").show();
                //延期时长
                //$("#case_task_detail_delayNum_tr").show();
                //var delayType = "";
                //if (0 == parseInt(array.delayType)) {
                //    delayType = "申请延期";
                //} else if (1 == parseInt(array.delayType)) {
                //    delayType = "同意延期";
                //} else if (2 == parseInt(array.delayType)) {
                //    delayType = "不同意延期";
                //}
                //延期类型
                //$("#case_task_detail_delayType").val(delayType);
                //延期时长
                //$("#case_task_detail_delayNum").val(array.delayNum);
            } else {
                //延期类型
                //$("#case_task_detail_delayType_tr").hide();
                //延期时长
                //$("#case_task_detail_delayNum_tr").hide();
            }
            //工单编号
            $("#case_tasked_detail_caseNo").val(array.caseNo);
            //工单来源
            $("#case_tasked_detail_orgin").val(array.origin);
            //部件编号
            //$("#case_tasked_detail_componentIdNo").val(array.componentIdNo);
            //所属网格
            $("#case_tasked_detail_gridId").val(array.gridName);
            //职能事项
            $("#case_tasked_detail_eventComponent").val(array.eventComponent);
            //大类
            $("#case_tasked_detail_bigClass").val(array.bigClass);
            //小类
            $("#case_tasked_detail_smallClass").val(array.smallClass);
            //上报时间
            $("#case_tasked_detail_reportTime").val(array.reportTime);
            //截止时间
            $("#case_tasked_detail_Deadline").val(array.deadline);
            //分管领导截止时间
            if(array.deadline2!=""){
     		   $("#case_tasked_deadline2_tr").show();
     		   $("#case_tasked_detail_deadline2").val(array.deadline2);
     	   }else{
     		   $("#case_tasked_deadline2_tr").hide();
     	   }
            //延期时间
            $("#case_tasked_detail_delayNum").val(array.delayNum);
            //上报人
            $("#case_tasked_detail_reportPerson").val(array.reportPerson);
            //联系方式
            $("#case_tasked_detail_reportPersonPhone").val(array.reportPersonPhone);
            //位置描述
            $("#case_tasked_detail_location").html(array.location);
            //问题描述
            $("#case_tasked_detail_problem").html(array.problem);
            //领导查看
          //工单编号
            $("#caseAll_task_detail_caseNo").val(array.workNo);
            //工单来源
            $("#caseAll_task_detail_orgin").val(array.orgin);
            //部件编号
            //$("#case_tasked_detail_componentIdNo").val(array.componentIdNo);
            //所属网格
            $("#caseAll_task_detail_gridId").val(array.gridName);
            //职能事项
            $("#caseAll_task_detail_eventComponent").val(array.eventComponent);
            //大类
            $("#caseAll_task_detail_bigClass").val(array.bigClass);
            //小类
            $("#caseAll_task_detail_smallClass").val(array.smallClass);
            //上报时间
            $("#caseAll_task_detail_reportTime").val(array.reportTime);
            //截止时间
            $("#caseAll_task_detail_Deadline").val(array.deadline);
            //延期时间
            $("#caseAll_task_detail_delayNum").val(array.delayNum);
            //上报人
            $("#caseAll_task_detail_reportPerson").val(array.reportPerson);
            //联系方式
            $("#caseAll_task_detail_reportPersonPhone").val(array.reportPersonPhone);
            //位置描述
            $("#caseAll_task_detail_location").html(array.location);
            //问题描述
            $("#caseAll_task_detail_problem").html(array.problem);

            window.localStorage.orgin=array.orgin;
            if(array.orgin=="领导交办"){
            	$("#caseTaskDetailTitle").text("办理详情");
            	$("#caseTaskDetailNum").text("事项编号");
            	$("#caseTaskDetailOrgin").text("事项来源");
            	$("#caseTaskTime").text("交办时间");
            	$("#caseTaskQuestionDesc").text("事项描述");
            	$("#caseTaskDetailPeople").text("交办领导");
            	$("#sswg_task_tr").hide();
            	$("#znsx_task_tr").hide();
            	$("#big_task_tr").hide();
            	$("#small_task_tr").hide();
            	$("#contact_tr").hide();
            	$("#positionDesc_tr").hide();
            }else{
            	$("#caseTaskDetailTitle").text("工单详情");
            	$("#caseTaskDetailNum").text("工单编号");
            	$("#caseTaskDetailOrgin").text("工单来源");
            	$("#caseTaskTime").text("上报时间");
            	$("#caseTaskQuestionDesc").text("问题描述");
            	$("#caseTaskDetailPeople").text("上报人");
            	$("#sswg_task_tr").show();
            	$("#znsx_task_tr").show();
            	$("#big_task_tr").show();
            	$("#small_task_tr").show();
            	$("#contact_tr").show();
            	$("#positionDesc_tr").show();
            }
            if(array.orgin=="领导交办"){
            	$("#caseDetailTitle").text("办理详情");
            	$("#caseDetailNum").text("事项编号");
            	$("#caseDetailOrgin").text("事项来源");
            	$("#caseDetailTime").text("交办时间");
            	$("#caseQuestionDesc").text("事项描述");
            	$("#caseDetailPeople").text("交办领导");
            	$("#sswg_case_tr").hide();
            	$("#znsx_case_tr").hide();
            	$("#big_case_tr").hide();
            	$("#small_case_tr").hide();
            	$("#contactTaskd_tr").hide();
            	$("#positionDesctaskd_tr").hide();
            }else{
            	$("#caseDetailTitle").text("工单详情");
            	$("#caseDetailNum").text("工单编号");
            	$("#caseDetailOrgin").text("工单来源");
            	$("#caseDetailTime").text("上报时间");
            	$("#caseQuestionDesc").text("问题描述");
            	$("#caseDetailPeople").text("上报人");
            	$("#sswg_case_tr").show();
            	$("#znsx_case_tr").show();
            	$("#big_case_tr").show();
            	$("#small_case_tr").show();
            	$("#contactTaskd_tr").show();
            	$("#positionDesctaskd_tr").show();
            }
        } else {
            //if (reset) {
            //    reset(true);
            //}
            toast(data.message);
        }
    }, "");
}

function app_myOrderDetail(row_id) {
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("type", 2) + "&";
    obj += toJson("row_id", row_id);
    doPost("appWorkOrder_workOrderDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(array.pics)) {
                $("#case_detail_page .commodityAddImgs").show();
                if (array.pics.indexOf(";") > 0) {
                    var info = array.pics.split(";");
                    if (!isNull(info) && info.length > 0) {
                        for (var j = 0; j < info.length; j++) {
                            if (!isNull(info[j])) {
                                var commodity_add_img_info = ' <div class="imgdiv">';
                                //commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
                                commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                commodity_add_img_info += '</div>';
                                var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                $commodity_add_img_info.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.lookType = "opinioned";
                                    app.$router.push("../casetask/photoLook.html");
                                });
                            }
                        }

                        window.opinionedImgArray = info;
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.pics.length, window.upload_addimg);
                    }
                } else {
                	var arr = [];
                	arr.push(array.pics);
                    window.opinionedImgArray = arr;
                    var commodity_add_img_info = ' <div class="imgdiv">';
                    //commodity_add_img_info += '<img class="delimg" src="/static/resources/images/del3.png">';
                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + array.pics + '">';
                    commodity_add_img_info += '</div>';
                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                    $commodity_add_img_info.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.lookType = "opinioned";
                        app.$router.push("../casetask/photoLook.html");
                    });
                }
                //$("#good_num").val(window.picture_array.length + "/5");
            } else {
                $("#case_detail_page .commodityAddImgs").hide();
            }
            //工单编号
            $("#case_task_detail_caseNo").val(array.workNo);
            //工单来源
            $("#case_task_detail_orgin").val(array.origin);
            //部件编号
            //$("#case_task_detail_componentIdNo").val(array.componentIdNo);
            //所属网格
          $("#case_detail_gridCode").val(array.gridName);
//            //职能事项
//            $("#case_detail_eventComponent").val(array.eventComponent);
//            //大类
//            $("#case_detail_bigClass").val(array.bigClass);
//            //小类
//            $("#case_detail_smallClass").val(array.smallClass);
//            //上报时间
//            $("#case_detail_reportTime").val(array.reportTime);
//            //截止时间
//            $("#case_task_detail_Deadline").val(array.deadline);
//            //上报人
//            $("#case_task_detail_reportPerson").val(array.reportPerson);
//            //联系方式
//            $("#case_task_detail_reportPersonPhone").val(array.reportPersonPhone);
            //位置描述
            $("#case_detail_address").html(array.location);
            //问题描述
            $("#case_detail_problem").html(array.problem);
            window.localStorage.origin=array.origin;
            if(array.orgin=="领导交办"){
            	$("#caseTaskDetailTitle").text("办理详情");
            	$("#caseTaskDetailNum").text("事项编号");
            	$("#caseTaskDetailOrgin").text("事项来源");
            	$("#caseTaskTime").text("交办时间");
            	$("#caseTaskQuestionDesc").text("事项描述");
            	$("#caseTaskDetailPeople").text("交办领导");
            	$("#sswg_task_tr").hide();
            	$("#znsx_task_tr").hide();
            	$("#big_task_tr").hide();
            	$("#small_task_tr").hide();
            }else{
            	$("#caseTaskDetailTitle").text("工单详情");
            	$("#caseTaskDetailNum").text("工单编号");
            	$("#caseTaskDetailOrgin").text("工单来源");
            	$("#caseTaskTime").text("上报时间");
            	$("#caseTaskQuestionDesc").text("问题描述");
            	$("#caseTaskDetailPeople").text("上报人");
            	$("#sswg_task_tr").show();
            	$("#znsx_task_tr").show();
            	$("#big_task_tr").show();
            	$("#small_task_tr").show();
            }
        } else {
            //if (reset) {
            //    reset(true);
            //}
            toast(data.message);
        }
    }, "");
}

/**
 * 工单指派人员网格
 */
function appWorkOrder_getPersonData() {
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("taskId", window.caseTaskOneTaskId) + "&";
    obj += toJson("opValue", window.caseOneTaskAction.opValue) + "&";
    obj += toJson("destId", window.caseOneTaskAction.destId);
    doPost("appWorkOrder_getPersonData.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0].children;
            console.log("数据：" + JSON.stringify(array));
            if (!isNull(array) && array.length > 0) {
                showChoiceOne();
                setTimeout(function () {
                    for (var i = 0; i < array.length; i++) {
                        var info = '<p class="alert_edit_title gray_line_bottom">' + array[i].text + '</p>';
                        var $row = createListRow(info).appendTo("#choice_one_html");
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            window.caseOneTaskPeopleId = data.id;
                            $("#case_task_edit_people").val(data.text);
                        });
                    }
                }, 500)
            }
        } else {
            //if (reset) {
            //    reset(true);
            //}
            toast(data.message);
        }
    }, "");
}
/**
 * 工单处理步骤
 * @param row_id
 */
function appWorkOrder_viewHistory() {
    $("#case_task_steps_html").empty();
    var obj = "";
    obj += toJson("row_id", window.caseRow_id) + "&";
    obj += toJson("loginId", window.localStorage.loginId) + "&";
    obj += toJson("leaderState", window.localStorage.userType) + "&";
    obj += toJson("taskId", window.caseTaskOneTaskId);
    doPost("appWorkOrder_viewHistory.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(array) && array.length > 0) {
            	var g=0;
                for (var i = 0; i < array.length; i++) {
                	if(array[i].taskName!=""){
                	var cost = "";
                    if (!isNull(array[i].cost)) {
                        cost = array[i].cost;
                    }
                    window.upfiletaskid=array[i].taskId;
                    var html = '';
                    html += '<div>';
                    var operationName = "";
                    if (!isNull(array[i].operationName)) {
                        operationName = "（" + array[i].operationName + "）";
                    }
                    html += '    <div class="oranger_font bigger">' + [g + 1] + "、" + array[i].taskName;
                    if (1 == parseInt(array[i].HasAttachment)) {
                        html += '       <div id="picImgfirst" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                    }
                    if (1 == parseInt(array[i].HasFile)) {
                        html += '       <div id="lookfilefirst" taskid="'+array[i].taskId+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">附件</div>';
                    }

                    if (1 == parseInt(array[i].isHasAttachment)) {
                        html += '       <div id="picImg" taskid="'+array[i].taskId+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                    }
                    if (1 == parseInt(array[i].isHasFile)) {
                        html += '       <div id="lookfile" taskid="'+array[i].taskId+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">附件</div>';
                    }
                    html += '    </div>';
                    html += '    <p class="normal">开始时间：' + array[i].startTime + '</p>';
                    html += '    <p class="normal">结束时间：' + array[i].endTime + '</p>';
                    if (!isNull(array[i].dealPerson)) {
                        html += '    <p class="normal">处理人：' + array[i].dealPerson + '</p>';
                    }
                    html += '    <p class="normal">处理情况：' + array[i].comment + '</p>';
                    html += '    <p class="normal">状态：' + array[i].status + '，用时：' + cost + '</p>';
                    html += '</div>';
                    var $html = createListRow(html).appendTo("#case_task_steps_html");
                    g+=1;
                    $html.data('data', array[i]);
                    $html.find("#picImg").listen("quickClick", function (e) {
                        //点击事件
                        //var data = $(e.currentTarget).data("data");
                        //console.log("type:" + data.opValue);
                        //if (!isNull(data.taskId) && 1 == parseInt(data.isHasAttachment)) {
                        	var taskid = $(e.currentTarget).attr("taskid");
                        	window.hasAttachment="";
                        	//window.caseTaskIdPic = data.taskId;
                            window.lookType = "casestep";
                            app.$router.push("../casetask/photoLook.html");
                       // }
                    });
                    $html.find("#lookfile").listen("quickClick", function (e) {
                        //点击事件
                    	var taskid = $(e.currentTarget).attr("taskid");
                    	var obj = "";
                    	obj += toJson("row_id", window.caseRow_id) + "&";
                        obj += toJson("taskId", taskid);
                        doPost("appWorkOrder_viewAttach.action", obj, function (data) {

                           if (data.code == 0) {
                        	   var houzhui=data.datas.url[0].split(".");
                               var url= window.imgUrl + data.datas.url[0];
                               var name="步骤完成附件下载"+"."+houzhui[1];
                               isFileExist(name, window.cacheDirectory, function (result) {
                                   /*     if(result){
                                           jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                                       }else{ */
                                           showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>",null,null,function () {
                                               showLoading("正在下载....");

                                               var fileTransfer = new FileTransfer();
                                               fileTransfer.download(
                                                   encodeURI(url),
                                                   window.cacheDirectoryPath+"/"+name,
                                                   function(entry){
                                                       hideLoading();
                                                       toast("下载成功！");

                                                       jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                                                   },
                                                   function(error){
                                                       hideLoading();
                                                       toast("下载失败，请重试");
                                                   }
                                               );
                                           })
                                    //   }
                                   });
                           }
                       });
                    });
                    $html.find("#lookfilefirst").listen("quickClick", function (e) {
                        //点击事件
                    	var taskid = $(e.currentTarget).attr("taskid");
                    	var obj = "";
                    	obj += toJson("row_id", window.caseRow_id) + "&";
                    	obj += toJson("hasFile", "1")+ "&";
                    	obj += toJson("taskId", "1");
                        doPost("appWorkOrder_viewAttach.action", obj, function (data) {

                           if (data.code == 0) {
                        	   var houzhui=data.datas.file[0].split(".");
                           var url= window.imgUrl + data.datas.file[0];
                           var name="步骤附件下载"+"."+houzhui[1];
                           console.log(url)
                           console.log(name)
                           isFileExist(name, window.cacheDirectory, function (result) {
                           /*     if(result){
                                   jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                               }else{ */
                                   showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>",null,null,function () {
                                       showLoading("正在下载....");

                                       var fileTransfer = new FileTransfer();
                                       fileTransfer.download(
                                           encodeURI(url),
                                           window.cacheDirectoryPath+"/"+name,
                                           function(entry){
                                               hideLoading();
                                               toast("下载成功！");

                                               jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                                           },
                                           function(error){
                                               hideLoading();
                                               toast("下载失败，请重试");
                                           }
                                       );
                                   })
                            //   }
                           });
                        }

                       });
                    });
                    $html.find("#picImgfirst").listen("quickClick", function (e) {
                        //点击事件


                        window.hasAttachment="1";
                        window.lookType = "leadercasestep";
                    	app.$router.push("../casetask/photoLook.html");

                    });
                }
                }
            } else {
                noListShow("", "", "", $("#case_task_steps_html"), "");
            }
        } else {
            toast(data.message);
        }
    }, "");
}
/*
 工单步骤图片
 */
function appWorkOrder_viewAttach() {
    $("#photo_look_look").empty();
    var obj = "";
    obj += toJson("row_id", window.caseRow_id) + "&";
    obj += toJson("taskId", window.caseTaskIdPic);
    doPost("appWorkOrder_viewAttach.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas.path;
            if (!isNull(array) && array.length > 0) {
                var thumbnailControl = new Array();
                var pics = [];
                for (var i = 0; i < array.length; i++) {
                    if (isNull(pics)) {
                        pics[0] = window.imgUrl + array[i];
                    } else {
                        var picslength = pics.length;
                        pics[picslength] = window.imgUrl + array[i];
                    }
                }
                var markers = ["/static/resources/images/d_white.png", "/static/resources/images/d_blue.png"];
                var dp = new DynamicPic({
                    "id": "photo_look_look", //id，必须
                    "pics": pics, //图片URL的数组，必须
                    "markers": markers,
                    "width": window.innerWidth, //默认为window.innerWidth
                    "height": window.innerHeight / 1.27,
                    //"thumbnail": true,
                    "text": "   "
//                "thumbnailCount":  thumbnailControl.length,
//                "thumbnailControl": thumbnailControl,
//                "onClick": function(index) {
//                    console.log("这是第" + (index + 1) + "张图片");
//                    console.log($().attr("src"));
//                },
//                "onChange": function(index) {
//                    //alert("这是第"+(index+1)+"张图片");
//                }
                });
            } else {
                noListShow("", "", "", $("#photo_look_look"), "");
            }
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 检查列表
 * @param queryType 查询类型  1：待办 2：已办
 * @param searchContent 搜索内容
 * @param type 所属条线
 * @param startTime 抽检开始时间
 * @param endTime 抽检结束时间
 */
function app_inspectList(reset, pageNum, queryType, searchContent) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#check_welcome_list_html").empty();
    }
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("queryType", queryType) + "&";
    obj += toJson("searchContent", searchContent) + "&";
    obj += toJson("type", $.trim(window.lineTypeId)) + "&";
    obj += toJson("startTime", $.trim(window.searchStartTime)) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("endTime", $.trim(window.searchOverTime));
    doPost("app_inspectList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="list_table" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td>' + array[i].name + '</td>';
                    var statusName = "";
                    //if (1 == parseInt(array[i].status)) {
                    //    statusName = "未完成";
                    //} else {
                    //    statusName = "已完成";
                    //}
                    html += '       <td class="small">' + array[i].statusName + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    html += '<table cellspacing="0" class="gray_line_bottom list_table_topnone" cellpadding="0">';
                    html += '   <tr>';
                    if (1 == parseInt(queryType)) {
                        html += '       <td class="small gray_font">截止时间：<span class="gray_font ">' + array[i].dealLine + '</span></td>';
                    } else {
                        html += '       <td class="small gray_font">抽检时间：<span class="gray_font ">' + array[i].samplingTime + '</span></td>';
                    }

                    html += '       <td class="small gray_font">条线：<span class="gray_font ">' + array[i].type + '</span></td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#check_welcome_list_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.checkWelcomeInfo = data;
                        if (1 == parseInt(queryType)) {
                            window.welcomeCheckJumpType = "";
                            window.ChecTaskDetailPage = "";
                            app.$router.push("../check/checkTaskDetail.html");
                        } else {
                            //if (1 == data.status) {
                            //    toast("尚未检查完成");
                            //} else {
                            app.$router.push("../check/checkedTaskDetail.html");

                            //}

                        }

                    });

                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#check_welcome_list_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 * 检查条线
 */
function app_inspectLines() {
    var obj = "";
    //obj += toJson("selDept","");
    doPost("app_inspectLines.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(array) && array.length > 0) {
                var info1 = '<p class="gray_line_bottom filter_line_height">条线：</p>';
                createListRow(info1).appendTo("#alert_filter_content");
                var info = '<p class="gray_line_bottom" style="padding:0.5em 0.5em 0.5em 2em;">' + window.noInfoList[0].item_text + '</p>';
                var $info = createListRow(info).appendTo("#alert_filter_content");
                $info.data('data', window.noInfoList[0]);
                $info.listen("quickClick", function (e) {
                    var data = $(e.currentTarget).data("data");
                    $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                    $(e.currentTarget).find("p").addClass("oranger_font");
                    window.lineTypeId = data.item_value;
                });
                for (var i = 0; i < array.length; i++) {
                    var sexinfo = "";
                    if (window.lineTypeId == array[i].lawenforcementlineId) {
                        sexinfo += '<p class="gray_line_bottom oranger_font" style="padding:0.5em 0.5em 0.5em 2em;">' + array[i].lawenforcementline + '</p>';
                    } else {
                        sexinfo += '<p class="gray_line_bottom" style="padding:0.5em 0.5em 0.5em 2em;">' + array[i].lawenforcementline + '</p>';
                    }
                    var $sex_row = createListRow(sexinfo).appendTo("#alert_filter_content");
                    $sex_row.data('data', array[i]);
                    $sex_row.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                        $(e.currentTarget).find("p").addClass("oranger_font");
                        window.lineTypeId = data.lawenforcementlineId;
                        //if ("/static/resources/images/icon_radio_blue.png" == $(e.currentTarget).find("p").find("img").attr("src")) {
                        //    $(e.currentTarget).find("p").find("img").attr("src", "/static/resources/images/icon_radio_gray.png");
                        //    window.filter_sex_code = "";
                        //    console.log("window.filter_sex_code" + window.filter_sex_code);
                        //} else {
                        //    $("#alert_filter_content .list_row img").each(function () {
                        //        $(this).attr("src", "/static/resources/images/icon_radio_gray.png");
                        //    });
                        //    $(e.currentTarget).find("p").find("img").attr("src", "/static/resources/images/icon_radio_blue.png");
                        //    if (type == 4) {
                        //        window.filter_server_code = data.item_code;
                        //        window.mapTypeName = data.item_text;
                        //        $("#publicServiceListPage .page_header_title").html(window.mapTypeName);
                        //        console.log("window.filter_server_code" + window.filter_server_code + data.item_text);
                        //    } else {
                        //        window.filter_sex_code = data.item_code;
                        //        console.log("window.filter_sex_code" + window.filter_sex_code + data.item_text);
                        //    }


                        //}
                    });

                }
            } else {
                //性别信息
            }
        } else {
            //if (reset) {
            //    reset(true);
            //}
            toast(data.message);
        }
    }, "");
}
/**
 *检查项
 * @param type 所属条线
 */
function app_inspectTypeList(taskId) {
    $("#check_table_html").empty();
    var obj = "";
    obj += toJson("taskId", taskId);
    doPost("app_inspectTypeList.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            window.checkInspectTypeInfo = array;
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table class="inp_table" cellpadding="0" cellspacing="0">';
                    html += '   <tr class="">';
                    html += '       <td class="" style="width:2.5em;">';
                    html += '           <img src="/static/resources/images/icon_block_gray.png" class="check_one_tr equalimg"/></td>';
                    html += '       <td class=" visit_enterprise_edit_page">' + (i + 1) + "、" + array[i].name + '</td>';
                    html += '   </tr>';
                    html += '   <tr>';
                    html += '       <td colspan="2" class="commodityAddImgs">';
                    html += '           <div id="check_table_img_wrapper_' + array[i].row_id + '" class="jszx-wrapper">';
                    html += '               <div class="jszx-scroller" id="check_table_img_scroll_' + array[i].row_id + '">';
                    html += '                   <div id="check_table_img_' + array[i].row_id + '">';
                    html += '                       <img class="goodsimgone" style="padding-top:2em;" src="/static/resources/images/icon_add_photo.png" id="choicemore">';
                    html += '                   </div>';
                    html += '               </div>';
                    html += '           </div>';
                    html += '       </td>';
                    html += '    </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#check_table_html");
                    $html.data('data', array[i]);
                    $html.find(".check_one_tr").listen("quickClick", function (e) {
                        var data = $(e.currentTarget).parent().parent().parent().parent().parent().data("data");
                        console.log("id：" + $(e.currentTarget).parent().parent().parent().prop("id"));
                        console.log("图片路径：" + $(e.currentTarget).parent().parent().parent().find("tr:first-child td:first-child img").attr("src"));
                        window.upload_imgscroll = "check_table_img_scroll_" + data.row_id;
                        window.upload_imgwrapper = "check_table_img_wrapper_" + data.row_id;
                        window.upload_addimg = "check_table_img_" + data.row_id;
                        window.upload_addimg_id = data.row_id;
                        window.upload_addimg_name = data.name;
                        getCheckPhoto();

                        console.log("class：" + $(e.currentTarget).parent().parent().parent().prop("class"));
                        //选中一条检查项
                        //window.checkRow_id = data.row_id;
                        //window.checkWelcomeType = data.type;
                        //app.$router.push("../patrol/patrolDetail.html");
                        console.log("选中的数据：" + JSON.stringify(data));
                    });
                    $html.find(".goodsimgone").listen("quickClick", function (e) {
                        var data = $(e.currentTarget).parent().parent().parent().parent().parent().parent().parent().parent().data("data");
                        console.log("class：" + $(e.currentTarget).parent().parent().parent().parent().parent().parent().parent().prop("id"));
                        console.log("id：" + $(e.currentTarget).parent().parent().parent().parent().parent().parent().parent().prop("class"));
                        console.log("选中的数据：" + JSON.stringify(data));
                        //选中一条检查项
                        window.upload_imgscroll = "check_table_img_scroll_" + data.row_id;
                        window.upload_imgwrapper = "check_table_img_wrapper_" + data.row_id;
                        window.upload_addimg = "check_table_img_" + data.row_id;
                        window.upload_addimg_id = data.row_id;
                        window.upload_addimg_name = data.name;
                        getCheckPhoto();
                    });
                }
            } else {
                noListShow("", "", "", $("#check_table_html"), "");
            }
            var inp_html = '<table class="inp_table check_table" style="margin-left: 0em;padding-left:1em;" cellpadding="0" cellspacing="0">';
            inp_html += '  <tr>';
            inp_html += '   <td style="padding-top:0.5em;">处理意见<span>*</span></td>';
            inp_html += '    <td colspan="2">';
            inp_html += '   <input class="auto_setInput gray_dark_font" style="color:#999999;text-align: right;" readonly="true" id="check_table_words"/>';
            inp_html += '   </td>';
            inp_html += '   </tr>';
            inp_html += '    <tr>';
            var id1 = "check_table_problem";
            var id2 = "check_table_words";
            inp_html += '    <td colspan="3">';
            inp_html += '   <textarea onfocus="newCheckWord(\'' + id1 + '\',500,\'' + id2 + '\')" onKeyUp="javascript:newCheckWord(\'' + id1 + '\',500,\'' + id2 + '\');"onMouseDown="javascript:newCheckWord(\'' + id1 + '\',500,\'' + id2 + '\');" placeholder="请输入处理意见" id="check_table_problem" style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;with:100%;"></textarea>';
            inp_html += '    </td>';
            inp_html += '    </tr>';
            inp_html += '    </table>';
            createListRow(inp_html).appendTo("#check_table_html");
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 检查任务详情
 * @param taskId
 */
function app_taskMessage(taskId) {
    $("#check_table_html").empty();
    var obj = "";
    obj += toJson("taskId", taskId);
    doPost("app_taskMessage.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            window.checkTaskDetailInfo = array;
            window.checkTaskDetaillvl = data.lvl;
            //企业名称
            $("#check_task_detail_enterpriseName").val(array.enterpriseName);
            //检查条线
            $("#check_task_detail_lawenforcementline").val(array.lawenforcementline);
            //抽检方式
            $("#check_task_detail_samplingmethod").val(array.samplingmethod);
            //创建时间
            $("#check_task_detail_createTime").val(array.createTime);
            $("#check_task_detail_endTime").val(array.dealLine);

            //创建人
            $("#check_task_detail_createUserName").val(array.createUserName);
            //企业名称
            $("#checked_task_detail_enterpriseName").val(array.enterpriseName);
            //检查条线
            $("#checked_task_detail_lawenforcementline").val(array.lawenforcementline);
            //抽检方式
            $("#checked_task_detail_samplingmethod").val(array.samplingmethod);
            //创建时间
            $("#checked_task_detail_createTime").val(array.createTime);//创建时间
            $("#checked_task_detail_endTime").val(array.dealLine);

            //创建人
            $("#checked_task_detail_createUserName").val(array.createUserName);
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 *检查结果
 * @param type 所属条线
 */
function app_inspectDetail(row_id) {
    $("#checked_detail_correct_html").empty();
    $("#checked_detail_error_html").empty();
    var obj = "";
    obj += toJson("row_id", row_id);
    doPost("app_inspectDetail.action", obj, function (data) {
        //if (!reset) {
        //    hideLoading();
        //}
        if (data.code == 0) {
            //if (reset) {
            //    reset(true);
            //}

            var array = data.datas[0];
            $("#checked_detail_name").val(array.enterpriseName);
            $("#checked_detail_type").val(array.inspectType);
            $("#checked_table_detail").html(array.handleOpinions);
            //getDataLength(data.page.total);
            var arrayinfo = array.feedBack;
            if (!isNull(arrayinfo) && arrayinfo.length > 0) {
                window.checkedLookArrayImg = arrayinfo;
                for (var i = 0; i < arrayinfo.length; i++) {
                    var html = '';
                    html += '<table class="inp_table" cellpadding="0" cellspacing="0">';
                    html += '   <tr>';
                    html += '       <td class="" style="padding:0.5em;">' + (parseInt(i) + 1) + "、" + arrayinfo[i].name + '</td>';
                    html += '   </tr>';
                    if (!isNull(arrayinfo[i].path)) {
                        html += '   <tr>';
                        html += '       <td class="commodityAddImgs">';
                        html += '           <div id="checked_detail_img_wrapper" class="jszx-wrapper">';
                        html += '               <div class="jszx-scroller" id="checked_detail_img_scroll">';
                        html += '                   <div id="checked_detail_img">';
                        //for(var ij=0;j<array[i].picPath.length;j++){
                        html += '                       <img class="goodsimgone" style="padding-top:2em;" src="' + window.imgUrl + arrayinfo[i].path + '" id="choicemore">';
                        //}
                        html += '                   </div>';
                        html += '               </div>';
                        html += '           </div>';
                        html += '       </td>';
                        html += '   </tr>';
                    }
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#checked_detail_error_html");
                    $html.listen("quickClick", function (e) {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        window.lookType = "checkedDetail";
                        app.$router.push("../casetask/photoLook.html");
                    });
                }

            } else {
                //toast("没有违规项");
                noListShow("", "", "", $("#checked_detail_error_html"), "");
            }
            var content = '<table class="inp_table" cellpadding="0" cellspacing="0">';
            content += '        <tr>';
            content += '            <td style="padding-top:0.5em;">问题描述</td>';
            content += '            <td colspan="2">';
            content += '                <input class="small gray_dark_font" style="color:#999999;" readonly="true"/>';
            content += '            </td>';
            content += '        </tr>';
            content += '        <tr>';
            content += '            <td colspan="3" style="padding:1em;text-align: left;color:#333333;">' + array.handleOpinions + '</td>';
            content += '        </tr>';
            content += '   </table>';
            var $content = createListRow(content).appendTo("#checked_detail_error_html");
        } else {
            //if (reset) {
            //    reset(true);
            //}
            toast(data.message);
        }
    }, "");
}
function getCheckedSteps(row_id) {
    $("#checked_steps_html").empty();
    var obj = "";
    obj += toJson("row_id", row_id);
    doPost("app_inspectDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas2;
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<div>';
                    var action = "";
                    if (!isNull(array[i].action)) {
                        action = array[i].action;
                    }
                    var comment = "";
                    if (!isNull(array[i].comment)) {
                        comment = array[i].comment;
                    }
                    html += '    <div class="oranger_font bigger">' + [i + 1] + "、" + action;
                    html += '    </div>';
                    html += '    <p class="normal">开始时间：' + array[i].startTime + '</p>';
                    html += '    <p class="normal">结束时间：' + array[i].endTime + '</p>';
                    html += '    <p class="normal">处理人：' + array[i].userName + '</p>';
                    if (!isNull(comment)) {
                        html += '    <p class="normal">处理意见：' + comment + '</p>';
                    }
                    html += '    <p class="normal">网格：' + array[i].deptName + '</p>';
                    html += '    <p class="normal">状态：' + array[i].status + '</p>';
                    html += '</div>';
                    var $html = createListRow(html).appendTo("#checked_steps_html");
                    $html.data('data', array[i]);
                    //$html.listen("quickClick", function (e) {
                    //    //点击事件
                    //    var data = $(e.currentTarget).data("data");
                    //    console.log("type:" + data.opValue);
                    //    if (!isNull(data.taskId) && 1 == parseInt(data.isHasAttachment)) {
                    //        window.caseTaskIdPic = data.taskId;
                    //        window.lookType = "casestep";
                    //        app.$router.push("../casetask/photoLook.html");
                    //    }
                    //});
                }
            } else {
                noListShow("", "", "", $("#checked_steps_html"), "");
            }

        } else {
            toast(data.message);
        }
    }, "");
}


/**
 * 文档资料列表
 * @param reset
 * @param pageNum 查询第页数
 * @param isShare 是否共享
 * @param fileName fileName
 * @param fileType 文件类型
 */
function app_documentList(reset, pageNum, isShare, fileName, fileType) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#document_management_html").empty();
    }

    var obj = "";
    obj += toJson("deptId", window.localStorage.deptId) + "&";
    obj += toJson("isShare", isShare) + "&";
    obj += toJson("fileName", fileName) + "&";
    obj += toJson("fileType", fileType) + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("pageSize", "20");
    doPost("app_documentList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="gray_line_bottom list_table1" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td>' + array[i].fileName + '</td>';
                    html += '       <td class="oranger_font">' + array[i].fileTypeName + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#document_management_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.documentWordRow_id = data.row_id;
                        window.documentDetailPage = "";
                        app.$router.push("../workassist/documentManagementDetail.html");
                    });
                }
            } else {
                noListShow("", "", "", $("#document_management_html"), "");
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 * 文档资料详情
 */
function app_documentDetail() {
    var obj = "";
    obj += toJson("row_id", window.documentWordRow_id);
    doPost("app_documentDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            //部门名称
            $("#document_detail_deptName").html(array.deptName);
            //文档类型
            $("#document_detail_fileName").html(array.fileTypeName);
            //文档类型名称
            $("#document_detail_fileTypeName").html(array.fileName);
            //是否共享
            $("#document_detail_isShare").html(array.isShare);
            //文件真实名称
            $("#document_detail_fileRealName").html(array.fileRealName);
            //文档描述
            $("#document_detail_fileDesc").html(array.fileDesc);
            //创建时间
            $("#document_detail_creatTime").html(array.creatTime);

            $("#document_detail_fileRealName").data("url",array.fileUrl)
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 *全部部件列表
 * @param reset
 * @param pageNum
 * @param deptId 网格id
 * @param userId 用户id
 * @param componentState 部件状态
 * @param bigType 部件大类型
 * @param smallType 部件小类型
 */
function allApp_componentList(reset, pageNum, deptId, userId, componentState, bigType, smallType, id) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#all_parts_list_html").empty();
    }

    var obj = "";
    obj += toJson("deptId", deptId) + "&";
    obj += toJson("userId", userId) + "&";
    obj += toJson("componentState", $.trim(componentState)) + "&";
    obj += toJson("bigType", $.trim(bigType)) + "&";
    obj += toJson("smallType", $.trim(smallType)) + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("pageSize", "20");
    doPost("app_componentList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="list_table" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td style="text-align: left;">' + array[i].typeBigName + "/" + array[i].typeSmallName + '</td>';
                    html += '       <td class="small red_font">' + array[i].stateName + '</td>'
                    html += '    </tr>';
                    html += '</table>';
                    html += '<table cellspacing="0" class="gray_line_bottom list_table_topnone" cellpadding="0">';
                    html += '    <tr>';
                    html += '       <td class="small gray_font">' + array[i].deptName + '</td>';
                    html += '       <td class="small gray_font">' + array[i].startDate + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#all_parts_list_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.partDetailId = data.row_id;
                        app.$router.push("../parts/myPartDetail.html");
                    });
                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#all_parts_list_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 *我的部件列表
 * @param reset
 * @param pageNum
 * @param deptId 网格id
 * @param userId 用户id
 * @param componentState 部件状态
 * @param bigType 部件大类型
 * @param smallType 部件小类型
 */
function app_componentList(reset, pageNum, deptId, userId, componentState, bigType, smallType, id) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        scrollToTop("my_parts_list_wrapper");
        $("#my_parts_list_html").empty();
    }

    var obj = "";
    obj += toJson("deptId", deptId) + "&";
    obj += toJson("userId", userId) + "&";
    obj += toJson("componentState", $.trim(componentState)) + "&";
    obj += toJson("bigType", $.trim(bigType)) + "&";
    obj += toJson("smallType", $.trim(smallType)) + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("pageSize", "20");
    doPost("app_componentList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="list_table" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td style="text-align: left;">' + array[i].typeBigName + "/" + array[i].typeSmallName + '<span class="oranger_font">（' + array[i].stateName + '）</span></td>';
                    html += '       <td class="small red_font">' + array[i].checkStateName + '</td>';
                    html += '    </tr>';
                    html += '</table>';
                    html += '<table cellspacing="0" class="gray_line_bottom list_table_topnone" cellpadding="0">';
                    html += '    <tr>';
                    html += '       <td class="small gray_font">' + array[i].deptName + '</td>';
                    html += '       <td class="small gray_font">' + array[i].startDate + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#my_parts_list_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.partDetailId = data.row_id;
                        if (02 == parseInt(data.checkState)) {
                            app.$router.push("../parts/myPartDetail.html");
                        } else {
                            app.$router.push("../parts/myAddPart.html");
                        }

                    });
                    $html.deletable(function ($html) {
                        var data = $html.data("data");
                        if (02 == parseInt(data.checkState)) {
                            toast("审核通过，不能修改");
                        } else {
                            console.log("数据：" + JSON.stringify(data) + "\t," + data.row_id);
                            app_commonDelete(data.row_id, 1);
                        }
                    });
                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#my_parts_list_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}
/**
 * 部件详情
 * @param row_id
 */
function app_componentDetail() {
    var obj = "";
    obj += toJson("row_id", window.partDetailId);
    doPost("app_componentDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            //部件识别码
            $("#my_part_detail_objid").val(array.componentNum);
            //部件名称
            $("#my_part_detail_objname").val(array.componentName);
            //部件状态
            $("#my_part_detail_component_state").val(array.stateName);
            window.partStatuName = array.stateName;//部件状态
            window.partStatuId = array.componentState;//部件状态
            //所属网格
            $("#my_part_detail_deptcode").val(array.deptName);
            window.oldDeptId = array.deptId;//所属网格
            window.choiceOneGridId = array.deptId;//所属网格
            //部件大类
            $("#my_part_detail_component_type_big").val(array.typeBigName);
            window.choiceBigType = array.typeBigId;//部件大类
            window.oldTypeBigId = array.typeBigId;
            //部件小类
            $("#my_part_detail_component_type_small").val(array.typeSmallName);
            window.choiceSmallType = array.typeSmallId;//部件小类
            window.oldTypeSmallId = array.typeSmallId;//部件小类
            //主管部门
            $("#my_part_detail_manage_dept_name").val(array.manageDeptName);
            window.choiceManageDeptCode = array.manageDeptCode;//主管部门
            window.choiceManageDeptName = array.manageDeptName;//主管部门：
            //权属单位
            $("#my_part_detail_ownership_dept_name").val(array.ownershipDeptName);
            window.choiceOwnershipDeptCode = array.ownershipDeptCode;//权属单位：
            window.choiceOwnershipDeptName = array.ownershipDeptName;//权属单位：
            //养护单位
            $("#my_part_detail_conserve_dept_name").val(array.conserveDeptName);
            window.choiceConserveDeptCode = array.conserveDeptCode;//养护单位：
            window.choiceconserveDeptName = array.conserveDeptName;//养护单位：
            //数据来源
            $("#my_part_detail_datasource").val(array.dataSourceName);
            window.choiceOneDataSourceId = data.dataSource;//数据来源：
            window.choiceLongitude = array.longitude;
            window.choiceLatitude = array.latitude;
            //初始日期
            $("#my_part_detail_startdate").val(array.startDate);
            //变更日期
            $("#my_part_detail_changedate").val(array.changeDate);
            //地址
            $("#my_part_detail_address").html(array.address);
            //备注
            $("#my_part_detail_dote").val(array.note);

            //部件识别码
            $("#my_add_part_objid").val(array.componentNum);
            //部件名称
            $("#my_add_part_objname").val(array.componentName);
            //部件状态
            $("#my_add_part_component_state").val(array.stateName);
            //所属网格
            $("#my_add_part_deptcode").val(array.deptName);
            //部件大类
            $("#my_add_part_component_type_big").val(array.typeBigName);
            //部件小类
            $("#my_add_part_component_type_small").val(array.typeSmallName);
            //主管部门
            $("#my_add_part_manage_dept_name").val(array.manageDeptName);
            //权属单位
            $("#my_add_part_ownership_dept_name").val(array.ownershipDeptName);
            //养护单位
            $("#my_add_part_conserve_dept_name").val(array.conserveDeptName);
            //数据来源
            $("#my_add_part_datasource").val(array.dataSourceName);
            //初始日期
            $("#my_add_part_startdate").val(array.startDate);
            //变更日期
            $("#my_add_part_changedate").val(array.changeDate);
            //地址
            $("#my_add_part_address").html(array.address);
            //备注
            $("#my_add_part_note").val(array.note);
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 走访任务列表
 * @param reset
 * @param pageNum
 * @param loginId
 * @param taskType 任务类型 1:农户 2:企业
 * @param status  任务状态 1:未办 2:已办
 */
function app_taskList(reset, pageNum, status, taskName) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        scrollToTop("wait_visit_wrapper");
        $("#wait_visit_html").empty();
    }
    var obj = "";
    obj += toJson("loginID", window.localStorage.loginId) + "&";
    obj += toJson("taskType", $.trim(window.choiceVisitTaskType)) + "&";
    obj += toJson("status", $.trim(status)) + "&";
    obj += toJson("taskName", $.trim(taskName)) + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("pageSize", "20");
    doPost("app_taskList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="gray_line_bottom list_img_table" cellpadding="0">';
                    html += '   <tr>';
                    if (1 == parseInt(array[i].taskType)) {
                        //农户
                        html += '   <th rowspan="2"><img src="/static/resources/images/icon_nh.png"/></th>';
                    } else if (2 == parseInt(array[i].taskType)) {
                        //企业
                        html += '   <th rowspan="2"><img src="/static/resources/images/icon_qiye.png"/></th>';
                    }
                    var statusName = "";
                    console.log("状态：" + window.choiceVisitTaskType);
                    if (2 == parseInt(status)) {
                        if (!isNull(array[i].status)) {
                            if (1 == array[i].status) {
                                statusName = "未完成";
                            } else {
                                statusName = "完成";
                            }
                        }
                    }
                    html += '       <td>' + array[i].taskName + '</td>';
                    html += '       <td class="small red_font">' + statusName + '</td>';
                    html += '    </tr>';
                    html += '    <tr>';
                    html += '       <td colspan="2" class="small gray_font">' + array[i].address + '</td>';
                    html += '    </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#wait_visit_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.visitWelcomeTaskId = data.taskId;
                        if (1 == parseInt(status)) {
                            //未完成
                            window.welcomeCheckJumpType = "";
                            window.visitTaskDetailPage = "";
                            app.$router.push("../visit/visit_task_detail.html");
                        } else {
                            //已完成
                            if (1 == parseInt(data.taskType)) {
                                //农户
                                app.$router.push("../visit/visited_farmerTask_detail.html");
                            } else {
                                //企业
                                app.$router.push("../visit/visited_enterpriseTask_detail.html");
                            }
                        }
                    });
                }
            } else {
                if (parseInt(pageNum) < 2) {
                    noListShow("", "", "", $("#wait_visit_html"), "");
                }
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}

/**
 *走访任务详情
 * @param taskType 任务类型 1:农户 2:企业
 * @param status 任务状态 0:未办 1:已办
 */
function app_taskContent(taskType, status) {
    var obj = "";
    obj += toJson("taskId", window.visitWelcomeTaskId) + "&";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("taskType", taskType) + "&";
    obj += toJson("status", status);
    doPost("app_taskContent.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            window.visitDetailLevel = data.lvl;
            window.visitWelcomeTaskInfo = array;
            //任务名称
            $("#visit_farmerTask_detail_taskName").html(array.taskName);
            //被访人姓名
            $("#visit_farmerTask_detail_respondentsName").html(array.name);
            //访问类型
            if (parseInt(1) == array.taskType) {
                $("#visit_farmerTask_detail_taskType").html("农户");
                $(".visit_farmerTask_detail_respondentsName_td").html("被访人姓名");
                $(".visit_farmerTask_detail_address_td").html("被访人地址")
            } else {
                $("#visit_farmerTask_detail_taskType").html("企业");
                $(".visit_farmerTask_detail_respondentsName_td").html("被访企业名称");
                $(".visit_farmerTask_detail_address_td").html("被访企业地址")
            }
            //被访人住址
            $("#visit_farmerTask_detail_address").html(array.address);
            //任务状态
            if (1 == parseInt(array.status)) {
                $("#visit_farmerTask_detail_status").html("未完成");
            } else {
                $("#visit_farmerTask_detail_status").html("已完成");
            }
            //分配时间
            $("#visit_farmerTask_detail_allocationTime").html(array.allocationTime);

            //任务名称
            $("#visited_enterpriseTask_detail_taskName").html(array.taskName);
            //被访人姓名
            $("#visited_enterpriseTask_detail_respondentsName").html(array.name);
            //访问类型
            if (1 == parseInt(array.taskType)) {
                $("#visited_enterpriseTask_detail_taskType").html("农户");
            } else {
                $("#visited_enterpriseTask_detail_taskType").html("企业");
            }
            //企业住址
            $("#visited_enterpriseTask_detail_address").html(array.address);
            //任务状态
            if (1 == parseInt(array.status)) {
                $("#visited_enterpriseTask_detail_status").html("未完成");
            } else {
                $("#visited_enterpriseTask_detail_status").html("已完成");
            }
            //分配时间
            $("#visited_enterpriseTask_detail_allocationTime").html(array.allocationTime);

            //任务名称
            $("#visited_farmerTask_detail_taskName").html(array.taskName);
            //被访人姓名
            $("#visited_farmerTask_detail_respondentsName").html(array.name);
            //访问类型
            if (1 == parseInt(array.taskType)) {
                $("#visited_farmerTask_detail_taskType").html("农户");
            } else {
                $("#visited_farmerTask_detail_taskType").html("企业");
            }
            //企业住址
            $("#visited_farmerTask_detail_address").html(array.address);
            //任务状态
            if (1 == parseInt(array.status)) {
                $("#visited_farmerTask_detail_status").html("未完成");
            } else {
                $("#visited_farmerTask_detail_status").html("已完成");
            }
            //分配时间
            $("#visited_farmerTask_detail_allocationTime").html(array.allocationTime);

        } else {
            toast(data.message);
        }
    }, "");
}

function getVisitedSteps(taskType, status) {
    $("#checked_steps_html").empty();
    var obj = "";
    obj += toJson("taskId", window.visitWelcomeTaskId) + "&";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("taskType", taskType) + "&";
    obj += toJson("status", status);
    doPost("app_taskContent.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas2;
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<div>';
                    var action = "";
                    var comment = "";
                    if (!isNull(array[i].action)) {
                        action = array[i].action;
                    }
                    if (!isNull(array[i].comment)) {
                        comment = array[i].comment;
                    }
                    html += '    <div class="oranger_font bigger">' + [i + 1] + "、" + action;
                    html += '    </div>';
                    html += '    <p class="normal">开始时间：' + array[i].startTime + '</p>';
                    html += '    <p class="normal">结束时间：' + array[i].endTime + '</p>';
                    html += '    <p class="normal">处理人：' + array[i].userName + '</p>';
                    if (!isNull(comment)) {
                        html += '    <p class="normal">处理意见：' + comment + '</p>';
                    }
                    html += '    <p class="normal">网格：' + array[i].deptName + '</p>';
                    html += '    <p class="normal">状态：' + array[i].status + '</p>';
                    html += '</div>';
                    var $html = createListRow(html).appendTo("#checked_steps_html");
                    $html.data('data', array[i]);
                    //$html.listen("quickClick", function (e) {
                    //    //点击事件
                    //    var data = $(e.currentTarget).data("data");
                    //    console.log("type:" + data.opValue);
                    //    if (!isNull(data.taskId) && 1 == parseInt(data.isHasAttachment)) {
                    //        window.caseTaskIdPic = data.taskId;
                    //        window.lookType = "casestep";
                    //        app.$router.push("../casetask/photoLook.html");
                    //    }
                    //});
                }
            } else {
                noListShow("", "", "", $("#checked_steps_html"), "");
            }

        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 企业基本信息
 */
function app_enterpriseBaseInfo() {
    var obj = "";
    obj += toJson("rowId", window.visitWelcomeTaskInfo.id);
    doPost("app_enterpriseBaseInfo.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            window.enterpriseBasicInformation = array;
            //企业名称
            $("#visit_enterprise_edit_enterpriseName").val(window.enterpriseBasicInformation.name);
            //负责人手机
            $("#visit_enterprise_edit_businessLeaderPhone").val(window.enterpriseBasicInformation.legalPersonContact);
            //企业规模
            $("#visit_enterprise_edit_workerNo").val(window.enterpriseBasicInformation.scale);
            //企业负责人
            $("#visit_enterprise_edit_businessLeader").val(window.enterpriseBasicInformation.legalRepresentative);
            //所属镇（街道、园区
            $("#visit_enterprise_edit_").val(window.enterpriseBasicInformation.gridName);
            //详细地址
            $("#visit_enterprise_edit_address").val(window.enterpriseBasicInformation.address);
            //经营范围
            $("#visit_enterprise_edit_businessScope").val(window.enterpriseBasicInformation.industryOwned);
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 走访部门人员查询
 */
function app_getDeptAndPerson(flag, type) {
    //$("#screen_more_content1").empty();
    //scrollToTop("screen_more_content1_wrapper");
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("flag", $.trim(flag));//
    doPost("app_getDeptAndPerson.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            console.log("数据：" + JSON.stringify(array));
            if (!isNull(array) && array.length > 0) {
                if (1 == parseInt(flag)) {
                    //下派
                    for (var i = 0; i < array.length; i++) {
                        var info = '<p class="alert_edit_title gray_line_bottom">' + array[i].deptName + '</p>';
                        var $row = createListRow(info).appendTo("#choice_one_html");
                        $row.data('data', array[i]);
                        $row.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            window.nextUserId = data.deptId;
                            $("#check_choice_people_edit_people").val(data.deptName);
                            $("#visit_choice_people_edit_people").val(data.deptName);
                            $("#opinion_operation_people").val(data.deptName);
                        });
                    }
                } else {
                    var userArray = array[0].user;
                    console.log("数据：" + JSON.stringify(userArray));
                    for (var j = 0; j < userArray.length; j++) {
                        var info2 = '<p class="alert_edit_title gray_line_bottom">' + userArray[j].userName + '</p>';
                        var $row2 = createListRow(info2).appendTo("#choice_one_html");
                        $row2.data('data', userArray[j]);
                        $row2.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            window.nextUserId = data.userId;
                            $("#visit_choice_people_edit_people").val(data.userName);
                            $("#check_choice_people_edit_people").val(data.userName);
                            $("#opinion_operation_people").val(data.userName);
                        });
                    }
                }
            } else {
                toast("暂无指派信息");
            }
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 走访任务流转
 * @param flag
 */
function app_sendTask(flag, commend) {
    var obj = "";
    obj += toJson("taskId", window.visitWelcomeTaskId) + "&";
    obj += toJson("nextId", window.nextUserId) + "&";
    obj += toJson("flag", flag) + "&";
    obj += toJson("commend", commend) + "&";
    obj += toJson("loginId", window.localStorage.loginId);//
    doPost("app_sendTask.action", obj, function (data) {
        if (data.code == 0) {
            toast(data.message);
            window.VisitWelcomePage = "";
            window.thisCheckVisitType = 1;
            $(".morepage").fadeOut(800, function () {
                $(".morepage").remove();
            });
            waitJumpPage("../visit/visitWelcomeList.html");
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 农户走访详情
 */
function app_getFarmersInfo() {
    var obj = "";
    obj += toJson("taskId", window.visitWelcomeTaskId) + "&";
    obj += toJson("queryType", window.thisCheckVisitType);
    doPost("app_getFarmersInfo.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            //农户姓名
            $("#visited_farmer_edit_businessLeader").html(array.name);
            //年龄
            $("#visited_farmer_edit_age").html(array.age);
            //工作单位
            $("#visited_farmer_edit_workUnit").html(array.workUnit);
            //联系电话
            $("#visited_farmer_edit_respondentsPhone").html(array.respondentsPhone);
            //农户住址
            $("#visited_farmer_edit_address").html(array.address);
            //诉求
            $("#visited_farmer_edit_appeal").html(array.appeal);
            //诉求数量
            $("#visited_farmer_edit_appealNo").html(array.appealNo);
            //问题分类
            $("#visited_farmer_edit_problemsType").html(array.problemsType);
            //解决问题个数
            $("#visited_farmer_edit_solveNo").html(array.solveNo);
            if (!isNull(array.visitPic) && array.visitPic.length > 0) {
                $(".visited_farmer_imgs").show();
                for (var i = 0; i < array.visitPic.length; i++) {
                    console.log("数据：" + array.visitPic[i]);
                    var html = '<img class="goodsimgone" style="padding-top:2em;" src="' + window.imgUrl + array.visitPic[i] + '" id="choicemore">';
                    var $html = createListRow(html).appendTo("#visited_farmer_edit_img");
                    $html.listen("quickClick", function (e) {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        window.lookType = "visited_farmer";
                        app.$router.push("../casetask/photoLook.html");
                    });
                }
                window.visitFarmerImg = array.visitPic;
                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.visitPic.length, window.upload_addimg);
            } else {
                $(".visited_farmer_imgs").hide();
            }
            //解决问题描述
            $("#visited_farmer_edit_solovedProblemsDescription").html(array.solovedProblemsDescription);
            //走访人
            $("#visited_farmer_edit_visitorName").html(array.visitorName);
            //走访人单位
            $("#visited_farmer_edit_visitUnit").html(array.visitUnit);
            //走访人电话
            $("#visited_farmer_edit_visitorPhone").html(array.visitorPhone);
            //走访时间
            $("#visited_farmer_edit_visitorTime").html(array.visitorTime);
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 企业走访详情
 */
function app_getEnterpriseInfo() {
    var obj = "";
    obj += toJson("taskId", window.visitWelcomeTaskId) + "&";
    obj += toJson("queryType", window.thisCheckVisitType);
    doPost("app_getEnterpriseInfo.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            //企业名称
            $("#visited_enterprise_edit_enterpriseName").html(array.enterpriseName);
            //企业负责人
            $("#visited_enterprise_edit_businessLeader").html(array.businessLeader);
            //负责人职务
            $("#visited_enterprise_edit_businessLeaderPosition").html(array.businessLeaderPosition);
            //负责人手机
            $("#visited_enterprise_edit_businessLeaderPhone").html(array.businessLeaderPhone);
            //员工人数
            $("#visited_enterprise_edit_workerNo").html(array.workerNo);
            //产业类型
            $("#visited_enterprise_edit_industryType").html(array.industryType);
            //所属镇（街道、园区）
            $("#visited_enterprise_edit_gridid").html(array.gridid);
            //详细地址
            $("#visited_enterprise_edit_address").html(array.address);
            //经营范围
            $("#visited_enterprise_edit_businessScope").html(array.businessScope);
            //本年销售
            $("#visited_enterprise_edit_currentSales").html(array.currentSales);
            if (!isNull(array.visitpic) && array.visitpic.length > 0) {
                $(".visited_farmer_imgs").show();
                window.visitEnterpriseImg = array.visitpic;
                for (var i = 0; i < array.visitpic.length; i++) {
                    console.log("数据：" + array.visitpic[i]);
                    var html = '<img class="goodsimgone" style="padding-top:2em;" src="' + window.imgUrl + array.visitpic[i] + '" id="choicemore">';
                    var $html = createListRow(html).appendTo("#visited_enterprise_edit_img");
                    $html.listen("quickClick", function (e) {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        window.lookType = "visited_enterprise";
                        app.$router.push("../casetask/photoLook.html");
                    });
                }
                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.visitpic.length, window.upload_addimg);
            } else {
                $(".visited_farmer_imgs").hide();
            }

            //本年纳税
            $("#visited_enterprise_edit_currentTaxAmount").html(array.currentTaxAmount);
            //明年预计销售
            $("#visited_enterprise_edit_projectedSales").html(array.projectedSales);
            //企业问题及诉求
            $("#visited_enterprise_edit_problemsAndAppeals").html(array.problemsAndAppeals);
            //问题及诉求解决情况
            $("#visited_enterprise_edit_problemsAndAppealsSolution").html(array.problemsAndAppealsSolution);
            //企业建议
            $("#visited_enterprise_edit_enterpriseSuggestion").html(array.enterpriseSuggestion);
            //建议解决情况
            $("#visited_enterprise_edit_suggestionSolved").html(array.suggestionSolved);
            //走访人
            $("#visited_enterprise_edit_visitorName").html(array.visitorName);
            //走访人单位
            $("#visited_enterprise_edit_visitUnit").html(array.visitUnit);
            //走访人电话
            $("#visited_enterprise_edit_visitorPhone").html(array.visitorPhone);
            //走访时间
            $("#visited_enterprise_edit_visitorTime").html(array.visitorTime);
        } else {
            toast(data.message);
        }
    }, "");
}
/**
 * 我的问题列表
 * @param queryType
 * @param startTime
 * @param endTime
 * @param eventComponent
 * @param bigClass
 * @param smallClass
 */
function appWorkOrder_myWorkOrder(reset, pageNum) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#case_list_html").empty();
    }
    var obj = "";
    obj += toJson("userId", window.localStorage.userId) + "&";
    obj += toJson("reportTimeStart", window.caseStartTime) + "&";
    obj += toJson("eventComponent", window.choiceThingsParts) + "&";
    obj += toJson("bigClass", window.choiceBigType) + "&";
    obj += toJson("smallClass", window.choiceSmallType) + "&";
    obj += toJson("reportTimeEnd", window.caseEndTime) + "&";
    obj += toJson("status", window.caseStatus) + "&";
    obj += toJson("pageSize", "20") + "&";
    obj += toJson("pageNum", pageNum);
    doPost("appWorkOrder_myWorkOrder.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page.total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var status = "";
                    var bigtype = "";
                    if (1 == parseInt(array[i].status)) {
                        status = "处理中";
                    } else {
                        status = "已办结";
                    }
                    if (!isNull(array[i].eventComponent)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].eventComponent;
                        } else {
                            bigtype = bigtype + "/" + array[i].eventComponent;
                        }
                    }
                    if (!isNull(array[i].bigClass)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].bigClass;
                        } else {
                            bigtype = bigtype + "/" + array[i].bigClass;
                        }
                    }
                    if (!isNull(array[i].smallClass)) {
                        if (isNull(bigtype)) {
                            bigtype = array[i].smallClass;
                        } else {
                            bigtype = bigtype + "/" + array[i].smallClass;
                        }
                    }
                    var html = '';
                    html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td colspan="2" style="text-align: left">' + bigtype + '<span style="padding-left:0.5em;" class="oranger_font">' + status + '</span>' + '</td>';
                    html += '   </tr>';
                    html += '   <tr>';
                    html += '       <td> ' + array[i].caseno + '</td>';
                    html += '       <td>' + array[i].reportTime + '</td>';
                    html += '   </tr>';
                    html += '   <tr>';
                    html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#case_list_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.caseRow_id = data.row_id;
                        app.$router.push("../case/caseDetail.html");
                    });
                }
            } else {
                noListShow("", "", "", $("#case_list_html"), "");
            }
        } else {
            //if (reset) {
            //    reset(true);
            //}
            toast(data.message);
        }
    }, "");
}
/**
 * 行政审批列表
 * @param reset
 * @param pageNum
 * @param companyName
 * @param matterName
 */
function app_approvalList(reset, pageNum, companyName, matterName) {
    if (!reset) {
        //showLoading("正在搜索...");
    }
    if (parseInt(pageNum) < 2) {
        $("#approval_list_html").empty();
        window.searchPage = 2;
        scrollToTop("approval_list_wrapper");
    }
    var obj = "";
    obj += toJson("companyName", companyName) + "&";
    obj += toJson("matterName", matterName) + "&";
    obj += toJson("pageNum", pageNum) + "&";
    obj += toJson("pageSize", "20");
    doPost("app_approvalList.action", obj, function (data) {
        if (!reset) {
            hideLoading();
        }
        if (data.code == 0) {
            if (reset) {
                reset(true);
            }
            var array = data.datas;
            getDataLength(data.page[0].total);
            if (!isNull(array) && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var html = '';
                    html += '<table cellspacing="0" class="list_table" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td>' + array[i].companyName + '</td>';
                    var stateName = "";
                    if (1 == parseInt(array[i].state)) {
                        stateName = "通过";
                    } else {
                        stateName = "不通过";
                    }
                    html += '       <td class="gray_font">' + stateName + '</td>';
                    html += '   </tr>';
                    html += '<table cellspacing="0" class="gray_line_bottom list_table_topnone" cellpadding="0">';
                    html += '   <tr>';
                    html += '       <td class="small gray_font">' + array[i].matterName + '</td>';
                    html += '       <td class="small gray_font">' + array[i].replyDate + '</td>';
                    html += '   </tr>';
                    html += '</table>';
                    var $html = createListRow(html).appendTo("#approval_list_html");
                    $html.data('data', array[i]);
                    $html.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.approvalRowId = data.row_id;
                        window.approvalDetailPage = "";
                        app.$router.push("../approval/approvalDetail.html");
                    });
                }
            } else {
                noListShow("", "", "", $("#approval_list_html"), "");
            }
        } else {
            if (reset) {
                reset(true);
            }
            toast(data.message);
        }
    }, "");
}

function app_approvalDetail() {
    var obj = "";
    obj += toJson("row_id", window.approvalRowId);
    doPost("app_approvalDetail.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas[0];
            ////办件编号
            //$("#approval_detail_caseNo").html(array.caseNo);
            //事项名称
            $("#approval_detail_objid").html(array.matterName);
            //项目名称
            $("#approval_detail_xiangMuMc").html(array.xiangMuMc);
            //企业名称
            $("#approval_detail_deptcode").html(array.companyName);
            //项目地址
            $("#approval_detail_address").html(array.xiangMAddress);
            //批复时间
            $("#approval_detail_replyDate").html(array.replyDate);
            //申请人
            $("#approval_detail_objname").html(array.shenQingRenXm);
            //审核结果
            var statusName = "";
            if (1 == parseInt(array.status)) {
                statusName = "通过";
            } else {
                statusName = "不通过";
            }
            $("#approval_detail_state").html(statusName);
            //联系地址
            $("#approval_detail_lianXiDz").html(array.lianXiDz);
            window.lookType = "approvalInfo";
            window.approvalImgArrayInfo = array.attachList;
        } else {
            toast(data.message);
        }
    }, "");
}

/**
 *通讯录
 */
function app_contactList(type) {
    var obj = "";
    doPost("app_contactList.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            $("#people_phone_html").empty();
            window.peoplePhoneAllArrayList = array;
            setPhoneValue(array, type);
        } else {
            toast(data.message);
        }
    }, "");
}
function app_contactList2(deptId, type, flag) {
    var obj = "";
    obj += toJson("deptId", $.trim(deptId)) + "&";
    obj += toJson("flag", $.trim(flag)) + "&";//1顺级，2搜索
    obj += toJson("conditionQuery", $.trim(window.conditionQuery));//搜索内容
    doPost("app_contactList2.action", obj, function (data) {
        if (data.code == 0) {
            scrollToTop("people_phone_wrapper");
            var array = data.datas;
            var array2 = data.datas2;
            setPhoneValue(array, type, flag, array2);
        } else {
            toast(data.message);
        }
    }, "");
}
function setPhoneValue(array, type, flag, array2) {
    console.log("人员数据：" + JSON.stringify(array2));
    window.thisSetPhoneType = "";
    if (!isNull(array) && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            var html = '';
            var html_title = '';
            var setvlueid = "people_phone_" + type + "_html";
            window.thisSetPhoneType = "people_phone_" + type + "_html";
            console.log("type：" + type);
            if (i == 0) {
                if ($("#" + setvlueid).length > 0) {
                    console.log("存在");
                    $("#people_phone_html div").hide();
                    $("#" + setvlueid).show();
                    $("#" + setvlueid + " div").show();
                    $("#" + setvlueid).parent().show();
                    $("#" + setvlueid).empty();
                    console.log()
                } else {
                    console.log("创建type：" + type);
                    var divhtml = '<div id="people_phone_' + type + '_html"></div>';
                    createListRow(divhtml).appendTo("#people_phone_html");
                    $("#people_phone_html div").hide();
                    $("#" + setvlueid).show();
                    $("#" + setvlueid + " div").show();
                    $("#" + setvlueid).parent().show();
                }
            }
            if (0 == parseInt(type) && i == 0) {
                html_title += '<p class="small">智慧平望</p>';
            } else if (1 == parseInt(type) && i == 0) {
                html_title += '<p class="small"><span class="oranger_font">智慧平望</span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceOneName + '</p>';
            } else if (2 == parseInt(type) && i == 0) {
                html_title += '<p class="small"><span class="oranger_font">智慧平望</span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceOneName + '<span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceTwoName + '</span></p>';
            } else if (3 == parseInt(type) && i == 0) {
                html_title += '<p class="small"><span class="oranger_font">智慧平望</span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceOneName + '<span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceTwoName + '</span><span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceThreeName + '</span></p>';
            } else if (3 == parseInt(type) && i == 0) {
                html_title += '<p class="small"><span class="oranger_font">智慧平望</span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceOneName + '<span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceTwoName + '</span><span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceThreeName + '</span><span><img class="phone_upback_img" src="/static/resources/images/icon_next2.png"/>' + window.choiceFourName + '</span></p>';
            }

            var $html_title = createListRow(html_title).appendTo("#" + setvlueid);
            $html_title.data('data', array[i]);
            $html_title.listen("quickClick", function (e) {
                var data = $(e.currentTarget).data("data");
                console.log("type：" + JSON.stringify(data));
                var type = "";
                if (data.parentId == window.choiceOneId) {
                    type = window.choiceOneType;
                } else if (data.parentId == window.choiceTwoId) {
                    type = window.choiceTwoType;
                } else if (data.parentId == window.choiceThreeId) {
                    type = window.choiceThreeType;
                } else if (data.parentId == window.choiceFourId) {
                    type = window.choiceFourType;
                } else {
                    type = 0;
                }
                console.log("返回type:" + type);
                var setvlueid = "people_phone_" + type + "_html";
                $("#people_phone_html div").hide();
                $("#" + setvlueid).show();
                $("#" + setvlueid + " div").show();
                $("#" + setvlueid).parent().show()
            });
            html += '<table cellpadding="0" cellspacing="0" class="gray_line_bigger_bottom">';
            html += '   <tr class="people_phone_order">';
            html += '       <td>' + array[i].deptName + '（' + array[i].userCount + '）</td>';
            html += '       <td>';
            html += '           <img src="/static/resources/images/icon_gray_line_left.png" class="gatwway_list_icon_right">';
            html += '       </td>';
            html += '   </tr>';
            html += '</table>';
            var $html = createListRow(html).appendTo("#" + setvlueid);
            $html.data('data', array[i]);
            $html.listen("quickClick", function (e) {
                var data = $(e.currentTarget).data("data");
                console.log("点击的数据：" + JSON.stringify(data));
                console.log("点击type：" + type);
                if (parseInt(data.userCount) > 0) {
                    if (0 == parseInt(type)) {
                        window.choiceOneName = data.deptName;
                        window.choiceOneId = data.id;
                        window.choiceOneType = "0";
                        app_contactList2(data.id, "1", 1, array2);
                    } else if (1 == parseInt(type)) {
                        window.choiceTwoName = data.deptName;
                        window.choiceTwoId = data.id;
                        window.choiceTwoType = "1";
                        app_contactList2(data.id, "2", 1, array2);
                    } else if (2 == parseInt(type)) {
                        window.choiceThreeName = data.deptName;
                        window.choiceThreeId = data.id;
                        window.choiceThreeType = "2";
                        app_contactList2(data.id, "3", 1, array2);
                    } else if (3 == parseInt(type)) {
                        window.choiceFourName = data.deptName;
                        window.choiceFourId = data.id;
                        window.choiceFourType = "3";
                        app_contactList2(data.id, "4", 1, array2);
                    }
                }
            });
            if (i == array.length - 1) {
                setPhonePeopleValue(array2, window.thisSetPhoneType);
            }
        }
    }
}
function setPhonePeopleValue(array, setvlueid) {
    console.log("2人员数据：" + JSON.stringify(array));
    if (!isNull(array) && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            var html = '';
            html += '<table cellpadding="0" cellspacing="0" class="gray_line_bigger_bottom">';
            html += '   <tr class="people_phone_order">';
            html += '       <td style="padding:1em 1em 0em 1em;">' + array[i].userName + '</td>';
            html += '       <td rowspan="2">';
            html += '           <img src="/static/resources/images/icon_phone.png" style="float: right;" class="gatwway_list_icon_right">';
            html += '       </td>';
            html += '   </tr>';
            html += '   <tr class="people_phone_order">';
            html += '       <td style="padding:1em;">' + array[i].phone + '</td>';
            html += '   </tr>';
            html += '</table>';
            var $html = createListRow(html).appendTo("#" + setvlueid);
            $html.data('data', array[i]);
            $html.listen("quickClick", function (e) {
                var data = $(e.currentTarget).data("data");
                console.log("点击的数据：" + JSON.stringify(data));
                showContentAlert('确定要给：' + data.userName + "，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦", function () {
                }, function () {
                    jsict.util.call(function () {
                        console.log("电话拨打ok");
                    }, function (err) {
                        console.log("电话拨打失败" + err);
                    }, data.phone);
                }, "拨打");
            });
        }
    }
}

function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
}

function totalDigitalRemind(){
	var obj = "";

    obj += toJson("userId", window.localStorage.userId);
	doPost("totalDigitalRemind.action", obj, function (data) {


//            var total = parseInt(supervisionLogNum)+parseInt(data.orderTotal);
            //工单待办总数
            showOrHideNum(data.unDone, "welcome_wait_work_rednum");
            showOrHideNum(data.dispatchCenter, "welcome_tdzx");
            var shownum=parseInt(data.total);
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

    }, "");


}
