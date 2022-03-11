/*
https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript

Anagrams
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array 
if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams (word, words) {
  const match = word.split('').sort().join('')
  results = []
  words.forEach(w => {
    let sortedWord = w.split('').sort().join('')
    if(sortedWord === match){
      results.push(w)
    }
  });
 return results
}
//console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

/* Elegant Solutions */

function anagrams(word, words) {
  return words.filter(function (e) {
      return e.split('').sort().join('') === word.split('').sort().join('');
  })
}

let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
