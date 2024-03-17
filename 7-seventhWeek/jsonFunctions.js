const person = {
    name: "Hakan",
    age: 20,
    grades: {
        science: 70,
        math: 80
    }
}

console.log(typeof(person))

console.log(Object.keys(person))
console.log(Object.values(person))

console.log(typeof (JSON.stringify(person) ))

const person2 = '{"name": "Orhan", "age":32}'

console.log( typeof (JSON.parse(person2) ))