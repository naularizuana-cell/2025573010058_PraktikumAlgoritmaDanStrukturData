// 03-operator.js
// ================================================
// OPERATOR JAVASCRIPT
// ================================================
// --- OPERATOR ARITMATIKA ---
let a = 17;
let b = 5;
console.log("=== Aritmatika ===");
console.log(`${a} + ${b} = ${a + b}`); // 22
console.log(`${a} - ${b} = ${a - b}`); // 12
console.log(`${a} * ${b} = ${a * b}`); // 85
console.log(`${a} / ${b} = ${a / b}`); // 3.4
console.log(`${a} % ${b} = ${a % b}`); // 2 (sisa bagi: 17 = 5x3 + 2)
console.log(`${a} ** ${b} = ${a ** b}`); // 1419857 (17 pangkat 5)
// --- OPERATOR PERBANDINGAN ---
console.log("=== Perbandingan ===");
console.log("10 > 5 :", 10 > 5); // true
console.log("10 < 5 :", 10 < 5); // false
console.log("10 >= 10 :", 10 >= 10); // true
console.log("10 <= 9 :", 10 <= 9); // false
// Perbedaan == dan ===
console.log("--- Perbedaan == dan === ---");
console.log('5 == "5" :', 5 == "5"); // true (JANGAN gunakan ini!)
console.log('5 === "5" :', 5 === "5"); // false (SELALU gunakan ini)
console.log("5 !== 3 :", 5 !== 3); // true (tidak sama dengan)
// --- OPERATOR LOGIKA ---
console.log("=== Logika ===");
let sudahMakan = true;
let punyaUang = false;
// AND (&&): kedua kondisi harus true
console.log("Makan && Uang :", sudahMakan && punyaUang); // false
// OR (||): salah satu kondisi cukup true
console.log("Makan || Uang :", sudahMakan || punyaUang); // true
// NOT (!): membalik nilai boolean
console.log("!sudahMakan :", !sudahMakan); // false
console.log("!punyaUang :", !punyaUang); // true
// Tambahan kode baru

// 2. Deklarasi variabel
const panjang = 12;
const lebar = 8;

// 3. Perhitungan
const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

// 4. Output dengan template literal
console.log(`Luas persegi panjang: ${luas}`);
console.log(`Keliling persegi panjang: ${keliling}`);

// 5. Pengecekan luas > 100
const cekLuas = luas > 100;
console.log(`Apakah luas lebih dari 100? ${cekLuas}`);
