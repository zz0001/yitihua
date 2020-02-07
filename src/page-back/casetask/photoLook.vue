<template>
<div data-role="page" id="photo_look_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">查看图片</div>
    </div>
    <div class="page_content">
        <!--鍥剧墖澧�-->
        <div id="photo_look_look">
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        $("#photo_look_page .page_header .back-button").listen("quickClick", function (e) {
            window.history.back();
            $("#centertask_detail_img").empty();
        });

        if ("casestep" == window.lookType) {
            appWorkOrder_viewAttach();
            return;
        }
        if ("leadercasestep" == window.lookType) {
            leaderappWorkOrder_viewAttach();
            return;
        }
        if ("approvalInfo" == window.lookType) {
            var pics = [];
            for (var i = 0; i < window.approvalImgArrayInfo.length; i++) {
                if (isNull(pics)) {
                    if (!isNull(window.approvalImgArrayInfo[i].base64Url)) {
                        pics[0] = "data:image/jpeg;base64," + window.approvalImgArrayInfo[i].base64Url;
                    }
                } else {
                    if (!isNull(window.approvalImgArrayInfo[i].base64Url)) {
                        var picslength = pics.length;
                        pics[picslength] = "data:image/jpeg;base64," + window.approvalImgArrayInfo[i].base64Url;
                    }
                }
            }
        } else if ("visited_farmer" == window.lookType) {
            var pics = [];
            for (var i = 0; i < window.visitFarmerImg.length; i++) {
                if (isNull(pics)) {
                    if (!isNull(window.visitFarmerImg[i].visitPic)) {
                        pics[0] = window.imgUrl + window.visitFarmerImg[i].visitPic;
                    }
                } else {
                    if (!isNull(window.visitFarmerImg[i].visitPic)) {
                        var picslength = pics.length;
                        pics[picslength] = window.imgUrl + window.visitFarmerImg[i].visitPic;
                    }
                }
            }
        } else if ("visited_enterprise" == window.lookType) {
            var pics = [];
            for (var i = 0; i < window.visitEnterpriseImg.length; i++) {
                if (isNull(pics)) {
                    if (!isNull(window.visitEnterpriseImg[i])) {
                        pics[0] = window.imgUrl + window.visitEnterpriseImg[i];
                    }
                } else {
                    if (!isNull(window.visitEnterpriseImg[i])) {
                        var picslength = pics.length;
                        pics[picslength] = window.imgUrl + window.visitEnterpriseImg[i];
                    }
                }
            }
        } else if ("opinioned" == window.lookType) {
            var pics = [];

            for (var i = 0; i < window.opinionedImgArray.length; i++) {
                if (isNull(pics)) {
                    if (!isNull(window.opinionedImgArray[i])) {
                        pics[0] = window.imgUrl + window.opinionedImgArray[i];
                    }
                } else {
                    if (!isNull(window.opinionedImgArray[i])) {
                        var picslength = pics.length;
                        pics[picslength] = window.imgUrl + window.opinionedImgArray[i];
                    }
                }
            }
        } else if ("checkedDetail" == window.lookType) {
            var pics = [];
            for (var i = 0; i < window.checkedLookArrayImg.length; i++) {
                if (isNull(pics)) {
                    if (!isNull(window.checkedLookArrayImg[i].path)) {
                        pics[0] = window.imgUrl + window.checkedLookArrayImg[i].path;
                    }
                } else {
                    if (!isNull(window.checkedLookArrayImg[i].path)) {
                        var picslength = pics.length;
                        pics[picslength] = window.imgUrl + window.checkedLookArrayImg[i].path;
                    }
                }
            }
        }
        var markers = ["/staitc/resources/images/d_white.png", "/staitc/resources/images/d_blue.png"];
        var dp = new DynamicPic({
            "id": "photo_look_look", //id锛屽繀椤�
            "pics": pics, //鍥剧墖URL鐨勬暟缁勶紝蹇呴』
            "markers": markers,
            "width": window.innerWidth, //榛樿涓簑indow.innerWidth
            "height": window.innerWidth * 9 / 5.47,
            "text": "   "
        });

        function leaderappWorkOrder_viewAttach() {
            $("#photo_look_look").empty();
            var obj = "";
            obj += toJson("row_id", window.caseRow_id) + "&";
            obj += toJson("hasAttachment", "1") + "&";
            obj += toJson("taskId", "1");
            doPost("appWorkOrder_viewAttach.action", obj, function (data) {
                if (data.code == 0) {
                    var array = data.datas.attachment;
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
                        var markers = ["/staitc/resources/images/d_white.png", "/staitc/resources/images/d_blue.png"];
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
    }

}
</script>

<style scoped>

</style>
