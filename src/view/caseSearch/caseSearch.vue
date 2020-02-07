<template>
    <div class="case-search">
        <tk-header>案件查询</tk-header>

        <tk-search v-model="searchTxt"></tk-search>
        <tk-scroll>
            <tk-cell-one v-for="(item,index) of caseList" :key="index" :filter="searchTxt" @click="cellClick(index)">
				<p>{{ item.title }}</p>
				<p>{{ item.address }}</p>
				<p><span>{{ item.time }}</span> | <span>{{ item.status }}</span></p>
			</tk-cell-one>
        </tk-scroll>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchTxt: "",
            caseList: []
        };
    },
    mounted() {
        
    },
    created() {
		axios.post('/api/caseList').then(d => {
			this.caseList = d.map(item => item)
		})
	},
    methods: {
		cellClick(index){
			this.$router.push({
                path: 'handleCase',
                query: {
                    id: index
                }
            });
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.case-search{
	width: 100vw;
	height: 100vh;
	p{
		height: 35px;
		line-height: 35px;
	}
}
</style>