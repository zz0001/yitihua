<style lang="less">
.tk-date {
    color: #000;
    position: absolute;
    z-index: 1000;
    bottom: 0;
    background: #fff;
    // box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.507);
    // margin: 3px;

    .events {
        span {
            font-size: 12px;
        }
    }

    * {
        color: #000;
    }

    table {
        width: 100%
    }

    ul,
    li {
        padding: 0;
        margin: 0;
        list-style: none
    }

    #calendar {
        background-color: #fff
    }

    .calendar {
        position: relative;
        font-family: chinese quote, microsoft yahei;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.74)
    }

    .calendar-header {
        background-color: #ffffff;
        padding: 11px 16px 11px 0;
        padding-left: 30px;
        border-bottom: 1px solid #ddd;

        .calendar-button {
            cursor: pointer;
            float: right;
            width: inherit;
            padding: 10px;
        }
    }

    .calendar-select {
        line-height: 1.5;
        color: rgba(0, 0, 0, .65);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline-block;
        position: relative;
        outline: 0
    }

    .calendar-table {}

    .calendar-column-header,
    .calendar-cell {
        width: 14%
    }

    .calendar-column-header {
        font-weight: 400;
        text-align: center
    }

    .calendar-table {
        table-layout: fixed
    }

    .calendar-cell {
        font-size: 12px;
        color: #26c7e9
    }

    .calendar-cell.calendar-last-month-cell,
    .calendar-cell.calendar-next-month-cell {
        color: rgba(0, 0, 0, 0.705);
        opacity: 0;
    }

    .calendar-date {
        width: 45px;
        height: 45px;
        padding-top: 10px;
    }

    .calendar-cell.calendar-thisMonth .calendar-date,
    .calendar-cell.calendar-today .calendar-date {
        border-top-color: #1890ff;
        background-color: #e6f7ff;
        border-radius: 50%
    }

    .calendar-date:hover {
        background: #bfd8bd6c;
        border-radius: 50%
    }

    .calendar-value {
        text-align: center
    }

    .calendar-content {
        text-align: center;
        height: 25px;
        overflow-x: hidden;
        overflow-y: auto;
        position: static;
        width: 100%;
        left: auto;
        bottom: auto
    }

    .calendar-select {
        font-size: 13px;
        vertical-align: middle
    }

    .btn.calendar-select-active {
        border-color: #fff;
        z-index: 2
    }

    .calendar-select:first-child {
        // margin-right: 10px
    }

    .calendar-year-select:hover,
    .calendar-month-select:hover {
        border-color: #fff
    }

    .calendar-year-text,
    .calendar-month-text {
        line-height: 28px
    }

    .calendar-icon {
        margin: 0 10px 0 0
    }

    .calendar-icon * {
        color: rgba(0, 0, 0, 0.74)
    }

    .btn {
        float: left;
        padding: 5px 10px;
        border: 1px solid #d9d9d9;
        border-radius: 4px
    }

    .btn-group {
        float: left;
        display: inline;
        padding: 0 8px
    }

    .btn-group>.btn {
        position: relative;
        float: left
    }

    .btn-group>.btn:hover {
        z-index: 2;
        border-color: #fff
    }

    .btn-group .btn+.btn {
        margin-left: -1px
    }

    .btn-group>.btn:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .btn-group>.btn:last-child:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }

    ul.dropdown-month,
    .dropdown-month li,
    ul.dropdown-year,
    .dropdown-year li {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 0
    }

    .dropdown-month.open,
    .dropdown-year.open {
        display: inline-block;
        margin-top: 1px;
        width: 150%;
        margin-left: -25%;
    }

    .dropdown-month,
    .dropdown-year {
        height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background: #fff;
        width: 50px;
        border: 1px solid #eee;
        box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
        -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175)
    }

    .dropdown-month .month-item,
    .dropdown-year .year-item {
        font-size: 12px;
        position: relative;
        display: block;
        padding: 5px 2px;
        line-height: 20px;
        font-weight: 400;
        color: rgba(0, 0, 0, .65);
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-transition: background .3s ease;
        transition: background .3s ease
    }

    .month-item:hover,
    .year-item:hover {
        background: #e6f7ff
    }

    .year-item.active {
        background-color: #fafafa;
        font-weight: 600;
        color: rgba(0, 0, 0, .65)
    }
}
</style>
<template>
<transition name="tk-picker-fade">
    <popup class="tk-pop-bottom" type="picker" :mask="true" :center="false" :z-index="100" v-show="isVisible" @touchmove.prevent @mask-click="hide">
        <transition name="tk-picker-move">
            <div v-show="isVisible" class="tk-date" ref="date">
                <div class="calendar-header">
                    <div class="calendar-select calendar-year-select">
                        <span class="calendar-year-text"> {{year}} 年</span>
                        <!-- <span class="calendar-icon"><i class="fa fa-angle-down"></i></span> -->
                        <ul id="dropdown-year" class="dropdown-year">
                        </ul>
                    </div>
                    <div class="calendar-select  calendar-month-select">
                        <span class="calendar-month-text"> {{month}}月</span>
                        <!-- <span class="calendar-icon"><i class="fa fa-angle-down"></i></span> -->
                        <ul class="dropdown-month">
                            <li v-for="item of [1,2,3,4,5,6,7,8,9,10,11,12]" class="month-item">
                                <span class="month-check">{{item}}</span>
                                <span>月</span>
                            </li>
                        </ul>
                    </div>
                    <div @click="confirm" class="calendar-button">
                        确认
                    </div>
                </div>
                <div class="calendar-body">
                    <table class="calendar-table" cellspacing="0">
                        <tbody class="calendar-tbody">
                        </tbody>
                    </table>
                </div>
            </div>
        </transition>
    </popup>
