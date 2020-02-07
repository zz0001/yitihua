/**
 * [isPhone 验证是否是手机号码]
 * @param  {[type]} obj [手机号码]
 * @return {[type]}     [description]
 */
function isPhone(obj) {
    var strPhone = obj;
    var phoneRegWithArea1 = /(1[1-9]\d{9}$)/;
    if (strPhone.length != 0) {
        if (phoneRegWithArea1.test(strPhone)) {
            return true;
        } else {
            return false;
        }
    }
}
/**
 * [removeZero 去除价格前的0]
 * @param  {[type]} val [值]
 * @param  {[type]} id  [id]
 * @return {[type]}     [description]
 */
function removeZero(val, id) {
    // $(id).val(val.replace(/\b(0+)/gi, ""));
}
/**
 * [diffDate 促销是否开始]
 * @param  {[type]} end [description]
 * @return {[type]}     [description]
 */
function diffDate(end) {
    //var dB = new Date(end.replace(/-/g, "/"));
    console.log("今日：" + new Date() + "\t促销日：" + Date.parse(end));
    if (new Date() > Date.parse(end)) {
        return true;
    }
    return false;
}
/**
 * [timer 促销剩余时间]
 * @param  {[type]} year  [年]
 * @param  {[type]} month [月]
 * @param  {[type]} day   [日]
 * @param  {[type]} type  [description]
 * @return {[type]}       [description]
 */
function timer(year, month, day, type) {
    console.log("年：" + year + "\t月" + month + "\tday" + day);
    var ts = (new Date(year, month, day, 0, 0, 0)) - (new Date()); //计算剩余的毫秒数
    var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
    var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10); //计算剩余的小时数
    var mm = parseInt(ts / 1000 / 60 % 60, 10); //计算剩余的分钟数
    var ss = parseInt(ts / 1000 % 60, 10); //计算剩余的秒数
    dd = checkTime(dd);
    hh = checkTime(hh);
    mm = checkTime(mm);
    ss = checkTime(ss);
    if (1 == type) {
        return dd + "天" + hh + "时" + mm + "分" + ss + "秒";
    } else {
        setInterval("timer()", 1000); //注释此行，不进行倒计时显示
    }

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
/**
 * [searhShowOrHide 是否显示搜索按钮]
 * @param  {[type]} id             [搜索框id]
 * @param  {[type]} add_id         [添加按钮id]
 * @param  {[type]} refresh_id     [筛选按钮id]
 * @param  {[type]} btn_search_id  [搜索按钮id]
 * @param  {[type]} content_id     [要清空的内容id]
 * @param  {[type]} searchfun      [搜索按钮执行的事件]
 * @param  {Boolean} hasValueFun   [搜索按钮的点击事件]
 * @return {[type]}                [description]
 */
function searchShowOrHide(id, add_id, refresh_id, btn_search_id, content_id) {
    hideFilterAlert();
    $("#" + id).bind('input propertychange', function(e) {
        if (!isNull($(e.currentTarget).val())) {
            //有内容
            $("#" + add_id).hide();
            $("#" + refresh_id).hide();
            $("#" + btn_search_id).show();
            if (isNull(add_id) || isNull(refresh_id)) {
                $("#" + btn_search_id).animate({
                    right: "7%"
                }, "slow", function() {
                    window.people_search_content = $(e.currentTarget).val();
                });
            } else {
                $("#" + btn_search_id).animate({
                    right: "12%"
                }, "slow", function() {
                    window.people_search_content = $(e.currentTarget).val();
                });
            }

        } else {
            //无内容
            $("#" + btn_search_id).animate({
                right: "0%"
            }, "slow", function() {
                $("#" + add_id).show();
                $("#" + refresh_id).show();
                //$("#" + content_id).empty();
                $("#" + btn_search_id).css("right", "0em");
                $("#" + btn_search_id).hide();
                window.people_search_content = "";
                if ("people_search_input" == id) {
                    //residenList(1, 10, "", window.welcome_belongGrid, 0, "", "", "", false);
                } else if ("serviceshop_search_input" == id) {
                    //  gridShopList(1, 10, "", $("#serviceshop_search_input").val(), "", "", "", false, 0);
                }

            });
        }

    });
}


/**
 * [hideFilterAlert 是否隐藏筛选弹出框]
 * @return {[type]} [description]
 */
function hideFilterAlert() {
    if ("yes" == window.filter_alert_status) {
        $("#filter_float").animate({
            left: "100%"
        }, "slow", function() {
            window.filter_alert_status = "";
            $("#filter_float").remove();
        });
        $(".alert_box").hide();
    }
}
/*下拉刷新长度*/
function getDataLength(count, num) {
    console.log(count + "\t两个参数\t" + num);
    if (!isNull(count)) {
        console.log("不空coundt");
        if (isNull(num)) {
            console.log("空num");
            window.arrayDataLength = Math.ceil(count / 20);
        } else {
            console.log("不空num");
            window.arrayDataLength = Math.ceil(count / parseInt(num));
        }
        console.log("算出长度：" + window.arrayDataLength + "\t" + window.arrayDataLength);
    } else {
        console.log("空coundt");
        window.arrayDataLength = 1;
        //window.columnDataLength = 1;
    }
}


