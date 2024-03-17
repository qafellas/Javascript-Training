// if("2" === 2 ){ // == vs ===
//     console.log("Equal")
// }
// else {
//     console.log("Not equal")
// }

//Ternary operator
// condition ? exprIfTrue : exprIfFalse 

let ternaryOp = ("2" === 2 ) ? "Equal" : "Not equal"
console.log(`Result: ${ternaryOp}`)

/*
let day = "Fri"

let isWeekDay = (day == "Mon") || (day == "Tue") || (day == "Wed") || (day == "Thr") || (day == "Fri")

let isWeekend = (day == "Sat") || (day == "Sun") 

if(isWeekDay == true){
    console.log(`${day} is week day`)
} 
else if (isWeekend == true){
    console.log(`${day} is  weekend day`)
}
else {
   console.log(`${day} value is not valid`) 
}
 */
 // condition1 ? ifCondition1True : condition2 ? ifCondition2True : IfNonTrue
let day = "se3"

let isWeekDay = (day == "Mon") || (day == "Tue") || (day == "Wed") || (day == "Thr") || (day == "Fri")

let isWeekend = (day == "Sat") || (day == "Sun") 

let result = (isWeekDay) ? `${day} is week day` :  (isWeekend) ? `${day} is  weekend day` : `${day} value is not valid`

console.log(result)