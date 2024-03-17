//Polymorphism: It means an object reference to behave in different forms
class Shape {
    draw() {
        return 'I am a generic shape'
    }
}

class Square extends Shape{
    draw() {
        return 'I am a square' 
    }
}

class Circle extends Shape {
    draw(){
        return 'I am a circle'
    }
}

let s = new Shape()
console.log(s.draw())

s = new Square()
console.log(s.draw())

s = new Circle()
console.log(s.draw())