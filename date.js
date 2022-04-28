var greet = (function () {
  function sayHello() {
    console.log('Hello');
  }
  function sayGoodBye() {
    console.log('Good Bye');
  }

  return {
    sayHello: sayHello,
    sayGoodBye: sayGoodBye,
  };
})();
