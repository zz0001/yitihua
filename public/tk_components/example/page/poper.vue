<template>
	<div class="poper">
		<tk-header>
			poper弹出层组件
		</tk-header>
		<tk-scroll>
			<tk-button @click="alert" style="margin-top:10px;">
				警告框组件
			</tk-button>
			<!--<tk-button @click="confirm" style="margin-top:10px;">
				确认组件
			</tk-button>-->
			<tk-button @click="popRight" style="margin-top:10px;">
				右弹出组件
			</tk-button>
		</tk-scroll>
		<tk-pop-right ref="popRight">
			<tk-filter style="padding-top:20px;" name="筛选">
				<span @click="a=0,b=0,c=0,d=0" class="right" slot="right">重置</span>
				<tk-filter-item v-model="a" :select="['a','b ','c','d','e']" name="a">
				</tk-filter-item>
				<tk-filter-item v-model="b" :select="['a','b','c']" name="b">
				</tk-filter-item>
				<tk-filter-item v-model="c" :select="['a','b','c','d']" name="c">
				</tk-filter-item>
				<tk-filter-item v-model="d" :select="['a','b']" name="d">
				</tk-filter-item>
			</tk-filter>
		</tk-pop-right>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				a: '',
				b: '',
				c: '',
				d: ''
			}
		},
		watch: {
		},
		methods: {
			alert() {
				this.$createPotDialog({
					type: 'alert',
					title: '温馨提示',
					content: '暂无历史纪录',
					icon: 'potic-alert'
				}).show()
			},
			confirm() {

			},
			popRight() {
				this.$refs.popRight.show()
			}
		}
	}
</script>

<style>

</style>