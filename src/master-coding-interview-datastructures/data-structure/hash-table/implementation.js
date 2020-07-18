/**
 * search: O(1)
 * insert: O(1)
 * lookup: O(1)
 * delete: O(1)
 */
/**
 * The simple hash table implement;
 * ***** hash table in javascript is the object *****;
 */
// -------------------------------- my implementation;
/*
class HashTable {
  // Init the hash table size;
  constructor(size) {
    this.data = new Array(size);
  }

  // The simple hash function;
  // Use _ to point out this should be private, should't access
  // outside;(but actually can be accessed)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // The set method for add data;
  set(key, value) {
    const hash = this._hash(key);
    this.data[hash] = value;
  }

  // The get method for access data;
  get(key) {
    const hash = this._hash(key);
    return this.data[hash];
  }

  // Handle collision;
  handleCollision() {}
}

const myData = new HashTable(10);
myData.set("apple", 200);
myData.set("tomato", 300);
console.log(myData.get("apple"));
console.log(myData.get("tomato"));

*/

// --------------------------------- the course solution;
class HashTable2 {
  constructor(size) {
    this.data = new Array(size);
  }

  // The hash function;
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Set data;
  set(key, value) {
    const address = this._hash(key);
    // When replace use addressData, this code not working, WHY?
    // let addressData = this.data[address];
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // Get data;
  get(key) {
    const address = this._hash(key);
    if (this.data[address]) {
      const addressData = this.data[address];
      for (let i = 0; i < addressData.length; i++) {
        if (addressData[i][0] === key) return addressData[i][1];
      }
      return undefined;
    }
  }
  // Iterate all data in hash table, this is just iterate the first item;
  fetchAllFirst() {
    const allFirstData = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        allFirstData.push(this.data[i][0]);
      }
    }
    return allFirstData;
  }
}
const myData2 = new HashTable2(10);
myData2.set("tomato", 200);
myData2.set("apple", 100);
// When there two same items, only return the first one, this need to improve;
console.log(myData2.set("apple", 90));
console.log(myData2.get("apple"));
console.log(myData2.get("aple"));
console.log(myData2.fetchAllFirst());
