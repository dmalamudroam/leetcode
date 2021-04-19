const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotIdx = start;
  let pivotVal = arr[start];

  for (let i = start + 1; i <= end; i++) {
    let current = arr[i];
    if (current < pivotVal) {
      pivotIdx++;
      let swap = arr[pivotIdx];
      arr[pivotIdx] = current;
      arr[i] = swap;
    }
  }
  let swap = arr[pivotIdx];
  arr[pivotIdx] = arr[start];
  arr[start] = swap;
  return pivotIdx;
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) {
    return arr;
  }

  let pivotIdx = pivot(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);

  return arr;
}

let testArr = [-2,-5,6,-9,11,4,4];
console.log(quickSort(testArr));
//console.log(pivot(testArr));
console.log(testArr);