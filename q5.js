// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// nums = [3, 2, 3]
// - n = 3, toh ⌊3/2⌋ = 1
// - Majority element wo hoga jo array me **1 se zyada** baar aata hai.
// - "3" do baar aata hai, toh majority element = 3

var majorityElement = (nums) => {
  let target = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (target === nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      target = nums[i];
      count = 1;
    }
  }

  console.log(target);
};

majorityElement([3, 2, 3]);
