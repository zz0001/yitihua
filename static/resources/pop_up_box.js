/**
 * 确定取消退出
 * @param  {[type]} fun1 [description]
 * @param  {[type]} fun2 [description]
 * @param  {[type]} fun3 [description]
 * @return {[type]}      [description]
 */
function showExitAlert(fun1, fun2) {
    var exixt_html = "<div class='max-dialog max-confirm2'>";
    exixt_html += "     <div class='max-dialog-masker'></div>";
    exixt_html += "     <div class='max-dialog-frame'>";
    exixt_html += "         <div class='max-dialog-content'>";
    exixt_html += "             <p class='small'>确定要退出吗？</p>";
    exixt_html += "             <div class='alert_bottom_three orange_background small'>确定</div>";
    exixt_html += "             <div class='alert_bottom_three gray_background small'>取消</div>";
    exixt_html += "         </div>";
    exixt_html += "     </div>";
    exixt_html += " </div>";
    var $exixt_html = $(exixt_html).fadeIn(800).appendTo(".ui-page-active");
    $exixt_html.find(".orange_background").bind("click", function() {
        if (fun1)
            fun1.call();
        $(".max-confirm2").fadeOut(800);
    });
    $exixt_html.find(".gray_background").bind("click", function() {
        if (fun2)
            fun2.call();
        $(".max-confirm2").fadeOut(800);
    });

}
/**
 * 选择图片三个不同颜色按钮
 * @param  {[type]} fun1 [description]
 * @param  {[type]} fun2 [description]
 * @param  {[type]} fun3 [description]
 * @return {[type]}      [description]
 */
function showBottomAlert(fun1, fun2, fun3, content, name1, name2) {
    var bottom_html = "<div class='max-dialog max-confirm2'>";
    bottom_html += "        <div class='max-dialog-masker'></div>";
    bottom_html += "        <div class='max-dialog-frame'>";
    bottom_html += "            <div class='max-dialog-content'>";
    bottom_html += "                <p class='smaller'>" + content + "</p>";
    bottom_html += "                <div id='photo_choice_picture' class='alert_bottom_three blue_background small'>" + (name1 || "拍照") + "</div>";
    bottom_html += "                <div id='photo_choice_book' class='alert_bottom_three orange_background small'>" + (name2 || "相册") + "</div>";
    bottom_html += "                <div id='photo_choice_cancle' class='alert_bottom_three gray_background small'>取消</div>";
    bottom_html += "            </div>";
    bottom_html += "        </div>";
    bottom_html += "    </div>";
    var $alert_bottom = $(bottom_html).fadeIn(800).appendTo(".ui-page-active");
    console.log("点击了");
    $alert_bottom.find("#photo_choice_picture").bind("click", function() {
        if (fun1)
            fun1.call();
        $(".max-confirm2").fadeOut(800, function() {
            $(".max-confirm2").remove();
        });
    });
    $alert_bottom.find("#photo_choice_book").bind("click", function() {
        console.log("点击了选择图片");
        if (fun2)
            fun2.call();
        $(".max-confirm2").fadeOut(800, function() {
            $(".max-confirm2").remove();
        });
    });
    $alert_bottom.find("#photo_choice_cancle").bind("click", function() {
        if (fun3)
            fun3.call();
        $(".max-confirm2").fadeOut(800, function() {
            $(".max-confirm2").remove();
        });
    });
}

/**
 *
 * 修改密码
 * @param fun1
 * @param fun2
 * @param name1
 * @param name2
 */
function showTwoChoiceAlert(fun1, fun2, name1, name2) {
    var twochoice_html = "<div class='max-dialog max-confirm2'>";
    twochoice_html += "        <div class='max-dialog-masker twochoice'></div>";
    twochoice_html += "        <div class='max-dialog-frame'>";
    twochoice_html += "            <div class='max-dialog-content' style='margin:0em;background:#ffffff;'>";
    twochoice_html += "                <div id='forgert_picture' class='alert_bottom_two'>" + name1 + "</div>";
    twochoice_html += "                <div id='update_picture' class='alert_bottom_two'>" + name2 + "</div>";
    twochoice_html += "            </div>";
    twochoice_html += "        </div>";
    twochoice_html += "    </div>";
    var $twochoice_html = $(twochoice_html).fadeIn(800).appendTo(".ui-page-active");
    setTimeout(function() {
        $twochoice_html.find(".twochoice").bind("click", function() {
            $(".max-confirm2").fadeOut(800, function() {
                $(".max-confirm2").remove();
            });
        });
    }, 500);
    setTimeout(function() {
        $twochoice_html.find("#forgert_picture").bind("click", function() {
            if (fun1)
                fun1.call();
            $(".max-confirm2").fadeOut(800, function() {
                $(".max-confirm2").remove();
            });
        });
    }, 500);
    setTimeout(function() {
        $twochoice_html.find("#update_picture").bind("click", function() {
            if (fun2)
                fun2.call();
            $(".max-confirm2").fadeOut(800, function() {
                $(".max-confirm2").remove();
            });
        });
    }, 500);
}
/**
 * 商品购买属性
 * @param fun1
 * @param fun2
 */
