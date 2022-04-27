Array.prototype.alertLength = function (callback) {
  alert(this.length);
};

const test = [1, 2, 3, 4, 5];

test.alertLength();

function School(name, students, teachers) {
  this.name = name;
  this.students = students;
  this.teachers = teachers;
}

School.prototype.addStudent = function (student) {
  this.students.push(student);
};

School.prototype.uniform = 'Uniform';

const joseph = new School('Joseph', ['Joe', 'Jill', 'Jack'], ['Mr. Smith', 'Mrs. Smith']);
joseph.addStudent('Jill');

console.log(joseph.hasOwnProperty('name'));
