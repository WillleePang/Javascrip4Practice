function Person() {}
Person.prototype.Name = "niclode";
Person.prototype.age = 29;
Person.prototype.job = "coder";
Person.prototype.sayName = function() {
	alert(this.Name);
}
var keys = Object.keys(Person.prototype);
alert(key);
var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1key = Object.keys(p1);
alert(p1key);