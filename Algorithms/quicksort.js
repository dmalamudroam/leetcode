const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotIdx = start;
  let pivotVal = arr[0];

  for (let i = start + 1; i < arr.length; i++) {
    let current = arr[i];
    if (current < pivotVal) {
      pivotIdx++;
      let swap = arr[pivotIdx];
      arr[pivotIdx] = current;
      arr[i] = swap;
    }
  }
  let swap = arr[pivotIdx];
  arr[pivotIdx] = arr[0];
  arr[0] = swap;
  return pivotIdx;
}

let testArr = [-2,-5,6,-9,11,4,4];
console.log(pivot(testArr));
console.log(testArr);