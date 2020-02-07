<template>
	<div class="menu">
		<tk-header>
			menu菜单栏组件
		</tk-header>
		<tk-scroll>
			<tk-menu></tk-menu>
		</tk-scroll>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					title: 'a',
					list: [{
						title: 'b',
						click() {
							alert('b')
						}
					}]
				},{
					title: 'c',
					list: [{
						title: 'c'
					}]
				}]
			}
		}
	}
</script>

<style>

</style>