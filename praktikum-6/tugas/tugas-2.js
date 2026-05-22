// tugas/tugas-2.js
// ============================================
// SOAL KLASIK LINKED LIST
// ============================================

// ── Class Node ───────────────────────────────
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ============================================
// Membuat Linked List dari Array
// ============================================
function buatList(arr) {
  if (arr.length === 0) {
    return null;
  }

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

// ============================================
// Cetak Linked List
// ============================================
function cetakList(head) {
  if (!head) {
    console.log("[List kosong]");
    return;
  }

  let current = head;
  let result = "";

  while (current) {
    result += current.next ? `[${current.data}] → ` : `[${current.data}]`;

    current = current.next;
  }

  console.log(result);
}

// ============================================
// 1. PALINDROM LINKED LIST
// Cek apakah linked list adalah palindrom
// Big O: O(n)
// ============================================
function palindromLL(head) {
  const arr = [];
  let current = head;

  // Konversi linked list ke array
  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  // Cek palindrom
  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) {
      return false;
    }

    kiri++;
    kanan--;
  }

  return true;
}

// ============================================
// 2. HAPUS NODE KE-N DARI AKHIR
// Menggunakan two-pointer
// Big O: O(n)
// ============================================
function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let cepat = dummy;
  let lambat = dummy;

  // Geser pointer cepat n+1 langkah
  for (let i = 0; i <= n; i++) {
    if (!cepat) {
      return head;
    }

    cepat = cepat.next;
  }

  // Geser bersamaan
  while (cepat) {
    cepat = cepat.next;
    lambat = lambat.next;
  }

  // Hapus node
  lambat.next = lambat.next.next;

  return dummy.next;
}

// ============================================
// 3. TENGAH LINKED LIST
// Jika genap → ambil tengah kedua
// Fast & Slow Pointer
// Big O: O(n)
// ============================================
function tengahLinkedList(head) {
  if (!head) {
    return null;
  }

  let lambat = head;
  let cepat = head;

  while (cepat && cepat.next) {
    lambat = lambat.next;
    cepat = cepat.next.next;
  }

  return lambat;
}

// ============================================
// TESTING
// ============================================

console.log("====================================");
console.log("TEST PALINDROM LINKED LIST");
console.log("====================================");

// Kasus 1
const P1 = buatList([1, 2, 3, 2, 1]);
cetakList(P1);
console.log("Palindrom:", palindromLL(P1));

// Kasus 2
const P2 = buatList([1, 2, 2, 1]);
cetakList(P2);
console.log("Palindrom:", palindromLL(P2));

// Kasus 3
const P3 = buatList([1, 2, 3, 4]);
cetakList(P3);
console.log("Palindrom:", palindromLL(P3));

// ============================================

console.log("\n====================================");
console.log("TEST HAPUS N DARI AKHIR");
console.log("====================================");

// Kasus 1
let H1 = buatList([1, 2, 3, 4, 5]);

console.log("Sebelum:");
cetakList(H1);

H1 = hapusNDariAkhir(H1, 2);

console.log("Sesudah hapus n=2:");
cetakList(H1);

// Kasus 2
let H2 = buatList([10, 20, 30]);

console.log("\nSebelum:");
cetakList(H2);

H2 = hapusNDariAkhir(H2, 1);

console.log("Sesudah hapus n=1:");
cetakList(H2);

// Kasus 3
let H3 = buatList([7, 8, 9, 10]);

console.log("\nSebelum:");
cetakList(H3);

H3 = hapusNDariAkhir(H3, 4);

console.log("Sesudah hapus n=4:");
cetakList(H3);

// ============================================

console.log("\n====================================");
console.log("TEST TENGAH LINKED LIST");
console.log("====================================");

// Kasus 1
const T1 = buatList([1, 2, 3, 4, 5]);

cetakList(T1);

console.log("Node tengah:", tengahLinkedList(T1).data);

// Kasus 2
const T2 = buatList([10, 20, 30, 40, 50, 60]);

cetakList(T2);

console.log("Node tengah:", tengahLinkedList(T2).data);

// Kasus 3
const T3 = buatList([100, 200]);

cetakList(T3);

console.log("Node tengah:", tengahLinkedList(T3).data);
