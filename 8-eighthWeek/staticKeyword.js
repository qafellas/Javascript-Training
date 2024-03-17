class Cat {
    place = 'Home'
    static eye = 'blue'

    constructor(catName, catAge, catColor){
       this.name = catName,
       this.age = catAge,
       this.color = catColor
    }

    displayCatInfo(){
        console.log(this.name, this.age, this.color)
    }

    static numberOfLegs(){
        console.log(`Cats have 4 legs`)
    }

    placeToLive(){
        console.log(`Cat lives in ${this.place}`)
    }
}

let c = new Cat('Tekir', 3, 'Ginger')
c.displayCatInfo()

console.log(Cat.eye)
Cat.numberOfLegs()

