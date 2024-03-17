// level, Level, leVel , ...

let str = 'level'

let reversingString = function (str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

if ( str.toLowerCase() === reversingString(str).toLowerCase()){
    console.log(`${str} is a polindrome word`)
}
else {
    console.log(`${str} is not polindrome`)
}

