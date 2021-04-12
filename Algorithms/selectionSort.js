const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i ++) {
    let minIdx = i;
    let temp = arr[i];

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

let testArr = [2,1,4,5,9,-1,0];
console.log(testArr);
selectionSort(testArr);
console.log(testArr);