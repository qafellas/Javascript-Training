//A: Parent
class A {
    a = 100

    display() {
        console.log(this.a)
    }
}

//B: Child
class B extends A {
    b = 200

    show() {
        console.log(this.b)
    }
}

class C extends B{
    c = 50
    print(){
        console.log(this.c)
    }
}

let cObj = new C()

cObj.display()
cObj.show()
cObj.print()