/*自动更新接口 end*/
function getNewInfo(isshow) {
    console.log('进入自动更新方法。');
    var obj = "";
    //obj += toJson("type", "3") + "&"; //类型网格长
    //obj += toJson("version", window.version); //版本号
    doPost("app_autoUpdate.action", obj, function(data) {
        if (data.code == 0) {
            console.log("版本：" + JSON.stringify(data) + "\t" + window.version > data.version);
            window.appurl = window.imgUrl + data.url;
            console.log("下载地址：" + window.appurl);
            window.ismust = data.ismust;
            //alert(JSON.stringify(data));
            console.log("没转换之前的：" + window.version +"转换之后的："+ window.version+"\t," + data.version);
            if (!isNull(data.version)) {
                var version = data.version.toString().split(".");
                var localversion = window.version.toString().split(".");

                if (parseInt(localversion[0]) >= parseInt(version[0]) && parseInt(localversion[1]) >= parseInt(version[1])) {
                    if (!isNull(isshow)) {
                        toast("已经是最新版本了");
                    }
                    window.ismust = "";
                    window.redShow = "no";
                    $("#newVersonRed").hide();
                    $(".red_round_wode").hide();
                } else {
                    console.log('需要更新');
                    window.redShow = "yes";
                    $("#newVersonRed").show();
                    $(".red_round_wode").show();

                    if (!isNull(window.ismust)) {
                        if (window.ismust == 1) {
                            console.log('需要强制更新');
                            //强制更新
                            showUpdate("1");
                            $("#alert_update_version").html(data.desc);
                        } else if (window.ismust == 3) {
                            //选择更新
                            showUpdate();
                            $("#alert_update_version").html(data.desc);
                        } else {
                            //不更新
                            if (!isNull(isshow)) {
                                toast("已经是最新版本了");
                            }
                        }
                    }
                }
            } else {
                if (!isNull(isshow)) {
                    toast("已经是最新版本了");
                }
            }
        } else {
            toast(data.message);
        }
    }, "", "1");
}
/**
 * 去除字符串的空值
 * @param str
 * @returns {XML|string|*}
 * @constructor
 */
function DelUndefind(str) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    result = result.replace(/\s/g, "");
    return result;
}
/**
 * [newCheckWord 数字提示]
 * @param  {[type]} c         [description]
 * @param  {[type]} maxstrlen [description]
 * @param  {[type]} id        [description]
 * @return {[type]}           [description]
 */
function newCheckWord(valid, maxstrlen, id) {
    len = maxstrlen;
    var str = $("#" + valid).val().replace(/\s/g, "");
    if (isNull(str)) {
        $("#" + id).val("0/" + maxstrlen);
    } else {
        if (str.length >= maxstrlen) {
            console.log("现在长度：" + str.length);
            $("#" + valid).val(str.substring(0, maxstrlen));
            $("#" + id).val(str.substring(0, maxstrlen).length + "/" + maxstrlen);
        } else {
            $("#" + id).val(str.length + "/" + maxstrlen);
            // $("#" + id).val(maxstrlen - Math.floor((str.length * 2 - myLen) / 2) + "/" + maxstrlen);

        }
    }
}

/*图片相关方法*/
function userPicSuccess(url) {
    window.userPicFilePath = url;
    initUserPic();
}
/*图片相关方法*/
function userPicFail() {
    window.history.back();
}
/*判断值是否可上传*/
function yesOrNoUpdateValue(val) {
    if (val.indexOf("请输入") > 0) {
        return false;
    } else {
        return true;
    }
}

function yesNumber(index1, index2, stocknum) {
    console.log("库存为：" + stocknum);
    var ininfo = $("#good_select_num_" + index1 + "_" + index2 + "").val();
    console.log("ininfo：" + ininfo)
    if (ininfo.length == 1) {
        ininfo = ininfo.replace(/[^1-9]/g, '')
    } else {
        ininfo = ininfo.replace(/\D/g, '')
    }
    if (isNull(ininfo)) {
        $("#good_select_num_" + index1 + "_" + index2 + "").val(1);
    } else {
        if (stocknum < ininfo.replace(/\b(0+)/gi, "")) {
            $("#good_select_num_" + index1 + "_" + index2 + "").val(stocknum);
            toast("该商品最大库存只有：" + stocknum);
        } else {
            $("#good_select_num_" + index1 + "_" + index2 + "").val(ininfo.replace(/\b(0+)/gi, ""));
        }

    }
}

function checkSingleNumber(number) {
    var r = /^[1-9]*[1-9][0-9]*$/;
    if (r.test(number) == false) {
        return true;
    } else {
        return false;
    }
}

function yesNumberAlert(stocknum) {
    var r = /^[1-9]*[1-9][0-9]*$/;
    var number = $("#goodtype_valStockNum").val();
    console.log("当前数量：" + number);
    if (isNull(number)) {
        toast("请输入您要购买的商品数量");
        return false;
    } else if (r.test(number) == false) {
        toast("商品数量必须是大于0的整数");
        return false;
    } else if (parseInt(number) > parseInt(stocknum)) {
        toast("当前库存为：" + stocknum);
        return false;
    } else {
        return true;
    }
}
//判断是否为整数
function isInteger(content) {
    var tt = /^\d+$/g;
    if (!tt.test(content)) {
        return true;
    } else {
        return false;
    }
}
//判断是否为小数
function isDouble(number) {
    var r = /^-?[1-9]*(\.\d*)?$|^-?0(\.\d*)?$/;
    if (number.matches("([1-9]+[0-9]*|0)(\\.[\\d]+)?") == false) {
        return false
    } else {
        return true;
    }
}

