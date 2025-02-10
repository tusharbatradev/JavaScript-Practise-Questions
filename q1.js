// Write a function to merge two sorted arrays into one sorted array.
let array1 = [5, 8, 12, 14, 16, 28];
let array2 = [9, 22, 30, 39, 41, 44];

let emptyArray = [];

for (let i = 0; i < array1.length; i++) {
  emptyArray.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
  emptyArray.push(array2[i]);
}

let sortedArray = emptyArray.sort((a, b) => a - b);
console.log(sortedArray);
