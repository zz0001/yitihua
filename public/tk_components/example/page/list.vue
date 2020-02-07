<template>
	<div class="list">
		<tk-header>
			list类组件及search组件
			<!--<span @click="$router.push('/list-doc')" slot="right">文档</span>-->
		</tk-header>
		<tk-search v-model="searchTxt"></tk-search>
		<tk-scroll>
			
			<tk-cell-four
				:key=index
				:data="{
					'title':item.title,
					'status':item.status,
					'content':item.content,
					'time':item.time
				}"
				:filter="searchTxt"
				v-for="(item,index) of d"
				></tk-cell-four>
		</tk-scroll>
	</div>
</template>

<script>
var json=[{
			title:'title1',
			status:'status1',
			content:"content1",
			time:"time1"
		},{
			title:'title2',
			status:'status2',
			content:"content2",
			time:"time2"
		},{
			title:'title3',
			status:'status3',
			content:"content3",
			time:"time3"
		}]
	export default {
		data(){
			return {
				searchTxt:'',
				d:[]
			}
		},
		mounted(){
			setTimeout(()=>{
				this.d=json.concat(json).concat(json)
			},0)
		}
	}
</script>

<style lang="less">
	.menus{
		div:last-child{
			width:calc( 25% - 4px );
			text-align: center;
			font-size:80px;
		}
	}
	.header{
		background:#000;
		text-align:center;
		height:50px;
		line-height:50px;
		color:#fff;
	}
	.tk-scroll{
		height:calc(100vh - 50px);
	}
</style>