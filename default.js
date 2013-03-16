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
