const checkExists = function (arr, num) {
  let flag = false;
  for (let item of arr) {
    item === num ? (flag = true) : "";
  }
  return flag;
};

console.log(checkExists([1, 2, 3, 4], 8));
