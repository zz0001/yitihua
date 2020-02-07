export default {
    install(Vue) {
        // 创建 自定义指令drag  el为操作的区间  modifiers修饰符 value为show的属性flase或ture
        Vue.directive("drag", (el, { modifiers, value }) => {
            //   鼠标按下时 e为鼠标数据
            el.onmousedown = function(e) {
                //  disx相对于盒子的x坐标 disY相对于盒子的y左边
                var disx = e.offsetX;
                var disy = e.offsetY;
                // 鼠标滑动时
                document.onmousemove = function(e) {
                        //  x等于相对body x轴位置减去相对于盒子位置
                        //  y等于相对body y轴位置减去相对于盒子位置
                        //  意为盒子相对于body的xy位置
                        var x = e.clientX - disx;
                        var y = e.clientY - disy;
                        //  如果show属性不是ture是 不动（没鸡毛用） 
                        if (!value) {
                            return;
                        }
                        //  如果指令是x 就x轴可以动        
                        if (value == 3) {
                            el.style.left = x + "px";
                        }
                        //  如果指令是y 就y轴可以动    
                        if (value == 2) {
                            el.style.top = y + "px";
                        }
                        //  如果指令不是x不是y都能动   
                        if (value == 1) {
                            el.style.left = x + "px";
                            el.style.top = y + "px";
                        }
                    }
                    //鼠标离开时都为空 
                document.onmouseup = function() {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        })
    }
}