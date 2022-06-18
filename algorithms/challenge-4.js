function sumTwoSmallestNums(arr) {
  let positives = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }

  let first = Math.min(...positives);
  positives.splice(positives.indexOf(first), 1);
  let second = Math.min(...positives);
  return first + second;
}

console.log(sumTwoSmallestNums([8, 7, 5, 19, 11]));

module.exports = sumTwoSmallestNums;
