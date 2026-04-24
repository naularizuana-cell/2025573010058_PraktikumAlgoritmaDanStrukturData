function jumlahArray(arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
}

function duplikasiArray(arr) {
  const baru = [];
  for (const x of arr) baru.push(x * 2);
  return baru;
}

function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i;
  return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Jumlah array   :", jumlahArray(arr));
console.log("Duplikasi array:", duplikasiArray(arr));
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

function hitungUnik(arr) {
  const seen = new Set();
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak));

// ===============================
// Fungsi 1: Cara Lambat (Brute Force)
// ===============================
function cariPasanganLambat(arr, target) {
  // Big O Time: O(n^2)
  // Alasan: menggunakan 2 loop bersarang → setiap elemen dibandingkan dengan elemen lain
  // total perbandingan = n * n

  // Big O Space: O(1)
  // Alasan: tidak menggunakan struktur data tambahan (hanya variabel biasa)

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }

  return null;
}

// ===============================
// Fungsi 2: Cara Cepat (Menggunakan Set)
// ===============================
function cariPasanganCepat(arr, target) {
  // Big O Time: O(n)
  // Alasan: hanya 1 loop, setiap elemen dicek sekali

  // Big O Space: O(n)
  // Alasan: menggunakan Set untuk menyimpan elemen yang sudah dilihat

  let seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    let selisih = target - arr[i];

    // cek apakah pasangan sudah pernah muncul
    if (seen.has(selisih)) {
      return [selisih, arr[i]];
    }

    // simpan angka sekarang ke Set
    seen.add(arr[i]);
  }

  return null;
}

// ===============================
// Uji dengan contoh kecil
// ===============================
let data = [2, 7, 11, 15];
let target = 9;

console.log("Lambat:", cariPasanganLambat(data, target)); // [2,7]
console.log("Cepat:", cariPasanganCepat(data, target)); // [2,7]

// ===============================
// Function untuk ukur waktu
// ===============================
function hitungWaktu(fn, arr, target) {
  let start = Date.now();
  let hasil = fn(arr, target);
  let end = Date.now();

  console.log(fn.name, "-> waktu:", end - start, "ms", "| hasil:", hasil);
}

// ===============================
// Generate array 50.000 angka acak
// ===============================
let arrBesar = [];
for (let i = 0; i < 50000; i++) {
  arrBesar.push(Math.floor(Math.random() * 100000));
}

// target yang TIDAK ADA di array
let targetBesar = -1;

// ===============================
// Uji performa
// ===============================
console.log("\n=== Uji Performa ===");

// ⚠️ Lambat bisa sangat lama!
hitungWaktu(cariPasanganCepat, arrBesar, targetBesar);
hitungWaktu(cariPasanganLambat, arrBesar, targetBesar);
