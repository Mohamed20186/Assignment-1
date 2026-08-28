function divisibleBy3And5Checker(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by either 3 or 5";
    }
}

console.log(divisibleBy3And5Checker(15));
console.log(divisibleBy3And5Checker(67));