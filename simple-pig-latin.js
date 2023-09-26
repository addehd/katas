/*
Move the first letter of each word to the end of
it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/
  
// function pigIt(str){
//   str.split(' ').map(function(word){
//     return word.slice(1) + word[0] + 'ay'
//   } ).join(' ')
// }


function pigIt(str){
  str.split(' ').map(function(word){
    // return word.slice(-2) + word[0] + "ay"
    console.log(word.slice(-2) + word[0] + "ay")

  })
}

console.log(pigIt("Pig latin is cool"))