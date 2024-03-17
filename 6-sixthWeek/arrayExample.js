//Find the max/min number in array
let arr1 = [-2, 87, 65, 101, 0, 10.5, 1000, -23, 97]
let arr2 = [2, 9, -100, 44, 123, 10.5, 66, -23, 97]

/**
 * Find max number in array
 * @param {*} arr 
 * @returns 
 */
let maxNumOfArray = function(arr){ //arr = arr1
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
           max = arr[i] 
        }
    }
    return max
}

/**
 * Find min number in array
 * @param {*} arr 
 * @returns 
 */
let minNumOfArray = function(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < min){
           min = arr[i] 
        }
    }
    return min
}

console.log(maxNumOfArray(arr1))
console.log(minNumOfArray(arr1))

console.log(maxNumOfArray(arr2))
console.log(minNumOfArray(arr2))





