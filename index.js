import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.prepend("test 1");
linkedList.append("test 2");
linkedList.append("test 3");
console.log("size: ", linkedList.size()); // size:  3
console.log("head: ", linkedList.head()); // head:  Node {value: 'test 1',  next: Node { value: 'test 2', next: Node { value: 'test 3', next: null } }}
console.log("tail: ", linkedList.tail()); // tail:  Node { value: 'test 3', next: null }
console.log(linkedList.at(2)); // Node { value: 'test 3', next: null }
console.log(linkedList.at(3)); // null
console.log(linkedList.contains("test 1")); // true
console.log(linkedList.contains("alo")); // false
console.log(linkedList.find("test 3")); // 2
console.log(linkedList.find("alo")); // null
linkedList.toString(); // (test 1) -> (test 2) -> (test 3) -> null
linkedList.insertAt(1, "test 4"); // (test 1) -> (test 4) -> (test 2) -> (test 3) -> null
linkedList.insertAt(5, "test 5"); // index out of bounds
linkedList.removeAt(2); // (test 1) -> (test 4) -> (test 3) -> null
linkedList.removeAt(2); // index out of bounds

