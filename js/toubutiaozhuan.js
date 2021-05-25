// 跳转
var  mtzbqz=document.getElementById('dingbu').firstElementChild.firstElementChild.children

mtzbqz[1].onclick=function(){
    mtzbqz[1].firstElementChild.href='./index.html'
}
mtzbqz[2].onclick=function(){
    mtzbqz[2].firstElementChild.href='./faxiankuwan.html'
}
mtzbqz[3].onclick=function(){
    mtzbqz[3].firstElementChild.href='./daogou.html'
}
mtzbqz[4].onclick=function(){
    mtzbqz[4].firstElementChild.href='./shiyong.html'
}
mtzbqz[5].onclick=function(){
    mtzbqz[5].firstElementChild.href='./sybg.html'
}
mtzbqz[7].onclick=function(){
    mtzbqz[7].firstElementChild.href='./regist.html'
}
mtzbqz[6].onmouseover=function(){
    mtzbqz[6].firstElementChild.style.width='28px'
    mtzbqz[6].firstElementChild.style.height='28px'
}
mtzbqz[6].onmouseout=function(){
    mtzbqz[6].firstElementChild.style.width='25px'
    mtzbqz[6].firstElementChild.style.height='25px'
}

// 跳转免费合作
var xszy=document.getElementById('youdaohangkuozhan').firstElementChild.firstElementChild.firstElementChild

xszy.onclick=function(){
    this.href='./msysh.html'

}

// 点击加载
var mcaha=document.getElementsByClassName('cahkanzz')[0].firstElementChild
var mzzjzz=document.getElementsByClassName('zhengzaijiazz')[0]
mcaha .onclick =function(){
    mzzjzz.style.display='block'
    mcaha.style.display='none'
}
mzzjzz .onclick =function(){
    mzzjzz.style.display='none'
    mcaha.style.display='block'
}
var re_1z = document.getElementById('youdaohangkuozhan').firstElementChild.children
for (var rez=0;rez<re_1z.length;rez++){
    re_1z[rez].onmouseover=function(){
    this.firstElementChild.lastElementChild.style.display='block'
    this.firstElementChild.firstElementChild.style.display='none'
}
re_1z[rez].onmouseout=function(){
    this.firstElementChild.lastElementChild.style.display='none'
    this.firstElementChild.firstElementChild.style.display='block'
}
}
// 右侧滚动条
var ksw = document.documentElement.offsetWidth;
var ksh = document.documentElement.clientHeight;
var tim;
var gdg;
//  获取返回顶部
var re_ = document.getElementById('youdaohangkuozhan')
var abfz=document.getElementsByClassName('abfz')[0]
var sdfzz=document.getElementsByClassName('sdfzz')[0]
window.onscroll = function () {
    // 页面滚动内卷高度
    gdg = document.documentElement.scrollTop;
    if (gdg > ksh) {
        re_.style.display = 'block';
        setTimeout(function(){
            sdfzz.style.display='block'
        },500)
        re_.style.left = (ksw - 100) + 'px'
        re_.style.top = (gdg + ksh - 300) + 'px'
    }
    // 点击返回
    re_.onclick = function () {
        clearInterval(tim)
        tim = setInterval(function () {
            document.documentElement.scrollTop--
            gdg--
            if (gdg <= 0) {
                clearInterval(tim);
                re_.style.display = 'none'

            }
        }, 1)
    }
}