// tugas-1.js
// Implementasi Hash Table dengan Open Addressing (Linear Probing)

class HashMapLinearProbing {
  constructor(kapasitas = 53) {
    this.kapasitas = kapasitas;
    this.tabel = new Array(kapasitas);
    this.ukuran = 0;

    // Tombstone marker untuk delete
    this.DELETED = { deleted: true };
  }

  // Hash Function
  _hash(key) {
    let hash = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
    }

    return hash;
  }

  // Resize jika load factor > 0.7
  _resize() {
    const lama = this.tabel;

    this.kapasitas *= 2;
    this.tabel = new Array(this.kapasitas);
    this.ukuran = 0;

    for (const item of lama) {
      if (item && item !== this.DELETED) {
        this.set(item.key, item.value);
      }
    }
  }

  // Insert / Update
  set(key, value) {
    if ((this.ukuran + 1) / this.kapasitas > 0.7) {
      this._resize();
    }

    let idx = this._hash(key);

    while (
      this.tabel[idx] &&
      this.tabel[idx] !== this.DELETED &&
      this.tabel[idx].key !== key
    ) {
      idx = (idx + 1) % this.kapasitas;
    }

    if (!this.tabel[idx] || this.tabel[idx] === this.DELETED) {
      this.ukuran++;
    }

    this.tabel[idx] = { key, value };
  }

  // Ambil data
  get(key) {
    let idx = this._hash(key);
    let start = idx;

    while (this.tabel[idx] !== undefined) {
      if (this.tabel[idx] !== this.DELETED && this.tabel[idx].key === key) {
        return this.tabel[idx].value;
      }

      idx = (idx + 1) % this.kapasitas;

      if (idx === start) {
        break;
      }
    }

    return undefined;
  }

  // Cek key
  has(key) {
    return this.get(key) !== undefined;
  }

  // Delete dengan tombstone
  delete(key) {
    let idx = this._hash(key);
    let start = idx;

    while (this.tabel[idx] !== undefined) {
      if (this.tabel[idx] !== this.DELETED && this.tabel[idx].key === key) {
        this.tabel[idx] = this.DELETED;
        this.ukuran--;
        return true;
      }

      idx = (idx + 1) % this.kapasitas;

      if (idx === start) {
        break;
      }
    }

    return false;
  }

  // Ambil semua key
  keys() {
    const hasil = [];

    for (const item of this.tabel) {
      if (item && item !== this.DELETED) {
        hasil.push(item.key);
      }
    }

    return hasil;
  }

  // Informasi distribusi
  infoDistribusi() {
    let terisi = 0;

    for (const item of this.tabel) {
      if (item && item !== this.DELETED) {
        terisi++;
      }
    }

    console.log("=== Distribusi Hash Table ===");
    console.log("Kapasitas    :", this.kapasitas);
    console.log("Ukuran       :", this.ukuran);
    console.log("Slot Terisi  :", terisi);
    console.log("Load Factor  :", (this.ukuran / this.kapasitas).toFixed(2));
  }
}

// =======================
// DEMO
// =======================

const map = new HashMapLinearProbing();

map.set("javascript", 1);
map.set("python", 2);
map.set("java", 3);
map.set("c++", 4);
map.set("rust", 5);
map.set("go", 6);
map.set("typescript", 7);

console.log("=== HashMap Linear Probing ===");
console.log("get(java) :", map.get("java"));
console.log("has(python):", map.has("python"));

map.delete("java");

console.log("Setelah hapus java:", map.has("java"));
console.log("Keys:", map.keys());

map.infoDistribusi();
