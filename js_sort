// 根据某个属性，对某个对象数组进行排序
function arrSort(arr){
 function compare(propertyName) {
    return function (object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 > value1) {
        return -1;
      }else if (value2 < value1) {
        return 1;
      }else {
        return 0;
      }
    }
  }
  return data.sort(compare(property));
}
