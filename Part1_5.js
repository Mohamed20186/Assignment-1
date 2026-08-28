let arryOne = [1,2,3];
let arryTwo = [4,5,6];
let mergedArray=[...arryOne,...arryTwo];
console.log(mergedArray);


//...... OR ........

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));