const mahasiswa = {
  nama: "Budi Santoso",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};
console.log("=== Akses Property ===");
console.log("Nama    :", mahasiswa.nama);
console.log("Jurusan :", mahasiswa["jurusan"]);

const keyYangDicari = "ipk";
console.log("IPK     :", mahasiswa[keyYangDicari]);

mahasiswa.email = "budi@email.com";
mahasiswa.umur = 21;
console.log("\nSetelah diubah:", mahasiswa);

delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);

const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10, // tahun

  perkenalan() {
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};
console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    console.log(`  ${key}: ${dosen[key]}`);
  }
}

// Object.keys(), Object.values(), Object.entries()
console.log("Keys  :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

// 1. Membuat Class Buku
class Buku {
  constructor(judul, pengarang, tahunTerbit, harga, tersedia) {
    this.judul = judul;
    this.pengarang = pengarang;
    this.tahunTerbit = tahunTerbit;
    this.harga = harga;
    this.tersedia = tersedia;
  }

  // Method info()
  info() {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  }

  // Method diskon()
  diskon(persen) {
    return this.harga * (1 - persen / 100);
  }
}

// 2. Membuat beberapa object dari class Buku
const buku1 = new Buku("Belajar JavaScript", "Andi", 2022, 100000, true);
const buku2 = new Buku("Algoritma Dasar", "Budi", 2020, 80000, true);
const buku3 = new Buku("Struktur Data", "Siti", 2021, 90000, false);
const buku4 = new Buku("Pemrograman Web", "Rizky", 2023, 120000, true);

// 3. Membuat array koleksiBuku
const koleksiBuku = [buku1, buku2, buku3, buku4];

// 4. Menampilkan semua buku (forEach)
console.log("=== Semua Buku ===");
koleksiBuku.forEach((buku) => {
  console.log(buku.info());
});

// 5. Menampilkan buku yang tersedia (filter)
const bukuTersedia = koleksiBuku.filter((buku) => buku.tersedia === true);

console.log("\n=== Buku yang Tersedia ===");
bukuTersedia.forEach((buku) => {
  console.log(buku.info());
});

// 6. Contoh penggunaan diskon
console.log("\n=== Contoh Diskon ===");
console.log(`${buku1.judul} setelah diskon 10%: Rp${buku1.diskon(10)}`);
