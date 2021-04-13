const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }

  return arr;
}

let testArr = [2,1,4,5,9,-1,0];
console.log(testArr);
insertionSort(testArr);
console.log(testArr);