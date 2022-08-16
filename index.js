// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum = sum + i;
// }

// console.log(sum);


// function sum(num) {
//     if (num == 1) {
//         return 1;
//     }

//     return num - sum(num - 1);
// }
// const result = sum(5);

// console.log(result);


// function nums(num1, num2) {
//     console.log(num1, num2);

//     console.log(arguments); // global arguments that contain all parameter of function
// }

// nums(12, 13, 52, 63, 45, 98);

// const nums = [12, 13, 52, 63, 45, 98];

// for (const number of nums) {
//     console.log(number);
// }

// const products = [
//     { id: 1, name: 'walton phone', price: 19000 },
//     { id: 2, name: 'iphone pattiwala phone', price: 119000 },
//     { id: 3, name: 'Xiami midium family Phone', price: 139000 },
//     { id: 4, name: 'Lenovo second patti Laptop', price: 158900 },
//     { id: 5, name: 'nokia goriber Phone', price: 251900 },
//     { id: 6, name: 'Samsung borloker hedam Laptop', price: 219000 }

// ]

// for (const product of products) {
//     console.log(product);
// }

// function matchedProducts(products, search) {

//     const matched = [];

//     for (const product of products) {

//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'laptop');

// console.log(result);

// let num = 10;

// let result = num / 0;
// console.log(result);
// for (let i = 5; i <= 100; i++) {
//     console.log(i);

// }

// const blueButton = document.getElementById('clickme');
// const redButton = document.getElementById('clickme2');

// blueButton.onclick = function click_me() {
//     document.body.style.backgroundColor = "red";
// }

// redButton.onclick = function make_red() {
//     document.body.style.backgroundColor = "blue";
// }

// blueButton.addEventListener('click', function () {
//     document.body.style.backgroundColor = "blue";
// });

// redButton.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// })
// const h1 = handleOnClick;
// function handleOnClick() {
//     document.getElementById('h1').innerText = "I am Md Rafiqul Islam";
// }

// document.getElementById('h1').addEventListener('click', function () {
//     document.getElementById('h1').innerText = "I am Md Rafiqul Islam";
// });

// document.getElementById('submit').addEventListener('click', function () {
//     const value = document.getElementById('input').value;
//     document.getElementById('text').innerText = value;
//     document.getElementById('input').value = " ";
// })

// const comment = document.getElementById('commentBox');


// const btn = document.getElementById('post');
// const div_con = document.getElementById('container');

// btn.addEventListener('click', function () {

//     // const msg = comment.value;
//     // const p = document.createElement('p');
//     // p.innerText = msg;
//     // div_con.appendChild(p);

//     // comment.value = "";



// })



// const input = document.getElementById('text');
// const btn = document.getElementById('dlbtn');
// const title = document.getElementById('title');

// input.addEventListener('keyup', function () {

//     if (input.value === 'delete') {
//         btn.removeAttribute('disabled');
//     } else {
//         btn.setAttribute('disabled', true);
//     }


//     // console.log('not working');


// })
// btn.addEventListener('click', function () {
//     title.style.display = "none";
//     input.value = " ";
// })


document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2 two clicked');
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2 third clicked');
    // event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2 fourth clicked');
    // event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2 fifth clicked');
    // event.stopPropagation();
})
document.getElementById('list-ul').addEventListener('click', function () {
    console.log('ul clicked');
})
document.getElementById('list_container').addEventListener('click', function () {
    console.log('section container clicked');
})
document.getElementById('body').addEventListener('click', function () {
    console.log('main body clicked');
})

