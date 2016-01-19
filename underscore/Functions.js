/**
 * Created by Administrator on 2016/1/7.
 */
"use strict";

//bind
var log = console.log;
// 调用call并传入console对象作为this:
log.call(console, 'Hello, world!')
// 输出Hello, world!
var log = _.bind(console.log, console);
log('Hello, world!');
// 输出Hello, world!

//partial
var pow2N = _.partial(Math.pow, 2);
log(pow2N(3)); // 8
log(pow2N(5)); // 32
log(pow2N(10)); // 1024

var cube = _.partial(Math.pow, _, 3);
log(cube(3)); // 27
log(cube(5)); // 125
log(cube(10)); // 1000

//memoize
var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    var s = 1, i = n;
    while (i > 1) {
        s = s * i;
        i --;
    }
    console.log(n + '! = ' + s);
    return s;
});
// 第一次调用:
factorial(10); // 3628800
// 注意控制台输出:
// start calculate 10!...
// 10! = 3628800

// 第二次调用:
factorial(10); // 3628800
// 控制台没有输出

//对于相同的调用，比如连续两次调用factorial(10)，第二次调用并没有计算，而是直接返回上次计算后缓存的结果。
// 不过，当你计算factorial(9)的时候，仍然会重新计算。
//可以对factorial()进行改进，让其递归调用：
var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
});

//once
var register = _.once(function () {
    alert('Register ok!');
});
register();
register();
register();

//delay
// 2秒后调用alert():
_.delay(log, 2000);
_.delay(log, 2000, 'Hello,', 'world!');
// 2秒后打印'Hello, world!':

