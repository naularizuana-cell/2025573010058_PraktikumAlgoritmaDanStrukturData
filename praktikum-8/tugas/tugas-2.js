// tugas/tugas-2.js
// Soal Klasik Hash Table

// 1. subArrayJumlahK(arr, k)
// Menghitung jumlah subarray yang jumlah elemennya = k
// Menggunakan Prefix Sum + HashMap

function subArrayJumlahK(arr, k) {
  const map = new Map();

  map.set(0, 1);

  let prefixSum = 0;
  let jumlah = 0;

  for (const num of arr) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      jumlah += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return jumlah;
}

// 2. karakterPertamaUnik(s)
// Mengembalikan indeks karakter pertama yang tidak berulang

function karakterPertamaUnik(s) {
  const freq = new Map();

  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// 3. topKFrequent(arr, k)
// Mengembalikan k elemen yang paling sering muncul

function topKFrequent(arr, k) {
  const freq = new Map();

  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
}

// Demo Program

console.log("=== Sub Array Jumlah K ===");
console.log("[1,1,1], k=2 ->", subArrayJumlahK([1, 1, 1], 2));

console.log("\n=== Karakter Pertama Unik ===");
console.log("leetcode ->", karakterPertamaUnik("leetcode"));

console.log("loveleetcode ->", karakterPertamaUnik("loveleetcode"));

console.log("\n=== Top K Frequent ===");
console.log("[1,1,1,2,2,3], k=2 ->", topKFrequent([1, 1, 1, 2, 2, 3], 2));
