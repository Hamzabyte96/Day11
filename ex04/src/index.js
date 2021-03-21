var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  var monitorsList = [];

  for (i = 0; i < newMonitorsList.length; i++) {
    var arr = [newMonitorsList[i],i+1]
    monitorsList.push(arr);
  }
  
  
  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
