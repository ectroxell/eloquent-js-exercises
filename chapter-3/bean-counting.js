const countBs = (string) => {
  let Bs = 0;
  string.split('').forEach(letter => {
    if (letter === "B") {
      Bs += 1;
    }
  });
  return Bs;
}

console.log(countBs('Bean Bag'))