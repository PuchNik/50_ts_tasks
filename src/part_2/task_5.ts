enum Operations {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/',
}

const calc = (a: number, b: number, operation: Operations): number => {
    switch (operation) {
        case Operations.Add:
            return a + b;
        case Operations.Subtract:
            return a - b;
        case Operations.Multiply:
            return a * b;
        case Operations.Divide:
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a / b;
        default:
            throw new Error("Invalid operation.");
    }
}

console.log(calc(1, 2, Operations.Add));      // 3
console.log(calc(1, 2, Operations.Subtract)); // -1
console.log(calc(1, 2, Operations.Multiply));  // 2
console.log(calc(10, 2, Operations.Divide));   // 5
