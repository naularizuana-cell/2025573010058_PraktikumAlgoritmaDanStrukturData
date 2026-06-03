// tugas-2.js
// Min Stack dengan O(1) getMin()

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // O(1)
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  // O(1)
  pop() {
    if (this.isEmpty()) return null;

    const value = this.top.data;
    this.top = this.top.next;
    this.size--;

    return value;
  }

  // O(1)
  peek() {
    return this.top ? this.top.data : null;
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }
}

class MinStack {
  constructor() {
    this.stack = new Stack(); // stack utama
    this.minStack = new Stack(); // stack minimum
  }

  // O(1)
  push(value) {
    this.stack.push(value);

    if (this.minStack.isEmpty() || value <= this.minStack.peek()) {
      this.minStack.push(value);
    }
  }

  // O(1)
  pop() {
    if (this.stack.isEmpty()) return null;

    const removed = this.stack.pop();

    if (removed === this.minStack.peek()) {
      this.minStack.pop();
    }

    return removed;
  }

  // O(1)
  peek() {
    return this.stack.peek();
  }

  // O(1)
  getMin() {
    return this.minStack.peek();
  }

  // O(1)
  isEmpty() {
    return this.stack.isEmpty();
  }
}

// =====================
// Pengujian
// =====================

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log("Minimum saat ini =", ms.getMin()); // 2

ms.pop();
console.log("Setelah pop() =", ms.getMin()); // 3

ms.pop();
console.log("Setelah pop() =", ms.getMin()); // 3
