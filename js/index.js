function cyh() {
    document.getElementById('n1').style.visibility = 'hidden'
    document.getElementById('n2').style.visibility = 'hidden'
    document.getElementById('n3').style.visibility = 'hidden'
    document.getElementById('n4').style.visibility = 'hidden'
    document.getElementById('n5').style.visibility = 'hidden'
    document.getElementById('dz').style.visibility = 'hidden'
    document.getElementById('sc').style.visibility = 'hidden'
    document.getElementById('n6').style.visibility = 'hidden'
    document.getElementById('n7').style.visibility = 'hidden'
    document.getElementById('n8').style.visibility = 'hidden'
    document.getElementById('tx').style.visibility = 'hidden'
    document.getElementById('n9').style.visibility = 'hidden'
}
var user=0         //判断是否登录

document.querySelector('.clos').onclick = function () {
    console.log(1111);
    document.getElementById('div0').style.visibility = 'hidden'
}
function show_d() {
    document.getElementById('div0').style.visibility = 'visible'
}


let yzm = 0
function hqyz() {
    if (isnum()) {
        let randomNumber = Math.random();
        yzm = Math.floor(randomNumber * 1000000);
        alert("获取的验证码:" + yzm);
    }
}
function onLogin() {
    var username = document.getElementById("name"); // 获取用户名
    var userpwd = document.getElementById("pass"); // 获取密码
    if (username.value == "") {
        alert("请输入用户名！");
        username.focus();
    } else if (userpwd.value == "") {
        alert("请输入验证码！");
        userpwd.focus();
    } else if (userpwd.value == yzm) {
        alert("登录成功！！！");
        document.getElementById('div0').style.visibility = 'hidden'
        document.getElementById('tx').style.visibility = 'visible'
        user=1
    } else {
        alert("验证码错误");
    }
}
function isnum() {
    var username = document.getElementById("name");
    var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    if (!reg.test(username.value)) {
        alert("请正确填写手机号！");
        return 0
    }
    return 1
}
function bh() {
    var userpwd = document.getElementById("pass");
    if (userpwd.value.length == 6) {
        document.getElementById('d033').style.opacity = '1'
    }
}







let flagn1
function shown1() {
    clearInterval(flagn1)
    document.getElementById('n1').style.visibility = 'visible'
}
function non1() {
    flagn1 = setInterval(() => {
        document.getElementById('n1').style.visibility = 'hidden'
    }, 100)
}
function n1() {
    clearInterval(flagn1)
    document.getElementById('n1').style.visibility = 'visible'
}
function noshown1() {
    document.getElementById('n1').style.visibility = 'hidden'
}

let flagn2
function shown2() {
    clearInterval(flagn2)
    document.getElementById('n2').style.visibility = 'visible'
}
function non2() {
    flagn2 = setInterval(() => {
        document.getElementById('n2').style.visibility = 'hidden'
    }, 100)
}
function n2() {
    clearInterval(flagn2)
    document.getElementById('n2').style.visibility = 'visible'
}
function noshown2() {
    document.getElementById('n2').style.visibility = 'hidden'
}

let flagn3
function shown3() {
    clearInterval(flagn3)
    document.getElementById('n3').style.visibility = 'visible'
}
function non3() {
    flagn3 = setInterval(() => {
        document.getElementById('n3').style.visibility = 'hidden'
    }, 100)
}
function n3() {
    clearInterval(flagn3)
    document.getElementById('n3').style.visibility = 'visible'
}
function noshown3() {
    document.getElementById('n3').style.visibility = 'hidden'
}

let flagn4
function shown4() {
    clearInterval(flagn4)
    if(user==1){
        document.getElementById('n9').style.visibility = 'visible'
    }else{
        document.getElementById('n4').style.visibility = 'visible'
    }
}
function non4() {
    flagn4 = setInterval(() => {
        if(user==1){
            document.getElementById('n9').style.visibility = 'hidden'
        }else{
            document.getElementById('n4').style.visibility = 'hidden'
        }
    }, 100)
}
function n4() {
    clearInterval(flagn4)
    if(user==1){
        document.getElementById('n9').style.visibility = 'visible'
    }else{
        document.getElementById('n4').style.visibility = 'visible'
    }
}
function noshown4() {
    if(user==1){
        document.getElementById('n9').style.visibility = 'hidden'
    }else{
        document.getElementById('n4').style.visibility = 'hidden'
    }
}

let flagn5
function shown5() {
    clearInterval(flagn5)
    document.getElementById('n5').style.visibility = 'visible'
}
function non5() {
    flagn5 = setInterval(() => {
        document.getElementById('n5').style.visibility = 'hidden'
    }, 100)
}
function n5() {
    clearInterval(flagn5)
    document.getElementById('n5').style.visibility = 'visible'
}
function noshown5() {
    document.getElementById('n5').style.visibility = 'hidden'
}

var dz = 0
function showdz() {
    if (dz % 2 == 0) {
        document.getElementById('dz').style.visibility = 'visible'
    }
    else {
        document.getElementById('dz').style.visibility = 'hidden'
    }
    dz += 1
}
var sc = 0
function showsc() {
    if (sc % 2 == 0) {
        document.getElementById('sc').style.visibility = 'visible'
    }
    else {
        document.getElementById('sc').style.visibility = 'hidden'
    }
    sc += 1
}

let flagn6
function shown6() {
    clearInterval(flagn6)
    document.getElementById('n6').style.visibility = 'visible'
}
function non6() {
    flagn6 = setInterval(() => {
        document.getElementById('n6').style.visibility = 'hidden'
    }, 100)
}
function n6() {
    clearInterval(flagn6)
    document.getElementById('n6').style.visibility = 'visible'
}
function noshown6() {
    document.getElementById('n6').style.visibility = 'hidden'
}

let flagn7
function shown7() {
    clearInterval(flagn7)
    document.getElementById('n7').style.visibility = 'visible'
}
function non7() {
    flagn7 = setInterval(() => {
        document.getElementById('n7').style.visibility = 'hidden'
    }, 100)
}
function n7() {
    clearInterval(flagn7)
    document.getElementById('n7').style.visibility = 'visible'
}
function noshown7() {
    document.getElementById('n7').style.visibility = 'hidden'
}

let flagn8

function shown8() {
    clearInterval(flagn8)
    document.getElementById('n8').style.visibility = 'visible'
}
function non8() {
    flagn8 = setInterval(() => {
        document.getElementById('n8').style.visibility = 'hidden'
    }, 100)
}
function n8() {
    clearInterval(flagn8)
    document.getElementById('n8').style.visibility = 'visible'
}
function noshown8() {
    document.getElementById('n8').style.visibility = 'hidden'
}
function j_shown8(){
    document.getElementById('n8').style.visibility = 'visible'
    clearInterval(shown8())
    clearInterval(non8())
    clearInterval(n8())
    clearInterval(noshown8())
}
