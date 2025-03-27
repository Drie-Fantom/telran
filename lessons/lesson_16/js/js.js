// const num = [4, 7, 2, 1, 8]

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])


// for(let i = 0; i < 15; i = i + 2 ) {
//     console.log(i);
// }

// --------------------------------------------------
// const even = []
// const odd = []
// let sum = 0
// let sumEven = 0
// let sumOdd = 0

// for(let i = 0; i < num.length; i = i + 1 ) {
//     if (num[i] % 2 === 0) {
//         even.push(num[i]); // Добавляем в массив четные числа
//         sumEven = sumEven + num[i] // Находим сумму четных чисел

//     } else if(num[i] % 2 !== 0) {
//         odd.push(num[i]) // // Добавляем в массив не четные числа
//         sumOdd = sumOdd + num[i] // Находим сумму не четных чисел
//     }
// // ---------------------------------------
//     sum = sum + num[i] // Находим сумму всех чисел
// }

// console.log(even);
// console.log(odd);
// console.log('Total: ' + sum);
// console.log('Total Even: ' + sumEven);
// console.log('Total Odd: ' + sumOdd);


// ----------------------------------------------

// sum = sum + num[0]
// console.log(sum);

// sum = sum + num[1]
// console.log(sum);
// sum = sum + num[2]
// console.log(sum);
// sum = sum + num[3]
// console.log(sum);

// let sum = 0
// for (let i = 0; i < num.length; i++) {
//     // sum = sum + num[i]
//     sum += num[i]
// }
// console.log(sum);



// let i = 0

// i = i + 1 // 1

// i += 1 // 2

// i += 1 // 3

// i++ // 4


// console.log(i);

// -------------------------------------------------------------
// const category = ['sport', 'product', 'sport', 'sport', 'drink']

// for (let i = 0; i < category.length; i++) {
//     if (category[i] === 'sport') {
//         console.log(category[i]);
//     }
// }


// Object ===============================================

// const userArr = ['Ivanov', 'Ivan', 25, 'm']
// console.log(userArr);


// const userObj = {
//     lastName: 'Ivanov', 
//     firstName: 'Ivan', 
//     gender: 'm', 
//     age: 25
// }

// userObj.firstName = 'Anderei'
// console.log(userObj);

// console.log(userObj.firstName); 

// console.log(userObj['firstName']);

// userObj.lang = 'en'

// console.log(userObj);


// -----------------------------------------------------------
// Задание: Создать объект с названием и ценой продукта и 
// выведите данные в консоль.


// const products = {
//     title: 'Millk',
//     price: 1.2
// }

// console.log(products.price);


// const products = [
//     {title: 'millk', price: 20},
//     {title: 'bread', price: 10},
//     {title: 'coffe', price: 30}
// ]

// console.log(products);

// console.log(products[2].price);

const products = [
    {
        id: 1,
        type: 'sport',
        title: "Велосипед",
        price: 45000
    },
    {
        id: 2,
        type: 'sport',
        title: "Лыжи",
        price: 25000
    },
    {
        id: 3,
        type: 'sport',
        title: "Ролики",
        price: 17000
    },
    {
        id: 4,
        type: 'product',
        title: "Масло",
        price: 1500
    },
    {
        id: 5,
        type: 'product',
        title: "Coffe",
        price: 3500
    },
    {
        id: 6,
        type: 'product',
        title: "cola",
        price: 2000
    },
];


// for (let i = 0; i < products.length; i++) {
//     console.log('Name: ' + products[i].title, 'Price: ' + products[i].price);
// }

// ---------------------------------------------------------
// Задание: пройдитесь циклом по массиву объектов и найдите 
// общую сумму товаров.

let sumProduct = 0
for (let i = 0; i < products.length; i++) {
    sumProduct = sumProduct + products[i].price
}

// console.log(sumProduct);

// ---------------------------------------------------------
// Задание: вывести название товаров, которые дороже 15000

let a = +prompt()
for (let i = 0; i < products.length; i++) {
    if (products[i].price > a) {
        console.log(products[i].title);
    }
}

