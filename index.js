// Array.prototype.alertLength = function (callback) {
//   alert(this.length);
// };

// const test = [1, 2, 3, 4, 5];

// test.alertLength();

// function School(name, students, teachers) {
//   this.name = name;
//   this.students = students;
//   this.teachers = teachers;
// }

// School.prototype.addStudent = function (student) {
//   this.students.push(student);
// };

// School.prototype.uniform = 'Uniform';

// const joseph = new School('Joseph', ['Joe', 'Jill', 'Jack'], ['Mr. Smith', 'Mrs. Smith']);
// joseph.addStudent('Jill');

// console.log(joseph.hasOwnProperty('name'));
// `---------------------------------------------------------------------------------
// function School_(name, students, teachers) {
//   this.name = name;
//   this.students = students;
//   this.teachers = teachers;
// }

// School_.prototype.addStudent = function (student) {
//   this.students.push(student);
// };

// const joseph = new School_(
//   'Joseph',
//   ['Joe', 'Jill', 'Jack'],
//   ['Mr. Smith', 'Mrs. Smith']
// );

// class School {
//   constructor(name, students, teachers) {
//     this.name = name;
//     this.students = students;
//     this.teachers = teachers;
//   }

//   addStudent() {
//     this.students.push(student);
//   }
// }

// const KV1 = new School('KV1', ['Joe', 'Jill', 'Jack'], ['Mr. Smith', 'Mrs. Smith']);

// console.log('Class', KV1);
// console.log('By Function', joseph);
// `---------------------------------------------------------------------------------

// class School {
//   #pricing = 0;

//   constructor(name, students, teachers, pricing) {
//     this.name = name;
//     this.students = students;
//     this.teachers = teachers;
//     this.#pricing = pricing;
//   }

//   static uniform = 'Uniform😀';

//   getPricing() {
//     console.log(`${this.name} is ${this.#pricing}`);
//   }

//   addStudent() {
//     this.students.push(student);
//   }
// }

// const KV1 = new School('KV1', ['Joe', 'Jill', 'Jack'], ['Mr. Smith', 'Mrs. Smith'], 4000);

// console.log('Class', KV1.getPricing());
// ````````````````````````````````````````````````````````
// class Tax {
//   static percentage = 0.25;

//   constructor(name, income) {
//     this.name = name;
//     this.income = income;
//   }

//   getTax() {
//     console.log(this.income * Tax.percentage);
//   }
// }

// const john = new Tax('John', 100000);
// const jane = new Tax('Jane', 200000);
// const jack = new Tax('Jack', 300000);
// const jill = new Tax('Jill', 400000);
// const joseph = new Tax('Joseph', 500000);
// const josephine = new Tax('Josephine', 600000);

// john.getTax();
// console.log(jane);
// console.log(jack);
// console.log(jill);
// console.log(joseph);
// console.log(josephine);
// ````````````````````````````````````````````````````````````````````````
// function Human(gender, age) {
//   this.gender = gender;
//   this.age = age;
// }

// Human.prototype.sayHello = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// function Instructor(name, gender, age) {
//   this.Human = new Human(gender, age);
//   this.name = name;
// }

// Instructor.prototype.__proto__ = Human.prototype;

// const sanjay = new Instructor('sanjay', 'm', 22);

// sanjay.sayHello();

// console.log(sanjay);

// class Human {
//   constructor(gender, age) {
//     this.gender = gender;
//     this.age = age;
//   }
// }

// class Instructor {
//   constructor(name, course, exp) {
//     this.name = name;
//     this.course = course;
//     this.exp = epx;
//   }
// }

// const sanjay = new Human('m', 22);

// console.log(sanjay);

// `````````````````` one class is extended by two classes
// class Human {
//   constructor(age) {
//     this.age = age;
//   }
// }

// class LivingThing extends Human {
//   constructor(age) {
//     super(age);
//     this.growth = 0;
//   }

//   grow() {
//     this.growth++;
//   }
// }

// const starFish = new LivingThing(1);

// class Instructor extends Human {
//   constructor(name, course, exp, age) {
//     super(age);
//     this.name = name;
//     this.course = course;
//     this.exp = exp;
//   }
// }

// const sanjay = new Instructor('sanjay', 'FS', 4, 22);

// console.log(sanjay);
// console.log(starFish);

const mixin = {
  markAttendance: function () {
    this.attendance++;
  },
};
class LivingThing {
  constructor() {
    this.grow = 0;
  }

  GROW() {
    this.grow++;
  }
}

class Human extends LivingThing {
  constructor(gender, age) {
    super();
    this.gender = gender;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello ,I am ${this.name}`);
  }
}

class Instructor extends Human {
  constructor(name, course, exp, age, gender) {
    super(age, gender);
    this.name = name;
    this.course = course;
    this.exp = exp;
    this.attendance = 0;
  }

  incExp() {
    this.exp++;
  }
}

const sanjay = new Instructor('sanjay', 'FULL-STACK', 4, 22, 'm');

Object.assign(Instructor.prototype, mixin);

sanjay.sayHello();
sanjay.incExp();
sanjay.GROW();
sanjay.markAttendance();

console.log(sanjay);
