/*
https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
and now they want to show Charlie their entire collection. However, Charlie doesn't like 
these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit during the session if they show the same motive at most N times.
Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove
numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at 
most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], 
you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 
3 times, and then take 3, which leads to [1,2,3,1,2,3].

deleteNth ([1,1,1,1],3) // return [1,1,1]
deleteNth ([20,37,20,21],1) // return [20,37,21]
*/

const N = 2
const numbers = [20,37,20,21]

function deleteNth(L,N){
  let count = 0
  let newL = []
  L.sort()
  for (let i = 0; i < L.length; i++) {
    let alone = L[i-1] !== L[i] && L[i] !== L[i+1]
    let notPrev = L[i] !== L[i-1] 
    let notNext = L[i] !== L[i+1] 
    
    if(count < N ){
      newL.push(L[i])
      count++ }
    if(alone || notNext){
      count = 0 }
  }
  return newL
}

console.log(deleteNth(numbers, N))