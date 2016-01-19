function sum(num1, num2) {
	return num1 + num2;
}

var sum = function(num1, num2) {
	return num1 + num2;
}

var sum = new Function("num1", "num2","return num1 + num2");


