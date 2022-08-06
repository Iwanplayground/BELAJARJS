// cara buat funsi yg biasa aja di js
var sapaIwang = function () {
  console.log("Halo Bos Iwang!!!");
};

sapaIwang();

// buat fungsi dg tandapanah(arrowfunc)
var sapaRidwan = () => console.log("Halo Pak Ridwan");
sapaRidwan();

// fungsi yg mngembalikan nilai
function kuadrat(x, y) {
  hasilKuadrat = x ** y;
  return hasilKuadrat;
}

//kita panggil dah
var x = 90;
var y = 3;
var hasilKuadrat = kuadrat(x, y);
console.log(hasilKuadrat);
console.log(kuadrat(10, 2));
