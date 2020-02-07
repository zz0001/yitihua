<template>
    <div data-role="page" id="houseStatistics_welcome_page">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">出租房统计</div>
            <div class="right_img right_btn" style="height:2.5em">列表</div>
        </div>
        <div class="page_condition">
            <div class="headerName">类型</div>
            <div class="headerName" id="nativePlace">籍贯</div>

            <form action="">
                <select id="housetype">
                    <option value="1" selected="selected">默认(户数、面积统计)</option>
                    <!-- <option value="2">面积统计</option> -->
                    <option value="3">租住人员统计</option>
                    <option value="4">籍贯统计</option>
                </select>
                <div id="bumen_div" >
                    <select id="bumen" >
                        <option value="jiangsu" selected="selected">默认(江苏)</option>
                        <option value="beijing">北京</option>
                        <option value="tianjin">天津</option>
                        <option value="hebei">河北</option>
                        <option value="shanxi">山西</option>
                        <option value="neimeng">内蒙</option>
                        <option value="jilin">吉林</option>
                        <option value="heilongjiang">黑龙江</option>
                        <option value="shanghai">上海</option>
                        <option value="hebei">浙江</option>
                        <option value="anhui">安徽</option>
                        <option value="fujian">福建</option>
                        <option value="shanxi">山西</option>
                        <option value="henan">河南</option>
                        <option value="hubei">湖北</option>
                        <option value="hunan">湖南</option>
                        <option value="guangdong">广东</option>
                        <option value="guangxi">广西</option>
                        <option value="hainan">海南</option>
                        <option value="chongqing">重庆</option>
                        <option value="sichuan">四川</option>
                        <option value="guizhou">贵州</option>
                        <option value="yunnan">云南</option>
                        <option value="xizang">西藏</option>
                        <option value="shanxi2">陕西</option>
                        <option value="gansu">甘肃</option>
                        <option value="qinghai">青海</option>
                        <option value="ningxia">宁夏</option>
                        <option value="xinjiang">新疆</option>
                        <option value="taiwan">台湾</option>
                        <option value="xianggang">香港</option>
                        <option value="aomen">澳门</option>
                    </select>
                </div>
                <!--  <select id="zhineng">
                 </select>
                 <select id="bigClass">
                 </select> -->
            </form>
            <!-- <div class="queryClick" id="housequeryClick"><span>点击查看</span></div> -->
            <div id="housequeryClick" style="position: relative;width: 100%;margin-top:1em;">
                <div class="queryclickDiv">点击查看</div>
            </div>
        </div>
        <div id="houseStatistics_welcome_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="houseStatistics_html">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            $("#houseStatistics_welcome_page").live("pageshow", function () {
                window.housetype="1";
                window.searchPage = 2;
                // 在获取职能事项
                //  get_zhineng();

                //  获取初始数据
                statisticsInit();

                // 返回
                $("#houseStatistics_welcome_page .left_img").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        $.mobile.changePage("../load/welcome.html");
                    }
                });
                // 改变职能大类
                $("#houseStatistics_welcome_page #housetype").change(function (e) {
                    var value=$("#housetype").val();
                    console.log(value);
                    window.housetype=value;

                })
                $("#houseStatistics_welcome_page .right_btn").listen("quickClick", function (e) {
                    $.mobile.changePage("../leasehouse/houseList.html");
                });
                // 点击查询
                $("#housequeryClick").listen("quickClick", function () {

                    if(window.housetype=="1"){
                        rentalHousingNumList();
                    }else if(window.housetype=="2"){
                        rentalHousingAreaList();
                    }else if(window.housetype=="3"){
                        tenementCountList();
                    }else if(window.housetype=="4"){
                        tenementByNativePlaceList();
                    }
                })
                //1
                $("#houseStatistics_welcome_page").on("click", "#rentalHousingNumTable tr", function (e) {
                    var gridno=$(e.currentTarget).attr("gridno");
                    findRentalHousingList(gridno,"1",1);
                })
                //2
                $("#houseStatistics_welcome_page").on("click", "#rentalHousingAreaTable tr", function (e) {
                    var gridno=$(e.currentTarget).attr("gridno");
                    findRentalHousingList(gridno,"1",2);
                })
                //3
                $("#houseStatistics_welcome_page").on("click", "#tenementCountTable tr", function (e) {
                    var gridno=$(e.currentTarget).attr("gridno");
                    ap_findTenementList(gridno,"1",1);
                })
                //4
                $("#houseStatistics_welcome_page").on("click", "#tenementByNativePlaceTable tr", function (e) {
                    var gridno=$(e.currentTarget).attr("gridno");
                    ap_findTenementList(gridno,"1",2);
                })
                $("#houseStatistics_welcome_page").on("click", "#secondRentalHousingListTable tr", function (e) {
                    window.houseid=$(e.currentTarget).attr("id");
                    $.mobile.changePage("../leasehouse/houseDetail2.html");
                })
                $("#houseStatistics_welcome_page").on("click", "#findTenementListTable tr", function (e) {
                    window.houseid=$(e.currentTarget).attr("id");
                    $.mobile.changePage("../leasehouse/houseDetail.html");
                })

            });

            //初始化
            function statisticsInit() {
                $("#houseStatistics_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#houseStatistics_welcome_page .page_header").height() - $("#houseStatistics_welcome_page .page_condition").height() + "px";
                initScroll({
                    "wrapper": "houseStatistics_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    /*         "pullUpLoading": function (reset) { //上拉
                               console.log(window.searchPage)
                               console.log(window.arrayDataLength)
                                if (window.searchPage > window.arrayDataLength) {
                                reset(true);
                                toast("没有更多的数据了");
                                } else {
                                    leader_handle_List(reset, window.searchPage++);
                                }
                            },
                            "pullDownLoading": function (reset) { //下拉
                                if(window.housetype=="1"||window.housetype=="2"){

                                }else if(window.housetype=="3"||window.housetype=="4"){

                                }
                            } */
                });
                scrollToTop("houseStatistics_welcome_wrapper");
                rentalHousingNumList();
            }



            // 请求数据
            function rentalHousingNumList() {
                var obj = "";

                doPost("ap_rentalHousingNum.action", obj, function (data) {

                    var html = "";
                    /*  html += '<div class="page_total">';
                     html += '<ul><li><p>接单数</p><p>' + data.total.totalworkOrder + '</p></li><li class="split"></li><li><p>处置数</p><p>' + data.total.totaldispose + '</p></li><li class="split"></li><li><p>按时办结率</p><p>' + data.total.totalcomplete + '</p></li></ul>';
                     html += '<ul><li><p>返工单数</p><p>' + data.total.totalredone + '</p></li><li class="split"></li><li><p>延期数</p><p>' + data.total.totaldelay + '</p></li><li class="split"></li><li><p>超期处置数</p><p>' + data.total.totaloverDispose + '</p></li> <li class="split"></li><li><p>超期未处置数</p><p>' + data.total.totaloverUndispose + '</p></li></ul>';
                     html += '</div>' */
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>出租房户数、面积统计</span></p>';
                    html += '<table id="rentalHousingNumTable" cellpadding="0" cellspacing="0" border="1" class="statistics">';
                    html += '<thead><tr><th>网格名称</th><th>网格编号</th><th>出租户总数</th><th>面积</th></tr></thead>';
                    if (data.rows.length == 0) {
                        //html += '<tbody><tr><td>' + "" + '</td><td>' + "" + '</td><td>' + 0 + '</td><td>' + 0 + '</td><td>' + 0 + '</td></tr></tbody>';
                    }
                    var newdata=data.rows;
                    //根据价格（price）排序
                    function sortprice(a,b){
                        return b.num-a.num
                    }
                    //利用js中的sort方法
                    newdata.sort(sortprice);
                    //打印排序后的数据到控制台

                    for (var i = 1; i < data.rows.length; i++) {

                        html += '<tbody><tr gridno="' + data.rows[i].gridno + '"><td>' + data.rows[i].deptname + '</td><td>' + data.rows[i].gridno + '</td><td>' + data.rows[i].num + '</td><td>' + data.rows[i].sum + '</td></tr></tbody>';
                    }
                    html += '<tbody><tr><td>' + data.rows[0].deptname + '</td><td>' + data.rows[0].gridno + '</td><td>' + data.rows[0].num + '</td><td>' + data.rows[0].sum + '</td></tr></tbody>';
                    html += '</table></div>';
                    $("#houseStatistics_html").html(html);
                }, "")
            }
            // 面积请求数据
            function rentalHousingAreaList() {
                var obj = "";

                doPost("ap_rentalHousingArea.action", obj, function (data) {

                    var html = "";
                    /*  html += '<div class="page_total">';
                     html += '<ul><li><p>接单数</p><p>' + data.total.totalworkOrder + '</p></li><li class="split"></li><li><p>处置数</p><p>' + data.total.totaldispose + '</p></li><li class="split"></li><li><p>按时办结率</p><p>' + data.total.totalcomplete + '</p></li></ul>';
                     html += '<ul><li><p>返工单数</p><p>' + data.total.totalredone + '</p></li><li class="split"></li><li><p>延期数</p><p>' + data.total.totaldelay + '</p></li><li class="split"></li><li><p>超期处置数</p><p>' + data.total.totaloverDispose + '</p></li> <li class="split"></li><li><p>超期未处置数</p><p>' + data.total.totaloverUndispose + '</p></li></ul>';
                     html += '</div>' */
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>出租房面积统计</span></p>';
                    html += '<table id="rentalHousingAreaTable" cellpadding="0" cellspacing="0" border="1" class="statistics">';
                    html += '<thead><tr><th>网格名称</th><th>网格编号</th><th>出租户面积(平方米)</th></tr></thead>';
                    if (data.rows.length == 0) {
                        //html += '<tbody><tr><td>' + "" + '</td><td>' + "" + '</td><td>' + 0 + '</td><td>' + 0 + '</td><td>' + 0 + '</td></tr></tbody>';
                    }
                    var newdata=data.rows;
                    //根据价格（price）排序
                    function sortprice(a,b){
                        return b.sum-a.sum
                    }
                    //利用js中的sort方法
                    newdata.sort(sortprice);
                    for (var i = 1; i < data.rows.length; i++) {
                        html += '<tbody><tr gridno="' + data.rows[i].gridno + '"><td>' + data.rows[i].deptname + '</td><td>' + data.rows[i].gridno + '</td><td>' + data.rows[i].sum + '</td></tr></tbody>';
                    }
                    html += '<tbody><tr><td>' + data.rows[0].deptname + '</td><td>' + data.rows[0].gridno + '</td><td>' + data.rows[0].sum + '</td></tr></tbody>';
                    html += '</table></div>';
                    $("#houseStatistics_html").html(html);
                }, "")
            }
            // 租户总数请求数据
            function tenementCountList() {
                var obj = "";

                doPost("ap_tenementCount.action", obj, function (data) {

                    var html = "";
                    /*  html += '<div class="page_total">';
                     html += '<ul><li><p>接单数</p><p>' + data.total.totalworkOrder + '</p></li><li class="split"></li><li><p>处置数</p><p>' + data.total.totaldispose + '</p></li><li class="split"></li><li><p>按时办结率</p><p>' + data.total.totalcomplete + '</p></li></ul>';
                     html += '<ul><li><p>返工单数</p><p>' + data.total.totalredone + '</p></li><li class="split"></li><li><p>延期数</p><p>' + data.total.totaldelay + '</p></li><li class="split"></li><li><p>超期处置数</p><p>' + data.total.totaloverDispose + '</p></li> <li class="split"></li><li><p>超期未处置数</p><p>' + data.total.totaloverUndispose + '</p></li></ul>';
                     html += '</div>' */
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>租住人员统计</span></p>';
                    html += '<table id="tenementCountTable" cellpadding="0" cellspacing="0" border="1" class="statistics">';
                    html += '<thead><tr><th>网格名称</th><th>网格编号</th><th>租住人总数</th><th>男性总数</th><th>女性总数</th></tr></thead>';
                    if (data.rows.length == 0) {
                        //html += '<tbody><tr><td>' + "" + '</td><td>' + "" + '</td><td>' + 0 + '</td><td>' + 0 + '</td><td>' + 0 + '</td></tr></tbody>';
                    }
                    var newdata=data.rows;
                    //根据价格（price）排序
                    function sortprice(a,b){
                        return b.num-a.num
                    }
                    //利用js中的sort方法
                    newdata.sort(sortprice);
                    for (var i = 1; i < data.rows.length; i++) {
                        html += '<tbody><tr gridno="' + data.rows[i].gridno + '"><td>' + data.rows[i].deptname + '</td><td>' + data.rows[i].gridno + '</td><td>' + data.rows[i].num + '</td><td>' + data.rows[i].male + '</td><td>' + data.rows[i].female + '</td></tr></tbody>';
                    }
                    html += '<tbody><tr><td>' + data.rows[0].deptname + '</td><td>' + data.rows[0].gridno + '</td><td>' + data.rows[0].num + '</td><td>' + data.rows[0].male + '</td><td>' + data.rows[0].female + '</td></tr></tbody>';
                    html += '</table></div>';
                    $("#houseStatistics_html").html(html);
                }, "")
            }
            // 籍贯请求数据
            function tenementByNativePlaceList() {
                var obj = "";
                var bumen=$("#bumen").val();
                var newbumen=bumen.toUpperCase();
                obj += toJson("native", newbumen);
                doPost("ap_tenementByNativePlace.action", obj, function (data) {

                    var html = "";
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>籍贯统计</span></p>';
                    html += '<table id="tenementByNativePlaceTable" cellpadding="0" cellspacing="0" border="1" class="statistics">';
                    html += '<thead><tr><th>网格名称</th><th>网格编号</th><th>人数</th></tr></thead>';
                    if (data.rows.length == 0) {
                        //html += '<tbody><tr><td>' + "" + '</td><td>' + "" + '</td><td>' + 0 + '</td><td>' + 0 + '</td><td>' + 0 + '</td></tr></tbody>';
                    }
                    var newdata=data.rows;
                    //根据价格（price）排序
                    function sortprice(a,b){
                        return b[newbumen]-a[newbumen]
                    }
                    //利用js中的sort方法
                    newdata.sort(sortprice);
                    for (var i = 0; i < data.rows.length; i++) {
                        html += '<tbody><tr gridno="' + data.rows[i].GRIDNO + '"><td>' + data.rows[i].DEPTNAME + '</td><td>' + data.rows[i].GRIDNO + '</td><td>' + data.rows[i][newbumen] + '</td></tr></tbody>';
                    }

                    html += '</table></div>';
                    $("#houseStatistics_html").html(html);
                }, "")
            }

            function findRentalHousingList(gridno,pageNum,type){
                var obj = "";
                obj+= toJson("gridNo", gridno)+ "&";
                obj+= toJson("pageSize", "1000") + "&";
                obj+= toJson("pageNum", pageNum);
                doPost("ap_findRentalHousingList.action", obj, function (data) {
                    /* if (reset) {
                        reset(true);
                    }
                    getDataLength(data.total); */
                    var html = "";
                    /*  html += '<div class="page_total">';
                     html += '<ul><li><p>接单数</p><p>' + data.total.totalworkOrder + '</p></li><li class="split"></li><li><p>处置数</p><p>' + data.total.totaldispose + '</p></li><li class="split"></li><li><p>按时办结率</p><p>' + data.total.totalcomplete + '</p></li></ul>';
                     html += '<ul><li><p>返工单数</p><p>' + data.total.totalredone + '</p></li><li class="split"></li><li><p>延期数</p><p>' + data.total.totaldelay + '</p></li><li class="split"></li><li><p>超期处置数</p><p>' + data.total.totaloverDispose + '</p></li> <li class="split"></li><li><p>超期未处置数</p><p>' + data.total.totaloverUndispose + '</p></li></ul>';
                     html += '</div>' */
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>出租房统计</span></p>';
                    html += '<table id="secondRentalHousingListTable" cellpadding="0" cellspacing="0" border="1" class="statistics">';
                    if(type==1){
                        html += '<thead><tr><th>网格编号</th><th>创建时间</th><th>地址</th></tr></thead>';
                        for (var i = 0; i < data.datas.length; i++) {
                            html += '<tbody><tr id="' + data.datas[i].id + '"><td>' + data.datas[i].gridNo + '</td><td>' + data.datas[i].createTime + '</td><td>' + data.datas[i].address + '</td></tr></tbody>';
                        }
                    }else{
                        html += '<thead><tr><th>网格编号</th><th>面积</th><th>地址</th></tr></thead>';
                        for (var i = 0; i < data.datas.length; i++) {
                            html += '<tbody><tr id="' + data.datas[i].id + '"><td>' + data.datas[i].gridNo + '</td><td>' + data.datas[i].area + '</td><td>' + data.datas[i].address + '</td></tr></tbody>';
                        }
                    }



                    /* for (var i = 0; i < data.datas.length; i++) {
                        html += '<tbody><tr gridno="' + data.datas[i].gridno + '"><td>' + data.datas[i].gridNo + '</td><td>' + data.datas[i].createTime + '</td><td>' + data.datas[i].address + '</td></tr></tbody>';
                    } */
                    //html += '<tbody><tr ><td>' + data.rows[0].deptname + '</td><td>' + data.rows[0].gridno + '</td><td>' + data.rows[0].num + '</td></tr></tbody>';
                    html += '</table></div>';
                    $("#houseStatistics_html").html(html);
                }, "")
            }
            function ap_findTenementList(gridno,pageNum,type){
                var obj = "";
                obj+= toJson("gridNo", gridno)+ "&";
                obj+= toJson("sex", "")+ "&";
                obj+= toJson("pageSize", "1000") + "&";
                obj+= toJson("pageNum", pageNum);
                doPost("ap_findTenementList.action", obj, function (data) {
                    /* if (reset) {
                        reset(true);
                    }
                    getDataLength(data.total); */
                    var html = "";
                    /*  html += '<div class="page_total">';
                     html += '<ul><li><p>接单数</p><p>' + data.total.totalworkOrder + '</p></li><li class="split"></li><li><p>处置数</p><p>' + data.total.totaldispose + '</p></li><li class="split"></li><li><p>按时办结率</p><p>' + data.total.totalcomplete + '</p></li></ul>';
                     html += '<ul><li><p>返工单数</p><p>' + data.total.totalredone + '</p></li><li class="split"></li><li><p>延期数</p><p>' + data.total.totaldelay + '</p></li><li class="split"></li><li><p>超期处置数</p><p>' + data.total.totaloverDispose + '</p></li> <li class="split"></li><li><p>超期未处置数</p><p>' + data.total.totaloverUndispose + '</p></li></ul>';
                     html += '</div>' */
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>租住人员统计</span></p>';
                    html += '<table id="findTenementListTable" cellpadding="0" cellspacing="0" border="1" class="statistics">';

                    if(type==1){
                        html += '<thead><tr><th>租户姓名</th><th>租户公民身份号码</th><th>租户联系方式</th></tr></thead>';
                        for (var i = 0; i < data.datas.length; i++) {
                            html += '<tbody><tr id="' + data.datas[i].id + '"><td>' + data.datas[i].idName + '</td><td>' + data.datas[i].idNo + '</td><td>' + data.datas[i].phoneNo + '</td></tr></tbody>';
                        }
                    }else{
                        html += '<thead><tr><th>租户姓名</th><th>租户公民身份号码</th><th>租户联系方式</th></tr></thead>';
                        for (var i = 0; i < data.datas.length; i++) {
                            html += '<tbody><tr id="' + data.datas[i].id + '"><td>' + data.datas[i].idName + '</td><td>' + data.datas[i].idNo + '</td><td>' + data.datas[i].phoneNo + '</td></tr></tbody>';
                        }
                    }


                    //html += '<tbody><tr ><td>' + data.rows[0].deptname + '</td><td>' + data.rows[0].gridno + '</td><td>' + data.rows[0].num + '</td></tr></tbody>';
                    html += '</table></div>';
                    $("#houseStatistics_html").html(html);
                }, "")
            }
        }
    }
