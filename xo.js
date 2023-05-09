function XO(str) {
  str.split("")
  let countX = 0 
  let countO = 0
  
  for(i=0; i<str.length; i++){
    let letter = str[i].toLowerCase();
    if(letter==="x"){
      countX++ }
    if(letter==="o"){
      countO++ } 
  }
  return countX === countO
}

console.log(XO("ooxx")); // true
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); // false
