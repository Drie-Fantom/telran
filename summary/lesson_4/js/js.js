// let students = Number(prompt("Введите количество студентов:"));
// let stul = Number(prompt("Введите количество стульев:"));

// if (!Number.isNaN(students) && !Number.isNaN(stul)) {
//     console.log(students);
//     console.log(stul);
//     if (students > stul) {
//         alert(`Стульев не хватает`);
//     } else {
//         alert(`Стульев хватает`);
//     }
// } else {
//     alert(`Введите числа`);
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }
// for (let index = 10; index < 100; index += 5) {
//     // if (index % 5 == 0) {
//     //     console.log(index);
//     // }

//     console.log(index);
// }

let numbers = [0, 13, -2, 5, 20, 23, 67, -56, 18, 0.25, -39, 37, 120];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        console.log(numbers[index]);
    }
}