/**
 * 是否截取字符串
 * @param  {[type]} detail [截取内容]
 * @param  {[type]} num    [截取数量]
 * @return {[type]}        [description]
 */
function substringInfo(detail, num, type) {
    console.log("开始截取" + detail + ";" + num + "是否空：" + isNull(detail));
    var info = "";
    if (isNull(detail) == false && detail.length > num) {
        console.log("可截取");
        if (isNull(type)) {
            info = detail.substring(0, num) + "..";
        } else {
            info = detail.substring(0, num);
        }

    } else {
        console.log("不可截取");
        info = detail;
    }
    return info;
    console.log("截取完成：" + info);
}

/**
 * [noListShow 列表没内容时候的提示]
 * @param  {[type]} title   [按钮提示的文字]
 * @param  {[type]} content [提示内容]
 * @param  {[type]} path    [需要跳转的页面]
 * @param  {[type]} e       [追加元素id]
 * @return {[type]}         [description]
 */
function noListShow(title, content, path, e, ishow, divheight) {
    var html = '';
    if (isNull(divheight)) {
        html += '<div class="nolist">';
    } else {
        html += '<div class="nolist" style="height:' + (divheight || "8") + 'em;">';
    }
    html += '   <img style="width:5em;height:5em;"  src="/static/resources/images/nolist.png"/>';
    html += '   <p>' + (content || "还没有相关的信息哦") + '</p>';
    if (!isNull(ishow)) {
        html += '   <div class="noListButton">';
        html += '       <div>';
        html += '           <div class="noListOrangeButton">';
        html += '                 <img   src="/static/images/icon_blue_add.png"/>';
        html += '                 <div class="small" style="color:#41bef7">' + title + '</div>';
        html += '           </div>';
        html += '      </div>';
        html += '    </div>';
    }
    html += '</div>';
    $(html).appendTo(e);
    $(".noListOrangeButton").addEventListener("quickClick", function(e) {
        if ($(".max-dialog").is(':visible') == true) {
            $(".max-dialog").remove();
            window.filter_alert_status = "";
        }
        app.$router.push(path);
    })
}
/**
 *
 * @param title 按钮提示的文字
 * @param content 提示内容
 * @param 方法
 * @param ids
 * @param ishow 是否可跳转
 */
function noListShowAlert(title, content, pathfunction, ids, ishow, divheight) {
    var html = '';
    if (isNull(divheight)) {
        html += '<div class="nolist">';
    } else {
        html += '<div class="nolist" style="height:' + (divheight || "8") + 'em;">';
    }
    html += '   <img style="width:5em;height:5em;"  src="/static/resources/images/nolist.png"/>';
    html += '   <p>' + (content || "还没有相关的信息哦") + '</p>';
    if (!isNull(ishow)) {
        html += '   <div class="noListButton">';
        html += '       <div>';
        html += '           <div class="noListOrangeButton screen_noinfo nullpage">';
        html += '                 <img  src="/static/resources/images/icon_blue_add.png"/>';
        html += '                 <div class="small" style="color:#41bef7">' + title + '</div>';
        html += '           </div>';
        html += '      </div>';
        html += '    </div>';
    }
    html += '</div>';
    $(html).appendTo(ids);
    $(".nullpage").listen("quickClick", function(e) {
        if ($(".max-dialog").is(':visible') == true) {
            $(".max-dialog").remove();
            window.filter_alert_status = "";
        }
        pathfunction.call();
    })
}

/**
 * 横向滑动区域
 * @param  {[type]} option [id]
 * @return {[type]}        [description]
 */
function initSlider(option) {
    $("#" + option.roundid).empty();
    for (var i = 0; i < option.length; i++) {
        var html = '<p id="load_welcome_' + i + '_' + option.indexs + '" class="small_gray_round marginround_two"></p>';
        var $html = createListRow(html).appendTo($("#" + option.roundid));
        $("#" + option.roundid + " div p").css("padding-left", "0em");
        $("#" + option.roundid + " .list_row").css("margin-right", "0.3em");
        $("#" + option.roundid + " .list_row").css("height", "initial");
        $("#" + option.roundid + " .list_row").css("display", "inline-table");
    }
    $("#load_welcome_0_" + option.indexs).removeClass("small_gray_round");
    $("#load_welcome_0_" + option.indexs).addClass("small_blue_round");
    if (option.length > 1) {
        $("#" + option.roundid).show();
    } else {
        $("#" + option.roundid).hide();
    }
    var $wrapper = $("#" + option.id).addClass("jszx-wrapper");
    var $scroller = $("<div class='jszx-scroller'></div>").appendTo($wrapper);
    var $slides = $wrapper.find(".slide").appendTo($scroller);
    if (option.id == option.id) {
        $slides.width(window.innerWidth);
        $scroller.width(window.innerWidth * $slides.length);
    } else {
        $scroller.width($(".slide").width() * $slides.length * 1.5);
    }
    console.log("宽度：" + $slides.width());
    var offset = 0;
    var index = 0;
    initScroll({
        "wrapper": option.id,
        "dir": "x",
        "bounce": true,
        "scrollBar": false,
        "inertia": false,
        "onquickclick": function(x) {
            //alert(88);
        },
        "touchEnd": function(x) {
            if (x - offset <= -50) {
                offset = offset - window.innerWidth;
                index++;
            } else if (x - offset >= 50) {
                offset = offset + window.innerWidth;
                if (parseInt(index) > 0) {
                    index--;
                } else {
                    index = 0;
                }
            }
            $scroller[0].style.webkitTransform = "translateX(" + offset + "px)";
            option.onSlide(index);
            console.log("当前页面：" + index + "\t" + option.roundid);
            for (var h = 0; h < option.length; h++) {
                if (parseInt(index) == h) {
                    $("#load_welcome_" + h + "_" + option.indexs).removeClass("small_gray_round");
                    $("#load_welcome_" + h + "_" + option.indexs).addClass("small_blue_round");
                } else {
                    $("#load_welcome_" + h + "_" + option.indexs).removeClass("small_blue_round");
                    $("#load_welcome_" + h + "_" + option.indexs).addClass("small_gray_round");
                }
            }
        }
    });
}
/**
 * 拍照
 */