function showGoodType(func, fun1, number, stocknum, fun3, fun4) {
    var goodtype_html = "<div  class='max-dialog max-confirm2 goodtype_alert'>";
    goodtype_html += "        <div class='max-dialog-masker'  id='goodtype_alert'></div>";
    goodtype_html += "        <div class='max-dialog-frame good_type_backdiv'>";

    goodtype_html += "              <div class='page_content goodtype_content'style='background:#ffffff;'>";
    goodtype_html += "                  <table  style='padding:0.5em;' class='gray_line_bottom goodtype_table'>";
    goodtype_html += "                      <tr>";
    goodtype_html += "                          <td style='width:7em;' id='goodtype_img'></td>";
    goodtype_html += "                          <td style='position:absolute;'>";
    goodtype_html += "<div class='' style='color: red;font-weight:bold;position: relative;'>¥";
    goodtype_html += "    <span style='font-size:1.2em;color: red;font-weight:bold;' class='price_bigger' id='goodtype_m_price'></span>";
    //goodtype_html += "    <span class='gray_font grayoldprice' id='goodtype_m_oldprice'></span>";
    goodtype_html += "</div>";
    goodtype_html += "<div class='gray_font' style='position: relative;'>¥";
    goodtype_html += "    <span style='color:#999999' class='gray_font' id='goodtype_price'></span>";
    goodtype_html += "    <span class='gray_font grayoldprice' id='goodtype_oldprice'></span>";
    goodtype_html += "</div>";
    goodtype_html += "                              <p  style='color:#333333;' id='goodtype_stockNump'>库存：<span id='goodtype_stockNum'>189</span></p>";
    goodtype_html += "                          </td>";
    goodtype_html += "                      </tr>";
    goodtype_html += "                  </table>";
    goodtype_html += "                  <div id='goodtype_alert_wrapper' class='jszx-wrapper'>";
    goodtype_html += "                      <div class='jszx-scroller'>";
    goodtype_html += "                          <div id='goodtype_html'  style='padding-left:1em;padding-top:0.5em;'>";
    goodtype_html += "                          </div>";
    goodtype_html += "                          <table style='padding-left:1em;padding-top:0.5em;padding-right:1em;' class='shop_buy_table'cellspacing='0'>";
    goodtype_html += "                              <tr>";
    goodtype_html += "                                  <td style='width:58%;'>购买数量</td>";
    goodtype_html += "                                  <td class='retd' id='goodtype_reducenum'>";
    goodtype_html += "                                     -";
    goodtype_html += "                                  </td>";
    goodtype_html += "                                  <td class='inptd' style=''>";
    goodtype_html += "                                      <input id='goodtype_valStockNum' class='input_goodNum' value='1' type='tel'/>";
    goodtype_html += "                                  </td>";
    goodtype_html += "                                  <td class='addtd' id='goodtype_addnum'>";
    goodtype_html += "                                     +";
    goodtype_html += "                                  </td>";
    goodtype_html += "                              </tr>";
    goodtype_html += "                          </table>";
    goodtype_html += "                      </div>";
    goodtype_html += "                  </div>";
    goodtype_html += "                  </div>";
    goodtype_html += "           <div class='page_footer alert_bottom_three' id='showGoodTypeFooter' style='margin-left:0em;margin-right:0em;margin-bottom:0em;border-radius:0em;'>";
    goodtype_html += "                 <div id='showGoodType_yes'   class='orange_background' style='height:2.5em;color:#ffffff;'>确定</div>";
    goodtype_html += "                 <div id='showAlertTwoButton' class='jszx-bar-icon-up jszx-bar-item-2'>";
    goodtype_html += "                      <div id='alert_addcart' class='orange_dark_background' style='width:50%;color:#ffffff;'>加入购物车</div>";
    goodtype_html += "                      <div id='alert_buy' class='red_background' style='width:50%;color:#ffffff;'> 立即购买</div>";
    goodtype_html += "                  </div>";
    goodtype_html += "          </div>";
    goodtype_html += "    </div>";
    var $showGoodType = $(goodtype_html).appendTo(".ui-page-active").hide();
    $(".goodtype_alert").fadeIn(800);
    if (!isNull(func)) {
        func.call();
    }
    $(".goodtype_content").css("height", window.localInnerHeight * 0.6 - $("#showGoodTypeFooter").height() + "px");
    $("#goodtype_alert_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $(".goodtype_table").height() - $("#showGoodTypeFooter").height() - 15 + "px";
    //减
    $showGoodType.find("#goodtype_reducenum").bind("click", function() {
        console.log("//减" + $("#goodtype_stockNum").html());
        var goodNum = parseInt($("#goodtype_valStockNum").val());
        console.log("//数量" + goodNum);
        if (parseInt(goodNum) > 1 && parseInt(goodNum) != 1) {
            goodNum--;
            $("#goodtype_valStockNum").val(goodNum);
            window.commodityChoiceNum = goodNum;
        } else {
            //                    toast("至少购买一件该商品!");
        }
    });
    //加法
    $showGoodType.find("#goodtype_addnum").bind("click", function() {
        console.log("//加" + $("#goodtype_stockNum").html());
        var goodNum = parseInt($("#goodtype_valStockNum").val());
        if ((parseInt(goodNum) < parseInt($("#goodtype_stockNum").html()))) {
            goodNum++;
            $("#goodtype_valStockNum").val(goodNum);
            console.log("数量为：" + goodNum);
            window.commodityChoiceNum = goodNum;
        } else {
            $("#goodtype_valStockNum").val($("#goodtype_stockNum").html());
        }
    });
    //确定
    setTimeout(function() {
        $showGoodType.find("#showGoodType_yes").bind("click", function() {
            if (window.typeLength > 0) {
                if (!isNull(window.choiceSize) && window.choiceSize.length > 0) {
                    if (parseInt(window.choiceSize.length) == parseInt(window.typeLength)) {
                        if ($("#goodtype_stockNum").html() > 0) {
                            if (yesNumberAlert(stocknum) == true) {
                                if (fun1)
                                    fun1.call();
                                $(".goodtype_alert").fadeOut(800, function() {
                                    $(".goodtype_alert").remove();
                                });
                            }
                        } else {
                            toast("暂无库存");
                        }

                    } else {
                        toast("请选择商品属性");
                    }
                } else {
                    toast("请选择商品属性");
                }
            } else {
                if (yesNumberAlert(stocknum) == true) {
                    if (fun1)
                        fun1.call();
                    $(".goodtype_alert").fadeOut(800, function() {
                        $(".goodtype_alert").remove();
                    });
                }
            }
            //if (parseInt(window.choiceSize.length) == parseInt(window.typeLength)) {
            //    if (yesNumberAlert(stocknum) == true) {
            //        if (fun1)
            //            fun1.call();
            //        $(".goodtype_alert").fadeOut(800, function () {
            //            $(".goodtype_alert").remove();
            //        });
            //    }
            //} else {
            //    toast("请选择商品属性");
            //}
            console.log("商品数量" + window.commodityChoiceNum);

        });
    }, 500);
    //加入购物车
    $showGoodType.find("#alert_addcart").bind("click", function() {

        if (window.typeLength > 0) {
            if (!isNull(window.choiceSize) && window.choiceSize.length > 0) {
                if (parseInt(window.choiceSize.length) == parseInt(window.typeLength)) {
                    if ($("#goodtype_stockNum").html() > 0) {
                        if (yesNumberAlert(stocknum) == true) {
                            if (fun3)
                                fun3.call();
                            $(".goodtype_alert").fadeOut(800, function() {
                                $(".goodtype_alert").remove();
                            });
                        }
                    } else {
                        toast("暂无库存");
                    }

                } else {
                    toast("请选择商品属性");
                }
            } else {
                toast("请选择商品属性");
            }
        } else {
            if (yesNumberAlert(stocknum) == true) {
                if (fun3)
                    fun3.call();
                $(".goodtype_alert").fadeOut(800, function() {
                    $(".goodtype_alert").remove();
                });
            }
        }

    });
    //取消
    $showGoodType.find("#goodtype_alert").bind("click", function() {
        window.valueArray = new Array();
        window.idArray = new Array();
        window.choiceSize = new Array();
        window.goodTypeAttValueIds = "";
        $(".goodtype_alert").fadeOut(800, function() {
            $(".goodtype_alert").remove();
        });
    });
    //立刻购买
    $showGoodType.find("#alert_buy").bind("click", function() {
        if (window.typeLength > 0) {
            if (!isNull(window.choiceSize) && window.choiceSize.length > 0) {
                if (parseInt(window.choiceSize.length) == parseInt(window.typeLength)) {
                    if ($("#goodtype_stockNum").html() > 0) {
                        if (yesNumberAlert(stocknum) == true) {
                            if (fun4)
                                fun4.call();
                            $(".goodtype_alert").fadeOut(800, function() {
                                $(".goodtype_alert").remove();
                            });
                        }
                    } else {
                        toast("暂无库存");
                    }

                } else {
                    toast("请选择商品属性");
                }
            } else {
                toast("请选择商品属性");
            }
        } else {
            if (yesNumberAlert(stocknum) == true) {
                if (fun4)
                    fun4.call();
                $(".goodtype_alert").fadeOut(800, function() {
                    $(".goodtype_alert").remove();
                });
            }
        }

        //if (parseInt(window.choiceSize.length) == parseInt(window.typeLength)) {
        //    if (yesNumberAlert(stocknum) == true) {
        //        if (fun4)
        //            fun4.call();
        //        $(".goodtype_alert").fadeOut(800, function () {
        //            $(".goodtype_alert").remove();
        //        });
        //    }
        //} else {
        //    toast("请选择商品属性");
        //}
    });
}
/**
 * 单选弹出框，可滑动
 * @param  {[type]} html [<p class="alert_edit_title gray_line_bottom"> 社区名称编辑 </p>]
 * @param  {[type]} fun1 [处理方法]
 * @return {[type]}      [description]
 */
function showChoiceOne() {
    $(".max-dialog").remove();
    var choice_one = "<div class='max-dialog max-alert alert_value_scroll'>";
    choice_one += "     <div class='max-dialog-masker alert_value_max'></div>";
    choice_one += "     <div class='max-dialog-frame'>";
    choice_one += "         <div  class='max-dialog-content'>";
    choice_one += "             <div id='noconfirm' class='jszx-wrapper max_height_div'>";
    choice_one += "                 <div class='jszx-scroller'>";
    choice_one += "                     <div class='max-dialog-text' id='choice_one_html'>";
    //choice_one += (html || "");
    choice_one += "                     </div>";
    choice_one += "                 </div>";
    choice_one += "             </div>";
    choice_one += "         </div>";
    choice_one += "     </div>";
    choice_one += "</div>";
    var $choice_one = $(choice_one).appendTo(".ui-page-active").show();
    initScroll({
        "wrapper": "noconfirm",
        "dir": "y",
        "bounce": true
    });
    //$(".alert_value_scroll").fadeIn(500);
    setTimeout(function() {
        $choice_one.find(".alert_value_max").bind("click", function() {
            $(".alert_value_scroll").fadeOut(500, function() {
                $(".alert_value_scroll").remove();
            });

        });
    }, 500);
    $choice_one.find("#choice_one_html").bind("click", function() {
        $(".alert_value_scroll").fadeOut(500, function() {
            $(".alert_value_scroll").remove();
        });
    });
}
/**
 * [showChoiceOneButton 带有两个按钮的一维代码]
 * @param  {[type]} fun1 [description]
 * @param  {[type]} fun2 [description]
 * @return {[type]}      [description]
 */
function showChoiceOneButton(fun1, fun2) {
    var choice_one_button = "<div class='max-dialog max-alert type_value_scroll'>";
    choice_one_button += "     <div class='max-dialog-masker'></div>";
    choice_one_button += "     <div class='max-dialog-frame'>";
    choice_one_button += "         <div  class='max-dialog-content'>";
    choice_one_button += "             <div id='goodtype_btn' class='jszx-wrapper max_height_div'>";
    choice_one_button += "                 <div class='jszx-scroller'>";
    choice_one_button += "                     <div class='max-dialog-text' id='choice_one_button_html'>";
    choice_one_button += "                     </div>";
    choice_one_button += "                 </div>";
    choice_one_button += "             </div>";
    choice_one_button += '        <div class="alert_edit_button_div" style="margin-top:1em;">';
    choice_one_button += '             <span id="up_goodtype_button" class="alert_edit_button_left1 small" style="color:#ffffff;border:none;background:#0283de;width:90%;margin-left:5%;"> 返回 </span> ';
    choice_one_button += '        </div>';
    choice_one_button += "         </div>";
    choice_one_button += "     </div>";
    choice_one_button += "</div>";
    var $choice_one_button = $(choice_one_button).appendTo(".ui-page-active").hide();
    initScroll({
        "wrapper": "goodtype_btn",
        "dir": "y",
        "bounce": true
    });
    $(".type_value_scroll").fadeIn(800);
    $choice_one_button.find("#up_goodtype_button").bind("click", function() {
        if (fun1)
            fun1.call();
        goodsTypeList();
        $(".type_value_scroll").fadeOut(800, function() {
            $(".type_value_scroll").remove();
        });
    });
    $choice_one_button.find(".max-dialog-text").bind("click", function() {
        if (fun2)
            fun2.call();
        $(".type_value_scroll").fadeOut(800, function() {
            $(".type_value_scroll").remove();
        });

    });
}
/**
 * 修改信息
 * @param  {[type]} fun1 [description]
 * @param  {[type]} fun2 [description]
 * @return {[type]}      [description]
 */
function showEditAlert(content, nofun, yesfun) {
    var edit_html = '<div class ="max-dialog max-alert">';
    edit_html += '   <div class="max-dialog-masker"></div>';
    edit_html += '  <div class="max-dialog-frame">';
    edit_html += '     <div class="alert_edit">';
    edit_html += '     </div>';
    edit_html += ' </div>';
    edit_html += '</div>';
    var $alert_edit = $(edit_html).appendTo(".ui-page-active").hide();
    if ("" != content) {
        $("#alert_inp_value").val(content);
    }
    $(".max-alert").fadeIn(800);
    $alert_edit.find(".alert_edit_del_inp").bind("click", function() {
        $("#alert_inp_value").val("");
    });
    $alert_edit.find("#noconfirm").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });
    });
    $alert_edit.find("#yesconfirm").bind("click", function() {
        if (isNull($("#alert_inp_value").val())) {
            toast("社区名称不能为空");
        } else {
            if (yesfun)
                yesfun.call();
            $(".max-alert").fadeOut(800, function() {
                $(".max-alert").remove();
            });
        }

    });
}
/**
 * 分享
 * @param fun
 * @param fun2
 * @param fun3
 * @param fun4
 * @param btnname
 */
function shareChoice(fun, fun2, fun3, fun4, btnname) {
    var sharechoice_html = "<div class='max-dialog max-confirm2 sharechoice_screen'>";
    sharechoice_html += "     <div class='max-dialog-masker' id='provicitymasker'></div>";
    sharechoice_html += "     <div class='max-dialog-frame sharechoice_div'  style='height:11.5em;background: #ffffff;'>";
    sharechoice_html += "         <div class='max-dialog-content' style='background:#ffffff;margin:0em;'>";
    sharechoice_html += "              <p style='font-size: 1.1em;padding:0em 0em 0em 1.2em;;line-height: 3em;text-align: left'>分享到</span></p>";
    sharechoice_html += "            <div id='sharechoice' style='height:5.3em;' class='jszx-bar-icon-up jszx-bar-item-4'>";
    sharechoice_html += "                  <div id='wx_friend'>";
    sharechoice_html += "                      <img src='/static/resources/images/wx_friend.png'/>";
    sharechoice_html += "                      <p>微信好友</p>";
    sharechoice_html += "                  </div>";
    sharechoice_html += "                <div id='wx_zone'>";
    sharechoice_html += "                      <img src='/static/resources/images/wx_zone.png'/>";
    sharechoice_html += "                      <p>朋友圈</p>";
    sharechoice_html += "               </div>";
    sharechoice_html += "               <div id='qq_friend'>";
    sharechoice_html += "                   <img src='/static/resources/images/qq_friend.png'/>";
    sharechoice_html += "                   <p>QQ好友</p>";
    sharechoice_html += "               </div>";
    sharechoice_html += "               <div id='qq_zone'>";
    sharechoice_html += "                    <img src='/static/resources/images/qq_zone.png'/>";
    sharechoice_html += "                  <p>QQ空间</p>";
    sharechoice_html += "              </div>";
    sharechoice_html += "           </div>";
    sharechoice_html += "           <div class='page_footer alert_bottom_three' id='shareChoiceFooter' style='margin-left:0em;margin-right:0em;margin-bottom:0em;border-radius:0em;'>";
    sharechoice_html += "                 <div id='showGoodType_yes'   class='gray_background' style='height:2.5em;color:#ffffff;'>" + (btnname || "取消") + "</div>";
    sharechoice_html += "         </div>";
    sharechoice_html += "     </div>";
    sharechoice_html += " </div>";
    var $page_sharechoice = $(sharechoice_html).appendTo(".ui-page-active").hide();
    //$(".sharechoice_div").css("height", "5em");
    $(".sharechoice_screen").fadeIn(800);
    $page_sharechoice.find("#wx_friend").bind("click", function() {
        jsict.appManager.hasApp(
            function(result) {
                console.log("已经安装" + result);
                if (false == result) {
                    toast("尚未安装微信");
                } else {
                    fun();
                    $(".sharechoice_screen").fadeOut(800, function() {
                        $(".sharechoice_screen").remove();
                    });
                }
            },
            function(err) {
                toast("尚未安装微信");
                console.log("是否安装" + err); //安装返回true；未安装返回false
            }, "com.tencent.mm" //应用的包名。IOS平台上此参数为URL，例如urltype://abcdefg?para=123，协议名utrtype是在被打开应用的plist文件中URL Types中的其中某一项定义的。
        );

    });
    $page_sharechoice.find("#wx_zone").bind("click", function() {
        jsict.appManager.hasApp(
            function(result) {
                if (false == result) {
                    toast("尚未安装微信");
                } else {
                    fun2();
                    $(".sharechoice_screen").fadeOut(800, function() {
                        $(".sharechoice_screen").remove();
                    });
                }
            },
            function(err) {
                toast("尚未安装微信");
                console.log("是否安装" + err); //安装返回true；未安装返回false
            }, "com.tencent.mm" //应用的包名。IOS平台上此参数为URL，例如urltype://abcdefg?para=123，协议名utrtype是在被打开应用的plist文件中URL Types中的其中某一项定义的。
        );
    });
    $page_sharechoice.find("#qq_friend").bind("click", function() {
        jsict.appManager.hasApp(
            function(result) {
                console.log("已经安装" + result);
                if (false == result) {
                    toast("尚未安装QQ");
                } else {
                    fun3();
                    $(".sharechoice_screen").fadeOut(800, function() {
                        $(".sharechoice_screen").remove();
                    });
                }
            },
            function(err) {
                toast("尚未安装QQ");
                console.log("是否安装" + err); //安装返回true；未安装返回false
            }, "com.tencent.mobileqq" //应用的包名。IOS平台上此参数为URL，例如urltype://abcdefg?para=123，协议名utrtype是在被打开应用的plist文件中URL Types中的其中某一项定义的。
        );

    });
    $page_sharechoice.find("#qq_zone").bind("click", function() {
        jsict.appManager.hasApp(
            function(result) {
                console.log("已经安装" + result);
                if (false == result) {
                    toast("尚未安装QQ");
                } else {
                    fun4();
                    $(".sharechoice_screen").fadeOut(800, function() {
                        $(".sharechoice_screen").remove();
                    });
                }
            },
            function(err) {
                toast("尚未安装QQ");
                console.log("是否安装" + err); //安装返回true；未安装返回false
            }, "com.tencent.mobileqq" //应用的包名。IOS平台上此参数为URL，例如urltype://abcdefg?para=123，协议名utrtype是在被打开应用的plist文件中URL Types中的其中某一项定义的。
        );

    });
    $page_sharechoice.find("#shareChoiceFooter").bind("click", function() {
        $(".sharechoice_screen").fadeOut(800, function() {
            $(".sharechoice_screen").remove();
        });
    });
}
/**
 * 省市级联
 */
