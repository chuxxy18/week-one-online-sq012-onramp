function secondLargest(arr) {
  let largestNum = arr[0];
  let secondLargestNum = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = arr[i];
    } else if (arr[i] !== largestNum && arr[i] > secondLargestNum) {
      secondLargestNum = arr[i];
    }
  }
  return secondLargestNum;
}

console.log(secondLargest([32, 52, 63, 92, 70]));

module.exports = secondLargest;
