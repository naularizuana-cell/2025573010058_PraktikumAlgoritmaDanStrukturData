// 03-stack-ll.js
// ============================================
// IMPLEMENTASI STACK DENGAN LINKED LIST
// ============================================

// ── Class Node ───────────────────────────────
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ── Class LinkedList ─────────────────────────
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Tambah di awal — O(1)
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // Hapus node pertama — O(1)
  removeHead() {
    if (!this.head) {
      return null;
    }

    const removed = this.head.data;

    this.head = this.head.next;

    this.length--;

    return removed;
  }

  // Ambil data paling atas
  getHead() {
    return this.head ? this.head.data : null;
  }

  // Cek kosong
  isEmpty() {
    return this.length === 0;
  }

  // Ambil ukuran
  size() {
    return this.length;
  }

  // Cetak isi list
  print() {
    if (!this.head) {
      console.log("[Stack kosong]");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;

      current = current.next;
    }

    console.log(result);
  }
}

// ── Class Stack ──────────────────────────────
class Stack {
  constructor() {
    // komposisi:
    // Stack memiliki LinkedList
    this.list = new LinkedList();
  }

  // Push data ke stack — O(1)
  push(data) {
    this.list.prepend(data);
  }

  // Pop data dari stack — O(1)
  pop() {
    return this.list.removeHead();
  }

  // Lihat data paling atas
  peek() {
    return this.list.getHead();
  }

  // Cek apakah stack kosong
  isEmpty() {
    return this.list.isEmpty();
  }

  // Jumlah data stack
  size() {
    return this.list.size();
  }

  // Cetak stack
  print() {
    this.list.print();
  }
}

// ============================================
// DEMONSTRASI STACK
// ============================================

const stack = new Stack();

console.log("=== PUSH ===");

stack.push("Buka File");
stack.push("Mengetik Halo");
stack.push("Tambah Gambar");
stack.push("Hapus Paragraf");

stack.print();

console.log("\n=== PEEK ===");
console.log("Data teratas:", stack.peek());

console.log("\n=== SIZE ===");
console.log("Jumlah data:", stack.size());

console.log("\n=== SIMULASI UNDO ===");

console.log("Undo:", stack.pop());
console.log("Undo:", stack.pop());

console.log("\nIsi stack sekarang:");
stack.print();

console.log("\n=== PUSH AKSI BARU ===");

stack.push("Tambah Tabel");
stack.push("Ubah Warna");

stack.print();

console.log("\n=== CEK KOSONG ===");
console.log("Apakah stack kosong?", stack.isEmpty());

console.log("\n=== UNDO SEMUA ===");

while (!stack.isEmpty()) {
  console.log("Undo:", stack.pop());
}

console.log("\nIsi stack akhir:");
stack.print();
