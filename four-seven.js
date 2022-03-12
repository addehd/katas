https://www.codewars.com/kata/5ff50f64c0afc50008861bf0/javascript
/*Four Seven
Simple kata, simple rules: your function should accept the inputs 4 and 7. 
If 4 is entered, the function should return 7. If 7 is entered, the function
should return 4. Anything else entered as input should return 0.
There's only one catch, your function cannot include if statements, switch statements,
 or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

Good Luck! */

//forgot to  handle other numbers!
function fourAndSeven(num){
  var tolvTjugoEtt = num * 3
  var tolvTjugoEttArray = tolvTjugoEtt.toString().slice(0).split('')

  //swap place off tolvEllerTjugoEtt[0] and tolvEllerTjugoEtt[1]
  var tolvEllerTjugoEtt = tolvTjugoEttArray.slice(0)
  var temp = tolvEllerTjugoEtt[0]
  tolvEllerTjugoEtt[0] = tolvEllerTjugoEtt[1]
  tolvEllerTjugoEtt[1] = temp

  var result = Number(tolvEllerTjugoEtt.join(''))/3

  return result }


// :)
function fourSeven(num){
  while(num===4){ return 7 }
  while(num===7){ return 4 }
  return 0 }

console.log(fourSeven(7))