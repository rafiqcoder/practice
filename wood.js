const phones = [
    { name: 'Pant', camera: 12, storage: '32Gb', price: 2000, color: 'silver', quantity: 5 },
    { name: 'Panjabi', camera: 12, storage: '32Gb', price: 5000, color: 'silver', quantity: 6 },
    { name: 'shari', camera: 12, storage: '32Gb', price: 3000, color: 'silver', quantity: 9 },
    { name: 'Xiaomi', camera: 12, storage: '32Gb', price: 36000, color: 'silver', quantity: 3 },
    { name: 'Borkha', camera: 12, storage: '32Gb', price: 5500, color: 'silver', quantity: 2 },
];


// function cheapestPhone(phones) {

//     let cheapest = phones[0];

//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }

//     return cheapest;
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

// const phones = [
//     { name: 'Pant', camera: 12, storage: '32Gb', price: 2000, color: 'silver', quantity: 5 },
//     { name: 'Panjabi', camera: 12, storage: '32Gb', price: 5000, color: 'silver', quantity: 6 },
//     { name: 'shari', camera: 12, storage: '32Gb', price: 3000, color: 'silver', quantity: 9 },
//     { name: 'Xiaomi', camera: 12, storage: '32Gb', price: 36000, color: 'silver', quantity: 3 },
//     { name: 'Borkha', camera: 12, storage: '32Gb', price: 5500, color: 'silver', quantity: 2 },
// ];




// function shoppintCart(phones) {
//     let allEachTotal = [];

//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         let eachTotal = phone.name + " " + phone.price + "x" + phone.quantity + "= " + (phone.price * phone.quantity);
//         allEachTotal.push(eachTotal);

//     }
//     console.log(allEachTotal);
//     return totalPrice;
// }

// const cartTotal = shoppintCart(phones);
// console.log("your Cart Total is: " + cartTotal);


/*
1. If tecket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. Firts 100 tickets will be
100/ticket . rest tickets will be 90 taka per piece
3. if you purcjhase more than 200 tickets
    first 100 --> 100 tk
    101-200 ---> 90tk
    200+ ----> 70tk

*/


// function discountPrice(ticketNumber) {
//     const first100 = 100;
//     const second100 = 90;
//     const restRate = 70;

//     if (ticketNumber >= 200) {
//         const first100Price = first100 * 100;
//         let restTicketQuantity = ticketNumber - 100;
//         const second100Price = second100 * 100;
//         restTicketQuantity = restTicketQuantity - 100;
//         const restTicketPrice = restRate * restTicketQuantity;

//         const totalBill = first100Price + second100Price + restTicketPrice;

//         return totalBill;

//     } else if (ticketNumber <= 200) {
//         const first100Price = first100 * 100;
//         let restTicketQuantity = ticketNumber - 100;
//         const restTicketPrice = second100 * restTicketQuantity;
//         const totalBill = first100Price + restTicketPrice;

//         return totalBill;
//     } else {
//         const allTicketPrice = first100 * ticketNumber;
//         return allTicketPrice;
//     }
// }
// const Bill = discountPrice(300);
// console.log(Bill);

// const input = [3, 95, 86, 7, 8, 899, 10, 56, 60, 98];

// function averageNum(numbers) {
//     let sum = 0;
//     let totalNumber = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum = sum + element;

//         if (i == 0) {
//             totalNumber = 1;

//         } else {

//             totalNumber = totalNumber + 1;
//         }
//     }
//     let averageOfval = Math.ceil((sum / totalNumber));
//     return averageOfval;
// }
// const average = averageNum(input);

// console.log(average);

// function primeNumber(number) {
//     let prime = '';
//     for (let i = 2; i < number; i++) {
//         // console.log(i);
//         if (number % i == 0) {
//             prime = `It is Not a prime Number ${number}`;
//             break;
//         }
//         else {
//             prime = `It is a prime number ${number}`;
//         }


//     }
//     return prime;
// }

// const isPrime = primeNumber(7);
// console.log(isPrime);


// const array = "5, 5, 7, 8, 9";

// if (array.startsWith(4)) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// const array = [10, 20, 50, 60, 30, 10];

// array.sort((a, b) => a - b);
// // console.log(array);

// function secondHighest(array) {
//     let highest = array;
//     let max = Math.max(...highest);

//     highest.pop(max);
//     let max2 = Math.max(...highest);


//     return max2;
// }
// const result = secondHighest(array);
// console.log("second Highest Is : " + result);
// let i = 0;
// while (i > -10) {

//     console.log(i);
//     i--;
// }