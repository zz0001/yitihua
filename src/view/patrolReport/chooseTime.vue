<template>
    <div>
        <tk-header>选择时间</tk-header>
        <tk-container>
            <div class="pot-picker-panel pot-safe-area-pb" v-show="true" @click.stop>
                <div class="pot-picker-choose border-bottom-1px">
                    <span class="pot-picker-cancel" @click=""></span>
                    <span class="pot-picker-confirm" @click=""></span>
                    <div class="pot-picker-title-group">
                        <h1 class="pot-picker-title" v-html="" v-show="false"></h1>
                        <h2 v-if="false" class="pot-picker-subtitle" v-html=""></h2>
                    </div>
                </div>
                <div class="pot-picker-content">
                    <i class="border-bottom-1px"></i>
                    <i class="border-top-1px"></i>
                    <div class="pot-picker-wheel-wrapper" ref="wheelWrapper">
                        <div v-for="(data,index) in cascadeData" :key="index">
                            <!-- The class name of the ul and li need be configured to BetterScroll. -->
                            <ul class="pot-picker-wheel-scroll">
                                <li v-for="(item,index) in data" class="pot-picker-wheel-item" :key="index">
                                    <span v-html="item[textKey]"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="pot-picker-footer"></div>
            </div>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import basicPickerMixin from '../../../public/pot_components/src/common/mixins/basic-picker'
    import {
        pad,
        formatDate,
        getZeroStamp,
        getDayDiff,
        DAY_TIMESTAMP,
        HOUR_TIMESTAMP,
        MINUTE_TIMESTAMP
    } from '../../../public/pot_components/src/common/lang/date'
    import visibilityMixin from '../../../public/pot_components/src/common/mixins/visibility'
    import popupMixin from '../../../public/pot_components/src/common/mixins/popup'
    import pickerMixin from '../../../public/pot_components/src/common/mixins/picker'
    import localeMixin from '../../../public/pot_components/src/common/mixins/locale'
    import potCascadePicker from '../../../public/pot_components/src/components/cascade-picker/cascade-picker.vue'
    import {warn} from '../../../public/pot_components/src/common/helpers/debug'

    const EVENT_SELECT = 'select';
    const EVENT_CANCEL = 'cancel';
    const EVENT_CHANGE = 'change';

    const NOW = {
        value: 'now'
    }

    const INT_RULE = {
        floor: 'floor',
        ceil: 'ceil',
        round: 'round'
    }

    const DEFAULT_STEP = 10

    export default {
        name: "chooseTime",
        mixins: [visibilityMixin, popupMixin, basicPickerMixin, pickerMixin, localeMixin],
        props: {
            title: {
                type: String,
                default: ''
            },
            delay: {
                type: Number,
                default: 15
            },
            day: {
                type: Object,
                default() {
                    return {
                        len: 3
                    }
                }
            },
            showNow: {
                type: [Boolean, Object],
                default: true
            },
            minuteStep: {
                type: [Number, Object],
                default: DEFAULT_STEP
            },
            format: {
                type: String,
                default: 'YYYY/M/D hh:mm'
            }
        },
        data() {
            return {
                pickerData: [],
                now: new Date(),
                value: 0,
            }
        },
        created() {

        },
        mounted() {

        },
        computed: {
            _day() {
                const defaultDay = {
                    filter: [this.$t('today')],
                    format: this.$t('formatDate')
                };
                return Object.assign({}, defaultDay, this.day)
            },
            nowText() {
                const defaultText = this.$t('now');
                return (this.showNow && this.showNow.text) || defaultText
            },
            minuteStepRule() {
                const minuteStep = this.minuteStep;
                return (typeof minuteStep === 'object' && Math[INT_RULE[minuteStep.rule]]) || Math[INT_RULE.floor]
            },
            minuteStepNumber() {
                const minuteStep = this.minuteStep
                return typeof minuteStep === 'number' ? minuteStep : (minuteStep.step || DEFAULT_STEP)
            },
            minTime() {
                let minTimeStamp = +this.now + this.delay * MINUTE_TIMESTAMP

                // Handle the minTime selectable change caused by minute step.
                const minute = new Date(minTimeStamp).getMinutes()
                const intMinute = this.minuteStepRule(minute / this.minuteStepNumber) * this.minuteStepNumber
                if (intMinute >= 60) {
                    minTimeStamp += (60 - minute) * MINUTE_TIMESTAMP
                }

                return new Date(minTimeStamp)
            },
            days() {
                const days = [];
                const dayDiff = getDayDiff(this.minTime, this.now)

                for (let i = 0; i < this._day.len; i++) {
                    const timestamp = +this.minTime + i * DAY_TIMESTAMP
                    days.push({
                        value: timestamp,
                        text: (this._day.filter && this._day.filter[dayDiff + i]) || formatDate(new Date(timestamp), this._day.format)
                    })
                }
                return days
            },
            hours() {
                const hours = [];
                for (let i = 0; i < 24; i++) {
                    hours.push({
                        value: i,
                        text: `${i}${this.$t('hours')}`,
                        children: this.minutes
                    })
                }
                return hours
            },
            partHours() {
                const partHours = this.hours.slice(this.minTime.getHours());
                partHours[0] = Object.assign({}, partHours[0], {children: this.partMinutes});

                if (this.showNow) {
                    partHours.unshift({
                        value: NOW.value,
                        text: this.nowText,
                        children: []
                    })
                }
                return partHours
            },
            minutes() {
                const minutes = [];
                for (let i = 0; i < 60; i += this.minuteStepNumber) {
                    minutes.push({
                        value: i,
                        text: `${pad(i)}${this.$t('minutes')}`
                    })
                }
                return minutes
            },
            partMinutes() {
                const begin = this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber)
                return this.minutes.slice(begin)
            },
            cascadeData() {
                const data = this.days.slice();
                data.forEach((item, index) => {
                    item.children = index ? this.hours : this.partHours
                })
                console.log('进入cascadeData')
                console.log(data)
                return data
            }
        },
        methods: {
            setTime(value) {
                this.value = value
                this.isVisible && this._updateSelectedIndex()
            },
            _updateSelectedIndex() {
                const value = this.value
                const minTime = this.minTime

                if (value <= +minTime) {
                    this.selectedIndex = [0, 0, 0]
                } else {
                    // calculate dayIndex
                    const valueDate = new Date(value)
                    const dayIndex = getDayDiff(valueDate, minTime)

                    if (dayIndex >= this.days.length) {
                        warn('Use "setTime" to set a time exceeded to the option range do not actually work.', COMPONENT_NAME)
                        return
                    }

                    // calculate hourIndex
                    const hour = valueDate.getHours()
                    const beginHour = dayIndex === 0
                        ? this.showNow ? this.minTime.getHours() - 1 : this.minTime.getHours()
                        : 0
                    const hourIndex = hour - beginHour

                    // calculate minuteIndex
                    const minute = this.minuteStepRule(valueDate.getMinutes() / this.minuteStepNumber)
                    const beginMinute = !dayIndex && (this.showNow ? hourIndex === 1 : !hourIndex)
                        ? this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber)
                        : 0
                    const minuteIndex = minute - beginMinute

                    this.selectedIndex = [dayIndex, hourIndex, minuteIndex]
                }
            },
            _updateNow() {
                this.now = new Date()
            },
            _pickerChange(i, newIndex) {
                this.$emit(EVENT_CHANGE, i, newIndex)
            },
            _pickerSelect(selectedVal, selectedIndex, selectedText) {
                let timestamp
                let text
                if (selectedVal[1] === NOW.value) {
                    timestamp = +new Date()
                    text = this.nowText
                } else {
                    timestamp = getZeroStamp(new Date(selectedVal[0])) + selectedVal[1] * HOUR_TIMESTAMP + selectedVal[2] * MINUTE_TIMESTAMP
                    text = selectedText[0] + ' ' + selectedText[1] + ':' + selectedText[2]
                }

                this.value = timestamp
                const formatedTime = formatDate(new Date(timestamp), this.format)
                this.$emit(EVENT_SELECT, timestamp, text, formatedTime)
            },
            _pickerCancel() {
                this.$emit(EVENT_CANCEL)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @require "../../../public/pot_components/src/common/stylus/mixin.styl"
    @require "../../../public/pot_components/src/common/stylus/variable.styl"
    @import "../../../public/pot_components/src/components/picker/picker.less"
    $picker-lr-padding = 16px

    .pot-picker-fade-enter, .pot-picker-fade-leave-active
        opacity: 0

    .pot-picker-fade-enter-active, .pot-picker-fade-leave-active
        transition: all .3s ease-in-out

    .pot-picker-panel
        height: 273px
        text-align: center
        font-size: $fontsize-medium
        background: $picker-bgc

    .pot-picker-move-enter, .pot-picker-move-leave-active
        transform: translate3d(0, 100%, 0)

    .pot-picker-move-enter-active, .pot-picker-move-leave-active
        transition: all .3s ease-in-out

    .pot-picker-choose
        position: relative
        height: 60px

    .pot-picker-confirm, .pot-picker-cancel
        font-size: $fontsize-medium
        line-height: 60px
        padding: 0 $picker-lr-padding
        box-sizing: content-box
        font-size: $fontsize-medium

    .pot-picker-confirm
        position: absolute
        right: 0
        color: $picker-confirm-btn-color

        &:active
            color: $picker-confirm-btn-active-color

    .pot-picker-cancel
        position: absolute
        left: 0
        color: $picker-cancel-btn-color

        &:active
            color: $picker-cancel-btn-active-color

    .pot-picker-title-group
        padding: 0 60px
        display: flex
        height: 100%
        flex-flow: column
        justify-content: center
        text-align: center

    .pot-picker-title
        font-size: $fontsize-large-x
        line-height: 25px
        font-weight: normal
        color: $picker-title-color

    .pot-picker-subtitle
        margin-top: 2px
        line-height: 16px
        font-size: $fontsize-small
        color: $picker-subtitle-color

    .pot-picker-content
        position: relative
        top: 20px

        > i
            position: absolute
            z-index: 10
            left: 0
            width: 100%
            height: 68px
            pointer-events: none
            transform: translateZ(0)

        > .border-bottom-1px
            top: 0
            background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))

        > .border-top-1px
            bottom: 0
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))

    .pot-picker-wheel-wrapper
        display: flex
        padding: 0 $picker-lr-padding

        > div
            flex-fix()
            height: 173px
            overflow: hidden
            font-size: $fontsize-large-xx

    .pot-picker-wheel-scroll
        padding: 0
        margin-top: 68px
        line-height: 36px
        list-style: none

    .pot-picker-wheel-item
        list-style: none
        height: 36px
        overflow: hidden
        white-space: nowrap
        color: $picker-item-color

    .pot-picker-footer
        height: 20px

</style>
