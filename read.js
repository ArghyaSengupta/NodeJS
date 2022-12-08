const fs = require("fs");

/**
 * @Desc
 * Takes filepath and logs the contents.
 * @Params
 * filepath string
 *
 */
function readUTF8File(filePath) {
  fs.readFile(filePath, "utf-8", (data, error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
  });
}

//Non existing file
readUTF8File("./abcd.txt");

//Existing file
readUTF8File("./static/files/testFile.txt");

//File with different encoding. Will read with missing characters.
readUTF8File("./static/files/testFileDifferentEncoding.txt");
