function generatePyramid(levels) {
  // Check if levels is a positive integer
  if (typeof levels !== "number" || levels < 1 || !Number.isInteger(levels)) {
    return "Please provide a positive integer for the number of levels.";
  }

  let pyramid = "";

  // Loop through each level of the pyramid
  for (let i = 0; i < levels; i++) {
    // Add spaces to center the row
    for (let j = 0; j < levels - i - 1; j++) {
      pyramid += " ";
    }

    // Add asterisks for the current level
    for (let k = 0; k < 2 * i + 1; k++) {
      pyramid += "*";
    }

    // Move to the next row
    pyramid += "\n";
  }

  return pyramid;
}

// Generate the pyramid with N value of 10
console.log(generatePyramid(10));

// try a few samples
// go to ChatGPT and type in "give me a sample Code Signal Test"
