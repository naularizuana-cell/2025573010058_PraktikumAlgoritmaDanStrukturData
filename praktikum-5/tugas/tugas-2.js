// ==============================
// FUNGSI-FUNGSI BIG O
// ==============================

// O(1)
function fn_O1(n) {
  return n + 1;
}

// O(n)
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
}

// O(n log n)
function fn_OnLogn(n) {
  let count = 0;
  let log = Math.log2(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < log; j++) {
      count++;
    }
  }
  return count;
}

// O(n^2)
function fn_On2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) count++;
  return count;
}

// ==============================
// BENCHMARK
// ==============================

function ukur(fn, n) {
  let t = Date.now();
  fn(n);
  return Date.now() - t;
}

function benchmarkSemua(ukuranData) {
  for (let n of ukuranData) {
    console.log("\n n =", n);

    console.log("O(1):     ", ukur(fn_O1, n), "ms");
    console.log("O(n):     ", ukur(fn_On, n), "ms");
    console.log("O(nlogn): ", ukur(fn_OnLogn, n), "ms");
    console.log("O(n^2):   ", ukur(fn_On2, n), "ms");
  }
}

// ==============================
// RUN
// ==============================

benchmarkSemua([100, 500, 1000, 5000, 10000]);

// ==============================
// OBSERVASI (DITULIS DI KODE)
// ==============================

/*
Hasil yang terlihat:
- O(1) → waktu hampir sama walaupun n bertambah
- O(n) → waktu naik sebanding dengan n
- O(n log n) → lebih cepat dari n^2 tapi lebih lambat dari n
- O(n^2) → meningkat sangat cepat saat n besar

Kesimpulan:
Pola pertumbuhan sesuai teori Big O:
O(1) < O(n) < O(n log n) < O(n^2)

Semakin besar kompleksitas, semakin lambat untuk data besar.
*/
