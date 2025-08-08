// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
  let sum = 0;
  for (const number of arr) {
    sum = sum + number;
  }
  const average = sum / size;
  return average;
}

const integersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const size = integersArray.length;
const result = make_avg(integersArray, size);
console.log(result);
