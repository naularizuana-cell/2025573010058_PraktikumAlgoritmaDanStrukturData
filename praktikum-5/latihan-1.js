// Fungsi A → O(1)
function fungsiA(n) {
  // Big O: O(1)
  // Alasan: hanya melakukan 1 operasi (perkalian),
  // tidak ada perulangan dan tidak bergantung pada ukuran n
  return n * 2;
}

// Fungsi B → O(n^2)
function fungsiB(n) {
  // Big O: O(n^2)
  // Alasan: terdapat 2 loop bersarang
  // loop luar berjalan n kali
  // loop dalam juga berjalan n kali
  // total operasi = n * n = n^2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j);
    }
  }
}

// Fungsi C → O(log n)
function fungsiC(n) {
  // Big O: O(log n)
  // Alasan: nilai i dikali 2 setiap iterasi
  // contoh: 1 → 2 → 4 → 8 → ...
  // jumlah iterasi bertambah secara logaritmik terhadap n
  for (let i = 1; i < n; i *= 2) {
    // console.log(i);
  }
}

// Fungsi D → O(n^3)
function fungsiD(n) {
  let arr = Array.from({ length: n }, (_, i) => i);

  // Big O: O(n^3)
  // Alasan: terdapat 3 perulangan bersarang (forEach)
  // masing-masing berjalan sebanyak n elemen
  // total operasi = n * n * n = n^3
  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        // console.log(x, y, z);
      });
    });
  });
}

// Function untuk mengukur waktu eksekusi
function hitungKompleksitas(n, fn) {
  // Mengambil waktu sebelum fungsi dijalankan
  let start = Date.now();

  // Menjalankan fungsi
  fn(n);

  // Mengambil waktu setelah fungsi selesai
  let end = Date.now();

  // Menampilkan lama eksekusi dalam milidetik
  console.log(fn.name + ":", end - start, "ms");
}

// Menjalankan semua fungsi
let n = 1000;

hitungKompleksitas(n, fungsiA); // sangat cepat (O(1))
hitungKompleksitas(n, fungsiB); // lebih lama (O(n^2))
hitungKompleksitas(n, fungsiC); // cepat (O(log n))

// ⚠️ Fungsi D sangat berat, jangan pakai n besar
hitungKompleksitas(100, fungsiD); // gunakan n kecil saja
