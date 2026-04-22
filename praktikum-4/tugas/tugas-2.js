// 2. Parent class Produk
class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(
      `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`,
    );
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah tidak valid");
      return;
    }

    if (jumlah > this.stok) {
      console.log("Stok tidak mencukupi");
      return;
    }

    this.stok -= jumlah;
    console.log(`${this.nama} terjual ${jumlah} unit`);
  }
}

// 3. Child class ProdukDigital
class ProdukDigital extends Produk {
  constructor(id, nama, harga, ukuranFile, formatFile) {
    super(id, nama, harga, Infinity); // stok tidak terbatas
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  // override info()
  info() {
    console.log(
      `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | File: ${this.ukuranFile}MB (${this.formatFile})`,
    );
  }

  // override jual() (tidak mengurangi stok)
  jual(jumlah) {
    console.log(`${this.nama} (digital) berhasil dibeli ${jumlah} kali`);
  }

  download() {
    console.log(`Mengunduh ${this.nama}...`);
  }
}

// 4. Child class ProdukFisik
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  // override info()
  info() {
    console.log(
      `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`,
    );
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}

// 5. Membuat instance
const produk1 = new ProdukDigital(1, "Ebook JavaScript", 50000, 5, "PDF");
const produk2 = new ProdukDigital(
  2,
  "Video Course Node.js",
  150000,
  200,
  "MP4",
);

const produk3 = new ProdukFisik(3, "Keyboard", 250000, 10, 800, "30x10x3 cm");
const produk4 = new ProdukFisik(4, "Mouse", 150000, 0, 200, "10x5x3 cm");

// Array daftarProduk
const daftarProduk = [produk1, produk2, produk3, produk4];

// 6a. Menampilkan semua info produk
console.log("=== Semua Produk ===");
daftarProduk.forEach((produk) => {
  produk.info();
});

// 6b. Filter produk yang tersedia
const produkTersedia = daftarProduk.filter((produk) => produk.tersedia());

console.log("\n=== Produk Tersedia ===");
produkTersedia.forEach((produk) => {
  produk.info();
});

// 6c. Map nama produk saja
const namaProduk = daftarProduk.map((produk) => produk.nama);

console.log("\n=== Nama Produk ===");
console.log(namaProduk);

// Tambahan uji method
console.log("\n=== Uji Method ===");
produk1.download();
produk3.jual(2);
console.log("Ongkir Keyboard:", produk3.hitungOngkir(10000));
