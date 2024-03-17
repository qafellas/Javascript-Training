//Print all leters of ‘Orlando’ tex in the console with loop
//0123456

/*let str = 'Orlando'

console.log(str.length)

for(let i = str.length - 1; i >= 0; i-- ){
    console.log(str[i])
}*/

let stringLetters = function(str){
    let empty = ''
    for(let i = str.length - 1; i >=0; i-- ){
        empty += str[i] 
    }
    return empty 
}

console.log(stringLetters('hey yo bla'))

console.log(stringLetters('Java, Pthon and Javascript'))