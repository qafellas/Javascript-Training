const person = {
    name: "Hakan",
    age: 20,
    grades: {
        science: 70,
        math: 80
    },
    greet: function() { console.log('Hello World') }
}

console.log(typeof(person))
console.log(person)

// Dot notation
console.log(person.name)
console.log(person.age)
console.log(person.grades.science)
console.log(person.grades.math)
console.log(person.greet())

//Bracket Notation
console.log(person['name'])
console.log(person['age'])
console.log(person['grades']['science'])
console.log(person['grades']['math'])
//console.log(person['greet()'])