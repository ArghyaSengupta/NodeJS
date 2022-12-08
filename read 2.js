const fs = require('fs');//in built module

fs.readFile('./demofile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});