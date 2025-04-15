// // Вариант №1
// interface Person {
//     age: number,
//     favColor: string,
//     height: number,
//     pet: string,
//     money: number
// }
//
// const obj: Person = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// }
//
// const updateObj: {
//     age: number,
//     favColor: string,
//     money: number
// } = {
//     age: 23,
//     favColor: 'blue',
//     money: 11450
// }
//
// const obj2: Person = {
//     ...obj,
//     ...updateObj
// }
//
// console.log(obj)
// console.log(updateObj)
// console.log(obj2)

// // Вариант №2
// interface Person {
//     age: number;
//     favColor: string;
//     height?: number; // Используем ? для необязательных свойств
//     pet?: string;    // Используем ? для необязательных свойств
//     money: number;
// }
//
// const obj: Person = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// }
//
// const updateObj: Person = {
//     age: 23,
//     favColor: 'blue',
//     money: 11450
// }
//
// const obj2: Person = {
//     ...obj,
//     ...updateObj
// }
//
// console.log(obj);
// console.log(updateObj);
// console.log(obj2);


// // Вариант №3
// interface Person {
//     age: number;
//     favColor: string;
//     height?: number; // Используем ? для необязательных свойств
//     pet?: string;    // Используем ? для необязательных свойств
//     money: number;
// }
//
// const obj: Person = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// }
//
// const updateObj: Pick<Person, 'age' | 'favColor' | 'money'> = {
//     age: 23,
//     favColor: 'blue',
//     money: 11450
// }
//
// const obj2: Person = {
//     ...obj,
//     ...updateObj
// }
//
// console.log(obj);
// console.log(updateObj);
// console.log(obj2);