function choidPhoto() {
    showBottomAlert(function() {
        //拍照
        navigator.camera.getPicture(userPicSuccess, userPicFail, {
            //quality:20,
            //saveToPhotoAlbum:true
        });
        window.userEditNotRefresh = true;
        app.$router.push("../currency/getPhotoCut.html");
    }, function() {
        //选取本地图片
        navigator.camera.getPicture(userPicSuccess, userPicFail, {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        });
        window.userEditNotRefresh = true;
        app.$router.push("../currency/getPhotoCut.html");
    }, null, "");
}
/**
 * 60s倒计时
 */
function start_TimeCode(id) {
    if (window.regTime != 0) {
        $(id).removeClass("btnSendCode");
        $(id).addClass("btnSendCodeRes");
    }
    var time = setInterval(function() {
        if (window.regTime > 0) {
            window.regTime--;
        }
        if (window.regTime == 0 || window.regTime < 0) {
            console.log("当前ss秒：" + window.regTime);
            $(id).removeClass("btnSendCodeRes");
            $(id).addClass("btnSendCode");
            $(id).html("获取验证码");
            console.log("开始清空" + time);
            clearInterval(time);
            console.log("结束清空" + time);
        } else {
            console.log("当前dd秒：" + window.regTime);
            $(id).html(window.regTime + "秒");
        }
    }, 1000);
}
/**
 * 隐藏手机号
 * @param phone
 * @returns {string}
 */
function hidePhone(phone) {
    return phone.substring(0, 3) + "*****" + phone.substring(phone.length - 4, phone.length)
}
/**
 * 底部点击事件
 * @param  {[type]} e)
 * @return {[type]}    [description]
 */
$("div[data-role=page]").live("pagecreate", function(e) {
    //首页
    $(e.currentTarget).find(".page_footer .jszx-bar-icon-up>div:eq(0)").listen("quickClick", function(e) {
        app.$router.push("../load/welcome.html");
    });
    //公告
    $(e.currentTarget).find(".page_footer .jszx-bar-icon-up>div:eq(1)").listen("quickClick", function(e) {
        //app.$router.push("../case/caseEdit.html");
        app.$router.push("../notice/noticeWelcomeList.html");
    });

    //通讯录
    $(e.currentTarget).find(".page_footer .jszx-bar-icon-up>div:eq(2)").listen("quickClick", function(e) {
        //app_contactList();
        app.$router.push("../phone/peoplePhone.html");

        //toast("功能建设中");
    });
    //我的
    $(e.currentTarget).find(".page_footer .jszx-bar-icon-up>div:eq(3)").listen("quickClick", function(e) {
        app.$router.push("../more/moreWelcome.html");
        //toast("该功能暂时不能使用哦");
    });
})

function imgAddUrl(array, id, twoId, type) {
    console.log("计算图片" + JSON.stringify(array));
    window.huiLifeInfo_imgs = new Array();
    if (!isNull(array) && array.atta.length > 0) {
        for (var i = 0; i < array.atta.length; i++) {
            console.log("不为空：" + i);
            window.huiLifeInfo_imgs[i] = window.imgUrl + array.atta[i].artWorkPath;
            if (i == array.atta.length - 1) {
                console.log("imgs:" + window.huiLifeInfo_imgs);
                imgShowInfo(id, twoId, type);
            }
        }
    } else {
        console.log("空：");
        imgShowInfo(id, twoId, type);
    }
}
/**
 * 图片墙转换路径
 */
function imgHouseAddUrl(array, id, twoId, type) {
    console.log("计算图片" + JSON.stringify(array));
    window.huiLifeInfo_imgs = new Array();
    if (!isNull(array) && array.attach.length > 0) {
        for (var i = 0; i < array.attach.length; i++) {
            window.huiLifeInfo_imgs[i] = window.imgUrl + array.attach[i].artworkpath;
            if (i == array.attach.length - 1) {
                console.log("imgs:" + window.huiLifeInfo_imgs);
                imgShowInfo(id, twoId, type);
            }
        }
    } else {
        console.log("空：");
        imgShowInfo(id, twoId, type);
    }
}

