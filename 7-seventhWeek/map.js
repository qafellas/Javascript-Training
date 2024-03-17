// square of each element , 7^2 = 49
const numbers = [1,2,3,4,5,6,7,8,9,10]

let arr = []
for(const num of numbers){
    arr.push(num*num)
}
console.log(arr)

let squareArray = numbers.map( num => num*num)
console.log(squareArray)
