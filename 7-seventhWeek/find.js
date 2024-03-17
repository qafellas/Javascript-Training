const strArr = ["Ali", 'Veli', 'Hatice', 'Mucahit', "Can"]

let person = strArr.find( n => n.startsWith('H'))
console.log(person)


let arr = strArr.filter ( p => p.length <= 6 )
console.log(arr)