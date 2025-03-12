// let a = true

// console.log(typeof a);

// console.log(23 < 20);
// console.log(23 <= 20);
// console.log(23 > 20);
// console.log(23 >= 20);

// console.log(23 == 20);
// console.log(23 === 20);
// console.log(20 !== 20);

// -------------------------------------------
// let num = 0

// if (num > 0) {
//     console.log('posityve number');
// } else if(num < 0) {
//     console.log('negative number');
// } else {
//     console.log('null');
// }

// -------------------------------------------
// let number = prompt()

// if (number % 2 === 0) {
//     console.log('четное число');
// } else if(number % 2 !== 0){
//     console.log('не четное число');
// }

// let age = prompt(1700)

// if (age % 400 === 0) {
//     console.log('високосный год');
// } else if(age % 100 === 0) {
//     console.log('не високосный год');
// } else if(age % 4 === 0) {
//     console.log('високосный год');
// } else {
//     console.log('не високосный год');
// }

// if (age % 4 === 0 && age % 100 !== 0 || age % 400 === 0) {
//     console.log('високосный год');
// } else {
//     console.log('не високосный год');
// }

//  - или

// && - и
const time = 23.99999;

if (time > 5 && time <= 11) {
    console.log('утро');
} else if (time > 11 && time <= 17) {
    console.log('день');
} else if (time >= 17 && time < 24) {
    console.log('вечер');
} else if (time === 24 || time <= 5) {
    console.log('ночь');
}