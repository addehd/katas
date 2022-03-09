/* 
ball drop from height flor 
ball bounces 0.66 of height
how many times does mom sees boll from 1.5 window

CONDITIONS
h i meters must be > 0
bounce must be > 0 || < 1
window must be < h
if true return positive int else return -1

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3
- h = 3, bounce = 1, window = 1.5, result is -1 (not fulfilled) */

function bouncingBall(h,  bounce,  window) {
  var count = 1
  if(h > 0 && bounce > 0 && bounce < 1 && window < h){
    while(h > window){
      h = h * bounce
      count++
    }
    return count
  }
  count++
}
console.log(bouncingBall(30,0.66,1.5))
