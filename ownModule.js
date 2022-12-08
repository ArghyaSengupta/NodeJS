/**
 * @Desc Returns the current time in Linux epoch time.
 * @params none
 * @returns Number
 */
function getCurrentTime() {
  return Date.now();
}

/**
 * @Desc Returns the current date in UTC format
 * @params none
 * @returns Date
 */
function getCurrentDate() {
  return new Date(Date.now());
}

/**
 * @Desc Returns date in the system locale
 * @params date:Date
 * @returns string
 */
function getLocaleDate(date) {
  try {
    if (!date) {
      throw {
        name: "UndefinedError",
        message: "Param date cannot be undefined or null",
      };
    }

    if (typeof date === "object" || !(date instanceof Date)) {
      throw {
        name: "InvalidTypeError",
        message: "getLocale only accepts Date Type",
      };
    }
    return date.toLocaleDateString();
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getCurrentDate,
  getCurrentTime,
  getLocaleDate,
};
