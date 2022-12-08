const fs = require("fs");

/**
 * Callaback function to read fileData
 * @param {Error} error
 * @param {buffer} fileData
 * @returns void
 */
function readFirstFiveCallback(error, fileData) {
  if (error) {
    console.error(error);
    return;
  }
  //converting the fileData which is buffer to string and splitting by line.
  const Lines = fileData.toString().split("\n");
  //slice the Lines to the first five and log them.
  Lines.slice(0, 5).forEach((line) => {
    console.log(line);
  });
}
//function call with callback
fs.readFile("./static/files/tenEvenNumbers", readFirstFiveCallback);
