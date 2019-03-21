function sorting(arrNumber) {
    // code di sini
    // console.log (arrNumber)
    var i = 0

    while (i < arrNumber.length){
        if (arrNumber[i] >  arrNumber[i+1]){
            var temp = 0
            temp = arrNumber[i]
            arrNumber[i] = arrNumber[i+1]
            arrNumber[i+1] = temp
            i = 0
        }
        i++
    }
    // console.log (arrNumber)
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini

    if (arrNumber.length === 0 ){
        return '""'
    }
    var max = arrNumber[arrNumber.length-1]
    var j = 0
    var counter = 0
    
    while (j < arrNumber.length){
        if (arrNumber[j] === max){
            counter++
        }
        j++
    }
    // console.log (max)
    return  'Angka paling besar adalah '+ max +' dan jumlah kemuncuan sebanyak '+ counter + ' kali.'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
//   //''