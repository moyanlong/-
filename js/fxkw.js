function mfsxkwz() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', './json/kw.json', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbh = JSON.parse(ajax_.responseText);
                console.log(nbh);
                var nju = doT.template(document.getElementById('fhgzm').innerHTML);
                document.getElementById('kuwanzuirezz').innerHTML = nju(nbh);
            

            } else {
                console.log('返回数据失败');
            }
        }
    }
  };
  function mfsxkwzz() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', './json/kw1.json', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbh = JSON.parse(ajax_.responseText);
                console.log(nbh);
                var nju = doT.template(document.getElementById('fhgzm').innerHTML);
                document.getElementById('kuwanzuirezz').innerHTML = nju(nbh);
            

            } else {
                console.log('返回数据失败');
            }
        }
    }
  };
  mfsxkwz() 
    var mfxkplayz = document.getElementsByClassName('faxianzz')[0].lastElementChild.children
    var shplz=document.getElementById('pinleiz');
    var shplzz=document.getElementById('kuxuanranmz');
 
    for (var l = 0; l < mfxkplayz.length; l++) {
        mfxkplayz[0].onclick = function () {
            for(var s=0;s<mfxkplayz.length;s++){
                mfxkplayz[s].className = ''
            }
            this.className = 'fxkwmzz'
            mfsxkwz() 
            shplz.style.display='none'
            shplzz.style.display='block'
        }
        mfxkplayz[1].onclick = function () {
            for(var s=0;s<mfxkplayz.length;s++){
                mfxkplayz[s].className = ''
            }
            this.className = 'fxkwmzz'
            mfsxkwzz() 
            shplz.style.display='none'
            shplzz.style.display='block'
        }
        mfxkplayz[2].onclick = function () {
            for(var s=0;s<mfxkplayz.length;s++){
                mfxkplayz[s].className = ''
            }
            this.className = 'fxkwmzz'
            shplz.style.display='block'
            shplzz.style.display='none'
        }
    }
// 查看更多
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