function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var newStr = angka.toString()
    var kalipertama = 1

    for (var i = 0; i < newStr.length; i++){
      // console.log ( Number(newStr[i]))
      kalipertama*=Number(newStr[i]) 
    }
    // console.log (kalipertama)
    

    if (newStr.length === 1) {
        return kalipertama
    } else {
        return kaliTerusRekursif(kalipertama)
    }

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6