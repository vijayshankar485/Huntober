//Array.diff
//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
  let result = a.filter(e=> !b.includes(e))
  return result
} 
console.log(arrayDiff([1,2], [1]))