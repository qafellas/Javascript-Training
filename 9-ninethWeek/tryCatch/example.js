// code to show try ... catch in a program

const numerator= 100, denominator = 5

try {
    console.log(numerator/denominator)

    //forgot to define variable a
    console.log(a)
} 
catch (error) {
    console.log(`Error message: ` + error)
}