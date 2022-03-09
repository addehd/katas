//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

/*
you are given "2 2 4 5 6", and have to return
the highest and lowest number. 

Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
  numbers = numbers.split(' ').sort()
  numbers.sort(function(a, b) {
    return a - b;
  })
  return numbers[numbers.length - 1] + ' ' + numbers[0]
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));