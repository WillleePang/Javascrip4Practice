/*
 * @Author: hq
 * @Date:   2016-10-18 11:50:19
 * @Last Modified by:   hq
 * @Last Modified time: 2016-10-18 13:09:07
 */

'use strict';

class User {
	constructor(userID) {
		this.id = userID;
	}

	get_name() {
		return $.ajax("/get_name?id=${this.id}");
	}

	get_sex() {
		return $.ajax("/get_sex?id=${this.id}");
	}
}

//进阶一
class User {
	constructor(userID) {
		this.id = userID;
	}

	__fetchData(key) {
		return $.ajax("/get_${key}?id=${this.id}");
	}

	get_name() {
		return __fetchData("name");
	}

	get_sex() {
		return __fetchData("sex");
	}
}

class User {
	constructor(userID) {
		this.id = userID;
		this.registerProperties(["name", "sex"]);
	}

	registerProperties(keyArray) {
		keyArray.forEach(key => this['get_${key}'] = () => this.__fetchData(key));
	}


	__fetchData(key) {
		return $.ajax("/get_${key}?id=${this.id}");
	}
}

//进阶二
class User() {
	constructor(userID) {
		this.id = userID;
	}

	registerProperties(keyArray) {
		var fnBody = `return this.__fetchData("/get_${key}?id=${this.id}")
                    .then(function(data){
                        return this.__handle_${key}?_this.handle_${key}(data):data;
                    })`;
		this[`get_${key}`] = new Function(fnBody);
	}

	__fetchData(key) {
		return $.ajax("/get_${key}?id=${this.id}");
	}

	__handle_name(name) {
		//do somthing with name...
		return name;
	}

	__handle_age(age) {
		//do somthing with age...
		return age;
	}
}

//进阶三
class User {
	constructor(userID, dataBase) {
		this.id = userID;
		this.__dataBase = dataBase;
		for (var method in dataBase) {
			//对每一个方法
			this.registerMethod(method);
		}
	}

	registerMethod(methodName) {
		//这里除去了前置的"get_"
		var propertyName = methodName.slice(4);
		//注意这里拉取数据的方法改为使用dataBase
		var fnBody = `return this.__dataBase.${methodName}()
                    .then(function(data){
                        return this.__handle_${propertyName}?_this.handle_${propertyName}(data):data;
                    })`;
		this[`get_${propertyName}`] = new Function(fnBody);
	}

	__handle_name(name) {
		//do somthing with name...
		return name;
	}

	__handle_age(age) {
		//do somthing with age...
		return age;
	}
}

var userDataBase = new UserDataBase();
var user = new User("123", userDataBase);

