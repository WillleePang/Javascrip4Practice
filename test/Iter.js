var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var everyResult = numbers.every(function(item, index, array) {
	return (item > 2);
});
console.log(everyResult);

var someResult = numbers.some(function(item, index, array) {
	return (item > 2);
});
console.log(someResult);

var number = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var filterResult = numbers.filter(function(item, index, array) {
	return (item > 2);
});
console.log(filterResult);

var number = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var mapResult = numbers.map(function(item, index, array) {
	return item * 2;
});
console.log(mapResult);

var number = [1, 2, 3, 4, 5, 4, 3, 2, 1]
numbers.forEach(function(item, index, array){
	console.log(item);
});







