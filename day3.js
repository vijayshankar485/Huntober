// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
// Hint: ||reduce the array adding each value to get a sum and make sure the current value is treated as a Number by using Number()|| 
// From: https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
  
    let strtoNum= x.map(item=>Number(item))
    const initialValue = 0;
    let sum = strtoNum.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue)
     return sum
  }
  console.log(sumMix([9, 3, '7', '3']))