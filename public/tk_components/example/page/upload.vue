<template>
	<div class="upload">
		<tk-header>
			upload上传资源组件
		</tk-header>
		<tk-scroll>
			<tk-upload-photo 
				v-model="photos">
			</tk-upload-photo>
			<tk-upload-audio 
				v-model="audios">
			</tk-upload-audio>
			<tk-upload-video 
				v-model="videos">
			</tk-upload-video>
		</tk-scroll>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				photos:[],
				audios:[],
				videos:[]
			}
		}
	}
</script>

<style>
</style>