//无论怎么换名字，都能进行计算
function factorial(num){
	if(num<=1){
		return 1;
	}else{
		return num * arguments.callee(num-1);
	}
}
var trueFactorial = factorial;
trueFactorial(5);

//apply() call() bind()
window.color = "red";
var o = {color:"blue"};
function sayColor(){
	alert(this.color);
}
sayColor();
sayColor(this);
sayColor(window);
sayColor(o);
//再次调用sayColor,一直都会是blue
var objectSayColor = sayColor.bind(o);
objectSayColor();

