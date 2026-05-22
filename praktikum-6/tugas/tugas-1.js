// tugas/tugas-1.js
// ============================================
// DOUBLY LINKED LIST
// ============================================

// ── Class Node ───────────────────────────────
// Setiap node memiliki:
// data  -> nilai
// next  -> pointer ke node berikutnya
// prev  -> pointer ke node sebelumnya
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// ── Class DoublyLinkedList ───────────────────
class DoublyLinkedList {
  constructor() {
    this.head = null; // node pertama
    this.tail = null; // node terakhir
    this.size = 0;
  }

  // ========================================
  // APPEND
  // Tambah node di akhir
  // Big O: O(1)
  // Karena ada pointer tail
  // ========================================
  append(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Hubungkan node baru ke tail lama
      newNode.prev = this.tail;

      // Tail lama menunjuk ke node baru
      this.tail.next = newNode;

      // Update tail
      this.tail = newNode;
    }

    this.size++;
  }

  // ========================================
  // PREPEND
  // Tambah node di awal
  // Big O: O(1)
  // ========================================
  prepend(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Node baru menunjuk head lama
      newNode.next = this.head;

      // Head lama menunjuk balik ke node baru
      this.head.prev = newNode;

      // Update head
      this.head = newNode;
    }

    this.size++;
  }

  // ========================================
  // INSERT AT
  // Sisipkan node pada indeks tertentu
  // Big O: O(n)
  // ========================================
  insertAt(data, index) {
    // Validasi index
    if (index < 0 || index > this.size) {
      console.log("Index di luar batas!");
      return;
    }

    // Insert di awal
    if (index === 0) {
      this.prepend(data);
      return;
    }

    // Insert di akhir
    if (index === this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    // Cari posisi
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    // Atur pointer
    newNode.next = current;
    newNode.prev = current.prev;

    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
  }

  // ========================================
  // DELETE
  // Hapus node berdasarkan data
  // Big O: O(n)
  // ========================================
  delete(data) {
    // Jika kosong
    if (!this.head) {
      return false;
    }

    let current = this.head;

    while (current) {
      // Jika data ditemukan
      if (current.data === data) {
        // Jika node pertama
        if (current === this.head) {
          this.head = current.next;

          if (this.head) {
            this.head.prev = null;
          }
        }

        // Jika node terakhir
        if (current === this.tail) {
          this.tail = current.prev;

          if (this.tail) {
            this.tail.next = null;
          }
        }

        // Jika node tengah
        if (current.prev) {
          current.prev.next = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        }

        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // ========================================
  // REVERSE
  // Membalik urutan linked list
  // Big O: O(n)
  // ========================================
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      // Tukar next dan prev
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      // Geser ke node berikutnya
      current = current.prev;
    }

    // Tukar head dan tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // ========================================
  // PRINT FORWARD
  // Cetak dari depan ke belakang
  // Big O: O(n)
  // ========================================
  printForward() {
    if (!this.head) {
      console.log("[List kosong]");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.next ? `[${current.data}] ⇄ ` : `[${current.data}]`;

      current = current.next;
    }

    console.log("Forward :", result);
  }

  // ========================================
  // PRINT BACKWARD
  // Cetak dari belakang ke depan
  // Big O: O(n)
  // ========================================
  printBackward() {
    if (!this.tail) {
      console.log("[List kosong]");
      return;
    }

    let current = this.tail;
    let result = "";

    while (current) {
      result += current.prev ? `[${current.data}] ⇄ ` : `[${current.data}]`;

      current = current.prev;
    }

    console.log("Backward:", result);
  }
}

// ============================================
// DEMONSTRASI
// ============================================

const dll = new DoublyLinkedList();

console.log("=== APPEND ===");

dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);

dll.printForward();
dll.printBackward();

console.log("\n=== PREPEND ===");

dll.prepend(5);

dll.printForward();
dll.printBackward();

console.log("\n=== INSERT AT INDEX 2 ===");

dll.insertAt(15, 2);

dll.printForward();
dll.printBackward();

console.log("\n=== DELETE DATA 20 ===");

dll.delete(20);

dll.printForward();
dll.printBackward();

console.log("\n=== REVERSE ===");

dll.reverse();

dll.printForward();
dll.printBackward();

console.log("\n=== SIZE ===");
console.log("Jumlah node:", dll.size);

// ============================================
// PEMBUKTIAN APPEND O(1)
// ============================================
//
// Pada Doubly Linked List biasa,
// append harus traversal dari head ke tail,
// sehingga Big O = O(n).
//
// Namun pada implementasi ini,
// terdapat pointer tail yang selalu menunjuk
// ke node terakhir.
//
// Akibatnya append langsung dilakukan
// tanpa traversal.
//
// Langkah append:
// 1. Node baru menunjuk ke tail lama
// 2. Tail lama menunjuk ke node baru
// 3. Tail dipindahkan ke node baru
//
// Semua langkah konstan,
// sehingga append = O(1).
// ============================================
