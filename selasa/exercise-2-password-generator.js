
 function changeVocals (str) {
    //code di sini
    var result= ''
    var changeLib = 'aiueoAIUEO'
    var changer = 'bjvfpBJVFP'

    for ( var i =0; i < str.length; i++){
      // if (str[i] === 'a') {
      //   result += 'b'
      // } else if (str[i] ==='i'){
      //   result+= 'j'
      // } else if (str[i] ==='u'){
      //   result+= 'v'
      // } else if (str[i] ==='e'){
      //   result+= 'f'
      // } else if (str[i] ==='o'){
      //   result+= 'p'
      // } else if (str[i] ==='A'){
      //   result+= 'B'
      // } else if (str[i] ==='I'){
      //   result+= 'J'
      // } else if (str[i] ==='U'){
      //   result+= 'V'
      // } else if (str[i] ==='E'){
      //   result+= 'F'
      // } else if (str[i] ==='O'){
      //   result+= 'P'
      // } else {
      //   result +=[str[i]]
      // }
      for (var j = 0; j < changeLib.length ; j++ ){
        if (str[i] === changeLib[j]){
          result += changer[j]
        }
      }

    }
    return result
  }
  
  function reverseWord (str) {
    //code di sini
    var rev = ''
    
    for (var i = 0 ; i < str.length;i ++){
      rev = str[i] + rev
    }

    return rev
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var result =''

    for (var i = 0; i < str.length; i++){
      if (str[i].toUpperCase() === str[i]){
        result += str[i].toLowerCase()
      }else {
        result += str[i].toUpperCase()
      }
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    if (str.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var result = ''

    for (var i = 0; i < str.length; i++){
      if (str[i] !== ' ')
      result += str[i]
    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    var changeVoc = changeVocals(name) 
    var revWord = reverseWord(changeVoc)
    var setLUC = setLowerUpperCase(revWord)
    var remVoc = removeSpaces(setLUC)

    // return changeVoc
    // return revWord
    // return setLUC
    return remVoc
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'