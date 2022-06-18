function filterArray(arr) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(filterArray([1, 2, "minty", 45, "buhari", "123", 3]));

module.exports = filterArray;
