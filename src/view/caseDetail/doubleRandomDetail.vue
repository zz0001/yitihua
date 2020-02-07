<template>
    <div class="handle-case">
        <tk-header>双随机处理</tk-header>
        <tk-container class="handler-case-content-wrapper">
            <div class="handle-case-content">

                <tk-title>抽查项目</tk-title>
                <div class="lineDiv" v-for="item in allAry">
                    <div class="leftDiv">{{item.project_name}}</div>
                    <div class="rightDiv"> <pot-radio-group v-model="item.str" :options="item.ary"
                                                            :horizontal="true"></pot-radio-group></div>

                </div>
                <div class="addDiv">
                    <div class="leftDiv">抽查结果&nbsp<span style="color: red">*</span></div>
                    <div class="rightDiv">
                        <pot-radio-group v-model="selected1" :options="options" :horizontal="true"></pot-radio-group>
                    </div>
                </div>
                <tk-textarea placeholder="请输入简单描述" maxlength="1000" v-model="describe"/>
                <div id="checkItemInfo"></div>
                <tk-title>上传现场图片</tk-title>
                <tk-upload-photo v-model="tempImgAry"></tk-upload-photo>

            </div>

            <div style="display:flex;">

                <tk-button  :type="0" @click="handleconfirm">处理</tk-button>
            </div>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    import {getDoubleRandomCheckList,uploadDoubleRandomHandle} from '../../modules/getData.js';
   import {uploadImage} from '../../config/upload.js';

    export default {
        name: "handleCase",
        data() {
            return {
                id:"",
                caseNumber: '',

                detailList: [],
                code: {key: '抽查编号', value: ''},
                deadLine: {key: '抽查时间', value: ''},
                enterpriseName: {key: '抽查地点', value: ''},
                type: {key: '抽查类型', value: ''},
                userName: {key: '执法人员', value: ''},
                operationList:[],
                processList: [],
                allAry: [],
                selected1: '',
                options: [
                    {label: '无异常', value: '1'},
                    {label: '现场整改', value: '2'},
                    {label: '案件上报', value: '3'}
                ],
                describe:"",
                ids: [],
                answers: [],
                annexNo: '',
                tempImgAry:[],
                currentPhotoIndex: 0,

            }
        },
        created() {

        },
        mounted() {
            var that=this;
          //  this.detailList = [this.code, this.deadLine, this.enterpriseName, this.type, this.userName];
            this.type = this.$route.query.type;
            this.id=this.$route.query.id;

            this.getDetail(this.type);
        },
        methods: {
            toast(txt, type, fn){
                this.$createPotToast({
                    time: 1500,
                    mask: true,
                    txt: txt||'正在加载中...',
                    type: type,
                    onTimeout: fn || null
                }).show()
            },
            /**
             * 获取案件详情案件
             */
            async getDetail(type) {

                // $.ajax({
                //     url:''
                // })

               // console.log('this.$store.state.random_type111='+type);

                let res = await getDoubleRandomCheckList(type);
                if (res.code === 0) {
                    this.hideLoading();
                    this.allAry = res.datas.map(item => {
                        item.ary = [
                            {label: '是', value: '1'},
                            {label: '否', value: '2'},
                        ];
                        return item;
                    });
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            // getCaseDetail(row_id) {
            //
            //     // obj += toJson("loginId", window.localStorage.loginId) + "&";
            //     // obj += toJson("rowId", row_id);
            //     let obj = {para: 'loginId=' + window.localStorage.loginId + '&' + 'rowId=' + row_id};
            //     console.log(JSON.stringify(obj));
            //     // this.url = window.serverUrl + 'dsbOrderDetail.action';
            //     this.url = 'api/double';
            //     this.$http.post(this.url, obj).then(res => {
            //         if (res.code === undefined || res.code === '0') {
            //             console.log('接口返回成功');
            //             let detail = res.datas;
            //             if (detail !== null) {
            //
            //                 this._inputValue(this.code, detail.id);
            //                 this._inputValue(this.deadLine, detail.deadLine);
            //                 this._inputValue(this.enterpriseName, detail.enterpriseName);
            //                 this._inputValue(this.type, detail.type);
            //                 this._inputValue(this.userName, detail.userName);
            //
            //
            //                 //   this.detailList = detail.operationList;
            //
            //
            //                 this.processList=detail.processSteps;
            //
            //             }
            //         } else {
            //             toast(res.message);
            //         }
            //     });
            //
            //     // doPost("dsbOrderDetail.action", obj, function (data) {
            //     //     if (data.code == 0) {
            //     //         var array = data.datas;
            //     //         if (!isNull(array.operationList) && array.operationList.length > 0) {
            //     //             window.operationListArrayInfo = [];
            //     //             for (var i = 0; i < array.operationList.length; i++) {
            //     //                 var info = {
            //     //                     opName: array.operationList[i].opName,
            //     //                     opValue: array.operationList[i].opValue,
            //     //                     destId: array.operationList[i].destId
            //     //                 };
            //     //                 window.operationListArrayInfo.push(info);
            //     //             }
            //     //             $("#case_task_detail_page .page_footer").show();
            //     //         } else {
            //     //             $("#case_task_detail_page .page_footer").hide();
            //     //         }
            //     //         if (!isNull(array.pics)) {
            //     //             $("#case_task_detail_page .commodityAddImgs").show();
            //     //             $("#case_tasked_detail_page .commodityAddImgs").show();
            //     //             if (array.pics.indexOf(";") > 0) {
            //     //                 var info = array.pics.split(";");
            //     //                 info.forEach(item => {
            //     //                     that.list.push({
            //     //                         src: window.imgUrl + item
            //     //                     })
            //     //                 })
            //     //             } else {
            //     //                 var arr = [];
            //     //                 arr.push(array.pics);
            //     //                 window.opinionedImgArray = arr;
            //     //                 that.list = [{
            //     //                     src: window.imgUrl + array.pics
            //     //                 }]
            //     //             }
            //     //         } else {
            //     //             $("#case_task_detail_page .commodityAddImgs").hide();
            //     //             $("#case_tasked_detail_page .commodityAddImgs").hide();
            //     //         }
            //     //         window.caseTaskOneTaskId = array.taskId;
            //     //         //步骤
            //     //         if (array.processSteps.length > 0) {
            //     //             var html = '';
            //     //             var arr = array.processSteps;
            //     //             for (var k = 0; k < arr.length; k++) {
            //     //                 html += '<div class="list_row_case"><div>';
            //     //                 html += '    <div class="oranger_font bigger">' + [k + 1] + "、" + arr[k].name;
            //     //                 if (!isNull(arr[k].url)) {
            //     //                     html += '       <div  url="' + arr[k].url + '" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
            //     //                 }
            //     //                 html += '    </div>';
            //     //                 html += '    <p class="normal">处理时间：' + arr[k].endTime + '</p>';
            //     //                 html += '    <p class="normal">处理人：' + arr[k].userName + '</p>';
            //     //                 html += '    <p class="normal">处理情况：' + arr[k].message + '</p>';
            //     //                 html += '</div></div>';
            //     //             }
            //     //             if (window.thisCaseQueryType == "2") {
            //     //                 $("#case_tasked_steps_html").html(html);
            //     //             } else {
            //     //                 $("#case_task_steps_html").html(html);
            //     //             }
            //     //         } else {
            //     //             $("#case_task_steps_html").empty();
            //     //         }
            //     //         if (array.dispose == "1") {
            //     //             that.detailList[7].value = array.disposeResult;
            //     //             if (!isNull(array.backpath)) {
            //     //                 that.isShow = true;
            //     //                 if (array.backpath.indexOf(";") > 0) {
            //     //
            //     //                     var info = array.backpath.split(";");
            //     //                     info.forEach(item => {
            //     //                         that.list2.push({
            //     //                             src: window.imgUrl + item
            //     //                         })
            //     //                     })
            //     //                 } else {
            //     //                     var arr = [];
            //     //                     arr.push(array.feedbackPic);
            //     //                     window.opinionedImgArray = arr;
            //     //                     that.list2 = [{
            //     //                         src: window.imgUrl + array.feedbackPic
            //     //                     }]
            //     //                 }
            //     //             }
            //     //         } else {
            //     //
            //     //         }
            //     //         window.localStorage.originNum = array.originNum;
            //     //         that.detailList[0].value = array.caseNo;
            //     //         that.detailList[1].value = array.origin;
            //     //         that.detailList[2].value = array.gridName;
            //     //         that.detailList[3].value = array.reportPerson;
            //     //         that.detailList[4].value = array.reportPersonPhone;
            //     //         that.detailList[5].value = array.location;
            //     //         that.detailList[6].value = array.problem;
            //     //         that.detailList[6].detail = array.problem;
            //     //         window.localStorage.orgin = array.orgin;
            //     //     } else {
            //     //         toast(data.message);
            //     //     }
            //     // }, "");
            // },

            /**
             * 给<tk-detail>组件赋值
             * @param item 需要赋值的具体条目对象
             * @param value 传入的值
             * @private
             */
            _inputValue(item, value) {
                this.$set(item, 'value', value);
            },
            /**
             * 处理案件
             * @private
             */
            _handle() {


            },
            /**
             * 处置
             */
            handleconfirm() {
                var that=this;
                let finished = true;
                // 判断是否填写完成
                that.allAry.forEach(item => {
                    if (finished && item.str === undefined) {
                        finished = false;
                    }
                });

                if (!finished) {
                    that.toast('请完整填写抽查项目表');
                    return;
                }
                console.log('抽查结果：' + that.selected1);

                if (that.selected1 === undefined || that.selected1 === '') {
                    that.toast('请选择抽查结果');
                    return;
                }
                for (let i = 0; i < that.allAry.length; i++) {
                    console.log('选中项id：' + that.allAry[i].id
                        + ' || 选中项内容：' + that.allAry[i].project_name
                        + ' || 选中值：' + that.allAry[i].str);
                }

                if (that.describe === undefined || that.describe === '') {
                    that.toast('请填写简单描述');
                    return;
                }

                app.$createPotDialog({
                    $props: {
                        type: 'confirm',
                        content: '你是否确定要提交？'
                    },
                    $events: {
                        confirm(A) {
                            // let finished = true;
                            // // 判断是否填写完成
                            // that.allAry.forEach(item => {
                            //     if (finished && item.str === undefined) {
                            //         finished = false;
                            //     }
                            // });
                            //
                            // if (!finished) {
                            //     that.toast('请完整填写抽查项目表');
                            //     return;
                            // }
                            // console.log('抽查结果：' + that.selected1);
                            //
                            // if (that.selected1 === undefined || that.selected1 === '') {
                            //     that.toast('请选择抽查结果');
                            //     return;
                            // }
                            // for (let i = 0; i < that.allAry.length; i++) {
                            //     console.log('选中项id：' + that.allAry[i].id
                            //         + ' || 选中项内容：' + that.allAry[i].project_name
                            //         + ' || 选中值：' + that.allAry[i].str);
                            // }
                            //
                            // if (that.describe === undefined || that.describe === '') {
                            //     that.toast('请填写简单描述');
                            //     return;
                            // }


                            // 生成问题id列表
                            that.ids = that.allAry.map(item => {
                                return item.id;
                            });

                            // 生成问题选择项列表
                            that.answers = that.allAry.map(item => {
                                return item.str;
                            });
                            // 判断是否有照片
                            if (that.tempImgAry.length === 0) {
                                console.log('么得照片');
                                that.uploadHandle();
                            } else {
                                that.annexNo = that.getTimeStamp();
                                that.uploadPhoto();
                            }

                        }
                    }
                }).show();

            },
            async uploadHandle() {

                let res = await uploadDoubleRandomHandle(this.id,
                    '', this.annexNo, this.selected1, this.ids, this.answers, this.describe);

                console.log(res.code)
                if (res.code === 0) {
                    this.toast("上报成功！");
                    this.$router.go(-2);
                } else {

                    this.toast(res.message);
                }
            },
            async uploadPhoto() {
                if (this.currentPhotoIndex < this.tempImgAry.length) {
                    // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                    let res = await uploadImage(this.tempImgAry[this.currentPhotoIndex], this.annexNo, '11');
                    let response = {};
                    if (res !== undefined && res !== '') {
                        response = JSON.parse(res);
                    } else {
                        response = res;
                    }
                    if (response.code == '0') {
                        this.currentPhotoIndex++;
                        this.uploadPhoto();
                    } else {
                        this.toast('上传照片失败');
                    }
                } else {
                    this.uploadHandle();
                }
            },
            getTimeStamp() {
                let date = new Date();
                let year = date.getFullYear().toString(); //获取当前年份
                let mon = (date.getMonth() + 1).toString(); //获取当前月份
                let da = date.getDate().toString(); //获取当前日.toString()
                let h = date.getHours().toString(); //获取小时
                let m = date.getMinutes().toString(); //获取分钟
                let s = date.getSeconds().toString(); //获取秒
                return year + mon + da + h + m + s;
            },
            /**
             * 退回
             */
            handleback() {
                app.$createPotDialog({
                    $props: {
                        type: 'confirm',
                        content: '你是否确定要退回此案件？'
                    },
                    $events: {
                        confirm(A) {

                        }
                    }
                }).show();
            },
            /**
             * 上报
             */
            handle2() {

            },
        }
    }
</script>

<style lang="less" scoped>
    .handle-case {
        width: 100vw;
        height: 100vh;
        .lineDiv {
            width: 100%;
            border-bottom: 1px solid #f4f4f4;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding: 0.2rem 0;

            .leftDiv {
                padding-left: 2%;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                word-wrap: break-word;
                white-space: normal !important;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .rightDiv {
            }
        }
        .addDiv{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: white;

            .leftDiv {
                padding-left: 10px;
            }

            .rightDiv {
                width: 75%;
            }
        }

        .handler-case-content-wrapper {
            background-color: white;
            width: 100vw;

            .handle-case-content {
                width: 100%;
                height: calc(100vh - 130px);
                overflow-y: auto;

                .case-number-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    margin-top: 10px;

                    .case-number-font {
                        font-size: 18px;
                    }

                    .case-number-title {
                        width: 125px;
                        margin-left: 24px;
                        flex: 3.5;
                    }

                    .case-number {
                        margin-right: 24px;
                        flex: 6.5;
                    }
                }

                .picture-list-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    padding: 0 24px;
                }

                .case-describe {
                    width: calc(100% - 24px);
                    margin: 0 24px;
                    font-size: 20px;
                    line-height: 30px;
                }

                .case-address-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    margin-top: 12px;

                    .case-address-icon {
                        margin-left: 23px;
                        width: 20px;
                        height: auto;
                    }

                    .case-address {
                        margin: 0 24px 0 14px;
                        font-size: 18px;
                        line-height: 20px;
                    }
                }

                .case-handle-process {
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: start;
                    margin-top: 25px;

                    .case-handle-process-title {
                        font-size: 18px;
                        color: #333333;
                        margin: 18px 0 18px 24px;
                    }

                    .case-handle-process-list-wrapper {
                        width: 100%;
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: start;
                        align-items: start;

                        .case-handle-process-item {
                            position: relative;
                            width: calc(100% - 48px);
                            height: auto;
                            margin: 0 24px 0 24px;
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: start;
                            align-items: start;

                            .case-handle-process-item-left {
                                height: 100%;
                                display: flex;
                                flex-flow: column nowrap;
                                justify-content: start;
                                align-items: center;

                                .item-circle {
                                    width: 16px;
                                    height: 16px;
                                    border-radius: 50%;
                                    border: 1px solid #cccccc;
                                }

                                .item-line {
                                    position: absolute;
                                    left:6.5px;
                                    top:16px;
                                    width: 1px;
                                    height: calc(100% - 16px);
                                    background-color: #f9f9f9;

                                }
                            }

                            .case-handle-process-item-right {
                                display: flex;
                                flex-flow: column nowrap;
                                justify-content: start;
                                align-items: left;
                                margin-left: 20px;

                                .item-step {
                                    font-size: 18px;
                                    color: #333333;
                                    padding-bottom: 10px;
                                }
                                .item-info {
                                    padding-bottom: 30px;
                                    padding-bottom: 7px;
                                    color: #999;
                                }

                                .item-result {
                                    padding-bottom: 30px;

                                    color: #999;
                                }
                            }
                        }
                    }
                }
            }

            .handle-case-btn {
                padding-top: 10px;
            }
        }
    }
</style>
