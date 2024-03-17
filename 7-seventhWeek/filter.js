//numbers divisible by 2
const numbers = [1,2,3,4,5,6,7,8,9,10]
// let arr = []
// for (const element of numbers) {
//     if(element % 2 == 0){
//         arr.push(element)
//     }
// }
// console.log(arr)

let evenArr = numbers.filter( num => num % 2 == 0)
console.log(evenArr) //[2,4,6,8,10]
