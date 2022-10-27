// Nth Smallest Element (Array Series #4)
// Task
// Given an array/list of integers, find the Nth smallest element in the array.
// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// https://www.codewars.com/kata/5a512f6a80eba857280000fc/javascript

function nthSmallest(arr,n){
    return arr.sort((a,b)=>a-b)[n-1]
  }
  console.log(nthSmallest([3,1,2], 2))