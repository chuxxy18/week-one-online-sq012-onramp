function sumMix(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += Number(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumMix([11, "227", 39, "23", "40"]));

module.exports = sumMix;
