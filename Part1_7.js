let arr = ["a", "ab", "abc", "abcd"];
function arrayLength(arr) {
    return arr.map((str) => str.length);
}

// ...... Or ......

function arrayLength2(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}
console.log(arrayLength(arr));
console.log(arrayLength2(arr));