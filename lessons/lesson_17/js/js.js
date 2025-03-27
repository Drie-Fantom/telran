const products = [
    {
        id: 1,
        type: 'sport',
        title: "Велосипед",
        price: 45000,
        discount: 12
    },
    {
        id: 2,
        type: 'sport',
        title: "Лыжи",
        price: 25000,
        discount: 24
    },
    {
        id: 3,
        type: 'sport',
        title: "Ролики",
        price: 17000,
        discount: 35
    },
    {
        id: 4,
        type: 'product',
        title: "Масло",
        price: 1500,
        discount: 10
    },
    {
        id: 5,
        type: 'product',
        title: "Coffe",
        price: 3500,
        discount: 17
    },
    {
        id: 6,
        type: 'product',
        title: "cola",
        price: 2000,
        discount: 5
    },
];

// console.log(products);

// for (let i = 0; i < products.length; i++) {
//     console.log(`${products[i].title}: (${products[i].price})`);
// }


// =====================================================
// пройдитесь циклом по массиву объектов и найдите общую сумму товаров.
// let sum = 0
// for (let i = 0; i < products.length; i++) {
//    sum = sum + products[i].price
// }
// console.log(sum);

// ========================================================
// вывести название товаров, которые дороже 15000

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 15000) {
//         console.log(products[i].title);
//     }
// }

// ======================================================
// Найти сумму товаров категории 'sport'
// let sumSport = 0
// for (let i = 0; i < products.length; i++) {
//     if (products[i].type === 'sport') {
//         sumSport = sumSport + products[i].price
//     } 
// }
// console.log(sumSport);

// ========================================================
// вывести названия товаров и цену со скидкой
// for (let i = 0; i < products.length; i++) {
//     let newPrice = products[i].price - products[i].discount / 100 * products[i].price
//     // console.log(products[i].title, newPrice);
// }

// --------------------------------------------------------
// for (let i = 0; i < products.length; i++) {
//     let {price, discount, title} = products[i]
//     // let price = products[i].price
//     // let discount = products[i].discount

//     let newPrice = price - discount / 100 * price
//     console.log(title, newPrice);
//     console.log(`name: ${title} price: ${price} New price: ${newPrice}`);
// }


// console.log('hello');

// let printConsole = console.log

// printConsole('hello')



// let arr = [23, 45, 12]

// let [a, b, c] = arr 

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// console.log(a, b, c);
// ------------------

// let obj = {
//     f: 10,
//     g: 20,
//     h: 30
// }

// ======================================
// let {f, h, g} = obj

// let f = obj.f
// let g = obj.g
// let h = obj.h

// console.log(g, f, h);


// let {log} = console

// log('111');


// function ===================================

// console.log(console);

// [].push()

// alert()

// prompt()
// ------------------------------------------------
// function myFunc() {
//     console.log('hello');
//     alert('hello')
//     document.write('hello')
// }

// myFunc()

// myFunc()
// -------------------------------------------------
// function sqrt() {
//     console.log(prompt() ** 2);
// }

// sqrt()
// sqrt()
// -------------------------------------------------
function oddOrEven() {
    if(prompt() % 2 === 0){
        return 'Yes'
    } else{
        return 'No'
    }
}

console.log(oddOrEven);
// ---------------------------------------------------

function sqrt(num, power) {
    console.log(num ** power);
    console.log(num + power);
    console.log(num - power);
    console.log(num / power);
    console.log(num * power);
}

// sqrt(23, 2) // 529
// sqrt(6, 3) // 216
// sqrt(2, 3) // 8

// console.log(sqrt);

// ---------------------------------------------------------
// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

console.log( func(23, 45));

function func(a, b) {
    if (a > b) {
        // console.log(a);
        return a
    }else{
        // console.log(b);
        return b
    }
}

// func(prompt(), prompt())

let num = func(5, 2)

console.log(num);
