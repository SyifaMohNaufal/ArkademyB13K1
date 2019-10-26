function findHighestProfit(input){
  var arrayRev = input
  var largestProfit = 0
  for (i=0; i < arrayRev.length; i++){
      var rev1 = arrayRev[i]
      for(j=i+1; j < arrayRev.length; j++){
        var rev2= arrayRev[j]
        profit = rev2 - rev1
        if(profit > largestProfit) {
          largestProfit = profit
        }
      }
  }

  if(largestProfit === 0){
  return 'Tidak bisa mendapatkan profit pada hari-hari ini '
  } else {
  return largestProfit
  }
}

var testProfit = findHighestProfit([10, 2, 11, 20, 3, 5])
console.log(testProfit)