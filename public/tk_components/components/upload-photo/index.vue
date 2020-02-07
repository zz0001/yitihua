<style lang="less">
    .tk-upload-photo {
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;

        > div {
            justify-content: flex-start;

            width: calc(((100vw - 48px) / 4) - 10px);
            height: calc(((100vw - 48px) / 4) - 10px);
            margin: 6px;
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: center;
            line-height: 80px;
            font-size: 80px;
        }

        .add-photo {
            svg {
                margin: 15px;
                width: calc(100% - 30px);
                height: calc(100% - 30px);
            }
        }

        .tk-upload-photo-camera {
            background-size: cover;
            background-image: url("./image/camera.svg");
            background-size: 60% auto;
            background-repeat: no-repeat;
            background-position: 17px 15px;
        }

        .tk-upload-photo-abc {
            background-size: cover;
            background-image: url("./image/photo.svg");
            background-repeat: no-repeat;
            background-position: center center;
            border: none;
            position: relative;

            .del {
                position: absolute;
                right: -8px;
                top: -8px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: red;
                color: #fff;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
            }
        }

        .tk-upload-photo-image {
            background-size: cover;
            margin: 5px;
            background-image: url("./image/photo.svg");
            background-size: 60% auto;
            background-repeat: no-repeat;
            background-position: 17px 15px;
            position: relative;

            .del {
                position: absolute;
                right: -8px;
                top: -8px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: red;
                color: #fff;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
            }
        }

    }
</style>
<template>
    <div class="tk-upload-photo">
        <div @click="toBigger(index)" :key="index" v-for="(item,index) of _tkValue" class="tk-upload-photo-abc" :style="{

'background-image':`url(${item})`

}">
            <div @click.stop="del(index)" class="del">
                —
            </div>
        </div>
        <div v-if="tkValue.length<parseFloat(maxlength)" class="add-photo" @click="poperBottom">
            <svg fill="#ccc" t="1575941792520" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2835" width="200" height="200">
                <path d="M554.76 549.889v341c0 26.51-21.491 48-48 48-26.51 0-48-21.49-48-48v-341H114.172c-26.51 0-48-21.49-48-48s21.49-48 48-48H458.76v-340c0-26.51 21.49-48 48-48s48 21.49 48 48v340h346.414c26.51 0 48 21.49 48 48s-21.49 48-48 48H554.76z"
                      p-id="2836"></path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tkValue: this.value,
                innerWidth: window.innerWidth
            }
        },
        watch: {
            value(newVal) {
                this.tkValue = newVal
            },
            tkValue(newVal) {
                this.$emit('input', newVal)
            }
        },
        computed: {
            _tkValue() {
                if (!this.withBase64) {
                    var arr = [];
                    this.tkValue.forEach(item => {
                        arr.push("data:image/jpeg;base64," + item)
                    })
                    return arr;
                } else {
                    return this.tkValue;
                }
            }
        },
        props: {
            maxlength: {
                type: String,
                default: "8"
            },
            value: {
                type: Array,
                default: () => []
            },
            withBase64: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            poperBottom() {
                this.$createTkBottomSelect({
                    $props: {
                        data: [{
                            name: '拍照'
                        }, {
                            name: '选择文件'
                        }]
                    },
                    $events: {
                        itemClick: (i, item) => {
                            [this.camera, this.image][i]();
                        }
                    }
                }).show();
            },
            del(index) {
                this.tkValue.splice(index, 1);
            },
            toBigger(index, item) {
                this.$createPotImagePreview({
                    imgs: this._tkValue,
                    initialIndex: index
                }).show()
            },
            image() {
                var that = this;
                this.choosePic((imageData) => {
                    if (this.withBase64) {
                        this.tkValue.push("data:image/jpeg;base64," + imageData)
                    } else {
                        this.tkValue.push(imageData)
                    }
                })
            },
            camera() {
                console.log('camera is running');
                this.mycamera((imageData) => {
                    if (this.withBase64) {
                        this.tkValue.push("data:image/jpeg;base64," + imageData)
                    } else {
                        this.tkValue.push(imageData)
                    }
                })
            },
            mycamera(successCallback) {
                console.log('mycamera is running');

                function errorCallback(message) {
                    console.log(message)
                }

                navigator.camera.getPicture(successCallback, errorCallback, {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL
                    // destinationType: Camera.DestinationType.FILE_URI,
                    // sourceType: Camera.PictureSourceType.CAMERA
                });
            },
            choosePic(successCallback) {
                function errorCallback(message) {
                    console.log(message)
                }

                navigator.camera.getPicture(successCallback, errorCallback, {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
                });
            }
        }
    }
</script>
