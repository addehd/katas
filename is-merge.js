/* 
https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

Can s be formed from two other strings, part1 and part2?

Restriction: characters in part1 and part2 should be in the same 
order as in s.  // not sure if this is a restriction

Example:
'codewars' is a merge from 'cdw' and 'oears':
    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

============ v1 ============
Psuede code:

s = 'codewars'
part1 = 'cdw'
part2 = 'oears'

newpart = join part1 and part2, sort part1 and part2
sortedS = sort s

compare sortedS and newpart
if equal, return true

//passed all tests exept for one

============ v2 ============

Psuede code:
s = 'codewars'
part1 = 'cdw'
part2 = 'oears'

merged = []

loop through s
  if s[i] === part1[i]{
    merged.push(s[i])
    part2[0].push(' ')
  }
  if s[i] === part2[i]{
    merged.push(s[i])
    part1[0].push(' ')
  }

let result = merged.join('') === part1.join('').concat(part2.join(''))
*/

function isMerge(s, part1, part2) {
  var s = s.split('');
  var part1 = part1.split('');
  var part2 = part2.split('');
  let merged = [];

  let hasSameLetters = s.slice(0).sort().join('') === part1.slice(0).concat(part2.slice(0).sort()).sort().join('')

  for (let i = 0; i < s.length; i++) {
    if (s[i] === part1[i]) {
      merged.push(part1[i]);
      part2.unshift(' ');
    } else if (s[i] === part2[i]) {
      merged.push(part2[i]);
      part1.unshift(' '); } }
  
  return merged.join('') === s.join('') || hasSameLetters;
}
console.log(isMerge('codewars', 'cdw', 'oears'));


//============ version 1 ============
// function isMerge(s, part1, part2) {
//   let hasSameLetters = s.split('').sort().join('') === part1.split('').concat(part2.split('').sort()).sort().join('')
//   return hasSameLetters
// }
// console.log(isMerge('codewars', 'code', 'wars'));
//console.log(isMerge('codewars', 'cdw', 'oears'));
// console.log(!isMerge('codewars', 'cod', 'wars'));