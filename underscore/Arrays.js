/**
 * Created by Administrator on 2016/1/7.
 */
'use strict';
//=============Arrays================
//first / last
//var arr = [2, 4, 6, 8];
//console.log(_.first(arr));
//console.log(_.last(arr));

//flatten
//console.log(_.flatten([1, [2], [3, [[4], [5]]]]));

//zip / unzip
//var names = ['Adam', 'Lisa', 'Bart'];
//var scores = [85, 92, 59];
//console.log(_.zip(names, scores));
//var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
//console.log(_.unzip(namesAndScores));

//object
//var names = ['Adam', 'Lisa', 'Bart'];
//var scores = [85, 92, 59];
//console.log(_.object(names, scores));

//range
// 从0开始小于10:
//console.log(_.range(10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 从1开始小于11：
//console.log(_.range(1, 11)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 从0开始小于30，步长5:
//console.log(_.range(0, 30, 5)); // [0, 5, 10, 15, 20, 25]
// 从0开始大于-10，步长-1:
//console.log(_.range(0, -10, -1)); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]


var provinces = [{
    "oid": "03b94ca9f83f4119ad42b489e48b1db7",
    "pid": "0",
    "codeType": "district",
    "codeValue": "650000",
    "codeName": "新疆维吾尔自治区",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "0552f420c28c49caafefb52d06562534",
    "pid": "0",
    "codeType": "district",
    "codeValue": "110000",
    "codeName": "北京市",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "08e372c671aa41a1995b7d1b90ec8a9b",
    "pid": "0",
    "codeType": "district",
    "codeValue": "220000",
    "codeName": "吉林省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "0a8ffa5943ab4847818faa1b6ef27cbb",
    "pid": "0",
    "codeType": "district",
    "codeValue": "540000",
    "codeName": "西藏自治区",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "0f6ee36fe5034920aa7562d82d1d3d2a",
    "pid": "0",
    "codeType": "district",
    "codeValue": "150000",
    "codeName": "内蒙古自治区",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "1f2a881d0dbc4efba75d8767314d5595",
    "pid": "0",
    "codeType": "district",
    "codeValue": "210000",
    "codeName": "辽宁省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "264b0e12866448baa079172b0ab1c112",
    "pid": "0",
    "codeType": "district",
    "codeValue": "500000",
    "codeName": "重庆市",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "26eda3ffb87f4e01aec3d43c93dc7a2c",
    "pid": "0",
    "codeType": "district",
    "codeValue": "350000",
    "codeName": "福建省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "2c7942a72ca64310a0af09fff3965c79",
    "pid": "0",
    "codeType": "district",
    "codeValue": "130000",
    "codeName": "河北省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "2f3bbfc563f043cb85768eb1ca7ac043",
    "pid": "0",
    "codeType": "district",
    "codeValue": "320000",
    "codeName": "江苏省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "3de6cc4e5718480297a52d84c22da556",
    "pid": "0",
    "codeType": "district",
    "codeValue": "340000",
    "codeName": "安徽省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "414679a38a1e45d893c9d8e42dcf4641",
    "pid": "0",
    "codeType": "district",
    "codeValue": "230000",
    "codeName": "黑龙江省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "4799234aa97a4984b65f0f8630827894",
    "pid": "0",
    "codeType": "district",
    "codeValue": "610000",
    "codeName": "陕西省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "52e2530d144543c5b4aa5821bc29943c",
    "pid": "0",
    "codeType": "district",
    "codeValue": "410000",
    "codeName": "河南省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "5b38c4c8882e4bb7aa20466496990969",
    "pid": "0",
    "codeType": "district",
    "codeValue": "630000",
    "codeName": "青海省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "6000223f6762468ca7fab2d433e2f582",
    "pid": "0",
    "codeType": "district",
    "codeValue": "640000",
    "codeName": "宁夏回族自治区",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "709c61b99d9e4fabafa277ab348695f7",
    "pid": "0",
    "codeType": "district",
    "codeValue": "620000",
    "codeName": "甘肃省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "791d08147ba64e34a4a2dd52538d5f5b",
    "pid": "0",
    "codeType": "district",
    "codeValue": "530000",
    "codeName": "云南省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "83ae83aec277408a9cae901e34c10eff",
    "pid": "0",
    "codeType": "district",
    "codeValue": "440000",
    "codeName": "广东省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "95e9983ed1f2414a83a15c8ad571e747",
    "pid": "0",
    "codeType": "district",
    "codeValue": "450000",
    "codeName": "广西壮族自治区",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "a00c1e48981648a5ae26796db83bccfe",
    "pid": "0",
    "codeType": "district",
    "codeValue": "330000",
    "codeName": "浙江省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "a1322465bb39469bb98c3c4478c09dc2",
    "pid": "0",
    "codeType": "district",
    "codeValue": "360000",
    "codeName": "江西省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "b4e125ac17394bb6bfd06e98572ab65e",
    "pid": "0",
    "codeType": "district",
    "codeValue": "460000",
    "codeName": "海南省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "b5975edbc7454f61874ccdb4b404fe63",
    "pid": "0",
    "codeType": "district",
    "codeValue": "120000",
    "codeName": "天津市",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "c2f7234f2e6e45eabbe150d9b9361a32",
    "pid": "0",
    "codeType": "district",
    "codeValue": "370000",
    "codeName": "山东省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "d90430c02a434409a8d83173f548054e",
    "pid": "0",
    "codeType": "district",
    "codeValue": "510000",
    "codeName": "四川省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "de123e854b384d06a0647680488b794b",
    "pid": "0",
    "codeType": "district",
    "codeValue": "430000",
    "codeName": "湖南省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "e2d29b9fc9db4dcb88151d3592bc4c62",
    "pid": "0",
    "codeType": "district",
    "codeValue": "420000",
    "codeName": "湖北省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "e89cce4e06104d44bd5c30fdb01c08da",
    "pid": "0",
    "codeType": "district",
    "codeValue": "310000",
    "codeName": "上海市",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "eca3de3163384895ba2e5557a99e29b4",
    "pid": "0",
    "codeType": "district",
    "codeValue": "520000",
    "codeName": "贵州省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "eda73a47b9354d2f933978d7a2d4ef14",
    "pid": "0",
    "codeType": "district",
    "codeValue": "140000",
    "codeName": "山西省",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}, {
    "oid": "ef1fed63a9b44168875d438411a7c892",
    "pid": "0",
    "codeType": "district",
    "codeValue": "990000",
    "codeName": "新疆建设兵团",
    "codeEname": null,
    "valid": "1",
    "createTime": "2015-12-23 13:11:57",
    "updateTime": "2015-12-23 13:11:57",
    "ordnum": 0
}]

provinces = sort1(provinces, 'codeValue');
console.log(provinces);

var data = [{name: "jiang", age: 22}, {name: "AAAAAAAAAAAAAA", age: 21}, {name: "CCCCCCCCc", age: 25}];
//定义一个比较器
function sort1(data, property) {
    function compare(propertyName) {
        return function (object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];
            if (value2 > value1) {
                return -1;
            }
            else if (value2 < value1) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    return data.sort(compare(property));
}


//使用方法
//data.sort(compare("age"));
data = sort1(data, 'age');
console.log(data);




