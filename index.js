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
