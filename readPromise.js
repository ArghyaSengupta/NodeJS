const fs = require("fs").promises;

/**
 * Desc:
 * Takes filepath and returns the content in a string.
 * Params:
 * @filepath string
 *
 */
async function readUTF8File(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  //Non existing file
  console.log(await readUTF8File("./abcd.txt"));

  //Existing file
  console.log(await readUTF8File("./static/files/testFile.txt"));

  //File with different encoding
  console.log(
    await readUTF8File("./static/files/testFileDifferentEncoding.txt")
  );
}
main();
