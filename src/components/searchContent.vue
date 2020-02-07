<template>
    <div class="searchTool">
        <div class="searchDiv" v-show="searchValue">
            <div class="search-hint-wrapper">
                <img src="./icon/搜索.png" class="searchMailIcon">
                <div class="placeContent">{{placeholder}}</div>
            </div>
        </div>
        <div id="inputDiv" class="inputDiv" >
            <input type="text" id="getval" class="flex-1" @focus="searchHide" @blur="searchShow" v-model="val" >
            <!--<input type="text" id="getval" class="flex-1" @focus="searchHide" @blur="searchShow" v-model="val" @input="inputFunc">-->

        </div>
    </div>
</template>

<script>
    export default {
        // props:['placeholder'],
        props: {
            placeholder: {
                default: '搜索'
            },
            value:{
                default:''
            }
        },
        data() {
            return {
                searchValue: true,
                val: this.value,
            }
        },
        watch:{
            val(newV){
                this.$emit('input',newV)
            },
            value(newV){
                this.val=newV
            }
        },
        methods: {
            searchShow() {
                console.log('searchShow');
                this.searchValue = true;
            },
            searchHide() {
                console.log('searchHide');
                this.searchValue = false;
            },
            inputFunc() {
                // return this.$emit('inputFunc',this.val)




                // if (this.inputFunc) {
                //     return this.$emit('inputFunc',this.val)
                // } else {
                //     return this.inputFunc();
                // }
            },
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .searchTool {
        position: relative;
        width: 90%;
        height: 1.5rem;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        margin: 0.4rem 5%;
        background: white;

        .searchDiv {
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;

            .search-hint-wrapper {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                .searchMailIcon {
                    width: 1rem;
                    height: 1rem;
                }

                .placeContent {
                    line-height: 1.5rem;
                    color: #A7A7A7;
                    padding-left: 0.3rem;
                }
            }
        }

        .inputDiv {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: transparent;

            .flex-1 {
                width: 100%;
                height: 1.5rem;
            }
        }
    }
</style>