</transition>
</template>

<script>
import popup from '../popup/popup.vue'
import $ from 'jquery';
export default {
    name: 'tk-date',
    components: {
        "popup": popup
    },
    props: {
        sign: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            year: '',
            month: '',
            timeChoose: "",
            isVisible: false
        }
    },
    methods: {
        hide() {
            this.isVisible = false;
        },
        show() {
            this.isVisible = true;
        },
        confirm() {
            this.hide();
            console.log(this.timeChoose)
            this.$emit('confirm', this.timeChoose)
        }
    },
    mounted() {
        var that = this;
        var viewData = {};
        var Calendar = function (element, options) {
            this.el = $(element);
            this.options = $.extend(true, {}, this.options, options);
            that.$nextTick(() => {
                this.init();
            })

        }
        Calendar.prototype = {
            options: {
                mode: "month",
                weekMode: ["一", "二", "三", "四", "五", "六", "日"],
                newDate: new Date(),
                width: null,
                height: null,
                shwoLunar: false,
                showModeBtn: true,
                showEvent: true,
                maxEvent: null
            },
            init: function () {
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;
                that.year = year;
                that.month = month;
                var me = this,
                    el = me.el,
                    opts = me.options;
                el.addClass("calendar");
                opts.width = el.width();
                opts.height = el.height();
                typeof (opts.newDate) == "string" ? opts.newDate = me._getDateByString(opts.newDate): "";
                me._createCalendar();
                el.on("click", ".calendar-mode-select .btn", function (e) {
                    e.stopPropagation();
                    var modeText = $(this).text();
                    var mode = modeText == "月" ? "month" : "year";
                    me.changeMode(mode);
                })
                viewData = me.viewData;
                el.on("click", ".calendar-cell", function (e) {
                    if ($(this).attr('disabled') != 'disabled') {
                        e.stopPropagation();
                        $(".dropdown-month").removeClass("open");
                        $(".dropdown-year").removeClass("open");
                        var cellDate = $(this).attr("title");
                        var year = parseInt(cellDate.split("年")[0]);
                        var month = parseInt(cellDate.split("年")[1].split("月")[0]) - 1;
                        var date = cellDate.split("年")[1].split("月")[1].split("日")[0];

                        if (date.length == 1) {
                            date = '0' + date;
                        }
                        that.timeChoose = that.year + '-' + that.month + "-" + date;
                        $('.calendar-cell').removeClass('calendar-today');
                        $(this).addClass('calendar-today');
                        if (opts.mode == "year") {
                            if (opts.cellClick) opts.cellClick.call(me, viewData[month])
                        } else if (opts.mode == "month" && month == opts.newDate.getMonth()) {
                            if (opts.cellClick) opts.cellClick.call(me, viewData[date])
                        }
                    }

                })
                el.on("click", ".calendar-year-select", function (e) {
                    e.stopPropagation();
                    $(".dropdown-month").removeClass("open");
                    $(".dropdown-year").toggleClass("open");
                    var yearText = opts.newDate.getFullYear();
                    var s = '';
                    for (var i = 0; i < 21; i++) {
                        if (i == 10) {
                            s += '<li class="year-item active">'
                        } else {
                            s += '<li class="year-item">'
                        }
                        s += '<span class="year-check">' + (yearText - 10 + i) + '</span>'
                        s += '<span >年</span>'
                        s += '</li>'
                    }
                    me.el.find(".dropdown-year").html(s);
                })
                el.on("click", ".year-item", function (e) {
                    e.stopPropagation();
                    $(".dropdown-year").removeClass("open");
                    var yearText = $(this).text();
                    var yearNum = yearText.split("年")[0];
                    if (yearNum == opts.newDate.getFullYear()) return;
                    opts.newDate.setFullYear(yearNum);
                    opts.mode == "month" ? me._refreshCalendar(opts.newDate) : me._refreshYearCalendar(opts.newDate);
                    that.year = yearText;
                    $(".calendar-year-text").text(yearText);
                })
                el.on("click", ".calendar-month-select", function (e) {
                    e.stopPropagation();
                    $(".dropdown-year").removeClass("open");
                    $(".dropdown-month").toggleClass("open");
                })
                el.on("click", ".month-item", function (e) {
                    e.stopPropagation();
                    $(".dropdown-month").removeClass("open");
                    var monthText = $(this).text();
                    var monthNum = monthText.split("月")[0];
                    if (monthNum == (opts.newDate.getMonth() + 1)) return;
                    var beforeDate = opts.newDate.getDate();
                    opts.newDate.setMonth(monthNum - 1);
                    var afterDate = opts.newDate.getDate();
                    if (beforeDate != afterDate) {
                        opts.newDate.setDate(opts.newDate.getDate() - 1);
                    }
                    me._refreshCalendar(opts.newDate);
                    if (monthNum.length == 1) {
                        that.month = '0' + monthNum;
                    }

                    $(".calendar-month-text").text(monthText);
                })
                $(document.body).on("click", function (e) {
                    $(".dropdown-month").removeClass("open");
                    $(".dropdown-year").removeClass("open");
                })
            },
            changeMode: function (mode) {
                var me = this;
                if (mode == me.options.mode) return;
                me.options.mode = mode;
                me._createCalendar();
            },
            getViewDate: function (viewDate) {
                var me = this,
                    opts = me.options,
                    mode = opts.mode,
                    data = opts.data;
                if (!data || data.length == 0) return [];
                var viewData = {},
                    modeYear = viewDate.getFullYear(),
                    modeMonth = null;
                if (mode == "month") {
                    modeMonth = viewDate.getMonth()
                };
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    var start = me._getDateByString(item.startDate);
                    var year = start.getFullYear();
                    var month = start.getMonth();
                    var date = start.getDate();
                    if (modeMonth && year == modeYear && modeMonth == month) {
                        if (!viewData[date]) viewData[date] = [];
                        viewData[date].push(item);
                    } else if (!modeMonth && year == modeYear) {
                        if (!viewData[month]) viewData[month] = [];
                        viewData[month].push(item);
                    }
                }
                return viewData;
            },
            _getDateByString: function (stringDate) {
                var me = this;
                var year = stringDate.split("-")[0];
                var month = parseInt(stringDate.split("-")[1]) - 1;
                var date = stringDate.split("-")[2];
                return new Date(year, month, date);
            },
            _createCalendar: function () {
                var me = this;
                var dateMode = me.options.mode;
                me._createView()
            },
            _createView: function () {
                var me = this,
                    el = me.el,
                    opts = me.options,
                    mode = opts.mode,
                    newDate = opts.newDate;
                me._refreshCalendar(newDate);
            },
            _createToolbar: function () {
                var me = this,
                    newDare = me.options.newDate,
                    mode = me.options.mode,
                    showModeBtn = me.options.showModeBtn,
                    s = '';
                var year = newDare.getFullYear();
                var month = newDare.getMonth() + 1;
                that.year = year;
                that.month = month;
                return s;
            },
            _createHeader: function () {
                var me = this,
                    opts = me.options,
                    weekMode = opts.weekMode;
                var s = '<thead><tr>'
                weekMode.forEach(function (item) {
                    s += ' <th class="calendar-column-header" title="周' + item + '"><span class="calendar-column-header-inner">' + item + '</span></th>'
                })
                s += '</thead></tr>'
                return s;
            },
            _createBody: function () {
                var me = this;
                var s = ' <tbody class="calendar-tbody">'
                s += '</tbody>'
                return s;
            },
            _refreshYearCalendar: function (newDate) {
                var me = this,
                    showEvent = me.options.showEvent,
                    maxEvent = me.options.maxEvent,
                    s = '';
                me.viewData = viewData = me.getViewDate(newDate);
                var year = newDate.getFullYear(),
                    month = newDate.getMonth();
                for (var i = 0; i < 4; i++) {
                    s += '<tr>'
                    for (var l = 0; l < 3; l++) {
                        renderMonth = i * 3 + l;
                        if (month == renderMonth) {
                            s += '<td title="' + year + '年' + (renderMonth + 1) + '月" class="calendar-cell calendar-thisMonth">';
                        } else {
                            s += '<td title="' + year + '年' + (renderMonth + 1) + '月" class="calendar-cell">';
                        }
                        s += '<div class="calendar-date">';
                        s += '<div class="calendar-value">' + (renderMonth + 1) + '月</div>';
                        s += '<div class="calendar-content"><ul class="events">'
                        if (showEvent && viewData[renderMonth]) {
                            if (maxEvent && viewData[renderMonth].length > maxEvent) {
                                s += viewData[renderMonth].length + "个事件";
                            } else {
                                viewData[renderMonth].forEach(function (item) {
                                    s += '<li><span>' + item.name + '</span></li>'
                                })
                            }
                        }
                        s += '</ul ></div > ';
                        s += '</div></td>';
                    }
                    s += '</tr>'
                }
                me.el.find(".calendar-tbody").html(s);
            },
            _refreshCalendar: function (newDate) {
                var me = this,
                    showEvent = me.options.showEvent,
                    maxEvent = me.options.maxEvent,
                    s = '';
                me.viewData = viewData = me.getViewDate(newDate);
                var _newDate = me._cloneDate(newDate);
                var nowNum = _newDate.getDate();
                that.timeChoose = new Date().toJSON().split('T')[0];
                _newDate.setDate(1);
                var weekDay = _newDate.getDay() == 0 ? 7 : _newDate.getDay();
                var viewDate = me._cloneDate(_newDate);
                viewDate.setDate(viewDate.getDate() - weekDay + 1);
                var spileDate = (newDate.getTime() - viewDate.getTime()) / (1000 * 60 * 60 * 24);
                var renderDate = me._cloneDate(viewDate);
                for (var i = 0; i < 6; i++) {
                    s += '<tr>'
                    for (var l = 0; l < 7; l++) {
                        var year = renderDate.getFullYear();
                        var month = renderDate.getMonth() + 1;
                        var date = renderDate.getDate();
                        if (renderDate.getMonth() < newDate.getMonth()) {
                            s += '<td title="' + year + '年' + month + '月' + date + '日" disabled class="calendar-cell calendar-last-month-cell">';
                        } else if (renderDate.getMonth() > newDate.getMonth()) {
                            s += '<td title="' + year + '年' + month + '月' + date + '日" disabled class="calendar-cell calendar-next-month-cell">';
                        } else if (date == nowNum) {
                            s += '<td title="' + year + '年' + month + '月' + date + '日" class="calendar-cell calendar-today">';
                        } else {
                            s += '<td title="' + year + '年' + month + '月' + date + '日" class="calendar-cell">';
                        }
                        s += '<div class="calendar-date">';
                        s += '<div class="calendar-value">' + date + '</div>';
                        s += '<div class="calendar-content"><ul class="events">'
                        if (showEvent && viewData[date] && renderDate.getMonth() == newDate.getMonth()) {
                            if (maxEvent && viewData[date].length > maxEvent) {
                                s += viewData[date].length + "个事件";
                            } else {
                                viewData[date].forEach(function (item) {
                                    s += '<li><span>' + item.name + '</span></li>'
                                })
                            }
                        }
                        s += '</ul ></div > ';
                        s += '</div></td>';
                        renderDate.setDate(renderDate.getDate() + 1);
                    }
                    s += '</tr>'
                }
                me.el.find(".calendar-tbody").html(s);
            },
            _cloneDate: function (date) {
                return new Date(date.getFullYear(), date.getMonth(), date.getDate());
            },
        }
        $.fn.calendar = function (options) {
            var isSTR = typeof options == "string",
                args, ret;
            if (isSTR) {
                args = $.makeArray(arguments)
                args.splice(0, 1);
            }
            var name = "calendar",
                type = Calendar;
            var jq = this.each(function () {
                var ui = $.data(this, name);
                if (!ui) {
                    ui = new type(this, options);
                    $.data(this, name, ui);
                }
                if (isSTR) {
                    ret = ui[options].apply(ui, args);
                }
            });
            return isSTR ? ret : jq;
        };
        $(this.$refs.date).calendar({
            data: that.sign,
            mode: "month",
            maxEvent: 5,
            showModeBtn: false,
            //  newDate: "2018-04-1",
            cellClick: function (events) {
                console.log(events)
                //viewCell的事件列表
            },
        })
    }
}
</script>