function sc(width, height) {
    console.log("width" + width + "height：" + height);
    return;
    var maxWidth = "100%"; // 图片最大宽度
    var maxHeight = 162.14; // 图片最大高度
    var ratio = 0; // 缩放比例
    var width = $(this).width(); // 图片实际宽度
    var height = $(this).height(); // 图片实际高度

    // 检查图片是否超宽
    if (width > maxWidth) {
        ratio = maxWidth / width; // 计算缩放比例
        $(this).css("width", maxWidth); // 设定实际显示宽度
        height = height * ratio; // 计算等比例缩放后的高度
        $(this).css("height", height); // 设定等比例缩放后的高度
    }

    // 检查图片是否超高
    if (height > maxHeight) {
        ratio = maxHeight / height; // 计算缩放比例
        $(this).css("height", maxHeight); // 设定实际显示高度
        width = width * ratio; // 计算等比例缩放后的高度
        $(this).css("width", width * ratio); // 设定等比例缩放后的高度
    }
}
/**
 * 图片墙展示
 * @param id
 * @param twoId
 */
function imgShowInfo(id, twoId, type) {
    if (isNull(window.huiLifeInfo_imgs)) {
        var markers = ["/static/resources/images/d_white.png", "/static/resources/images/d_blue.png"];
        window.huiLifeInfo_imgs[0] = "/static/resources/images/icon_no_img.png";
        //id.html('<img class="shop_img" src="/static/resources/images/icon_no_img.png">');
        if (isNull(type)) {
            console.log("small");
            var dp = new DynamicPic({
                "id": twoId, //id，必须
                "pics": window.huiLifeInfo_imgs, //图片URL的数组，必须
                "markers": markers,
                "width": window.innerWidth, //默认为window.innerWidth
                "height": window.innerWidth * 9 / 16,
                "text": "   ",
                "stretch": false
            });
        } else {
            console.log("big");
            var dp = new DynamicPic({
                "id": twoId, //id，必须
                "pics": window.huiLifeInfo_imgs, //图片URL的数组，必须
                "markers": markers,
                "width": window.innerWidth, //默认为window.innerWidth
                "height": window.innerWidth, // window.innerWidth * 15 / 16
                "text": "   ",
                "stretch": false
            });
        }

    } else {
        if (isNull(type)) {
            console.log("small");
            var markers = ["/static/resources/images/d_white.png", "/static/resources/images/d_blue.png"];
            var dp = new DynamicPic({
                "id": twoId, //id，必须
                "pics": window.huiLifeInfo_imgs, //图片URL的数组，必须
                "markers": markers,
                "width": window.innerWidth, //默认为window.innerWidth
                "height": window.innerWidth, //window.innerWidth * 9 / 16
                "text": "   ",
                "stretch": false
            });
        } else {
            console.log("big");
            var markers = ["/static/resources/images/d_white.png", "/static/resources/images/d_blue.png"];
            var dp = new DynamicPic({
                "id": twoId, //id，必须
                "pics": window.huiLifeInfo_imgs, //图片URL的数组，必须
                "markers": markers,
                "width": window.innerWidth, //默认为window.innerWidth
                "height": window.innerWidth, //window.innerWidth * 15 / 16
                "text": "   ",
                "stretch": false
            });
        }

    }
}
/**
 * 判断非空
 * @param  {[type]}  content [内容]
 * @return {Boolean}         [false 为空true非空]
 */
function isNull(content) {
    if ("" == content || typeof(content) == content || null == content || "null" == content || "," == content || "undefined" == content || NaN == content || "NaN" == content) {
        return true;
    } else {
        return false;
    }
}
/**
 * 去除空展示
 * @param content
 * @returns {*}
 */
function returnNullInfo(content, type) {
    if ("" == content || typeof(content) == content || null == content || "null" == content || "," == content || "undefined" == content) {
        if (isNull(type)) {
            return "";
        } else {
            return "0";
        }

    } else {
        return content;
    }
}

/**
 * [doPost 请求方法]
 * @param  {[type]} url     [地址]
 * @param  {[type]} queDate [description]
 * @param  {[type]} func    [description]
 * @param  {[type]} yesOrNo [空有loading]
 * @param  {[type]} address [空用服务商接口地址，否则用公共接口地址]
 * @return {[type]}         [description]
 */
// function doPost(url, queDate, func, yesOrNo, address) {
//     console.log("使用url：" + address);
//     console.log(this);
//     this.$http.post('/wgh/app/'+ url, queDate).then(d=>{
//         console.log('new doPost success');
//         console.log(d);
//         func(d);
//     });
//
//     // if (window.isEncryption == 0) {
//     //     NoEncryption(url, queDate, func, yesOrNo, address);
//     // } else {
//     //     IsEncryption(url, queDate, func, yesOrNo, address);
//     // }
// }

