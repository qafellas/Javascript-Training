//Reverse ‘Orlando’ string ---> odnalrO

//Create function reversing any string

let reversingString = function (str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reversingString("Birsen"))
console.log(reversingString("Orhan"))
console.log(reversingString("Recep"))
console.log(reversingString("xyz"))


