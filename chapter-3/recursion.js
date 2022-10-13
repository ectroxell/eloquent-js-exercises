function isEven(num) { 
  if (num <= 0) {
    return;
  }
  if (num % 2 === 0) {
    return true;
  };
  if (num % 2 === 1) {
    return false;
  };
  return isEven(num - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));