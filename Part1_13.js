function findTheLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }                           

} 
   return largest;
}

console.log(findTheLargestNumber([1, 5, 3, 9, 2]));