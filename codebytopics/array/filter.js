const arrayInt=[10,20,30,40,50]
const arrayStr=["arrayStr1","arrayStr2","arrayStr3","arrayStr4","arrayStr5"]
console.log(arrayInt,"original array before filter")

const arrayFilteredInt= arrayInt.filter((ai)=>ai>20)
console.log(arrayFilteredInt)

console.log(arrayInt,"original array after filter")