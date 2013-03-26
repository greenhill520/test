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

// 2013-3-19 xl 测试表单与文件的函数
function ShowFileName() {
    var file;
    for( var i = 0; i < document.getElementById("file").files.length; i++ ) {
        file = document.getElementById("file").files[i];
        alert(file.name);
    }
}

function ShowFileType() {
    var file;
    file = document.getElementById("file").files[0];
    var size = document.getElementById("size");
    size.innerHTML = file.size;
    var type = document.getElementById("type");
    type.innerHTML = file.type;
}

function FileUpload() {
    var file;
    for( var i = 0; i < document.getElementById("file").files.length; i++ ){
        file = document.getElementById("file").files[i];
        if( !/image\/\w+/.test(file.type) ) {
            alert(file.name + "文件不是图像文件！");
            break;
        }
        else {
            alert(file.name + "文件已上传！");
        }
    }
}

var result = document.getElementById("result");
var file2 = document.getElementById("file2");
if( typeof FileReader == 'undefined' ) {
    result.innerHTML = "<p>抱歉，你的浏览器不支持FileReader！</p>";
    file2.setAttribute('disabled', 'disabled');
}
function readAsDataURL() {
    var file2 = document.getElementById("file2").files[0];
    if( !/image\/\w+/.test(file2.type) ) {
        alert("请确保文件图像类型！");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file2);
    reader.onload = function()
    {
        var result = document.getElementById("result");
        result.innerHTML = '<img src="'+ this.result + '" alt=""/>';
    };
    return true;
}
function readAsBinaryString() {
    var file2 = document.getElementById("file2").files[0];
    var reader = new FileReader();
    reader.readAsBinaryString(file2);
    reader.onload = function()
    {
        var result = document.getElementById("result");
        result.innerHTML = this.result;
    };
}
function readAsText(){
    var file2 = document.getElementById("file2").files[0];
    var reader = new FileReader();
    reader.readAsText(file2);
    reader.onload = function()
    {
        var result = document.getElementById("result");
        result.innerHTML = this.result;
    };
}

function saveStorage(id) {
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time, data);
    alert("数据已保存！");
    loadStorage('msg');
}
function loadStorage(id) {
    var result = '<table border="1">';
    for( var i = 0; i < localStorage.length; i++ ){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();
        result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>';
    }
    result += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
function clearStorage(id) {
    localStorage.clear();
    alert("全部数据被清除！");
    loadStorage(id);
}

// 2013-3-19 xl 增加获取地理位置信息
/*
function showObject(obj,k) {
    if(!obj) {
        return;
    }
    for(var i in obj) {
        if(typeof (obj[i]) != "object" || obj[i] == null) {
            for(var j = 0; j < k; j++ ){
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
            }
            document.write( i + " : " + obj[i] + "<br/>");
        }
        else {
            document.write( i + " : " + "<br/>");
            showObject(obj[i],k+1);
        }
    }
}
function get_location() {
    if ( navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show_map, handle_error,
            {enableHighAccuracy:true, maximumAge:1000});
    }
    else {
        alert("你的浏览器不支持HTML 5来获取地理位置信息！");
    }
}
function handle_error(err) {
    switch ( err.code ){
        case 1:
            alert("位置服务被拒绝！");
            break;
        case 2:
            alert("暂时获取不到位置信息！");
            break;
        case 3:
            alert("获取信息超时！");
            break;
        default :
            alert("未知错误！");
            break;
    }
}
function show_map(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    showObject(position,0);
}
get_location();
*/
function init() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var coords = position.coords;
        var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
        var myOptions = {
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map1;
        map1 = new google.maps.Map(document.getElementById("map"), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map1
        });
        var infowindow = new google.maps.InfoWindow({
            content: "当前位置！"
        });
        infowindow.open(map1, marker);
    });
}

// 2013-03-26 xl
//增加测试时候有不合法的词语出现
function CheckWrong() {
    var arr = ["苍井空", "fuck", "十八大", "你妹的", "日你"];
    var tf = 0;
    var storeW = "";
    var str = document.getElementById("checkwrong").value;
    for(var i = 0; i < arr.length; i++ ) {
        if(str.indexOf(arr[i]) != -1) {
            tf = 1;
            storeW += arr[i];
            storeW += ", ";
        }
    }
    if( tf == 1) {
        alert("你输入的内容有不和谐的内容（"+storeW+"）！请检查！");
    }
    else {
        alert("恭喜，你输入的内容没有不和谐的内容！");
    }
}