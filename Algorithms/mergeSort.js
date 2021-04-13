const merge = (arr1, arr2) => {
  let result = [];

  while (arr1[0] !== undefined || arr2[0] !== undefined) {
    let val1 = arr1[0];
    let val2 = arr2[0];

    if (val1 === undefined) {
      result = result.concat(arr2.splice(0));
      break;
    }

    if (val2 === undefined) {
      result = result.concat(arr1.splice(0));
      break;
    }

    if (val1 > val2) {
      let shiftedVal  = arr2.shift();
      result.push(shiftedVal);
    } else {
      let shiftedVal  = arr1.shift();
      result.push(shiftedVal);
    }
  }

  return result;
}

let testArr1 = [0,0,1,2,3,4,8,9];
let testArr2 = [-4,-3,0,3,3,5,6];

let mergedArray = merge(testArr1, testArr2);
console.log(testArr1);
console.log(testArr2);
console.log(mergedArray);