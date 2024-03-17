/*const str =‘Javascript is so cool and easy’
Reverse each word of the string by
using array*/

const str ='Javascript is so cool and easy'
let arr = str.split(' ')
console.log(arr)


for(let i = 0; i < arr.length; i++){ // i=0, j=0 --- i=0, j=1 -- i=1 
    let reversed = ''
    for(let j = arr[i].length - 1; j >= 0 ; j--){
       reversed += arr[i][j]
    }
    console.log(reversed)
    
}