function showProvCity() {
    var provcity_html = "<div class='max-dialog max-confirm2 provcityscreen'>";
    provcity_html += "     <div class='max-dialog-masker' id='provicitymasker'></div>";
    provcity_html += "     <div class='max-dialog-frame provcityscreendiv'  style='background: #ffffff;'>";
    provcity_html += "         <div class='max-dialog-content provcontent' style='background:#ffffff;margin:0em;'>";
    provcity_html += "          <div class='prov_imgdiv' style='width:100%;position: absolute;'> <img id='provcity_imgdel' style='position:relative;float:right;padding-right:1em;width:1.5em;height:1.5em;padding-top:0.4em;padding-left:0.4em;' src='/static/resources/images/del2.png'/></div>";
    provcity_html += "             <p id='screen_city_name' class='small' style='color:#cacaca;padding:0em;margin:0em;'>所属网格</p>";
    provcity_html += "             <div id='screen_city_val' class='small' style='padding:0em;line-height:1.5em;margin:0em;text-align: left;padding-left:1em;padding-bottom:0.6em;'></div>";
    provcity_html += "             <div id='provcity_disct_content' class='jszx-wrapper'>";
    provcity_html += "             <div id='provcity_disct_wrapper' class='jszx-wrapper'>";
    provcity_html += "                 <div class='jszx-scroller'>";
    provcity_html += "                     <div id='provcity_discthtml'></div>";
    provcity_html += "                  </div>";
    provcity_html += "             </div>";
    provcity_html += "             </div>";
    provcity_html += "         </div>";
    provcity_html += "     </div>";
    provcity_html += " </div>";
    var $page_provcity = $(provcity_html).appendTo(".ui-page-active").hide();
    //$(".provcontent").css("height", (window.localInnerHeight * 0.6 - $(".prov_imgdiv").height()) + "px");
    //$(".provcityscreendiv").css("height", (window.localInnerHeight * 0.6 - $(".prov_imgdiv").height()) + "px");
    $(".provcityscreen").fadeIn(800);
    $("#provcity_disct_content").css("height", window.localInnerHeight * 0.7 - $("#screen_city_name").height() - $(".prov_imgdiv").height() - $("#screen_city_val").height() + "px");
    $("#provcity_disct_wrapper")[0].style.height = window.localInnerHeight * 0.7 - $("#screen_city_name").height() - $(".prov_imgdiv").height() - $("#screen_city_val").height() + "px";
    initScroll({
        "wrapper": "provcity_disct_wrapper",
        "dir": "y",
        "bounce": false,
        "scrollBar": true
    });
    $page_provcity.find("#provcity_imgdel").bind("click", function() {
        $(".provcityscreen").fadeOut(800, function() {
            $(".provcityscreen").remove();
        });
    });
}
/**
 * 左右页面
 * @param title
 * @param nofun
 * @param btnanem
 * @param func
 */
//function showTwoPage(nofun, btnanem, func, functwo,functhree) {
//    window.searchPage = 2;
//    var twoPage_html = '<div class ="max-dialog max-alert twopage" style="top:initial;bottom:0;">';
//    twoPage_html += '   <div class="max-dialog-masker"></div>'
//    twoPage_html += '   <div class="max-dialog-frame all_dialog_frame">';
//    twoPage_html += '       <div class="allert">';
//    //twoPage_html += '           <div class="page_header allalertheader">';
//    //twoPage_html += '               <div class="page_header_title">' + title + '</div>';
//    //twoPage_html += '           </div>';
//    twoPage_html += '           <div class="page_content twopagecontent">';
//    twoPage_html += '               <table cellspacing="0" cellpadding="0">';
//    twoPage_html += '                   <tr>';
//    twoPage_html += '                       <td>';
//    twoPage_html += '                           <div id="industryClassification_One_wrapper" class="jszx-wrapper">';
//    twoPage_html += '                               <div class="jszx-scroller">';
//    twoPage_html += '                                   <div id="industryClassification_One_html"></div>';
//    twoPage_html += '                               </div>';
//    twoPage_html += '                           </div>';
//    twoPage_html += '                       </td>';
//    twoPage_html += '                       <td style="width:7em;">';
//    twoPage_html += '                           <div id="industryClassification_Two_wrapper" class="jszx-wrapper">';
//    twoPage_html += '                               <div class="jszx-scroller">';
//    twoPage_html += '                                   <div id="industryClassification_Two_html"></div>';
//    twoPage_html += '                               </div>';
//    twoPage_html += '                           </div>';
//    twoPage_html += '                       </td>';
//    twoPage_html += '                       <td>';
//    twoPage_html += '                           <div id="industryClassification_Three_wrapper" class="jszx-wrapper">';
//    twoPage_html += '                               <div class="jszx-scroller">';
//    twoPage_html += '                                   <div id="industryClassification_Three_html"></div>';
//    twoPage_html += '                               </div>';
//    twoPage_html += '                           </div>';
//    twoPage_html += '                       </td>';
//    twoPage_html += '                   </tr>';
//    twoPage_html += '               </table>';
//
//    twoPage_html += '           </div>';
//    twoPage_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
//    twoPage_html += '               <div class="footer_button_div" id="all_alert_noyes">';
//    twoPage_html += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
//    twoPage_html += '               </div>';
//    twoPage_html += '           </div>';
//    twoPage_html += '       </div>';
//    twoPage_html += '   </div>';
//    twoPage_html += '</div>';
//    var $twoPage_html = $(twoPage_html).appendTo(".ui-page-active").hide();
//    $(".twopage").fadeIn(800);
//    $(".twopage").css("height", window.localInnerHeight - $(".page_header").height() + "px");
//    $(".twopagecontent").css("height", window.localInnerHeight - $(".page_header").height() - $(".allalertfooter").height() + "px");
//    $("#industryClassification_One_wrapper")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".allalertfooter").height() + "px";
//    $("#industryClassification_Two_wrapper")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".allalertfooter").height() + "px";
//    $("#industryClassification_Three_wrapper")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".allalertfooter").height() + "px";
//
//    if (!isNull(func)) {
//        func.call();
//    }
//    if (!isNull(functwo)) {
//        functwo.call();
//    }
//    if (!isNull(functhree)) {
//        functhree.call();
//
//    }
//    $twoPage_html.find("#all_alert_noyes").bind("click", function () {
//        if (nofun)
//            nofun.call();
//        $(".twopage").fadeOut(800, function () {
//            $(".twopage").remove();
//        });
//
//    });
//}

/**
 * [showEditAddressAlert 只有一个按钮的全页弹出框]
 * @param  {[type]} title   [标题]
 * @param  {[type]} nofun   [按钮事件]
 * @param  {[type]} btnanem [按钮名称]
 * @return {[type]}         [description]
 */
function showEditAddressAlert(title, nofun, btnanem, scrollfun) {
    window.searchPage = 2;
    var choice_people_html = '<div class ="max-dialog max-alert allchoicepeople_page">';
    choice_people_html += '   <div class="max-dialog-masker"></div>';
    choice_people_html += '   <div class="max-dialog-frame all_dialog_frame">';
    choice_people_html += '       <div class="allert">';
    choice_people_html += '           <div class="page_header allalertheader"  style="min-height:3em;">';
    choice_people_html += '               <div class="page_header_title">' + title + '</div>';
    choice_people_html += '           </div>';
    choice_people_html += '           <div class="page_content allchoicepeople_content">';
    choice_people_html += '               <div id="allchoicepeople_wrapper" class="jszx-wrapper ">';
    choice_people_html += '                   <div class="jszx-scroller">';
    choice_people_html += '                       <div id="choice_people_html_div">';
    choice_people_html += '                       </div>';
    choice_people_html += '                   </div>';
    choice_people_html += '               </div>';
    choice_people_html += '           </div>';
    choice_people_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    choice_people_html += '                 <div  id="all_choice_people_noyes" class="alert_bottom_three orange_background">' + (btnanem || "添加") + '</div>';
    choice_people_html += '           </div>';
    choice_people_html += '       </div>';
    choice_people_html += '   </div>';
    choice_people_html += '</div>';
    var $choice_people_html = $(choice_people_html).appendTo(".ui-page-active").hide();
    $(".allchoicepeople_page").fadeIn(800);
    $(".allchoicepeople_content").css("height", window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px");
    $("#allchoicepeople_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px";
    if (!isNull(scrollfun)) {
        scrollfun.call();
    } else {
        initScroll({
            "wrapper": "allchoicepeople_wrapper",
            "dir": "y",
            "bounce": true
        });
    }
    $choice_people_html.find("#all_choice_people_noyes").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".max-dialog").fadeOut(800, function() {
            $(".max-dialog").remove();
        });
        $(".allchoicepeople_page").fadeOut(800, function() {
            $(".allchoicepeople_page").remove();
        });
    });
}
/**
 * [showAddressPhoneAlert 2个按钮的全页弹出框]
 * @param  {[type]} title   [description]
 * @param  {[type]} nofun   [description]
 * @param  {[type]} btnanem [description]
 * @return {[type]}         [description]
 */
