// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2




function findAverage(array) {
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        avg = num;
    }
    avg = avg / array.length;
    return avg;
};

console.log(findAverage([2, 9, 40]));

// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0

// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3

// Output: -1.

nums = [4,5,6,7,0,1,2]

function targetValue(x){
    var index = nums.indexOf(x)
     console.log(index) 
     if (index === undefined){
         console.log(-1)
     }
     
    }
     targetValue(7);
     targetValue(5);
     targetValue(60);


//      HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 

// Create a single function that takes an input className and updates the body's classList to ONLY include that className

// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 



function colorChange(color){
    document.body.style.backgroundColor = color;
}

// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3 

// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1


// sort coins lowest to highest
// create variable that keep track of how much you have left until amounts to 0
// create variable to keep track of amount of coins
    // create loop 
    //decrement the highest coin from remaining amout 
    // add 1 to variable to keep track of coins
//if remaining amount is 0 output variable from line 90
//else output -1 




