const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

console.log("=== forEach: Tampilkan Semua Nilai ===");
nilaiMahasiswa.forEach((nilai, indeks) => {
  console.log(`  Mahasiswa-${indeks + 1}: ${nilai}`);
});

const gradeHuruf = nilaiMahasiswa.map((nilai) => {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
});

console.log("\n=== map: Nilai ke Grade ===");
console.log("Nilai :", nilaiMahasiswa);
console.log("Grade :", gradeHuruf);

const nilaiLulus = nilaiMahasiswa.filter((nilai) => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter((nilai) => nilai < 60);

console.log("\n=== filter: Lulus dan Tidak Lulus ===");
console.log("Semua nilai :", nilaiMahasiswa);
console.log("Nilai lulus :", nilaiLulus);
console.log("Nilai gagal :", nilaiGagal);

const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
  return akumulator + nilai;
}, 0);

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log("\n=== reduce: Statistik Nilai ===");
console.log("Total nilai :", totalNilai);
console.log("Rata-rata   :", rataRata.toFixed(2));

const rataRataNilaiLulus = nilaiMahasiswa
  .filter((nilai) => nilai >= 60)
  .reduce((acc, val, idx, arr) => {
    return acc + val / arr.length;
  }, 0);

console.log("\n=== Method Chaining ===");
console.log("Rata-rata nilai lulus:", rataRataNilaiLulus.toFixed(2));

// 2–3. Deklarasi array of objects
const produk = [
  { nama: "Laptop", harga: 8500000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 0 },
  { nama: "Keyboard", harga: 450000, stok: 12 },
  { nama: "Monitor", harga: 3200000, stok: 0 },
  { nama: "Headset", harga: 350000, stok: 8 },
];

// 4. Filter produk yang tersedia (stok > 0)
const produkTersedia = produk.filter((item) => item.stok > 0);
console.log("Produk tersedia:", produkTersedia);

// 5. Map untuk ambil nama produk saja
const namaProduk = produkTersedia.map((item) => item.nama);
console.log("Nama produk tersedia:", namaProduk);

// 6. Reduce untuk total nilai inventaris
const totalInventaris = produkTersedia.reduce(
  (total, item) => total + item.harga * item.stok,
  0,
);
console.log("Total nilai inventaris:", totalInventaris);

// 7. forEach untuk menampilkan semua produk
produk.forEach((item) => {
  const status = item.stok > 0 ? "[TERSEDIA]" : "[HABIS]";
  const hargaFormat = item.harga.toLocaleString("id-ID");

  if (item.stok > 0) {
    console.log(
      `${status} ${item.nama} - Rp${hargaFormat} (${item.stok} unit)`,
    );
  } else {
    console.log(`${status} ${item.nama} - Rp${hargaFormat}`);
  }
});
