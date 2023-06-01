function cyh(){
    document.getElementById('n1').style.visibility = 'hidden' 
    document.getElementById('n2').style.visibility = 'hidden' 
    document.getElementById('n3').style.visibility = 'hidden'
    document.getElementById('n4').style.visibility = 'hidden'
    document.getElementById('n5').style.visibility = 'hidden'
    document.getElementById('dz').style.visibility = 'hidden'
    document.getElementById('sc').style.visibility = 'hidden'
    document.getElementById('n6').style.visibility = 'hidden'
    document.getElementById('n7').style.visibility = 'hidden'
}

document.querySelector('.clos').onclick = function() {
    console.log(1111);
    document.getElementById('div0').style.visibility = 'hidden' 
}
function show_d(){
    document.getElementById('div0').style.visibility = 'visible' 
}
function cleartext() {
    var username = document.getElementById("name");
    username.value = "";
    var userpwd = document.getElementById("pass");
    userpwd.value = "";
    var changeCode = document.getElementById("chek");
    changeCode.value = "";
}
function onLogin() {
    var username = document.getElementById("name"); // 获取用户名
    var userpwd = document.getElementById("pass"); // 获取密码
    var checkCode = document.getElementById("chek"); // 获取验证码
    if (username.value == "") {
        alert("请输入用户名！");
        username.focus();
    } else if (userpwd.value == "") {
        alert("请输入密码！");
        userpwd.focus();
    } else if (checkCode.value == "") {
        alert("请输入验证码！");
        checkCode.focus();
    } else {
        // 验证码校验
        var realCode = document.getElementById("imgCode1");
        if (checkCode.value != codeArr[i]) {
            alert("验证码错误，请重新输入！");
            checkCode.value = "";
            checkCode.focus();
            return;
        }
        alert("登录成功！！！");
        document.getElementById('div0').style.visibility = 'hidden' 
    }
}
let imgArr = ["img/1.png", "img/2.png", "img/3.png"];
    let codeArr = ["8005", "7364", "db89"];
    var i = 0;
function changeCode() {
        i++;
        i = i % 3;
        imgCode1.src = imgArr[i];
        imgCode1.alt = codeArr[i];
    }



let flagn1
function shown1(){
    clearInterval(flagn1)
    document.getElementById('n1').style.visibility = 'visible'
}
function non1(){
    flagn1 = setInterval(()=>{
        document.getElementById('n1').style.visibility = 'hidden'
    },100)
}
function n1(){
    clearInterval(flagn1)
    document.getElementById('n1').style.visibility = 'visible'
}
function noshown1(){
        document.getElementById('n1').style.visibility = 'hidden'
}

let flagn2
function shown2(){
    clearInterval(flagn2)
    document.getElementById('n2').style.visibility = 'visible'
}
function non2(){
    flagn2 = setInterval(()=>{
        document.getElementById('n2').style.visibility = 'hidden'
    },100)
}
function n2(){
    clearInterval(flagn2)
    document.getElementById('n2').style.visibility = 'visible'
}
function noshown2(){
        document.getElementById('n2').style.visibility = 'hidden'
}

let flagn3
function shown3(){
    clearInterval(flagn3)
    document.getElementById('n3').style.visibility = 'visible'
}
function non3(){
    flagn3 = setInterval(()=>{
        document.getElementById('n3').style.visibility = 'hidden'
    },100)
}
function n3(){
    clearInterval(flagn3)
    document.getElementById('n3').style.visibility = 'visible'
}
function noshown3(){
        document.getElementById('n3').style.visibility = 'hidden'
}

let flagn4
function shown4(){
    clearInterval(flagn4)
    document.getElementById('n4').style.visibility = 'visible'
}
function non4(){
    flagn4 = setInterval(()=>{
        document.getElementById('n4').style.visibility = 'hidden'
    },100)
}
function n4(){
    clearInterval(flagn4)
    document.getElementById('n4').style.visibility = 'visible'
}
function noshown4(){
        document.getElementById('n4').style.visibility = 'hidden'
}

let flagn5
function shown5(){
    clearInterval(flagn5)
    document.getElementById('n5').style.visibility = 'visible'
}
function non5(){
    flagn5 = setInterval(()=>{
        document.getElementById('n5').style.visibility = 'hidden'
    },100)
}
function n5(){
    clearInterval(flagn5)
    document.getElementById('n5').style.visibility = 'visible'
}
function noshown5(){
        document.getElementById('n5').style.visibility = 'hidden'
}

var dz=0
function showdz(){
    if(dz%2==0){
        document.getElementById('dz').style.visibility = 'visible'
    }
    else{
        document.getElementById('dz').style.visibility = 'hidden'
    }
    dz+=1
}
var sc=0
function showsc(){
    if(sc%2==0){
        document.getElementById('sc').style.visibility = 'visible'
    }
    else{
        document.getElementById('sc').style.visibility = 'hidden'
    }
    sc+=1
}

let flagn6
function shown6(){
    clearInterval(flagn6)
    document.getElementById('n6').style.visibility = 'visible'
}
function non6(){
    flagn6= setInterval(()=>{
        document.getElementById('n6').style.visibility = 'hidden'
    },100)
}
function n6(){
    clearInterval(flagn6)
    document.getElementById('n6').style.visibility = 'visible'
}
function noshown6(){
        document.getElementById('n6').style.visibility = 'hidden'
}

let flagn7
function shown7(){
    clearInterval(flagn7)
    document.getElementById('n7').style.visibility = 'visible'
}
function non7(){
    flagn7= setInterval(()=>{
        document.getElementById('n7').style.visibility = 'hidden'
    },100)
}
function n7(){
    clearInterval(flagn7)
    document.getElementById('n7').style.visibility = 'visible'
}
function noshown7(){
        document.getElementById('n7').style.visibility = 'hidden'
}