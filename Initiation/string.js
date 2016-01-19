/**
 * Created by Administrator on 2015/12/25.
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

// 字符串
'I\'m \"OK\"!';
// ASCII字符可以以\x##形式的十六进制表示
'\x41'; // 完全等同于 'A'
// 还可以用\u####表示一个Unicode字符
'\u4e2d\u6587'; // 完全等同于 '中文'
// 由于多行字符串用\n写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用` ... `表示：
//长度
var s = 'Hello, world!';
s.length; // 13
var s = 'Hello, world!';
s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined
//字符串是不变的
var s = 'Test';
s[0] = 'X';
alert(s); // s仍然为'Test'

var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'
var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'

var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1

var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
