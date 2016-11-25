/*
 * @Author: hq
 * @Date:   2016-10-18 13:29:14
 * @Last Modified by:   hq
 * @Last Modified time: 2016-10-18 14:05:41
 */

'use strict';



function map(array, func) {
	var res = [];
	for (var i = 0, len = array.length; i < len; i++) {
		res.push(func(array[i]));
	}
	return res;
}
var mapped = map([1, 3, 5, 7, 9], function(n) {
	return n = n + 1;
});
console.log(mapped);



function adder(num) {
	return function(x) {
		return num + x;
	}
}
var add5 = adder(5);
console.log(add5(78));



var mapped = map([1, 3, 5, 7], function(n) {
	return n = n + 1;
});
var mapped2 = map(["one", "two", "three", "four"], function(item) {
	return "(" + item + ")";
})
console.log(mapped);
console.log(mapped2);



function sum() {
	var res = 0;
	for (var i = 0, len = arguments.length; i < len; i++) {
		res += parseInt(arguments[i]);
	}
	return res;
}
console.log(sum(1, 2, 3));


function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

function rem(a, b) {
	return a % b;
}

function inc(x) {
	return x + 1;
}

function dec(x) {
	return x - 1;
}

function equal(a, b) {
	return a == b;
}

function great(a, b) {
	return a > b;
}

function less(a, b) {
	return a < b;
}

function fatorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * fatorial(n - 1);
	}
}

function fatorial(n) {
	if (equal(n, 1)) {
		return 1;
	} else {
		return mul(n, fatorial(dec(n)));
	}
}



function outter() {
	var n = 0;
	return function() {
		return n++;
	}
}

var o1 = outter();
o1();
o1();
o1();
console.log("n:" + o1());


var array1 = [];

function clouseTest2() {
	var array = ["one", "two", "three", "four"];
	for (var i = 0; i < array.length; i++) {
		var x = {};
		x.no = i;
		x.text = array[i];
		x.invoke = function(no) {
			return function() {
				print(no);
			}
		}(i);
		array1.push(x);
	}
}

console.log(array1);


function update(item) {
	return function(text) {
		$("div#" + item).html(text);
	}
}

function refresh(url, callback) {
	var params = {
		type: "echo",
		data: ""
	};
	$.ajax({
		type: "post",
		url: url,
		cache: false,
		async: true,
		dataType: "json",
		data: params,

		success: function(data, status) {
			callback(data);
		},

		error: function(err) {
			alert("error : " + err);
		}
	});
}
refresh("action.do/op=1", update("content1"));
refresh("action.do/op=2", update("content2"));
refresh("action.do/op=3", update("content3"));