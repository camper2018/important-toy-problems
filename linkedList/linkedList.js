/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
  this.head = null;
  this.tail = null;
  this.size = 0;
};


//write methods here!

LinkedList.prototype.addToTail = function(value) {
  let node = new this.makeNode(value);
  if(this.head === null) {
    this.head = node;
    this.tail = node;
  } else if (this.head.next === null) {
    this.head.next = node;
    this.tail = node;
  } else {
    let prev = this.tail;
    prev.next = node;
    this.tail = node;
  }
  this.size++;
};

LinkedList.prototype.removeHead = function() {
  let tmp = this.head;
  if (tmp) {
    if (tmp.next) {
      this.head = tmp.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return tmp.value;
  }
  return null;
};

LinkedList.prototype.contains = function(value,node=this.head) {
  if (node && node.value === value) {
    return true;
  }
  if (node.next === null) {
    return false;
  }
  return this.contains(value, node.next);

};

LinkedList.prototype.makeNode = function(value) {
  this.data = data;
  this.next = null;
};
