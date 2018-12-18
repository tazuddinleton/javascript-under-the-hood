
/**
 * var arr1 = [1,2,3];

var arr2 = [];

for(var i = 0; i < arr1.length; i++){
    arr2.push(arr1[i] * 2);
}

console.log(arr1);
console.log(arr2);
 */

function mapForEach(arr, fn){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }    
    return newArr;
}
var arr1 = [1,2,3];
var multiplyBy2 = function (item){
    return item *2;
}
var isGreaterThan2 = function (item){
    return item > 2;
}
var isGreaterThanN = function(n){
    return function(n, item){
        return item > n;
    }.bind(this, n);
}

var isGreaterThanNSimplified = function(n){
    return function(item){
        return item > n;
    }
}

var arr2 = mapForEach(arr1,multiplyBy2);
var arr3 = mapForEach(arr1, isGreaterThan2);
var arr4 = mapForEach(arr1, isGreaterThanNSimplified(2)); // closour in action 
var arr5 = mapForEach(arr1, isGreaterThanN(1)); 

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

