function hide() {
    console.log(1111);
    document.getElementById('div0').style.visibility = 'hidden' 
}
function show(){
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






