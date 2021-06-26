class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curValue = this.head;
    while (curValue.next) {
      curValue = curValue.next;
    }
    curValue.next = node;
  }
  values() {
    let values = [];
    let curValue = this.head;
    while (curValue) {
      values.push(curValue.value);
      curValue = curValue.next;
    }
    return values;
  }
  value(key) {
    let value;
    let curValue = this.head;
    while (curValue) {
      if(`${key}` in curValue.value){
        value = curValue.value;
        break;
      }
      curValue= curValue.next;
    }
    return value;
  }
  includes(key) {
    let curValue = this.head;
    let check = false;
    while (curValue) {
      if (`${key}` in curValue.value) {
        check = true;
      }
      curValue = curValue.next;
    }
    return check;
  }
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let hash = 0;
    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;
    return hash;
  }
  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[hash].add(keyValuePair);
  }
  get(key) {
    const idx = this.hash(key);
    const find = this.table[idx];
    if (!find) return null;
    return find.values(key);
  }
  getOne(key){
    const idx = this.hash(key);
    const find = this.table[idx];
    if(!find) return null;
    return find.value(key);
  }
  contains(key) {
    const idx = this.hash(key);
    const find = this.table[idx];
    if (!find) return false;
    return find.includes(key);
  }
}

module.exports ={HashTable};
