import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.listHead != null) {
      tmp = this.listHead;
    }
    this.listHead = new Node(value);
    this.listHead.next = tmp;
  }

  append(value) {
    if (this.listHead == null) {
      this.listHead = new Node(value);
      this.listHead.next = null;
    } else {
      let tmp = this.listHead;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = new Node(value);
    }
  }

  size() {
    let size = 0;
    let tmp = this.listHead;
    while (tmp != null) {
      size++;
      tmp = tmp.next;
    }
    return size;
  }

  head() {
    if (this.listHead === null) return null;
    return this.listHead;
  }

  tail() {
    let tmp = this.listHead;
    while (tmp.next != null) {
      tmp = tmp.next;
    }

    return tmp;
  }

  at(index) {
    let tmp = this.listHead;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  pop() {
    let current = this.listHead;
    let prev = null;
    while (current.next != null) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
  }

  contains(value) {
    let tmp = this.listHead;
    while (tmp.next != null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }

  find(value) {
    let tmp = this.listHead;
    let index = 0;
    while (tmp != null) {
      if (tmp.value === value) {
        return index;
      }
      tmp = tmp.next;
      index++;
    }
    return tmp;
  }

  toString() {
    let string = "";
    let tmp = this.listHead;

    if (tmp == null) {
      console.log(null);
      return 0;
    }

    while (tmp != null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.next;
    }

    string += "null";
    console.log(string);
    return string;
  }

  insertAt(index, value) {
    let current = this.listHead;
    let prev = null;
    if (current == null) {
      this.prepend(value);
    }
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
      if (current == null) {
        console.log("index out of bounds");
        return;
      }
    }
    prev.next = new Node(value);
    prev.next.next = current;
  }

  removeAt(index) {
    let current = this.listHead;
    let prev = null;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
      if (current == null) {
        console.log("index out of bounds");
        return;
      }
    }

    prev.next = current.next;
  }
}
