function shi() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://192.168.31.219:3000/useing/public', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);
                var njuzz = doT.template(document.getElementById('syzzy').innerHTML);
                document.getElementById('dzyz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
};
shi();
baty()
function tyz() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject()
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var nbhzz = JSON.parse(ajax_.responseText);
                var njuzz = doT.template(document.getElementById('syzzy').innerHTML);
                document.getElementById('dzyz').innerHTML = njuzz(nbhzz);

            } else {
                console.log('返回数据失败');
            }
        }
    }
};
var mflayz = document.getElementsByClassName('daogouzz')[0].lastElementChild.children
for (var l = 0; l < mflayz.length; l++) {

    mflayz[0].onclick = function () {
        for (var s = 0; s < mflayz.length; s++) {
            mflayz[s].className = ''
        }
        this.className = 'dgkwmzz'
        shi()
        baty()
        if (mflayz[0].className = 'dgkwmzz') {
            var mflayzy = document.getElementsByClassName('syfly')[0].lastElementChild.children
            for (var l = 0; l < mflayzy.length; l++) {

                mflayzy[0].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    shi()
                    baty()
                }
                mflayzy[1].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    tyz()
                    baty()
                }
                mflayzy[2].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    shi()
                    baty()
                    batym()
                }
                mflayzy[3].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    tyz()
                    baty()
                    batyzz()
                }
            }
        }
    }
    mflayz[1].onclick = function () {
        for (var s = 0; s < mflayz.length; s++) {
            mflayz[s].className = ''
        }
        this.className = 'dgkwmzz'
        tyz()
        baty()
        batyz()
        if (mflayz[1].className = 'dgkwmzz') {
            var mflayzy = document.getElementsByClassName('syfly')[0].lastElementChild.children
            for (var l = 0; l < mflayzy.length; l++) {

                mflayzy[0].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    shi()
                    batyz()
                }
                mflayzy[1].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    tyz()
                    batyz()
                }
                mflayzy[2].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    shi()
                    batyz()
                    batym()
                }
                mflayzy[3].onclick = function () {
                    for (var s = 0; s < mflayzy.length; s++) {
                        mflayzy[s].className = ''
                    }
                    this.className = 'dgkwmzz'
                    tyz()
                    baty()
                    batzz()
                }
            }
        }
    }

}

function batym() {
    setTimeout(function () {
        var zhxz = document.getElementsByClassName('shoufaz')
        for (var sf = 0; sf < zhxz.length; sf++) {
            zhxz[ sf].parentElement.lastElementChild.firstChild.style.color = "#82c26b";
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.color = "#82c26b";
            zhxz[sf ].nextElementSibling.nextElementSibling.firstChild.style.borderColor = "#82c26b";
            zhxz[ sf ].nextElementSibling.nextElementSibling.lastChild.style.color = "#82c26b";
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.borderColor = "#82c26b"
            if (zhxz[sf].innerHTML == "体验师转享") {
                zhxz[sf].style.backgroundColor = '#fbf2c9'
                zhxz[sf].style.color = '#c2bb91';
            }
        }
    }, 500)
}

function baty() {
    setTimeout(function () {
        var zhxz = document.getElementsByClassName('shoufaz')
        for (var sf = 0; sf < zhxz.length; sf++) {
          
            if (zhxz[sf].innerHTML == "体验师转享") {
                zhxz[sf].style.backgroundColor = '#fbf2c9'
                zhxz[sf].style.color = '#c2bb91';
                zhxz[sf].parentElement.lastElementChild.firstChild.style.color = "#d7d7d7"
                zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.color = '#d7d7d7';
                zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.borderColor = '#d7d7d7';
                zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.color = '#d7d7d7';
                zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.borderColor = '#d7d7d7'
            }
        }
    }, 500)
}
function batyz() {
    setTimeout(function () {
        var zhxz = document.getElementsByClassName('shoufaz')
        for (var sf = 0; sf < zhxz.length; sf++) {
            zhxz[sf].innerHTML = "体验师转享"
            zhxz[sf].style.backgroundColor = '#fbf2c9'
            zhxz[sf].style.color = '#c2bb91';
            if (sf > 1) {
                zhxz[2 * sf].parentElement.lastElementChild.firstChild.style.color = "#d7d7d7"
                zhxz[2 * sf].nextElementSibling.nextElementSibling.firstChild.style.color = '#d7d7d7';
                zhxz[2 * sf].nextElementSibling.nextElementSibling.firstChild.style.borderColor = '#d7d7d7';
                zhxz[2 * sf].nextElementSibling.nextElementSibling.lastChild.style.color = '#d7d7d7';
                zhxz[2 * sf].nextElementSibling.nextElementSibling.lastChild.style.borderColor = '#d7d7d7';
                zhxz[2 * sf - 1].parentElement.lastElementChild.firstChild.style.color = "#82c26b";
                zhxz[2 * sf - 1].nextElementSibling.nextElementSibling.firstChild.style.color = "#82c26b";
                zhxz[2 * sf - 1].nextElementSibling.nextElementSibling.firstChild.style.borderColor = "#82c26b";
                zhxz[2 * sf - 1].nextElementSibling.nextElementSibling.lastChild.style.color = "#82c26b";
                zhxz[2 * sf - 1].nextElementSibling.nextElementSibling.lastChild.style.borderColor = "#82c26b"
            }
        }
    }, 500)
}
function batyzz() {
    setTimeout(function () {
        var zhxz = document.getElementsByClassName('shoufaz')
        for (var sf = 0; sf < zhxz.length; sf++) {
            zhxz[sf].style.backgroundColor = '#fbf2c9'
            zhxz[sf].style.color = '#c2bb91';
            zhxz[sf].parentElement.lastElementChild.firstChild.style.color = "#d7d7d7"
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.color = '#d7d7d7';
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.borderColor = '#d7d7d7';
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.color = '#d7d7d7';
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.borderColor = '#d7d7d7';
        }
    }
        , 500)
}
function batzz() {
    setTimeout(function () {
        var zhxz = document.getElementsByClassName('shoufaz')
        for (var sf = 0; sf < zhxz.length; sf++) {
            zhxz[sf].innerHTML = "体验师转享"
            zhxz[sf].style.backgroundColor = '#fbf2c9'
            zhxz[sf].style.color = '#c2bb91';
            zhxz[sf].parentElement.lastElementChild.firstChild.style.color = "#d7d7d7"
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.color = '#d7d7d7';
            zhxz[sf].nextElementSibling.nextElementSibling.firstChild.style.borderColor = '#d7d7d7';
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.color = '#d7d7d7';
            zhxz[sf].nextElementSibling.nextElementSibling.lastChild.style.borderColor = '#d7d7d7';
        }
    }
        , 500)
}
setTimeout(function () {
    var lixy = document.getElementById('dzyz').children;
     console.log(lixy);
    for (var lix = 0; lix < lixy.length; lix++) {
        var lixyz = lixy[lix].children
        console.log(lixyz);
        lixyz[0].firstElementChild.href = './shiyongjieshao.html'

    }
}, 1000)