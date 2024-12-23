const arrayInt=[10,20,30,40,50]
const arrayStr=["arrayStr1","arrayStr2","arrayStr3","arrayStr4","arrayStr5"]
console.log(arrayInt,"original array before mutating")

const constArrayInt= arrayInt.map((ai)=>ai*2)
console.log(constArrayInt)

var varArrayInt= arrayInt.map((ai)=>ai*2)
console.log(varArrayInt)

let letArrayInt= arrayInt.map((ai)=>ai*2)
console.log(letArrayInt)

console.log(arrayInt,"original array after mutating")