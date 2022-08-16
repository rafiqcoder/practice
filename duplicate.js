// const names = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'babul', 'kabul', 'dabul', 'abul', 'babul', 'sabul'];

// function removeDuplicate(names) {

//     const unique = [];

//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];

//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqNames = removeDuplicate(names);

// console.log(uniqNames);
let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);


var array = [1, 2, 3, 4];
array[array.length - 1] = 0;

console.log(array);