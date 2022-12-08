const math = require("mathjs");

/**
 * @Desc Returns the rounded off square root.
 * @params
 * number Number
 * round Number
 * @returns Number
 */
function roundedSquareRoot(num, round = 1) {
  return math.round(math.sqrt(num), round);
}

//log square root of 5 rounded off to 5 decimal positions.
console.log(roundedSquareRoot(5, 5));
//log an complex object type
console.log(roundedSquareRoot(-5, 5));
//throw error as negative rounding is not possible
console.log(roundedSquareRoot(5, -1));
