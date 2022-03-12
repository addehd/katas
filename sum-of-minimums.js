/*
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

Given a 2D ( nested ) list ( array, vector, .. ) 
of size m * n, your task is to find the sum of
 the minimum values in each row.

For Example:
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of 
the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)

*/

// function sumOfMinimums(arr){
//   //sum = []
//   //loop throug arr
//     //sort arr[i]
//     //sum.push(arr[i])
// }


function sumOfMinimums(arr) {
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

console.log(Math.min(...[2,3,5,1,4]))