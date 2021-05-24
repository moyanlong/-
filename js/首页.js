// 渲染数据
// 热门精选
(function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);
  console.log(nbhzz);
                var njuzz = doT.template(document.getElementById('fhgffzz').innerHTML);

                document.getElementById('liszz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
})();

// 报告精选
(function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://192.168.31.219:3000/report/hot', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);

                var njuzz = doT.template(document.getElementById('mbgjxz').innerHTML);
   
                document.getElementById('mbgjxzz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
})();
// 导购精选
(function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://192.168.31.219:3000/guid/hot', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);

                var njuzz = doT.template(document.getElementById('mdgjxz').innerHTML);
               
                document.getElementById('mdgjxzz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
})();
// 发现酷玩
(function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', './json/kw.json', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);

                var njuzz = doT.template(document.getElementById('fakwmz').innerHTML);
               
                document.getElementById('faxianxzz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
})();
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

// 轮播图部分
setTimeout(function(){
var xzz = 0;
var timzz = null;
var tim1zz = null;
var img1zz = document.getElementById('liszz').children;
console.log( img1zz );
var innerzz = document.getElementsByClassName('mlistzzz')[0];
function gund() {
    timzz = setInterval(function () {
        xzz++;
        if (xzz >= img1zz.length) {
            xzz = 0
        }
        gogozz();
      
      
    }, 1000)
}
gund()

function gogozz(){
    clearInterval(tim1zz)
    var step = 0;
        var maxStep =18
        var start = innerzz.scrollLeft;
        var end = img1zz[0].offsetWidth * xzz;
        var everystep = (end - start) / maxStep;
       
        tim1zz = setInterval(function () {
            step++
            if (step >= maxStep) {
                step = 0;

                clearInterval(tim1zz)
            }
            start += everystep;
            innerzz.scrollLeft = start;
        }, 15)
}
},2000)

// 专享
setTimeout(function(){
   var zhxz=document.getElementsByClassName('shoufaz')
   console.log(zhxz[0].innerHTML);
    for(var sf=0;sf<zhxz.length;sf++){
        if(zhxz[sf].innerHTML=="体验师转享"){
            zhxz[sf].style.backgroundColor ='#fbf2c9'
            zhxz[sf].style.color ='#c2bb91';
            zhxz[sf].parentElement.lastElementChild.firstChild.style.color="#82c26b"
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.color='#82c26b';
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.borderColor='#82c26b';
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.color='#82c26b';
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.borderColor='#82c26b'
        }
    }

},2000)
var shqzz=document.getElementsByClassName('shqzz')[0];
var shqiz=document.getElementsByClassName('shqiz')[0];
var sqzz=document.getElementsByClassName('sqzz')[0];
var numz=1
sqzz .onclick=function(){
    
    var az=shqzz.innerHTML.split('人')[0]-0;
    var bz=shqiz.innerHTML.split('台')[0]-0;
    shqzz.innerHTML=(az+numz)+'人申请'
    shqiz.innerHTML=(bz-numz)+'台'
    if(bz-numz<=0){
        numz=0
        sqzz.innerHTML='申请结束'
    }
}
var nuj=setInterval(function(){
    var new_div=document.getElementsByClassName('shijianz')[0];
    var date=new Date();
    var date1=new Date(2021,4,26,);
    var num1=date1-date;
    var day1=Math.floor(num1/1000/60/60/24) ;
    var shi=Math.floor(num1/1000/60/60%24);
    var fen=Math.floor(num1/1000/60%60);
    var ss=Math.floor(num1/1000%60);
    if(day1==0&&shi==0&&fen==0&&ss==0){
       clearInterval(nuj)
   }
   shi>= 10 ? shi: shi= ('0' + shi);
   fen >= 10 ? fen : fen = ('0' + fen);
   ss >= 10 ? ss : ss = ('0' + ss);
    new_div.innerHTML=('申请时间剩余:'+day1+'天'+shi+'时'+fen+'分'+ss+'秒')
},1000) 

var ckgdz=document.getElementsByClassName('ckgdz');
ckgdz[0].onclick=function(){
    ckgdz[0].href='./体验报告-最新.html'
}
ckgdz[1].onclick=function(){
    ckgdz[1].href='./daogou.html'
}

ckgdz[2].onclick=function(){
    ckgdz[2].href='./faxiankuwan.html'
}
