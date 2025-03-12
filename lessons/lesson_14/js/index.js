// const firstName = "ivan";
// const lastName = "korniichuk"
// // let write = prompt();
// const r = 12;
// const g = 34;
// const b = 14;

// const root = document.getElementById('root');

// const Konkatination = (...props) => {
//     if (props.length < 3) {
//         console.log("нужно больше чисел");
//         return;
//     }
//     console.log("rgb (" + props[0] + ", " + props[1] + ", " + props[2] + ")");
// };
// const Interpolate = (...props) => {
//     console.log(`rgb (${props[0]}, ${props[1]}, ${props[2]})`);
// };
// Konkatination(r, g, b);
// Interpolate(r, g, b);
// const getUsers = async () => {
//     try {
//         const respons = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await respons.json();
//         if (users) {
//             console.log(users);
//             users.forEach(user => {
//                 const userElement = document.createElement('div');
//                 userElement.classList.add("user");

//                 // Object.entries(user).forEach(([key, value]) => {
//                 //     if (typeof (value) !== 'object') {
//                 //         const userDiv = document.createElement("div");

//                 //         userDiv.innerHTML = `
//                 //             <div class="users__item">${key}: ${value}</div>
//                 //         `;
//                 //         userElement.appendChild(userDiv);
//                 //     }
//                 // });
//                 // for (const [key, value] of Object.entries(user)) {
//                 //     if (typeof (value) !== 'object') {
//                 //         const userDiv = document.createElement("div");

//                 //         userDiv.innerHTML = `
//                 //                     <div class="users__item">${key}: ${value}</div>
//                 //                 `;
//                 //         userElement.appendChild(userDiv);
//                 //     }
//                 // }

//                 const userFilds = ['name', 'email', 'address', 'phone'];

//                 userFilds.forEach(fild => {
//                     if (user[fild]) {
//                         const userDiv = document.createElement("div");
//                         userDiv.classList.add('users__item');
//                         if (typeof (user[fild]) !== "object" || Array.isArray(user[fild])) {
//                             userDiv.innerHTML = `
//                                 ${fild}: ${user[fild]}
//                             `;
//                         }
//                         else {
//                             Object.entries(user[fild]).forEach(([key, value]) => {
//                                 if (typeof (value) !== "object") {
//                                     const userDivItems = document.createElement('div');
//                                     userDivItems.classList.add('users__items-item')
//                                     userDivItems.textContent = `${key}: ${value}`;
//                                     userDiv.appendChild(userDivItems);
//                                 }
//                             });
//                         }
//                         userElement.appendChild(userDiv);
//                     }
//                 });


//                 root.appendChild(userElement);
//             });
//         }
//     }
//     catch (error) {
//         console.log("Ошибка :", error);
//     }
// }
// getUsers();


import { getUsersFromApi } from './services/ApiUsers.js';
import { TableRenderer } from './components/TableRenderer.js';
import { getCommmentsFromApi } from './services/ApiComments.js'

const rootElement = document.getElementById('root');
const dataList = new TableRenderer(rootElement);

const userFields = ['name', 'username', 'email', 'phone', 'website'];
const commentFields = ['id', 'name', 'email', 'body'];
const loadDataAndRender = async () => {
    try {
        const users = await getUsersFromApi();
        dataList.render(users, userFields);
        const comments = await getCommmentsFromApi();
        dataList.render(comments, commentFields);
    } catch (error) {
        console.error("Ошибка при загрузке или рендеринге данных:", error);
    }
};

loadDataAndRender();