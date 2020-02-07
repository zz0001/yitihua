<template>
	<transition name="tk-picker-fade">
		<popup
		  class="tk-pop-bottom"
	      type="picker"
	      :mask="true"
	      :center="false"
	      :z-index="100"
	      v-show="isVisible"
	      @touchmove.prevent
	      @mask-click="maskClick">
	      <transition name="tk-picker-move">
	        <div :style="{height:height+'px'}" class="tk-pop-bottom-box" v-show="isVisible" @click.stop>
	        	<pot-scroll v-if="scroll" ref="scroll">
	        		<slot></slot>
	        	</pot-scroll>
	        	<slot v-if="!scroll"></slot>
	        </div>
	      </transition>
	    </popup>
	</transition>
</template>

<script>
	import visibilityMixin from './visibility.js';
	import popup from '../popup/popup.vue'
	export default {
		mixins: [visibilityMixin],
		props:{
			scroll:{
				type:Boolean,
				default:true
			},
			height:{
				type:[String,Number],
				default:400
			}
		},
		components:{popup},
		methods:{
			maskClick(){
				this.hide()
			}
		}
	}
</script>

<style lang="less">
	.tk-pop-bottom-top{
		border-bottom:1px solid #ddd;
	}
	.tk-pop-bottom-box {
		z-index: 101;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		height:400px;
		background:#fff;
	}
	
</style>