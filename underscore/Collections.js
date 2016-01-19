/**
 * Created by Administrator on 2016/1/7.
 */
'use strict';
//=============Collections================
//map/filter
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
var upper1 = _.map(obj, function (value, key) {
    return key + '=' + value;
});
console.log(JSON.stringify(upper1));
var upper2 = _.mapObject(obj, function (value, key) {
    return key + ' add ' + value;
});
console.log(upper2);
// 所有元素都大于0？
console.log(_.every([1, 4, 7, -3, -9], (x) => x > 0));
// 至少一个元素大于0？
console.log(_.some([1, 4, 7, -3, -9], (x) => x > 0));

//every / some
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
// 判断key和value是否全部是小写：
var r1 = _.every(obj, function (value, key) {
    return /^[a-z]+$/.test(value + key);
});
var r2 = _.some(obj, function (value, key) {
    return /^[a-z]+$/.test(value + key);
});
console.log('every key-value are lowercase: ' + r1 + '\nsome key-value are lowercase: ' + r2);

//max / min
var arr = [3, 5, 7, 9];
console.log(_.max(arr));
console.log(_.min(arr));
console.log(_.max([]));
console.log(_.min([]));
console.log(_.max({a: 1, b: 2, c: 3}));

//groupBy
var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
console.log(groups);

//shuffle / sample
// 注意每次结果都不一样：
console.log(_.shuffle([1, 2, 3, 4, 5, 6])); // [3, 5, 4, 6, 2, 1]
// 注意每次结果都不一样：
// 随机选1个：
console.log(_.sample([1, 2, 3, 4, 5, 6])); // 2
// 随机选3个：
console.log(_.sample([1, 2, 3, 4, 5, 6], 3)); // [6, 1, 4]

