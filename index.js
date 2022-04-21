// we get array of objects from the REST API of movies
const starWars = {
  name: 'Star Wars',
  releaseYear: 1977,
  director: 'George Lucas',
  producers: ['George Lucas', 'Rick McCallum'],
  cinematography: ['Howard Deutch'],
  stars: [
    'Mark Hamill',
    'Harrison Ford',
    'Carrie Fisher',
    'Peter Cushing',
    'Anthony Daniels',
  ],
  getOld: function () {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.releaseYear);
  },
};

const halloween = {
  name: 'Halloween',
  releaseYear: 1978,
  director: 'John Carpenter',
  producers: ['John Carpenter'],
  cinematography: ['John Carpenter'],
  stars: [
    'Donald Pleasence',
    'Clarence Thomas',
    'Danny Wood',
    'Peter Cushing',
    'Anthony Daniels',
  ],
  getOld: function () {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.releaseYear);
  },
};

const getOld = (year) => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear - year);
};
getOld(starWars.releaseYear);

//` trying with function
//` A function that will take values as the parameters and will return the object
//` also we can add the function in that object

// const objectCreator = (name, age) => {
//   const tempObject = {
//     name: name,
//     age: age,
//   };
//   return tempObject;
// };

// # it is a factory function that returns an object
const objectCreator = (name, age) => {
  name, age;
};

const objectOne = objectCreator('John', 20);
const objectTwo = objectCreator('Jane', 21);

// ````````````````````````````````````````````````````````````````

// ADVANCE FACTORY FUNCTION

// const movieObjectCreator = (name, releaseYear, director) => {

//   const getOld = function () {
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear - releaseYear);
//   };

//   const tempObject = {
//     name: name,
//     releaseYear: releaseYear,
//     director: director,
//     getOld: getOld,
//   };

//   return tempObject;
// };

// const movieObjectCreator = (name, releaseYear, director) => ({
//   name,
//   releaseYear,
//   director,
//   getOld: function () {
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear - releaseYear);
//   },
// });

// const movieObjectCreator_ = (movie) => {
//   const getOld = function () {
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear - releaseYear);
//   };

//   const tempObject = {
//     ...movie,
//     getOld: getOld,
//   };

//   return tempObject;
// };

// const starWars_ = movieObjectCreator('Star Wars', 1977, 'George Lucas');
// const starWars__ = movieObjectCreator({
//   name: 'Star Wars',
//   releaseYear: 1977,
//   director: 'George Lucas',
// });
// const halloween_ = movieObjectCreator('Halloween', 1978, 'John Carpenter');

// console.log(starWars_);
// console.log(halloween_);

// starWars_.getOld();
// halloween_.getOld();

// array object of movies with name , releaseYear , director , producers , cinematography , stars

gsap.to('#head', {
  duration: 1,
  x: 600,
});

const movieObjectCreator_ = (movie) => ({
  ...movie,
  getOld: function () {
    const currentYear = new Date().getFullYear();
    console.log(
      `${movie.name} was released in ${currentYear - movie.releaseYear} years ago`
    );
  },
  whoIsTheDirector: function () {
    console.log(`${this.name} was directed by ${this.director}`);
  },
  //   animate: function () {
  //     this.play = gsap.to(`#${this.name.split(' ')[0]}`, {
  //       duration: 1,
  //       x: 600,
  //     });
  //   },
});

