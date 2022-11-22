// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
    let result = arr.filter(function(x){
       return mixArr.indexOf(x)===-1
    })
    return result.length>0?result[0]:0
}
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))
