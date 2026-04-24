// =====================================
// TUGAS 1 - ANALISIS & REFACTOR
// =====================================

// =====================================
// FUNGSI A: INTERSECTION ARRAY
// =====================================

// Versi Lambat
function intersectionLambat(arr1, arr2) {
  // Big O Time: O(n^2)
  // Alasan: setiap elemen arr1 dibandingkan dengan semua elemen arr2

  // Big O Space: O(n)
  // Alasan: menyimpan hasil intersection

  let hasil = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        hasil.push(arr1[i]);
      }
    }
  }

  return hasil;
}

// Versi Cepat (Set)
function intersectionCepat(arr1, arr2) {
  // Big O Time: O(n)
  // Alasan: akses Set O(1), hanya 1 loop utama

  // Big O Space: O(n)
  // Alasan: menyimpan Set dan hasil

  let set = new Set(arr1);
  let hasil = [];

  for (let num of arr2) {
    if (set.has(num)) {
      hasil.push(num);
    }
  }

  return hasil;
}

// =====================================
// FUNGSI B: KELOMPOK ANAGRAM
// =====================================

function kelompokAnagram(arr) {
  // Big O Time: O(n * k log k)
  // Alasan:
  // n = jumlah kata
  // k log k = proses sort tiap kata

  // Big O Space: O(n)
  // Alasan: menyimpan hasil dalam object/map

  let map = {};

  for (let kata of arr) {
    let key = kata.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(kata);
  }

  return Object.values(map);
}

// =====================================
// FUNGSI C: a + b = c^2
// =====================================

// Versi Lambat
function cekTripletLambat(arr) {
  // Big O Time: O(n^3)
  // Alasan: 3 nested loop

  // Big O Space: O(1)
  // Alasan: tidak pakai struktur tambahan

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[i] + arr[j] === arr[k] * arr[k]) {
          return true;
        }
      }
    }
  }

  return false;
}

// Versi Cepat
function cekTripletCepat(arr) {
  // Big O Time: O(n log n)
  // Alasan:
  // sorting = n log n
  // lalu pakai teknik two-pointer (O(n^2) worst case, tapi lebih cepat secara praktis)

  // Big O Space: O(1)
  // Alasan: tidak pakai struktur tambahan besar

  arr.sort((a, b) => a - b);
  let n = arr.length;

  for (let k = n - 1; k >= 0; k--) {
    let target = arr[k] * arr[k];
    let i = 0;
    let j = k - 1;

    while (i < j) {
      let sum = arr[i] + arr[j];

      if (sum === target) return true;
      else if (sum < target) i++;
      else j--;
    }
  }

  return false;
}

// =====================================
// FUNCTION UKUR WAKTU
// =====================================

function ukurWaktu(label, fn) {
  let start = Date.now();
  let hasil = fn();
  let end = Date.now();

  console.log(label, "->", end - start, "ms", "| hasil:", hasil);
}

// =====================================
// TEST DATA
// =====================================

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let kata = ["eat", "tea", "tan", "ate", "nat", "bat"];

let angka = [1, 2, 3, 4, 5, 6, 7, 8];

// =====================================
// TEST KECIL
// =====================================

console.log("\n=== TEST KECIL ===");

console.log("Intersection Lambat:", intersectionLambat(arr1, arr2));
console.log("Intersection Cepat:", intersectionCepat(arr1, arr2));

console.log("Anagram:", kelompokAnagram(kata));

console.log("Triplet Lambat:", cekTripletLambat(angka));
console.log("Triplet Cepat:", cekTripletCepat(angka));

// =====================================
// TEST BESAR
// =====================================

let besar1 = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 10000),
);
let besar2 = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 10000),
);

let besarTriplet = Array.from({ length: 5000 }, () =>
  Math.floor(Math.random() * 1000),
);

console.log("\n=== TEST BESAR ===");

// Fungsi A
ukurWaktu("Intersection Lambat", () => intersectionLambat(besar1, besar2));
ukurWaktu("Intersection Cepat", () => intersectionCepat(besar1, besar2));

// Fungsi B
ukurWaktu("Anagram", () => kelompokAnagram(kata));

// Fungsi C
// ⚠️ Lambat bisa sangat lama!
ukurWaktu("Triplet Cepat", () => cekTripletCepat(besarTriplet));
// ukurWaktu("Triplet Lambat", () => cekTripletLambat(besarTriplet)); // jangan jalankan kalau besar!
