// 03-deque.js — Double-Ended Queue

class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // Tambah di depan — O(1)
  addFront(data) {
    const n = new Node(data);

    if (!this.front) {
      this.front = this.back = n;
    } else {
      n.next = this.front;
      this.front.prev = n;
      this.front = n;
    }

    this.size++;
  }

  // Tambah di belakang — O(1)
  addBack(data) {
    const n = new Node(data);

    if (!this.back) {
      this.front = this.back = n;
    } else {
      n.prev = this.back;
      this.back.next = n;
      this.back = n;
    }

    this.size++;
  }

  // Hapus dari depan — O(1)
  removeFront() {
    if (!this.front) return null;

    const v = this.front.data;
    this.front = this.front.next;

    if (this.front) {
      this.front.prev = null;
    } else {
      this.back = null;
    }

    this.size--;
    return v;
  }

  // Hapus dari belakang — O(1)
  removeBack() {
    if (!this.back) return null;

    const v = this.back.data;
    this.back = this.back.prev;

    if (this.back) {
      this.back.next = null;
    } else {
      this.front = null;
    }

    this.size--;
    return v;
  }

  peekFront() {
    return this.front ? this.front.data : null;
  }

  peekBack() {
    return this.back ? this.back.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let s = "";
    let cur = this.front;

    while (cur) {
      s += cur.next ? `[${cur.data}]↔` : `[${cur.data}]`;

      cur = cur.next;
    }

    console.log("  FRONT→", s, "←BACK");
  }
}

// ── Aplikasi: Sliding Window Maximum ─────────────────
// Diberikan array dan window size k,
// kembalikan nilai maksimum pada setiap window

function slidingWindowMax(arr, k) {
  const deque = new Deque(); // menyimpan indeks
  const hasil = [];

  for (let i = 0; i < arr.length; i++) {
    // Hapus indeks yang sudah di luar window
    if (!deque.isEmpty() && deque.peekFront() <= i - k) {
      deque.removeFront();
    }

    // Hapus indeks dari belakang
    // jika nilainya lebih kecil dari elemen saat ini
    while (!deque.isEmpty() && arr[deque.peekBack()] < arr[i]) {
      deque.removeBack();
    }

    deque.addBack(i);

    // Ambil maksimum setiap window
    if (i >= k - 1) {
      hasil.push(arr[deque.peekFront()]);
    }
  }

  return hasil;
}

// ── Demonstrasi Deque ────────────────────────────────

const dq = new Deque();

dq.addBack(1);
dq.addBack(2);
dq.addBack(3);
dq.addFront(0);

dq.print();

console.log("Remove back :", dq.removeBack());
console.log("Remove front:", dq.removeFront());

dq.print();

// ── Demonstrasi Sliding Window Maximum ──────────────

console.log("\n=== Sliding Window Maximum ===");

const arr = [1, 3, -1, -3, 5, 3, 6, 7];

console.log("Array :", arr);
console.log("k = 3 :", slidingWindowMax(arr, 3));
// Output: [3, 3, 5, 5, 6, 7]
