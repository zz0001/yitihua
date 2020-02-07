<template>
	<div class="image">
		<tk-header>
			image图片组件
		</tk-header>
		<tk-scroll>
			<tk-detail-photo :list=list>
			</tk-detail-photo>
		</tk-scroll>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				list:[{
					src:require('../image/ch01.jpg')
				},{
					src:require('../image/ch02.jpg')
				},{
					src:require('../image/ch03.jpg')
				}]
			}
		}
	}
</script>

<style>
</style>