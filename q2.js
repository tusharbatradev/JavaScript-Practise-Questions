// Given an array of strings, return the first unique string.

let array = ["apple", "banana", "apple", "orange", "banana", "grape"];

function uniqueString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      console.log(arr[i]); 
      return;
    }
  }

  console.log("No unique string");
}

uniqueString(array); 
