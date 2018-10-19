$(function() {

});

//这里放入执行代码
var scrollFunc = function (e) {  
    e = e || window.event; 
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop 
    if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件               
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            // console.log("滑轮向上滚动");  
            if(scrollTop<50) {
                // document.querySelector('header').classList.remove("header-nav")
                document.querySelector('header').classList.add("header-nav-leave")
            }
        }  
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            if(scrollTop>0) {
                // document.querySelector('header').classList.remove("header-nav-leave")
                document.querySelector('header').classList.add("header-nav")
            }
            
        }  
    } else if (e.detail) {  //Firefox滑轮事件  
        if (e.detail< 0) { //当滑轮向上滚动时  
            // console.log("滑轮向上滚动");  
            if(scrollTop<50) {
                // document.querySelector('header').classList.remove("header-nav")
                document.querySelector('header').classList.add("header-nav-leave")
            }
        }  
        if (e.detail> 0) { //当滑轮向下滚动时  
            if(scrollTop>0) {
                // document.querySelector('header').classList.remove("header-nav-leave")
                document.querySelector('header').classList.add("header-nav")
            }
        }  
    }  
}
//给页面绑定滑轮滚动事件  
if (document.addEventListener) {//firefox  
    document.addEventListener('DOMMouseScroll', scrollFunc, false);  
}  
//滚动滑轮触发scrollFunc方法  //ie 谷歌  
window.onmousewheel = document.onmousewheel = scrollFunc;