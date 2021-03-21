var monday = [31, 32, 19, 37];
var tuesday = [29, 27, 55, 36];
var wednesday = [17, 27, 42, 46];
var thursday = [29, 52, 21, 64];
var friday = [91, 27, 31, 61];
var temps = [monday, tuesday, wednesday, thursday, friday];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];

  for (i = 0; i < newTemps.length; i++) {
    var average = 0;
    var arr = newTemps[i];
    for (j = 0; j < arr.length; j++) {
      average += arr[j];
    }
    averageDayTemp.push(average/arr.length)
  }
  return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
