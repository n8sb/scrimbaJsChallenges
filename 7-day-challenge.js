//Add border
function addBorder(array) {
    //  write code here.
    var topWall = '*****';
    var bottomWall = '*****';
    var newArray = [];
    array.forEach(
        function(element){
            newArray.push('*' + element + '*')
        }
    )
    newArray.unshift(topWall);
    newArray.push(bottomWall);
    return newArray;
}


//Add two digits
function addTwoDigits(num)  {
  var arr = num.toString().split('');
  return arr.reduce(function(first, next){
   return parseInt(first) + parseInt(next);
  }, 0);
}


//First duplicate
function firstDuplicate(nums) {
    var numsArr = [];
    for(var i=0; i < nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                numsArr.push(j);
            };
        };
    };
    if(numsArr.length > 0){
      return nums[Math.min(...numsArr)];
    } 
    else {
      return -1;
    }
};


//Sum all primes
Work in progress


//Even digits only
function evenDigitsOnly(number) {
    const isEven = (nums) => nums % 2 === 0;
    var arr = number.toString().split('');
    return arr.every(isEven);
}


//Proper Noun Correction
function properNounCorrection(str) {
  var arr = Array.from(str.toLowerCase());
  var capital = arr[0].toUpperCase();
  arr[0] = capital;
  return arr.join('');
}


//Make array consecutive
function makeArrayConsecutive(nums) {
  nums.sort();
  var statues = 0;
  console.log(nums);
  for(var i = 0; i < nums.length; i++){
    if((nums[i+1] - nums[i]) > 1){
      nums.splice(nums[i-1], 0, nums[i] + 1)
      statues++;
    }
  }
  return statues;
}
