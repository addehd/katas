function squareDigits(num){
  // [...num+''] ?
  let listOfNum = num.toString().split("")
  let concatenated = []
  for(let i=0; i<listOfNum.length; i++ ){
    concatenated.push(listOfNum[i]*listOfNum[i])    
  }
  return Number(concatenated.toString().replaceAll(',', ""));
}

console.log(squareDigits(9119))

// For example, if we run 9119 through the function, 811181
// will come out, because 92 is 81 and 12 is 1. (81-1-1-81)