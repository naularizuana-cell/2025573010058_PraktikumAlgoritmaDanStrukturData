class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.nilai = [];
  }

  tambahNilai(nilai) {
    this.nilai.push(nilai);
  }
  hitungRataRata() {
    if (this.nilai.length === 0) return 0;
    const total = this.nilai.reduce((sum, n) => sum + n, 0);
    return (total / this.nilai.length).toFixed(2);
  }
  getInfo() {
    return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
  }
}

const mhs1 = new Mahasiswa("Budi Santoso", "2021001", "Informatika");
const mhs2 = new Mahasiswa("Siti Rahayu", "2021002", "Sistem Informasi");
const mhs3 = new Mahasiswa("Ahmad Fauzi", "2021003", "Informatika");

mhs1.tambahNilai(85);
mhs1.tambahNilai(90);
mhs1.tambahNilai(78);
mhs2.tambahNilai(92);
mhs2.tambahNilai(88);
mhs2.tambahNilai(95);
mhs3.tambahNilai(70);
mhs3.tambahNilai(75);

console.log("=== Data Mahasiswa ===");
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

class Kalkulator {
  static tambah(a, b) {
    return a + b;
  }
  static kurang(a, b) {
    return a - b;
  }
  static kali(a, b) {
    return a * b;
  }
  static bagi(a, b) {
    if (b === 0) return "Error: bagi nol";
    return a / b;
  }
}

console.log("\n=== Static Method ===");
console.log("10 + 5 =", Kalkulator.tambah(10, 5));
console.log("10 * 5 =", Kalkulator.kali(10, 5));
console.log("10 / 0 =", Kalkulator.bagi(10, 0));

class Lingkaran {
  constructor(jariJari) {
    this._jariJari = jariJari;
  }

  get jariJari() {
    return this._jariJari;
  }
  get luas() {
    return (Math.PI * this._jariJari ** 2).toFixed(2);
  }
  get keliling() {
    return (2 * Math.PI * this._jariJari).toFixed(2);
  }

  set jariJari(nilai) {
    if (nilai <= 0) throw new Error("Jari-jari harus positif!");
    this._jariJari = nilai;
  }
}
console.log("\n=== Getter & Setter ===");
const l = new Lingkaran(7);
console.log("Jari-jari:", l.jariJari);
console.log("Luas     :", l.luas);
console.log("Keliling :", l.keliling);
l.jariJari = 10;
console.log("Setelah diubah - Luas:", l.luas);

// 2. Membuat class BankAccount
class BankAccount {
  constructor(namaPemilik, saldoAwal = 0) {
    this.namaPemilik = namaPemilik;
    this.saldo = saldoAwal;
  }

  // 3. Method setor()
  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah setor harus lebih dari 0");
      return;
    }
    this.saldo += jumlah;
    console.log(`${this.namaPemilik} berhasil setor Rp${jumlah}`);
  }

  // 4. Method tarik()
  tarik(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah tarik harus lebih dari 0");
      return;
    }
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi");
      return;
    }
    this.saldo -= jumlah;
    console.log(`${this.namaPemilik} berhasil tarik Rp${jumlah}`);
  }

  // 5. Method cekSaldo()
  cekSaldo() {
    console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
  }

  // 6. Static method transfer()
  static transfer(akun1, akun2, jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah transfer harus lebih dari 0");
      return;
    }

    if (jumlah > akun1.saldo) {
      console.log("Transfer gagal: Saldo tidak mencukupi");
      return;
    }

    akun1.tarik(jumlah);
    akun2.setor(jumlah);

    console.log(
      `Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik} berhasil`,
    );
  }
}

// 7. Membuat instance
const akun1 = new BankAccount("Naula", 100000);
const akun2 = new BankAccount("Rizky", 50000);

// Uji method
console.log("=== Cek Saldo Awal ===");
akun1.cekSaldo();
akun2.cekSaldo();

console.log("\n=== Setor ===");
akun1.setor(50000);
akun1.setor(-100); // error

console.log("\n=== Tarik ===");
akun1.tarik(30000);
akun1.tarik(200000); // saldo tidak cukup
akun1.tarik(-50); // error

console.log("\n=== Transfer ===");
BankAccount.transfer(akun1, akun2, 50000);
BankAccount.transfer(akun1, akun2, 500000); // saldo tidak cukup
BankAccount.transfer(akun1, akun2, -100); // error

console.log("\n=== Saldo Akhir ===");
akun1.cekSaldo();
akun2.cekSaldo();
