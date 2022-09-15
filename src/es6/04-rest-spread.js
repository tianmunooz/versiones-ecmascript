//Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

//Object Destructuring

let user = { username: 'Oscar', age: 34 };
let { username, age } = user;
console.log(username, age);

let fruits2 = ['Apple', 'Banana', 'Orange'];
let [, , fruit2] = fruits2;

console.log(fruit2); /*arroja "Orange"*/

//Spread Operator

let person = { name: 'Cristian', age: 17 };
let country = 'MX';
let id = 1;
let data = { ...person, country, id };
console.log(data);

//Rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);
