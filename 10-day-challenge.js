//Add array
function add(param1, param2) {
    //  write code here.
    var arr = Array.from(arguments);
    var total = arr.reduce((a, b) => a + b, 0)
    return total;
}

//All the longest strings
function allLongestStrings(array) {
    //  write code here.
  var arr = [];
  arr.push(array[0]);
  
  for(let i = 1; i < array.length; i++){
    if(arr.length === 1){
      var len = 0;
    }
    else{
      len = arr.length-1;
    }
    console.log(len);
    if(arr[len].length === array[i].length){
      console.log(arr);
      arr.push(array[i]);
    }
    else if(arr[len].length < array[i].length){
      arr = [];
      arr.push(array[i]);
    }
  }
  return arr;
}

//Alternating sums
function alternatingSums(array) {
    //  write code here.
    var arr = [];
    var evenSum = 0;
    var oddSum = 0;
    for(var i=0; i < array.length; i++){  
        if(i%2 === 0){
          evenSum += array[i];
        }
        else {
          oddSum += array[i];             
        };
      };
    arr.push(evenSum);
    arr.push(oddSum);
    return arr;
}

//Array replace
function arrayReplace(array, elemToReplace, substitutionElem) {
  var arr = array.map(x => (x === elemToReplace) ? substitutionElem : x);
  return arr 
}

//Case Insensitive Palindrome
function caseInsensitivePalindrome(str) {
     var revArr = Array.from(str).reverse().join('').toLowerCase();
     return revArr === str.toLowerCase();
}

//Enclose in brackets
function encloseInBrackets(str) {
    var brackets = ['(',')'] ;
    brackets.splice( 1, 0, str);
    return brackets.join('');
}

//Factorial number
function factorialNumber(num) {
    // write code here
    var arr = [...Array(num).keys()].map(x => x+1);
    var factorial = arr.reduce((x,y) => x*y);
    return factorial; 
}

//First digit
function firstDigit(str) {
    //  write code here.
    var arr = Array.from(str);
    var first;
    for(let i = 0; i < arr.length; i++){
      if(!isNaN(Number(arr[i]))){
        first = arr[i];
        break
      }
    }
    return first;
}
