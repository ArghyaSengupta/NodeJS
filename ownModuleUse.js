const {
  getCurrentDate,
  getLocaleDate,
  getCurrentTime,
} = require("./ownModule");

// printing current time in UNIX epoch time
console.log(getCurrentTime());

// printing current time in UTC Date format.
console.log(getCurrentDate());

// printing current time in system Locale format.
console.log(getLocaleDate(getCurrentDate()));

// passing no object to getLocaleDate
console.log(getLocaleDate());

// passing wrong object to getLocaleDate
console.log(getLocaleDate(new String("asd")));
