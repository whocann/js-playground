const first = { first: "john" };
const second = { second: "peter" };

const combine = {...first, ...second, third: "aus"};
console.log(combine);



// const btns = [...document.querySelectorAll(".bag-btn")]

// class Product {
//     getProducts(){
//         return {}
//     }
// }

// class storage {
//     static saveCart() {

//     }
// }

// class ui {

// }

// let cart = []
// let item = { ...Product.getProducts(id), amount: 1 }
// cart = [...cart, item]