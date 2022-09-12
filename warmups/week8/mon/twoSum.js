// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// how to run this in node - cd into the folder this js file is stores and type `node twoSum.js` into the terminal
const twoSum = (nums, target) => {

    // make an object for our output
    const output = {}

    // loop through our array 
    for (let i = 0; i < nums.length; i ++) {
        // get the difference 
        const difference = target - nums[i];
        // console.log(difference);

        // check if this difference exists in the output

        if ( difference in output ) {
            // returns two numbers
            console.log([output[difference], i]);   
        }

        // add the number and its index if its not in the output
        output[nums[i]] = i
        // console.log(output)
    }

}


twoSum([2,7,11,15], 9); // 0, 1
twoSum([2,3,4], 6); // 0, 2