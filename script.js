
function convertToRoman(num) {
  // Define the Roman numeral symbols and their values in descending order
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  // Loop through each Roman numeral symbol
  for (const [symbol, value] of romanNumerals) {
    // Determine how many times the Roman numeral fits into the number
    while (num >= value) {
      result += symbol; // Append the symbol to the result
      num -= value;     // Subtract the value from the number
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