/*请求接口加密*/
function IsEncryption(url, queDate, func, yesOrNo, address) {
    if (isNull(yesOrNo)) {
        //showLoading();
    }
    var urDate = "";
    if (isNull(address)) {
        urDate = window.serverUrl + url;
    } else if ("shop" == address) {
        urDate = window.serverShop + url;
    } else {
        urDate = window.serverUrlPublic + url;
    }

    var contents = {};
    var info = "";
    var enOption = {
        "str": queDate,
        //需要加密的字符串
        "key": "qazxsw123" //加密因子
    }
    jsict.des.encrypt(function(str) {
            info = str;
            if (isNull(info) == false) {
                contents.isKey = window.isEncryption;
                contents.data = info;
                console.log("信息：" + JSON.stringify(contents));
                console.log("未加密：" + queDate);
                $.ajax({
                    type: "POST",
                    url: urDate,
                    timeout: 60000,
                    //设置超时
                    data: contents,
                    dataType: "json",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    success: function(data) {
                        if (isNull(yesOrNo)) {
                            hideLoading();
                        }

                        if (data.resStatus == "0") {
                            console.log("response success:" + JSON.stringify(data));
                            func(data);
                        } else {
                            console.log("response fail:" + JSON.stringify(data));
                            if ("yes" == yesOrNo) {
                                hideLoading();
                            }
                            func(data);
                        }
                    },
                    error: function(date) {
                        if (isNull(yesOrNo)) {
                            hideLoading();
                        }
                      //  toast("请检查网络");
                    }
                });
            }
        },
        function(err) {
            console.error(err);
        },
        enOption);
}
Array.prototype.contains = function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};
/*请求接口不加密
 url：地址
 queDate：参数
 func：回调函数
 ismi：此处特殊处理可不写用于单张图片上传专用
 */
function NoEncryption(url, queDate, func, yesOrNo, address) {
    if (isNull(yesOrNo)) {
        //showLoading();
    }
    var urDate = "";
    urDate = window.serverUrl + url; //消费者接口
    contents = {};
    console.log("请求地址：" + urDate + "请求数据：" + queDate);
    /*
     if(isNull(ismi)){
     contents.isKey = window.isEncryption;
     }else{
     contents.isKey=0;
     }*/
    contents.para = queDate;
    console.log("请求参数：" + JSON.stringify(contents));
    $.ajax({
        type: "POST",
        url: urDate,
        timeout: 120000, //60000
        //设置超时
        data: contents,
        dataType: "json",
        success: function(data) {
            hideLoading();
            console.log("返回信息OK：" + url + "\t" + JSON.stringify(data));
            if (data.resStatus == "0") {
                console.log("response success:" + JSON.stringify(data));
                func(data);
            } else {
                if (isNull(yesOrNo)) {
                    hideLoading();
                }
                func(data);
            }
        },
        error: function(data) {
            if (isNull(yesOrNo)) {
                hideLoading();
            }
            window.regTime = 0;
            console.log("返回信息错误：" + data + "\t," + JSON.stringify(data));
           // toast("请检查网络");
        }
    });
}

function toJson(key, value) {
    var str = "";
    str += key + "=" + value;
    return str;
}

//用于返回时候计算
window.saveFooter = {
    clickNum: 0,
    currentPage: 0,
    clickPage: [],
    footerClick: false
};
/**
 * 判断固定电话区号
 * @param num
 * @returns {boolean}
 */
function checkQunNumber(num) {
    var phone = /^(([0\+]\d{2,3}-)?(0\d{2,3}))?$/.test(num); //带区号的固定电话
    return phone;
}
/**
 * 判断固定电话
 * @param num
 */
function checkGuNumber(num) {
    var phone = /^(\d{7,8})(-(\d{3,}))?$/.test(num); //不带区号的固定电话
    return phone;
}
//获取点击第几个页面
function calcIndex() {
    if ($.mobile.activePage.is('#load_welcome_page')) {
        return 1;
    } else if ($.mobile.activePage.is('#case_list_page')) {
        return 2;
    } else if ($.mobile.activePage.is('#communication_welcome_page')) {
        return 3;
    } else if ($.mobile.activePage.is('#more_more_welcome_page')) {
        return 4;
    }
}

