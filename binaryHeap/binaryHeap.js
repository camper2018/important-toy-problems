/**
 * A heap is a special kind of tree in which a parent node is ordered only in
 * respect to its immediate children. Unlike the binary search tree you may have
 * implemented, where the entire tree is ordered, in a heap the only order
 * guaranteed is between a node and its parent.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children. Therefore
 * the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the
 * parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and
 * 6th nodes. In a specific kind of binary heap, the binary min heap, every node is
 * less than its immediate children:
 *
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed. In the example above, the next node will be inserted as the second
 * child of 3. If we were to remove a node instead, we would remove the 7. This mimics
 * the behavior of a stack and allows us to manage the heap in a very memory efficient way,
 * using a list or array. For example, the heap pictured above can be described as:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * where we always add to or remove from the end of the array.
 *
 * A well known fact, utilized with binary heaps stored in arrays, is that
 * we can calculate the index of a node's parent or children using math:
 *
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * When adding a new node to a binary min heap, it could be that we violate the property of the
 * heap whereby every node is of lower value than its children. Thus whenever we insert into
 * a binary min heap, we must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is no longer less than its parent.
 *
 * Something similar happens when we want to remove the root node. Because we can only remove from the
 * end of the array we swap the position of the last node and the root node and then remove the now-last
 * node from the heap. The new root node now must be compared to its children and if it is not less than
 * both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its
 * new children and this swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here, play around with it until you can
 * easily guess how the heap will behave with both insertion and removal:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */


// Below is a binary heap whose nodes are integers. Its storage is an array and
// its `getRoot` method is already written. `BinaryHeap`'s `this._compare` method is hard-coded to return
// whether the fist element passed into it is less than the second. Use it when comparing nodes.
//
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting. Use
// the equations above to navigate parent / child relationships in the storage array, and write any
// helper functions needed to assist you.
//
// Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap, modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.


function BinaryHeap (str) {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  //this._compare = function (i, j) { return i < j };
  this.compareOperator = str;
  this._compare = function (i, j ) {
    return this.compareOperator === 'max'? i > j: i < j;
  }
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}
BinaryHeap.prototype.getLeftChild = function (parentIndex) {
  return parentIndex * 2 + 1;
};

BinaryHeap.prototype.getRightChild = function (parentIndex){
  return parentIndex * 2 + 2;
};
BinaryHeap.prototype.getParentIndex = function (childIndex) {
  return Math.floor((childIndex - 1) / 2);
};
BinaryHeap.prototype.swap = function(i,j) {
  let val1 = this._heap[i];
  this._heap[i] = this._heap[j];
  this._heap[j] = val1;
};
// fixes heap after insertion of new value such that the parent's value is always less than children's values.
BinaryHeap.prototype.bubbleUp = function(childIndex) {
  while (childIndex) {
    let parentIndx = this.getParentIndex(childIndex);
    if(this._compare(this._heap[childIndex],this._heap[parentIndx])) {
      this.swap(parentIndx, childIndex);
    }
  childIndex = parentIndx;
  }
};
//// fixes heap after removal
BinaryHeap.prototype.bubbleDown = function(parentIndex) {
  let rightChildIndx = this.getRightChild(parentIndex);
  let leftChildIndx = this.getLeftChild
  (parentIndex);
  while(this._heap[rightChildIndx]) {
    let  currentChildIndx= this._compare(this._heap[leftChildIndx],this._heap[rightChildIndx]) ? leftChildIndx: rightChildIndx;
    if (this._compare(this._heap[currentChildIndx], this._heap[parentIndex])) {
      this.swap(parentIndex, currentChildIndx);
    }
    parentIndex = currentChildIndx;
    rightChildIndx = this.getRightChild(parentIndex);
    leftChildIndx = this.getLeftChild(parentIndex);
  }
};
BinaryHeap.prototype.insert = function (value) {
  // TODO: Your code here
  this._heap.push(value);
  let currentIndx = this._heap.length - 1;
  this.bubbleUp(currentIndx);
}

BinaryHeap.prototype.removeRoot = function () {
  // store root node value to be returned.
  let root = this.getRoot();
  // if heap is empty return null
  if (root === undefined) {
    return null;
  }
  // replace root node with last node and remove root node.
  this._heap[0] = this._heap[this._heap.length - 1];
  this._heap.pop();
  // if only 2 nodes left
  if (this._heap[this.getRightChild(0)] === undefined) {
    if (this._compare(this._heap[this.getLeftChild(0)],this._heap[0])) {
      this.swap(0, this.getLeftChild(0));
    }
  }
  // if more than 2 nodes
  if (this._heap.length > 2) {
    let parentIndx = 0;
    this.bubbleDown(parentIndx);
  }
  return root;
};
BinaryHeap.prototype.buildHeap = function(array) {
  // builds binary heap from array
  array.forEach((item)=> {
    this.insert(item);
  });
};

BinaryHeap.prototype.heapSort = function(array) {
  //Heapsort is an in-place sorting algorithm with worst case and average complexity of O(n logn)

  // build max heap from array
  this.buildHeap(array);
  let startIndx = 0;
  let endIndx = this._heap.length - 1;
  let heapFix = (startIndx, endIndx)=> {
    let start = this._heap[startIndx];
    let end = this._heap[endIndx];
    array[endIndx] = start;
    this._heap[startIndx] = end;
    this._heap.pop();
    this.bubbleDown(startIndx);
  }
  //while(this._heap.length > 1) {
  while(endIndx > 0) {
    heapFix(startIndx, endIndx);
    endIndx--;
  }
  // now for correctly placing the first element in array, check the last node value in heap, if < array's secondlast element (beginning of sorted array) simply replace the first element of array with the last node , otherwise swap first element of array with second element and then replace second element with the last node value.
  if (array[1] > this._heap[0]) {
    array[0] = this._heap.pop();
  } else {
    array[0] = array[1];
    array[1] = this._heap.pop();
  }
  return array;
};

