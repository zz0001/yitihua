<template>
    <div class="picture-view">
        <p class="add-picture-text">{{title}}</p>
        <div class="picture-area">
            <div class="picture-item" v-for="(img, index) in image_url" >
                <img class="picture" :src="img" @load="onPictureAddListener" alt="">
                <img class="picture-delete" v-show="editable" src="./icon/delete_pic.png" @click="deleteImg(index)" alt="删除">
            </div>
            <div class="add-picture-wrapper" v-show="editable && image_url.length < maxLength" @click="showPicturePicker">
                <img class="add-picture" src="./icon/add_pic.png" alt="添加照片">
            </div>
        </div>
        <div class="grey-split-line" v-show="showSplitLine"></div>
    </div>
</template>

<script>
    const pictureSourceType = [{text: '拍照', value: '1'}, {text: '从相册选择', value: '2'}];
    export default {
        name: "picture-view",
        props: {
            title: {
                type: String,
                default: '添加照片'
            },
            maxLength: {
                type: Number,
                default: 8
            },
            editable: {
                type: Boolean,
                default: true
            },
            showSplitLine: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                image_url: [],
            }
        },
        methods: {
            onPictureAddListener() {
                return this.$emit('onPictureAddListener');
            },
            showPicturePicker() {
                this.picker = this.$createPicker({
                    title: this.title,
                    data: [pictureSourceType],
                    onSelect: this.picturePickerSelectHandle,
                    onCancel: this.cancelHandler
                });
                this.picker.show();
            },
            picturePickerSelectHandle(selectedVal, selectedIndex, selectedText) {
                switch (selectedIndex.toString()) {
                    case '0':
                        this.addPictureFromCamera();
                        break;
                    case '1':
                        this.addPictureFromGallery();
                        break;
                }
            },
            addPictureFromCamera() {
                console.log('addPictureFromCamera in');
                navigator.camera.getPicture((imageData) => {
                        this.addPicSuccessCallback(imageData);
                    },
                    function errorCallback(message) {
                        console.log('camera错误回调：' + message);
                    }, {
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA
                    });
            },
            addPictureFromGallery() {
                console.log('addPictureFromGallery in');
                navigator.camera.getPicture((imageData) => {
                        this.addPicSuccessCallback(imageData);
                    },
                    function errorCallback(message) {
                        console.log('gallery错误回调：' + message);
                    }, {
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                    });
            },
            addPicSuccessCallback(imageData) {
                // 添加相片
                this.image_url.push(imageData);
            },
            cancelHandler() {

            },
            deleteImg(index) {
                this.image_url.splice(index, 1);
            },
            getImages() {
                return this.image_url;
            },
            setImages(imgList) {
                this.image_url = imgList;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .picture-view {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        background-color: white;

        .add-picture-text {
            font-size: @title-font;
            color: @title-color;
            margin-left: @padding-width;
            margin-top: @padding-height;
        }

        .picture-area {
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            padding-left: 0.2rem;

            .picture-item {
                position: relative;
                width: 3.5rem;
                height: 3.5rem;
                margin-right: 9px;
                order: 1;

                .picture {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 3rem;
                    height: 3rem;
                    margin: auto;
                    border-radius: 4px;
                }

                .picture-delete {
                    position: absolute;
                    width: 0.9rem;
                    height: 0.9rem;
                    top: -0.1rem;
                    right: -0.1rem;
                }
            }

            .add-picture-wrapper {
                position: relative;
                width: 60px;
                height: 60px;
                order: 1;
                border-radius: 5px;
                background: #f5f5f5;
                margin: 0.3rem;

                .add-picture {
                    position: absolute;
                    display: inline-block;
                    top: 50%;
                    left: 50%;
                    margin-top: -20px;
                    margin-left: -20px;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #cccccc;
                    font-size: 40px;
                }
            }
        }

        .grey-split-line {
            background: @grey-split-line;
            width: 100%;
            height: 1px;
        }
    }

</style>
