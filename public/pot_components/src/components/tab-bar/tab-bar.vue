<template>
  <div class="pot-tab-bar" :class="{'pot-tab-bar_inline': inline}">
    <slot>
      <pot-tab
        v-for="(item, index) in data"
        :label="item.label"
        :icon="item.icon"
        :key="item.label">
      </pot-tab>
    </slot>
    <div v-if="showSlider" ref="slider" class="pot-tab-bar-slider"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import { findIndex } from '../../common/helpers/util'
  import potTab from './tab.vue'

  const COMPONENT_NAME = 'pot-tab-bar'

  const EVENT_INPUT = 'input'
  const EVENT_CHANGE = 'change'
  const EVENT_CLICK = 'click'

  const TRANSFORM = prefixStyle('transform')
  const TRANSITION = prefixStyle('transition')

  export default {
    name: COMPONENT_NAME,
    components: {
      potTab
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      data: {
        type: Array,
        default () {
          return []
        }
      },
      inline: {
        type: Boolean,
        default: false
      },
      showSlider: {
        type: Boolean,
        default: false
      },
      useTransition: {
        type: Boolean,
        default: true
      }
    },
    created () {
      this.tabs = []
    },
    mounted () {
      this._updateSliderStyle()
      window.addEventListener('resize', this._resizeHandler)
    },
    activated() {
      /* istanbul ignore next */
      window.addEventListener('resize', this._resizeHandler)
    },
    deactivated() {
      /* istanbul ignore next */
      this._cleanUp()
    },
    beforeDestroy () {
      /* istanbul ignore next */
      this._cleanUp()
    },
    methods: {
      addTab (tab) {
        this.tabs.push(tab)
      },
      removeTab (tab) {
        const index = this.tabs.indexOf(tab)
        if (index > -1) this.tabs.splice(index, 1)
      },
      trigger (label) {
        // emit click event as long as tab is clicked
        this.$emit('click', label)
        // only when value changed, emit change & input event
        if (label !== this.value) {
          const changedEvents = [EVENT_INPUT, EVENT_CHANGE]
          changedEvents.forEach((eventType) => {
            console.log(eventType,label)
            this.$emit(eventType, label)
          })
        }
      },
      _updateSliderStyle () {
        /* istanbul ignore if */
        if (!this.showSlider) return
        const slider = this.$refs.slider
        this.$nextTick(() => {
          const { width, index } = this._getSliderWidthAndIndex()
          slider.style.width = `${width}px`;
          this.setSliderTransform(this._getOffsetLeft(index))
        })
      },
      setSliderTransform (offset) {
        const slider = this.$refs.slider
        if (typeof offset === 'number') {
          offset = `${offset}px`
        }
        if (slider) {
          if (this.useTransition) slider.style[TRANSITION] = `${TRANSFORM} 0.2s linear`
          slider.style[TRANSFORM] = `translateX(${offset}) translateZ(0)`
        }
      },
      _getSliderWidthAndIndex () {
        let width = 0
        let index = 0
        if (this.tabs.length > 0) {
          index = findIndex(this.tabs, (tab) => tab.label === this.value)
          width = this.tabs[index].$el.clientWidth
        }
        return {
          width,
          index
        }
      },
      _getOffsetLeft (index) {
        let offsetLeft = 0
        this.tabs.forEach((tab, i) => {
          if (i < index) offsetLeft += tab.$el.clientWidth
        })
        return offsetLeft
      },
      _resizeHandler () {
        clearTimeout(this._resizeTimer)
        this._resizeTimer = setTimeout(() => {
          this._updateSliderStyle()
        }, 60)
      },
      _cleanUp () {
        clearTimeout(this._resizeTimer)
        window.removeEventListener('resize', this._resizeHandler)
      }
    },
    watch: {
      value () {
        this._updateSliderStyle()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .pot-tab-bar
    position: relative
    display: flex
    align-items: center
    justify-content: center

  .pot-tab-bar_inline
    .pot-tab
      display: flex
      align-content: center
      justify-content: center

  .pot-tab-bar-slider
    position: absolute
    left: 0
    bottom: 0
    height: 2px
    width: 20px
    background-color: $tab-slider-bgc
</style>
