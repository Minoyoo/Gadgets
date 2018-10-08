//获取余额
var strBalance = getBalnce();		

var startBalance = strBalance;
var balance = strBalance; //当前余额
var lastBalance = balance; //上一次的余额

var amount = document.getElementsByClassName("bet")[0];		//获取下注金额

var play = document.getElementsByClassName("clDicePlay")[1];  //获取开始按钮 getButton  Roll > 52

var abc = 0.000001; //设置下注金额
amount.value = abc;

var threeOrTwo = 3; //倍数
var start = false; //游戏是否开始

var totalNumber = 0; // 总共完了多少局
var totalWin = -1; //总共赢了多少局
var totalWinMoney = 0; //总共赢了多少钱
var totalLost = 0; //总共输了多少局
var totalLostMony = 0; //总共输了多少钱


//游戏开始
window.setInterval(startGame,8000);

function startGame() {

	if (balance >= lastBalance) {
		threeOrTwo = 3;
		totalWin++;
		console.log("| 赢Win |————————————————————————————————————————————");
		console.log("总局数："+totalNumber+"  |  "+"总共赢了"+totalWin+"局  |  "+"总共输了"+totalLost+"局  |  ");
		reward = balance - startBalance;
		console.log("当前余额："+balance+"  |  "+"初始余额："+startBalance+"  |  ");
		//设置下注金额
		abc = 0.00001;
		amount.value = abc;
		console.log("下注："+abc);


		//点击下注按钮
		play.click();
		totalNumber++;
		
		//设置当前余额和上一次余额
		window.setTimeout(setAmount,6000);
	}
	else {

		totalLost++;
		console.log("| 输Lost |— — — — — — — — — — — — — — — — — — — — — — —");
		console.log("总局数："+totalNumber+"  |  "+"总共赢了"+totalWin+"局  |  "+"总共输了"+totalLost+"局  |  ");
		reward = balance - startBalance;
		console.log("当前余额："+balance+"  |  "+"初始余额："+startBalance+"  |  ");
		//设置下注金额
		if(threeOrTwo == 3){
			abc = abc * 3;
			amount.value = abc;
			threeOrTwo = 2;
		}
		else {
			abc = abc * 2;
			amount.value = abc;
			threeOrTwo = 3;
		}
		console.log("下注："+abc);

		//点击下注按钮
		play.click();
		totalNumber++;

		window.setTimeout(setAmount,6000);		
	}
}

//设置当前余额&上一次的余额
function setAmount() {

	lastBalance = balance; 		// 上一次的余额
	balance = getBalnce(); 		 //当前余额		
}

//获取余额
function getBalnce(){

		var a = 0;
		var b = 1;
		var c = 0;
		var d = 0;

		var strGetBalance = document.getElementsByClassName("chosen-select-no-single style_hosen1")[0].getElementsByTagName("option")[0].innerText;		//获取余额

		for (var i = 0; i <= strGetBalance.length; i++) {
			
			var str = strGetBalance.slice(a,b);
			if(str == "-") {
				c = a+2;
				break;
			} else {
				a++;
				b++;
			}
		}

		for (var i = c , a = c, b = c+1; i <= strGetBalance.length; i++) {
			
			var str = strGetBalance.slice(a,b);
			if(str == " ") {
				d = a;
				break;
			} else {
				a++;
				b++;
			}
		}

		return strGetBalance.slice(c,d);
}