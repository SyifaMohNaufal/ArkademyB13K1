function removeZeroAndSort(input) {
    var n = input
    var arr = (n).toString().split("0").map(Number)
    var output = []
    for(i = 0 ; i < arr.length ; i++){
      var n = arr[i]
      var nString = n.toString()
      var m = []
      for (j = 0; j < nString.length; j++){
        m = m.concat(parseInt(nString.charAt(j)))
      }
      m = m.sort()
      output = output.concat(m)
    }
  
    var outputInt = parseInt(output.join().replace(/,/g,''))
      return outputInt;
  }
  
  var result = removeZeroAndSort(5956560159466056)
  console.log(result)