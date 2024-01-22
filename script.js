const array = [1, 2, 3, 4];

let result = array.forEach((arr, id) => {
  console.log(arr, "arr");
});
console.log(result);

let mapResult = array.map((arr, id) => {
  return arr * 2;
});

console.log(mapResult, "Mapresult");

let filterResult = array.filter((item, id) => {
  return item % 2 == 0;
});

console.log(filterResult, "filterResult");

let find = array.find((item, id) => {
  return item === 3;
});

console.log(find, "find");
