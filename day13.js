//The average length
//https://www.codewars.com/kata/5a430359e1ce0e35540000b1/
function averageLength(arr) { 
intialValue=0
let sum=arr.map(item=>item.length).reduce((pv,cv)=>pv+cv,intialValue)
avgLength=Math.round(sum/arr.length)
return arr.map(item=>item[0].repeat(avgLength))
}


// 2nd solution

// function averageLength(arr) { 
   
//     const avgLength = Math.round(arr.join('').length/arr.length)
//     return arr.map( str => str[0].repeat(avgLength))
//   }