//works when array is sorted
function search(arr, x) {
    let start = 0;
    let end = arr.length;
    while (start !== end)
    {
        let mid = Math.floor((start + end) / 2);
        if (x === arr[mid])
            return mid;
        if (x < arr[mid])
            end = mid;
        else
           start = mid + 1;}
    return null;
}
let items = [ 2, 3, 5, 7, 11, 13, 17 ];
//console.log(search(items, 1));
//print null
console.log(search(items, 7));
