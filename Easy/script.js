// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

//  let firstSet = [10, 15, 25];
// let secondSet = [22, 100, 69];
// let thirdSet = [90, 76, 58];

// function average (arr){
//     let sum = 0;
//     var totalNum = arr.length;

//     return sum/totalNum;
    
// }
// console.log(average([1,4,7]))


function average(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
};
console.log(average([14,12,9]))
console.log(average([15,22,19]))
console.log(average([1,4,7]))
