/**
 * Created by Administrator on 2015/12/25.
 */

123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
1 + 2; // 3
(1 + 2) * 5 / 2; // 7.5
2 / 0; // Infinity
0 / 0; // NaN
10 % 3; // 1
10.5 % 3; // 1.5

/*
 字符串是以单引号'或双引号"括起来的任意文本，
 比如'abc'，"xyz"等等。请注意，
 ''或""本身只是一种表示方式，
 不是字符串的一部分，
 因此，字符串'abc'只有a，b，c这3个字符。
 */

true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值

//&&运算是与运算，只有所有都为true，&&运算结果才是true：
true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false

//||运算是或运算，只要其中有一个为true，||运算结果就是true：
false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true

//!运算是非运算，它是一个单目运算符，把true变成false，false变成true：
!true; // 结果为false
!false; // 结果为true
!(2 > 5); // 结果为true

//布尔值经常用在条件判断中，比如：
var age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}

//当我们对Number做比较时，可以通过比较运算符得到一个布尔值：
2 > 5; // false
5 >= 2; // true
7 == 7; // true

/*
 要特别注意相等运算符==。JavaScript在设计时，有两种比较运算符：
 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。
 */
false == 0; // true
false === 0; // false

//另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
NaN === NaN; // false
1 / 3 === (1 - 2 / 3); // false
isNaN(NaN); // true not a number

/*
 这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。
 要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
 */
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

/*
 null和undefined
 null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。
 在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。
 但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。
 JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。
 事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。
 undefined仅仅在判断函数参数是否传递的情况下有用。
 */


// 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。
a = [1, 2, 3.14, 'Hello', null, true];//强烈建议使用
a = new Array(1, 2, 3)

//JavaScript的对象是一组由键-值组成的无序集合
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
person.name; // 'Bob'
person.zipcode; // null

var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null

var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串
i = 10; // i现在是全局变量

//strict模式
//'use strict';
// 如果浏览器支持strict模式，
// 下面的代码将报ReferenceError错误:
abc = 'Hello, world';
alert(abc);






























