//object literal syntax
// let Barista1 = {
//   nama: "Raihan",
//   energy: 15,
//   kopi: function (gelas) {
//     this.energy = this.energy + gelas;
//     console.log(`Halo Raihan ${this.nama}, Selamat minum!`);
//   },
// };

// let Barista2 = {
//   nama: "Rangga",
//   energy: 19,
//   kopi: function (gelas) {
//     this.energy = this.energy + gelas;
//     console.log(`Halo Raihan ${this.nama}, Selamat minum!`);
//   },
// };

// function declarative syntax

// const methodBarista = {
//   kopi: function (gelas) {
//     this.energy = this.energy + gelas;
//     console.log(`Halo ${this.nama}, Selamat minum!`);
//   },
//   tidur: function (jam) {
//     this.energy = this.energy + jam;
//     console.log(`Halo ${this.nama}, Selamat tidur!`);
//   },
//   main: function (jam) {
//     this.energy = this.energy - jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   },
// };

// function Barista(nama, energy) {
//   let barista = Object.create(methodBarista);
//   barista.nama = nama;
//   barista.energy = energy;

//   return barista;
// }

// let Barista1 = Barista("Raihan", 15);
// let Barista2 = Barista("Rangga", 19);

function Barista(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  return this;
}

Barista.prototype.kopi = function (gelas) {
  this.energy = this.energy + gelas;
  console.log(`Halo ${this.nama}, Selamat minum!`);
};

Barista.prototype.tidur = function (jam) {
  this.energy = this.energy + jam;
  console.log(`Halo ${this.nama}, Selamat tidur!`);
};

Barista.prototype.main = function (jam) {
  this.energy = this.energy - jam;
  console.log(`Halo ${this.nama}, Selamat bermain!`);
};

let Barista1 = new Barista("Raihan", 15);

//constructor function syntax
// function Barista(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;

//   this.kopi = function (gelas) {
//     this.energy = this.energy + gelas;
//     console.log(`Halo ${this.nama}, Selamat minum!`);
//   };
//   this.tidur = function (jam) {
//     this.energy = this.energy + jam;
//     console.log(`Halo ${this.nama}, Selamat tidur!`);
//   };
// }

// let Barista1 = new Barista("Raihan", 15);