//BackButton按钮
function onBackKeyDown() {
    if ($(".dw-persp").is(':visible') == true) {
        $(".dw-persp").remove();
    } else if ($(".max-dialog").is(':visible') == true) {
        $(".max-dialog").remove();
        window.filter_alert_status = "";
    } else {
        window.saveFooter.footerClick = false;
        window.saveFooter.clickNum -= 1;
        var indexClaced = calcIndex();
        var href = window.location.href;
        if (href.match("waitWorkWelcome.html") || href.match("moreWelcome.html") || href.match("visitWelcomeList.html") || href.match("workWelcomeType.html") || href.match("opinionWelcomeList.html") || href.match("caseEdit.html") || href.match("partManagementWelcome.html") || href.match("noticeWelcomeList.html")) {
            //首页
            app.$router.push('../load/welcome.html');
        } else if (href.match("waitTodoCaseList.html") || href.match("checkWelcomeList.html") || href.match("opinionWelcomeList.html")) {
            //待办列表
            /*if ($(".max-dialog").is(':visible') == true) {
                $(".max-dialog").remove();
            } else {
                app.$router.push("../load/welcome.html");
            }*/
            app.$router.push("../load/welcome.html");
        } else if (href.match("allPartsList.html")) {
            hideUpSearchDiv("../load/partManagementWelcome.html");
        } else if (href.match("myPartsList.html")) {
            app.$router.push("../load/partManagementWelcome.html");
        } else if (href.match("myAddPart.html")) {
            app.$router.push("../parts/myPartsList.html");
        } else if (href.match("visit_task_detail.html")) {
            //走访任务详情
            if ("welcome" == window.welcomeCheckJumpType) {
                app.$router.push("../load/welcome.html");
            } else {
                app.$router.push("../visit/visitWelcomeList.html");
            }
        } else if (href.match("opinionDetail.html")) {
            if ("welcome" == window.welcomeCheckJumpType) {
                app.$router.push("../load/welcome.html");
            } else {
                app.$router.push("../opinion/opinionWelcomeList.html");
            }
        } else if (href.match("opinionedDetail.html")) {
            app.$router.push("../opinion/opinionWelcomeList.html");
        } else if (href.match("visited_enterprise_edit.html") || href.match("visited_enterpriseTask_detail.html") || href.match("visited_farmer_edit.html") || href.match("visited_farmerTask_detail.html")) {
            app.$router.push("../visit/visitWelcomeList.html");
        } else if (href.match("visitChoicePeople.html")) {
            app.$router.push("../visit/visit_task_detail.html");
        } else if (href.match("opinionOperation.html") || href.match("opinionSolve.html")) {
            app.$router.push("../opinion/opinionDetail.html");
        } else if (href.match("checkedTaskDetail.html")) {
            app.$router.push("../check/checkWelcomeList.html");
        } else if (href.match("checkChoicePeople.html")) {
            app.$router.push("../check/checkTaskDetail.html");
        } else if (href.match("documentManagement.html")) {
            app.$router.push("../workassist/workWelcomeType.html");
        } else if (href.match("documentManagementDetail.html")) {
            app.$router.push("../workassist/documentManagement.html");
        } else if (href.match("caseList.html")) {
            /*  if ($(".max-dialog").is(':visible') == true) {
                  $(".max-dialog").remove();
              } else {
                  app.$router.push("../load/welcome.html");
              }*/
            app.$router.push("../load/welcome.html");
        } else if (href.match("checkTaskDetail.html")) {
            if ("welcome" == window.welcomeCheckJumpType) {
                app.$router.push("../load/welcome.html");
            } else {
                app.$router.push("../check/checkWelcomeList.html");
            }
        } else if (href.match("wiatCaseTaskDetail.html")) {
            //工单任务详情
            if (window.localStorage.userType == "17" || window.localStorage.userType == "18") {
                app.$router.push("../case/leaderInstructionsList.html");
            } else {
                window.CaseTaskDetailPage = false;
                app.$router.push("../hscasetask/waitTodoCaseList.html");
            }
        } else if (href.match("zhcx.html")) {
            app.$router.push("../load/welcome.html");
        } else if (href.match("wggl.html")) {
            app.$router.push("../load/welcome.html");
        } else if (href.match("xxcjList.html")) {
            app.$router.push("../load/welcome.html");
        } else if (href.match("sbxxList.html")) {
            if ($("#sbxxycj_select_content").is(':visible') == true) {

                $("#sbxxycj_select_content").hide();
            } else {
                app.$router.push("../hsxcy/wggl.html");
            }
        } else if (href.match("alreadyCaseTaskedDetail.html")) {
            if ((window.localStorage.userType == "17" || window.localStorage.userType == "18") && window.zhcxFlag === "0") {

                window.zhcxFlag = "1";
                app.$router.push("../hsxcy/zhcx.html");

            } else if ((window.localStorage.userType === "02" || window.localStorage.userType === "19" && window.zhcxFlag === "0")) {
                window.zhcxFlag = "1";
                app.$router.push("../hsxcy/zhcx.html");
            } else {
                window.CaseTaskedDetailPage = false;
                app.$router.push("../hscasetask/caseAlreadyWelcomeList.html");
            }
        } else if (href.match("caseAlreadyWelcomeList.html")) {
            app.$router.push("../load/welcome.html");
        } else if (href.match("caseTaskEdit.html")) {
            app.$router.push("../hscasetask/wiatCaseTaskDetail.html");
        } else {
            if (href.match("welcome.html") || href.match("load.html") || href.match("login.html")) {
                //退出app
                showExitAlert(function() {
                    navigator.app.exitApp();
                });
            } else if (",2,3,4".indexOf(indexClaced) > 0) {
                app.$router.push('../load/welcome.html');
            } else {
                var pageLength = window.saveFooter.clickPage.length,
                    lastIndex = (window.saveFooter.clickNum > 1) ? window.saveFooter.clickPage[clickNum - 2] : window.saveFooter.clickPage[0];
                window.history.back();
            }
        }
    }
}

function getInputLength(id, maxstrlen) {
    var str = $("#" + id).val().replace(/\s/g, "");
    if (str.length > maxstrlen) {
        $("#" + id).val(str.substring(0, maxstrlen));
    }
}
/*
 *  str          输入的密码
 *
 */
function CheckPassword(str) {
    var reg = /^[0-9a-zA-Z_]{6,16}$/;
    if (!reg.test(str)) {
        return false;
    } else {
        return true;
    }
}


/*日期时间*/
function chooseDate(id, type) {
    var nowName = '今天';
    if (type == 'time') {
        nowName = '现在'
    }

    setTimeout(function() {
        var opt = {};
        opt.date = {
            preset: type

        }; //type=====date日期 、time时间、datetime日期+时间
        opt.default = {
            //height: 30,//每一栏的高度
            //width: 40,//每一栏的宽度
            theme: 'android-ics light',
            //皮肤样式
            display: 'modal',
            //显示方式
            mode: 'scroller',
            //日期选择模式
            lang: 'zh',
            showNow: true,
            nowText: nowName,
            closeOnOverlay: true,
            dateFormat: 'yy-mm-dd'
        };
        var getTisDateBtn = $.extend(opt['date'], opt['default']);
        var getTisDateTimeBtn = $.extend(opt['datetime'], opt['default']); //初始化年月日时分秒
        if ("datetime" == type) {
            console.log("日期");
            //return getTisDateTimeBtn;
            $("#" + id).mobiscroll(getTisDateTimeBtn).datetime(getTisDateTimeBtn); //
            //$("#morning-start-time").mobiscroll(optDateTime).datetime(optDateTime);//
        } else {
            console.log("时间");
            $("#" + id).mobiscroll($.extend(opt['date'], opt['default'])); //
            //return getTisDateBtn;
        }
    }, 500);
}

