<template>
    <div class="duchaduban">
        <tk-header>督察督办</tk-header>
        <tk-scroll>
            <div class="case-scroll-list">
                <div v-for="item in caseList" @click="onItemClick(item)">
                    <div class="case-item">
                        <div class="case-item-top">
                            <div class="case-item-title">{{item.missionName}}</div>
                            <div class="case-item-status">{{item.missionState}}</div>
                        </div>
                        <div class="grey-line-wrapper">
                            <div class="grey-line"></div>
                        </div>
                        <div class="case-item-info-line">
                            <div class="case-item-info-line-title">任务类型：</div>
                            <div class="case-item-info-line-content">{{item.missionType}}</div>
                        </div>
                        <div class="case-item-info-line">
                            <div class="case-item-info-line-title">截止时间：</div>
                            <div class="case-item-info-line-content">{{item.missionDeadline}}</div>
                        </div>
                        <div class="case-item-info-line">
                            <div class="case-item-info-line-title">交办人：</div>
                            <div class="case-item-info-line-content">{{item.creatorId}}</div>
                        </div>
                        <div class="case-item-info-line">
                            <div class="case-item-info-line-title">交办时间：</div>
                            <div class="case-item-info-line-content">{{item.createdDate}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </tk-scroll>
    </div>
</template>

<script>
    export default {
        data(){
            return	{
                caseList:[]
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>

</style>