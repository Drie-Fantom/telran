function calculateProduct() {
    let firstNumber = prompt("Введите первое число");
    let secondNumber = prompt("Введите второе число");

    // Проверяем, что введены не пустые значения
    if (firstNumber === null || secondNumber === null || firstNumber === "" || secondNumber === "") {
        alert("Ошибка: числа не были введены");
        return;
    }

    // Преобразуем строки в числа
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Проверяем, что преобразование прошло успешно
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Ошибка: введите корректные числа");
        return;
    }

    const product = firstNumber * secondNumber;
    console.log(`Произведение чисел ${firstNumber} и ${secondNumber} равно: ${product}`);
    return product;
}

// Вызываем функцию
calculateProduct();

function sortArray(array) {
    // Проверяем, что массив существует и не пустой
    if (!array || array.length === 0) {
        console.log("Ошибка: массив пуст или не определен");
        return;
    }

    // Создаем копию массива, чтобы не изменять исходный
    const sortedArray = [...array].sort((a, b) => a - b);
    console.log("Отсортированный массив:", sortedArray);
    return sortedArray;
}

// Создаем тестовый массив
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Исходный массив:", testArray);

// Вызываем функцию сортировки
sortArray(testArray);

// function func(num, power, a) {
//     let res = num + power  - a

//     return res
// }

// let a = func()

// let b = func(23, 4, 3)
// console.log(a, b);

// let newRes = func(45, 2, 2)

// console.log(newRes);


// Задача Объявить функцию, которая считывает 
// значение через prompt и выводит “ДА” если 
// число четное и “НЕТ” в ином случае.


// function func(a) {
//     if (a % 2 === 0) {
//         return 'YES'
//     } else {
//         return 'NO'
//     }
// }

// let result = func(prompt())
// console.log(result);

// Задача. Создать функцию, которая в качестве 
// аргументов получает два числа и выводит в 
// консоль наибольшее.

// function maxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1
//     }else if(num2 > num1 && num2 > num3){
//         return num2
//     } else {
//         return num3
//     }
// }

// console.log(maxNum(1, 2, 3));
// console.log(maxNum(3, 2, 1));
// console.log(maxNum(2, 2, 1));


// let side1 = 3
// let side2 = 4

// function power(a, b) {
//     const hipotenyza = Math.sqrt(a*a + b*b)
//     return hipotenyza
// }

// console.log(power(3, 4));

// console.log(Math.hypot(3, 4));


// Задача 
// Описать функцию, которая получает в качестве 
// аргумента число и возвращает массив из чисел 
// от 0 до указанного числа.



// 5
// [0 1 2 3 4 5]

// let array = []

// function func(number) {
//     let array = []
//     for (let i = 0; i < number; i++) {
//         array.push(i)
//     }
//     return array
// }

// let arr1 = func(8) //[1...8]
// console.log(arr1);

// console.log(func(5));

// console.log(func(20));


// Document objec model============================


// console.log(console);

// console.log(Math);

// console.dir(document);


// console.log(document.querySelector('h2'));

// document.querySelector('p').innerText = 'new text'


// console.log(document.querySelectorAll('p'));


// let p = document.querySelectorAll('p')

// p[1].innerText = 'jjj'



// for (let i = 0; i < document.querySelectorAll('p').length; i++) {
//     document.querySelectorAll('p')[i].innerText = 'new text'
// }



let h1 = document.querySelector('h1')

// let p = document.querySelectorAll('p')

// for (let i = 0; i < p.length; i++) {
//     p[i].innerText = 'new text'
// }


let pThree = document.querySelector('.three')
pThree.innerText = 'jjj'



let four = document.querySelector('#four')

four.style.color = 'blue'
console.log(four.style);
