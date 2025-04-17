const getNumberDigit = (number: number, digitPosition: number): number | undefined => {
    if (digitPosition < 0) {
        return undefined
    }

    const result: number[] = []

    while (number > 0) {
        result.unshift(number % 10)
        number = Math.floor(number / 10)
    }

    if (digitPosition < result.length) {
        return result[digitPosition]
    } else {
        return undefined
    }
}


console.log(getNumberDigit(123, 0))
console.log(getNumberDigit(123, 1))
console.log(getNumberDigit(123, 2))
console.log(getNumberDigit(1, 2))