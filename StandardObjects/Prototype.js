/**
 * Created by Administrator on 2016/1/6.
 */

"use strict";

//step 1 查看对象will的原型
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
}
console.log("================step1===============");
var will = new Person("Will", 28);
console.log(will.__proto__);
console.log(will.constructor);

//step 2 查看对象will的原型（will.__proto__）的原型
console.log("================step2===============");
console.log(will.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor === Person);

//step 3 查看对象Object的原型
console.log("================step3===============");
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(typeof Object);
console.log(Object);
console.log(Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.constructor);

//Step 4 查看对象Function的原型
console.log("================step4===============");
console.log(Person.__proto__ === Function.prototype);
console.log(Person.constructor === Function)
console.log(typeof Function);
console.log(Function);
console.log(Function.prototype);
console.log(Function.prototype.__proto__);
console.log(Function.prototype.constructor);

//extension 检测一个数据是不是数组
console.log("================extension===============");
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray([]));

function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	};
	return o;
}

function Person(name, age, jbo){
	this.name = name;
	this.age= age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	}
}

function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}

function sayName(){
	alert(this.name);
}

var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Grey", 29, "Doctor");
var person3 = new Person("willlee", 30, "Engineer");
var person4 = new Person("hehe", 30, "youmin");


function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name)&&(name in object)
}




