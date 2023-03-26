function search(arr, x) {
    let i = 0;
    let count = arr.length;
    while (i < count)
    {
        if (arr[i] == x)
            return i;
        i++;
    }
    return null;
}
let items = [ 2, 3, 5, 7, 11, 13, 17 ];
console.log(search(items, 1));
//print null
console.log(search(items, 7));
