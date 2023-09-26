const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function findMe(target, start, end){
  if(start > end){
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if(target === arr[mid]){
    return mid;
  }
  //check left side
  if(target < arr[mid]){ 
    return findMe(target, start, mid - 1//iteration counting down);
  }
  //check right side of array
  return findMe(target, mid + 1, end);
}

console.log(findMe('a', 0, arr.length - 1));