/**
 *
 * @param path 文件名称
 * @param uploadurl  下载路径
 */
function checkDownload(path, uploadurl, name) {
    //showLoading();
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(uploadurl);
    console.log("uri:" + uri);
    var filePath = path + name;
    window.filePathUrl = path + name;
    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
            var temp = parseInt(progressEvent.loaded / progressEvent.total * 100);
            if (temp == 100) {
                toast("下载完成，文件在" + filePath);
            }
            console.log("正在下载：" + temp + "%");
        } else {

        }
    }; //js端回调下载传进度
    fileTransfer.download(
        uri,
        filePath,
        function(entry) {
            hideLoading();
            jsict.appManager.openLocalFile(
                function() {
                    console.log("uinstalled the app");
                },
                function(err) {
                    console.log(err);
                }, window.filePathUrl);
            console.log("路径：" + uri);
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        }
    );
}

function checkSDCard(url, name) {
    console.log("将要下载的路径：" + url + "\t，文件名称" + name);
    jsict.util.getSDCardPath(function(data) {
            window.sdCardPath = isNull(data.internal) ? data.external : data.internal; //得到sdcard目录
            window.resolveLocalFileSystemURI("file://" + window.sdCardPath,
                function(de) {
                    de.getDirectory("word", {
                            create: true,
                            exclusive: false
                        },
                        function() { //利用DirectoryEntry对象创建sdcard下的目录azbj
                            //window.appPath = window.sdCardPath + "/word/";//文件路径
                            window.fileParth = url;
                            checkDownload(window.sdCardPath + "/word/", url, name);
                        },
                        function() {
                            showAlert("目录创建失败，请检查sdcard");
                        });
                },
                function() {
                    showAlert("目录创建失败，请检查sdcard");
                });
        },
        function(err) {
            showAlert("没有检测到sdcard,无法更新");
        });
}


/*检查SD卡*/
function getSDCard(url) {
    jsict.util.getSDCardPath(function(data) {
            window.sdCardPath = isNull(data.internal) ? data.external : data.internal; //得到sdcard目录
            window.resolveLocalFileSystemURI("file://" + window.sdCardPath,
                function(de) {
                    de.getDirectory("zjxq", {
                            create: true,
                            exclusive: false
                        },
                        function() { //利用DirectoryEntry对象创建sdcard下的目录azbj
                            console.log("开始下载");
                            window.appPath = window.sdCardPath + "/zjxq/";
                            download(window.appPath, window.appurl);
                        },
                        function() {
                            showAlert("目录创建失败，请检查sdcard");
                        });
                },
                function() {
                    showAlert("目录创建失败，请检查sdcard");
                });
        },
        function(err) {
            showAlert("没有检测到sdcard,无法更新");
        });
}
/*下载*/
function download(path, uploadurl) {
    //showLoading();
    console.log('进入下载方法download');
    var fileTransfer = new FileTransfer();
    console.log("正在下载地址：" + uploadurl);
    var url = encodeURI(uploadurl);
    // var url = encodeURI('http://www.hxwqzs.com/apk/wqzs2116.apk');
    var filePath = path + "zjxq.apk";
    console.log("path：" + path);
    $("#yes_update_btn").html("正在下载：" + 0 + "%");
    /*showContentAlert("正在下载：" + 0 + "%",
     function() {
     if (window.ismust == 2 && temp != 100) {
     navigator.app.exitApp();
     } else {
     $(".max-alert").remove();
     }
     });*/
    console.log("下载路径：" + url);
    console.log("安装文件路径：" + filePath);
    console.log("安装路径：" + window.appPath + "zjxq.apk");
    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
            console.log("文件进度：" + fileTransfer._id + "  " + progressEvent.loaded / progressEvent.total);
            var temp = parseInt(progressEvent.loaded / progressEvent.total * 100);
            $("#yes_update_btn").html("正在下载：" + temp + "%");
        } else {
            toast("下载失败");
        }
    }; //js端回调下载传进度
    console.log("url：" + url + "\t,filePath：" + filePath);
    fileTransfer.download(url, filePath,
        function(entry) {
            hideLoading();
            jsict.appManager.installApp(function() {
                console.log("成功安装app");
            }, function(err) {
                console.log("安装app失败");
            }, window.appPath + "zjxq.apk");
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
            hideLoading();
        }, true);
}

/**
 * 与当前时间比较
 * @param date
 * @returns {boolean}
 */
function comp_date(date) {
    date = date.replace("-", "/");
    var now = new Date();
    var nDate = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
    var nowDate = new Date(Date.parse(nDate));
    var checkDate = new Date(Date.parse(date));
    if (checkDate < nowDate) {
        return false;
    } else if (checkDate == nowDate) {
        return false;
    } else {
        return true;
    }
}
