// String Transformer
//https://www.codewars.com/kata/5878520d52628a092f0002d0/javascript
function stringTransformer(str) {
    let newStr = str.split(" ").reverse()
    let str1 =newStr[0]
    let str2 = newStr[1]
    let arr1 =str1.split("")
    let arr2 = str2.split("")
    let res1=arr1.map(function(c){
    return c=== c.toUpperCase()?c.toLowerCase():c.toUpperCase()
    }).join('')
    let res2=arr2.map(function(c){
      return c=== c.toUpperCase()?c.toLowerCase():c.toUpperCase()
      }).join('')
    let result = res1.concat(" "+res2)
    return result
  }
  console.log(stringTransformer('Example string'))