</script>

<style scoped>
    .page_condition {
        width: 100%;
        height: 7.5em;
        position: relative;
    }

    .page_condition .queryClick {
        position: absolute;
        top: 5%;
        left: 82%;
        width: 15%;
        font-size: 14px;
        word-wrap: break-word;
        letter-spacing: 12px;
        background-color: #0083df;
        height: 80%;
        text-align: center;
        border-radius: 8px;
        font-weight: 700;
        color: #fff;
    }

    .page_condition .headerName {
        position: absolute;
        width: 15%;
        height: 28px;
        line-height: 28px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        border-radius: 15px;
        background-color: #fff;
        left: 10px;
        border: solid #cdcdcd 1px;
    }

    .page_condition div.headerName:nth-child(2) {
        top: 2em;
    }

    .page_condition div.headerName:nth-child(3) {
        top: 4.2em;
    }

    .page_condition form .ui-select {
        width: 60%;
        left: 20%;
    }

    .page_condition form div:nth-child(3) {
        width: 30%;
    }

    .page_condition form div:nth-child(4) {
        width: 30%;
        top: -35px;
        left: 50%;
    }

    .page_condition form .ui-select .ui-btn {
        margin: 3px;
    }

    .page_condition form .ui-select .ui-btn-icon-right .ui-btn-inner {
        padding: 3px;
    }

    .page_condition form .ui-select .ui-btn-icon-right .ui-icon {
        display: none;
    }

    .page_total {
        height: 9.6em;
        background-color: #fff;
    }

    .page_total ul li {
        float: left;
        text-align: center;
    }

    .page_total ul li p:nth-child(1) {
        font-size: 0.93em;
        height: 1.28em;
        line-height: 1.1em;
        margin-top: 1em;
    }

    .page_total ul li p:nth-child(2) {
        font-size: 1.2em;
        height: 1.57em;
        line-height: 2.5em;
    }

    .page_total ul:nth-child(1) li {
        width: 33%;
    }

    .page_total ul:nth-child(2) li {
        width: 24.5%;

    }

    .page_total ul li.split {
        border-right: 1px solid #cdcdcd;
        width: 0px;
        height: 3em;
        margin-top: 1em;
    }

    .page_message p {
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
    }

    .page_message p span:nth-child(1) {
        display: inline-block;
        width: 6px;
        height: 1.5em;
        background-color: #0083df;
        margin-right: 10px;
        vertical-align: middle;
    }

    .page_message p span:nth-child(2) {
        vertical-align: middle;
    }

    .statistics {
        border-collapse: collapse;
        width: 96%;
        margin-left: 2%;
    }

    .statistics th {
        font-size: 0.7em;
        text-align: center;
        height: 2.5em;
        line-height: 1.5em;
        border: 1px solid #cdcdcd;
        font-weight: 700;
    }

    .statistics td {
        border: 1px solid #cdcdcd;
        text-align: center;
        height: 2.5em;
        line-height: 1.5em;
        font-size: 0.7em;
    }
    .queryClick span{
        height: 100%;
        display: inline-block;
        margin: 10px 20px;
        color:#fff;
    }
    .queryclickDiv{
        border-radius: 0.3em;
        margin-left: 7.5%;
        margin-right: 7.5%;
        text-align: center;
        margin-bottom: 1.2em;
        height: 2.5em;
        color: #fff;
        margin-bottom: 0.6em;
        margin-top: 0em;
        line-height: 2.6em;
        background: #0083df;
    }
    #houseStatistics_welcome_page .right_img {
        width: 2em;
        top: 0.5em;
    }
</style>
