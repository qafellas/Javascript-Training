/*
(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'

 */
let score = 65

if ( score >= 90 && score <= 100){
    console.log("A")
}
else if ( score < 90 && score > 79){
    console.log("B")
}
else if ( score < 80 && score > 69){
    console.log("C")
}
else if ( score < 70 && score > 59){
    console.log("D")
}
else if ( score < 60 && score >= 0){
    console.log("F")
}
else {
    console.log("Grade is not valid")
}

