// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven(number) {
  if (number % 2 == 1) {
    const oddNum = number * 2;
    return oddNum;
  } else if (number % 2 == 0) {
    const evenNum = number / 2;
    return evenNum;
  }
}

const result = oddOrEven(4);
console.log(result);
