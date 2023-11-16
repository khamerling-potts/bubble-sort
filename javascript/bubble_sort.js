function bubbleSort(arr) {
  debugger;
  let swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const next = arr[i + 1];
    const element = arr[i];
    if (next < element) {
      arr[i] = next;
      arr[i + 1] = element;
      swaps++;
    }
  }
  if (swaps === 0) return arr;
  return bubbleSort(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));

  console.log("expecting [5, 7, 9, 12, 15, 17]");
  console.log(bubbleSort([15, 7, 5, 17, 12, 9]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
/* 
for each element, index in array
  next element = array[i+1]
  if next element is less than element
    swap using temp variables
    swaps plus 1
  if swaps is zero, return array
  otherwise, run function again

  O(n^2)
*/
