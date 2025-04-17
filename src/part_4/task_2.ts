const func = (num: number, min: number, max: number): number => {
    const midValue = max - (max - min) / 2

    if (num < min) {
        return min ** 2
    } else if (num > max) {
        return max ** 2
    } else if (num < midValue) {
        return num ** 2
    } else {
        return Math.floor(num)
    }
}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8