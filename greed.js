/*  
https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

Greed is a dice game played with five six-sided dice. Your mission 
is to score a throw according to these rules. 
You will always be given an array with five six-sided dice values.

Rules:
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point


For example, 
a given "5" can only count as part of a triplet (contributing to the 500 points) 
or as a single 50 points, but not both in the same roll.

Example scoring
Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
2 3 4 6 2   Worthless
*/

function score(dice){
  lib = { 1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0 }
  
  for (let i = 0; i < dice.length; i++) {
    lib[dice[i]]++; }

  let sum = 0;
  if (lib[1] >= 3) { sum = sum + 1000; }
  if (lib[2] >= 3) { sum = sum + 200; } 
  if (lib[3] >= 3) { sum = sum + 300; }
  if (lib[4] >= 3) { sum = sum + 400; }
  if (lib[5] >= 3) { sum = sum + 500; }
  if (lib[6] >= 3) { sum = sum + 600; }
  if (lib[1] == 1) { sum = sum + 100; }
  if (lib[5] == 1) { sum = sum + 50; }
  if (lib[1] > 3) { sum = sum + 100; }
  if (lib[5] > 3) { sum = sum + 50; }

  return sum;
}

console.log(score([5 ,1 ,3 ,4 ,1]));