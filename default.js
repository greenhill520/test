/**
 * Created with JetBrains WebStorm.
 * User: Greenhill
 * Date: 13-3-16
 * Time: 下午4:09
 * To change this template use File | Settings | File Templates.
 */
/**
 * TODO: 没有填写checkValidity（）这个函数，得查一下才行！
 *        原来email这个属性本来就有检测Email是否合法了！所以可以不用checkValidity（）
 * @return {Boolean}
 */
function checkEmail() {
    var email = document.getElementById("email");
    if( email.value == "") {
        alert("请输入Email地址！");
        return false;
    }
    //else if( !email.checkValidity())
    //    alert("请输入正确的Email地址！");
    else {
        alert("你已输入Email地址！");
        return true;
    }
}

/**
 * TODO: setCustomValidity()也用不了，应该不算是普遍使用的函数吧！用alert代替了！
 * @return {Boolean}
 */
function checkPass(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if( pass1.value != pass2.value ) {
        alert("两次密码输入不一致！");
        //pass2.serCustomValidity("密码不一致！");
        return false;
    }
    else {
        alert("密码一致！");
        //pass2.setCustomValidity("");
        return true;
    }
}