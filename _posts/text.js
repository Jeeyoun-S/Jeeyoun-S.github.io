const arr = ["oh", "ah", "yeah"];
const new_arr = arr.map((value, index) => {
  return index == 0;
});
console.log(new_arr);