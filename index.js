// Contractor function: index.js

function Passenger(name, stop, seat, destination) {
  this.name = name;
  this.stop = stop;
  this.seat = seat;
  this.destination = destination;
}

//# Happened in the background
// Passenger.prototype = {
//   constructor: Passenger,
// };

Passenger.prototype.seatNumber = function () {
  console.log(this.seat);
};

console.log('Passenger.prototype', Passenger.prototype);

const sanjay = new Passenger('Sanjay', 'A', 'A1', 'B');
const jane = new Passenger('Jane', 'B', 'B2', 'C');

sanjay.seatNumber()
jane.seatNumber()
