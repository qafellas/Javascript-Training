
let f1 = 0
let f2 = 1 
let nextNum;// declaration

for (let i = 1; i <=12; i++){
    console.log(f1)
    nextNum = f1 + f2 
    f1 = f2
    f2 = nextNum
    
}