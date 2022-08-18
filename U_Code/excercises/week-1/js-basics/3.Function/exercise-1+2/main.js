const isEven = function (num) {
  return num % 2 == 0;
};

const printEvenNum = function (arr) {
  for (let item of arr) {
    isEven(item) ? console.log(item) : "";
  }
};

printEvenNum([1, 2, 3, 4, 5]);
