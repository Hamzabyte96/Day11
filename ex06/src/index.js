myArray1 = [[2], [5, 6, 7], [8, 9]];

myArray2 = [[2.5, 2], [0.5, 0.2], [8]];

myArray3 = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];

function multiplyArrayFunction(myArray) {
  var product = 1
  var sum = 0

  for (i = 0; i < myArray.length; i++) { 
    
    var arr = myArray[i];
    for (j = 0; j < arr.length; j++) {
     sum  += arr[j];
     product *= arr[j];
    }
    
  }
  return [product, sum]
}
console.log(multiplyArrayFunction(myArray1));
console.log(multiplyArrayFunction(myArray2));
console.log(multiplyArrayFunction(myArray3));

module.exports = multiplyArrayFunction;
