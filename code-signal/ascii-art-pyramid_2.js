function createPyramid(num) {
  if (typeof num !== "number" || num < 1 || !Number.isInteger(num)) {
    return "Please provide a valid number";
  }

  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) str += " ";
    for (let k = 0; k < 2 * i + 1; k++) str += "*";
    str += "\n";
  }
  return str;
}

console.log(createPyramid(10));
