<template>
	<div id="application">
		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div> 
</template>

<script>
	export default {
		data() {
			return {
				transitionName: 'slide-right',
				isBack: false
			}
		},
		mounted() {
                        window.app=this;
		},
		watch: {
			$route(to, from, next) {
				var that = this;
				let isBack = that.$router.isBack;
				if(isBack){
					that.transitionName="slide-right"
				}else{
					that.transitionName="slide-left"
				}
				that.$router.isBack = false;
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	@speed:50px;
	@speed2:50px;
	@opt:0;
	.child-view {
		position: absolute;
        padding-top:50px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all .3s cubic-bezier(.55, 0, .1, 1);
	}
	.slide-disappear-enter{
		opacity:0;
	}
	.slide-disappear-leave-active{
		opacity:0
	}
	.slide-left-enter{
		opacity: @opt;
		transform: translate(@speed, 0);
	}
	.slide-right-leave-active {
		opacity: @opt;
		transform: translate(@speed2, 0);
	}
	.slide-right-enter {
		opacity: @opt;
		transform: translate(-@speed, 0);
	}
	.slide-left-leave-active{
		opacity: @opt;
		transform: translate(-@speed2, 0);
	}
	.slide-up-leave-active{
		opacity: @opt;
		transform:translate(0,-@speed2);
	}
	.slide-up-enter{
		opacity: @opt;
		transform:translate(0,@speed);
	}
	.slide-down-leave-active{
		opacity: @opt;
		transform:translate(0,@speed2);
	}
	.slide-down-enter{
		opacity: @opt;
		transform:translate(0,-@speed);
	}
</style>
