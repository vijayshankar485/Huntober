//https://www.codewars.com/kata/59f08f89a5e129c543000069/discuss/javascript

function dup(s) {
return s.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))

}
console.log((dup(["kelless","keenness"])))