/**
 * Created by Administrator on 2016/1/7.
 */


var log = _.bind(console.log, console);
//keys / allKeys
function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('小明', 20);
log(_.keys(xiaoming));
log(_.allKeys(xiaoming));

//values
log(_.values(xiaoming));

//mapObject
log(_.mapObject(xiaoming, (v, k)=>k + ": " + v));

//invert
log(_.invert(xiaoming));

//extend / extendOwn
log(_.extend(xiaoming, {sex: "famle", ename: "sb"}, {job: "prostuitie"}));
log(_.extendOwn(xiaoming, {sex: "famle", ename: "sb"}, {job: "prostuitie"}));

//clone
var copied = _.clone(xiaoming);
log(copied);


