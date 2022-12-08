//Create a callback function that will read the first 5 even numbers from a file containing 10 even numbers.
const fs = require("fs").promises;

/**
 * Reads the first five number from a file with ten even numbers.
 */
async function readFirst5Even() {
  //reading the file with fs module
  const file = await fs.readFile("./static/files/tenEvenNumbers.txt");
  //converting the file which is buffer to string and splitting by line.
  const line = file.toString().split("\n");
  //iterating on the top five lines.
  for (let i = 0; i < 5; i++) {
    console.log(line[i]);
  }
}

readFirst5Even();
