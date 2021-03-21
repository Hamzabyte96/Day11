

function largestNumFromArr(arr) {
    var maxNumArray = [0,0,0,0];
    for ( var i = 0; i < arr.length; i++) {
        for ( var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > maxNumArray[i]) {
                maxNumArray[i] = arr[i][j];
            }
        }
    }
    return maxNumArray;
}

console.log(largestNumFromArr([[13 ,27, 18, 26], [4, 5, 1, 3], [3, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))
console.log(largestNumFromArr([[17, 23, 35, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]))

module.exports = largestNumFromArr;