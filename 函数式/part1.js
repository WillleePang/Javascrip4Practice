/*
 * @Author: hq
 * @Date:   2016-10-18 10:01:42
 * @Last Modified by:   hq
 * @Last Modified time: 2016-10-18 10:36:59
 */

'use strict';

var Maybe = function(x) {
	this.__value = x;
}

Maybe.of = function(x) {
	return Maybe(x);
}

Maybe.prototype.map = function(f) {
	return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.prototype.isNothing = function() {
	return (this.__value === null || this.__value === undefined);
}


//试试看
import _ from 'lodash';
var add = _.curry(_.add);


Maybe.of({
		name: "Stark"
	})
	.map(_.prop("age"))
	.map(add(10));


Maybe.of({
		name: "Stark",
		age: 21
	})
	.map(_.prop("age"))
	.map(add(10));


var Left = function(x) {
	this._value = x;
}

var right = function(x) {
	this._value = x;
}

Left.of = function(x) {
	return new Left(x);
}

Right.of = function(x) {
	return new Right(x);
}

Left.prototype.map = function(f) {
	return this;
}

Right.prototype.map = function(f) {
	return Right.of(f(this.__value));
}

var getAge = user => user.age ? Right.of(user.age) : Left.of("ERROR!");

//试试
getAge({
	name: 'stark',
	age: '21'
}).map(age => 'Age is ' + age);
//=> Right('Age is 21')

getAge({
	name: 'stark'
}).map(age => 'Age is ' + age);
//=> Left('ERROR!')


function readLocalStorage() {
	return function() {
		return window.localStorage;
	}
}

import _ from 'lodash';
var compose = _.flowRight;

var IO = function(f) {
	this.__value = f;
}

IO.of = x => new IO(_ => x);
IO.prototype.map = function(f) {
	return new IO(compose(f, this.__value));
};

var io_document = new IO(_ => window.document);

io_document.map(function(doc) {
	return doc.title
});
//=> IO(document.title)