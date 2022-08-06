/* 
1. Counted Loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya.
2. Uncounted Loop, merupakan perulangan yang tidak jelas berapa kali ia harus mengulang.
*/

// oke kita pertama buat yg for

for (let i = 0; i < 6; i++) {
  console.log("perulangan ke-" + i);
} // defaultnya adalah start;kondisi keberapa;counter. Nah si variabel i itulah yg akan nympan nilai hitungannya

console.log("");

// gimana casenya kalo mau hitung mundur? ya gampang juga
console.log("LOMBA LARI DIMULAI");
for (let o = 5; o > 0; o--) {
  console.log("hitung mundur dimulai dari-" + o);
}

/* Skarang case ttg perulangan foreach nih
Perulangan foreach biasanya digunakan untuk mencetak item di dalam array.
*/

console.log("");
var pulau = ["kalimantan", "jawa", "sumatra"];
for (i = 0; i < pulau.length; i++) {
  console.log(i + ". " + pulau[i]);
}

// itukan agak repot ya, yaudah kita pake yg namanya foreach tadi
var pulau = ["komodo", "nusa tenggara", "papua"];
for (i in pulau) {
  console.log(i + ". " + pulau[i]);
}
