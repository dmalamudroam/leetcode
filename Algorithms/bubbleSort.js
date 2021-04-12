const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

let testArr = [2,1,4,5,9,-1,0];
console.log(testArr);
bubbleSort(testArr);
console.log(testArr);