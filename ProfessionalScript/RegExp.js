/**
 * 匹配字符串中所有“at”的事例
 */
var pattern1 = /at/g;
/**
 * 匹配第一個“bat”或“cat”，不区分大小写
 */
var pattern2 = /[bc]at/i
/**
 * 匹配所有以“at”结尾的3个字符的组合，不区分大小写
 */
var pattern3 = /.at/gi;
/**
 * 匹配所有“.at”，不区分大小写
 */
var pattern4 = /\.at/gi;
/**
 * 匹配所有“.at”， 不区分大小写
 */
var pattern5  = /\.at/gi;

var re = null,i;
for(i =0;i<10;i++){
	re = /cat/g;
	re.test("catastrophe");
}
for(i = 0;i<10;i++){
	re = new RegExp("cat","g");
	re.test("catastrophe");
}

var text = "this has been a short summer";
var pattern = /(.)hort/g;
if(pattern.test(text)){
	alert(RegExp.$_);
	alert(RegExp["$`"]);
	alert(RegExp["$'"]);
	alert(RegExp["$&"]);
	alert(RegExp["$+"]);
	alert(RegExp["$*"]);
}
