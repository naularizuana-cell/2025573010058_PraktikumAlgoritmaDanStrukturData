function sapa() {
  console.log("Halo! Selamat datang di praktikum JavaScript.");
}
sapa();
sapa();

function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama("Budi");
sapaNama("Siti");

function tambah(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil;
}
const hasilPenjumlahan = tambah(10, 25);
console.log("10 + 25 =", hasilPenjumlahan);
console.log("7 + 13 =", tambah(7, 13));

function hitung(nilai, pengali = 2) {
  return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = "Saya ada di mana saja";

function cekScope() {
  const pesanLokal = "Saya hanya ada di dalam function ini"; // local scope
  console.log(pesanGlobal);
  console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

// Function penjumlahan (misal sudah ada)
function tambah(a, b) {
  return a + b;
}

// 2. Function kurang
function kurang(a, b) {
  return a - b;
}

// 3. Function kali
function kali(a, b) {
  return a * b;
}

// 4. Function bagi
function bagi(a, b) {
  if (b === 0) {
    console.log("Error: tidak bisa membagi dengan nol");
    return null;
  }
  return a / b;
}

// 5. Function kalkulator
function kalkulator(a, operator, b) {
  switch (operator) {
    case "+":
      return tambah(a, b);
    case "-":
      return kurang(a, b);
    case "*":
      return kali(a, b);
    case "/":
      return bagi(a, b);
    default:
      console.log("Operator tidak dikenali");
      return null;
  }
}

// 6. Pengujian (minimal 5)
console.log(kalkulator(10, "+", 5)); // 15
console.log(kalkulator(10, "-", 5)); // 5
console.log(kalkulator(10, "*", 5)); // 50
console.log(kalkulator(10, "/", 5)); // 2
console.log(kalkulator(10, "/", 0)); // Error
