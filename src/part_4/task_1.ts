const isPrimeNumber = (number: number): boolean => {
    if (number < 2) {
        return false
    } else if (number === 2) {
        return true
    } else if (number > 2 && number % 2 === 0) {
        return false
    }

    for (let i: number = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrimeNumber(2))
console.log(isPrimeNumber(3))
console.log(isPrimeNumber(4))
console.log(isPrimeNumber(5))
console.log(isPrimeNumber(29))
console.log(isPrimeNumber(30))
