// Merge two arrays

var merge = function (nums1, m, nums2, n) {
  let unsortedArray = [];

  // pushing nums1 in unsorted array
  for (let i = 0; i < m; i++) {
    unsortedArray.push(nums1[i]);
  }

  // pushing nums1 in unsorted array
  for (let i = 0; i < n; i++) {
    unsortedArray.push(nums2[i]);
  }
  
  let sortedArray = unsortedArray.sort();
  console.log(sortedArray)
};

merge([1,2,3,0,0,0],3,[2,5,6],3)