function showAddressPhoneAlert(title, nofun, btnanem) {
    window.searchPage = 2;
    var edit_addressphone_html = '<div class ="max-dialog max-alert allchoicepeoplechoice_page">';
    edit_addressphone_html += '   <div class="max-dialog-masker"></div>';
    edit_addressphone_html += '   <div class="max-dialog-frame all_dialog_frame">';
    edit_addressphone_html += '       <div class="allert">';
    edit_addressphone_html += '           <div class="page_header allalertheader" style="min-height:3em;">';
    edit_addressphone_html += '               <div class="page_header_title">' + title + '</div>';
    edit_addressphone_html += '           </div>';
    edit_addressphone_html += '           <div class="page_content allchoicepeopleaddress_content">';
    edit_addressphone_html += '               <div id="allchoicepeople_wrapper" class="jszx-wrapper ">';
    edit_addressphone_html += '                   <div class="jszx-scroller">';
    edit_addressphone_html += '                       <div id="edit_addressphone_html">';
    edit_addressphone_html += '                       </div>';
    edit_addressphone_html += '                   </div>';
    edit_addressphone_html += '               </div>';
    edit_addressphone_html += '           </div>';
    edit_addressphone_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    edit_addressphone_html += '             <span id="no_addressphone_button" class="alert_edit_button_left1 small"> 取消 </span>';
    edit_addressphone_html += '             <span id="yes_addressphone_button" class="alert_edit_button_left1 alert_edit_button_right small" style="color:#ffffff;background:#0283de;">' + (btnanem || "添加") + ' </span> ';
    edit_addressphone_html += '           </div>';
    edit_addressphone_html += '       </div>';
    edit_addressphone_html += '   </div>';
    edit_addressphone_html += '</div>';
    var $edit_addressphone_html = $(edit_addressphone_html).appendTo(".ui-page-active").hide();
    $(".allchoicepeoplechoice_page").fadeIn(800);
    $(".allchoicepeopleaddress_content").css("height", window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px");
    $("#allchoicepeople_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $("#editaddress_alert").height() - $(".allalertfooter").height() + "px";
    $edit_addressphone_html.find("#no_addressphone_button").bind("click", function() {
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
    $edit_addressphone_html.find("#yes_addressphone_button").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".allchoicepeoplechoice_page").fadeOut(800, function() {
            $(".allchoicepeoplechoice_page").remove();
        });
    });
}
/**
 * [showEditReasonAlert 原因]
 * @param  {[type]} fun1 [description]
 * @return {[type]}      [description]
 */
function showEditReasonAlert(fun1) {
    var edit_reason_html = '<div class ="max-dialog max-alert">';
    edit_reason_html += '   <div class="max-dialog-masker"></div>';
    edit_reason_html += '  <div class="max-dialog-frame" style="width:90%;left:5%;">';
    edit_reason_html += '     <div class="alert_edit">';
    edit_reason_html += '         <p class="alert_edit_title" style="line-height:1em;">&nbsp;</p>';
    edit_reason_html += '         <table class="inp_table" cellpadding="0" cellspacing="0">';
    edit_reason_html += '              <tr>';
    edit_reason_html += '                    <td style="padding-top:0.5em;">退货发货说明：<span style="color:red;">*</span></td>';
    edit_reason_html += '              </tr>';
    edit_reason_html += '              <tr>';
    edit_reason_html += '                  <td style="padding-top:0.5em;"><textarea id="reason_info_alert" style="text-align:left;min-height: 5em;padding-left:1em;width:97%;" placeholder="请输入退货发货说明"></textarea></td>';
    edit_reason_html += '              </tr>';
    edit_reason_html += '        </table>';
    edit_reason_html += '        <div class="alert_edit_button_div" style="margin-top:1em;">';
    edit_reason_html += '             <span id="no_reason_button" class="alert_edit_button_left1 small"> 取消 </span>';
    edit_reason_html += '             <span id="yes_reasson_button" class="alert_edit_button_left1 alert_edit_button_right small" style="color:#ffffff;background:#0283de;"> 发货</span> ';
    edit_reason_html += '        </div>';
    edit_reason_html += '     </div>';
    edit_reason_html += ' </div>';
    edit_reason_html += '</div>';
    var $alert_edit_reason = $(edit_reason_html).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    $alert_edit_reason.find("#no_reason_button").bind("click", function() {
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
    $alert_edit_reason.find("#yes_reasson_button").bind("click", function() {
        if (fun1)
            fun1.call();
    });
}
/**
 * 修改数量
 * @param fun1
 * @param addfun
 * @param refun
 */
function showUpdatePrice(fun1, addfun, refun) {
    var updateprice = '<div class ="max-dialog max-alert">';
    updateprice += '   <div class="max-dialog-masker"></div>';
    updateprice += '  <div class="max-dialog-frame" style="width:80%;left:10%;background: #ffffff;border-radius: 0.5em;">';
    updateprice += '     <div class="alert_edit">';
    updateprice += '         <p class="alert_edit_title small" style="background: #ffffff;color:initial;border:none;">修改购买数量<span id="updateprice_stocknum" class="gray_font small"></span></p>';
    updateprice += '         <table class="inp_table" cellpadding="0" cellspacing="0">';
    updateprice += "            <tr>";
    updateprice += "               <td style='width: 20%;'></td>";
    updateprice += "               <td class='retd'style='height: 2em;' id='updateprice_reducenum'>-</td>";
    updateprice += "               <td class='inptd' style=''>";
    updateprice += "                 <input id='updatePrice_number' style='height: 2em;' class='input_goodNum' value='1' type='tel'/>";
    updateprice += "               </td>";
    updateprice += "               <td class='addtd'style='height: 2em;' id='updateprice_addnum'>+</td>";
    updateprice += "               <td style='width: 20%;'></td>";
    updateprice += "             </tr>";
    updateprice += '        </table>';
    updateprice += '        <div style="width:100%;margin:0em;padding:0em;margin-top:1em;" >';
    updateprice += '             <span id="no_update_button" style="border-top:1px solid #cccccc;border-radius: 0em 0em 0em 0.5em;" class="update_price_button small"> 取消 </span>';
    updateprice += '             <span id="yes_update_button" class="update_price_button alert_edit_button_right small" style="color:#ffffff;background:#f23030;border-radius: 0em 0em 0.5em 0em;border-top:1px solid #f23030;"> 确定</span> ';
    updateprice += '        </div>';
    updateprice += '     </div>';
    updateprice += ' </div>';
    updateprice += '</div>';
    var $updateprice = $(updateprice).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    $updateprice.find("#no_update_button").bind("click", function() {
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });
    });
    $updateprice.find("#yes_update_button").bind("click", function() {
        if (fun1)
            fun1.call();
    });
    $updateprice.find("#updateprice_addnum").bind("click", function() {
        if (addfun)
            addfun.call();
    });
    $updateprice.find("#updateprice_reducenum").bind("click", function() {
        if (refun)
            refun.call();
    });
}
/**
 * 全页面搜索
 * @param title
 * @param nofun
 * @param btnanem
 * @param func
 * @param functwo
 * @param searchfun
 */
function showGridPage(title, nofun, btnanem, func, functwo, searchfun) {
    window.searchPage = 2;
    var twoGrid_html = '<div class ="max-dialog max-alert gridpage">';
    twoGrid_html += '   <div class="max-dialog-masker"></div>';
    twoGrid_html += '   <div class="max-dialog-frame all_dialog_frame">';
    twoGrid_html += '       <div class="allert">';
    twoGrid_html += '           <div class="page_header allalertheader">';
    twoGrid_html += '               <div class="page_header_title">' + title + '</div>';
    twoGrid_html += '           </div>';
    twoGrid_html += '           <div class="page_content twopagecontent">';
    twoGrid_html += '           <div class="search_div search_add_three screen_search_div" style="padding-right:26%;">';
    twoGrid_html += '                   <input id="gridSearchName_val" class="alert_edit_div_input screen_input_search" type="text" placeholder="请输入搜索内容" />';
    twoGrid_html += '                   <div id="gridSearchName" class="orange_background smaller search_btn screen_search" style="margin-top:-2.5em;right:6%;">搜索</div>';
    twoGrid_html += '            </div>';
    twoGrid_html += '               <table cellspacing="0" cellpadding="0">';
    twoGrid_html += '                   <tr>';
    twoGrid_html += '                       <td style="padding:0em;">';
    twoGrid_html += '                           <div id="belongGrid_One_wrapper" class="jszx-wrapper">';
    twoGrid_html += '                               <div class="jszx-scroller">';
    twoGrid_html += '                                   <div id="belongGrid_One_html"></div>';
    twoGrid_html += '                               </div>';
    twoGrid_html += '                           </div>';
    twoGrid_html += '                       </td>';
    twoGrid_html += '                       <td>';
    twoGrid_html += '                           <div id="belongGrid_Two_wrapper" class="jszx-wrapper">';
    twoGrid_html += '                               <div class="jszx-scroller">';
    twoGrid_html += '                                   <div id="belongGrid_Two_html"></div>';
    twoGrid_html += '                               </div>';
    twoGrid_html += '                           </div>';
    twoGrid_html += '                       </td>';
    twoGrid_html += '                   </tr>';
    twoGrid_html += '               </table>';

    twoGrid_html += '           </div>';
    twoGrid_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    twoGrid_html += '               <div class="footer_button_div" id="all_belonggrid_noyes">';
    twoGrid_html += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
    twoGrid_html += '               </div>';
    twoGrid_html += '           </div>';
    twoGrid_html += '       </div>';
    twoGrid_html += '   </div>';
    twoGrid_html += '</div>';
    var $twoGrid_html = $(twoGrid_html).appendTo(".ui-page-active").hide();
    $(".gridpage").fadeIn(800);
    $(".twopagecontent").css("height", window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px");
    $("#belongGrid_One_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".screen_search_div").height() - $(".allalertfooter").height() + "px";
    $("#belongGrid_Two_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".screen_search_div").height() - $(".allalertfooter").height() + "px";

    if (!isNull(func)) {
        func.call();
    }
    if (!isNull(functwo)) {
        functwo.call();
    }
    $twoGrid_html.find("#gridSearchName").bind("click", function() {
        if (searchfun) {
            searchfun.call();
        }
    });
    $twoGrid_html.find("#all_belonggrid_noyes").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".gridpage").fadeOut(800, function() {
            $(".gridpage").remove();
        });

    });
}

function showGridPageNoSearch(title, nofun, btnanem, func, functwo, searchfun) {
    window.searchPage = 2;
    var twoGrid_html_nosearch = '<div class ="max-dialog max-alert gridpage_nosearch">';
    twoGrid_html_nosearch += '   <div class="max-dialog-masker"></div>';
    twoGrid_html_nosearch += '   <div class="max-dialog-frame all_dialog_frame">';
    twoGrid_html_nosearch += '       <div class="allert">';
    twoGrid_html_nosearch += '           <div class="page_header allalertheader">';
    twoGrid_html_nosearch += '               <div class="page_header_title">' + title + '</div>';
    twoGrid_html_nosearch += '           </div>';
    twoGrid_html_nosearch += '           <div class="page_content twopagecontent_nosearch">';
    twoGrid_html_nosearch += '               <table cellspacing="0" cellpadding="0">';
    twoGrid_html_nosearch += '                   <tr>';
    twoGrid_html_nosearch += '                       <td style="padding:0em;">';
    twoGrid_html_nosearch += '                           <div id="belongGrid_Onesearch_wrapper" class="jszx-wrapper">';
    twoGrid_html_nosearch += '                               <div class="jszx-scroller">';
    twoGrid_html_nosearch += '                                   <div id="belongGrid_One_html_nosearch"></div>';
    twoGrid_html_nosearch += '                               </div>';
    twoGrid_html_nosearch += '                           </div>';
    twoGrid_html_nosearch += '                       </td>';
    twoGrid_html_nosearch += '                       <td>';
    twoGrid_html_nosearch += '                           <div id="belongGrid_Twosearch_wrapper" class="jszx-wrapper">';
    twoGrid_html_nosearch += '                               <div class="jszx-scroller">';
    twoGrid_html_nosearch += '                                   <div id="belongGrid_Two_html_search"></div>';
    twoGrid_html_nosearch += '                               </div>';
    twoGrid_html_nosearch += '                           </div>';
    twoGrid_html_nosearch += '                       </td>';
    twoGrid_html_nosearch += '                   </tr>';
    twoGrid_html_nosearch += '               </table>';

    twoGrid_html_nosearch += '           </div>';
    twoGrid_html_nosearch += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    twoGrid_html_nosearch += '               <div class="footer_button_div" id="all_belonggrid_noyes">';
    twoGrid_html_nosearch += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
    twoGrid_html_nosearch += '               </div>';
    twoGrid_html_nosearch += '           </div>';
    twoGrid_html_nosearch += '       </div>';
    twoGrid_html_nosearch += '   </div>';
    twoGrid_html_nosearch += '</div>';
    var $twoGrid_html_nosearch = $(twoGrid_html_nosearch).appendTo(".ui-page-active").hide();
    $(".gridpage_nosearch").fadeIn(800);
    $(".twopagecontent_nosearch").css("height", window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px");
    $("#belongGrid_Onesearch_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px";
    $("#belongGrid_Twosearch_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px";

    if (!isNull(func)) {
        func.call();
    }
    if (!isNull(functwo)) {
        functwo.call();
    }
    $twoGrid_html_nosearch.find("#all_belonggrid_noyes").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".gridpage").fadeOut(800, function() {
            $(".gridpage").remove();
        });

    });
}
/**
 * 提示框
 * @param  {[type]} fun1 [description]
 * @param  {[type]} fun2 [description]
 * @return {[type]} content [description]
 */
function showContentAlert(content, nofun, yesfun, btnyesname) {
    var content_html = '<div class ="max-dialog max-alert">';
    content_html += '   <div class="max-dialog-masker"></div>';
    content_html += '  <div class="max-dialog-frame">';
    content_html += '     <div class="alert_edit">';
    content_html += '           <p style="background:#0283de;color:#ffffff;" class="alert_edit_title"> 提示 </p>';
    content_html += '         <p id="content_htmltext" class="alert_edit_prompt smaller" style="padding-right:0.5em;">' + content + '</p>';
    content_html += '            <div class="alert_edit_button_div">';
    content_html += '                <span id="con_noconfirm" class="alert_edit_button_left1 small" style="color:#ffffff;"> 取消 </span>';
    content_html += '              <span id="con_yesconfirm" class="alert_edit_button_left1 alert_edit_button_right small" style="background:#f5a035;color:#ffffff;">' + (btnyesname || "确定") + ' </span> ';
    content_html += '            </div>';
    content_html += '     </div>';
    content_html += ' </div>';
    content_html += '</div>';
    var $alert_content = $(content_html).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    /* $alert_content.find(".alert_edit_del_inp").bind("click", function() {
     $("#alert_inp_value").val("");
     });*/
    $alert_content.find("#con_noconfirm").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
    $alert_content.find("#con_yesconfirm").bind("click", function() {
        if (yesfun)
            yesfun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
}
/**
 * 无标题提示
 * @param content
 * @param nofun
 * @param yesfun
 * @param noname
 * @param yesname
 */
function showTiNoTitleAlert(content, nofun, yesfun, noname, yesname) {
    var notitle_html = '<div class ="max-dialog max-alert">';
    notitle_html += '   <div class="max-dialog-masker"></div>';
    notitle_html += '  <div class="max-dialog-frame" style="background:#ffffff;border-radius:0.3em;">';
    notitle_html += '     <div class="">';
    notitle_html += '         <p id="content_htmltext" class=" small" style="text-align: center;padding-top:2em;margin-bottom:2em;">' + content + '</p>';
    notitle_html += '            <div class="">';
    notitle_html += '                <div id="con_btnnoti" class="tinobtn small dark_gray_background" style="border-bottom-left-radius:0.3em;"> ' + (noname || "我再想想") + ' </div>';
    notitle_html += '              <div id="con_btnyes" class="tinobtn  small" style="background:#0283de;color:#ffffff;"> ' + (yesname || "去意已决") + ' </div> ';
    notitle_html += '            </div>';
    notitle_html += '     </div>';
    notitle_html += ' </div>';
    notitle_html += '</div>';
    var $notitle_html = $(notitle_html).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    /* $alert_content.find(".alert_edit_del_inp").bind("click", function() {
     $("#alert_inp_value").val("");
     });*/
    $notitle_html.find("#con_btnnoti").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
    $notitle_html.find("#con_btnyes").bind("click", function() {
        if (yesfun)
            yesfun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
}
/**
 * 支付提示框
 * @param  {[type]} fun1 [description]
 * @param  {[type]} fun2 [description]
 * @return {[type]} content [description]
 */
function showPayWapAlert(content, nofun, url) {
    var content_html = '<div class ="max-dialog max-alert">';
    content_html += '   <div class="max-dialog-masker"></div>';
    content_html += '  <div class="max-dialog-frame">';
    content_html += '     <div class="alert_edit">';
    content_html += '           <p class="alert_edit_title"> 提示 </p>';
    content_html += '         <p id="content_htmltext" class="alert_edit_prompt smaller" style="padding-right:0.5em;">' + content + '</p>';
    content_html += '            <div class="alert_edit_button_div">';
    content_html += '                <span id="con_noconfirm" class="alert_edit_button_left1 small"> 取消 </span>';
    content_html += '              <span id="con_yesconfirm" class="alert_edit_button_left1 alert_edit_button_right small" style="background:#0283de;color:#ffffff;"><a target="_blank" href="' + url + '" style="background:#0283de;color:#ffffff;">确定</a></span> ';
    content_html += '            </div>';
    content_html += '     </div>';
    content_html += ' </div>';
    content_html += '</div>';
    var $alert_content = $(content_html).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    /* $alert_content.find(".alert_edit_del_inp").bind("click", function() {
     $("#alert_inp_value").val("");
     });*/
    $alert_content.find("#con_noconfirm").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
    $alert_content.find("#con_yesconfirm").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
}
/**
 * 筛选条件弹出框
 * @param str1
 * @param str2
 * @param fun1
 * @param fun2
 */
function showSmallChoice(str1, str2, fun1, fun2) {
    var smallcontent_html = '<div class ="max-dialog max-alert more_choice_title">';
    smallcontent_html += ' <div class="titlealertup"><img class="more_choice_imgs" src="/static/resources/images/more_title_up.png"/></div>';
    if (isNull(str2)) {
        smallcontent_html += '  <div class="max-dialog-frame more_choice_title_frame" style="height:3em;top:-1.5em;">';
    } else {
        smallcontent_html += '  <div class="max-dialog-frame more_choice_title_frame">';
    }

    smallcontent_html += '     <div class="alert_edit morebackground" style="background:#000000;">';
    smallcontent_html += '           <p class="alert_choice_edit_title strfun1 more_gray_line_bottom">' + str1 + '</p>';
    if (!isNull(str2)) {
        smallcontent_html += '           <p class="alert_choice_edit_title strfun2 more_gray_line_bottom">' + str2 + ' </p>';
    }
    smallcontent_html += '     </div>';
    smallcontent_html += ' </div>';
    smallcontent_html += '</div>';
    var $smallcontent_content = $(smallcontent_html).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    $(".titlealertup").fadeIn(800);
    $smallcontent_content.find(".strfun1").bind("click", function() {
        if (!isNull(fun1)) {
            fun1.call();
            $(".max-dialog").remove();
        }
    });
    $smallcontent_content.find(".strfun2").bind("click", function() {
        if (!isNull(fun2)) {
            fun2.call();
            $(".max-dialog").remove();
        }
    });
}
/**
 * 查询条件
 * @param classid 改变图片的样式id
 * @param content1 第一个内容
 * @param content2 第二个内容
 */
function showSmallTitle(classid, type, fun, fun1) {
    console.log("需要换图片的id:" + classid);
    //if (!isNull(classid)) {
    //    $(classid + " p img").attr("src", "/static/resources/images/icon_gray_solid_top.png");
    //}
    var smallcontent_html = '<div class ="max-dialog max-alert moretitle" id="screen_search_content" style="-webkit-box-shadow:none;width:100%;">';
    smallcontent_html += '<div class="max-dialog-masker"></div>';
    smallcontent_html += '        <div class="max-dialog-frame moretitle_frame screen_search_content_div" style="position: absolute;background: #ffffff;">';
    smallcontent_html += '<div id="small_content_height">    ';
    if ("2" == type || "3" == type) {
        smallcontent_html += '        <div id="screen_content1_wrapper" style="-webkit-box-shadow:none;width:' + (window.innerWidth * 0.33) + 'px;float: left" class="jszx-wrapper ">';
    } else {
        smallcontent_html += '        <div id="screen_content1_wrapper" style="width:100%;" class="jszx-wrapper ">';
    }
    smallcontent_html += '                  <div class="jszx-scroller">';
    smallcontent_html += '                      <div class="alert_edit" id="screen_content1" style="">';
    smallcontent_html += '                       </div>';
    smallcontent_html += '                  </div>';
    smallcontent_html += '            </div>';
    if ("2" == type) {
        smallcontent_html += '    <div id="screen_content2_wrapper" class="jszx-wrapper" style="width:' + (window.innerWidth * 0.66) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:8em;">';
        smallcontent_html += '          <div class="jszx-scroller">';
        smallcontent_html += '                  <div class=""  id="screen_content2" style="">';
        smallcontent_html += '                  </div>';
        smallcontent_html += '          </div>';
        smallcontent_html += '      </div>';
    } else if ("3" == type) {
        smallcontent_html += '    <div id="screen_content2_wrapper" class="jszx-wrapper" style="width:' + (window.innerWidth * 0.33) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + (window.innerWidth * 0.33) + 'px;">';
        smallcontent_html += '          <div class="jszx-scroller">';
        smallcontent_html += '                  <div class=""  id="screen_content2" style="">';
        smallcontent_html += '                  </div>';
        smallcontent_html += '          </div>';
        smallcontent_html += '      </div>';
        smallcontent_html += '    <div id="screen_content3_wrapper" class="jszx-wrapper"  style="width:' + (window.innerWidth * 0.34) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + (window.innerWidth * 0.66) + 'px;">';
        smallcontent_html += '          <div class="jszx-scroller">';
        smallcontent_html += '                  <div class=""  id="screen_content3" style="">';
        smallcontent_html += '                 </div>';
        smallcontent_html += '          </div>';
        smallcontent_html += '      </div>';
    } else if ("4" == type) {
        smallcontent_html += '    <div id="screen_content4_wrapper" class="jszx-wrapper" style="width:100%;-webkit-box-shadow:none;float: left;position: absolute;">';
        smallcontent_html += '          <div class="jszx-scroller">';
        smallcontent_html += '                  <div class=""  id="screen_content4" style="">';
        smallcontent_html += '                  </div>';
        smallcontent_html += '      </div>';
    }
    smallcontent_html += '</div>';
    smallcontent_html += '<div class="page_footer screeb_footer" style="position:absolute;bottom:0em;border-top:1px solid #f3f3f3;height:4em;background: #FFFFFF;">';
    smallcontent_html += '<div class="footer_button_div">';
    smallcontent_html += '     <div id="strfun1" style="width:35%;float:left;" class="alert_bottom_three gray_background">重置</div>';
    smallcontent_html += '     <div id="strfun2"  style="width:35%;float:left;" class="alert_bottom_three orange_background">确定</div>';
    smallcontent_html += '</div>';
    smallcontent_html += '</div>';
    smallcontent_html += '</div>';
    smallcontent_html += '</div>';
    var $smallcontent_content = $(smallcontent_html).appendTo(".ui-page-active").hide();
    $(".max-alert").fadeIn(800);
    $(".titlealertup").fadeIn(800);
    //$("#screen_search_content").css("height", window.localInnerHeight - $(".page_header").height() - +"px");
    $("#screen_search_content")[0].style.height = window.localInnerHeight - $(".page_header").height() + "px";
    $(".screen_search_content_div")[0].style.height = window.localInnerHeight * 0.6 - $(".page_footer").height() + "px";
    $("#small_content_height")[0].style.height = window.localInnerHeight * 0.6 - $(".page_footer").height() - $(".page_header").height() + "px";
    $("#screen_content1_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $(".screeb_footer").height() - $(".page_header").height() + "px";
    initScroll({
        "wrapper": "screen_content1_wrapper",
        "dir": "y",
        "bounce": false,
        "scrollBar": true
    });
    if ("2" == type) {
        $("#screen_content2_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $(".screeb_footer").height() - $(".page_header").height() + "px";
        initScroll({
            "wrapper": "screen_content2_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }
    if ("3" == type) {
        $("#screen_content2_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $(".screeb_footer").height() - $(".page_header").height() + "px";
        initScroll({
            "wrapper": "screen_content2_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
        $("#screen_content3_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $(".screeb_footer").height() - $(".page_header").height() + "px";
        initScroll({
            "wrapper": "screen_content3_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }
    if ("4" == type) {
        $("#screen_content4_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $(".screeb_footer").height() - $(".page_header").height() + "px";
        initScroll({
            "wrapper": "screen_content4_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }
    $smallcontent_content.find("#strfun1").bind("click", function() {
        if (!isNull(fun)) {
            fun.call();
        }
        //$(".max-dialog").remove();
    });
    $smallcontent_content.find("#strfun2").bind("click", function() {
        if (!isNull(fun1)) {
            fun1.call();
        }
        hideUpSearchDiv();
    });
    //$smallcontent_content.find(".strfun3").bind("click", function () {
    //    window.orderJumpPage = "7";
    //    if (!isNull(fun3)) {
    //        app.$router.push(fun3);
    //        $(".max-dialog").remove();
    //    }
    //});
    //$smallcontent_content.find(".strfun4").bind("click", function () {
    //    window.orderJumpPage = "8";
    //    if (!isNull(fun4)) {
    //        app.$router.push(fun4);
    //        $(".max-dialog").remove();
    //    }
    //});
}
/**
 * 筛选
 * @param title
 * @param type
 */
function getMultilevelValue(title, type) {
    var more_html = '<div class ="max-dialog max-alert morepage">';
    more_html += '   <div class="max-dialog-masker"></div>';
    more_html += '   <div class="max-dialog-frame all_dialog_frame">';
    more_html += '       <div class="allert">';
    more_html += '           <div class="page_header more_alertheader">';
    more_html += '              <img class="more_leftbtn left_img back-button" src="/static/resources/images/icon_white_back.png"/>';
    more_html += '               <div class="page_header_title">' + title + '</div>';
    more_html += '           </div>';
    more_html += '           <div class="page_content more_alertcontent" style="background: #ffffff;">';
    if ("2" == type || "3" == type) {
        more_html += '        <div id="screen_more_content1_wrapper" style="-webkit-box-shadow:none;width:' + (window.innerWidth * 0.33) + 'px;float: left" class="jszx-wrapper ">';
    } else {
        more_html += '        <div id="screen_more_content1_wrapper" style="width:100%;" class="jszx-wrapper ">';
    }
    more_html += '                  <div class="jszx-scroller">';
    more_html += '                      <div class="alert_edit" id="screen_more_content1" style="">';
    more_html += '                       </div>';
    more_html += '                  </div>';
    more_html += '            </div>';
    if ("2" == type) {
        more_html += '    <div id="screen_more_content2_wrapper" class="jszx-wrapper" width="' + (window.innerWidth - $("#screen_content1_wrapper").width()) + '" style="-webkit-box-shadow:none;float: left;position: absolute;margin-left:7.5em;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content2" style="">';
        more_html += '                  </div>';
        more_html += '          </div>';
        more_html += '      </div>';
    } else if ("3" == type) {
        more_html += '    <div id="screen_more_content2_wrapper" class="jszx-wrapper" style="width:' + (window.innerWidth * 0.33) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + (window.innerWidth * 0.33) + 'px;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content2" style="">';
        more_html += '                  </div>';
        more_html += '          </div>';
        more_html += '      </div>';
        more_html += '    <div id="screen_more_content3_wrapper" class="jszx-wrapper"  style="width:' + (window.innerWidth * 0.34) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + (window.innerWidth * 0.66) + 'px;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content3" style="">';
        more_html += '                 </div>';
        more_html += '          </div>';
        more_html += '      </div>';
    } else if ("4" == type) {
        more_html += '    <div id="screen_more_content4_wrapper" class="jszx-wrapper"  style="width：100%;-webkit-box-shadow:none;float: left;position: absolute;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content4" style="">';
        more_html += '                  </div>';
        more_html += '          </div>';
        more_html += '      </div>';
    }
    more_html += '           </div>';
    //more_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    //more_html += ' <div class="footer_button_div">';
    //more_html += '     <div id="more_alert_yes" style="width:35%;float:left;" class="alert_bottom_three gray_background">' + (yesname || "取消") + '</div>';
    //more_html += '     <div id="more_alert_noyes"  style="width:35%;float:left;" class="alert_bottom_three orange_background">' + (noname || "取消") + '</div>';
    //more_html += ' </div>';
    //more_html += '           </div>';
    more_html += '       </div>';
    more_html += '   </div>';
    more_html += '</div>';
    var morepage = $(more_html).appendTo(".ui-page-active").hide();
    $(".morepage").fadeIn(800);
    $(".more_alertcontent").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
    $("#screen_more_content1_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
    initScroll({
        "wrapper": "screen_more_content1_wrapper",
        "dir": "y",
        "bounce": false,
        "scrollBar": true
    });
    if ("2" == type) {
        $("#screen_more_content2_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
        initScroll({
            "wrapper": "screen_more_content2_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }
    if ("3" == type) {
        $("#screen_more_content2_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
        initScroll({
            "wrapper": "screen_more_content2_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
        $("#screen_more_content3_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
        initScroll({
            "wrapper": "screen_more_content3_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }
    morepage.find("#more_alert_noyes").bind("click", function() {
        if (nofun)
            nofun.call();
        $(".morepage").fadeOut(800, function() {
            $(".morepage").remove();
        });

    });
    morepage.find(".more_leftbtn").bind("click", function() {
        $(".morepage").fadeOut(800, function() {
            $(".morepage").remove();
        });
    });
    morepage.find("#more_alert_yes").bind("click", function() {
        if (yesfun)
            yesfun.call();
        $(".morepage").fadeOut(800, function() {
            $(".morepage").remove();
        });

    });
}
/**
 * 发送短信弹出框
 * @param  {[type]} iphone [手机号码]
 * @return {[type]} content [description]
 */
function showSendMessage(iphone) {
    var message_html = '<div class ="max-dialog max-alert">';
    message_html += '   <div class="max-dialog-masker"></div>';
    message_html += '  <div class="max-dialog-frame">';
    message_html += '     <div class="alert_edit">';
    message_html += '           <p class="alert_edit_title"> 提示 </p>';
    message_html += '<textarea id="message_text_content" class="sendmsg_textarea" placeholder="请输入短信内容"   name="content" style="box-shadow: none;"></textarea>';
    message_html += '            <div class="alert_edit_button_div">';
    message_html += '                <span id="msg_noconfirm" class="alert_edit_button_left small"> 取消 </span>';
    message_html += '              <span id="msg_yesconfirm" class="alert_edit_button_left alert_edit_button_right small"> 发送 </span> ';
    message_html += '            </div>';
    message_html += '     </div>';
    message_html += ' </div>';
    message_html += '</div>';
    var $alert_message = $(message_html).appendTo(".ui-page-active").hide();

    $(".max-alert").fadeIn(800);
    /* $alert_content.find(".alert_edit_del_inp").bind("click", function() {
     $("#alert_inp_value").val("");
     });*/
    $alert_message.find("#msg_noconfirm").bind("click", function() {

        $(".max-alert").fadeOut(800, function() {
            $(".max-alert").remove();
        });

    });
    $alert_message.find("#msg_yesconfirm").bind("click", function() {
        var option = {
            "phone": iphone,
            "message": $("#message_text_content").val(),
            "flag": "false"
        };
        jsict.util.sendSMS(function() {
            $(".max-alert").fadeOut(800, function() {
                $(".max-alert").remove();
            });
        }, function(err) {
            // alert("发送失败");
        }, option);
    });
}

function showNoTitleAlert(searchfun, backfun) {
    var notitle_alert_html = '<div class ="max-dialog max-alert all_screenpage">';
    notitle_alert_html += '   <div class="max-dialog-masker"></div>';
    notitle_alert_html += '   <div class="max-dialog-frame all_dialog_frame">';
    notitle_alert_html += '       <div class="allert">';
    notitle_alert_html += '           <div class="page_header notitleheader">';
    notitle_alert_html += '             <img class="left_img back-button" src="/static/resources/images/icon_white_back.png">';
    notitle_alert_html += '             <div class="page_header_title">';
    notitle_alert_html += '                 <div class="search_div search_add_three">';
    notitle_alert_html += '                     <input id="map_search_input" class="alert_edit_div_input" type="text" placeholder="请输入商户名,商品名"/>';
    notitle_alert_html += '                     <div id="findSearchInfo_search" style="right: 4%;padding-top:1em;" class="orange_background smaller search_btn">搜索</div>';
    notitle_alert_html += '                 </div>';
    notitle_alert_html += '             </div>';
    notitle_alert_html += '           </div>';
    notitle_alert_html += '           <div class="page_content notitle_screencontent">';
    notitle_alert_html += '               <div id="notitlescreen_wrapper" class="jszx-wrapper ">';
    notitle_alert_html += '                   <div class="jszx-scroller">';
    notitle_alert_html += '                       <div id="allnotitle_alert_html_div">';
    notitle_alert_html += '                       </div>';
    notitle_alert_html += '                   </div>';
    notitle_alert_html += '               </div>';
    notitle_alert_html += '           </div>';
    //notitle_alert_html += '           <div class="page_footer allscreenfooter" style="position:absolute;bottom:0em;">';
    //notitle_alert_html += '               <div class="footer_button_div" id="all_screen_noyes">';
    //notitle_alert_html += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
    //notitle_alert_html += '               </div>';
    //notitle_alert_html += '           </div>';
    notitle_alert_html += '       </div>';
    notitle_alert_html += '   </div>';
    notitle_alert_html += '</div>';
    var $notitle_alert_html = $(notitle_alert_html).appendTo(".ui-page-active").hide();
    $(".all_screenpage").fadeIn(800);
    $(".notitle_screencontent").css("height", window.localInnerHeight - $(".notitleheader").height() + "px");
    $("#notitlescreen_wrapper")[0].style.height = window.localInnerHeight - $(".notitleheader").height() + "px";
    //if (!isNull(scrollfun)) {
    //    scrollfun.call();
    //}

    ////取消
    //$notitle_alert_html.find("#all_screen_noyes").bind("click", function () {
    //    if (noyesfunc)
    //        noyesfunc.call();
    //    if ("yes" != type) {
    //        $(".all_screenpage").fadeOut(800, function () {
    //            $("#allnotitle_alert_html_div").empty();
    //            $(".screen_input_search").val("");
    //            $(".all_screenpage").remove();
    //        });
    //    }
    //
    //});
    ////搜索
    //$notitle_alert_html.find(".screen_search").bind("click", function () {
    //    if (searchfun)
    //        searchfun.call();
    //});
    ////筛选
    //setTimeout(function () {
    //    $notitle_alert_html.find(".screen_two").bind("click", function () {
    //        if (screenfun)
    //            screenfun.call();
    //        /*$(".all_screenpage").fadeOut(800, function() {
    //         $("#allscreen_html_div").empty();
    //         $(".screen_input_search").val("");
    //         $(".all_screenpage").remove();
    //         });*/
    //
    //    });
    //}, 500);
}

/**
 * 自动更新
 * @param  {[type]} isshow [是否显示关闭]
 * @return {[type]} content [description]
 */
function showUpdate(isshow) {
    var update_html = '<div class ="max-dialog max-alert">';
    update_html += '   <div class="max-dialog-masker"></div>';
    update_html += '  <div style="-webkit-box-shadow:none;" class="max-dialog-frame">';
    update_html += '         <div class="alert_update_border">';
    update_html += '                <img class="alert_ipdate_logo" src="/static/resources/images/bbgx_bg.png"/>';
    update_html += '                <img id="cannel_update_btn" class="alert_ipdate_cannellogo" src="/static/resources/images/bbgx_close.png"/>';
    update_html += '                <div id="updatefirm" class="jszx-wrapper alert_maxandminheight">';
    update_html += '                    <div class="jszx-scroller">';
    update_html += '                       <div class="max-dialog-text alert_ipdate_textshow" id="alert_update_version" >';
    update_html += '                       </div>';
    update_html += '                    </div>';
    update_html += '               </div>';
    update_html += '               <div id="yes_update_btn" class="alert_ipdate_btn">立即更新</div>';
    update_html += '               <div class="alert_ipdate_text">建议您在wifi情况下更新哦</div>';
    update_html += '          </div>';
    update_html += ' </div>';
    update_html += '</div>';
    var $alert_update = $(update_html).appendTo(".ui-page-active").hide();
    initScroll({
        "wrapper": "updatefirm",
        "dir": "y",
        "scrollBar": true
    });
    $(".max-alert").fadeIn(800);
    if (!isNull(isshow)) {
        $("#cannel_update_btn").hide();
    } else {
        $alert_update.find("#cannel_update_btn").bind("click", function() {
            $(".max-alert").fadeOut(800, function() {
                $(".max-alert").remove();
            });

        });
    }
    $alert_update.find("#yes_update_btn").bind("click", function() {
        getSDCard(window.appurl);

    });
}

/**
 * 全页面弹出框
 * @param  {[type]} title   [标题]
 * @param  {[type]} nofun   [下方点击事件方法]
 * @param  {[type]} btnanem [下方按钮名称]
 * @return {[type]}         [description]
 */
function showAllAlert(title, nofun, btnanem, func, btnnum, btnanem2, yesfun) {
    window.searchPage = 2;
    var all_html = '<div class ="max-dialog max-alert allpage">';
    all_html += '   <div class="max-dialog-masker"></div>';
    all_html += '   <div class="max-dialog-frame all_dialog_frame">';
    all_html += '       <div class="allert">';
    all_html += '           <div class="page_header allalertheader">';
    all_html += '               <div class="page_header_title">' + title + '</div>';
    all_html += '           </div>';
    all_html += '           <div class="page_content allalertcontent">';
    all_html += '               <div id="all_wrapper" class="jszx-wrapper ">';
    all_html += '                   <div class="jszx-scroller">';
    all_html += '                       <div id="all_html_div">';
    all_html += '                       </div>';
    all_html += '                   </div>';
    all_html += '               </div>';
    all_html += '           </div>';
    all_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    if (isNull(btnnum)) {
        all_html += '               <div class="footer_button_div" id="all_alert_noyes">';
        all_html += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
        all_html += '               </div>';
    } else {
        all_html += ' <div class="footer_button_div">';
        all_html += '     <div id="all_alert_yes" style="width:35%;float:left;" class="alert_bottom_three gray_background">' + (btnanem || "取消") + '</div>';
        all_html += '     <div id="all_alert_noyes"  style="width:35%;float:left;" class="alert_bottom_three orange_background">' + (btnanem2 || "取消") + '</div>';
        all_html += ' </div>';
    }
    all_html += '           </div>';
    all_html += '       </div>';
    all_html += '   </div>';
    all_html += '</div>';
    var $all_html = $(all_html).appendTo(".ui-page-active").hide();
    $(".allpage").fadeIn(800);
    $(".allalertcontent").css("height", window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px");
    $("#all_wrapper")[0].style.height = window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() + "px";
    if (!isNull(func)) {
        func.call();
    }
    setTimeout(function() {
        $all_html.find("#all_alert_yes").bind("click", function() {
            if (nofun)
                nofun.call();
            $(".allpage").fadeOut(800, function() {
                $(".allpage").remove();
            });

        });
    }, 500);
    setTimeout(function() {
        $all_html.find("#all_alert_noyes").bind("click", function() {
            if (yesfun)
                yesfun.call();
            $(".allpage").fadeOut(800, function() {
                $(".allpage").remove();
            });

        });
    }, 500);
}

/**
 * 全页面弹出框可筛选取消
 * @param  {[type]} title   [标题]
 * @param  {[type]} nofun   [下方点击事件方法]
 * @param  {[type]} btnanem [下方按钮名称]
 * @return {[type]}         [description]
 */
function showAllAndScreenAlert(searchfun, map, zoom) {
    window.searchPage = 2;
    var screen_html = '<div class ="max-dialog max-alert all_screenpage">';
    screen_html += '        <div class="max-dialog-masker"></div>';
    screen_html += '            <div class="max-dialog-frame all_dialog_frame">';
    screen_html += '                <div class="allert">';
    screen_html += '                    <div class="page_header allscreenheader">';
    screen_html += '                        <img class="left_img back-button " src="/static/resources/images/icon_white_back.png">';
    screen_html += '                        <div class="search_div" style="width:79%;position:absolute;margin-right:9%;margin-left:19%;padding-left:0em;left:0;z-index: 1000;">';
    screen_html += '                            <input style="width:76%;float:left;height:2.5em;line-height:2.5em;" id="screen_html_inp" class="alert_edit_div_input" type="text" placeholder="请输入搜索内容"/>';
    screen_html += '                            <div  id="service_search" class="orange_background smaller">搜索</div>';
    screen_html += '                        </div>';
    screen_html += '                    </div>';
    screen_html += '                    <div class="page_content allscreencontent">';
    screen_html += '                        <div id="allscreen_wrapper" class="jszx-wrapper ">';
    screen_html += '                            <div class="jszx-scroller">';
    screen_html += '                                <div id="allscreen_html_div"></div>';
    screen_html += '                            </div>';
    screen_html += '                        </div>';
    screen_html += '                    </div>';
    screen_html += '                </div>';
    screen_html += '            </div>';
    screen_html += '        </div>';
    var $screen_html = $(screen_html).appendTo(".ui-page-active").hide();
    $(".all_screenpage").fadeIn(800);
    $(".allscreencontent").css("height", window.localInnerHeight - $(".allscreenheader").height() + "px");
    $("#allscreen_wrapper")[0].style.height = window.localInnerHeight - $(".allscreenheader").height() + "px";
    initScroll({
        "wrapper": "allscreen_wrapper",
        "dir": "y",
        "bounce": false,
        "scrollBar": true
    });
    //搜索
    $screen_html.find("#service_search").bind("click", function() {
        //if (searchfun)
        searchfun.call();
    });
    //搜索
    $screen_html.find(".left_img").bind("click", function() {
        $(".all_screenpage").remove();
    });
}

/**
 * 地图弹出框
 * @param  {[type]} title   [标题]
 * @param  {[type]} nofun   [下方点击事件方法]
 * @param  {[type]} btnanem [下方按钮名称]
 * @return {[type]}         [description]
 */
function showMapAlert(title, btnanem, id, fun) {
    var map_html = '<div class ="max-dialog max-alert mapshowalert">';
    map_html += '       <div class="max-dialog-masker"></div>';
    map_html += '       <div class="max-dialog-frame all_dialog_frame">';
    map_html += '           <div class="allert">';
    map_html += '               <div class="page_header allalertheader">';
    map_html += '                   <img class="left_img back-button " src="/static/resources/images/icon_white_back.png">';
    map_html += '                   <div class="page_header_title">' + title + '</div>';
    //map_html += '                   <img id="map_html_search" class="right_img" style="width:1.5em;height:1.5em;" src="/static/resources/images/icon_search.png"/>';
    map_html += '               </div>';
    map_html += '           <div class="page_content allalertcontent">';
    map_html += '               <div id="mapalerttwo" style="width: 100%;height:100%;overflow: hidden;margin:0;"></div>';
    map_html += '           </div>';
    map_html += '           <div class="page_footer allalertfooter" style="height:7em;position:absolute;bottom:0em;">';
    map_html += '               <table class="inp_table" style="height:2.15em;" cellpadding="0" cellspacing="0">';
    map_html += '                   <tr>';
    map_html += '                       <td id="map_html_address" style="text-align: center;"></td>';
    map_html += '                       <td id="re_address_img" style="width: 1%;"> <img class="div_input_value_img" src="/static/resources/images/icon_blue_refresh.png"/></td>';
    map_html += '                   </tr>';
    //map_html += '                   <tr>';
    //map_html += '                       <td  id="map_html_longitudeLatitude"></td>';
    //map_html += '                   </tr>';
    map_html += '               </table>';
    map_html += '               <div style="margin-top:0.5em" class="footer_button_div" id="all_alert_mapnoyes">';
    map_html += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
    map_html += '               </div>';
    map_html += '           </div>';
    map_html += '       </div>';
    map_html += '   </div>';
    map_html += '</div>';
    var $map_html = $(map_html).appendTo(".ui-page-active").hide();
    $(".mapshowalert").fadeIn(800);
    //$("#provcity_disct_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $("#screen_city_name").height() - $("#screen_city_val").height() + "px";
    $(".allalertcontent").css("height", window.localInnerHeight - $(".allalertheader").height() - $(".allalertfooter").height() - $(".search_div").height() + "px");
    /*展示当前位置 start*/
    setTimeout(function() {
        var map;
        var zoom = 13;
        var geocode = "";
        map = new T.Map('mapalerttwo');
        map.centerAndZoom(new T.LngLat(window.longitude, window.latitude), zoom);
        var icon = new T.Icon({
            iconUrl: "/static/resources/images/icon_point.png",
            iconSize: new T.Point(19, 27),
            iconAnchor: new T.Point(10, 25)
        });
        var marker = new T.Marker(new T.LngLat(window.longitude, window.latitude), { icon: icon });
        //向地图上添加标注
        map.addOverLay(marker);
        //alert("定位获取的地址：" + window.localStorage.mapAddress + "，\t经纬度：" + window.longitude + "\t," + window.latitude);
        $("#map_html_address").html(window.localStorage.mapAddress);
        //$("#map_html_longitudeLatitude").html("经纬度：" + window.choiceLongitude + "\t" + window.choiceLatitude);
        /*展示当前位置 end*/
        var cp = new T.CoordinatePickup(map, {
            callback: function(lnglat) {
                var icon = new T.Icon({
                    iconUrl: "/static/resources/images/icon_point.png",
                    iconSize: new T.Point(19, 27),
                    iconAnchor: new T.Point(10, 25)
                });
                window.shortLongitude = lnglat.lng.toFixed(4);
                window.shortLatitude = lnglat.lat.toFixed(4);
                //$("#map_html_longitudeLatitude").html("经纬度：" + window.shortLongitude + "\t" + window.shortLatitude);
                // alert("经纬度：" + lnglat.lng.toFixed(4) + ",\t" + lnglat.lat.toFixed(4));
                map.clearOverLays();
                marker = new T.Marker(new T.LngLat(lnglat.lng.toFixed(4), lnglat.lat.toFixed(4)), { icon: icon });
                //向地图上添加标注
                map.addOverLay(marker);

                var geocode = new T.Geocoder();
                geocode.getLocation(new T.LngLat(lnglat.lng.toFixed(4), lnglat.lat.toFixed(4)), function(result) {
                    console.log("定位的信息：" + JSON.stringify(result.result.result.formatted_address));
                    $("#case_edit_address").html(result.result.result.formatted_address);
                    $("#map_html_address").html(result.result.result.formatted_address);
                    $("#ssp_edit_address").html(result.result.result.formatted_address);
                });
                //                var ggPoint = new BMap.Point(lnglat.lng,lnglat.lat);
                //                var pointArr = [];
                //                pointArr.push(ggPoint);
                //                var convertor = new BMap.Convertor();
                //                convertor.translate(pointArr, 1, 5, function(data){
                //                    if(data.status === 0){
                //                        var geocode = new BMap.Geocoder();
                //                        geocode.getLocation(data.points[0], function(result){
                //                        	//alert("定位的信息：" + JSON.stringify(result));
                //                        	$("#case_edit_address").html(result.address);
                //                            $("#map_html_address").html(result.address);
                //                        });
                //                    }
                //                })
                /*var lo = new T.Geolocation();
                geocode = new T.Geocoder();
                geocode.getLocation(lnglat, function (result) {
                    $("#map_html_address").html(result.formatted_address);
                });*/
            }
        });
        cp.addEvent();
    }, 500);
    /*取消*/
    $map_html.find(".left_img").bind("click", function() {
        $(".mapshowalert").remove();
    });
    /*搜索*/
    $map_html.find("#map_html_search").bind("click", function() {
        showAllAndScreenAlert(function() {
            var zoom = 13;
            var localsearch;
            var infoWin;
            var config = {
                pageCapacity: 100000, //每页显示的数量
                onSearchComplete: function(result) {
                    //根据返回类型解析搜索结果
                    switch (parseInt(result.getResultType(result))) {
                        case 1:
                            //解析点数据结果
                            setSearchByMap(result.getPois(), map, zoom);
                            break;
                    }
                }
            };
            //创建搜索对象
            localsearch = new T.LocalSearch(map, config);
            localsearch.search($("#screen_html_inp").val(), 7)
        }, map.getZoom());
    });
    /*确定*/
    $map_html.find("#all_alert_mapnoyes").bind("click", function() {
        console.log("选定的经纬度：" + window.choiceLongitude + "\t" + window.choiceLatitude);
        console.log("选定的地址：" + $("#map_html_address").html());
        if (fun) {
            fun.call();
            $(".mapshowalert").remove();
        }

    });
    //刷新
    $map_html.find("#re_address_img").bind("click", function() {
        getLocation();
        var map;
        var zoom = 13;
        var geocode = "";
        map = new T.Map('mapalerttwo');
        map.centerAndZoom(new T.LngLat(window.longitude, window.latitude), zoom);
        var icon = new T.Icon({
            iconUrl: "/static/resources/images/icon_point.png",
            iconSize: new T.Point(19, 27),
            iconAnchor: new T.Point(10, 25)
        });
        var marker = new T.Marker(new T.LngLat(window.longitude, window.latitude), { icon: icon });
        //向地图上添加标注
        map.clearOverLays();
        map.addOverLay(marker);
        $("#map_html_address").html(window.localStorage.mapAddress);
    });
}
/**
 * 轨迹查询
 * @param title
 * @param fun
 */
function showLineMapAlert(title, fun) {
    var linmap_html = '<div class ="max-dialog max-alert mapshowalert">';
    linmap_html += '       <div class="max-dialog-masker"></div>';
    linmap_html += '       <div class="max-dialog-frame all_dialog_frame">';
    linmap_html += '           <div class="allert">';
    linmap_html += '               <div class="page_header allalertheader">';
    linmap_html += '                   <img class="left_img back-button " src="/static/resources/images/icon_white_back.png">';
    linmap_html += '                   <div class="page_header_title">' + title + '</div>';
    //linmap_html += '                   <img id="linmap_html_search" class="right_img" style="width:1.5em;height:1.5em;" src="/static/resources/images/icon_search.png"/>';
    linmap_html += '               </div>';
    linmap_html += '           <div class="page_content allalertcontent">';
    linmap_html += '               <div id="linemap" style="width: 100%;height:100%;overflow: hidden;margin:0;"></div>';
    linmap_html += '           </div>';
    //linmap_html += '           <div class="page_footer allalertfooter" style="height:7em;position:absolute;bottom:0em;">';
    //linmap_html += '               <table class="inp_table" style="height:2.15em;" cellpadding="0" cellspacing="0">';
    //linmap_html += '                   <tr>';
    //linmap_html += '                       <td id="linmap_html_address"></td>';
    //linmap_html += '                   </tr>';
    ////linmap_html += '                   <tr>';
    ////linmap_html += '                       <td  id="linmap_html_longitudeLatitude"></td>';
    ////linmap_html += '                   </tr>';
    //linmap_html += '               </table>';
    ////linmap_html += '               <div style="margin-top:0.5em" class="footer_button_div" id="all_alert_mapnoyes">';
    ////linmap_html += '                   <div class="alert_bottom_three orange_background">' + (btnanem || "取消") + '</div>';
    ////linmap_html += '               </div>';
    //linmap_html += '           </div>';
    linmap_html += '       </div>';
    linmap_html += '   </div>';
    linmap_html += '</div>';
    var $linmap_html = $(linmap_html).appendTo(".ui-page-active").hide();
    $(".mapshowalert").fadeIn(800);
    //$("#provcity_disct_wrapper")[0].style.height = window.localInnerHeight * 0.6 - $("#screen_city_name").height() - $("#screen_city_val").height() + "px";
    $(".allalertcontent").css("height", window.localInnerHeight - $(".allalertheader").height() + "px");
    /*展示当前位置 start*/
    setTimeout(function() {
        var map, zoom = 12,
            points;
        //初始化地图对象
        map = new T.Map("linemap");
        //设置显示地图的中心点和级别
        map.centerAndZoom(new T.LngLat(window.longitude, window.latitude), zoom);
        points = [];
        var num = parseInt(window.thisPatrolPage) - 1;
        var array = window.lineMapAddress[num];
        for (var i = 0; i < array.locus.length; i++) {
            points.push(new T.LngLat(array.locus[i].longitude, array.locus[i].latitude));
        }
        //创建线对象
        var line = new T.Polyline(points);
        //向地图上添加线
        map.addOverLay(line);
        //function getDistance(points) {
        //    var r = 0;
        //    for (var k = 0; k < points.length - 1; k++) {
        //        r += points[k].distanceTo(points[k + 1]);
        //    }
        //
        //    return r;
        //}
    }, 500);
    /*取消*/
    $linmap_html.find(".left_img").bind("click", function() {
        $(".mapshowalert").remove();
    });
}

/**
 * 筛选
 * @param  {[type]} title   [标题]
 * @param  {[type]} nofun   [下方点击事件方法]
 * @param  {[type]} btnanem [下方按钮名称]
 * @return {[type]}         [description]
 */
function showFilterAlert(fun1, fun2, scrollfun) {
    window.filter_alert_status = "yes";
    window.searchPage = "2";
    var filter_html = ' <div class="alert_box"><i></i></div>';
    filter_html += '<div class ="max-dialog max-alert" style="bottom:0;top:initial;left:100%;" id="filter_float">';
    filter_html += '   <div class="max-dialog-masker"></div>';
    filter_html += '   <div class="max-dialog-frame max_filterdialog_frame">';
    filter_html += '       <div class="allert">';
    filter_html += '           <div class="page_content" id="filter_conten">';
    filter_html += '               <div id="filter_wrapper" class="jszx-wrapper max_height_div">';
    filter_html += '                   <div class="jszx-scroller">';
    filter_html += '                       <div id="filter_html_div">';
    filter_html += '                <div id="alert_filter_content">';
    filter_html += '                </div>';
    //filter_html += '                <div id="alert_filter_content_two">';
    //filter_html += '                </div>';
    filter_html += '                       </div>';
    filter_html += '                   </div>';
    filter_html += '               </div>';
    filter_html += '           </div>';
    filter_html += '           <div class="page_footer" id="filter_footer" style="position:absolute;bottom:0em;height:3em;">';
    filter_html += '                <div class="footer_button_div">';
    filter_html += '                    <div id="all_alert_noyes" style="width:35%;float:left;" class="alert_bottom_three gray_background">重置</div>';
    filter_html += '                    <div id="all_alert_yes"  style="width:35%;float:left;" class="alert_bottom_three orange_background">筛选</div>';
    filter_html += '               </div>';
    //filter_html += '               <div class="footer_button_div" id="filter_btn">';
    //filter_html += '                   <div class="alert_bottom_three orange_background">筛选</div>';
    //filter_html += '               </div>';
    filter_html += '           </div>';
    filter_html += '       </div>';
    filter_html += '   </div>';
    filter_html += '</div>';
    var $filter_html = $(filter_html).appendTo(".ui-page-active");
    $("#filter_float").animate({
        left: "0"
    }, "slow", function() {

    });
    console.log("高度为：" + (window.localInnerHeight - $(".page_header").height() - $(".search_div").height() - $(".jszx-bar-item-2").height() - 10));
    $("#filter_conten").css("height", "inherit"); //
    $("#filter_float").css("height", window.localInnerHeight - $(".search_div").height() - $(".page_header").height() - $(".alert_box").height() - $(".jszx-bar-item-2").height() - 9 + "px");
    $("#filter_wrapper")[0].style.height = window.localInnerHeight - $(".search_div").height() - $(".page_header").height() - $(".checkwelcome_title").height() - $("#filter_footer").height() - 9 + "px";
    if (!isNull(scrollfun)) {
        scrollfun.call();
    } else {
        initScroll({
            "wrapper": "filter_wrapper",
            "dir": "y",
            "bounce": true
        });
    }
    $filter_html.find("#all_alert_noyes").bind("click", function() {
        if (fun1)
            fun1.call();
        //hideFilterAlert();
    });
    $filter_html.find("#all_alert_yes").bind("click", function() {
        if (fun2)
            fun2.call();
        hideFilterAlert();
    });
}

function newShowFilterAlert(filter_fun, content, scrollfun) {
    window.filter_alert_status = "yes";
    window.searchPage = "2";
    //var newfilter_html = "<div  class='max-dialog max-confirm2 goodtype_alert'>";
    //newfilter_html += "        <div class='max-dialog-masker'  id='goodtype_alert'></div>";
    //newfilter_html += "        <div class='max-dialog-frame good_type_backdiv'>";
    ////var newfilter_html = ' <div class="alert_box"><i></i></div>';
    var newfilter_html = '<div class ="max-dialog max-alert " style="bottom:0;top:initial;left:100%;" id="filter_float">';
    newfilter_html += '   <div class="max-dialog-masker"></div>';
    newfilter_html += '   <div class="max-dialog-frame max_filterdialog_frame" style="left:15%;width:85%;">';
    //newfilter_html += '       <div class="allert">';
    newfilter_html += '           <div class="page_content" id="newfilter_content">';
    newfilter_html += '               <div id="newfilter_wrapper" class="jszx-wrapper">';
    newfilter_html += '                   <div class="jszx-scroller">';
    newfilter_html += '                       <div id="newfilter_html_div">';
    newfilter_html += '                       </div>';
    newfilter_html += '                   </div>';
    newfilter_html += '               </div>';
    newfilter_html += '           </div>';
    newfilter_html += '           <div class="page_footer" id="newfilter_footer" style="position:absolute;bottom:0em;">';
    newfilter_html += '               <div class="footer_button_div" id="filter_btn">';
    newfilter_html += '                   <div class="alert_bottom_three orange_background">筛选</div>';
    newfilter_html += '               </div>';
    newfilter_html += '           </div>';
    //newfilter_html += '       </div>';
    newfilter_html += '   </div>';
    newfilter_html += '</div>';
    var $newfilter_html = $(newfilter_html).appendTo(".ui-page-active");
    $("#filter_float").animate({
        left: "0"
    }, "slow", function() {

    });
    $("#newfilter_head").css("height", "inherit"); //
    $("#filter_float").css("height", window.localInnerHeight - $(".jszx-bar-item-4").height() - $("#newfilter_footer").height() + "px");
    $("#newfilter_content").css("height", window.localInnerHeight - $(".jszx-bar-item-4").height() - $("#newfilter_footer").height() + "px");
    $("#newfilter_wrapper")[0].style.height = window.localInnerHeight - $("#newfilter_footer").height() + "px";
    if (!isNull(scrollfun)) {
        scrollfun.call();
    } else {
        initScroll({
            "wrapper": "newfilter_wrapper",
            "dir": "y",
            "bounce": true
        });
    }
    $newfilter_html.find("#filter_btn").bind("click", function() {
        if (filter_fun)
            filter_fun.call();
        if (isNull(content)) {
            hideFilterAlert();
        }

    });
}