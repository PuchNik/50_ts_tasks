function sayHello(name: string = 'someone'): string {
    return `Hello, ${name}`
}

console.log(sayHello('Nik'))
console.log(sayHello())