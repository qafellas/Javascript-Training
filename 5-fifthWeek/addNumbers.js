//function --- > 1 den n kadar olan sayilarin toplami 

let numSum = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

console.log (numSum(100))
console.log (numSum(200))
console.log (numSum(1000))