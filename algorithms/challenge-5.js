function filterList(arr) {
  let filteredList = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      filteredList.push(arr[i]);
    }
  }
  return filteredList;
}

console.log(filterList([111, 26, "bitcoin", 5, "dip", "123", 3]));

module.exports = filterList;
