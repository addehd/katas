/*
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/


console.log(alternate(5, true, false));

function alternate(n, firstValue, secondValue){
  var result = [];
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result.push(firstValue);
    } else {
      result.push(secondValue);
    }
  }
  return result;
}

function hej(hej){
  console.log(hej);
}

hej(hejsan)