class maxBinaryHeap {
  constructor () {
    this.values = [];
  }

  insert (val) {
    this.values.push(val);

    const getParent = (index) => Math.floor((index - 1) / 2);

    let newValIdx = this.values.length - 1;
    let currentParentIdx = getParent(newValIdx);

    while (val > this.values[currentParentIdx]) {
      this.values[newValIdx] = this.values[currentParentIdx];
      this.values[currentParentIdx] = val;

      newValIdx = currentParentIdx;
      currentParentIdx = getParent(newValIdx);
    }

    return this.values;
  }

  extractMax () {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    const sinkVal = this.values.pop();
    this.values[0] = sinkVal;

    const getLeftChild = (index) => ((2 * index) + 1);

    let sinkIdx = 0;

    while (sinkIdx < this.values.length - 1) {
      let leftChildIdx = getLeftChild(sinkIdx);
      let rightChildIdx = getLeftChild(sinkIdx) + 1;
      let largerChildVal,
          largerChildIdx;

      if (this.values[leftChildIdx] < this.values[rightChildIdx]) {
        largerChildIdx = rightChildIdx;
        largerChildVal = this.values[rightChildIdx];
      } else {
        largerChildIdx = leftChildIdx;
        largerChildVal = this.values[leftChildIdx];
      }

      if (sinkVal < largerChildVal) {
        this.values[sinkIdx] = largerChildVal;
        this.values[largerChildIdx] = sinkVal;
        sinkIdx = largerChildIdx;
      } else {
        break;
      }
    }
    return max;
  }
}