const movies = [
  {
    name: 'Star Wars',
    releaseYear: 1977,
    director: 'George Lucas',
    producers: ['George Lucas', 'Rick McCallum'],
    cinematography: ['Howard Deutch'],
    stars: [
      'Mark Hamill',
      'Harrison Ford',
      'Carrie Fisher',
      'Peter Cushing',
      'Anthony Daniels',
    ],
  },
  {
    name: 'Halloween',
    releaseYear: 1978,
    director: 'John Carpenter',
    producers: ['John Carpenter'],
    cinematography: ['John Carpenter'],
    stars: [
      'Donald Pleasence',
      'Clarence Thomas',
      'Danny Wood',
      'Peter Cushing',
      'Anthony Daniels',
    ],
  },
  {
    name: 'The Empire Strikes Back',
    releaseYear: 1980,
    director: 'Irvin Kershner',
    producers: ['Irvin Kershner'],
    cinematography: ['Irvin Kershner'],
    stars: [
      'Mark Hamill',
      'Harrison Ford',
      'Carrie Fisher',
      'Peter Cushing',
      'Anthony Daniels',
    ],
  },
  {
    name: 'Return of the Jedi',
    releaseYear: 1983,
    director: 'Richard Marquand',
    producers: ['Howard G. Kazanjian', 'George Lucas'],
    cinematography: ['Howard Deutch'],
    stars: [
      'Mark Hamill',
      'Harrison Ford',
      'Carrie Fisher',
      'Peter Cushing',
      'Anthony Daniels',
    ],
  },
  {
    name: 'The Force Awakens',
    releaseYear: 2015,
    director: 'J. J. Abrams',
    producers: ['J. J. Abrams', 'Kathleen Kennedy'],
    cinematography: ['J. J. Abrams'],
    stars: [
      'Daisy Ridley',
      'John Boyega',
      ' Oscar Isaac',
      'Kareem Abdul-Jabbar',
      'Anakin Skywalker',
    ],
  },
];

const dataWithFunctions = movies.map((movie) => {
  return movieObjectCreator_(movie);
});

const wrap = document.querySelector('#wrap');

dataWithFunctions.forEach((movie, index) => {
  const card = document.createElement('div');
  card.setAttribute('class', `${movie.name.split(' ')[0]}`);
  card.classList.add('card');

  const h3 = document.createElement('h3');
  h3.innerHTML = movie.name;

  const p = document.createElement('p');
  p.innerHTML = movie.director;

  card.appendChild(h3);
  card.appendChild(p);

  document.body.appendChild(card);

  card.addEventListener('click', () => {
    movie.getOld();
    movie.whoIsTheDirector();
  });

  const ul = document.createElement('ul');

  movie.producers.forEach((producer) => {
    const li = document.createElement('li');
    li.innerHTML = producer;
    ul.appendChild(li);
  });

  card.appendChild(ul);

  const ul2 = document.createElement('ul');

  movie.stars.forEach((star) => {
    const li = document.createElement('li');
    li.innerHTML = star;
    ul2.appendChild(li);
  });

  card.appendChild(ul2);

  const ul3 = document.createElement('ul');

  movie.cinematography.forEach((cinematographer) => {
    const li = document.createElement('li');
    li.innerHTML = cinematographer;
    ul3.appendChild(li);
  });

  card.appendChild(ul3);
  card.style =
    'color: white; background-color: black; width: 500px; margin: 0 auto; padding: 20px;';

  //   card.style = `
  //     background-color: #383838;
  //     color : #c8c8c8;
  //     border: 1px solid #035397;
  //     margin: 10px;
  //     padding: 10px;
  //   `;
});

function simpleObjectCreator(name, age) {
  return {
    name,
    age,
  };
}

const object = simpleObjectCreator('John', 20);
const objectWithNew = new simpleObjectCreator('John', 20);

// console.log('With New', objectWithNew);
// console.log('Normal', object);

function simpleObjectCreator(name, age) {
  return {
    name,
    age,
  };
}
const object_ = simpleObjectCreator('John', 20);

function SimpleConstructor(name, age) {
  this.name = name;
  this.age = age;
}
const testNew = new SimpleConstructor('Jane', 20);

console.log('testNew', testNew);

function Movie(movie) {
  this.name = movie.name;
  this.releaseYear = movie.releaseYear;
  this.director = movie.director;
  this.producers = movie.producers;
  this.cinematography = movie.cinematography;
  this.stars = movie.stars;

  this.getOld = function () {
    const currentYear = new Date().getFullYear();
    console.log(
      `${this.name} was released in ${currentYear - this.releaseYear} years ago`
    );
  };

  this.whoIsTheDirector = function () {
    console.log(`${this.name} was directed by ${this.director}`);
  };
}

const dataWithClass = movies.map((movie) => {
  return new Movie(movie);
});

console.log(dataWithClass);

const num = new Object();
