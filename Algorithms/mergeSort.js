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

let testArr1 = [0,0,1,2,3,4,8,9];
let testArr2 = [-4,-3,0,3,3,5,6];

let mergedArray = merge(testArr1, testArr2);
console.log(mergedArray);