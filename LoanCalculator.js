/**
 * Created with JetBrains WebStorm.
 * User: Greenhill
 * Date: 13-3-16
 * Time: 下午4:09
 * To change this template use File | Settings | File Templates.
 */
"use strict";
/*
  * 这里的脚本定义了calculate（）函数，在HTML代码中绑定事件处理程序时会调用它
  * 这个函数从<input>元素中读取数据，计算贷款赔付信息，并将结果显示在<span>元素中
  * 同样，这里保存了用户数据，展示了放贷人链接并绘制出了图表
 */
function calculate(){
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;
    var payments = parseFloat(years.value) * 12;

    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x-1);

    if(isFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML =(monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
        save(amount.value, apr.valur, years.value, zipcode.value);
        try {
            getLenders(amount.value, apr.valur, years.value, zipcode.value);
        }
        catch(e) {
            chart(principal, interest, monthly, payments);
        }
    }
    else {
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
        chart();
    }
}