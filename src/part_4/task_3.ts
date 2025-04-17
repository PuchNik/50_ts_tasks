const isPerfectNumber = (num: number): boolean => {
    let count: number = 0

    if (num < 1) {
        return false
    } else {
        for (let i: number = 1; i < num; i++) {
            if (num % i === 0) {
                count += i
            }
        }
    }
    return count === num
}


console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false