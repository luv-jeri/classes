// function fun() {
//   console.log(this);
//   console.log('Hello World');
// }

// // window.fun();

// const me = {
//   name: 'John',
//   sayMyName: function () {
//     console.log('SAY MY NAME', this);

//     function ok() {
//       console.log('OK', this);
//     }

//     ok();
//   },
// };

// // me.sayMyName();

// // setTimeout(function () {
// //   console.log('TIMER', this);
// // }, 1000);

// const obj = {
//   name: 'John',
//   thisIS: this,
//   sayMyName: () => {
//     console.log('SAY MY NAME', this);
//   },
// };

// // obj.sayMyName();

// // console.log('THIS', obj.thisIS);

// const final = {
//   name: 'John',
//   sayMyName: function () {
//     console.log('SAY MY NAME', this);
//     const ok = () => {
//       console.log('OK', this);
//     };
//     ok();
//   },
// };

// // final.sayMyName();

// function ok1() {
//   console.log('ARR', this);
// }

// function ok2() {
//   console.log('ARR', this);
// }

// const arr = [ok1, ok2];

// arr[1]()

// const object = {
//   message: 'Hello, World!',
//   getMessage: function () {
//     const message = 'Hello, Earth!';
//     console.log(this.message);
//   },
// };
// object.getMessage();

// var length = 4;

// function callback() {
//   console.log(this.length); 
// }

// const object = {
//   length: 5,
//   method : function() {
//     arguments[0]();
//   },
// };

// object.method(callback, 1, 2);


