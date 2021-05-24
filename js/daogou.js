function daohzxz() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://1.15.132.9:3000/guid/new', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);

                var njuzz = doT.template(document.getElementById('mdggjxz').innerHTML);
               
                document.getElementById('mdggjxzz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
};
daohzxz()
function daohzrz() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://1.15.132.9:3000/guid/hot', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);

                var njuzz = doT.template(document.getElementById('mdggjxz').innerHTML);
               
                document.getElementById('mdggjxzz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
};
var mflayz = document.getElementsByClassName('daogouzz')[0].lastElementChild.children
for (var l = 0; l < mflayz.length; l++) {
  
    mflayz[0].onclick = function () {
        for(var s=0;s<mflayz.length;s++){
            mflayz[s].className = ''
        }
        this.className = 'dgkwmzz'
        daohzxz()
    }
    mflayz[1].onclick = function () {
        for(var s=0;s<mflayz.length;s++){
            mflayz[s].className = ''
        }
        this.className = 'dgkwmzz'
        daohzrz()
    }
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