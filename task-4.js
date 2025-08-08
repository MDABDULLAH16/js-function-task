// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(binary) {
  let count = 0;
  for (const zero of binary) {
    if (zero === "0") {
      count++;
    }
  }
  return count;
}

const binaryString = "000001010101010";
const result = count_zero(binaryString);
console.log(result);
