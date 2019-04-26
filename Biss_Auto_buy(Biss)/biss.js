var play = document.getElementsByClassName("el-button el-button--primary");
 play = play[1];  //获取买入按钮
var amount = document.getElementsByClassName("el-input__inner");
 amount = amount[3];  //获取买入数量
 amount.value = 800.00000000;

window.setInterval(buy, 1); // 第二个参数是时间，毫秒级

function buy() {
	amount.value = 800.00000000;
	play.click();
}
