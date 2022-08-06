var car = {
  type: "Sedan",
  model: "890",
  color: "white",

  // method
  start: function () {
    console.log("brrbebrrrrrrrrrrrberrr idup dah");
  },
  drive: function () {
    console.log("ngenggggggg bruwwwwwwww");
  },
  brake: function () {
    console.log("pipipipippppppppp");
  },
  stop: function () {
    console.log("mati dah mesinnya");
  },
};

// ngakses si properti
console.log("model dari mobil yang dijual ini adalah: " + car.model);
console.log(car.drive());
