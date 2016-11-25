/*
 * @Author: hq
 * @Date:   2016-10-17 09:32:43
 * @Last Modified by:   hq
 * @Last Modified time: 2016-10-17 10:53:53
 */

'use strict';

var global = 'Hello, I am a global variable :)';

(function() {
	//在函数作用域中下面的变量是私有的
	var myGrades = [93, 95, 88, 0, 55, 91];

	var average = function() {
		var total = myGrades.reduce(function(accumulator, item) {
			return accumulator + item;
		}, 0);
		return 'You average grade is ' + total / myGrades.length + ".";
	}

	var failing = function() {
		var failingGrades = myGrades.filter(function(item) {
			return item < 70;
		});
		return 'You failed ' + failingGrades.length + ' times.';
	}

	console.log(failing());
	console.log(global);

}())


(function(globalVariable) {

	// 在函数的作用域中下面的变量是私有的
	var privateFunction = function() {
		console.log('Shhhh, this is private!');
	}

	// 通过全局变量设置下列方法的外部访问接口
	// 与此同时这些方法又都在函数内部

	globalVariable.each = function(collection, iterator) {
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {
				iterator(collection[i], i, collection);
			}
		} else {
			for (var key in collection) {
				iterator(collection[key], key, collection);
			}
		}
	};

	globalVariable.filter = function(collection, test) {
		var filtered = [];
		globalVariable.each(collection, function(item) {
			if (test(item)) {
				filtered.push(item);
			}
		});
		return filtered;
	};

	globalVariable.map = function(collection, iterator) {
		var mapped = [];
		globalUtils.each(collection, function(value, key, collection) {
			mapped.push(iterator(value));
		});
		return mapped;
	};

	globalVariable.reduce = function(collection, iterator, accumulator) {
		var startingValueMissing = accumulator === undefined;

		globalVariable.each(collection, function(item) {
			if (startingValueMissing) {
				accumulator = item;
				startingValueMissing = false;
			} else {
				accumulator = iterator(accumulator, item);
			}
		});

		return accumulator;

	};

}(globalVariable));



var myGradesCalculate = (function() {

	// 在函数的作用域中下面的变量是私有的
	var myGrades = [93, 95, 88, 0, 55, 91];

	// 通过接口在外部访问下列方法
	// 与此同时这些方法又都在函数内部

	return {
		average: function() {
			var total = myGrades.reduce(function(accumulator, item) {
				return accumulator + item;
			}, 0);

			return 'Your average grade is ' + total / myGrades.length + '.';
		},

		failing: function() {
			var failingGrades = myGrades.filter(function(item) {
				return item < 70;
			});

			return 'You failed ' + failingGrades.length + ' times.';
		}
	}
})();

myGradesCalculate.failing(); // 'You failed 2 times.' 
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'


var myGradesCalculate = (function() {

	// 在函数的作用域中下面的变量是私有的
	var myGrades = [93, 95, 88, 0, 55, 91];

	var average = function() {
		var total = myGrades.reduce(function(accumulator, item) {
			return accumulator + item;
		}, 0);

		return 'Your average grade is ' + total / myGrades.length + '.';
	};

	var failing = function() {
		var failingGrades = myGrades.filter(function(item) {
			return item < 70;
		});

		return 'You failed ' + failingGrades.length + ' times.';
	};

	// 将公有指针指向私有方法

	return {
		average: average,
		failing: failing
	}
})();

myGradesCalculate.failing(); // 'You failed 2 times.' 
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'


(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['myModule', 'myOtherModule'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(require('myModule'), require('myOtherModule'));
	} else {
		// Browser globals (Note: root is window)
		root.returnExports = factory(root.myModule, root.myOtherModule);
	}
}(this, function(myModule, myOtherModule) {
	// Methods
	function notHelloOrGoodbye() {}; // A private method
	function hello() {}; // A public method because it's returned (see below)
	function goodbye() {}; // A public method because it's returned (see below)

	// Exposed public methods
	return {
		hello: hello,
		goodbye: goodbye
	}
}));

// lib/counter.js

var counter = 1;

function increment() {
	counter++;
}

function decrement() {
	counter--;
}

module.exports = {
	counter: counter,
	increment: increment,
	decrement: decrement
};


// src/main.js

var counter = require('../../lib/counter');

counter.increment();
console.log(counter.counter); // 1