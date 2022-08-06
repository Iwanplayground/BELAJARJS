var products = ["Flashdisk", "SDD", "Monitor"];
// ngambil data di array
console.log(products[1]);
console.log("");
// mau ambil smuanya gimana ya tinggal kita looping
for (let i = 0; i < products.length; i++) {
  console.log(i + ". " + products[i]);
}

// cara nambahin/ngubah data ke dalam array gmna?
var buah = ["Apel", "Jeruk", "Manggis"];
// mirip sm py bet, ni kalo NGUBAH
buah[2] = "Kedondong";
console.log(buah);
// kalo nambah gmna? ya bisa dilihat indexnya kalo itu cuma 2 ya kasi ke-3 nya
buah[3] = "Jeruk";
console.log(buah);
// kalo ndatau jumlah indexnya? yaudah pake push aja
buah.push("Stroberi", "Semangka", "Melon");
console.log(buah);
