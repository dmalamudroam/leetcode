const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let val1 = arr1[i];
    let val2 = arr2[j];

    if (val1 > val2) {
      result.push(val2);
      j++;
    } else {
      result.push(val1);
      i++;
    }
  }

  while(i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

const mergeSort = (array) => {

  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

let testArr = [-4,-3,0,3,3,5,6,0,0,1,2,3,4,8,9];
console.log(testArr);
let sortedArr = mergeSort(testArr);
console.log(sortedArr);