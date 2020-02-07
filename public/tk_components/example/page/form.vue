<template>
	<div class="form">
		<tk-header>
			form表单组件
		</tk-header>
		<tk-form :list=list>
		</tk-form>
		<tk-switch v-model="switchVal"></tk-switch>
		<tk-button style="margin-top:20px;" @click="submit">提交</tk-button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				switchVal:false,
				list:[{
					name:'a',
					type:'input',
					placeholder:'请输入',
					maxlength:12,
					model:19
				},{
					name:'b',
					type:'select',
					model:'1',
					select:['1','2','3']
				},{
					name:'c',
					type:'selectData',
					model:new Date().toJSON().split('T')[0],
					selectTime:true
				},{
					name:'d',
					type:'selects',
					model:'请选择',
					selects:['a','b','c']
				}]
			}
		},
		methods:{
			submit(){
				
			}
		}
	}
</script>

<style>
</style>