// const card = document.querySelector('#card');

// const movie = {
//   title: 'inception',
//   year: 2015,
//   rate: '9.9',
//   actors: ['Leonardo DiCaprio', 'Jo seph Gordon-Levitt', 'Ellen Page'],
//   isOld: function () {
//     const currentYear = new Date().getFullYear();
//     const difference = currentYear - this.year;
//     console.log(
//       `${this.title} was released in ${this.year} and is ${difference} years old.`
//     );
//   },
// };

// const movie2 = {
//   title: 'star wars',
//   year: 2015,
//   rate: '9.9',
//   actors: ['Leonardo DiCaprio', 'Jo seph Gordon-Levitt', 'Ellen Page'],
//   isOld: function () {
//     const currentYear = new Date().getFullYear();
//     const difference = currentYear - this.year;
//     console.log(
//       `${this.title} was released in ${this.year} and is ${difference} years old.`
//     );
//   },
// };

// card.innerHTML = `
//     <h1>${movie.title}</h1>
//     <h2>(${movie.year})</h2>
//     <h3>${movie.rate}</h3>
//     <ul>
//         ${movie.actors.map((actor) => `<li>${actor}</li>`).join('')}
//     </ul>
// `;

// card.style =
//   'color: white; background-color: black; width: 500px; margin: 0 auto; padding: 20px;';

//------------------------------------------------------

// console.log(this);
// const arr = () => console.log(this);

// const obj = {
//   arw: () => console.log(this),
//   nest: {
//     arwNested: () => console.log(this),
//   },
// };

// function A() {
//   console.log(this);

//   const B = () => console.log(this);
// }

// A();

// const obj2 = {
//   name: 'John',
//   simple: function () {
//     console.log('Check this for B', this);

//     const B = () => {
//       console.log('B', this);
//     };

//     B();
//   },
// };

// obj2.simple();
//------------------------------------------------------
// const aboutMe = {
//   name: 'Nathan',
//   age: 30,
//   country: 'USA',
//   hobby: 'traveling',
//   occupation: 'developer',

//   nest: {
//     type: 'Nest',
//     simple: function () {
//       console.log('Nathan Nest Simple', this);
//     },

//     arrow: () => {
//       console.log('Nathan Nest Arrow', this);
//     },
//   },

//   simple: function () {
//     console.log('Nathan Simple', this);
//   },

//   arrow: () => {
//     console.log('Nathan Arrow', this);
//   },
// };

// aboutMe.simple();
// aboutMe.nest.simple();

// aboutMe.arrow();
// aboutMe.nest.arrow();

// console.log('aboutMe.thisIs', aboutMe.thisIs);

// function simpleFun() {
//   console.log('outside simpleFun', this);
// }

// const arrowFun = () => {
//   console.log(' outside arrowFun', this);
// };
// simpleFun();
// arrowFun();

//------------------------------------------------------
// function simpleFun() {
//   console.log('outside simpleFun', this);
// }

// console.log('Checking this for arrowFun', this);
// const arrowFun = () => {
//   console.log(' outside arrowFun', this);
// };

// ---------------------------------------------------

// setTimeout(() => {
//   console.log('This is a timeout function');
// }, 1000);

// -------------------------------------

// const onTime = {
//   name: 'Nathan',

//   sayName: function () {
//     console.log(`My name is ${this.name}`);

//     const that = this;

//     function afterTimeout() {
//       console.log(`My name is ${that.name} after 1second`);
//     }

//     const afterTimeout = () => {
//       console.log(`My name is ${this.name} after 1second`);
//     };

//     setTimeout(afterTimeout, 200);
//   },
// };

// onTime.sayName();

// const object = {
//   message: 'Hello, World!',
//   getMessage: function () {
//     const message = 'Hello, Earth!';
//     return this.message;
//   },
// };
// console.log(object.getMessage()); // What is logged?

// const object = {
//   message: 'Hello, World!',
//   logMessage: function () {
//     console.log(this.message); // What is logged?
//   },
// };

// setTimeout(object.logMessage, 1000);
