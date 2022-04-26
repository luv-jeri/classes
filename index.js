// Functional
// const gov = 1.07;
// const sanjay_tax = 100 ;
// const sanjay_income = 1000;
// const mukesh_tax = 100 ;
// const mukesh_income = 1000;

// const calcTax = ()=>{
//  return income * tax;
// }
// const calcTax2 = ()=>{
//  return income * tax;
// }

// Object literals
// const tax = {
//   tax: 0.07,
//   price: 100,
//   calcTax: function () {
//     return this.price * this.tax;
//   },
// };

// factory function
// const tax = (income, tax) => {
//   const gov = 0.07;
//   return {
//     tax,
//     income,
//     calcTax: function () {
//       return this.income * this.tax + gov;
//     },
//   };
// };

// function tax (tax, income)  {
//   const gov = 0.07;
//   return {
//     tax,
//     income,
//     calcTax: function () {
//       return this.income * this.tax + gov;
//     },
//   };
// };

// const sanjay = Tax(500, 2);
// const rajesh = Tax(2003, 2);
// const murugan = Tax(100, 2);

//  this keyword //- Every function have a "this" keyword, which points to the object that owns the function / calling the function.
// ! only normal function can access this keyword !
// const obj = {
//   name: 'sanjay',
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// obj.sayName();

//` Constructor function
// ! const Tax = (income, tax) => {}; // Arrow function not work
// function Tax(income, tax) {
//   this.income = income;
//   this.tax = tax;
//   this.calcTax = () => {
//     return this.income * this.tax;
//   };
// }

// const sanjay = new Tax(100, 0.07);

// sanjay.calcTax();

// const obj = new Object({
//   name: 'sanjay',
// }); // {}

// const num = new Number(6); // 6
// const str = new String('Hello'); // "Hello"
// const arr = new Array(1, 2, 3); // [1,2,3]
// const tax = new Tax(100, 0.07);

// const obj = {
//   name: 'sanjay',
// }; // ` new Object({name : 'sanjay'})

// const arr = [1, 2, 3]; // new Array()
// console.log(arr);

// console.log(arr.hasOwnProperty('name'));

// function Array_(...args) {
//   let arr = [args];
//   this.push = function (value) {
//     arr = [...arr, value];
//   };
// }

// arr.push(4);

// const smallGen = (name, age) => {
//   return {
//     name,
//     age,
//     sayName: function () {
//       console.log(this.name);
//     },
//   };
// };

// const sanjay = smallGen('sanjay', 20);
// const rajesh = smallGen('rajesh', 30);

// console.log(sanjay);
// console.log(rajesh);

// function SmallGen(income, tax) {
//   this.income = income;
//   this.tax = tax;
// }

// const sanjay = new SmallGen(100, 0.07);
// const date = new Date();

// const obk = {}

// const arr = []

// console.log(sanjay);
// console.log(obk);
// console.log(arr);
// console.log(date);

// const arr = new Array(1, 4, 4, 6, 7);
// const num = new Number(45);
// const str = new String('Hello');
// const obj = new Object({ name: 'John' });

// Object.prototype.custom = 'i am, custom';

// // console.log(Object.prototype.__proto__);

// function Passenger(stop, name, seat) {
//   this.stop = stop;
//   this.name = name;
//   this.seat = seat;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = 10

// function fun(){}

// console.log(arr.length , arr.__proto__.length);

// console.log(fun.custom, fun);

// Passenger.prototype.iam = 'passenger';

// const sanjay = new Passenger('MIG4', 'sanjay', 'A2');

// console.log('1', sanjay);
// console.log('2', sanjay.__proto__.iam, sanjay.iam);
// console.log(sanjay.__proto__.__proto__.custom, sanjay.custom);

// Passenger.prototype = Humans.prototype;

// console.log('Humans.prototype', Humans.prototype);

// console.log(arr)
// console.log(num)
// console.log(str)
// console.log(obj)

// console.log('Object', Object.prototype);
// Object.prototype.custom = 'i am, custom';
// Array.prototype.arr = 'i am, custom arr';
// // console.log(sanjay);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.__proto__);
